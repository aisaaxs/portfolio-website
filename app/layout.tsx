import "./globals.css";
import Navbar from "@/components/navbar";
import BackgroundGrid from "@/components/background-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anitej Isaac Sharma | Portfolio",
  description: "Software Engineer, Photographer, and Writer",
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
        <main className="flex-1 w-full">
          {children}
        </main>
        <BackgroundGrid />
      </body>
    </html>
  );
}