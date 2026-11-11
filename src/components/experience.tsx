import { experienceData } from "@/src/data/experiences"
import Image from "next/image";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-20 w-full h-auto p-12 flex flex-col bg-[#fff8dc]">
            <div className="w-full h-12 flex justify-start items-start">
                <h2 className="text-sm font-bold capitalize text-amber-900">03 / Where I&apos;ve Made An Impact</h2>
            </div>

            <div className="w-full h-auto flex flex-col justify-start items-center">
                {
                    experienceData.map((experience, index) => (
                        <div key={index} className={`w-full h-auto flex ${index % 2 === 0 ? "flex-row-reverse lg:flex-row" : "flex-row-reverse"}`}>
                            <div className="w-full py-4 h-full flex justify-center items-center hover:scale-102 transition-all duration-300">
                                <div className="w-full h-full bg-zinc-50 border border-black rounded-lg flex flex-col justify-start items-center p-6 text-center">
                                    <p className="text-xs text-cyan-600 uppercase font-bold">{experience.dateRange}</p>
                                    <div className="w-24 h-12 mt-4 flex justify-center items-center">
                                        <Image loading="eager" src={experience.companyLogo} alt={experience.companyName} className="w-auto h-full bg-contain rounded-md" />
                                    </div>
                                    <h3 className="text-2xl capitalize font-bold mt-4">{experience.position}</h3>
                                    <h4 className="text-lg capitalize">{experience.companyName}</h4>
                                    <p className="text-sm mt-6">{experience.description}</p>
                                    <p className="text-xs font-bold capitalize mt-8">{experience.highlights}</p>
                                </div>
                            </div>

                            <div className="relative w-auto pr-12 sm:px-12 h-full flex justify-center items-center">
                                <div className="w-2 h-full bg-black" />
                                <div className="absolute w-8 h-8 bg-lime-400 rounded-full" />
                            </div>

                            <div className="max-lg:hidden w-full h-full flex justify-center items-center">
                                <div className="w-full h-full bg-transparent border-none">
                                    {/* Empty Block */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Background & Credentials Section */}
            <div className="mt-20 w-full flex flex-col gap-12 border-t border-black/20 pt-16">
                <div className="w-full text-left">
                    <h2 className="text-sm font-bold capitalize tracking-widest text-amber-900">
                        Credentials & Capabilities
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mt-2">
                        Skills, Education & Certifications
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Technical Skills & Stack */}
                    <div className="bg-zinc-50 border border-black rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
                        <h4 className="text-xl font-bold text-black flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-lime-500" />
                            Technical Expertise
                        </h4>
                        
                        <div className="flex flex-col gap-4 text-sm text-zinc-800">
                            <div>
                                <span className="font-semibold text-black block mb-1">Languages & Web:</span>
                                <p className="leading-relaxed">TypeScript, JavaScript, Python, Java, SQL, C# (.NET), HTML/CSS, React, Next.js, Node.js, Express.js, Tailwind CSS</p>
                            </div>
                            <div>
                                <span className="font-semibold text-black block mb-1">Databases & Integrations:</span>
                                <p className="leading-relaxed">PostgreSQL, SQL Server, MySQL, Redis, Prisma, Drizzle, REST APIs, NextAuth, Plaid, Pinecone, OpenAI API</p>
                            </div>
                            <div>
                                <span className="font-semibold text-black block mb-1">Cloud, Tools & Testing:</span>
                                <p className="leading-relaxed">AWS, Docker, Git/GitHub, CI/CD, Vercel, Firebase, Jest, JUnit, Cypress, Zod, Jira, Confluence</p>
                            </div>
                            <div>
                                <span className="font-semibold text-black block mb-1">AI, Data & Automation:</span>
                                <p className="leading-relaxed">Power BI, Power Apps, Power Automate, SharePoint, Telerik Reporting, Pandas, TensorFlow, Keras</p>
                            </div>
                        </div>
                    </div>

                    {/* Education & Certifications */}
                    <div className="flex flex-col gap-8">
                        {/* Education Card */}
                        <div className="bg-zinc-50 border border-black rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm">
                            <h4 className="text-xl font-bold text-black flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-cyan-600" />
                                Education
                            </h4>
                            <div>
                                <h5 className="text-lg font-bold text-black">The University of British Columbia (UBC)</h5>
                                <p className="text-sm text-cyan-700 font-semibold">Bachelor of Science — Major in Computer Science</p>
                                <p className="text-xs text-zinc-600 mt-1">2021 – 2025 | Cumulative GPA: 80% (Dean&apos;s List: 2022, 2025)</p>
                            </div>
                        </div>

                        {/* Certifications Card */}
                        <div className="bg-zinc-50 border border-black rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm">
                            <h4 className="text-xl font-bold text-black flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-lime-500" />
                                Certifications
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "AWS Certified Cloud Practitioner",
                                    "AWS Certified AI Practitioner",
                                    "Docker Foundations Professional",
                                    "TensorFlow 2.0: Deep Learning & AI",
                                    "C# Unity Game Development 3D",
                                    "ChatGPT & AI in Microsoft Office"
                                ].map((cert, idx) => (
                                    <span key={idx} className="bg-black text-[#fff8dc] px-3 py-1.5 rounded-lg text-xs font-medium">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}