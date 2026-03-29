"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const navOptions = [
    { text: "home", href: "/", color: "bg-sky-400", dot: "bg-sky-400" },
    { text: "builds", href: "/builds", color: "bg-rose-400", dot: "bg-rose-400" },
    { text: "scrapbook", href: "/scrapbook", color: "bg-lime-400", dot: "bg-lime-400" },
    { text: "notebook", href: "/notebook", color: "bg-amber-400", dot: "bg-amber-400" },
    { text: "story", href: "/story", color: "bg-violet-400", dot: "bg-violet-400" },
    { text: "ping", href: "/ping", color: "bg-orange-400", dot: "bg-orange-400" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const active = navOptions.find((o) => o.href === pathname);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center pt-5 px-4">

            {/* Desktop pill */}
            <div className="hidden md:flex w-auto h-11 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800 px-2 items-center gap-1">
                {navOptions.map((option, i) => {
                    const isActive = pathname === option.href;
                    return (
                        <a
                            key={i}
                            href={option.href}
                            className={`relative h-7 px-4 flex items-center font-mono text-sm capitalize rounded-full transition-all duration-200 ${
                                isActive
                                    ? "text-black " + option.color
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            {option.text}
                        </a>
                    );
                })}
            </div>

            {/* Mobile pill */}
            <div className="flex md:hidden w-full max-w-sm">
                <div className="w-full rounded-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-800 overflow-hidden">

                    {/* Mobile header row */}
                    <div className="flex items-center justify-between px-5 h-12">
                        <div className="flex items-center gap-2">
                            {active && <span className={`w-2 h-2 rounded-full ${active.dot}`} />}
                            <span className="font-mono text-sm text-white capitalize">
                                {active?.text ?? "menu"}
                            </span>
                        </div>
                        <button
                            onClick={() => setMenuOpen((v) => !v)}
                            className="text-zinc-400 hover:text-white transition-colors p-1"
                            aria-label="Toggle menu"
                        >
                            <span className="font-mono text-xs tracking-widest uppercase">
                                {menuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>

                    {/* Mobile dropdown */}
                    <div
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ maxHeight: menuOpen ? "300px" : "0px" }}
                    >
                        <div className="border-t border-zinc-800 px-3 py-2 flex flex-col gap-1">
                            {navOptions.map((option, i) => {
                                const isActive = pathname === option.href;
                                return (
                                    <a
                                        key={i}
                                        href={option.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-xl font-mono text-sm capitalize transition-all duration-150 ${
                                            isActive
                                                ? "text-black " + option.color
                                                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                        }`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full ${option.dot} opacity-70`} />
                                        {option.text}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}