import type { Project } from "@/src/types/content";
import clearjarDashboard from "@/public/images/projects/clearjar-dashboard.jpeg";
import medsimInnovationsHomePage from "@/public/images/projects/medsim-innovations-home-page.png";

// Portfolio project content is kept separate from the card presentation.
export const projectsData: Project[] = [
    {
        title: "ClearJar",
        tagline: "UBC Final-Year Capstone Project",
        problem: "Financial data is often fragmented and difficult to turn into clear, useful decisions.",
        solution: "A personal-finance web application that combines transaction insights, interactive dashboards, linked financial accounts, and an AI-powered assistant.",
        role: "As part of the client-sponsored capstone team, I contributed front-end interfaces and workflows, integrated Plaid financial-account data, helped build the OpenAI-powered chatbot, and worked across planning, implementation, and testing.",
        outcome: "Delivered the complete capstone through Agile and Kanban collaboration, Git-based reviews, and test-driven development. The project was completed for the external client without a public launch.",
        techStack: ["Next.js", "Prisma", "PostgreSQL", "Pinecone", "Plaid", "OpenAI API", "NextAuth"],
        dateRange: "September 2024 — April 2025",
        image: clearjarDashboard,
        imageAlt: "ClearJar personal finance dashboard showing balances, spending, and recent transactions"
    },
    {
        title: "MedSim Innovations",
        tagline: "Bringing Healthcare Innovation Online",
        problem: "MedSim Innovations needed a credible online presence that clearly presented its healthcare simulation solutions.",
        solution: "A responsive marketing website with focused content hierarchy, intuitive navigation, and an experience designed to work cleanly across screen sizes.",
        role: "I designed and developed the website end to end, translating the company’s work into a clear digital experience and implementing the responsive interface.",
        outcome: "Launched a polished public website that gives prospective partners and customers a direct way to understand the company and its simulation offerings.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        dateRange: "2026",
        image: medsimInnovationsHomePage,
        imageAlt: "MedSim Innovations website home page featuring healthcare simulation solutions",
        href: "https://medsiminnovations.com/",
        linkLabel: "Visit the MedSim Innovations website"
    },
];
