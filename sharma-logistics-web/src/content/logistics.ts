export type LogisticsDetail = {
  slug: string;
  cardTitle: string;
  cardDescription: string;
  h1: string;
  metaDescription: string;
  valueProp: string;
  suitableGoods: string;
  vehicleOptions: string;
  loadCapacity: string;
  process: string[];
  faqs: { question: string; answer: string }[];
};

// Shared answers for the operational questions that don't vary by service
// type — kept in one place so documentation/GST/insurance language stays
// consistent across every logistics page.
const commonFaqs = {
  documentation: {
    question: "What documentation do I need to provide?",
    answer: "[VERIFY_LOGISTICS_DOCUMENTATION_REQUIREMENTS] — your account contact will confirm what's needed for your shipment, including e-way bill responsibility.",
  },
  gst: {
    question: "Can I get a GST invoice?",
    answer: "[VERIFY_GST_INVOICE_AVAILABILITY] — mention this when submitting your enquiry.",
  },
  tracking: {
    question: "Can I track my shipment?",
    answer: "[VERIFY_TRACKING_CAPABILITY] — see the Track Move page for what's currently available.",
  },
  pod: {
    question: "Do you provide proof of delivery?",
    answer: "[VERIFY_PROOF_OF_DELIVERY_PROCESS]",
  },
  insurance: {
    question: "Is my shipment insured?",
    answer: "[VERIFY_INSURANCE_POLICY] — ask about transit protection for your consignment.",
  },
  payment: {
    question: "What are the payment terms?",
    answer: "[VERIFY_PAYMENT_TERMS] — confirmed with your written quotation.",
  },
  contract: {
    question: "Do you offer regular/contract logistics arrangements?",
    answer: "[VERIFY_REGULAR_CONTRACT_AVAILABILITY] — ask about a dedicated account manager for recurring shipments.",
  },
};

