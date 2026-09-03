import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Locality } from "@/lib/types";

export function LocalityCard({ locality }: { locality: Locality }) {
  if (!locality.published) {
    return (
      <Card className="opacity-70">
        <h3 className="font-display text-[16.5px] font-semibold text-text">
          {locality.name}
        </h3>
        <p className="mt-1 text-sm text-text-dim">{locality.region}</p>
        <p className="mt-2 text-xs text-text-dim">
          Coverage page in progress — call for details on this area.
        </p>
      </Card>
    );
  }

  return (
    <Link href={`/locations/${locality.slug}`} className="block">
      <Card className="h-full transition-shadow hover:shadow-md">
        <h3 className="font-display text-[16.5px] font-semibold text-ink">
          {locality.name}
        </h3>
        <p className="mt-1 text-sm text-text-dim">{locality.region}</p>
      </Card>
    </Link>
  );
}
