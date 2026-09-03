import { Section, SectionHeading } from "@/components/home/Section";
import { business } from "@/config/business";

/**
 * No real, independently-verifiable reviews have been supplied yet.
 * Per the non-negotiable truth policy, we never fabricate testimonials —
 * this links out to the real Google Business Profile once it's confirmed,
 * and ReviewCard (Phase 3) renders real entries once available.
 */
export function Reviews() {
  return (
    <Section>
      <SectionHeading
        title="What Customers Say After Their Move"
        lede="Real reviews, each linking to its independent source, will appear here once verified."
      />
      <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-dashed border-line bg-paper p-8 text-center text-[15.5px] text-text-dim">
        No verified reviews published yet.
        {business.googleBusinessProfileUrl.startsWith("[VERIFY") ? null : (
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
        )}
      </div>
    </Section>
  );
}
