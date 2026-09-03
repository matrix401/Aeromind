import { business } from "@/config/business";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/**
 * True once a config value has actually been confirmed — false for any
 * remaining [VERIFY_...] / [INSERT_...] / [ASSIGNED_...] placeholder.
 * Structured data must never emit a literal placeholder string as if it
 * were a real fact, so every JSON-LD builder below checks this first.
 */
export function isVerified(value: string | undefined | null): value is string {
  if (!value) return false;
  return !/^\[(VERIFY|INSERT|ASSIGNED)/.test(value);
}

export function organizationJsonLd() {
  const sameAs = Object.values(business.socials).filter(isVerified);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.brandName,
    url: SITE_URL,
    ...(isVerified(business.contact.email) && { email: business.contact.email }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function localBusinessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: business.brandName,
    url: SITE_URL,
    areaServed: { "@type": "City", name: "Hyderabad" },
  };

  if (isVerified(business.contact.phoneDisplay)) data.telephone = business.contact.phoneDisplay;
  if (isVerified(business.address.line1) && isVerified(business.address.postalCode)) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    };
  }
  if (isVerified(business.googleBusinessProfileUrl)) data.hasMap = business.googleBusinessProfileUrl;

  return data;
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href && { item: `${SITE_URL}${item.href}` }),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceJsonLd(input: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    description: input.description,
    url: `${SITE_URL}${input.url}`,
    provider: { "@type": "MovingCompany", name: business.brandName },
    areaServed: { "@type": "City", name: "Hyderabad" },
  };
}
