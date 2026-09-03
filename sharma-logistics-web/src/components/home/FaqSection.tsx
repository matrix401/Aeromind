import { Section, SectionHeading } from "@/components/home/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { homepageFaqs } from "@/content/homepage";

export function FaqSection() {
  return (
    <Section>
      <SectionHeading title="Frequently Asked Questions" />
      <div className="mx-auto mt-8 max-w-3xl">
        <FaqAccordion items={homepageFaqs} />
      </div>
    </Section>
  );
}
