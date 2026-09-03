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
  images: { src: string; alt: string }[];
  reviewUrl?: string;
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
