import ScrapbookClient from "@/components/scrapbook-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anitej Isaac Sharma | Scrapbook",
};

export default function Scrapbook() {
    return <ScrapbookClient />;
}