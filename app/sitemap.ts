import type { MetadataRoute } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://claytontyler.com");

export default function sitemap(): MetadataRoute.Sitemap {
  const cases = getAllCaseStudies();
  const now = new Date();

  return [
    { url: `${siteUrl}/`, lastModified: now, priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, priority: 0.8 },
    ...cases.map((c) => ({
      url: `${siteUrl}/work/${c.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
