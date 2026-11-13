"use client";

import { Goldman } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import xIcon from "@/public/icons/x-solid-full.svg";
import staggeredBarsIcon from "@/public/icons/bars-staggered-solid-full.svg";
import { navigationItems } from "@/src/config/navigation";

// Use a display font only for the portfolio wordmark.
const goldman = Goldman({
  weight: "700",
  subsets: ["latin"]
});

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateActiveSection = () => {
      const sections = navigationItems
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) return;

      // Detect the section crossing a point below the fixed navigation bar.
      const detectionPoint = window.innerHeight * 0.25;

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
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection
      );
    };

    const handleContainerScroll = () => {
      // Coalesce rapid scroll events into one measurement per animation frame.
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", handleContainerScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleContainerScroll);

    return () => {
      window.removeEventListener("scroll", handleContainerScroll);
      window.removeEventListener("resize", handleContainerScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        !mobileNavigationRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    // Keep the URL-style links accessible while providing smooth in-page motion.
    e.preventDefault();

    setIsOpen(false);
    setActiveSection(id);

    const element = document.getElementById(id);

    if (element) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });

      document.getElementById(`${id}-heading`)?.focus({ preventScroll: true });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <>
      <nav aria-label="Primary navigation" className="fixed top-0 left-0 z-50 flex h-20 w-full flex-row items-center justify-between border-b-2 border-[var(--ink)] bg-[var(--paper)] px-4 sm:px-8">

        {/* Logo */}
        <div className="flex h-full items-center justify-start">
          <Link
            href="/"
            className={`${goldman.className} rounded-lg px-3 py-2 text-base tracking-wider transition-all duration-300 motion-reduce:transition-none sm:text-lg`}
          >
            @aisaaxs / portfolio
          </Link>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden flex-row items-center justify-end gap-1 lg:flex">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`whitespace-nowrap border-b-4 px-3 py-2 text-sm font-medium capitalize transition-colors duration-300 motion-reduce:transition-none ${
                    isActive
                      ? "border-[var(--water)] font-semibold text-black"
                      : "border-transparent text-black/70 hover:border-[var(--sun)] hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu toggle */}
        <div className="flex items-center lg:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="min-h-11 min-w-11 cursor-pointer rounded-lg p-2 transition-colors hover:bg-black/5"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
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
        ref={mobileNavigationRef}
        id="mobile-navigation"
        hidden={!isOpen}
        className={`fixed left-0 top-20 z-40 w-full origin-top border-b border-black/10 bg-[var(--paper)] shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "visible max-h-screen scale-y-100 opacity-100"
            : "invisible max-h-0 scale-y-95 overflow-hidden opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-4">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`block min-h-11 rounded-lg px-4 py-3 text-base font-medium capitalize transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--water-light)] font-semibold text-black"
                      : "text-black/70 hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
