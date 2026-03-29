import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Anitej Isaac Sharma | Portfolio",
  description: "Software engineer, photographer, writer. Builds, frames, words.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}