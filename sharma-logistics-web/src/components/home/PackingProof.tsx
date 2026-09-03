import { Section, SectionHeading } from "@/components/home/Section";
import { packingExamples } from "@/content/homepage";

/**
 * Manual horizontal scroll only — no autoplay, no auto-advancing carousel,
 * per the design principles.
 */
export function PackingProof() {
  return (
    <Section alt>
      <SectionHeading
        title="How We Protect What You Move"
        lede="General packing method for common items. Photos from real Sharma Logistics moves will replace these placeholders as they're supplied."
      />
      <div className="mt-8 -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        {packingExamples.map((example) => (
          <div
            key={example.item}
            className="w-64 shrink-0 snap-start rounded-2xl border border-line bg-surface p-4"
          >
            <div
              aria-hidden="true"
              className="flex h-32 items-center justify-center rounded-xl bg-line text-xs text-text-dim"
            >
              [INSERT_REAL_MOVE_PHOTO]
            </div>
            <h3 className="mt-3 font-display text-base font-semibold text-ink">
              {example.item}
            </h3>
            <p className="mt-1 text-sm text-text-dim">{example.method}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
