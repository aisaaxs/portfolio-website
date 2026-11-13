"use client";

import Image from "next/image";
import { photographyData } from "@/src/data/photography";

// Present selected photographs as tilted prints with details revealed on hover.
export default function Photography() {
    return (
        <section id="photography" aria-labelledby="photography-heading" className="scroll-mt-20 relative flex w-full flex-col bg-[var(--night)] px-6 py-16 sm:px-12">
            <div className="z-10 mx-auto mb-8 flex w-full max-w-7xl flex-col items-start gap-2">
                <h2 id="photography-heading" tabIndex={-1} className="text-sm font-bold capitalize text-[#fff8dc] focus:outline-none">04 / See Through My Lens</h2>
                <p className="max-w-3xl text-3xl font-bold tracking-tight text-[var(--paper)] sm:text-4xl">Small moments, changing light, and places worth noticing twice.</p>
            </div>

            <div className="z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 py-8 sm:grid-cols-2 xl:grid-cols-3">
                {/* Alternate rotation to create the informal contact-sheet layout. */}
                {photographyData.map((photo, index) => (
                    <figure
                        key={photo.title}
                        className={`flex w-full flex-col overflow-hidden rounded-lg border-2 border-[#fff8dc] bg-[#fff8dc] motion-reduce:rotate-0 ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <Image loading="lazy"
                                src={photo.image} 
                                alt={photo.imageAlt}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <figcaption className="flex flex-col gap-3 bg-[#fff8dc] p-5 text-center text-black">
                            <h3 className="text-lg font-bold capitalize italic">{photo.title}</h3>
                            <p className="text-sm leading-relaxed">{photo.description}</p>
                            <p className="text-sm font-semibold text-cyan-800">{photo.location}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Instagram Film Strip */}
            <div className="relative z-10 mx-auto mt-16 w-full max-w-7xl overflow-hidden rounded-xl border border-zinc-600 bg-zinc-900 shadow-2xl">
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
                            <span aria-hidden="true" className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                ↗
                            </span>
                            <span className="sr-only"> on Instagram (opens in a new tab)</span>
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