export const logisticsServices: LogisticsDetail[] = [
  {
    slug: "nationwide-logistics-services",
    cardTitle: "Nationwide Logistics Services",
    cardDescription: "Commercial goods transport between Hyderabad and cities across India.",
    h1: "Nationwide Logistics Services",
    metaDescription: "Commercial goods transportation from Hyderabad to cities across India — full truck, part load and regular contract options.",
    valueProp: "Commercial goods transport between Hyderabad and cities across India — full truck, part load, and regular contract options, with clear documentation and delivery coordination.",
    suitableGoods: "Packaged goods, retail stock, machinery parts, industrial equipment and general commercial cargo.",
    vehicleOptions: "[VERIFY_VEHICLE_FLEET_OPTIONS] — matched to your load size and route.",
    loadCapacity: "[VERIFY_LOAD_CAPACITY_OPTIONS]",
    process: ["Share pickup city, destination and goods details", "Receive a written quotation", "Loading and dispatch", "Transit", "Delivery and proof of delivery"],
    faqs: [commonFaqs.documentation, commonFaqs.gst, commonFaqs.tracking, commonFaqs.contract],
  },
  {
    slug: "full-truck-load",
    cardTitle: "Full Truck Load (FTL)",
    cardDescription: "A dedicated truck for your shipment alone.",
    h1: "Full Truck Load (FTL) Transport",
    metaDescription: "Full truck load transport from Hyderabad — a dedicated vehicle for your shipment, no consolidation with other consignments.",
    valueProp: "A dedicated truck carrying only your goods — no consolidation, no shared stops, direct pickup to destination.",
    suitableGoods: "Bulk shipments, high-value cargo, or any load large enough to fill (or justify) a dedicated vehicle.",
    vehicleOptions: "[VERIFY_VEHICLE_FLEET_OPTIONS] — truck size matched to your load.",
    loadCapacity: "[VERIFY_LOAD_CAPACITY_OPTIONS]",
    process: ["Share load details and route", "Receive a written quotation", "Loading at your dock/warehouse", "Direct transit to destination", "Unloading and proof of delivery"],
    faqs: [
      { question: "How is FTL different from part load?", answer: "Your goods travel alone in the truck — no other consignments, no intermediate stops for other loads." },
      commonFaqs.documentation,
      commonFaqs.tracking,
      commonFaqs.payment,
    ],
  },
  {
    slug: "part-load-transportation",
    cardTitle: "Part Load Transportation",
    cardDescription: "Ship smaller consignments without paying for a full truck.",
    h1: "Part Load Transportation",
    metaDescription: "Part load transportation from Hyderabad for smaller commercial shipments, sharing vehicle space to keep costs fair.",
    valueProp: "Ship a smaller consignment without paying for a full truck — your goods share vehicle space with other shipments on the same route.",
    suitableGoods: "Smaller commercial shipments that don't need a dedicated vehicle.",
    vehicleOptions: "[VERIFY_VEHICLE_FLEET_OPTIONS] — shared vehicle space, allocated by route.",
    loadCapacity: "[VERIFY_LOAD_CAPACITY_OPTIONS]",
    process: ["Share load details and route", "Receive a written quotation", "Loading (may include a short consolidation wait)", "Transit, possibly with other consignments", "Delivery and proof of delivery"],
    faqs: [
      { question: "Will my goods be handled together with other shipments?", answer: "Yes — part load consolidates multiple consignments on the same route to keep pricing fair for smaller loads." },
      commonFaqs.documentation,
      commonFaqs.tracking,
      commonFaqs.insurance,
    ],
  },
  {
    slug: "commercial-goods-transportation",
    cardTitle: "Commercial Goods Transportation",
    cardDescription: "Packaged goods, machinery parts, retail stock and more.",
    h1: "Commercial Goods Transportation",
    metaDescription: "Commercial goods transportation from Hyderabad — packaged goods, machinery parts and retail stock, moved with proper documentation.",
    valueProp: "Packaged goods, machinery parts, retail stock and general commercial cargo, moved with proper documentation from pickup to delivery.",
    suitableGoods: "Packaged retail goods, machinery components, raw materials and general commercial cargo.",
    vehicleOptions: "[VERIFY_VEHICLE_FLEET_OPTIONS]",
    loadCapacity: "[VERIFY_LOAD_CAPACITY_OPTIONS]",
    process: ["Share goods type, weight and route", "Receive a written quotation", "Loading and documentation", "Transit", "Delivery and proof of delivery"],
    faqs: [commonFaqs.documentation, commonFaqs.gst, commonFaqs.pod, commonFaqs.insurance],
  },
  {
    slug: "industrial-relocation",
    cardTitle: "Industrial Relocation",
    cardDescription: "Machinery and equipment relocation, planned around your schedule.",
    h1: "Industrial Relocation Services",
    metaDescription: "Industrial relocation services from Hyderabad — machinery and equipment moved with planning around your production schedule.",
    valueProp: "Machinery and industrial equipment relocation, planned around your production schedule to minimise downtime.",
    suitableGoods: "Industrial machinery, production equipment, and factory or plant relocations.",
    vehicleOptions: "[VERIFY_VEHICLE_FLEET_OPTIONS] — including any specialised equipment needed for heavy machinery.",
    loadCapacity: "[VERIFY_LOAD_CAPACITY_OPTIONS]",
    process: ["Site visit or detailed equipment list", "Written quotation with scheduling plan", "Dismantling and loading", "Transit", "Delivery and reinstallation coordination"],
    faqs: [
      { question: "Can this be scheduled around our production downtime?", answer: "Yes — share your preferred window and we'll plan around it." },
      commonFaqs.documentation,
      commonFaqs.insurance,
      commonFaqs.contract,
    ],
  },
  {
    slug: "warehouse-transportation",
    cardTitle: "Warehouse Transportation",
    cardDescription: "Inbound and outbound transport between warehouses.",
    h1: "Warehouse Transportation",
    metaDescription: "Warehouse transportation from Hyderabad — inbound and outbound transport between warehouses, scheduled or on-demand.",
    valueProp: "Inbound and outbound transport between warehouses, on a scheduled or on-demand basis.",
    suitableGoods: "Palletised or crated goods moving between warehouse locations.",
    vehicleOptions: "[VERIFY_VEHICLE_FLEET_OPTIONS]",
    loadCapacity: "[VERIFY_LOAD_CAPACITY_OPTIONS]",
    process: ["Share pickup/delivery warehouse locations and schedule", "Receive a written quotation", "Loading at origin warehouse", "Transit", "Unloading and proof of delivery at destination"],
    faqs: [commonFaqs.documentation, commonFaqs.tracking, commonFaqs.contract, commonFaqs.payment],
  },
  {
    slug: "door-to-door-cargo",
    cardTitle: "Door-to-Door Cargo",
    cardDescription: "Pickup from your dock, delivery to your customer's door.",
    h1: "Door-to-Door Cargo Services",
    metaDescription: "Door-to-door cargo services from Hyderabad — pickup from your location, delivery direct to your customer or partner.",
    valueProp: "Pickup from your dock or office, delivery to your customer's or partner's door — no intermediate handling required from you.",
    suitableGoods: "Any commercial cargo needing direct pickup-to-delivery handling without a freight-terminal handoff.",
    vehicleOptions: "[VERIFY_VEHICLE_FLEET_OPTIONS]",
    loadCapacity: "[VERIFY_LOAD_CAPACITY_OPTIONS]",
    process: ["Share pickup and delivery addresses", "Receive a written quotation", "Pickup from your location", "Transit", "Direct delivery and proof of delivery"],
    faqs: [commonFaqs.documentation, commonFaqs.tracking, commonFaqs.pod, commonFaqs.insurance],
  },
  {
    slug: "regular-business-transportation",
    cardTitle: "Regular Business Transportation",
    cardDescription: "Recurring shipments on a set schedule.",
    h1: "Regular Business Transportation",
    metaDescription: "Regular business transportation from Hyderabad — recurring shipments on a set schedule with one dedicated account manager.",
    valueProp: "Recurring shipments on a set schedule, with one account manager coordinating every run.",
    suitableGoods: "Any commercial goods shipped on a repeating schedule — daily, weekly or monthly runs.",
    vehicleOptions: "[VERIFY_VEHICLE_FLEET_OPTIONS]",
    loadCapacity: "[VERIFY_LOAD_CAPACITY_OPTIONS]",
    process: ["Share your recurring shipment pattern", "Agree a schedule and rate", "Assign a dedicated account manager", "Recurring pickup and delivery", "Ongoing proof of delivery and reporting"],
    faqs: [
      { question: "Do we get one point of contact for all our shipments?", answer: "[VERIFY_ACCOUNT_MANAGER_AVAILABILITY] — ask about a dedicated account manager for recurring business." },
      commonFaqs.documentation,
      commonFaqs.contract,
      commonFaqs.payment,
    ],
  },
  {
    slug: "logistics-for-small-businesses",
    cardTitle: "Logistics for Small Businesses",
    cardDescription: "Smaller, less frequent shipments — priced fairly.",
    h1: "Logistics for Small Businesses",
    metaDescription: "Logistics for small businesses in Hyderabad — smaller and less frequent commercial shipments, priced fairly without enterprise minimums.",
    valueProp: "Smaller, less frequent shipments — priced fairly, without enterprise minimums or long-term contracts required.",
    suitableGoods: "Small-business shipments of any kind — a few boxes, a pallet, or an occasional delivery run.",
    vehicleOptions: "[VERIFY_VEHICLE_FLEET_OPTIONS] — often shared/part-load vehicles to keep costs fair.",
    loadCapacity: "[VERIFY_LOAD_CAPACITY_OPTIONS]",
    process: ["Tell us what you need shipped and how often", "Receive a written quotation", "Loading and dispatch", "Transit", "Delivery and proof of delivery"],
    faqs: [
      { question: "Is there a minimum shipment size?", answer: "[VERIFY_MINIMUM_ORDER_POLICY] — call us and describe what you need shipped." },
      commonFaqs.documentation,
      commonFaqs.gst,
      commonFaqs.payment,
    ],
  },
  {
    slug: "corporate-logistics-enquiry",
    cardTitle: "Corporate Logistics Enquiry",
    cardDescription: "Recurring or high-volume shipping needs — talk to our team.",
    h1: "Corporate Logistics Enquiry",
    metaDescription: "Corporate logistics enquiries for businesses in Hyderabad with recurring or high-volume commercial shipping needs.",
    valueProp: "For businesses with recurring or high-volume shipping needs — talk to our logistics team directly about a tailored arrangement.",
    suitableGoods: "Any commercial goods, at a volume or frequency that benefits from a direct account relationship.",
    vehicleOptions: "[VERIFY_VEHICLE_FLEET_OPTIONS]",
    loadCapacity: "[VERIFY_LOAD_CAPACITY_OPTIONS]",
    process: ["Submit your logistics enquiry with your typical volume and routes", "Our team reviews and contacts you", "Discuss a tailored rate and schedule", "Agree terms and assign an account manager", "Begin regular shipments"],
    faqs: [commonFaqs.contract, commonFaqs.payment, commonFaqs.documentation, commonFaqs.tracking],
  },
];

export function getLogisticsBySlug(slug: string): LogisticsDetail | undefined {
  return logisticsServices.find((service) => service.slug === slug);
}
