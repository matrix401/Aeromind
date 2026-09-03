export type LandingPage = {
  slug: string;
  h1: string;
  metaTitle: string;
  supportingSentence: string;
  priceNote: string;
  trustSignals: [string, string, string];
  included: string[];
  excluded: string[];
  faqs: { question: string; answer: string }[];
  detailsLabel: string;
  quoteHref: string;
};

const trustSignals: [string, string, string] = [
  "Clear written quotation",
  "GST invoice",
  "One move coordinator",
];

export const landingPages: LandingPage[] = [
  {
    slug: "packers-and-movers-hyderabad",
    h1: "Packers and Movers in Hyderabad — Get Your Written Quote",
    metaTitle: "Packers and Movers Hyderabad",
    supportingSentence: "Home, office, bike, car or business goods — packed and moved by one team, with a written quotation before anything is touched.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL] locally · [VERIFY_PRICE_RANGE_INTERSTATE] interstate",
    trustSignals,
    included: ["Packing material and labour", "Loading and unloading", "Transport to destination", "One move coordinator"],
    excluded: ["Assembly of modular furniture (on request)", "Insurance / transit protection (optional add-on)", "GST — added as applicable"],
    faqs: [
      { question: "Is packing included in the price?", answer: "[VERIFY_PACKING_INCLUSION_POLICY] — confirmed in writing before your move." },
      { question: "Can the price change after the quotation?", answer: "[VERIFY_PRICE_CHANGE_POLICY] — any condition that could change it is explained upfront." },
      { question: "Do you serve my area of Hyderabad?", answer: "Check the Locations page, or call us to confirm coverage for your address." },
    ],
    detailsLabel: "What are you moving?",
    quoteHref: "/quote/moving",
  },
  {
    slug: "local-house-shifting",
    h1: "Local House Shifting in Hyderabad — Same-Day in Most Cases",
    metaTitle: "Local House Shifting Hyderabad",
    supportingSentence: "Move your home within Hyderabad — packed room by room, with same-day delivery in most cases.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL]",
    trustSignals,
    included: ["Room-by-room packing and labelling", "Loading and unloading at both addresses", "Local transport within Hyderabad"],
    excluded: ["Extra floors without lift access (see Charges page)", "Assembly of modular furniture (on request)"],
    faqs: [
      { question: "Will my move be completed the same day?", answer: "Most local moves are, depending on volume and floor access — confirmed with your quotation." },
      { question: "Do you charge extra for no-lift buildings?", answer: "Floor and lift access are listed as price factors — see the Charges page." },
      { question: "Can I book a move for a Sunday?", answer: "[VERIFY_BUSINESS_HOURS] — call or WhatsApp us to check availability." },
    ],
    detailsLabel: "Your home size (1BHK, 2BHK, etc.)",
    quoteHref: "/quote/moving",
  },
  {
    slug: "interstate-moving",
    h1: "Interstate Moving from Hyderabad — Written Quote in Minutes",
    metaTitle: "Interstate Moving from Hyderabad",
    supportingSentence: "Move your household to another city with dedicated or shared transport, and clear delivery timelines.",
    priceNote: "[VERIFY_PRICE_RANGE_INTERSTATE]",
    trustSignals,
    included: ["Full transit-grade packing", "Loading and unloading at both ends", "Interstate transport", "One move coordinator for the full journey"],
    excluded: ["Insurance / transit protection (optional add-on)", "Storage at destination, if needed before delivery"],
    faqs: [
      { question: "How long does interstate delivery take?", answer: "[VERIFY_DELIVERY_TIME_RANGE] — see the specific route page for your destination city." },
      { question: "Shared or dedicated vehicle?", answer: "[VERIFY_SHARED_VS_DEDICATED_POLICY] — both may be available depending on your move." },
      { question: "Can I track my goods in transit?", answer: "[VERIFY_TRACKING_CAPABILITY] — see the Track Move page." },
    ],
    detailsLabel: "Destination city",
    quoteHref: "/quote/moving",
  },
  {
    slug: "bike-and-car-transport",
    h1: "Bike and Car Transport in Hyderabad — Local or Interstate",
    metaTitle: "Bike and Car Transport Hyderabad",
    supportingSentence: "Two-wheeler and car transport within Hyderabad or to another city, packed and secured for the journey.",
    priceNote: "[VERIFY_PRICE_RANGE_VEHICLE]",
    trustSignals,
    included: ["Pre-transport condition check", "Secure loading and packing", "Local or interstate transport"],
    excluded: ["Fuel and toll charges", "Insurance / transit protection (optional add-on)"],
    faqs: [
      { question: "Do you transport bikes and cars together?", answer: "Yes — ask your coordinator when requesting a quote for both." },
      { question: "How long does interstate vehicle delivery take?", answer: "[VERIFY_DELIVERY_TIME_RANGE] — confirmed at the time of booking." },
      { question: "What documents do I need?", answer: "[VERIFY_VEHICLE_DOCUMENTATION_REQUIREMENTS] — your coordinator will confirm what's needed." },
    ],
    detailsLabel: "Bike, car, or both?",
    quoteHref: "/quote/moving",
  },
  {
    slug: "business-logistics",
    h1: "Business Logistics from Hyderabad — Nationwide Transport",
    metaTitle: "Business Logistics Hyderabad",
    supportingSentence: "Commercial goods transport between Hyderabad and cities across India — full truck, part load, and regular contract options.",
    priceNote: "[VERIFY_PRICE_RANGE_LOGISTICS]",
    trustSignals: ["Written quotation", "GST invoice", "Documented pickup and delivery"],
    included: ["Loading and unloading", "Transport with documentation", "Proof of delivery"],
    excluded: ["Insurance / transit protection (optional add-on)", "Storage before or after transit"],
    faqs: [
      { question: "Can I get a GST invoice?", answer: "[VERIFY_GST_INVOICE_AVAILABILITY] — mention this when submitting your enquiry." },
      { question: "Do you offer regular/contract logistics?", answer: "[VERIFY_REGULAR_CONTRACT_AVAILABILITY] — ask about a dedicated account manager." },
      { question: "What documentation do I need?", answer: "[VERIFY_LOGISTICS_DOCUMENTATION_REQUIREMENTS] — your account contact will confirm what's needed." },
    ],
    detailsLabel: "Type of goods",
    quoteHref: "/quote/business-logistics",
  },
  {
    slug: "kukatpally-packers-and-movers",
    h1: "Packers and Movers in Kukatpally",
    metaTitle: "Kukatpally Packers and Movers",
    supportingSentence: "We serve Kukatpally as part of our West Hyderabad coverage — call to confirm pricing for your exact address.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL]",
    trustSignals,
    included: ["Room-by-room packing and labelling", "Loading and unloading", "Local transport within Hyderabad"],
    excluded: ["Extra floors without lift access (see Charges page)"],
    faqs: [
      { question: "Do you cover all of Kukatpally and KPHB?", answer: "Yes — call or WhatsApp us with your exact address to confirm." },
      { question: "Can I move to another city from Kukatpally?", answer: "Yes — see our Interstate Moving page." },
    ],
    detailsLabel: "Your building/society name (optional)",
    quoteHref: "/quote/moving",
  },
  {
    slug: "medchal-packers-and-movers",
    h1: "Packers and Movers in Medchal",
    metaTitle: "Medchal Packers and Movers",
    supportingSentence: "We serve Medchal as part of our North Hyderabad coverage — call to confirm pricing for your exact address.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL]",
    trustSignals,
    included: ["Room-by-room packing and labelling", "Loading and unloading", "Local transport within Hyderabad"],
    excluded: ["Extra floors without lift access (see Charges page)"],
    faqs: [
      { question: "Do you cover all of Medchal?", answer: "Yes — call or WhatsApp us with your exact address to confirm." },
      { question: "Can I move to another city from Medchal?", answer: "Yes — see our Interstate Moving page." },
    ],
    detailsLabel: "Your building/society name (optional)",
    quoteHref: "/quote/moving",
  },
  {
    slug: "alwal-packers-and-movers",
    h1: "Packers and Movers in Alwal",
    metaTitle: "Alwal Packers and Movers",
    supportingSentence: "We serve Alwal as part of our North Hyderabad & Secunderabad coverage — call to confirm pricing for your exact address.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL]",
    trustSignals,
    included: ["Room-by-room packing and labelling", "Loading and unloading", "Local transport within Hyderabad"],
    excluded: ["Extra floors without lift access (see Charges page)"],
    faqs: [
      { question: "Do you cover all of Alwal?", answer: "Yes — call or WhatsApp us with your exact address to confirm." },
      { question: "Can I move to another city from Alwal?", answer: "Yes — see our Interstate Moving page." },
    ],
    detailsLabel: "Your building/society name (optional)",
    quoteHref: "/quote/moving",
  },
  {
    slug: "sanath-nagar-packers-and-movers",
    h1: "Packers and Movers in Sanath Nagar",
    metaTitle: "Sanath Nagar Packers and Movers",
    supportingSentence: "We serve Sanath Nagar as part of our Central Hyderabad coverage — call to confirm pricing for your exact address.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL]",
    trustSignals,
    included: ["Room-by-room packing and labelling", "Loading and unloading", "Local transport within Hyderabad"],
    excluded: ["Extra floors without lift access (see Charges page)"],
    faqs: [
      { question: "Do you cover all of Sanath Nagar?", answer: "Yes — call or WhatsApp us with your exact address to confirm." },
      { question: "Can I move to another city from Sanath Nagar?", answer: "Yes — see our Interstate Moving page." },
    ],
    detailsLabel: "Your building/society name (optional)",
    quoteHref: "/quote/moving",
  },
];

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((lp) => lp.slug === slug);
}
