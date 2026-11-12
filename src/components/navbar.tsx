
"use client";

import { Goldman } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import xIcon from "@/public/icons/x-solid-full.svg";
import staggeredBarsIcon from "@/public/icons/bars-staggered-solid-full.svg";

const goldman = Goldman({
  weight: "700",
  subsets: ["latin"],
});

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "about", id: "about" },
  { label: "projects", id: "projects" },
  { label: "experience", id: "experience" },
  // { label: "notebook", id: "notebook" },
  { label: "photography", id: "photography" },
  { label: "let's talk", id: "lets-talk" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    let animationFrameId: number;

    const updateActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) return;

      const containerRect = container.getBoundingClientRect();

      // Detection point: 25% down the visible scroll container.
      const detectionPoint =
        containerRect.top + container.clientHeight * 0.25;

      let currentSection = sections[0].id;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= detectionPoint) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      // Always highlight the last section at the bottom.
      const isAtBottom =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 2;

      if (isAtBottom) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection
      );
    };

    const handleContainerScroll = () => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    container.addEventListener("scroll", handleContainerScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleContainerScroll);

    return () => {
      container.removeEventListener("scroll", handleContainerScroll);
      window.removeEventListener("resize", handleContainerScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    setIsOpen(false);
    setActiveSection(id);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 flex h-20 w-full flex-row items-center justify-between border-b border-black bg-[#fff8dc] px-8">

        {/* Logo */}
        <div className="flex h-full items-center justify-start">
          <Link
            href="/"
            className={`${goldman.className} rounded-lg px-3 py-2 text-lg tracking-wider transition-all duration-300 active:scale-95`}
          >
            @aisaaxs / portfolio
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden flex-row items-center justify-end gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                aria-current={isActive ? "location" : undefined}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium capitalize transition-all duration-300 active:scale-95 ${
                  isActive
                    ? "bg-black font-semibold text-[#fff8dc]"
                    : "text-black/70 hover:scale-105 hover:bg-black/10 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-black/5 focus:outline-none"
            aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <Image loading="eager"
              src={isOpen ? xIcon : staggeredBarsIcon}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-navigation"
        className={`fixed left-0 top-20 z-40 w-full origin-top border-b border-black/10 bg-[#fff8dc] shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "visible max-h-screen scale-y-100 opacity-100"
            : "invisible max-h-0 scale-y-95 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-lg px-4 py-3 text-base font-medium capitalize transition-all duration-200 ${
                  isActive
                    ? "bg-black font-semibold text-[#fff8dc]"
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