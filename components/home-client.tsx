"use client";

import { useEffect, useState } from "react";

const subtext = [
  { text: "I build software" },
  { text: "I capture moments" },
  { text: "I craft words" },
];

export default function HomeClient() {
  const [wordFlash, setWordFlash] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordFlash((prev) => (prev === 2 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center p-12">
      <div className="flex flex-col items-center text-center gap-y-8 z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "none" : "translateY(16px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="text-zinc-400 uppercase text-xs sm:text-sm font-mono tracking-widest">portfolio</p>

        <h1 className="font-serif text-white md:text-[7rem] sm:text-[6rem] text-[4rem] font-bold tracking-tight leading-none">
            <span className="block">Anitej</span>
            <span className="block">Isaac Sharma</span>
        </h1>

        <hr className="w-100 h-0.5 bg-linear-to-r from-black via-white/60 to-black" />

        <p className="sm:text-xl text-lg text-sky-400 font-serif italic capitalize">
          {subtext[wordFlash].text}
        </p>
      </div>
    </div>
  )
}