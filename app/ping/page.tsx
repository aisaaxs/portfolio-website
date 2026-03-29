"use client";

import { useEffect, useState } from "react";

export default function Ping() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-zinc-950 relative">
        <div
            className="fixed inset-0 pointer-events-none opacity-[0.08]"
            style={{
            backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            }}
        />

        <div
            className="fixed bottom-0 right-0 w-125 h-125 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 70%)" }}
        />

        <div
            className="relative z-10 max-w-2xl mx-auto px-6 pt-36 pb-28"
            style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(16px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
        >
            <p className="font-mono text-xs text-zinc-600 tracking-[0.3em] uppercase mb-4">
            get in touch
            </p>
            <h1
            className="font-serif font-bold text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
            Ping
            </h1>
            <div className="mt-4 h-px w-24 bg-linear-to-r from-orange-400/60 to-transparent" />

            <p className="mt-6 font-mono text-zinc-400 text-sm leading-relaxed max-w-md">
            Whether it's a project idea, a collaboration, a question, or just to say hello —
            my inbox is open. I read everything and reply to most things.
            </p>

            <div className="mt-10 flex flex-col">
            {[
                {
                label: "Email",
                href: "mailto:anitejsharmas@gmail.com",
                value: "anitejsharmas@gmail.com",
                },
                {
                label: "Instagram",
                href: "https://instagram.com/aisaaxs",
                value: "@aisaaxs",
                },
                {
                label: "GitHub",
                href: "https://github.com/aisaaxs",
                value: "github.com/aisaaxs",
                },
            ].map(({ label, href, value }) => (
                <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between border-b border-zinc-900 hover:border-zinc-700 py-5 transition-all duration-200"
                >
                <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest w-24">
                    {label}
                </span>
                <span className="font-mono text-sm text-zinc-300 group-hover:text-white transition-colors duration-200">
                    {value}
                </span>
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-zinc-700 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-200"
                >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </a>
            ))}
            </div>
        </div>
    </div>
  );
}