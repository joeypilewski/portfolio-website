export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "ERP & Business Systems",
    skills: [
      "NetSuite (Config/O2C/R2R/P2P)",
      "Manufacturing & Inventory Systems",
      "Work Orders, Assemblies, WIP & Routings",
      "Data Migration & ETL",
      "ClickUp & Project Tools",
      "SuiteFlow & SuiteAnalytics",
      "Ecommerce Ops (Shopify/Etsy)",
    ],
  },
  {
    title: "Strategy & Operations",
    skills: [
      "Process Architecture & Mapping",
      "Change Management & UAT",
      "Project Management",
      "QA Leadership",
      "C-Suite Stakeholder Management",
      "Requirements & User Stories",
      "KPI Design & Root Cause Analysis",
    ],
  },
  {
    title: "AI & Development",
    skills: [
      "Python & Swift",
      "OpenAI API & Agentic Workflows",
      "REST API Integrations",
      "SQL & Advanced Data Analysis",
      "Git & Version Control",
      "Prompt Engineering & Tool Calling",
      "Excel (Power Query, Pivots, XLOOKUP)",
    ],
  },
];
