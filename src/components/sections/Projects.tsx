import Image from "next/image";
import { projectsData } from "@/src/data/projects";

// Render the project dataset as responsive detail-and-image cards.
export default function Projects() {
    return (
        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 bg-zinc-50 px-6 py-16 sm:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 flex w-full flex-col items-start gap-2">
                <h2 id="projects-heading" tabIndex={-1} className="text-sm font-bold capitalize text-amber-900 focus:outline-none">02 / Projects With Purpose</h2>
                <p className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Products shaped by real problems, thoughtful engineering, and measurable purpose.
                </p>
            </div>

            <div className="flex w-full flex-col gap-10">
                {
                    projectsData.map((project) => (
                        <article key={project.title} className="overflow-hidden rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper)] shadow-[8px_8px_0_var(--water)]">
                          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="flex flex-col gap-6 p-6 text-left sm:p-8 lg:p-10">
                                <div>
                                  <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[var(--bark)]">{project.dateRange}</p>
                                  <h3 className="text-4xl font-bold capitalize">{project.title}</h3>
                                  <p className="mt-2 inline-block bg-[var(--sun)] px-2 py-1 text-lg font-semibold">{project.tagline}</p>
                                </div>

                                <dl className="grid gap-5 sm:grid-cols-2">
                                  <div>
                                    <dt className="font-bold text-[var(--forest)]">The problem</dt>
                                    <dd className="mt-1 text-sm leading-relaxed">{project.problem}</dd>
                                  </div>
                                  <div>
                                    <dt className="font-bold text-[var(--water)]">What I helped build</dt>
                                    <dd className="mt-1 text-sm leading-relaxed">{project.solution}</dd>
                                  </div>
                                  <div>
                                    <dt className="font-bold text-[var(--bark)]">My role</dt>
                                    <dd className="mt-1 text-sm leading-relaxed">{project.role}</dd>
                                  </div>
                                  <div>
                                    <dt className="font-bold">The outcome</dt>
                                    <dd className="mt-1 text-sm leading-relaxed">{project.outcome}</dd>
                                  </div>
                                </dl>

                                <ul aria-label={`${project.title} technologies`} className="flex flex-wrap gap-2">
                                  {project.techStack.map((technology) => (
                                    <li key={technology} className="rounded-full border border-[var(--ink)] bg-white px-3 py-1 text-xs font-bold">
                                      {technology}
                                    </li>
                                  ))}
                                </ul>

                                {project.href && project.linkLabel ? (
                                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-fit items-center rounded-lg bg-[var(--ink)] px-5 py-3 font-bold text-[var(--paper)] hover:bg-[var(--forest)]">
                                    {project.linkLabel}
                                    <span className="sr-only"> (opens in a new tab)</span>
                                  </a>
                                ) : (
                                  <p className="text-sm font-semibold text-zinc-700">Private client-sponsored project — no public demo.</p>
                                )}
                            </div>

                            <div className="flex min-h-72 items-center justify-center border-t-2 border-[var(--ink)] bg-[var(--water-light)] p-6 lg:border-l-2 lg:border-t-0">
                                <Image loading="lazy" src={project.image} alt={project.imageAlt} className="h-auto w-full rounded-lg border border-[var(--ink)] object-cover shadow-md" />
                            </div>
                          </div>
                        </article>
                    ))
                }
            </div>
          </div>
        </section>
    )
}
