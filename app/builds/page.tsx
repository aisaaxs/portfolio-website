"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Medsim Innovations Website",
    tagline: "Improving healthcare education through affordable medical simulation technologies",
    description:
      "A modern, responsive website for MedSim Innovations that showcases the company's mission, values, and simulation‑based training philosophy while highlighting its products and value pillars. Built for nursing colleges, medical colleges, and hospitals to learn about and connect with the company.",
    tags: ["Next.js", "TypeScript", "Prisma", "Vercel", "Tailwind"],
    links: { github: "https://github.com/MedSim-Innovations/website", live: "https://www.medsiminnovations.com" },
    year: "2026",
    accent: "rose",
  },
];

const accentColors: Record<string, { border: string; text: string; glow: string }> = {
  rose:   { border: "group-hover:border-rose-400/40",   text: "text-rose-400",   glow: "rgba(251,113,133,0.08)" },
  sky:    { border: "group-hover:border-sky-400/40",    text: "text-sky-400",    glow: "rgba(56,189,248,0.08)" },
  amber:  { border: "group-hover:border-amber-400/40",  text: "text-amber-400",  glow: "rgba(251,191,36,0.08)" },
  lime:   { border: "group-hover:border-lime-400/40",   text: "text-lime-400",   glow: "rgba(163,230,53,0.08)" },
  violet: { border: "group-hover:border-violet-400/40", text: "text-violet-400", glow: "rgba(167,139,250,0.08)" },
  orange: { border: "group-hover:border-orange-400/40", text: "text-orange-400", glow: "rgba(251,146,60,0.08)" },
};

function useInView(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return visible;
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, index * 100);
  const accent = accentColors[project.accent];

  return (
    <div
      ref={ref}
      className={`group relative border border-zinc-800 ${accent.border} transition-all duration-300 overflow-hidden`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease, border-color 0.3s ease",
      }}
    >
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at top left, ${accent.glow}, transparent 60%)` }}
        />

        <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1 min-w-0">
            <span className="font-mono text-xs text-zinc-600 mb-4 block">{project.year}</span>
            <h2 className="font-serif font-bold text-white text-3xl md:text-4xl leading-tight mb-2">
                {project.name}
            </h2>
            <p className={`font-mono text-sm mb-4 ${accent.text}`}>{project.tagline}</p>
            <p className="font-mono text-zinc-400 text-sm leading-relaxed max-w-3xl">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-zinc-500 border border-zinc-800 px-2.5 py-1">
                    {tag}
                </span>
                ))}
            </div>
            </div>

            <div className="flex md:flex-col gap-3 shrink-0">
            {project.links.github && (
                <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-4 py-2.5 transition-all duration-200"
                >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
                </a>
            )}
            {project.links.live && (
                <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 font-mono text-xs border px-4 py-2.5 transition-all duration-200 ${accent.text} border-current/20 hover:border-current/50`}
                >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Live
                </a>
            )}
            </div>
        </div>
    </div>
  );
}

export default function Builds() {
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
            className="fixed top-0 left-0 w-125 h-125 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(244,63,94,0.05) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-28">

            <div
            style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "none" : "translateY(16px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
            >
            <p className="font-mono text-xs text-zinc-600 tracking-[0.3em] uppercase mb-4">
                side projects · tools · experiments
            </p>
            <h1
                className="font-serif font-bold text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
                Builds
            </h1>
            <div className="mt-4 h-px w-24 bg-linear-to-r from-rose-400/60 to-transparent" />
            <p className="mt-5 font-mono text-zinc-400 text-sm max-w-md leading-relaxed">
                Things I've made, am making, or got obsessed with for a while.
            </p>
            </div>

            {(
            <div className="mt-16 space-y-5">
                {projects.map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i} />
                ))}
            </div>
            )}

            <div
            className="mt-20 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}
            >
            <p className="font-mono text-xs text-zinc-700 italic">
                All projects are personal work unless noted otherwise.
            </p>
            <a
                href="https://github.com/aisaaxs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-white transition-colors duration-200"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View my GitHub profile ↗
            </a>
            </div>
        </div>
    </div>
  );
}