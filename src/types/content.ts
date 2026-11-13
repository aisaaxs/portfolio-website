import { StaticImageData } from "next/image";

// Shared data contracts keep the content modules and their UI components in sync.
export interface Project {
    title: string;
    tagline: string;
    problem: string;
    solution: string;
    role: string;
    outcome: string;
    techStack: string[];
    dateRange: string;
    image: StaticImageData;
    imageAlt: string;
    href?: string;
    linkLabel?: string;
};

export interface Experience {
    position: string,
    companyName: string,
    companyLogo: StaticImageData;
    achievements: string[],
    dateRange: string,
    highlights: string
}

export interface Photo {
    image: StaticImageData;
    imageAlt: string;
    description: string;
    location: string;
    title: string;
}

export interface SocialLink {
    label: string;
    href: string;
}
