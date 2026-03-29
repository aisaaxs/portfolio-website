"use client";

import { useEffect, useState } from "react";

export default function Story() {
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
            className="fixed top-0 right-0 w-125 h-125 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }}
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
            the person behind the work
            </p>
            <h1
            className="font-serif font-bold text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
            Story
            </h1>
            <div className="mt-4 h-px w-24 bg-linear-to-r from-violet-400/60 to-transparent" />

            <div className="mt-12 relative w-36 h-36 md:w-44 md:h-44">
            <div className="absolute inset-0 translate-x-2 translate-y-2 border border-violet-400/20" />
            <div className="relative w-full h-full overflow-hidden border border-zinc-800">
                <img
                src="/story/me.jpg"
                alt="Anitej Isaac Sharma"
                className="w-full h-full object-cover scale-120 object-bottom grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center -z-10">
                <span className="font-mono text-zinc-600 text-xs">photo</span>
                </div>
            </div>
            </div>

            <div className="mt-14 space-y-6 font-mono text-zinc-400 text-sm leading-[1.9]">
            <p>
                I'm <span className="text-white">Anitej Isaac Sharma</span> - a software engineer,
                photographer, and writer based in{" "}
                <span className="text-white">Vancouver, BC</span>. I build things on the internet,
                carry a camera (well actually, my phone) everywhere I go, and write when I need to think clearly.
            </p>

            <p>
                I grew up endlessly curious — the kind of kid who took apart electronics just to
                see what was inside, then panicked about putting them back together. That curiosity
                never really left. It just found better outlets: code, a lens, a blank page.
            </p>

            <p>
                By day I work on software — jury management systems and support clients to the best of my abilities. I care about the craft: not just
                whether it works, but whether it's elegant, whether someone will enjoy using it.
            </p>

            <p>
                Photography came much earlier and stuck fast. There's something about the discipline of
                framing — deciding what's in and what's out — that I find meditative. I shoot
                mostly street and landscape, mostly on the West Coast, occasionally wherever else
                life takes me. You can follow along at{" "}
                <a
                href="https://instagram.com/ipic2capture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors duration-150"
                >
                @ipic2capture
                </a>
                .
            </p>

            <p>
                Writing is how I process. Essays when something's been sitting in my head too long.
                Poems when prose feels too heavy and I just want life to rhyme. Thoughts when it's just a fragment that needed somewhere to land. The notebook is all of the above.
            </p>

            <p>
                I believe in making things quietly and well. No noise for the sake of it.
            </p>
            </div>

            <div className="mt-14 h-px bg-zinc-900" />

            <div className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8">
            {[
                { label: "Based in", value: "Vancouver, BC" },
                { label: "Currently", value: "Building & writing" },
                { label: "Camera", value: "iPhone" },
                { label: "Editor", value: "iOS Photos App (lol)" },
            ].map(({ label, value }) => (
                <div key={label}>
                <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-1">{label}</p>
                <p className="font-mono text-sm text-white">{value}</p>
                </div>
            ))}
            </div>

            <div className="mt-10 h-px bg-zinc-900" />

            <div className="mt-8 flex flex-wrap gap-6">
            {[
                { label: "GitHub", href: "https://github.com/aisaaxs" },
                { label: "Instagram", href: "https://instagram.com/aisaaxs" },
                { label: "Ping me", href: "/ping" },
            ].map(({ label, href }) => (
                <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-xs text-zinc-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                >
                {label}
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </a>
            ))}
            </div>
        </div>
    </div>
  );
}