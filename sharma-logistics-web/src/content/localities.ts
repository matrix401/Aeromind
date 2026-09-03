/**
 * Hyderabad coverage, grouped by region, per the approved information
 * architecture (Phase 1). Listing an area here reflects the general service
 * area of a Hyderabad-based mover, not a per-locality verified claim —
 * individual locality pages stay unpublished (see Locality.published)
 * until real local evidence (photos, reviews, price factors) exists for
 * that specific area, per the no-doorway-pages rule.
 */

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
