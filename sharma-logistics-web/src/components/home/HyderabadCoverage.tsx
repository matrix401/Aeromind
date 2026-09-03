import Link from "next/link";
import { Section, SectionHeading } from "@/components/home/Section";
import { Button } from "@/components/ui/Button";
import { localityRegions } from "@/content/localities";

export function HyderabadCoverage() {
  return (
    <Section alt>
      <SectionHeading title="Hyderabad Coverage" lede="Areas across the city we serve, grouped by region." />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {localityRegions.map((group) => (
          <div key={group.region} className="rounded-2xl border border-line bg-surface p-5">
            <Link href={group.href} className="font-display text-base font-semibold text-ink hover:underline">
              {group.region}
            </Link>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.localities.map((name) => (
                <li key={name} className="rounded-full bg-paper px-2.5 py-1 text-[13px] text-text-dim">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button href="/locations" variant="primary">
          Check Service in My Area
        </Button>
      </div>
    </Section>
  );
}
