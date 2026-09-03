import type { ServiceSummary } from "@/lib/types";

export const serviceChooserItems: ServiceSummary[] = [
  {
    slug: "move-my-home",
    title: "Move My Home",
    description: "Full household shifting, packed and handled with care.",
    href: "/moving-services/local-house-shifting-hyderabad",
  },
  {
    slug: "move-my-office",
    title: "Move My Office",
    description: "Desks, systems and files moved with minimal downtime.",
    href: "/moving-services/office-shifting-hyderabad",
  },
  {
    slug: "move-within-hyderabad",
    title: "Move Within Hyderabad",
    description: "Local shifting anywhere across the city.",
    href: "/locations",
  },
  {
    slug: "move-to-another-city",
    title: "Move to Another City",
    description: "Interstate household and office relocation from Hyderabad.",
    href: "/moving-services/interstate-packers-and-movers-hyderabad",
  },
  {
    slug: "move-my-bike",
    title: "Move My Bike",
    description: "Two-wheeler transport within Hyderabad or interstate.",
    href: "/moving-services/bike-transport-hyderabad",
  },
  {
    slug: "move-my-car",
    title: "Move My Car",
    description: "Car transport on a car carrier, local or interstate.",
    href: "/moving-services/car-transport-hyderabad",
  },
  {
    slug: "store-my-goods",
    title: "Store My Goods",
    description: "Short- or long-term storage for household or office items.",
    href: "/moving-services/storage-and-warehousing-hyderabad",
  },
  {
    slug: "transport-business-goods",
    title: "Transport Business Goods",
    description: "Commercial goods, full truck or part load, across India.",
    href: "/business-logistics",
  },
];

export type PriceTab = {
  key: string;
  label: string;
  note: string;
};

export const priceTabs: PriceTab[] = [
  { key: "within-hyderabad", label: "Within Hyderabad", note: "[VERIFY_PRICE_RANGE_LOCAL]" },
  { key: "outside-hyderabad", label: "Outside Hyderabad", note: "[VERIFY_PRICE_RANGE_INTERSTATE]" },
  { key: "vehicle-transport", label: "Vehicle Transport", note: "[VERIFY_PRICE_RANGE_VEHICLE]" },
  { key: "business-logistics", label: "Business Logistics", note: "[VERIFY_PRICE_RANGE_LOGISTICS]" },
];

export const priceVariables = [
  "Inventory volume",
  "Distance",
  "Packing grade",
  "Floor",
  "Lift access",
  "Truck parking distance",
  "Dismantling",
  "Assembly",
  "Moving date",
  "Dedicated versus shared vehicle",
  "Insurance",
  "GST",
];

export type PackingExample = {
  item: string;
  method: string;
};

export const packingExamples: PackingExample[] = [
  { item: "Television", method: "Original carton where available, or 5-ply corner protection with foam sheet wrap and a rigid outer box." },
  { item: "Refrigerator", method: "Foam sheet wrap, corner guards, and stretch film to secure doors shut for transit." },
  { item: "Washing machine", method: "Foam wrap with drum secured and stretch film to hold hoses and lid in place." },
  { item: "Sofa", method: "Cotton sheet layer followed by stretch-wrap film to protect fabric and corners." },
  { item: "Furniture", method: "Disassembly where possible, corner protectors, and cardboard sheeting on polished surfaces." },
  { item: "Crockery", method: "Individually wrapped in packing paper, cushioned with thermocol, and boxed with dividers." },
  { item: "Fragile items", method: "Bubble wrap, double-boxing, and clear fragile labelling on every side." },
  { item: "Bike", method: "Mirrors and loose parts removed, body wrapped, and secured upright in a carrier." },
  { item: "Office computers", method: "Anti-static wrap, foam corner protection, and original boxes reused where kept." },
  { item: "Commercial goods", method: "Palletised or crated per goods type, with load secured against shifting in transit." },
];

export type FaqItemContent = { question: string; answer: string };

export const homepageFaqs: FaqItemContent[] = [
  {
    question: "How are shifting charges calculated?",
    answer:
      "Charges depend on factors like the volume of items, distance, packing grade, floor and lift access, and whether you choose a dedicated or shared vehicle. [VERIFY_PRICE_RANGE] — the exact factors used are listed in the Charges page.",
  },
  {
    question: "Can the final price change?",
    answer:
      "Your written quotation is based on what you tell us or show us. [VERIFY_PRICE_CHANGE_POLICY] — any condition that could change the quoted price is explained upfront, not after packing has started.",
  },
  {
    question: "Is packing included?",
    answer: "[VERIFY_PACKING_INCLUSION_POLICY] — this is confirmed in writing before your move.",
  },
  {
    question: "Do you provide unpacking?",
    answer: "[VERIFY_UNPACKING_POLICY] — let us know if you need this and it will be confirmed in your quotation.",
  },
  {
    question: "Is insurance included?",
    answer: "[VERIFY_INSURANCE_POLICY] — ask your move coordinator what protection is available for your move.",
  },
  {
    question: "What happens if an item is damaged?",
    answer: "[VERIFY_CLAIMS_RESOLUTION_PROCESS] — a clear process will be shared with you before your move begins.",
  },
  {
    question: "Do you use shared vehicles?",
    answer: "[VERIFY_SHARED_VS_DEDICATED_POLICY] — both options may be available depending on your move; ask your coordinator.",
  },
  {
    question: "Can I track my goods?",
    answer: "[VERIFY_TRACKING_CAPABILITY] — see the Track Move page for what's currently available.",
  },
  {
    question: "How much advance is required?",
    answer: "[VERIFY_ADVANCE_PAYMENT_POLICY] — payment stages are explained in your written quotation.",
  },
  {
    question: "Can I reschedule?",
    answer: "[VERIFY_RESCHEDULING_POLICY] — call your coordinator as early as possible if your date changes.",
  },
  {
    question: "Do you move on Sundays?",
    answer: "[VERIFY_BUSINESS_HOURS] — call or WhatsApp us to check availability for your date.",
  },
  {
    question: "Do you serve my locality?",
    answer: "Check the Locations page for areas across Hyderabad, or call us to confirm coverage for your address.",
  },
  {
    question: "Can I get a GST invoice?",
    answer: "[VERIFY_GST_INVOICE_AVAILABILITY] — mention this when requesting your quote.",
  },
  {
    question: "How can I send photographs?",
    answer: "Send 6–10 room photos or a short video on WhatsApp and we'll use them to prepare your quotation.",
  },
  {
    question: "Can I speak in Hindi or Telugu?",
    answer: "Yes — call or WhatsApp us and let us know your preferred language: Hindi, Telugu or English.",
  },
];
