import { Section, SectionHeading } from "@/components/home/Section";

/**
 * No real completed-move data has been supplied yet. Per the non-negotiable
 * truth policy, this section shows an honest pending state rather than
 * fabricated case studies — RealMoveCard (Phase 3) is wired up and ready
 * to render real entries the moment content/moves.ts is populated.
 */
export function RecentMoves() {
  return (
    <Section alt>
      <SectionHeading
        title="Recent Moves Completed by Our Hyderabad Team"
        lede="Real completed-move case studies — pickup, destination, crew, photos and outcome — will appear here once supplied and verified."
      />
      <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-dashed border-line bg-surface p-8 text-center text-[15.5px] text-text-dim">
        No verified moves published yet.
      </div>
    </Section>
  );
}
