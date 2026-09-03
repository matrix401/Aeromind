import { Section, SectionHeading } from "@/components/home/Section";

const steps = [
  "Tell us about your move",
  "Receive a written quotation",
  "Our team packs and labels your belongings",
  "Receive movement updates",
  "Delivery, unloading and handover",
];

export function HowItWorks() {
  return (
    <Section>
      <SectionHeading title="How It Works" />
      <ol className="mx-auto mt-8 flex max-w-4xl flex-col gap-4 sm:flex-row sm:gap-3">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-1 items-start gap-3 sm:flex-col sm:items-center sm:text-center">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange font-display text-base font-bold text-white">
              {i + 1}
            </span>
            <p className="pt-1.5 text-[15.5px] font-medium text-text sm:pt-0">{step}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
