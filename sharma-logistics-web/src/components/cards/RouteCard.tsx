import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { RouteLane } from "@/lib/types";

export function RouteCard({ route }: { route: RouteLane }) {
  return (
    <Link href={`/routes/${route.slug}`} className="block">
      <Card className="h-full transition-shadow hover:shadow-md">
        <h3 className="font-display text-[16.5px] font-semibold text-ink">
          {route.from} → {route.to}
        </h3>
        <dl className="mt-3 space-y-1 text-sm text-text-dim">
          <div className="flex gap-2">
            <dt className="font-medium text-text">Delivery time:</dt>
            <dd>{route.deliveryTimeRange ?? "[VERIFY_DELIVERY_TIME_RANGE]"}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-text">Price range:</dt>
            <dd>{route.priceRange ?? "[VERIFY_PRICE_RANGE]"}</dd>
          </div>
        </dl>
      </Card>
    </Link>
  );
}
