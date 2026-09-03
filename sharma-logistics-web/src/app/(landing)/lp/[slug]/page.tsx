import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { landingPages, getLandingPageBySlug } from "@/content/landingPages";
import { LandingPageTemplate } from "@/components/landing/LandingPageTemplate";

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.supportingSentence,
    // Ad landing pages are duplicative of the real service/locality pages
    // by design — never compete with them in the organic index.
    robots: { index: false, follow: true },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) notFound();

  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-4 py-10 sm:px-6"><div className="h-96 animate-pulse rounded-2xl bg-line/40" /></div>}>
      <LandingPageTemplate page={page} />
    </Suspense>
  );
}
