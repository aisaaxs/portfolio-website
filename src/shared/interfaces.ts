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
    company: string,
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