import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/for-interior-firms",
    "/for-customers",
    "/how-it-works",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return [
    ...pages.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/insights/${article.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
