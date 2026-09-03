import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PhoneIcon, WhatsappIcon, QuoteIcon, CheckIcon } from "@/components/ui/icons";
import { business } from "@/config/business";
import type { ServiceDetail } from "@/content/services";

/**
 * One shared template drives every service page — this is the structural
 * guarantee against doorway pages. Only the content passed in changes;
 * layout, required sections and honesty rules (no fabricated real moves
 * or reviews) stay identical everywhere it's used.
 */
export function ServicePageTemplate({
  service,
  breadcrumbs,
}: {
  service: ServiceDetail;
  breadcrumbs: Crumb[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{service.h1}</h1>
      <p className="mt-3 max-w-2xl text-[17.5px] text-text-dim">{service.valueProp}</p>

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

      <Card className="mt-8">
        <p className="font-display text-sm font-semibold uppercase tracking-wide text-text-dim">
          Indicative price
        </p>
        <p className="mt-1 font-display text-xl font-semibold text-ink">{service.priceNote}</p>
        <p className="mt-1 text-sm text-text-dim">
          Exact pricing depends on your specific move —{" "}
          <a href="/charges" className="text-ink-2 hover:underline">see what changes the price</a>.
        </p>
      </Card>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Included</h2>
          <ul className="mt-3 space-y-2">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[15.5px] text-text">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Excluded / Optional</h2>
          <ul className="mt-3 space-y-2">
            {service.excluded.map((item) => (
              <li key={item} className="text-[15.5px] text-text-dim">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold text-ink">How it works</h2>
        <ol className="mt-3 space-y-2">
          {service.process.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-[15.5px] text-text">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold text-ink">How your things are protected</h2>
        <p className="mt-2 text-[15.5px] text-text-dim">{service.packingProtection}</p>
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-line bg-paper p-6 text-center text-[15px] text-text-dim">
        A real completed move for this service will appear here once supplied and verified.
      </div>

      <div className="mt-4 rounded-2xl border border-dashed border-line bg-paper p-6 text-center text-[15px] text-text-dim">
        No verified reviews for this service published yet.
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold text-ink">Frequently asked questions</h2>
        <div className="mt-3">
          <FaqAccordion items={service.faqs} />
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-ink p-6 text-center text-white sm:p-8">
        <p className="font-display text-xl font-semibold">Ready to get your written quote?</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
            Get Free Quote
          </Button>
          <Button
            href={business.contact.whatsappHref}
            variant="whatsapp"
            icon={<WhatsappIcon className="h-5 w-5" />}
          >
            Send Photos
          </Button>
        </div>
      </div>
    </div>
  );
}
