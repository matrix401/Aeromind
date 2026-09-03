import { Section } from "@/components/home/Section";
import { Button } from "@/components/ui/Button";
import { QuoteIcon } from "@/components/ui/icons";

export function BusinessLogisticsTeaser() {
  return (
    <Section alt>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold text-ink sm:text-[28px]">
          Nationwide Transport for Business Goods
        </h2>
        <p className="max-w-xl text-[16.5px] text-text-dim">
          Send commercial goods from Hyderabad or between major Indian cities
          with clear documentation and delivery coordination.
        </p>
        <Button href="/business-logistics" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Explore Business Logistics
        </Button>
      </div>
    </Section>
  );
}
