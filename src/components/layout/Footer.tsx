import { socialLinks } from "@/src/data/social-links";

// Render copyright information and the configured external profile links.
export default async function Footer() {
    "use cache";

    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t-2 border-[var(--ink)] bg-[var(--night)] px-6 py-3 text-center text-xs text-[var(--paper)] sm:px-12">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 md:flex-row">
            <div className="flex items-center justify-center md:mr-auto md:justify-start">
                <p>&copy; {currentYear} Anitej Isaac Sharma. Built with Next.js in Vancouver.</p>
            </div>

            <nav aria-label="Social media" className="flex shrink-0 items-center justify-center">
                <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                  {
                    socialLinks.map((link) => (
                        <li key={link.href}>
                          <a target="_blank" rel="noopener noreferrer" href={link.href} className="inline-flex min-h-9 items-center rounded-md px-2 py-1 hover:bg-white/10">
                            {link.label}<span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        </li>
                    ))
                  }
                </ul>
            </nav>
            <a href="#main-content" className="inline-flex min-h-9 shrink-0 items-center whitespace-nowrap rounded-md px-2 py-1 font-bold hover:bg-white/10">Back to top</a>
          </div>
        </footer>
    )
}
