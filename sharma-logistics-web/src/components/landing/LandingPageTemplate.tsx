import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PhoneIcon, WhatsappIcon, QuoteIcon, CheckIcon } from "@/components/ui/icons";
import { LandingQuoteForm } from "@/components/forms/LandingQuoteForm";
import { business } from "@/config/business";
import type { LandingPage } from "@/content/landingPages";

export function LandingPageTemplate({ page }: { page: LandingPage }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-ink sm:text-4xl">{page.h1}</h1>
      <p className="mt-3 max-w-2xl text-[17.5px] text-text-dim">{page.supportingSentence}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={page.quoteHref} variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
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
        <p className="font-display text-sm font-semibold uppercase tracking-wide text-text-dim">Indicative price</p>
        <p className="mt-1 font-display text-xl font-semibold text-ink">{page.priceNote}</p>
      </Card>

      <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 rounded-2xl border border-line bg-paper p-4">
        {page.trustSignals.map((signal) => (
          <li key={signal} className="flex items-center gap-2 text-[15px] font-medium text-text">
            <CheckIcon className="h-4 w-4 shrink-0 text-whatsapp" />
            {signal}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <LandingQuoteForm detailsLabel={page.detailsLabel} />
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-line bg-paper p-6 text-center text-[15px] text-text-dim">
        A real completed move will appear here once supplied and verified.
      </div>
      <div className="mt-4 rounded-2xl border border-dashed border-line bg-paper p-6 text-center text-[15px] text-text-dim">
        No verified reviews published yet.
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Included</h2>
          <ul className="mt-3 space-y-2">
            {page.included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[15px] text-text">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Excluded / Optional</h2>
          <ul className="mt-3 space-y-2">
            {page.excluded.map((item) => (
              <li key={item} className="text-[15px] text-text-dim">• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold text-ink">Frequently asked questions</h2>
        <div className="mt-3">
          <FaqAccordion items={page.faqs} />
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-ink p-6 text-center text-white sm:p-8">
        <p className="font-display text-xl font-semibold">Ready for your written quote?</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button href={page.quoteHref} variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
            Get Free Quote
          </Button>
          <Button href={business.contact.whatsappHref} variant="whatsapp" icon={<WhatsappIcon className="h-5 w-5" />}>
            WhatsApp Us
          </Button>
        </div>
      </div>
    </div>
  );
}
