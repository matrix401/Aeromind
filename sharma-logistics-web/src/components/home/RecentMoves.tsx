import { Section, SectionHeading } from "@/components/home/Section";
import { RealMoveCard } from "@/components/cards/RealMoveCard";
import { getMovesFor } from "@/content/moves";

/**
 * Pulls from the single real-move data source (content/moves.ts). Per the
 * non-negotiable truth policy, this shows an honest pending state until
 * at least one customer-approved move is on file — never a fabricated
 * case study.
 */
export function RecentMoves() {
  const moves = getMovesFor({ page: "homepage", limit: 6 });

  return (
    <Section alt>
      <SectionHeading
        title="Recent Moves Completed by Our Hyderabad Team"
        lede="Real completed-move case studies — pickup, destination, crew, photos and outcome."
      />
      {moves.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moves.map((move) => (
            <RealMoveCard key={move.id} move={move} />
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-dashed border-line bg-surface p-8 text-center text-[15.5px] text-text-dim">
          No verified moves published yet.
        </div>
      )}
    </Section>
  );
}
