import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { ServiceSummary } from "@/lib/types";

export function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <Link href={service.href} className="block">
      <Card className="h-full transition-shadow hover:shadow-md">
        <h3 className="font-display text-[17px] font-semibold text-ink">
          {service.title}
        </h3>
        <p className="mt-2 text-[15.5px] text-text-dim">{service.description}</p>
      </Card>
    </Link>
  );
}
