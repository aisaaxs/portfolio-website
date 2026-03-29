"use client";

import { useEffect, useRef, useState } from "react";

const photos = [
  {
    src: "/photos/photo1.jpg",
    alt: "Golden hour on the water",
    description: "Light hitting just right — that magic 20 minutes before the sun disappears.",
    location: "Vancouver, BC",
    rotate: "3deg",
  },
  {
    src: "/photos/photo2.jpg",
    alt: "City after rain",
    description: "Everything gets a second skin when it rains. Streets become mirrors.",
    location: "Downtown Vancouver",
    rotate: "-3deg",
  },
  {
    src: "/photos/photo3.jpg",
    alt: "Fog in the mountains",
    description: "The mountains don't disappear in the fog — they just become suggestions.",
    location: "North Shore Mountains",
    rotate: "-1deg",
  },
  {
    src: "/photos/photo4.jpg",
    alt: "Quiet café corner",
    description: "Some places hold their breath. You can feel it when you walk in.",
    location: "Gastown, Vancouver",
    rotate: "1deg",
  },
  {
    src: "/photos/photo5.jpg",
    alt: "Lone tree at dusk",
    description: "Standing against everything, going nowhere. That's a tree for you.",
    location: "Richmond, BC",
    rotate: "2deg",
  },
  {
    src: "/photos/photo6.jpg",
    alt: "Long exposure traffic",
    description: "Cities breathe at night. This is what a breath looks like.",
    location: "Granville Bridge",
    rotate: "-2deg",
  },
];

function PhotoCard({
  photo,
  index,
}: {
  photo: (typeof photos)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="group relative bg-zinc-900 cursor-pointer"
      style={{
        transform: visible
          ? `rotate(${photo.rotate})`
          : `rotate(${photo.rotate}) translateY(24px)`,
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      <div className="p-3 pb-0 bg-zinc-900">
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <div
            className="absolute inset-0 bg-linear-to-br from-zinc-700 to-zinc-900"
            style={{ opacity: 1 }}
          />
          <img
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = "0";
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="font-mono text-white text-sm leading-relaxed">
              {photo.description}
            </p>
            <p className="font-mono text-zinc-400 text-xs mt-2">
              📍 {photo.location}
            </p>
          </div>
        </div>
      </div>
      <div className="px-3 py-3">
        <p className="font-mono text-zinc-500 text-xs truncate">{photo.alt}</p>
      </div>
    </div>
  );
}

export default function Scrapbook() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-x-hidden">
      <div
        className="fixed top-0 left-0 w-100 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24">
        <div
          className="mb-20"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(16px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="font-mono text-xs text-zinc-600 tracking-[0.3em] uppercase mb-4">
            captured on iPhone
          </p>
          <h1
            className="font-serif font-bold text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Scrapbook
          </h1>
          <div className="mt-4 h-px w-24 bg-linear-to-r from-lime-400/60 to-transparent" />
          <p className="mt-5 font-mono text-zinc-400 text-sm max-w-md leading-relaxed">
            Moments I couldn't walk past. Hover over any photo to read the
            story behind it.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-16">
          {photos.map((photo, i) => (
            <div key={i} className="break-inside-avoid">
              <PhotoCard photo={photo} index={i} />
            </div>
          ))}
        </div>

        <div
          className="mt-28 relative"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.4s",
          }}
        >
          <div className="absolute left-0 right-0 top-0 h-12 flex items-center justify-between overflow-hidden pointer-events-none">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-6 rounded-sm bg-zinc-800 shrink-0"
              />
            ))}
          </div>
          <div className="absolute left-0 right-0 bottom-0 h-12 flex items-center justify-between overflow-hidden pointer-events-none">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-6 rounded-sm bg-zinc-800 shrink-0"
              />
            ))}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 py-14 px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-mono text-xs text-zinc-600 tracking-[0.25em] uppercase mb-2">
                more in the roll
              </p>
              <h2 className="font-serif font-bold text-white text-3xl md:text-4xl">
                Follow along
              </h2>
              <p className="font-mono text-zinc-400 text-sm mt-3 max-w-xs leading-relaxed">
                I post regularly — street photography, landscapes, and
                everything in between.
              </p>
            </div>

            <a
              href="https://instagram.com/ipic2capture"
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 flex items-center gap-4 bg-zinc-950 border border-zinc-700 hover:border-lime-400/60 px-7 py-4 transition-all duration-300 hover:bg-zinc-900"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-lime-400 shrink-0"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>

              <div>
                <p className="font-mono text-white text-base font-medium group-hover:text-lime-400 transition-colors duration-200">
                  @ipic2capture
                </p>
                <p className="font-mono text-zinc-500 text-xs mt-0.5">
                  instagram
                </p>
              </div>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-zinc-600 group-hover:text-lime-400 group-hover:translate-x-1 transition-all duration-200 ml-2"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}