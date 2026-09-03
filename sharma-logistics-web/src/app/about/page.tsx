import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${business.brandName} — Hyderabad's transparent moving partner.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">About {business.brandName}</h1>
      <p className="mt-3 text-[17.5px] text-text-dim">{business.tagline}</p>

      <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-text">
        <p>{business.brandPromise}</p>
        <p>{business.supportingMessage}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Years in operation</p>
          <p className="mt-1 font-display text-lg font-semibold text-ink">{business.yearsInOperation}</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Moves completed</p>
          <p className="mt-1 font-display text-lg font-semibold text-ink">{business.completedMovesCount}</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Registration</p>
          <p className="mt-1 font-display text-lg font-semibold text-ink">GST: {business.registrations.gst}</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Languages</p>
          <p className="mt-1 font-display text-lg font-semibold text-ink">{business.languagesSupported.join(" • ")}</p>
        </Card>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">What we promise</h2>
        <ul className="mt-4 space-y-2">
          {business.trustPoints.map((point) => (
            <li key={point} className="text-[16px] text-text">• {point}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-2xl bg-ink p-6 text-center text-white sm:p-8">
        <p className="font-display text-xl font-semibold">Ready to plan your move?</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
            Get Free Quote
          </Button>
          <Button href={business.contact.phoneHref} variant="call" icon={<PhoneIcon className="h-5 w-5" />}>
            Call Now
          </Button>
        </div>
      </div>
    </div>
  );
}
