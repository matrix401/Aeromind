import { z } from "zod";

/**
 * Shared validation building blocks. Real quote-form schemas (Phase 5,
 * Path A / Path B) extend these rather than redefining phone/name rules
 * per form.
 */

// Indian mobile numbers: 10 digits, starting 6-9. Accepts an optional +91.
export const indianMobileSchema = z
  .string()
  .trim()
  .transform((v) => v.replace(/[\s-]/g, ""))
  .pipe(
    z
      .string()
      .regex(/^(?:\+91)?[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  );

export const nameSchema = z
  .string()
  .trim()
  .min(2, "Enter your name")
  .max(80, "Name is too long");

export const consentSchema = z.literal(true, {
  error: "Please accept to be contacted about your enquiry",
});

// Spam trap: a field real visitors never see or fill in. Any submission
// with this populated is rejected server-side, never stored as a lead.
export const honeypotSchema = z
  .string()
  .max(0, "Spam check failed")
  .optional()
  .default("");

export const quickQuoteSchema = z.object({
  movingFrom: z.string().trim().min(2, "Enter the pickup location"),
  movingTo: z.string().trim().min(2, "Enter the destination"),
  whatToMove: z.string().trim().min(1, "Select what you want to move"),
  movingDate: z.string().trim().min(1, "Select a moving date"),
  mobile: indianMobileSchema,
  website: honeypotSchema,
});

export type QuickQuoteInput = z.infer<typeof quickQuoteSchema>;

// Path A — household / office / vehicle quote flow (4 steps).
export const movingQuoteSchema = z.object({
  moveScope: z.enum(["local", "interstate"], { error: "Select local or interstate" }),
  pickupLocation: z.string().trim().min(2, "Enter the pickup locality or pincode"),
  destination: z.string().trim().min(2, "Enter the destination"),
  movingDate: z.string().trim().min(1, "Select a moving date"),
  whatToMove: z.enum(
    ["house", "office", "bike", "car", "few-items", "storage", "packing-only"],
    { error: "Select what you want to move" },
  ),
  quoteMethod: z.enum(
    ["inventory", "whatsapp-photos", "video-survey", "home-survey", "call-me"],
    { error: "Select how you'd like to get your quote" },
  ),
  name: nameSchema,
  mobile: indianMobileSchema,
  contactPreference: z.enum(["call", "whatsapp"], { error: "Select call or WhatsApp" }),
  language: z.enum(["hindi", "telugu", "english"], { error: "Select a language" }),
  consent: consentSchema,
  website: honeypotSchema,
});

export type MovingQuoteInput = z.infer<typeof movingQuoteSchema>;

// Per-step slices of movingQuoteSchema, for validating one wizard step at a
// time without re-deriving a dynamic pick mask (which zod can't type well).
export const movingQuoteStepSchemas = {
  1: movingQuoteSchema.pick({
    moveScope: true,
    pickupLocation: true,
    destination: true,
    movingDate: true,
  }),
  2: movingQuoteSchema.pick({ whatToMove: true }),
  3: movingQuoteSchema.pick({ quoteMethod: true }),
  4: movingQuoteSchema.pick({
    name: true,
    mobile: true,
    contactPreference: true,
    language: true,
    consent: true,
  }),
} as const;

// Path B — business logistics enquiry (single form).
export const businessLogisticsQuoteSchema = z.object({
  pickupCity: z.string().trim().min(2, "Enter the pickup city"),
  destinationCity: z.string().trim().min(2, "Enter the destination city"),
  goodsType: z.string().trim().min(2, "Describe the type of goods"),
  approxWeight: z.string().trim().min(1, "Enter an approximate weight, or say you're not sure"),
  numberOfPackages: z.string().trim().min(1, "Enter the number of packages"),
  loadType: z.enum(["full-truck", "part-load"], { error: "Select full truck or part load" }),
  pickupDate: z.string().trim().min(1, "Select a pickup date"),
  loadingRequired: z.boolean(),
  unloadingRequired: z.boolean(),
  gstInvoiceRequired: z.boolean(),
  name: nameSchema,
  businessName: z.string().trim().min(1, "Enter your business name"),
  mobile: indianMobileSchema,
  consent: consentSchema,
  website: honeypotSchema,
});

export type BusinessLogisticsQuoteInput = z.infer<typeof businessLogisticsQuoteSchema>;
