import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";

// Advertise crawl permissions and the canonical sitemap location.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url.origin,
  };
}
