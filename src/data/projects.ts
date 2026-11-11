import { projectInterface } from "@/src/shared/interfaces";
import clearjarDashboardImage from "@/public/images/projects/clearjar-dashboard.jpeg";
import medsimInnovationsHomePage from "@/public/images/projects/medsim-innovations-home-page.png";

export const projectsData: projectInterface[] = [
    {
        title: "ClearJar",
        tagline: "UBC Final-Year Capstone Project",
        description: "ClearJar brings clarity to personal finance with AI-powered insights, smart transaction analysis, and interactive dashboards that turn financial data into confident decisions. Built with precision through the Software Development Life Cycle (SDLC), test-driven development (TDD), and Agile practices, ClearJar combines intelligent design with reliable engineering to make money management effortless.",
        techStack: "Next.js / Prisma ORM / PostgreSQL / Pinecone / Plaid / OpenAI API / NextAuth",
        dateRange: "September 2024 — April 2025",
        image: clearjarDashboardImage
    },
    {
        title: "MedSim Innovations",
        tagline: "Bringing Healthcare Innovation Online",
        description: "Designed and developed a modern, responsive website for MedSim Innovations, showcasing its healthcare simulation solutions through intuitive navigation, engaging visuals, and a seamless user experience. Explore the live website at https://medsiminnovations.com/.",
        techStack: "Next.js / TypeScript / Tailwind CSS",
        dateRange: "2026",
        image: medsimInnovationsHomePage
    },
];