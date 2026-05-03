"use client";

import { useEffect, useState } from "react";

export default function PingClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen">
        <div
            className="relative z-10 max-w-2xl mx-auto px-6 pt-36 pb-28"
            style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(16px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
        >
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-600 sm:text-sm mb-6">
            get in touch
            </p>
            <h1 className="font-serif text-[3rem] font-bold leading-none tracking-tight text-white sm:text-[4rem] md:text-[5rem] mb-6">
                Ping
            </h1>
            <hr className="h-0.5 w-40 bg-linear-to-r from-orange-400 to-black" />

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