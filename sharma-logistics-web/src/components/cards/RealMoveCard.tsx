import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { RealMove } from "@/lib/types";

export function RealMoveCard({ move }: { move: RealMove }) {
  const cover = move.images[0];

  return (
    <Card className="overflow-hidden p-0">
      {cover ? (
        <div className="relative aspect-[4/3] w-full bg-line">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 320px, 90vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="flex aspect-[4/3] w-full items-center justify-center bg-line text-sm text-text-dim"
        >
          [INSERT_REAL_MOVE_PHOTO]
        </div>
      )}
      <div className="p-5">
        <p className="font-display text-[17px] font-semibold text-ink">
          {move.pickupLocality} → {move.destination}
        </p>
        <p className="mt-1 text-sm text-text-dim">
          {move.serviceType} · {move.date}
        </p>
        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-text-dim">
          <div>
            <dt className="inline font-medium text-text">Load: </dt>
            <dd className="inline">{move.sizeOrLoad}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-text">Vehicle: </dt>
            <dd className="inline">{move.vehicle}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-text">Crew: </dt>
            <dd className="inline">{move.crewSize}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-text">Duration: </dt>
            <dd className="inline">{move.durationHours}</dd>
          </div>
        </dl>
        <p className="mt-3 text-sm font-medium text-ink-2">{move.priceBand}</p>
        {move.customerReview ? (
          <p className="mt-3 border-t border-line pt-3 text-[14.5px] italic text-text">
            &ldquo;{move.customerReview}&rdquo;
          </p>
        ) : null}
        {move.googleReviewLink ? (
          <a
            href={move.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-ink-2 hover:underline"
          >
            View independent review ↗
          </a>
        ) : null}
      </div>
    </Card>
  );
}
