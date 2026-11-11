import Image from "next/image";
import { projectsData } from "@/src/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="bg-gray-100 w-full h-auto lg:mt-12 p-12 flex flex-col">
            <div className="w-full h-12 flex justify-start items-start">
                <h2 className="text-sm font-bold capitalize text-amber-900">02 / Projects With Purpose</h2>
            </div>

            <div className="w-full h-auto flex flex-col gap-y-6">
                {
                    projectsData.map((project, index) => (
                        <div key={index} className="w-full min-h-60 rounded-lg bg-transparent border border-black flex flex-col-reverse lg:flex-row hover:scale-101 transition-all duration-300">
                            <div className="w-full h-full flex flex-col justify-between items-start gap-y-6 p-8 text-left">
                                <h3 className="text-4xl font-bold capitalize">{project.title}</h3>
                                <h4 className="text-xl bg-amber-300">{project.tagline}</h4>
                                <p className="text-md">{project.description}</p>
                                <p className="text-sm font-bold">{project.techStack}</p>
                                <p className="text-xs">{project.dateRange}</p>
                            </div>

                            <div className="w-full h-full flex justify-center items-center p-8">
                                <Image src={project.image} alt="placeholder" className="w-full max-h-100 lg:h-full bg-cover rounded-lg shadow-md" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}