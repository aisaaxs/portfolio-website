import { footerData } from "@/src/data/footer";

export default function Footer() {
    return (
        <footer className="scroll-mt-20 mt-12 w-full h-auto border-t border-black flex flex-col md:flex-row justify-between items-center gap-2 px-12 py-2 md:py-4 text-xs text-center">
            <div className="w-full h-full flex flex-row justify-center md:justify-start items-center">
                <p className="capitalize">&copy; 2026 Anitej Isaac Sharma. All Rights Reserved.</p>
            </div>

            <div className="w-full h-full flex flex-row justify-center md:justify-end items-center gap-4">
                {
                    footerData.map((data, index) => (
                        <a key={index} target="_blank" href={data.href} className="hover:bg-black/10 px-2 py-1 rounded-md">{data.label}</a>
                    ))
                }
            </div>
        </footer>
    )
}