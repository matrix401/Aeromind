import { Section, SectionHeading } from "@/components/home/Section";
import { Card } from "@/components/ui/Card";

const options = [
  { title: "Speak to Us", description: "Call and explain what you need to move." },
  { title: "Send Photos", description: "Send six to ten room photos or one short video on WhatsApp." },
  { title: "Book a Free Survey", description: "Our team can inspect the items through a video call or home visit." },
];

export function ThreeWaysToQuote() {
  return (
    <Section alt>
      <SectionHeading title="Three Ways to Get a Quote" />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {options.map((option, i) => (
          <Card key={option.title} className="text-center">
            <p className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-base font-bold text-white">
              {i + 1}
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">{option.title}</h3>
            <p className="mt-1 text-[15.5px] text-text-dim">{option.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
