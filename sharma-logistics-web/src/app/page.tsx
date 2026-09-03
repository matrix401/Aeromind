import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { LocalityCard } from "@/components/cards/LocalityCard";
import { RouteCard } from "@/components/cards/RouteCard";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { QuoteResultState } from "@/components/forms/QuoteResultState";
import { PhoneIcon, WhatsappIcon, QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

// Sample data below is UI scaffolding only — clearly not real business
// content. Phase 4 replaces this page with the real homepage, and Phases
// 6-8 supply verified services/localities/routes/reviews.
const sampleServices = [
  { slug: "sample", title: "[SAMPLE] Move My Home", description: "Component preview only — not live content.", href: "#" },
  { slug: "sample-2", title: "[SAMPLE] Move My Office", description: "Component preview only — not live content.", href: "#" },
];

const sampleLocalities = [
  { slug: "sample", name: "[SAMPLE] Kukatpally", region: "West Hyderabad", published: false },
  { slug: "sample-2", name: "[SAMPLE] Alwal", region: "North Hyderabad", published: false },
];

const sampleRoutes = [
  { slug: "sample", from: "Hyderabad", to: "Bengaluru" },
];

const sampleReview = {
  name: "[SAMPLE_CUSTOMER_NAME]",
  route: "[SAMPLE_ROUTE]",
  date: "[SAMPLE_DATE]",
  service: "[SAMPLE REVIEW TEXT — placeholder only, not a real customer review]",
  reviewUrl: "#",
};

export default function ScaffoldStatusPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home" }]} />

      <div className="mt-6 rounded-xl border-2 border-orange/40 bg-orange/5 p-4 text-sm text-text">
        <strong>Phase 3 — Technical Foundation scaffold.</strong> This is a
        component/status preview, not the real homepage. Phase 4 replaces this
        page with the actual homepage content and copy from the approved
        wireframes.
      </div>

      <h1 className="mt-8 text-3xl font-bold text-ink sm:text-4xl">
        {business.brandName}
      </h1>
      <p className="mt-2 max-w-xl text-[17.5px] text-text-dim">
        {business.tagline} — {business.brandPromise}
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-ink">Buttons</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
            Check Moving Cost
          </Button>
          <Button href={business.contact.phoneHref} variant="call" icon={<PhoneIcon className="h-5 w-5" />}>
            Call and Get Help
          </Button>
          <Button href={business.contact.whatsappHref} variant="whatsapp" icon={<WhatsappIcon className="h-5 w-5" />}>
            Send Photos on WhatsApp
          </Button>
          <Button variant="secondary">Get Free Quote</Button>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-ink">Trust strip</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {business.trustPoints.map((point) => (
            <Card key={point} className="text-center text-sm font-medium text-text">
              {point}
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-ink">Service cards</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sampleServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-ink">Locality cards</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sampleLocalities.map((l) => (
            <LocalityCard key={l.slug} locality={l} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-ink">Route card</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sampleRoutes.map((r) => (
            <RouteCard key={r.slug} route={r} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-ink">Review card</h2>
        <div className="mt-4 max-w-md">
          <ReviewCard review={sampleReview} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-ink">FAQ accordion</h2>
        <div className="mt-4">
          <FaqAccordion
            items={[
              { question: "Is packing included?", answer: "[SAMPLE ANSWER — populated in Phase 4/6 with verified policy.]" },
              { question: "Can I track my goods?", answer: "[SAMPLE ANSWER — populated in Phase 4/6 with verified policy.]" },
            ]}
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-ink">Quote result states</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <QuoteResultState status="empty" />
          <QuoteResultState status="loading" />
          <QuoteResultState status="error" message="Something went wrong. Please try again." />
          <QuoteResultState status="success" />
        </div>
      </section>
    </div>
  );
}
