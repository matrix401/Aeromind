import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PhoneIcon, WhatsappIcon, QuoteIcon } from "@/components/ui/icons";
import { ViewTracker } from "@/components/analytics/ViewTracker";
import { RealMoveCard } from "@/components/cards/RealMoveCard";
import { business } from "@/config/business";
import { getMovesFor } from "@/content/moves";
import type { RouteDetail } from "@/content/routeDetails";

export function RoutePageTemplate({ route }: { route: RouteDetail }) {
  const relatedMoves = getMovesFor({ routeSlug: route.slug, limit: 1 });

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <ViewTracker event="route_view" params={{ route: route.slug, from: route.from, to: route.to }} />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Routes", href: "/routes" }, { label: `${route.from} to ${route.to}` }]}
      />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{route.h1}</h1>
      <p className="mt-3 max-w-2xl text-[17.5px] text-text-dim">{route.intro}</p>

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

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Delivery time</p>
          <p className="mt-1 font-display text-base font-semibold text-ink">{route.deliveryTimeRange ?? "[VERIFY_DELIVERY_TIME_RANGE]"}</p>
        </Card>
        <Card className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Price range</p>
          <p className="mt-1 font-display text-base font-semibold text-ink">{route.priceRange ?? "[VERIFY_PRICE_RANGE]"}</p>
        </Card>
        <Card className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Vehicle</p>
          <p className="mt-1 font-display text-base font-semibold text-ink">[VERIFY_SHARED_VS_DEDICATED_POLICY]</p>
        </Card>
        <Card className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Tracking</p>
          <p className="mt-1 font-display text-base font-semibold text-ink">[VERIFY_TRACKING_CAPABILITY]</p>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Pickup process</h2>
          <ol className="mt-3 space-y-2">
            {["Share your pickup and destination details", "Video call or WhatsApp photo survey", "Receive a written quotation", "Packing, loading and transit", `Delivery and unloading in ${route.to}`].map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-[15px] text-text">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="font-display text-base font-semibold text-ink">Packing</h2>
            <p className="mt-1 text-[15px] text-text-dim">Full transit-grade packing included — see the homepage packing proof section for materials and method.</p>
          </div>
          <div>
            <h2 className="font-display text-base font-semibold text-ink">Vehicle transport</h2>
            <p className="mt-1 text-[15px] text-text-dim">Bike and car transport are available on this route — see Bike Transport and Car Transport.</p>
          </div>
          <div>
            <h2 className="font-display text-base font-semibold text-ink">Insurance / protection</h2>
            <p className="mt-1 text-[15px] text-text-dim">[VERIFY_INSURANCE_POLICY] — ask your coordinator what protection is available.</p>
          </div>
          <div>
            <h2 className="font-display text-base font-semibold text-ink">Documents</h2>
            <p className="mt-1 text-[15px] text-text-dim">[VERIFY_INTERSTATE_DOCUMENTATION_REQUIREMENTS]</p>
          </div>
        </div>
      </div>

      {relatedMoves.length > 0 ? (
        <div className="mt-8">
          <RealMoveCard move={relatedMoves[0]} />
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-line bg-paper p-6 text-center text-[15px] text-text-dim">
          A real completed {route.from}–{route.to} move will appear here once supplied and verified.
        </div>
      )}
      <div className="mt-4 rounded-2xl border border-dashed border-line bg-paper p-6 text-center text-[15px] text-text-dim">
        No verified reviews for this route published yet.
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold text-ink">Frequently asked questions</h2>
        <div className="mt-3">
          <FaqAccordion items={route.faqs} />
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-ink p-6 text-center text-white sm:p-8">
        <p className="font-display text-xl font-semibold">Moving to {route.to}? Get your written quote.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
            Get Free Quote
          </Button>
          <Button href={business.contact.whatsappHref} variant="whatsapp" icon={<WhatsappIcon className="h-5 w-5" />} analyticsEvent="send_photos_click">
            Send Photos
          </Button>
        </div>
      </div>
    </div>
  );
}
