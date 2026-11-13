import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";

// The portfolio currently has one canonical, statically rendered route.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url.toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
