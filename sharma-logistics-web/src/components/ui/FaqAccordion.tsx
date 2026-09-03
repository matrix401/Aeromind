import { ChevronDownIcon } from "@/components/ui/icons";

export type FaqItem = { question: string; answer: string };

/**
 * Built on native <details>/<summary> — keyboard- and screen-reader-
 * accessible with no JavaScript required.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
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
  );
}
