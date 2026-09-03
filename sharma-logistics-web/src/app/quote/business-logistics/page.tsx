import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BusinessLogisticsQuoteForm } from "@/components/forms/BusinessLogisticsQuoteForm";

export const metadata: Metadata = {
  title: "Business Logistics Enquiry",
  description:
    "Tell us about your commercial goods shipment and get a response from Sharma Logistics Solutions' logistics team.",
  alternates: { canonical: "/quote/business-logistics" },
};

export default function BusinessLogisticsQuotePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Business Logistics", href: "/business-logistics" },
          { label: "Enquiry" },
        ]}
      />

      <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
        Business Logistics Enquiry
      </h1>
      <p className="mt-2 text-[16.5px] text-text-dim">
        Tell us about your shipment and our logistics team will get back to you.
      </p>

      <div className="mt-6">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-line/40" />}>
          <BusinessLogisticsQuoteForm />
        </Suspense>
      </div>
    </div>
  );
}
