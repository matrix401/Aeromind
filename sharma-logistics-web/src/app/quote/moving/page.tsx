import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MovingQuoteWizard } from "@/components/forms/MovingQuoteWizard";
import { Button } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Get a Free Moving Quote",
  description:
    "Tell us about your home, office, bike or car move and get your written quotation from Sharma Logistics Solutions.",
};

export default function MovingQuotePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Get Free Quote" }]} />

      <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
        Get Your Moving Quote
      </h1>
      <p className="mt-2 text-[16.5px] text-text-dim">
        A few quick questions and we&apos;ll get you a written quotation.
      </p>

      <div className="mt-6">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-line/40" />}>
          <MovingQuoteWizard />
        </Suspense>
      </div>

      <p className="mt-6 text-center text-sm text-text-dim">
        Prefer to talk it through?{" "}
        <Button
          href={business.contact.phoneHref}
          variant="secondary"
          icon={<PhoneIcon className="h-4 w-4" />}
          className="ml-2 min-h-9 px-4 text-sm"
        >
          Call us
        </Button>
      </p>
    </div>
  );
}
