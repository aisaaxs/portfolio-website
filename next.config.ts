import type { NextConfig } from "next";

// Enable Next.js performance features and teach Turbopack how to process the
// Tailwind entry stylesheet during local development and production builds.
const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
