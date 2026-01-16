export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    title: "Business Application Consulting Senior Associate",
    company: "RSM US LLP",
    location: "New York, NY",
    period: "Jul 2022 – Nov 2025",
    summary:
      "Led NetSuite ERP implementations for mid-market clients across retail, manufacturing, and life sciences sectors, from discovery and design through go-live and hypercare.",
    bullets: [
      "Developed validation tools that RSM adopted as standard 'Accelerator' products, saving 200+ consultant hours across over a dozen implementations (~$50K in efficiency)",
      "Accelerated decision-making by addressing feasibility and configuration issues in real-time; fixing bugs on the spot to eliminate multi-round handoffs and four to five weekly stakeholder–developer sessions",
      "Led NetSuite ERP implementations for mid-market clients across retail, manufacturing, and life sciences sectors, from discovery and design through go-live and hypercare",
      "Architected end-to-end manufacturing solutions including Work Orders, Assemblies, Inventory Management, Outsourced Manufacturing, and WIP & Routings",
    ],
  },
  {
    title: "Owner & Operations Architect",
    company: "Online Embroidery Store",
    location: "Remote",
    period: "Jul 2020 – Jul 2022",
    summary:
      "Scaled e-commerce embroidery store from zero to $200K revenue in year one with 3,500+ orders and 5.0-star rating.",
    bullets: [
      "Scaled from zero to $200K revenue in year one with 3,500+ orders and a 5.0-star rating by focusing on quality control, targeted marketing, and responding to customers within hours",
      "Engineered an end-to-end order-to-ship process integrating Shopify, Etsy, inventory systems, ClickUp, third-party vendors, and outsourcing partners",
      "Built custom dashboards using Excel and Power Query to analyze sales trends, profit margins, and demand planning",
    ],
  },
];
