import { business } from "@/config/business";

/**
 * Builds a wa.me link with a prefilled message so a coordinator opens the
 * chat already knowing what the enquiry was about.
 */
export function buildWhatsappLink(message: string, phoneOverride?: string): string {
  const digits = (phoneOverride ?? business.contact.whatsappDisplay).replace(/\D/g, "");
  const base = phoneOverride
    ? `https://wa.me/${digits}`
    : business.contact.whatsappHref;
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}text=${encodeURIComponent(message)}`;
}

export function movingQuoteWhatsappMessage(input: {
  leadId: string;
  pickupLocation: string;
  destination: string;
  whatToMove: string;
}): string {
  return [
    `Hi Sharma Logistics, I just submitted a moving quote request.`,
    `Reference: ${input.leadId}`,
    `From: ${input.pickupLocation}`,
    `To: ${input.destination}`,
    `Moving: ${input.whatToMove}`,
  ].join("\n");
}

export function businessLogisticsWhatsappMessage(input: {
  leadId: string;
  pickupCity: string;
  destinationCity: string;
  goodsType: string;
}): string {
  return [
    `Hi Sharma Logistics, I just submitted a business logistics enquiry.`,
    `Reference: ${input.leadId}`,
    `From: ${input.pickupCity}`,
    `To: ${input.destinationCity}`,
    `Goods: ${input.goodsType}`,
  ].join("\n");
}
