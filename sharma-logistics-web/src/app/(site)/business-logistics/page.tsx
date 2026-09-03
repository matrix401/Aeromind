import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuoteIcon, PhoneIcon } from "@/components/ui/icons";
import { business } from "@/config/business";
import { logisticsServices } from "@/content/logistics";

export const metadata: Metadata = {
  title: "Business Logistics",
  description:
    "Nationwide commercial logistics from Hyderabad — full truck load, part load, warehousing and regular business transportation.",
  alternates: { canonical: "/business-logistics" },
};

export default function BusinessLogisticsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Business Logistics" }]} />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">I Need Business Logistics</h1>
      <p className="mt-3 max-w-2xl text-[17.5px] text-text-dim">
        Commercial goods, full truck or part load, industrial relocation and
        warehousing — sent from Hyderabad or between major Indian cities
        with clear documentation and delivery coordination.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button href="/quote/business-logistics" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Get Business Logistics Quote
        </Button>
        <Button href={business.contact.phoneHref} variant="call" icon={<PhoneIcon className="h-5 w-5" />}>
          Call Now
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {logisticsServices.map((service) => (
          <Link key={service.slug} href={`/business-logistics/${service.slug}`} className="block">
            <Card className="h-full transition-shadow hover:shadow-md">
              <h2 className="font-display text-lg font-semibold text-ink">{service.cardTitle}</h2>
              <p className="mt-1.5 text-[15.5px] text-text-dim">{service.cardDescription}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
