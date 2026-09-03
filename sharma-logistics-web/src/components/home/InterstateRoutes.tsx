import { Section, SectionHeading } from "@/components/home/Section";
import { RouteCard } from "@/components/cards/RouteCard";
import { homepageRoutes } from "@/content/routes";

export function InterstateRoutes() {
  return (
    <Section>
      <SectionHeading title="Interstate Routes from Hyderabad" />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {homepageRoutes.map((route) => (
          <RouteCard key={route.slug} route={route} />
        ))}
      </div>
    </Section>
  );
}
