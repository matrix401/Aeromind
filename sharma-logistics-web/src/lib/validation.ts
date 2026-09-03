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
