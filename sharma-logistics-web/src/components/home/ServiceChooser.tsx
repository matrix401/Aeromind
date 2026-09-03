import { Section, SectionHeading } from "@/components/home/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { serviceChooserItems } from "@/content/homepage";

export function ServiceChooser() {
  return (
    <Section alt>
      <SectionHeading title="What Do You Need to Move?" />
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {serviceChooserItems.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}
