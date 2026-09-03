import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/content/services";
import { regionHubs } from "@/content/regions";
import { routeDetails } from "@/content/routeDetails";
import { logisticsServices } from "@/content/logistics";

// Static, always-indexable pages. Draft locality pages, /privacy and
// /terms are intentionally excluded — they're noindexed until real
// content backs them, and a noindexed URL doesn't belong in the sitemap.
const staticPaths = [
  "",
  "/moving-services",
  "/business-logistics",
  "/charges",
  "/locations",
  "/reviews",
  "/track-move",
  "/about",
  "/contact",
  "/routes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const service of services) {
    entries.push({
      url: `${SITE_URL}/moving-services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const region of regionHubs) {
    entries.push({
      url: `${SITE_URL}/locations/${region.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const route of routeDetails) {
    entries.push({
      url: `${SITE_URL}/routes/${route.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const service of logisticsServices) {
    entries.push({
      url: `${SITE_URL}/business-logistics/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
