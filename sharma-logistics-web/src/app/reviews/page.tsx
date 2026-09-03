import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Real, independently verifiable reviews from Sharma Logistics Solutions customers.",
};

export default function ReviewsPage() {
  const hasProfile = !business.googleBusinessProfileUrl.startsWith("[VERIFY");

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
        What Customers Say After Their Move
      </h1>
      <p className="mt-3 text-[17.5px] text-text-dim">
        Every review shown here links to its independent source — we don&apos;t
        write or publish testimonials ourselves.
      </p>

      <div className="mt-8 rounded-2xl border border-dashed border-line bg-paper p-8 text-center text-[15.5px] text-text-dim">
        No verified reviews published yet.
        {hasProfile ? (
          <>
            {" "}
            <a
              href={business.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink-2 hover:underline"
            >
              See our Google reviews ↗
            </a>
          </>
        ) : (
          <p className="mt-2 text-sm">[VERIFY_GOOGLE_BUSINESS_PROFILE_LINK] — will link here once confirmed.</p>
        )}
      </div>

      <div className="mt-10 text-center">
        <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Get Free Quote
        </Button>
      </div>
    </div>
  );
}
