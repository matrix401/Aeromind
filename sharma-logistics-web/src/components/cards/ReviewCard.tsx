import { Card } from "@/components/ui/Card";
import type { Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card>
      <p className="text-[16.5px] leading-relaxed text-text">{review.service}</p>
      <dl className="mt-3 space-y-1 text-sm text-text-dim">
        <div className="flex gap-2">
          <dt className="font-medium text-text">Route:</dt>
          <dd>{review.route}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium text-text">Date:</dt>
          <dd>{review.date}</dd>
        </div>
      </dl>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="font-display text-sm font-semibold text-ink">
          {review.name}
        </span>
        <a
          href={review.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-ink-2 hover:underline"
        >
          View independent review ↗
        </a>
      </div>
    </Card>
  );
}
