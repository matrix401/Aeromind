import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuoteIcon } from "@/components/ui/icons";
import { priceTabs, priceVariables } from "@/content/homepage";

export const metadata: Metadata = {
  title: "Packers and Movers Charges in Hyderabad",
  description:
    "Understand what affects your moving cost with Sharma Logistics Solutions — price factors for local, interstate, vehicle transport and business logistics.",
  alternates: { canonical: "/charges" },
};

const lineItems = [
  { label: "Packing material and labour", value: "[VERIFY]" },
  { label: "Loading and unloading", value: "[VERIFY]" },
  { label: "Transport (distance-based)", value: "[VERIFY]" },
  { label: "Dismantling / assembly (if needed)", value: "[VERIFY]" },
  { label: "Insurance / transit protection (optional)", value: "[VERIFY]" },
  { label: "GST", value: "[VERIFY]" },
];

export default function ChargesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Charges" }]} />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
        Understand the Cost Before You Call
      </h1>
      <p className="mt-3 max-w-2xl text-[17.5px] text-text-dim">
        Every quotation is written and specific to your move — here&apos;s what
        goes into it, so nothing on your bill is a surprise.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {priceTabs.map((tab) => (
          <Card key={tab.key}>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-text-dim">{tab.label}</p>
            <p className="mt-1.5 font-display text-lg font-semibold text-ink">{tab.note}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">What changes the price</h2>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
          {priceVariables.map((variable) => (
            <li key={variable} className="text-[15.5px] text-text-dim">
              • {variable}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">Sample quotation layout</h2>
        <p className="mt-2 text-[15px] text-text-dim">
          A layout only — actual pricing is never shown until your own written quotation is prepared.
        </p>
        <Card className="mt-4">
          <dl className="divide-y divide-line">
            {lineItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 py-2.5 text-[15px]">
                <dt className="text-text">{item.label}</dt>
                <dd className="font-medium text-text-dim">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>

      <div className="mt-10 rounded-2xl bg-ink p-6 text-center text-white sm:p-8">
        <p className="font-display text-xl font-semibold">Get your exact written quote</p>
        <div className="mt-4 flex justify-center">
          <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
            Get My Exact Written Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
