/**
 * Shared content shapes. Real data files (services, localities, routes,
 * reviews, completed moves) are populated in later phases as verified
 * business facts come in — these types are the contract the card
 * components and future data files are built against.
 */

export type Review = {
  name: string;
  route: string;
  date: string;
  service: string;
  reviewUrl: string;
  videoUrl?: string;
};

/**
 * A single verified completed move — the Phase 14 "real move" data model.
 * The array of these (content/moves.ts) is the one source every page
 * (homepage, service, locality, route pages) and every marketing channel
 * (GBP posts, social, case studies) pulls real proof from. It starts
 * empty and stays empty until a move is genuinely completed, the
 * customer's permission to publish is on record, and photos/pricing are
 * supplied — see the truth policy notes in content/moves.ts.
 */
export type RealMove = {
  id: string;
  serviceType: string;
  pickupLocality: string;
  destination: string;
  date: string;
  sizeOrLoad: string;
  vehicle: string;
  crewSize: string;
  durationHours: string;
  priceBand: string;
  packingMaterials: string;
  challenges: string;
  resolution: string;
  customerReview?: string;
  googleReviewLink?: string;
  images: { src: string; alt: string }[];
  videoUrl?: string;
  /** Never render a move whose status isn't "granted", anywhere. */
  permissionStatus: "granted" | "pending" | "not_granted";
  /** Which pages this move is allowed to surface on. */
  appearsOn: string[];
  relatedServiceSlug?: string;
  relatedLocalitySlug?: string;
  relatedRouteSlug?: string;
};

export type Locality = {
  slug: string;
  name: string;
  region: string;
  published: boolean;
};

export type RouteLane = {
  slug: string;
  from: string;
  to: string;
  deliveryTimeRange?: string;
  priceRange?: string;
};

export type ServiceSummary = {
  slug: string;
  title: string;
  description: string;
  href: string;
};
