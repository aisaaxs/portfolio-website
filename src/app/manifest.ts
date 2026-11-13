import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";

// Describe the portfolio when it is saved to a device or shown by a browser UI.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff8dc",
    theme_color: "#fff8dc",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
