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
    period: "Jul 2022 – Present",
    summary:
      "Lead NetSuite ERP implementations for mid-market clients across retail, manufacturing, and life sciences.",
    bullets: [
      "Work Orders & Assemblies, inventory status controls, outsourced manufacturing, WIP & Routings",
      "Productized Vendor Master Validation and Inventory Status Enforcement accelerators",
      "Replaced manual spreadsheets with SuiteAnalytics Workbooks and saved searches",
      "Bridged technical teams and C-suite stakeholders on scalable configurations",
    ],
  },
  {
    title: "Owner & Manager",
    company: "Online Embroidery Store",
    location: "Remote",
    period: "Jul 2020 – Jul 2022",
    summary:
      "Scaled e-commerce embroidery store to ~$200K annual revenue and 3,500+ orders with 5.0-star rating.",
    bullets: [
      "Owned marketing, order intake, vendor coordination, inventory & post-purchase CX",
      "Built Excel/Power Query dashboards for sales, margin & demand planning",
      "Designed reliable workflows across Shopify, inventory & outsourcing partners",
    ],
  },
];
