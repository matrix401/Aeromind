export type RegionHub = {
  slug: string;
  name: string;
  h1: string;
  metaDescription: string;
  intro: string;
  localities: string[];
  nearbyAreas?: string[];
  faqs: { question: string; answer: string }[];
};

/**
 * The six regional hub pages from Phase 7. These describe general
 * coverage for a side of the city — not hyper-local specifics, which stay
 * unpublished per the locality-draft rule (see draftLocalities in
 * localities.ts) until real per-area evidence exists.
 */
export const regionHubs: RegionHub[] = [
  {
    slug: "north-hyderabad",
    name: "North Hyderabad & Secunderabad",
    h1: "Packers and Movers in North Hyderabad",
    metaDescription:
      "Packers and movers serving North Hyderabad and Secunderabad — Alwal, Kompally, Medchal, Bowenpally and nearby areas.",
    intro:
      "Home and office moves across North Hyderabad and Secunderabad — including Alwal, Kompally, Medchal, Bowenpally, Suchitra, Jeedimetla, Sainikpuri, ECIL and Malkajgiri.",
    localities: ["Alwal", "Kompally", "Medchal", "Bowenpally", "Suchitra", "Jeedimetla", "Sainikpuri", "ECIL", "Malkajgiri"],
    faqs: [
      { question: "Do you serve areas across North Hyderabad?", answer: "Yes — call or WhatsApp us with your exact address to confirm coverage and get a written quote." },
      { question: "Does distance from central Hyderabad affect pricing?", answer: "Distance is one of several price factors — see the Charges page for the full list." },
      { question: "Can I book a local move within this area?", answer: "Yes — local moves within North Hyderabad and Secunderabad are handled the same way as any other Hyderabad local move." },
    ],
  },
  {
    slug: "west-hyderabad",
    name: "West Hyderabad",
    h1: "Packers and Movers in West Hyderabad",
    metaDescription:
      "Packers and movers serving West Hyderabad — Kukatpally, Miyapur, Gachibowli, Kondapur, HITEC City and nearby areas.",
    intro:
      "Home and office moves across West Hyderabad — including Kukatpally, KPHB, Miyapur, Nizampet, Bachupally, Chandanagar, Hafeezpet, Gachibowli, Kondapur, Madhapur and HITEC City.",
    localities: ["Kukatpally", "KPHB", "Miyapur", "Nizampet", "Bachupally", "Chandanagar", "Hafeezpet", "Gachibowli", "Kondapur", "Madhapur", "HITEC City"],
    faqs: [
      { question: "Do you handle high-rise apartment moves in this area?", answer: "Yes — floor and lift access are factored into your written quotation." },
      { question: "Do you move offices around HITEC City / Gachibowli?", answer: "Yes — see our Office Shifting Hyderabad page for what's included." },
      { question: "Can I get weekend availability in this area?", answer: "[VERIFY_BUSINESS_HOURS] — call or WhatsApp us to check availability for your date." },
    ],
  },
  {
    slug: "central-hyderabad",
    name: "Central Hyderabad",
    h1: "Packers and Movers in Central Hyderabad",
    metaDescription:
      "Packers and movers serving Central Hyderabad — Ameerpet, Begumpet, Secunderabad, Banjara Hills, Jubilee Hills and nearby areas.",
    intro:
      "Home and office moves across Central Hyderabad — including Sanath Nagar, Balanagar, Ameerpet, Begumpet, Secunderabad, Khairatabad, Banjara Hills and Jubilee Hills.",
    localities: ["Sanath Nagar", "Balanagar", "Ameerpet", "Begumpet", "Secunderabad", "Khairatabad", "Banjara Hills", "Jubilee Hills"],
    faqs: [
      { question: "Do you serve older, narrow-street buildings in this area?", answer: "Yes — truck parking distance is factored into your written quotation; let us know if access is tight." },
      { question: "Can you move within Central Hyderabad the same day?", answer: "Often, depending on volume — confirmed when you get your quotation." },
      { question: "Do you move commercial offices in this area?", answer: "Yes — see our Office Shifting Hyderabad page." },
    ],
  },
  {
    slug: "east-hyderabad",
    name: "East Hyderabad",
    h1: "Packers and Movers in East Hyderabad",
    metaDescription:
      "Packers and movers serving East Hyderabad — Uppal, Nacharam, LB Nagar, Dilsukhnagar and nearby areas.",
    intro:
      "Home and office moves across East Hyderabad — including Uppal, Habsiguda, Tarnaka, Nacharam, Boduppal, Nagole, LB Nagar and Dilsukhnagar.",
    localities: ["Uppal", "Habsiguda", "Tarnaka", "Nacharam", "Boduppal", "Nagole", "LB Nagar", "Dilsukhnagar"],
    faqs: [
      { question: "Do you serve areas across East Hyderabad?", answer: "Yes — call or WhatsApp us with your exact address to confirm coverage and get a written quote." },
      { question: "Can I move to another city from this side of Hyderabad?", answer: "Yes — see our Interstate Packers and Movers Hyderabad page." },
      { question: "Is packing included for local moves here?", answer: "[VERIFY_PACKING_INCLUSION_POLICY] — confirmed in writing before your move." },
    ],
  },
  {
    slug: "south-hyderabad",
    name: "South Hyderabad",
    h1: "Packers and Movers in South Hyderabad",
    metaDescription:
      "Packers and movers serving South Hyderabad — Mehdipatnam, Rajendranagar, Shamshabad, Manikonda and nearby areas.",
    intro:
      "Home and office moves across South Hyderabad — including Mehdipatnam, Tolichowki, Attapur, Rajendranagar, Shamshabad, Manikonda, Bandlaguda and Vanasthalipuram.",
    localities: ["Mehdipatnam", "Tolichowki", "Attapur", "Rajendranagar", "Shamshabad", "Manikonda", "Bandlaguda", "Vanasthalipuram"],
    faqs: [
      { question: "Do you serve areas near Shamshabad / the airport?", answer: "Yes — call or WhatsApp us with your exact address to confirm coverage and get a written quote." },
      { question: "Do you handle gated-community moves in this area?", answer: "Yes — truck parking distance and lift access are factored into your written quotation." },
      { question: "Can I move a few items only from this area?", answer: "Yes — see our Small Move and Few-Item Shifting page." },
    ],
  },
  {
    slug: "secunderabad",
    name: "Secunderabad",
    h1: "Packers and Movers in Secunderabad",
    metaDescription:
      "Packers and movers serving Secunderabad and nearby areas, with local and interstate moving services.",
    intro:
      "Home and office moves in and around Secunderabad, with the same written-quotation process as anywhere else in the twin cities.",
    localities: [],
    nearbyAreas: ["Bowenpally", "Trimulgherry", "Marredpally", "Karkhana", "Alwal"],
    faqs: [
      { question: "Do you serve residential societies in Secunderabad?", answer: "Yes — call or WhatsApp us with your exact address to confirm coverage and get a written quote." },
      { question: "Can I move from Secunderabad to another city?", answer: "Yes — see our Interstate Packers and Movers Hyderabad page." },
      { question: "Do you serve areas near Secunderabad too?", answer: `Yes — including ${["Bowenpally", "Trimulgherry", "Marredpally", "Karkhana", "Alwal"].join(", ")}.` },
    ],
  },
];

export function getRegionBySlug(slug: string): RegionHub | undefined {
  return regionHubs.find((region) => region.slug === slug);
}
