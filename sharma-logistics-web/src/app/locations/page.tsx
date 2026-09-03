import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuoteIcon } from "@/components/ui/icons";
import { regionHubs } from "@/content/regions";
import { localityRegions } from "@/content/localities";

export const metadata: Metadata = {
  title: "Locations We Serve",
  description:
    "Sharma Logistics Solutions coverage across Hyderabad — North, West, Central, East, South Hyderabad and Secunderabad.",
};

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">Locations We Serve</h1>
      <p className="mt-3 max-w-2xl text-[17.5px] text-text-dim">
        Pick your side of the city for coverage details, or check the full
        locality list further down. Not sure? Just call or WhatsApp us.
      </p>

      <div className="mt-4">
        <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Check Service in My Area
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regionHubs.map((region) => (
          <Link key={region.slug} href={`/locations/${region.slug}`} className="block">
            <Card className="h-full transition-shadow hover:shadow-md">
              <h2 className="font-display text-lg font-semibold text-ink">{region.name}</h2>
              <p className="mt-1.5 text-[14.5px] text-text-dim">
                {(region.localities.length > 0 ? region.localities : region.nearbyAreas ?? [])
                  .slice(0, 4)
                  .join(", ")}
                {(region.localities.length > 0 ? region.localities.length : (region.nearbyAreas ?? []).length) > 4
                  ? " and more"
                  : ""}
              </p>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">All localities, by region</h2>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {localityRegions.map((group) => (
            <div key={group.region} className="rounded-2xl border border-line bg-surface p-5">
              <Link href={group.href} className="font-display text-base font-semibold text-ink hover:underline">
                {group.region}
              </Link>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.localities.map((name) => (
                  <li key={name} className="rounded-full bg-paper px-2.5 py-1 text-[13px] text-text-dim">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
