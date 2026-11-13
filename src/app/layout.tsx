import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { siteConfig } from "@/src/config/site";
import "./globals.css";

// Load the primary body font through Next.js so it is optimized and self-hosted.
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.title,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  keywords: [
    "Anitej Isaac Sharma",
    "software developer",
    "full-stack developer",
    "backend developer",
    "AI engineer",
    "Next.js developer",
    "Vancouver software developer",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/images/about/comic-waterfall-selfie.png",
        alt: `${siteConfig.name}'s portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/about/comic-waterfall-selfie.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Supply the document shell shared by every route in the application.
export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: `mailto:${siteConfig.email}`,
        jobTitle: "Software Developer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vancouver",
          addressRegion: "BC",
          addressCountry: "CA",
        },
        sameAs: siteConfig.socialProfiles,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "en-CA",
        author: { "@id": `${siteConfig.url}#person` },
      },
    ],
  };

  return (
    <html
      lang="en-CA"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
