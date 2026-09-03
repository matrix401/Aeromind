import { ChevronDownIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export type FaqItem = { question: string; answer: string };

/**
 * Built on native <details>/<summary> — keyboard- and screen-reader-
 * accessible with no JavaScript required. Also emits FAQPage structured
 * data from the same items, so every page using this component is
 * FAQ-rich-result eligible without extra wiring.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <>
      <JsonLd data={faqJsonLd(items)} />
      <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
        {items.map((item, i) => (
          <details key={i} className="group px-5 py-1 open:pb-4">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-medium text-text marker:content-none">
              {item.question}
              <ChevronDownIcon className="h-5 w-5 shrink-0 text-text-dim transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-[16px] leading-relaxed text-text-dim">{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
