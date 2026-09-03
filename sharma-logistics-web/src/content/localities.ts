/**
 * Hyderabad coverage, grouped by region, per the approved information
 * architecture (Phase 1). Listing an area here reflects the general service
 * area of a Hyderabad-based mover, not a per-locality verified claim —
 * individual locality pages stay unpublished (see Locality.published)
 * until real local evidence (photos, reviews, price factors) exists for
 * that specific area, per the no-doorway-pages rule.
 */

import type { Locality } from "@/lib/types";

export type LocalityRegion = {
  region: string;
  href: string;
  localities: string[];
};

export const localityRegions: LocalityRegion[] = [
  {
    region: "North Hyderabad & Secunderabad",
    href: "/locations/north-hyderabad",
    localities: [
      "Alwal",
      "Kompally",
      "Medchal",
      "Bowenpally",
      "Suchitra",
      "Jeedimetla",
      "Sainikpuri",
      "ECIL",
      "Malkajgiri",
    ],
  },
  {
    region: "West Hyderabad",
    href: "/locations/west-hyderabad",
    localities: [
      "Kukatpally",
      "KPHB",
      "Miyapur",
      "Nizampet",
      "Bachupally",
      "Chandanagar",
      "Hafeezpet",
      "Gachibowli",
      "Kondapur",
      "Madhapur",
      "HITEC City",
    ],
  },
  {
    region: "Central Hyderabad",
    href: "/locations/central-hyderabad",
    localities: [
      "Sanath Nagar",
      "Balanagar",
      "Ameerpet",
      "Begumpet",
      "Secunderabad",
      "Khairatabad",
      "Banjara Hills",
      "Jubilee Hills",
    ],
  },
  {
    region: "East Hyderabad",
    href: "/locations/east-hyderabad",
    localities: [
      "Uppal",
      "Habsiguda",
      "Tarnaka",
      "Nacharam",
      "Boduppal",
      "Nagole",
      "LB Nagar",
      "Dilsukhnagar",
    ],
  },
  {
    region: "South Hyderabad",
    href: "/locations/south-hyderabad",
    localities: [
      "Mehdipatnam",
      "Tolichowki",
      "Attapur",
      "Rajendranagar",
      "Shamshabad",
      "Manikonda",
      "Bandlaguda",
      "Vanasthalipuram",
    ],
  },
];

/**
 * The first 11 named locality pages from Phase 7 (Secunderabad gets its
 * own regional hub instead — see content/regions.ts). Every entry ships
 * with published: false: real per-locality evidence (local price factors,
 * building/lift access notes, local completed moves, local reviews) has
 * not been supplied yet, so these render as honest "coverage confirmed on
 * request" pages, noindexed, rather than fabricated unique SEO content.
 * Flip published to true only once real local evidence backs the page.
 */
export const draftLocalities: (Locality & { regionSlug: string; regionName: string })[] = [
  { slug: "kukatpally", name: "Kukatpally", region: "West Hyderabad", regionSlug: "west-hyderabad", regionName: "West Hyderabad", published: false },
  { slug: "medchal", name: "Medchal", region: "North Hyderabad & Secunderabad", regionSlug: "north-hyderabad", regionName: "North Hyderabad & Secunderabad", published: false },
  { slug: "sanath-nagar", name: "Sanath Nagar", region: "Central Hyderabad", regionSlug: "central-hyderabad", regionName: "Central Hyderabad", published: false },
  { slug: "alwal", name: "Alwal", region: "North Hyderabad & Secunderabad", regionSlug: "north-hyderabad", regionName: "North Hyderabad & Secunderabad", published: false },
  { slug: "kompally", name: "Kompally", region: "North Hyderabad & Secunderabad", regionSlug: "north-hyderabad", regionName: "North Hyderabad & Secunderabad", published: false },
  { slug: "bowenpally", name: "Bowenpally", region: "North Hyderabad & Secunderabad", regionSlug: "north-hyderabad", regionName: "North Hyderabad & Secunderabad", published: false },
  { slug: "jeedimetla", name: "Jeedimetla", region: "North Hyderabad & Secunderabad", regionSlug: "north-hyderabad", regionName: "North Hyderabad & Secunderabad", published: false },
  { slug: "balanagar", name: "Balanagar", region: "Central Hyderabad", regionSlug: "central-hyderabad", regionName: "Central Hyderabad", published: false },
  { slug: "miyapur", name: "Miyapur", region: "West Hyderabad", regionSlug: "west-hyderabad", regionName: "West Hyderabad", published: false },
  { slug: "gachibowli", name: "Gachibowli", region: "West Hyderabad", regionSlug: "west-hyderabad", regionName: "West Hyderabad", published: false },
  { slug: "kondapur", name: "Kondapur", region: "West Hyderabad", regionSlug: "west-hyderabad", regionName: "West Hyderabad", published: false },
];

export function getDraftLocalityBySlug(slug: string) {
  return draftLocalities.find((locality) => locality.slug === slug);
}
