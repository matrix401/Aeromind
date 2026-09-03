export type ServiceDetail = {
  slug: string;
  cardTitle: string;
  cardDescription: string;
  h1: string;
  metaDescription: string;
  valueProp: string;
  priceNote: string;
  included: string[];
  excluded: string[];
  process: string[];
  packingProtection: string;
  faqs: { question: string; answer: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "packers-and-movers-hyderabad",
    cardTitle: "Packers and Movers Hyderabad",
    cardDescription: "Home, office, vehicle or business goods — one team, one written quote.",
    h1: "Packers and Movers in Hyderabad",
    metaDescription:
      "Packers and movers in Hyderabad for home, office, bike, car and business goods, with clear written pricing and one move coordinator.",
    valueProp:
      "Home, office, bike, car or business goods — packed and moved by one team, with a written quotation before anything is touched.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL] locally · [VERIFY_PRICE_RANGE_INTERSTATE] interstate",
    included: [
      "Packing material and labour",
      "Loading and unloading",
      "Transport to destination",
      "Basic dismantling of beds and wardrobes",
      "One move coordinator for your entire move",
    ],
    excluded: [
      "Assembly of modular furniture (available on request)",
      "Insurance / transit protection (optional add-on)",
      "GST — added as applicable",
    ],
    process: [
      "Tell us what you're moving and where",
      "Receive a written quotation",
      "Our team packs and labels everything",
      "Loading and transport to your destination",
      "Delivery, unloading and handover",
    ],
    packingProtection:
      "Every item is wrapped according to what it is — foam and corner protection for furniture and appliances, individually wrapped paper and dividers for crockery, and double-boxing for anything fragile. See the full packing method breakdown on the homepage.",
    faqs: [
      { question: "Is packing included in the price?", answer: "[VERIFY_PACKING_INCLUSION_POLICY] — confirmed in writing before your move." },
      { question: "Can the price change after the quotation?", answer: "[VERIFY_PRICE_CHANGE_POLICY] — any condition that could change it is explained upfront." },
      { question: "Do you serve my area of Hyderabad?", answer: "Check the Locations page, or call us to confirm coverage for your address." },
      { question: "Can I get a GST invoice?", answer: "[VERIFY_GST_INVOICE_AVAILABILITY] — mention this when requesting your quote." },
    ],
  },
  {
    slug: "local-house-shifting-hyderabad",
    cardTitle: "Local House Shifting Hyderabad",
    cardDescription: "Home shifting within Hyderabad, packed room by room.",
    h1: "Local House Shifting in Hyderabad",
    metaDescription:
      "Local house shifting services in Hyderabad — packing, loading, transport and delivery within the city, with a written quotation.",
    valueProp:
      "Move your home within Hyderabad — packed room by room, with same-day delivery in most cases.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL]",
    included: [
      "Room-by-room packing and labelling",
      "Loading and unloading at both addresses",
      "Local transport within Hyderabad",
      "Basic bed and wardrobe dismantling",
    ],
    excluded: [
      "Extra floors without lift access (charged separately — see Charges page)",
      "Long-distance truck parking, if applicable",
      "Assembly of modular furniture (on request)",
    ],
    process: [
      "Tell us your home size and floor/lift access",
      "Receive a written quotation",
      "Packing on move day",
      "Loading and local transport",
      "Same-day delivery and unpacking (if opted)",
    ],
    packingProtection:
      "Furniture, appliances and fragile items are each packed to the method shown on the homepage — the same standard applies whether you're moving one room or a full house.",
    faqs: [
      { question: "Will my move be completed the same day?", answer: "Most local moves are, depending on volume and floor access — confirmed when you get your quotation." },
      { question: "Do you charge extra for no-lift buildings?", answer: "[VERIFY_PRICE_RANGE_LOCAL] — floor and lift access are listed as price factors on the Charges page." },
      { question: "Can I book a move for a Sunday?", answer: "[VERIFY_BUSINESS_HOURS] — call or WhatsApp us to check availability for your date." },
      { question: "What if I only have a few items to move?", answer: "See our Small Move and Few-Item Shifting page — fair pricing for smaller loads." },
    ],
  },
  {
    slug: "interstate-packers-and-movers-hyderabad",
    cardTitle: "Interstate Packers and Movers Hyderabad",
    cardDescription: "Household relocation from Hyderabad to cities across India.",
    h1: "Interstate Packers and Movers from Hyderabad",
    metaDescription:
      "Interstate packers and movers from Hyderabad to cities across India, with dedicated or shared transport and a written quotation.",
    valueProp:
      "Move your household to another city with dedicated or shared transport, and clear delivery timelines.",
    priceNote: "[VERIFY_PRICE_RANGE_INTERSTATE]",
    included: [
      "Full packing with transit-grade materials",
      "Loading and unloading at both ends",
      "Interstate transport (dedicated or shared vehicle)",
      "One move coordinator for the full journey",
    ],
    excluded: [
      "Insurance / transit protection (optional add-on)",
      "Storage at destination, if needed before delivery",
      "GST — added as applicable",
    ],
    process: [
      "Share your pickup and destination cities",
      "Video call or WhatsApp photo survey",
      "Receive a written quotation",
      "Packing, loading and transit",
      "Delivery and unloading at destination",
    ],
    packingProtection:
      "Interstate moves use transit-grade packing throughout — every item is wrapped, boxed and labelled to withstand a longer journey, not just local handling.",
    faqs: [
      { question: "How long does interstate delivery take?", answer: "[VERIFY_DELIVERY_TIME_RANGE] — see the specific route page for your destination city, where available." },
      { question: "What's the difference between shared and dedicated vehicles?", answer: "[VERIFY_SHARED_VS_DEDICATED_POLICY] — a dedicated truck carries only your goods; a shared one carries multiple households on the same route." },
      { question: "Can I track my goods in transit?", answer: "[VERIFY_TRACKING_CAPABILITY] — see the Track Move page for what's currently available." },
      { question: "What documents do I need?", answer: "[VERIFY_INTERSTATE_DOCUMENTATION_REQUIREMENTS] — your coordinator will confirm what's needed for your route." },
    ],
  },
  {
    slug: "office-shifting-hyderabad",
    cardTitle: "Office Shifting Hyderabad",
    cardDescription: "Desks, systems and files, moved with minimal downtime.",
    h1: "Office Shifting in Hyderabad",
    metaDescription:
      "Office shifting services in Hyderabad — desks, workstations, IT equipment and files moved with minimal disruption to your working hours.",
    valueProp:
      "Desks, systems, files and equipment moved with minimal disruption to your working hours.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL]",
    included: [
      "Systematic labelling by department/floor",
      "Dismantling and reassembly of workstations",
      "IT equipment handling with anti-static wrap",
      "Off-hours or weekend scheduling (on request)",
    ],
    excluded: [
      "Data cabling and network setup at the new office",
      "Insurance / transit protection (optional add-on)",
      "GST invoice for business accounts (available — see FAQs)",
    ],
    process: [
      "Site visit or photos of your current office",
      "Inventory and written quotation",
      "Weekend or off-hours move, if requested",
      "Packing, transport and unloading",
      "Reassembly of workstations at the new office",
    ],
    packingProtection:
      "Office computers and monitors are wrapped in anti-static material with foam corner protection; files are boxed and labelled by department so nothing gets misplaced during the move.",
    faqs: [
      { question: "Can you move us on a weekend to avoid downtime?", answer: "[VERIFY_BUSINESS_HOURS] — let us know your preferred timing when requesting a quote." },
      { question: "How is IT equipment handled?", answer: "Anti-static wrap and foam corner protection, with original boxes reused where you've kept them." },
      { question: "How much notice do you need?", answer: "[VERIFY_ADVANCE_NOTICE_POLICY] — the earlier you confirm, the more scheduling flexibility we can offer." },
      { question: "Can we get a GST invoice for our business?", answer: "[VERIFY_GST_INVOICE_AVAILABILITY] — mention this when requesting your quote." },
    ],
  },
  {
    slug: "bike-transport-hyderabad",
    cardTitle: "Bike Transport Hyderabad",
    cardDescription: "Two-wheeler transport, local or interstate.",
    h1: "Bike Transport in Hyderabad",
    metaDescription:
      "Bike and two-wheeler transport in Hyderabad, local or interstate, packed and secured for transit.",
    valueProp:
      "Two-wheeler transport within Hyderabad or to another city, packed and secured upright for the journey.",
    priceNote: "[VERIFY_PRICE_RANGE_VEHICLE]",
    included: [
      "Mirror and loose-part removal before transit",
      "Body wrap and secure upright placement in the carrier",
      "Local or interstate transport",
    ],
    excluded: [
      "Fuel drain, if required by the carrier",
      "Insurance / transit protection (optional add-on)",
      "RC/document courier, if needed separately",
    ],
    process: [
      "Share your bike model and route",
      "Receive a written quotation",
      "Pickup, inspection and packing",
      "Transport",
      "Delivery and unwrapping at destination",
    ],
    packingProtection:
      "Mirrors and loose parts are removed and packed separately, the body is wrapped, and the bike is secured upright in the carrier so it doesn't shift in transit.",
    faqs: [
      { question: "Do you transport bikes within Hyderabad too?", answer: "Yes — local and interstate bike transport are both available." },
      { question: "What documents do I need to hand over?", answer: "[VERIFY_VEHICLE_DOCUMENTATION_REQUIREMENTS] — your coordinator will confirm what's needed." },
      { question: "Is the bike insured during transit?", answer: "[VERIFY_INSURANCE_POLICY] — ask your coordinator what protection is available." },
      { question: "How long does interstate bike delivery take?", answer: "[VERIFY_DELIVERY_TIME_RANGE] — confirmed at the time of booking based on your route." },
    ],
  },
  {
    slug: "car-transport-hyderabad",
    cardTitle: "Car Transport Hyderabad",
    cardDescription: "Car carrier transport, local or interstate.",
    h1: "Car Transport in Hyderabad",
    metaDescription:
      "Car transport in Hyderabad on a car carrier, local or interstate, with clear pricing and delivery timelines.",
    valueProp: "Car transport on a car carrier, within Hyderabad or to another city.",
    priceNote: "[VERIFY_PRICE_RANGE_VEHICLE]",
    included: [
      "Pre-transport condition check",
      "Loading onto a car carrier",
      "Local or interstate transport",
    ],
    excluded: [
      "Fuel and toll charges",
      "Insurance / transit protection (optional add-on)",
      "RC/document courier, if needed separately",
    ],
    process: [
      "Share your car model and route",
      "Receive a written quotation",
      "Condition check and loading",
      "Transport on a car carrier",
      "Delivery and handover at destination",
    ],
    packingProtection:
      "Your car is inspected and photographed before loading, then secured on the carrier for the journey — condition is checked again at handover.",
    faqs: [
      { question: "Open or closed carrier?", answer: "[VERIFY_CARRIER_TYPE_AVAILABILITY] — ask your coordinator what's available for your route." },
      { question: "How long does delivery take?", answer: "[VERIFY_DELIVERY_TIME_RANGE] — confirmed at the time of booking." },
      { question: "Can I track my car in transit?", answer: "[VERIFY_TRACKING_CAPABILITY] — see the Track Move page for what's currently available." },
      { question: "What documents do I need?", answer: "[VERIFY_VEHICLE_DOCUMENTATION_REQUIREMENTS] — your coordinator will confirm what's needed." },
    ],
  },
  {
    slug: "furniture-shifting-hyderabad",
    cardTitle: "Furniture Shifting Hyderabad",
    cardDescription: "Sofas, beds and wardrobes — dismantled, protected, reassembled.",
    h1: "Furniture Shifting in Hyderabad",
    metaDescription:
      "Furniture shifting in Hyderabad — sofas, beds, wardrobes and dining sets dismantled, protected and reassembled at your new address.",
    valueProp:
      "Sofas, beds, wardrobes and dining sets — dismantled, protected and reassembled at your new address.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL]",
    included: [
      "Dismantling of beds, wardrobes and modular units",
      "Corner protection and cardboard sheeting for polished surfaces",
      "Stretch-wrap protection for sofas and fabric items",
      "Reassembly at your new address",
    ],
    excluded: [
      "Repair of pre-existing damage or wear",
      "Insurance / transit protection (optional add-on)",
    ],
    process: [
      "Share what furniture you're moving (photos help)",
      "Receive a written quotation",
      "Dismantling and protective wrapping",
      "Transport",
      "Reassembly at the new address",
    ],
    packingProtection:
      "Furniture is disassembled where possible, corners protected, and polished surfaces covered in cardboard sheeting; sofas get a cotton layer followed by stretch-wrap film.",
    faqs: [
      { question: "Is reassembly included?", answer: "Yes — dismantling and reassembly of standard furniture is part of the service." },
      { question: "What if I only need one or two items moved?", answer: "See our Small Move and Few-Item Shifting page for fair single-item pricing." },
      { question: "What happens if something is damaged?", answer: "[VERIFY_CLAIMS_RESOLUTION_PROCESS] — a clear process is shared before your move begins." },
      { question: "Can you move furniture without a full house shift?", answer: "Yes — furniture-only moves are available; mention this when requesting your quote." },
    ],
  },
  {
    slug: "packing-and-unpacking-hyderabad",
    cardTitle: "Packing and Unpacking Hyderabad",
    cardDescription: "Professional packing, with unpacking at your new address.",
    h1: "Packing and Unpacking Services in Hyderabad",
    metaDescription:
      "Professional packing and unpacking services in Hyderabad for a full home or just the fragile items.",
    valueProp:
      "Professional packing for a full home or just the fragile items, with unpacking at your new address if you need it.",
    priceNote: "[VERIFY_PRICE_RANGE_LOCAL]",
    included: [
      "Packing material (boxes, bubble wrap, packing paper)",
      "Room-by-room labelling",
      "Fragile-item double-boxing",
      "Unpacking at destination (on request)",
    ],
    excluded: [
      "Transport (book separately, or combine with a full move)",
      "Storage of packing material after unpacking",
    ],
    process: [
      "Tell us what needs packing (full home or specific items)",
      "Receive a written quotation",
      "Packing on the scheduled day",
      "Transport, if booked together",
      "Unpacking at your new address, if opted",
    ],
    packingProtection:
      "Each category of item — crockery, electronics, fragile decor, clothing — is packed with the material and method suited to it, detailed on the homepage's packing proof section.",
    faqs: [
      { question: "Can I book packing without transport?", answer: "Yes — packing-only and unpacking-only services are both available." },
      { question: "What materials do you use?", answer: "Corrugated boxes, bubble wrap, packing paper, foam sheeting and stretch film, matched to what's being packed." },
      { question: "Is unpacking included by default?", answer: "[VERIFY_UNPACKING_POLICY] — let us know if you need this and it'll be confirmed in your quotation." },
      { question: "Can you pack just the fragile items?", answer: "Yes — partial packing for fragile or valuable items only is available." },
    ],
  },
  {
    slug: "storage-and-warehousing-hyderabad",
    cardTitle: "Storage and Warehousing Hyderabad",
    cardDescription: "Short- or long-term storage between moves.",
    h1: "Storage and Warehousing in Hyderabad",
    metaDescription:
      "Short- and long-term storage and warehousing in Hyderabad for household or office items between moves.",
    valueProp: "Short- or long-term storage for household or office items between moves.",
    priceNote: "[VERIFY_PRICE_RANGE_STORAGE]",
    included: [
      "Packing before storage",
      "Loading to and from the storage facility",
      "[VERIFY_STORAGE_FACILITY_DETAILS]",
    ],
    excluded: [
      "Insurance / protection while in storage (optional add-on)",
      "Access visits beyond what's agreed at booking",
    ],
    process: [
      "Tell us what you need stored and for how long",
      "Receive a written quotation",
      "Packing and transport to storage",
      "Storage for your agreed period",
      "Transport out when you're ready",
    ],
    packingProtection:
      "Items are packed to the same standard as a full move before they go into storage, so they come out in the same condition they went in.",
    faqs: [
      { question: "What's the minimum storage period?", answer: "[VERIFY_MINIMUM_STORAGE_PERIOD] — ask your coordinator for current terms." },
      { question: "Can I access my items during storage?", answer: "[VERIFY_STORAGE_ACCESS_POLICY]" },
      { question: "Is my stored property insured?", answer: "[VERIFY_INSURANCE_POLICY] — ask what protection is available for stored goods." },
      { question: "How is storage priced?", answer: "[VERIFY_PRICE_RANGE_STORAGE] — typically based on volume and duration." },
    ],
  },
  {
    slug: "small-move-few-item-shifting",
    cardTitle: "Small Move & Few-Item Shifting",
    cardDescription: "Just a few items? Fair pricing for smaller moves.",
    h1: "Small Move and Few-Item Shifting in Hyderabad",
    metaDescription:
      "Small move and few-item shifting in Hyderabad — fair pricing when you only have a few pieces to move, not a full house.",
    valueProp:
      "Just a few items to move — a single cupboard, some boxes, or a couple of appliances? Fair pricing for smaller moves.",
    priceNote: "[VERIFY_PRICE_RANGE_SMALL_MOVE]",
    included: [
      "Packing for the specific items you're moving",
      "Loading and unloading",
      "Local or interstate transport, shared vehicle where available",
    ],
    excluded: [
      "Full-house packing material (not needed for small moves)",
      "Insurance / transit protection (optional add-on)",
    ],
    process: [
      "Tell us exactly what you're moving",
      "Receive a written quotation",
      "Packing and loading",
      "Transport (often on a shared vehicle to keep costs fair)",
      "Delivery and handover",
    ],
    packingProtection:
      "Even a small move gets full protection — each item wrapped to the same standard as a full house shift, just without paying for a full truck you don't need.",
    faqs: [
      { question: "Is there a minimum order size?", answer: "[VERIFY_MINIMUM_ORDER_POLICY] — call us and describe what you need moved." },
      { question: "Will my items share a vehicle with another move?", answer: "[VERIFY_SHARED_VS_DEDICATED_POLICY] — shared vehicles help keep small-move pricing fair." },
      { question: "Can this be done same-day?", answer: "Often, depending on the day and volume — ask when requesting your quote." },
      { question: "Is this cheaper than a full house-shifting quote?", answer: "Yes — small moves are priced for what you're actually moving, not a full household." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((service) => service.slug === slug);
}
