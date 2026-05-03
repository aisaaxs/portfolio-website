import PingClient from "@/components/ping-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anitej Isaac Sharma | Ping",
};

export default function Scrapbook() {
    return <PingClient />;
}