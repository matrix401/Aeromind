import { Section, SectionHeading } from "@/components/home/Section";
import { Card } from "@/components/ui/Card";

const lineItems = [
  { label: "Packing material and labour", value: "[VERIFY]" },
  { label: "Loading and unloading", value: "[VERIFY]" },
  { label: "Transport (distance-based)", value: "[VERIFY]" },
  { label: "Dismantling / assembly (if needed)", value: "[VERIFY]" },
  { label: "Insurance / transit protection (optional)", value: "[VERIFY]" },
  { label: "GST", value: "[VERIFY]" },
];

export function WrittenPriceClarity() {
  return (
    <Section>
      <SectionHeading
        title="Know What You Are Paying Before We Start"
        lede="A sample layout only — actual pricing is never shown until your own written quotation is prepared."
      />

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-text-dim">
            Sample quotation layout
          </p>
          <dl className="mt-4 divide-y divide-line">
            {lineItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 py-2.5 text-[15px]">
                <dt className="text-text">{item.label}</dt>
                <dd className="font-medium text-text-dim">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Card>

        <div className="space-y-5 text-[15.5px] text-text">
          <div>
            <h3 className="font-display text-base font-semibold text-ink">Included / Excluded</h3>
            <p className="mt-1 text-text-dim">[VERIFY_INCLUDED_EXCLUDED_SERVICES]</p>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-ink">Optional charges</h3>
            <p className="mt-1 text-text-dim">[VERIFY_OPTIONAL_CHARGES]</p>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-ink">Payment stages</h3>
            <p className="mt-1 text-text-dim">[VERIFY_ADVANCE_PAYMENT_POLICY]</p>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-ink">GST</h3>
            <p className="mt-1 text-text-dim">[VERIFY_GST_INVOICE_AVAILABILITY]</p>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-ink">When the price can change</h3>
            <p className="mt-1 text-text-dim">[VERIFY_PRICE_CHANGE_POLICY]</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
