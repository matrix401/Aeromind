import type { Attribution } from "@/lib/attribution";

export type LeadPayload = {
  leadId: string;
  formType: "quick-quote" | "moving" | "business-logistics" | "landing";
  submittedAt: string;
  data: Record<string, unknown>;
  attribution: Attribution;
};

export type LeadDeliveryResult =
  | { ok: true; channel: "webhook" | "email" }
  | { ok: false; reason: "not_configured" }
  | { ok: false; reason: "delivery_failed"; detail: string };

/**
 * Lead delivery adapter. Tries a configured webhook first, then a
 * configured email destination, in that order. Neither is hardcoded —
 * both come from environment variables documented in .env.example.
 *
 * If nothing is configured, this returns `{ ok: false, reason:
 * "not_configured" }` rather than pretending the lead was captured — the
 * caller (src/app/api/leads/route.ts) must surface this as a real error to
 * the visitor, per the project's non-negotiable truth policy. It never
 * silently reports success for a submission that was never actually
 * delivered anywhere.
 */
export async function deliverLead(payload: LeadPayload): Promise<LeadDeliveryResult> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      // Flattened (not nested) body: Formspree-style email endpoints render
      // top-level fields directly in the notification email, and a flat
      // shape is also easier for Zapier/Make to map from than nested JSON.
      const flatBody: Record<string, unknown> = {
        _subject: `New ${payload.formType} enquiry — ${payload.leadId}`,
        leadId: payload.leadId,
        formType: payload.formType,
        submittedAt: payload.submittedAt,
        ...payload.data,
      };
      for (const [key, value] of Object.entries(payload.attribution)) {
        if (value !== undefined) flatBody[`attribution_${key}`] = value;
      }
      delete flatBody.website; // honeypot field — never useful in the notification

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(flatBody),
      });
      if (!response.ok) {
        return { ok: false, reason: "delivery_failed", detail: `Webhook responded ${response.status}` };
      }
      return { ok: true, channel: "webhook" };
    } catch (error) {
      return { ok: false, reason: "delivery_failed", detail: (error as Error).message };
    }
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.LEAD_EMAIL_TO;
  const emailFrom = process.env.LEAD_EMAIL_FROM;
  if (resendApiKey && emailTo && emailFrom) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailFrom,
          to: emailTo,
          subject: `New ${payload.formType} enquiry — ${payload.leadId}`,
          text: JSON.stringify(payload, null, 2),
        }),
      });
      if (!response.ok) {
        return { ok: false, reason: "delivery_failed", detail: `Email API responded ${response.status}` };
      }
      return { ok: true, channel: "email" };
    } catch (error) {
      return { ok: false, reason: "delivery_failed", detail: (error as Error).message };
    }
  }

  // Nothing configured yet. Log server-side so nothing is silently lost
  // during development, but do not report success.
  console.warn(
    `[leads] No LEAD_WEBHOOK_URL or Resend email destination configured — lead ${payload.leadId} was not delivered anywhere.`,
    payload,
  );
  return { ok: false, reason: "not_configured" };
}
