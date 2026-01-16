export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  bullets: string[];
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
    appstore?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "receipt-right",
    title: "Receipt Right",
    tagline: "Group payments, simplified.",
    summary:
      "iOS app using OpenAI vision models to parse receipts, split items among users, and generate Venmo requests. Reduces group travel and dining friction from spreadsheets to seconds.",
    bullets: [
      "Swift/SwiftUI with OpenAI structured outputs for reliable parsing",
      "Handles shared items, tax, tips, and custom splits",
      "One-tap Venmo request generation",
    ],
    tags: ["Swift", "SwiftUI", "OpenAI API"],
    links: {
      github: "https://github.com/joeypilewski/receipt-right",
    },
    featured: true,
  },
  {
    slug: "agentic-trader",
    title: "Agentic Trader",
    tagline: "Autonomous trading with guardrails.",
    summary:
      "Autonomous trading agent that uses OpenAI Agents SDK and Interactive Brokers API. Engineered complex tool-calling logic to automate market research, risk assessment, and order execution within defined risk limits.",
    bullets: [
      "OpenAI Agents SDK with custom tool-calling logic",
      "Interactive Brokers paper trading API integration",
      "Automated market research and position sizing",
      "Risk constraints and fully auditable decision logs",
    ],
    tags: ["Python", "OpenAI Agents SDK", "IBKR API"],
    links: {
      github: "https://github.com/joeypilewski/agentic-trader",
    },
    featured: true,
  },
  {
    slug: "rsm-validation-ip",
    title: "RSM NetSuite Accelerators",
    tagline: "Custom solutions → standardized products.",
    summary:
      "Developed validation tools (Vendor Master Validation, Inventory Status Enforcement) that RSM adopted as standard 'Accelerator' products. Saved 200+ consultant hours across a dozen implementations (~$50K in efficiency gains).",
    bullets: [
      "Identified repeating pain points across client projects",
      "Productized solutions into reusable accelerators",
      "Eliminated multi-round handoffs with real-time validation",
      "Now deployed as standard tooling across RSM consulting teams",
    ],
    tags: ["NetSuite", "SuiteFlow", "Product Development", "Process Automation"],
    featured: true,
  },
  {
    slug: "embroidery-store",
    title: "Online Embroidery Store",
    tagline: "Zero to $200K in year one.",
    summary:
      "Scaled e-commerce embroidery store from zero to $200K revenue in year one with 3,500+ orders and 5.0-star rating. Engineered end-to-end order-to-ship process integrating Shopify, Etsy, inventory systems, and outsourcing partners.",
    bullets: [
      "Designed reliable workflows across multiple platforms and vendors",
      "Built custom Excel/Power Query dashboards for demand planning",
      "Maintained 5.0-star rating through quality control and rapid response",
      "Balanced customer experience, cost optimization, and fulfillment complexity",
    ],
    tags: ["Shopify", "Etsy", "Operations Design", "Power Query", "Systems Integration"],
    links: {
      demo: "https://thestylesshopco.com",
    },
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
