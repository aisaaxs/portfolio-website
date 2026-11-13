// Centralize public site details so metadata, crawlers, and structured data stay aligned.
const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://aisaaxs.space/";

export const siteConfig = {
  name: "Anitej Isaac Sharma",
  title: "Anitej Isaac Sharma | Software Developer Portfolio",
  description:
    "Portfolio of Anitej Isaac Sharma, a Vancouver-based software developer building full-stack, backend, cloud, and AI-powered products.",
  url: new URL(
    deploymentUrl.startsWith("http") ? deploymentUrl : `https://${deploymentUrl}`
  ),
  locale: "en_CA",
  email: "anitejsharmas@gmail.com",
  socialProfiles: [
    "https://github.com/aisaaxs/",
    "https://www.linkedin.com/in/aisaaxs/",
    "https://www.instagram.com/aisaaxs/",
  ],
} as const;
