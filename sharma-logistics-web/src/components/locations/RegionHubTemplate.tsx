import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PhoneIcon, WhatsappIcon, QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";
import type { RegionHub } from "@/content/regions";

export function RegionHubTemplate({ region }: { region: RegionHub }) {
  const areas = region.localities.length > 0 ? region.localities : region.nearbyAreas ?? [];
  const areasLabel = region.localities.length > 0 ? "Areas we cover" : "Nearby areas";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Locations", href: "/locations" }, { label: region.name }]}
      />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{region.h1}</h1>
      <p className="mt-3 max-w-2xl text-[17.5px] text-text-dim">{region.intro}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Get Free Quote
        </Button>
        <Button href={business.contact.phoneHref} variant="call" icon={<PhoneIcon className="h-5 w-5" />}>
          Call Now
        </Button>
        <Button href={business.contact.whatsappHref} variant="whatsapp" icon={<WhatsappIcon className="h-5 w-5" />}>
          WhatsApp Us
        </Button>
      </div>

      {areas.length > 0 ? (
        <div className="mt-8">
          <h2 className="font-display text-lg font-semibold text-ink">{areasLabel}</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {areas.map((area) => (
              <li key={area} className="rounded-full border border-line bg-paper px-3 py-1.5 text-[14.5px] text-text">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-text-dim">
            Not sure if we cover your exact address? Call or WhatsApp us to confirm.
          </p>
        </div>
      ) : null}

      <div className="mt-8 rounded-2xl border border-dashed border-line bg-paper p-6 text-center text-[15px] text-text-dim">
        A real completed move from this area will appear here once supplied and verified.
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold text-ink">Frequently asked questions</h2>
        <div className="mt-3">
          <FaqAccordion items={region.faqs} />
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-ink p-6 text-center text-white sm:p-8">
        <p className="font-display text-xl font-semibold">Planning a move in {region.name}?</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
            Get Free Quote
          </Button>
          <Button href={business.contact.whatsappHref} variant="whatsapp" icon={<WhatsappIcon className="h-5 w-5" />}>
            Send Photos
          </Button>
        </div>
      </div>
    </div>
  );
}
