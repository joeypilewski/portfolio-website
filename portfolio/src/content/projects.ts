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
    tagline: "Who-got-what, without the math.",
    summary:
      "iOS app that parses receipts via OpenAI, assigns items to friends, and generates Venmo requests. Structured JSON outputs ensure reliable parsing.",
    bullets: [
      "Swift/SwiftUI + OpenAI structured outputs",
      "Handles shared items, tax & tips",
      "One-tap Venmo request generation",
    ],
    tags: ["Swift", "SwiftUI", "OpenAI API"],
    links: {
      github: "https://github.com/YOUR_GITHUB/receipt-right",
    },
    featured: true,
  },
  {
    slug: "agentic-trader",
    title: "Agentic Trader",
    tagline: "AI trading agent with guardrails.",
    summary:
      "Python agent using OpenAI Agents SDK and IBKR paper trading. Researches tickers, sizes positions, and executes trades within defined risk limits.",
    bullets: [
      "Tool calling for market data & research",
      "Enforces sizing/exposure constraints",
      "Fully auditable decision logs",
    ],
    tags: ["Python", "OpenAI Agents", "IBKR API"],
    links: {
      github: "https://github.com/YOUR_GITHUB/agentic-trader",
    },
    featured: true,
  },
  {
    slug: "rsm-validation-ip",
    title: "RSM NetSuite Validation IP",
    tagline: "Custom work → reusable accelerators.",
    summary:
      "Productized Vendor Master Validation and Inventory Status Enforcement logic into accelerators, cutting dev hours and improving data integrity across client projects.",
    bullets: [
      "Reduced custom dev hours ~25–40%",
      "Improved first-time-right data quality",
      "Encapsulated lessons into reusable IP",
    ],
    tags: ["NetSuite", "SuiteFlow", "Controls"],
    featured: true,
  },
  {
    slug: "embroidery-store",
    title: "Online Embroidery Store",
    tagline: "Side hustle → system.",
    summary:
      "Built and scaled an e-commerce embroidery store to ~$200K annual revenue, 3,500+ orders, and 5.0-star rating by engineering the order-to-ship process.",
    bullets: [
      "Order routing & vendor workflows",
      "Excel/Power Query dashboards for demand & margin",
      "Balanced CX, cost & fulfillment complexity",
    ],
    tags: ["Shopify", "Ops Design", "Power Query"],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
