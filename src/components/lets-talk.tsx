export default function LetsTalk() {
    return (
        <section id="lets-talk" className="scroll-mt-20 w-full h-auto p-12 flex flex-col">
            <div className="w-full h-12flex justify-start items-start">
                <h2 className="text-sm font-bold capitalize text-amber-900">05 / Get In Touch</h2>
            </div>

            <div className="w-full h-auto mt-12 flex flex-col justify-center items-center text-center gap-8">
                <h3 className="text-5xl font-bold tracking-tight capitalize">
                    Have something{" "}<span className="text-cyan-600">in mind?</span>
                </h3>

                <p className="max-w-4xl text-lg leading-relaxed">
                    I&apos;m currently exploring early-career opportunities in{" "}
                    <span className="font-semibold bg-amber-300">
                        software development, backend engineering, full-stack
                        development, and AI engineering.
                    </span>{" "}
                    Whether it&apos;s an exciting opportunity, a creative collaboration,
                    or just a good conversation, my inbox is always open.
                </p>

                <a href="mailto:anitejsharmas@gmail.com" className="text-xl md:text-2xl font-bold bg-black text-[#fff8dc] px-4 py-2 rounded-lg hover:bg-lime-600">
                    anitejsharmas@gmail.com
                </a>
            </div>
        </section>
    )
}