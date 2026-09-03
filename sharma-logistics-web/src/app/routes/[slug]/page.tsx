import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routeDetails, getRouteBySlug } from "@/content/routeDetails";
import { RoutePageTemplate } from "@/components/routes/RoutePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return routeDetails.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return {};
  return {
    title: route.h1,
    description: route.metaDescription,
    alternates: { canonical: `/routes/${route.slug}` },
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: route.h1,
          description: route.metaDescription,
          url: `/routes/${route.slug}`,
        })}
      />
      <RoutePageTemplate route={route} />
    </>
  );
}
