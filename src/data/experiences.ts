import type { Experience } from "@/src/types/content";
import tylerTechLogo from "@/public/images/experiences/tyler-technologies-logo.jpeg";
import ubcLogo from "@/public/images/experiences/ubc-okanagan-logo.png";
import srfLimitedLogo from "@/public/images/experiences/srf-limited-logo.png";
import ageLinkLogo from "@/public/images/experiences/age-link-logo.png";

// Reverse-chronological career and community experience for the timeline.
export const experienceData: Experience[] = [
    {
        position: "Software Support Specialist",
        companyName: "Tyler Technologies, Courts & Justice",
        companyLogo: tylerTechLogo,
        achievements: [
            "Investigate enterprise production incidents across .NET/C#, TypeScript, Aurelia.js, AWS, and SQL Server systems.",
            "Write SQL correction scripts, document reproducible findings, and collaborate with engineering and QA on defect resolution.",
            "Build Power BI dashboards, Telerik reports, and workflow automations that improve reporting and operational processes."
        ],
        dateRange: "Aug 2025 — Present",
        highlights: "100+ cases/month • 88% first-contact resolution • 40% high/critical priority"
    },
    {
        position: "Professional Development Assistant",
        companyName: "UBC Okanagan, School of Engineering",
        companyLogo: ubcLogo,
        achievements: [
            "Designed and launched a Drupal portal that centralized experiential-learning resources for engineering students.",
            "Automated mentorship communications with Power Automate and analyzed program data to improve outreach."
        ],
        dateRange: "Sep 2024 — Apr 2025",
        highlights: "40% operational efficiency improvement • 30% engagement growth • 800+ students"
    },
    {
        position: "Computer Science Representative",
        companyName: "UBC Okanagan, Quantitative Science Course Union",
        companyLogo: ubcLogo,
        achievements: [
            "Represented Computer Science students and advocated for academic needs with faculty and peers.",
            "Coordinated workshops, technology events, and student-engagement initiatives."
        ],
        dateRange: "Sep 2024 — Dec 2024",
        highlights: "Student advocacy • Technical workshops • Academic engagement"
    },
    {
        position: "Power Platform Developer Intern",
        companyName: "SRF Limited",
        companyLogo: srfLimitedLogo,
        achievements: [
            "Developed three Power Apps and five Power BI dashboards across IT, CTG, Finance, and Operations.",
            "Built a CTG application with SharePoint, Dataverse, and more than ten Power Automate workflows."
        ],
        dateRange: "May 2024 — Aug 2024",
        highlights: "3 Power Apps • 5 Power BI dashboards • 10+ workflows • 50% faster data entry"
    },
    {
        position: "Secretary, Board of Directors",
        companyName: "Age-Link Society",
        companyLogo: ageLinkLogo,
        achievements: [
            "Support board governance through meeting records, communications, administration, and strategic planning.",
            "Manage digital marketing, content, and website updates that strengthen community outreach."
        ],
        dateRange: "May 2024 — Present",
        highlights: "Board governance • Strategic planning • Digital marketing"
    },
    {
        position: "Undergraduate Research Assistant",
        companyName: "UBC Okanagan, Computer Science Department",
        companyLogo: ubcLogo,
        achievements: [
            "Analyzed more than 10,000 Stack Overflow interactions across pre-, during-, and post-pandemic periods.",
            "Developed ARMA time-series models and identified engagement trends to inform retention recommendations."
        ],
        dateRange: "Jan 2024 — Apr 2024",
        highlights: "10,000+ interactions analyzed • ARMA forecasting • 87% accuracy"
    },
    {
        position: "Collegia Assistant",
        companyName: "UBC Okanagan, Student Experience Office",
        companyLogo: ubcLogo,
        achievements: [
            "Supported commuter and first-year students through Jump Start, Weeks of Welcome, and inclusive programming.",
            "Coordinated daily operations, staffing, opening and closing procedures, and team communications."
        ],
        dateRange: "Sep 2023 — Apr 2025",
        highlights: "Campus programming • Student engagement • Daily operations"
    },
    {
        position: "Residence Advisor",
        companyName: "UBC Okanagan, Student Housing & Community Services",
        companyLogo: ubcLogo,
        achievements: [
            "Supported student wellbeing and residence safety through policy guidance, incident documentation, and referrals.",
            "Built community through inclusive programming and contributed to Residence Advisor recruitment and training."
        ],
        dateRange: "Aug 2023 — Apr 2024",
        highlights: "Community leadership • Residence safety • Student support"
    },
    {
        position: "President",
        companyName: "Age-Link Club, UBC Okanagan",
        companyLogo: ubcLogo,
        achievements: [
            "Led biweekly events and semester galas that connected students with seniors.",
            "Represented the organization at the Embrace Aging Summit and advanced intergenerational advocacy."
        ],
        dateRange: "May 2023 — Apr 2024",
        highlights: "Biweekly gatherings • 2 galas/semester • Intergenerational leadership"
    },
];
