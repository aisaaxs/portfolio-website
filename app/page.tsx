"use client";

import { useEffect, useState, useRef } from "react";

const roles = [
  { text: "I build software", color: "text-rose-500" },
  { text: "I capture moments", color: "text-lime-500" },
  { text: "I craft words", color: "text-amber-500" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setMounted(true);

    intervalRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFading(false);
      }, 400);
    }, 2200);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const current = roles[roleIndex];

  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-center items-center overflow-hidden px-6">

      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="absolute w-175 h-175 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center gap-8 text-center"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <p className="font-mono text-xs text-zinc-500 tracking-[0.3em] uppercase">
          portfolio
        </p>

        <h1
          className="font-serif font-bold text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 10vw, 6.5rem)" }}
        >
          Anitej
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #38bdf8, #818cf8)" }}
          >
            Isaac
          </span>
          {" "}Sharma
        </h1>

        <div
          className="h-px bg-linear-to-r from-transparent via-zinc-600 to-transparent"
          style={{
            width: mounted ? "200px" : "0px",
            transition: "width 1s ease 0.5s",
          }}
        />

        <div className="h-8 flex items-center justify-center">
          <span
            className={`font-mono text-lg font-light italic transition-all duration-300 ${current.color}`}
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? "translateY(6px)" : "translateY(0)",
            }}
          >
            {current.text}
          </span>
        </div>
      </div>

      <p className="absolute bottom-8 right-8 font-mono text-xs text-zinc-400 select-none">
        © {new Date().getFullYear()}
      </p>
    </div>
  );
}