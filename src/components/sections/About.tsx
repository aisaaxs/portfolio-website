import Image from "next/image";
import comicWaterfallSelfie from "@/public/images/about/comic-waterfall-selfie.png";

// Introduce the portfolio owner through a personal bio and supporting artwork.
export default function About() {
    return (
        <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 px-6 py-16 sm:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 flex w-full justify-start">
                <h2 id="about-heading" tabIndex={-1} className="text-sm font-bold capitalize text-amber-900 focus:outline-none">01 / A Little About Me</h2>
            </div>

            <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
                <div className="min-w-0">
                    <Image loading="eager" priority src={comicWaterfallSelfie} alt="Illustration of Anitej taking a selfie beside a waterfall" className="h-auto w-full rounded-xl border-2 border-[var(--ink)] object-cover shadow-[8px_8px_0_var(--water)]" />
                </div>

                <div className="flex min-w-0 flex-col items-start justify-start">
                    <ul aria-label="Key details" className="flex flex-wrap gap-2">
                      <li className="rounded-full bg-[var(--night)] px-3 py-1.5 text-sm font-bold text-[var(--paper)]">Software Developer</li>
                      <li className="rounded-full bg-[var(--water-light)] px-3 py-1.5 text-sm font-bold text-[var(--ink)]">Vancouver, BC</li>
                      <li className="rounded-full bg-[var(--sun)] px-3 py-1.5 text-sm font-bold text-[var(--ink)]">UBC Computer Science</li>
                      <li className="rounded-full bg-lime-200 px-3 py-1.5 text-sm font-bold text-[var(--forest)]">Photographer & Writer</li>
                    </ul>
                    <h3 className="my-8 text-4xl font-bold capitalize text-cyan-700 sm:text-6xl">Hi! I&apos;m Anitej <span aria-hidden="true">👋</span></h3>
                    <div className="mt-2 max-w-3xl space-y-6 text-base leading-relaxed">
                        <p>I&apos;m a software developer by profession, a photographer by instinct, and a writer whenever my thoughts get a little too loud. Currently calling Vancouver, BC home, I spend my days somewhere between lines of code, camera rolls, and unfinished sentences.</p>
                        <p>I&apos;ve always had a habit of wondering how things work. As a kid, that meant taking apart electronics with absolutely no plan for putting them back together. These days, I&apos;ve gotten a little better at the putting-things-together part. The curiosity, though? Still very much there.</p>
                        <p>Software is where that curiosity gets practical. I work on jury management systems, solve problems, and help clients navigate the occasional technological headache. What I enjoy most isn&apos;t just making something work — it&apos;s finding that little bit of elegance that makes it feel effortless to someone else.</p>
                        <p>Outside of code, you&apos;ll usually find me collecting moments through a camera (which, let&apos;s be honest, is mostly my phone). Photography makes me slow down and notice the things I&apos;d otherwise walk right past. The light, the colours, the little stories hiding in ordinary places.</p>
                        <p>And when pictures aren&apos;t quite enough, I turn to words. Sometimes it&apos;s an essay to untangle a thought, sometimes a poem to make sense of a feeling, and sometimes just a sentence that refuses to leave my head. Writing is my way of making a little room for all of it.</p>
                        <p className="bg-black py-2 px-4 text-[#fff8dc] text-center  rounded-md italic">Different mediums, same curiosity. I just like making things that mean something.</p>
                    </div>
                </div>
            </div>

            <aside className="mt-8 grid w-full items-start gap-3 rounded-lg border-2 border-[var(--forest)] bg-lime-100 px-6 py-5 text-left text-[var(--forest)] sm:grid-cols-[auto_1fr] sm:gap-6">
                <h3 className="text-base font-bold whitespace-nowrap">Did You Know?</h3>
                <p className="text-sm leading-relaxed">Massive waterfalls like Victoria Falls and Iguazu Falls produce so much mist that they create their own localized rainstorms, sustaining lush rainforest ecosystems that shelter extraordinary plants and insects, some found nowhere else on Earth.</p>
            </aside>
          </div>
        </section>
    )
}
