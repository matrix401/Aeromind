import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RouteCard } from "@/components/cards/RouteCard";
import { Button } from "@/components/ui/Button";
import { QuoteIcon } from "@/components/ui/icons";
import { routeDetails } from "@/content/routeDetails";

export const metadata: Metadata = {
  title: "Interstate Routes from Hyderabad",
  description:
    "Interstate relocation routes from Hyderabad to major Indian cities, with delivery timelines and pricing guidance.",
};

export default function RoutesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Routes" }]} />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">Interstate Routes from Hyderabad</h1>
      <p className="mt-3 max-w-2xl text-[17.5px] text-text-dim">
        Household and office relocation to major Indian cities. Don&apos;t see
        your destination? Call us — we likely still cover it.
      </p>

      <div className="mt-4">
        <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Get Free Quote
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routeDetails.map((route) => (
          <RouteCard key={route.slug} route={route} />
        ))}
      </div>
    </div>
  );
}
