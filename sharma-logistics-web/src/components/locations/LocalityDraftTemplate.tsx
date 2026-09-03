import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsappIcon, QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";
import type { Locality } from "@/lib/types";

/**
 * Honest placeholder for a locality without verified local evidence yet —
 * see draftLocalities in content/localities.ts. Never fill this with
 * invented "local" specifics (price factors, access notes, reviews) —
 * this page gets replaced with real unique content once that evidence
 * exists, per the no-doorway-pages rule.
 */
export function LocalityDraftTemplate({
  locality,
}: {
  locality: Locality & { regionSlug: string; regionName: string };
}) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: locality.regionName, href: `/locations/${locality.regionSlug}` },
          { label: locality.name },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
        Packers and Movers in {locality.name}
      </h1>

      <div className="mt-6 rounded-xl border-2 border-orange/40 bg-orange/5 p-4 text-[15.5px] text-text">
        We serve {locality.name} as part of our {locality.regionName} coverage.
        A detailed {locality.name}-specific page — with local price factors,
        building access notes and completed moves from this area — is in
        progress. Call or WhatsApp us now and we&apos;ll confirm coverage and
        pricing for your exact address right away.
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={business.contact.phoneHref} variant="call" icon={<PhoneIcon className="h-5 w-5" />}>
          Call Now
        </Button>
        <Button href={business.contact.whatsappHref} variant="whatsapp" icon={<WhatsappIcon className="h-5 w-5" />}>
          WhatsApp Us
        </Button>
        <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Get Free Quote
        </Button>
      </div>

      <p className="mt-8 text-sm text-text-dim">
        See the full{" "}
        <a href={`/locations/${locality.regionSlug}`} className="text-ink-2 hover:underline">
          {locality.regionName} coverage page
        </a>{" "}
        for nearby areas we serve.
      </p>
    </div>
  );
}
