import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/content/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.cardTitle,
    description: service.metaDescription,
    alternates: { canonical: `/moving-services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.cardTitle,
          description: service.metaDescription,
          url: `/moving-services/${service.slug}`,
        })}
      />
      <ServicePageTemplate
        service={service}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Moving Services", href: "/moving-services" },
          { label: service.cardTitle },
        ]}
      />
    </>
  );
}
