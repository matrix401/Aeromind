import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRegionBySlug, regionHubs } from "@/content/regions";
import { getDraftLocalityBySlug, draftLocalities } from "@/content/localities";
import { RegionHubTemplate } from "@/components/locations/RegionHubTemplate";
import { LocalityDraftTemplate } from "@/components/locations/LocalityDraftTemplate";

export function generateStaticParams() {
  return [
    ...regionHubs.map((region) => ({ slug: region.slug })),
    ...draftLocalities.map((locality) => ({ slug: locality.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const region = getRegionBySlug(slug);
  if (region) {
    return { title: region.h1, description: region.metaDescription };
  }

  const locality = getDraftLocalityBySlug(slug);
  if (locality) {
    return {
      title: `Packers and Movers in ${locality.name}`,
      // Draft page — kept out of search results until real local
      // evidence backs unique content for this specific area.
      robots: { index: false, follow: true },
    };
  }

  return {};
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const region = getRegionBySlug(slug);
  if (region) return <RegionHubTemplate region={region} />;

  const locality = getDraftLocalityBySlug(slug);
  if (locality) return <LocalityDraftTemplate locality={locality} />;

  notFound();
}
