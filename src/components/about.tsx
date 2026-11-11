import Image from "next/image";
import comicWaterfallSelfie from "@/public/images/about/comic-waterfall-selfie.png";

export default function About() {
    return (
        <section id="about" className="w-full h-auto p-12 flex flex-col">
            <div className="w-full h-12 flex justify-start items-start">
                <h2 className="text-sm font-bold capitalize text-amber-900">01 / A Little About Me</h2>
            </div>

            <div className="w-full h-auto flex flex-col lg:flex-row">
                <div className="w-full h-auto flex flex-col gap-y-4">
                    <Image src={comicWaterfallSelfie} alt="Comic Waterfall Selfie" className="w-full h-full xl:h-160 bg-contain rounded-lg" />

                    <div className="w-full h-auto bg-lime-200 rounded-lg border-2 border-lime-500 text-lime-800 flex flex-col justify-start items-start text-left px-8 py-4 gap-y-4">
                        <h3 className="text-md font-bold">Did You Know?</h3>
                        <p className="text-sm">Massive waterfalls like Victoria Falls and Iguazu Falls produce so much mist that they create their own localized rainstorms, sustaining lush rainforest ecosystems that shelter extraordinary plants and insects, some found nowhere else on Earth.</p>
                    </div>
                </div>

                <div className="w-full h-auto flex flex-col justify-start items-start lg:pl-12 max-lg:pt-12">
                    <p className="text-sm capitalize">Software Developer | Vancouver, BC, Canada</p>
                    <h3 className="text-6xl text-cyan-600 font-bold capitalize my-8">Hi! I&apos;m Anitej 👋</h3>
                    <div className="text-md mt-4 space-y-6">
                        <p>I&apos;m a software developer by profession, a photographer by instinct, and a writer whenever my thoughts get a little too loud. Currently calling Vancouver, BC home, I spend my days somewhere between lines of code, camera rolls, and unfinished sentences.</p>
                        <p>I&apos;ve always had a habit of wondering how things work. As a kid, that meant taking apart electronics with absolutely no plan for putting them back together. These days, I&apos;ve gotten a little better at the putting-things-together part. The curiosity, though? Still very much there.</p>
                        <p>Software is where that curiosity gets practical. I work on jury management systems, solve problems, and help clients navigate the occasional technological headache. What I enjoy most isn&apos;t just making something work — it&apos;s finding that little bit of elegance that makes it feel effortless to someone else.</p>
                        <p>Outside of code, you&apos;ll usually find me collecting moments through a camera (which, let&apos;s be honest, is mostly my phone). Photography makes me slow down and notice the things I&apos;d otherwise walk right past. The light, the colours, the little stories hiding in ordinary places.</p>
                        <p>And when pictures aren&apos;t quite enough, I turn to words. Sometimes it&apos;s an essay to untangle a thought, sometimes a poem to make sense of a feeling, and sometimes just a sentence that refuses to leave my head. Writing is my way of making a little room for all of it.</p>
                        <p className="bg-black py-2 px-4 text-[#fff8dc] text-center  rounded-md italic">Different mediums, same curiosity. I just like making things that mean something.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}