export default function Resume() {
  return (
    <aside
      aria-labelledby="resume-heading"
      className="border-y-2 border-[var(--ink)] bg-[var(--water-light)] px-6 py-8 sm:px-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="mb-1 text-sm font-bold uppercase tracking-widest text-[var(--forest)]">
            Want the concise version?
          </p>
          <h2 id="resume-heading" className="text-2xl font-bold sm:text-3xl">
            Download my résumé
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed sm:text-base">
            A two-page overview of my software experience, projects, education,
            technical skills, and leadership work.
          </p>
        </div>

        <a
          href="/documents/anitej-isaac-sharma-resume.pdf"
          download
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg border-2 border-[var(--ink)] bg-[var(--ink)] px-6 py-3 font-bold text-[var(--paper)] shadow-[5px_5px_0_var(--bark)] transition-transform hover:-translate-y-1 motion-reduce:transform-none"
        >
          Download résumé
          <span className="sr-only">, PDF, 122 kilobytes</span>
        </a>
      </div>
    </aside>
  );
}
