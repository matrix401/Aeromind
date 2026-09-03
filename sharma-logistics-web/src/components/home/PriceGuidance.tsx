"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/home/Section";
import { QuoteIcon } from "@/components/ui/icons";
import { priceTabs, priceVariables } from "@/content/homepage";

export function PriceGuidance() {
  const [activeKey, setActiveKey] = useState(priceTabs[0].key);
  const active = priceTabs.find((tab) => tab.key === activeKey) ?? priceTabs[0];
  const panelId = useId();

  return (
    <Section>
      <SectionHeading title="Understand the Cost Before You Call" />

      <div role="tablist" aria-label="Price guidance category" className="mt-8 flex flex-wrap justify-center gap-2">
        {priceTabs.map((tab) => {
          const isActive = tab.key === activeKey;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${panelId}-panel`}
              onClick={() => setActiveKey(tab.key)}
              className={`min-h-12 rounded-full px-5 text-[15px] font-semibold transition-colors ${
                isActive ? "bg-ink text-white" : "border border-line bg-surface text-text hover:border-ink"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div id={`${panelId}-panel`} role="tabpanel" className="mx-auto mt-6 max-w-3xl rounded-2xl border border-line bg-surface p-6 text-center">
        <p className="font-display text-xl font-semibold text-ink">{active.note}</p>
        <p className="mt-1 text-sm text-text-dim">
          Verified price ranges will be published here once confirmed with the business owner.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl">
        <h3 className="text-center font-display text-base font-semibold text-text">
          What changes the price
        </h3>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
          {priceVariables.map((variable) => (
            <li key={variable} className="text-[15px] text-text-dim">
              • {variable}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex justify-center">
        <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Get My Exact Written Quote
        </Button>
      </div>
    </Section>
  );
}
