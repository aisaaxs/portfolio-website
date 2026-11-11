import Image from "next/image";
import sampleImage from "@/public/images/about/comic-waterfall-selfie.png";

export default function Photography() {
    return (
        <section id="photography" className="bg-black w-full h-auto lg:mt-12 p-12 flex flex-col">
            <div className="w-full h-12 flex justify-start items-start">
                <h2 className="text-sm font-bold capitalize text-[#fff8dc]">04 / See Through My Lens</h2>
            </div>

            <div className="w-full h-auto flex flex-row flex-wrap justify-around items-center gap-x-8 gap-y-16 py-12">
                {
                    Array.from({length:6}).map((item, index) => (
                        <div key={index} className={`w-80 h-88 border-2 border-[#fff8dc] ${index % 2 === 0 ? "rotate-2" : "-rotate-2"} flex flex-col`}>
                            <div className="w-full h-4/5">
                                <Image src={sampleImage} alt="sample" className="w-full h-full bg-cover" />
                            </div>

                            <div className="w-full h-1/5 flex justify-center items-center text-center bg-[#fff8dc]">
                                <p className="text-sm font-bold capitalize">text text text text</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}