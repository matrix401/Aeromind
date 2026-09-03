import type { RealMove } from "@/lib/types";

/**
 * The single source of real completed-move case studies. Starts empty —
 * per the project's non-negotiable truth policy, a move only belongs
 * here once it has genuinely happened, the customer's permission to
 * publish is on record (permissionStatus: "granted"), and real photos
 * and pricing exist. Every page that shows moves (homepage, service,
 * locality, route pages) filters this same array — see getMovesFor()
 * below — so adding one verified entry here is enough to make it appear
 * everywhere it's relevant, with no other code changes.
 *
 * The same entries are the raw material for Google Business Profile
 * posts, Instagram/Facebook captions, YouTube Shorts, and written case
 * studies — see docs/content-marketing-playbook.md for how each field
 * maps to those formats.
 *
 * EXAMPLE (commented out — do not uncomment without real data):
 *
 * {
 *   id: "SLS-MOVE-0001",
 *   serviceType: "Local house shifting",
 *   pickupLocality: "[VERIFY]",
 *   destination: "[VERIFY]",
 *   date: "[VERIFY]",
 *   sizeOrLoad: "[VERIFY]",
 *   vehicle: "[VERIFY]",
 *   crewSize: "[VERIFY]",
 *   durationHours: "[VERIFY]",
 *   priceBand: "[VERIFY]",
 *   packingMaterials: "[VERIFY]",
 *   challenges: "[VERIFY]",
 *   resolution: "[VERIFY]",
 *   customerReview: "[INSERT_REAL_REVIEW]",
 *   googleReviewLink: "[VERIFY]",
 *   images: [{ src: "[INSERT_REAL_MOVE_PHOTO]", alt: "..." }],
 *   permissionStatus: "pending",
 *   appearsOn: ["homepage", "moving-services/local-house-shifting-hyderabad"],
 *   relatedServiceSlug: "local-house-shifting-hyderabad",
 * }
 */
export const realMoves: RealMove[] = [];

/**
 * Filters to only customer-approved moves relevant to a given context.
 * Pass at most one of the slug filters — a move can be tagged for
 * multiple contexts via appearsOn, but this keeps each page's query
 * simple and explicit about which relationship it's asking for.
 */
export function getMovesFor(filter: {
  serviceSlug?: string;
  localitySlug?: string;
  routeSlug?: string;
  page?: "homepage";
  limit?: number;
}): RealMove[] {
  const matches = realMoves.filter((move) => {
    if (move.permissionStatus !== "granted") return false;
    if (filter.serviceSlug && move.relatedServiceSlug !== filter.serviceSlug) return false;
    if (filter.localitySlug && move.relatedLocalitySlug !== filter.localitySlug) return false;
    if (filter.routeSlug && move.relatedRouteSlug !== filter.routeSlug) return false;
    if (filter.page && !move.appearsOn.includes(filter.page)) return false;
    return true;
  });
  return filter.limit ? matches.slice(0, filter.limit) : matches;
}
