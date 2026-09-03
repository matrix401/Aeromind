import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuoteIcon } from "@/components/ui/icons";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Moving Services",
  description:
    "Home shifting, office shifting, interstate relocation, bike and car transport, packing, storage — all Sharma Logistics Solutions moving services in one place.",
  alternates: { canonical: "/moving-services" },
};

export default function MovingServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Moving Services" }]} />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">I Want to Move</h1>
      <p className="mt-3 max-w-2xl text-[17.5px] text-text-dim">
        Home, office, bike, car, storage or just a few items — pick what you
        need below for pricing details, what&apos;s included, and how it works.
      </p>

      <div className="mt-4">
        <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Get Free Quote
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <Link key={service.slug} href={`/moving-services/${service.slug}`} className="block">
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
