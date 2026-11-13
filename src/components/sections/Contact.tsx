// Close the page with availability details and a direct email call to action.
export default function Contact() {
    return (
        <section id="lets-talk" aria-labelledby="lets-talk-heading" className="scroll-mt-20 bg-[var(--forest)] px-6 py-20 text-[var(--paper)] sm:px-12">
          <div className="mx-auto flex w-full max-w-7xl flex-col">
            <div className="flex w-full justify-start">
                <h2 id="lets-talk-heading" tabIndex={-1} className="text-sm font-bold capitalize text-yellow-300 focus:outline-none">05 / Get In Touch</h2>
            </div>

            <div className="w-full h-auto mt-12 flex flex-col justify-center items-center text-center gap-8">
                <h3 className="text-4xl font-bold tracking-tight capitalize sm:text-5xl">
                    Let&apos;s build something <span className="text-cyan-200">thoughtful.</span>
                </h3>

                <p className="max-w-4xl text-lg leading-relaxed">
                    I&apos;m currently exploring opportunities in{" "}
                    <span className="bg-[var(--sun)] px-1 font-semibold text-[var(--ink)]">
                        software development, backend engineering, full-stack
                        development, and AI engineering.
                    </span>{" "}
                    Whether it&apos;s an exciting opportunity, a creative collaboration,
                    or just a good conversation, my inbox is always open.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  <a href="mailto:anitejsharmas@gmail.com" className="inline-flex min-h-11 items-center rounded-lg bg-[var(--ink)] px-5 py-3 font-bold text-[var(--paper)] hover:bg-[var(--night)]">Send me an email</a>
                  <a href="https://www.linkedin.com/in/aisaaxs/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border-2 border-[var(--paper)] px-5 py-3 font-bold hover:bg-white/10">Connect on LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
                  <a href="https://github.com/aisaaxs/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border-2 border-[var(--paper)] px-5 py-3 font-bold hover:bg-white/10">View GitHub<span className="sr-only"> (opens in a new tab)</span></a>
                </div>
                <p className="text-sm text-cyan-100">anitejsharmas@gmail.com</p>
            </div>
          </div>
        </section>
    )
}
