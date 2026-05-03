"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ScrapbookEntry = {
    title: string;
    description: string;
    location: string;
    image: string;
};

export default function ScrapbookClient() {
    const [data, setData] = useState<ScrapbookEntry[]>([]);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    useEffect(() => {
        fetch("/scrapbook/data.json")
            .then((res) => res.json())
            .then((json: ScrapbookEntry[]) => setData(json));
    }, []);

    return (
        <div className="flex min-h-screen w-screen flex-col items-center justify-start pt-32 md:px-24">
            <div className="z-10"
                style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "none" : "translateY(16px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
            >
                <div className="flex h-auto w-full flex-col items-start justify-center gap-y-6 p-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-600 sm:text-sm">
                        shot on iphone
                    </p>

                    <h1 className="font-serif text-[3rem] font-bold leading-none tracking-tight text-white sm:text-[4rem] md:text-[5rem]">
                        Scrapbook
                    </h1>

                    <hr className="h-0.5 w-72 bg-linear-to-r from-lime-400 to-black" />

                    <p className="max-w-md font-mono text-xs text-zinc-400 sm:text-sm">
                        Moments I couldn&apos;t walk past. Hover over (or tap, if you&apos;re on a
                        phone) any photo to read the story behind it.
                    </p>
                </div>

                <div className="flex w-full flex-row flex-wrap items-center justify-around gap-4 gap-y-12 py-12">
                    {data.map((item, idx) => (
                        <div
                            key={item.title}
                            className={`flex w-[calc(100%-2rem)] flex-col bg-zinc-800 shadow-sm shadow-lime-900 sm:w-80 md:w-88 lg:w-96 ${idx % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
                        >
                            <div className="aspect-4/3 w-full p-3 pb-0">
                                <div className="group relative h-full w-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        loading="eager"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 22rem, 24rem"
                                        className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 bg-black/70 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100">
                                        <p className="text-center font-mono text-md text-white">
                                            {item.description}
                                        </p>

                                        <p className="rounded-full bg-black px-2 py-1 text-center font-mono text-sm text-lime-400">
                                            {item.location}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full items-start justify-center px-4 py-4">
                                <p className="capitalize font-mono text-sm italic text-zinc-300">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-12 grid min-h-64 w-full grid-rows-8 bg-zinc-800 p-4">
                    <div className="row-span-1 flex flex-row justify-start gap-x-2 overflow-hidden">
                        {Array.from({ length: 100 }, (_, idx) => (
                            <div key={idx} className="h-full min-w-4 rounded-md bg-zinc-900" />
                        ))}
                    </div>

                    <div className="row-span-6 grid px-12 max-sm:grid-rows-2 sm:grid-cols-2">
                        <div className="flex flex-col items-center justify-center gap-y-4 sm:items-start">
                            <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                                more on the roll
                            </p>

                            <h2 className="font-serif text-[1rem] font-bold leading-none tracking-tight text-white md:text-[2rem]">
                                Scrapbook
                            </h2>

                            <p className="max-w-md text-center font-mono text-xs text-zinc-400 sm:text-left">
                                I post regularly — street photography, landscapes, and everything in
                                between.
                            </p>
                        </div>

                        <div className="flex items-center justify-center sm:justify-end">
                            <a
                                className="flex h-16 w-50 cursor-pointer items-center justify-center border border-gray-400 bg-black font-mono text-md font-bold text-lime-400 animate-pulse hover:scale-105"
                                href="https://www.instagram.com/ipic2capture"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @iPic2Capture <span className="ml-1 text-2xl text-white">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div className="row-span-1 flex flex-row justify-start gap-x-2 overflow-hidden">
                        {Array.from({ length: 100 }, (_, idx) => (
                            <div key={idx} className="h-full min-w-4 rounded-md bg-zinc-900" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
