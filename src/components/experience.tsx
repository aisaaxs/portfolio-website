import { experienceData } from "@/src/data/experiences"

export default function Experience() {
    return (
        <section id="experience" className="w-full h-auto lg:mt-12 p-12 flex flex-col">
            <div className="w-full h-12 flex justify-start items-start">
                <h2 className="text-sm font-bold capitalize text-amber-900">03 / Where I&apos;ve Made An Impact</h2>
            </div>

            <div className="w-full h-auto flex flex-col justify-start items-center mt-12">
                {
                    experienceData.map((experience, index) => (
                        <div key={index} className={`w-full h-auto flex ${index % 2 === 0 ? "flex-row-reverse lg:flex-row" : "flex-row-reverse"}`}>
                            <div className="w-full py-4 h-full flex justify-center items-center hover:scale-102 transition-all duration-300">
                                <div className="w-full h-full bg-transparent border border-black rounded-lg flex flex-col justify-start items-center p-6 text-center">
                                    <p className="text-xs text-cyan-600 uppercase font-bold">{experience.dateRange}</p>
                                    <h3 className="text-2xl capitalize font-bold mt-4">{experience.position}</h3>
                                    <h4 className="text-lg capitalize">{experience.company}</h4>
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
        </section>
    )
}