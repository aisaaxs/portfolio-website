import { StaticImageData } from "next/image";

export interface projectInterface {
    title: string;
    tagline: string;
    description: string;
    techStack: string;
    dateRange: string;
    image: StaticImageData;
};

export interface experienceInterface {
    position: string,
    companyName: string,
    companyLogo: StaticImageData;
    description: string,
    dateRange: string,
    highlights: string
}

export interface photographyInterface {
    image: StaticImageData;
    description: string;
    location: string;
    title: string;
}

export interface footerInterface {
    label: string;
    href: string;
}