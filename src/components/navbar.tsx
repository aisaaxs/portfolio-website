"use client";

import { Goldman } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import xIcon from "@/public/icons/x-solid-full.svg";
import staggeredBarsIcon from "@/public/icons/bars-staggered-solid-full.svg";

const goldman = Goldman({
    weight: "700",
    subsets: ["latin"]
});

interface NavItem {
    label: string;
    id: string;
}

const navItems: NavItem[] = [
    { label: "about", id: "about" },
    { label: "projects", id: "projects" },
    { label: "experience", id: "experience" },
    { label: "notebook", id: "notebook" },
    { label: "photography", id: "photography" },
    { label: "currently exploring", id: "currently-exploring" },
    { label: "let's talk", id: "lets-talk" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("home");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const container = document.getElementById("scroll-container");

        const options = {
            root: container || null,
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        const allSectionsToWatch = ["home", ...navItems.map(item => item.id)];

        allSectionsToWatch.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsOpen(false);

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className="bg-[#fff8dc] fixed top-0 left-0 w-full h-20 border-b border-black flex flex-row justify-between px-8 z-50 items-center">
                {/* Logo section */}
                <div className="w-auto h-full flex justify-start items-center">
                    <Link 
                        href="/" 
                        className={`${goldman.className} px-3 py-2 rounded-lg text-md tracking-wider transition-all duration-300 transform active:scale-95`}
                    >
                        @aisaaxs / portfolio
                    </Link>
                </div>

                {/* Desktop Menu links */}
                <div className="hidden lg:flex flex-row justify-end items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <Link 
                                key={item.id} 
                                href={`#${item.id}`}
                                onClick={(e) => handleScroll(e, item.id)}
                                className={`text-sm capitalize font-medium px-3 py-2 rounded-lg transition-all duration-300 transform active:scale-95 whitespace-nowrap ${
                                    isActive 
                                        ? "bg-black text-[#fff8dc] font-semibold" 
                                        : "text-black/70 hover:bg-black/10 hover:text-black hover:scale-105"
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Hamburger toggle button */}
                <div className="flex lg:hidden items-center">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="p-2 rounded-lg hover:bg-black/5 transition-colors focus:outline-none cursor-pointer"
                        aria-label="Toggle Navigation Menu"
                    >
                        <Image 
                            src={isOpen ? xIcon : staggeredBarsIcon} 
                            alt={isOpen ? "Close Menu" : "Open Menu"} 
                            width={24} 
                            height={24}
                            className="w-6 h-6 object-contain"
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Panel Drawer */}
            <div className={`fixed top-20 left-0 w-full bg-[#fff8dc] border-b border-black/10 shadow-lg z-40 lg:hidden transition-all duration-300 ease-in-out origin-top ${
                isOpen ? "opacity-100 scale-y-100 max-h-screen visible" : "opacity-0 scale-y-95 max-h-0 invisible overflow-hidden"
            }`}>
                <div className="flex flex-col p-4 gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <Link 
                                key={item.id} 
                                href={`#${item.id}`}
                                onClick={(e) => handleScroll(e, item.id)}
                                className={`text-base capitalize font-medium px-4 py-3 rounded-lg transition-all duration-200 ${
                                    isActive 
                                        ? "bg-black text-[#fff8dc] font-semibold" 
                                        : "text-black/70 hover:bg-black/5"
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
