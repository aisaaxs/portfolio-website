import { experienceData } from "@/src/data/experiences"
import Image from "next/image";

// Combine the experience timeline with a concise skills and credentials summary.
export default function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20 bg-[var(--paper)] px-6 py-16 sm:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 flex w-full flex-col items-start gap-2">
                <h2 id="experience-heading" tabIndex={-1} className="text-sm font-bold capitalize text-amber-900 focus:outline-none">03 / Where I&apos;ve Made An Impact</h2>
                <p className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Engineering, research, and community leadership grounded in practical outcomes.</p>
            </div>

            <ol aria-label="Professional and community experience" className="w-full h-auto flex flex-col justify-start items-center">
                {
                    // Alternate cards around the center rail on large screens.
                    experienceData.map((experience, index) => (
                        <li key={`${experience.companyName}-${experience.position}`} className={`w-full h-auto flex ${index % 2 === 0 ? "flex-row-reverse lg:flex-row" : "flex-row-reverse"}`}>
                            <div className="w-full py-4 h-full flex justify-center items-center hover:scale-102 transition-all duration-300">
                                <div className="w-full h-full bg-zinc-50 border border-black rounded-lg flex flex-col justify-start items-center p-6 text-center">
                                    <p className="text-sm text-cyan-800 uppercase font-bold">{experience.dateRange}</p>
                                    <div className="w-24 h-12 mt-4 flex justify-center items-center">
                                        <Image loading="lazy" src={experience.companyLogo} alt="" className="w-auto h-full object-contain rounded-md" />
                                    </div>
                                    <h3 className="text-2xl capitalize font-bold mt-4">{experience.position}</h3>
                                    <h4 className="text-lg capitalize">{experience.companyName}</h4>
                                    <ul className="mt-6 list-disc space-y-2 pl-5 text-left text-sm leading-relaxed">
                                      {experience.achievements.map((achievement) => (
                                        <li key={achievement}>{achievement}</li>
                                      ))}
                                    </ul>
                                    <p className="text-xs font-bold capitalize mt-8">{experience.highlights}</p>
                                </div>
                            </div>

                            <div aria-hidden="true" className="relative flex self-stretch items-center justify-center px-6 sm:px-12">
                                <div className="absolute inset-y-0 w-2 bg-black" />
                                <div className="absolute w-8 h-8 bg-lime-400 rounded-full" />
                            </div>

                            <div className="max-lg:hidden w-full h-full flex justify-center items-center">
                                <div className="w-full h-full bg-transparent border-none">
                                    {/* Balances the alternating timeline layout. */}
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ol>

            {/* Background & Credentials Section */}
            <div className="mt-20 w-full flex flex-col gap-12 border-t border-black/20 pt-16">
                <div className="w-full text-left">
                    <h3 className="text-sm font-bold capitalize tracking-widest text-amber-900">
                        Credentials & Capabilities
                    </h3>
                    <p className="text-3xl sm:text-4xl font-bold tracking-tight text-black mt-2">
                        Skills, Education & Certifications
                    </p>
                </div>

                <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                    {/* Technical Skills & Stack */}
                    <div className="flex h-full flex-col gap-6 rounded-2xl border border-black bg-zinc-50 p-6 shadow-sm sm:p-8">
                        <h4 className="text-xl font-bold text-black flex items-center gap-2">
                            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-lime-500" />
                            Technical Expertise
                        </h4>
                        
                        <div className="flex flex-col gap-4 text-sm text-zinc-800">
                            <div>
                                <h5 className="font-semibold text-black block mb-1">Languages & Web</h5>
                                <p className="leading-relaxed">TypeScript, JavaScript, Python, Java, SQL, C# (.NET), HTML/CSS, React, Next.js, Node.js, Express.js, Tailwind CSS</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-black block mb-1">Databases & Integrations</h5>
                                <p className="leading-relaxed">PostgreSQL, SQL Server, MySQL, Redis, Prisma, Drizzle, REST APIs, NextAuth, Plaid, Pinecone, OpenAI API</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-black block mb-1">Cloud, Tools & Testing</h5>
                                <p className="leading-relaxed">AWS, Docker, Git/GitHub, CI/CD, Vercel, Firebase, Jest, JUnit, Cypress, Zod, Jira, Confluence</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-black block mb-1">AI, Data & Automation</h5>
                                <p className="leading-relaxed">Power BI, Power Apps, Power Automate, SharePoint, Telerik Reporting, Pandas, TensorFlow, Keras</p>
                            </div>
                        </div>
                    </div>

                    {/* Education & Certifications */}
                    <div className="flex h-full flex-col gap-8 md:grid md:grid-rows-2">
                        {/* Education Card */}
                        <div className="flex flex-col gap-4 rounded-2xl border border-black bg-zinc-50 p-6 shadow-sm sm:p-8 md:h-full md:justify-center">
                            <h4 className="text-xl font-bold text-black flex items-center gap-2">
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-cyan-700" />
                                Education
                            </h4>
                            <div>
                                <h5 className="text-lg font-bold text-black">The University of British Columbia (UBC)</h5>
                                <p className="text-sm text-cyan-700 font-semibold">Bachelor of Science — Major in Computer Science</p>
                                <p className="text-xs text-zinc-600 mt-1">2021 – 2025 | Cumulative GPA: 80% (Dean&apos;s List: 2022, 2025)</p>
                            </div>
                        </div>

                        {/* Certifications Card */}
                        <div className="flex flex-col gap-4 rounded-2xl border border-black bg-zinc-50 p-6 shadow-sm sm:p-8 md:h-full md:justify-center">
                            <h4 className="text-xl font-bold text-black flex items-center gap-2">
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-lime-500" />
                                Certifications
                            </h4>
                            <ul className="flex flex-wrap gap-2" aria-label="Certifications">
                                {[
                                    "AWS Certified Cloud Practitioner",
                                    "AWS Certified AI Practitioner",
                                    "Docker Foundations Professional",
                                    "TensorFlow 2.0: Deep Learning & AI",
                                    "C# Unity Game Development 3D",
                                    "ChatGPT & AI in Microsoft Office"
                                ].map((cert) => (
                                    <li key={cert} className="bg-black text-[#fff8dc] px-3 py-1.5 rounded-lg text-sm font-medium">
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}
