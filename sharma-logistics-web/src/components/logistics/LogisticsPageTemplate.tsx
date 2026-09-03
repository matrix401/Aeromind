import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PhoneIcon, WhatsappIcon, QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";
import type { LogisticsDetail } from "@/content/logistics";

/**
 * One shared template for every business-logistics page — commercial
 * language throughout (shipment, consignment, cargo), kept fully separate
 * from the household-moving templates, per the brief's door separation.
 */
export function LogisticsPageTemplate({ service }: { service: LogisticsDetail }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Business Logistics", href: "/business-logistics" },
          { label: service.cardTitle },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{service.h1}</h1>
      <p className="mt-3 max-w-2xl text-[17.5px] text-text-dim">{service.valueProp}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/quote/business-logistics" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Get Business Logistics Quote
        </Button>
        <Button href={business.contact.phoneHref} variant="call" icon={<PhoneIcon className="h-5 w-5" />}>
          Call Now
        </Button>
        <Button href={business.contact.whatsappHref} variant="whatsapp" icon={<WhatsappIcon className="h-5 w-5" />}>
          WhatsApp Us
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Suitable goods</p>
          <p className="mt-1.5 text-[15px] text-text">{service.suitableGoods}</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Vehicle options</p>
          <p className="mt-1.5 text-[15px] text-text">{service.vehicleOptions}</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Load capacity</p>
          <p className="mt-1.5 text-[15px] text-text">{service.loadCapacity}</p>
        </Card>
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
        <h2 className="font-display text-lg font-semibold text-ink">Frequently asked questions</h2>
        <div className="mt-3">
          <FaqAccordion items={service.faqs} />
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-ink p-6 text-center text-white sm:p-8">
        <p className="font-display text-xl font-semibold">Ready to talk about your shipment?</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button href="/quote/business-logistics" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
            Get Business Logistics Quote
          </Button>
          <Button href={business.contact.whatsappHref} variant="whatsapp" icon={<WhatsappIcon className="h-5 w-5" />}>
            WhatsApp Us
          </Button>
        </div>
      </div>
    </div>
  );
}
