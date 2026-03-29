"use client";

import { useEffect, useState, useRef } from "react";

type Category = "all" | "essay" | "poem" | "thought";

const categoryMeta: Record<
  Exclude<Category, "all">,
  { label: string; color: string; dot: string }
> = {
  essay: { label: "Essay", color: "text-amber-400", dot: "bg-amber-400" },
  poem: { label: "Poem", color: "text-rose-400", dot: "bg-rose-400" },
  thought: { label: "Thought", color: "text-sky-400", dot: "bg-sky-400" },
};

const posts = [
  {
    slug: "on-building-things",
    title: "On building things that don't last",
    category: "essay" as const,
    date: "Mar 2025",
    readTime: "5 min",
    excerpt:
      "Software rots. Bridges rust. Every thing we make is a slow negotiation with entropy. And yet we keep building — not despite the impermanence, but maybe because of it.",
    featured: true,
  },
  {
    slug: "3am",
    title: "3am, again",
    category: "poem" as const,
    date: "Feb 2025",
    readTime: "1 min",
    excerpt:
      "The city hums a frequency\nnobody asked for.\nI am awake\nand the ceiling knows.",
    featured: false,
  },
  {
    slug: "on-cameras",
    title: "Why I still shoot with a camera and not my phone",
    category: "essay" as const,
    date: "Jan 2025",
    readTime: "4 min",
    excerpt:
      "There's friction in a camera. You have to mean it. You have to lift the thing, compose, wait. That friction is the point.",
    featured: false,
  },
  {
    slug: "small-note-on-silence",
    title: "A small note on silence",
    category: "thought" as const,
    date: "Jan 2025",
    readTime: "2 min",
    excerpt:
      "We're so bad at silence now. Not peace — silence. The kind that doesn't need filling. I'm trying to get better at it.",
    featured: false,
  },
  {
    slug: "the-tree",
    title: "The tree outside my window",
    category: "poem" as const,
    date: "Dec 2024",
    readTime: "1 min",
    excerpt:
      "It was there before me\nand will stay after.\nI think about that more\nthan I should.",
    featured: false,
  },
  {
    slug: "shipping-software",
    title: "The quiet satisfaction of shipping",
    category: "thought" as const,
    date: "Nov 2024",
    readTime: "3 min",
    excerpt:
      "Nobody talks about the moment right after you ship — not the launch, not the feedback, just the five seconds after you push. That's my favourite part.",
    featured: false,
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return visible;
}

function FeaturedPost({ post }: { post: (typeof posts)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const meta = categoryMeta[post.category];

  return (
    <div
      ref={ref}
      className="relative border border-zinc-800 hover:border-zinc-600 transition-all duration-300 cursor-pointer group overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease, border-color 0.3s ease",
      }}
    >
      {/* Amber corner accent */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-amber-400/60" />
        <div className="absolute top-0 left-0 h-full w-px bg-amber-400/60" />
      </div>

      <div className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <span className={`font-mono text-xs ${meta.color} uppercase tracking-widest`}>
            {meta.label}
          </span>
          <span className="text-zinc-700 font-mono text-xs">·</span>
          <span className="font-mono text-xs text-zinc-500">{post.date}</span>
          <span className="text-zinc-700 font-mono text-xs">·</span>
          <span className="font-mono text-xs text-zinc-500">{post.readTime} read</span>
          <span className="ml-auto font-mono text-[10px] text-zinc-700 uppercase tracking-widest border border-zinc-800 px-2 py-1">
            featured
          </span>
        </div>

        <h2
          className="font-serif font-bold text-white leading-snug mb-5 group-hover:text-amber-50 transition-colors duration-200"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
        >
          {post.title}
        </h2>

        <p className="font-mono text-zinc-400 text-sm leading-relaxed max-w-2xl whitespace-pre-line">
          {post.excerpt}
        </p>

        <div className="mt-8 flex items-center gap-2 text-amber-400 font-mono text-sm group-hover:gap-4 transition-all duration-200">
          <span>Read</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PostRow({
  post,
  index,
}: {
  post: (typeof posts)[0];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const visible = useInView(ref, index * 60);
  const meta = categoryMeta[post.category];

  return (
    <a
      ref={ref}
      href={`/notebook/${post.slug}`}
      className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-7 border-b border-zinc-900 hover:border-zinc-700 transition-all duration-200 cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(-12px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease",
      }}
    >
      <div className="sm:w-28 shrink-0 pt-0.5">
        <span className="font-mono text-xs text-zinc-600">{post.date}</span>
      </div>

      <div className="hidden sm:flex shrink-0 pt-2">
        <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2 sm:hidden">
          <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
          <span className={`font-mono text-xs ${meta.color} uppercase tracking-widest`}>
            {meta.label}
          </span>
        </div>

        <h3 className="font-serif font-bold text-zinc-200 text-xl leading-snug group-hover:text-white transition-colors duration-150 mb-2">
          {post.title}
        </h3>

        <p className="font-mono text-zinc-500 text-sm leading-relaxed line-clamp-2 whitespace-pre-line">
          {post.excerpt}
        </p>
      </div>

      <div className="sm:flex flex-col items-end gap-2 shrink-0 hidden">
        <span className={`font-mono text-xs ${meta.color} uppercase tracking-widest`}>
          {meta.label}
        </span>
        <span className="font-mono text-xs text-zinc-600">{post.readTime}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all duration-200 mt-1"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
}

export default function Notebook() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<Category>("all");

  useEffect(() => setMounted(true), []);

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);
  const filtered =
    filter === "all" ? rest : rest.filter((p) => p.category === filter);

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
            style={{
            background:
                "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)",
            }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-28">
            <div
            style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "none" : "translateY(16px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
            >
            <p className="font-mono text-xs text-zinc-600 tracking-[0.3em] uppercase mb-4">
                essays · poems · thoughts
            </p>
            <h1
                className="font-serif font-bold text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
                Notebook
            </h1>
            <div className="mt-4 h-px w-24 bg-linear-to-r from-amber-400/60 to-transparent" />
            <p className="mt-5 font-mono text-zinc-400 text-sm max-w-md leading-relaxed">
                Things I needed to write down. Some long, some short, some barely
                sentences.
            </p>
            </div>

            {featured && (
            <div className="mt-16">
                <FeaturedPost post={featured} />
            </div>
            )}

            <div
            className="mt-16 mb-2 flex items-center gap-1 border-b border-zinc-900 pb-0"
            style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease 0.2s",
            }}
            >
            {(["all", "essays", "poems", "thoughts"] as Category[]).map((cat) => {
                const isActive = filter === cat;
                const meta = cat !== "all" ? categoryMeta[cat] : null;
                return (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`relative font-mono text-xs uppercase tracking-widest px-4 py-3 transition-all duration-200 ${
                    isActive ? "text-white" : "text-zinc-600 hover:text-zinc-400"
                    }`}
                >
                    {cat}
                    {isActive && (
                    <span
                        className={`absolute bottom-0 left-0 right-0 h-px ${
                        meta ? meta.dot : "bg-white"
                        }`}
                    />
                    )}
                </button>
                );
            })}
            <span className="ml-auto font-mono text-xs text-zinc-700">
                {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
            </span>
            </div>

            <div>
            {filtered.map((post, i) => (
                <PostRow key={post.slug} post={post} index={i} />
            ))}
            </div>

            {filtered.length === 0 && (
            <div className="py-20 text-center">
                <p className="font-mono text-zinc-600 text-sm">Nothing here yet.</p>
            </div>
            )}

            <div
            className="mt-20 pt-8 border-t border-zinc-900 flex items-center justify-between"
            style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s ease 0.5s",
            }}
            >
            <p className="font-mono text-xs text-zinc-700 italic">
                "Writing is thinking on paper."
            </p>
            <p className="font-mono text-xs text-zinc-700">
                Anitej Isaac Sharma
            </p>
            </div>
        </div>
    </div>
  );
}