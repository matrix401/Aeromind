import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { logisticsServices, getLogisticsBySlug } from "@/content/logistics";
import { LogisticsPageTemplate } from "@/components/logistics/LogisticsPageTemplate";

export function generateStaticParams() {
  return logisticsServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getLogisticsBySlug(slug);
  if (!service) return {};
  return { title: service.cardTitle, description: service.metaDescription };
}

export default async function LogisticsServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getLogisticsBySlug(slug);
  if (!service) notFound();

  return <LogisticsPageTemplate service={service} />;
}
