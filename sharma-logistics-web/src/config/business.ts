/**
 * Central business configuration.
 *
 * Every page, component and structured-data block reads NAP details, contact
 * links and verified claims from here — never hardcode them elsewhere.
 *
 * Anything not yet confirmed by the business owner is an explicit
 * `[VERIFY_...]` placeholder. Never replace a placeholder with a real value
 * unless it has actually been supplied and verified — see the non-negotiable
 * truth policy in the project brief.
 */

export const business = {
  legalName: "[VERIFY_LEGAL_BUSINESS_NAME]",
  brandName: "Sharma Logistics Solutions",
  tagline: "Hyderabad's Transparent Moving Partner",
  brandPromise: "Clear Price. Careful Moving. One Responsible Person.",
  supportingMessage:
    "Packers and Movers across Hyderabad. Interstate moving and nationwide logistics across India.",

  address: {
    line1: "[VERIFY_HYDERABAD_ADDRESS]",
    locality: "[VERIFY_LOCALITY]",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "[VERIFY_PINCODE]",
    country: "IN",
  },

  branches: "[VERIFY_STAFFED_BRANCHES]" as string | { name: string; address: string }[],

  contact: {
    phoneDisplay: "+91 7601 072 443",
    phoneHref: "tel:+917601072443",
    whatsappDisplay: "+91 7601 072 443",
    whatsappHref: "https://wa.me/917601072443",
    email: "[VERIFY_EMAIL_ADDRESS]",
  },

  hours: "[VERIFY_BUSINESS_HOURS]",

  registrations: {
    gst: "[VERIFY_GST_NUMBER]",
    udyam: "[VERIFY_UDYAM_OR_OTHER_REGISTRATION]",
  },

  yearsInOperation: "[VERIFY_YEARS_IN_OPERATION]",
  completedMovesCount: "[VERIFY_COMPLETED_MOVES_COUNT]",

  googleBusinessProfileUrl: "[VERIFY_GOOGLE_BUSINESS_PROFILE_LINK]",

  quotationResponseTime: "[VERIFY_RESPONSE_TIME]",
  claimsResolutionProcess: "[VERIFY_CLAIMS_RESOLUTION_PROCESS]",

  languagesSupported: ["Hindi", "Telugu", "English"],

  // Verified trust points only — never add a claim here without evidence.
  trustPoints: [
    "Clear written quotation",
    "GST invoice",
    "Trained moving team",
    "Transit protection available",
    "One move coordinator",
  ],

  socials: {
    instagram: "[VERIFY_INSTAGRAM_URL]",
    facebook: "[VERIFY_FACEBOOK_URL]",
    youtube: "[VERIFY_YOUTUBE_URL]",
  },

  legacySiteUrl: "[VERIFY_EXISTING_WEBSITE_URL_IF_ANY]",
  leadDestination: "[VERIFY_LEAD_DESTINATION_EMAIL_CRM_OR_SHEET]",
} as const;

export const navigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "Moving Services", href: "/moving-services" },
    { label: "Business Logistics", href: "/business-logistics" },
    { label: "Charges", href: "/charges" },
    { label: "Locations", href: "/locations" },
    { label: "Reviews", href: "/reviews" },
    { label: "Track Move", href: "/track-move" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  quoteCta: { label: "Get Free Quote", href: "/quote/moving" },
  footerLegal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export type Business = typeof business;
export type Navigation = typeof navigation;
