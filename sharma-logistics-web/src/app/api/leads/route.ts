import { z } from "zod";
import { movingQuoteSchema, businessLogisticsQuoteSchema, landingQuoteSchema } from "@/lib/validation";
import { deliverLead } from "@/lib/leads";
import { isRateLimited, getClientKey } from "@/lib/rate-limit";
import { business } from "@/config/business";

const attributionSchema = z
  .object({
    utmSource: z.string().optional(),
    utmMedium: z.string().optional(),
    utmCampaign: z.string().optional(),
    utmTerm: z.string().optional(),
    utmContent: z.string().optional(),
    gclid: z.string().optional(),
    landingPage: z.string().optional(),
  })
  .default({});

const requestSchema = z.discriminatedUnion("formType", [
  z.object({ formType: z.literal("moving"), data: movingQuoteSchema, attribution: attributionSchema }),
  z.object({
    formType: z.literal("business-logistics"),
    data: businessLogisticsQuoteSchema,
    attribution: attributionSchema,
  }),
  z.object({ formType: z.literal("landing"), data: landingQuoteSchema, attribution: attributionSchema }),
]);

/**
 * Decides the quote outcome without ever fabricating an exact price.
 * Extend this once verified price-band data (Phase 6-8 content) exists —
 * today it can only ever say "survey required" or "estimator will confirm".
 */
function decideQuoteOutcome(
  formType: "moving" | "business-logistics" | "landing",
  data: Record<string, unknown>,
) {
  if (formType === "moving" && (data.quoteMethod === "home-survey" || data.quoteMethod === "video-survey")) {
    return "survey-required" as const;
  }
  return "estimator-will-confirm" as const;
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request.headers);
  if (isRateLimited(clientKey)) {
    return Response.json(
      { ok: false, error: "Too many requests. Please try again shortly, or call us directly." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Please check the form and try again.", issues: z.treeifyError(parsed.error) },
      { status: 400 },
    );
  }

  const { formType, data, attribution } = parsed.data;

  // Honeypot: a filled hidden field means a bot, not a real visitor.
  // Zod already caps it at length 0, but double-check explicitly here —
  // reject silently with a generic error rather than confirming the trap.
  if ("website" in data && data.website) {
    return Response.json({ ok: false, error: "Please check the form and try again." }, { status: 400 });
  }

  const leadId = `SLS-${Date.now().toString(36).toUpperCase()}`;
  const quoteOutcome = decideQuoteOutcome(formType, data as Record<string, unknown>);

  const result = await deliverLead({
    leadId,
    formType,
    submittedAt: new Date().toISOString(),
    data,
    attribution,
  });

  if (!result.ok && result.reason === "not_configured") {
    // Never report success for a lead that was never actually delivered
    // anywhere — see the truth policy in src/lib/leads.ts.
    return Response.json(
      {
        ok: false,
        error:
          "We couldn't submit your request automatically right now. Please call or WhatsApp us directly and we'll help immediately.",
        leadId,
        fallback: { phone: business.contact.phoneHref, whatsapp: business.contact.whatsappHref },
      },
      { status: 503 },
    );
  }

  if (!result.ok) {
    return Response.json(
      {
        ok: false,
        error: "Something went wrong sending your request. Please try again or call us.",
        leadId,
        fallback: { phone: business.contact.phoneHref, whatsapp: business.contact.whatsappHref },
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    leadId,
    quoteOutcome,
    coordinatorName: "[ASSIGNED_COORDINATOR]",
    responseTime: business.quotationResponseTime,
  });
}
