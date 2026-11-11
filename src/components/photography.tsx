"use client";

import Image from "next/image";
import { photographyData } from "@/src/data/photography";

export default function Photography() {
    return (
        <section id="photography" className="scroll-mt-20 relative bg-black w-full h-auto p-12 flex flex-col">
            <div className="z-10 w-full h-12 flex justify-start items-start">
                <h2 className="text-sm font-bold capitalize text-[#fff8dc]">04 / See Through My Lens</h2>
            </div>

            <div className="z-10 w-full h-auto flex flex-row flex-wrap justify-around items-center gap-x-8 gap-y-16 py-12">
                {photographyData.map((photo, index) => (
                    <div 
                        key={index} 
                        className={`w-80 h-88 border-2 rounded-lg border-[#fff8dc] ${index % 2 === 0 ? "rotate-2" : "-rotate-2"} flex flex-col group`}
                    >
                        <div className="relative w-full h-5/6 overflow-hidden">
                            <Image loading="eager" 
                                src={photo.image} 
                                alt={photo.title || "Photography sample"} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 rounded-t-md" 
                            />

                            <div className="hidden absolute z-50 top-0 left-0 w-full h-full bg-black/60 group-hover:flex flex-col justify-center items-center p-8 text-center gap-8">
                                <p className="text-white text-md">{photo.description}</p>
                                <p className="bg-black px-4 py-1 rounded-md text-cyan-300 text-sm">{photo.location}</p>
                            </div>
                        </div>

                        <div className="w-full h-1/6 flex justify-center items-center text-center bg-[#fff8dc]">
                            <p className="text-md italic font-bold capitalize text-black">{photo.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Instagram Film Strip */}
            <div className="relative z-10 mt-16 w-full overflow-hidden rounded-xl border border-zinc-600 bg-zinc-900 shadow-2xl">
                {/* Top film perforations */}
                <div
                    aria-hidden="true"
                    className="flex h-10 items-center gap-4 overflow-hidden border-b border-zinc-700 bg-zinc-950 px-4"
                >
                    {Array.from({ length: 60 }, (_, index) => (
                        <div
                            key={index}
                            className="h-4 w-6 shrink-0 rounded-[3px] bg-zinc-600/70"
                        />
                    ))}
                </div>

                {/* Main content */}
                <div className="relative flex flex-col items-center justify-between gap-10 px-6 py-12 sm:px-10 md:flex-row md:gap-8 lg:px-16">
                    {/* Decorative film frame */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-4 border border-zinc-700/50"
                    />

                    {/* Left: Text */}
                    <div className="relative z-10 flex max-w-xl flex-col items-center gap-4 text-center md:items-start md:text-left">
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-amber-400" />
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                                The roll continues
                            </p>
                        </div>

                        <h3 className="text-3xl font-bold leading-tight tracking-tight text-[#fff8dc] sm:text-4xl lg:text-5xl">
                            More moments.
                            <br />
                            <span className="italic text-lime-400">
                                More stories.
                            </span>
                        </h3>

                        <p className="max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
                            Find more street photography, landscapes, and little moments worth remembering over on my Instagram.
                        </p>
                    </div>

                    {/* Right: Instagram CTA */}
                    <div className="relative z-10 flex shrink-0 flex-col items-center">
                        <a
                            href="https://www.instagram.com/ipic2capture"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit @ipic2capture on Instagram"
                            className="
                                group inline-flex items-center justify-center gap-4
                                rounded-lg border border-lime-400
                                bg-lime-400 px-7 py-4
                                text-sm font-bold text-black
                                shadow-[5px_5px_0px_#09090b]
                                transition-all duration-300
                                hover:-translate-y-1 hover:bg-[#fff8dc]
                                hover:shadow-[7px_7px_0px_#09090b]
                                active:translate-y-0
                            "
                        >
                            @iPic2Capture
                            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                ↗
                            </span>
                        </a>
                    </div>
                </div>

                {/* Bottom film perforations */}
                <div
                    aria-hidden="true"
                    className="flex h-10 items-center gap-4 overflow-hidden border-t border-zinc-700 bg-zinc-950 px-4"
                >
                    {Array.from({ length: 60 }, (_, index) => (
                        <div
                            key={index}
                            className="h-4 w-6 shrink-0 rounded-[3px] bg-zinc-600/70"
                        />
                    ))}
                </div>
            </div>

            {/* Background grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #52525b 0.5px, transparent 0.5px),
                        linear-gradient(to bottom, #52525b 0.5px, transparent 0.5px)
                    `,
                    backgroundSize: "40px 40px",
                    opacity: 0.7,
                }}
            />
        </section>
    );
}