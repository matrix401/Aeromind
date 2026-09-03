import { homepageRoutes } from "@/content/routes";
import type { RouteLane } from "@/lib/types";

export type RouteDetail = RouteLane & {
  h1: string;
  metaDescription: string;
  intro: string;
  faqs: { question: string; answer: string }[];
};

/**
 * One template, twelve routes — each page gets genuinely different H1,
 * intro and FAQ copy (naming the actual destination throughout) so pages
 * aren't literal duplicates of each other, while price/time specifics stay
 * [VERIFY_...] until real per-route data is supplied.
 */
export const routeDetails: RouteDetail[] = homepageRoutes.map((route): RouteDetail => ({
  ...route,
  h1: `Hyderabad to ${route.to} Packers and Movers`,
  metaDescription: `Household and office relocation from Hyderabad to ${route.to} — packing, transport, delivery timelines and a written quotation.`,
  intro: `Moving from Hyderabad to ${route.to}? We handle packing, loading, interstate transport and delivery, with a written quotation before your move begins.`,
  faqs: [
    { question: `How long does delivery from Hyderabad to ${route.to} take?`, answer: "[VERIFY_DELIVERY_TIME_RANGE] — confirmed at the time of booking based on current load and route conditions." },
    { question: "Dedicated or shared vehicle for this route?", answer: "[VERIFY_SHARED_VS_DEDICATED_POLICY] — both may be available; ask your coordinator which suits your budget and timeline." },
    { question: `Can I track my shipment to ${route.to}?`, answer: "[VERIFY_TRACKING_CAPABILITY] — see the Track Move page for what's currently available." },
    { question: "What documents do I need for this move?", answer: "[VERIFY_INTERSTATE_DOCUMENTATION_REQUIREMENTS] — your coordinator will confirm what's needed for this route." },
    { question: `Do you also move bikes or cars to ${route.to}?`, answer: "Yes — see our Bike Transport and Car Transport pages, available on the same route." },
  ],
}));

export function getRouteBySlug(slug: string): RouteDetail | undefined {
  return routeDetails.find((route) => route.slug === slug);
}
