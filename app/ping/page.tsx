"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Ping() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const fieldClass = (name: string) =>
    `w-full bg-transparent border-b py-3 font-mono text-sm text-white placeholder-zinc-700 outline-none transition-colors duration-200 ${
      focused === name ? "border-orange-400/60" : "border-zinc-800 hover:border-zinc-600"
    }`;

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

            <div className="mt-8 flex flex-wrap gap-4">
            {[
                {
                label: "Email directly",
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
                className="group flex flex-col border border-zinc-800 hover:border-orange-400/30 px-4 py-3 transition-all duration-200"
                >
                <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors mb-1">
                    {label}
                </span>
                <span className="font-mono text-xs text-zinc-300 group-hover:text-white transition-colors">
                    {value}
                </span>
                </a>
            ))}
            </div>

            <div className="mt-14 flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-900" />
            <span className="font-mono text-xs text-zinc-700 uppercase tracking-widest">or send a message</span>
            <div className="h-px flex-1 bg-zinc-900" />
            </div>

            {/* Form */}
            <div className="mt-10">
            {status === "sent" ? (
                <div
                className="border border-zinc-800 p-10 flex flex-col items-center text-center gap-4"
                style={{ animation: "fadeIn 0.5s ease" }}
                >
                <div className="w-10 h-10 rounded-full border border-orange-400/40 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p className="font-serif font-bold text-white text-xl">Message sent.</p>
                <p className="font-mono text-zinc-500 text-xs leading-relaxed max-w-xs">
                    Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                    className="mt-2 font-mono text-xs text-zinc-600 hover:text-white transition-colors duration-200"
                >
                    Send another ↗
                </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label className="font-mono text-xs text-zinc-600 uppercase tracking-widest block mb-3">
                    Name
                    </label>
                    <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={fieldClass("name")}
                    required
                    />
                </div>

                <div>
                    <label className="font-mono text-xs text-zinc-600 uppercase tracking-widest block mb-3">
                    Email
                    </label>
                    <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={fieldClass("email")}
                    required
                    />
                </div>

                <div>
                    <label className="font-mono text-xs text-zinc-600 uppercase tracking-widest block mb-3">
                    Message
                    </label>
                    <textarea
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${fieldClass("message")} resize-none`}
                    required
                    />
                </div>

                <div className="flex items-center justify-between pt-2">
                    <p className="font-mono text-xs text-zinc-700">
                    {form.message.length > 0 && `${form.message.length} chars`}
                    </p>
                    <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex items-center gap-3 font-mono text-sm text-white border border-zinc-700 hover:border-orange-400/50 px-6 py-3 transition-all duration-200 disabled:opacity-40"
                    >
                    {status === "sending" ? (
                        <>
                        <span className="w-3 h-3 rounded-full border border-orange-400 border-t-transparent animate-spin" />
                        Sending
                        </>
                    ) : (
                        <>
                        Send it
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="group-hover:translate-x-1 transition-transform duration-200"
                        >
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </>
                    )}
                    </button>
                </div>
                </form>
            )}
            </div>
        </div>

        <style>{`
            @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        `}</style>
    </div>
  );
}