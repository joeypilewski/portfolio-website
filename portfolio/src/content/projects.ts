export interface ProjectDetails {
  problem: string;
  constraints: string;
  approach: string[];
  result: string;
  nextSteps?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  bullets: string[];
  details?: ProjectDetails;
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
    appstore?: string;
    testflight?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "receipt-right",
    title: "Receipt Right",
    tagline: "Group payments, simplified.",
    summary:
      "iOS app using OpenAI vision API to itemize receipts and split bills through Venmo. No more spreadsheets.",
    bullets: [
      "Snap a photo of any receipt and OpenAI vision API itemizes every line item including tax and tip.",
      "Handles shared items and complex scenarios like uneven distribution across multiple people.",
      "Generates Venmo requests to help coordinate payments easily.",
      "Built with Swift/SwiftUI using OpenAI's structured outputs for reliable parsing.",
    ],
    details: {
      problem:
        "Splitting bills in group travel or dining can lead to social friction and delayed payments. Existing apps often require manual entry of every item. People resort to spreadsheets or rough approximations, which can be time-consuming and error-prone.",
      constraints:
        "Receipt image quality varies (crumpled, poorly lit, faded thermal printing). OpenAI API cost is $0.01 per receipt parse. Requires handling shared items and custom split logic while maintaining a simple user experience.",
      approach: [
        "Used OpenAI's structured outputs (JSON schema validation) to help ensure consistent parsing regardless of receipt format",
        "Built SwiftUI interface that allows for basic equal splits or detailed item-by-item assignments",
        "Cached parsed receipt data locally to avoid re-parsing if users iterate on splits",
        "Integrated Venmo deep links to simplify request generation with itemized notes",
      ],
      result:
        "Currently in TestFlight for internal testing and iteration. Feedback from early usage is driving feature prioritization and workflow refinements.",
      nextSteps:
        "Add multi-receipt support for trips and weekend getaways. Explore integration with Apple Wallet for receipt capture. Support additional payment services.",
    },
    tags: ["iOS", "SwiftUI", "OpenAI API"],
    links: {
      testflight: "https://testflight.apple.com/join/Zfpad8B5",
    },
    featured: true,
  },
  {
    slug: "agentic-trader",
    title: "Agentic Trader",
    tagline: "Autonomous market analysis and execution.",
    summary:
      "AI trading agents that research, assess risk, and execute trades using OpenAI Agents SDK.",
    bullets: [
      "Autonomous agents research market data, analyze risk factors, and determine position sizing.",
      "Custom tool-calling logic enables the agent to access market data via IBKR and Polygon.io.",
      "Interactive Brokers paper trading integration allows for testing without real capital at risk.",
      "Built-in risk constraints and local decision logs help ensure transparency and controlled outcomes.",
    ],
    details: {
      problem:
        "Wanted to explore the practical implementation of agentic AI in market analysis and trade execution. Trading requires real-time data synthesis, risk assessment, and multi-step reasoning.",
      constraints:
        "Market data APIs require robust error handling and rate limit management. System design must include fail-safes for unexpected agent behavior and network interruptions. Paper trading only—no real capital.",
      approach: [
        "Built custom tool set for fetching market data from IBKR and Polygon.io, analyzing portfolios, and executing orders",
        "Implemented hard constraints such as maximum position size, stop-loss triggers, and portfolio concentration limits",
        "Used OpenAI's structured outputs to require agent responses to follow validated schemas",
        "Stored decision logs locally with agent reasoning and tool calls for post-trade review",
      ],
      result:
        "Agent demonstrated coherent multi-step reasoning from initial research to execution in a paper trading environment. The project provided insights into the guardrails and data requirements needed for agentic systems in high-risk domains.",
      nextSteps:
        "Add backtesting framework using historical data. Implement agent 'sleep mode' during low-liquidity periods. Explore multi-agent architecture for specialized research and execution roles.",
    },
    tags: ["Python", "OpenAI Agents SDK", "IBKR API"],
    links: {
      github: "https://github.com/joeypilewski/agentic-trader",
    },
    featured: true,
  },
  {
    slug: "supplier-quality-toolkit",
    title: "Supplier Quality Toolkit",
    tagline: "From custom tool to commercial product.",
    summary:
      "NetSuite procurement validation that blocks bad purchase orders. RSM productized it as commercial IP.",
    bullets: [
      "Automatically blocks purchase orders from unapproved suppliers or with incomplete product records.",
      "Enforces data integrity across UI entry, CSV imports, and automated integrations.",
      "Helps prevent procurement errors for compliance-focused manufacturing clients.",
      "Deployed as standard accelerator tooling across consulting practices.",
    ],
    details: {
      problem:
        "Purchasing from the wrong suppliers or using incomplete item records can cause receiving delays and quality issues. Manual approval processes were often inconsistently enforced.",
      constraints:
        "Had to work across NetSuite UI, CSV imports, and API integrations. Solution needed to be configurable enough to handle different client approval hierarchies and validation requirements.",
      approach: [
        "Built SuiteScript validations that check supplier approval status and item record completeness before PO creation",
        "Implemented real-time enforcement at multiple entry points: UI transactions, CSV imports, and REST API calls",
        "Created a configurable validation matrix tied to item categories and vendor types",
        "Added detailed error messaging to help guide users toward data corrections",
      ],
      result:
        "Successfully implemented as a procurement gate to enforce quality standards. Productized as a standard accelerator and deployed across multiple manufacturing client environments.",
      nextSteps:
        "Add supplier risk scoring based on historical data. Integrate with external compliance databases for automated vendor screening.",
    },
    tags: ["NetSuite", "IP Development", "Quality Control", "Process Automation"],
    featured: true,
  },
  {
    slug: "inventory-status-validations",
    title: "Inventory Status Validations",
    tagline: "Compliance automation, productized.",
    summary:
      "Blocks quarantined inventory from production and shipping. Built for compliance; sold by RSM as IP.",
    bullets: [
      "Blocks quarantined, on-hold, or restricted inventory from being used in manufacturing and fulfillment.",
      "Configurable rules enforce inventory status restrictions consistently across UI, imports, and automation.",
      "Helps reduce quality escapes in regulated manufacturing environments.",
      "Adopted as a commercial product for clients with strict inventory tracking requirements.",
    ],
    details: {
      problem:
        "Using restricted stock in manufacturing or shipping can create quality risks and compliance concerns. Standard system controls often did not extend to automated processes.",
      constraints:
        "Had to enforce rules across work orders, assemblies, and fulfillment without disrupting production velocity. Needed configurable logic per inventory status (Quarantine, Hold, Damaged).",
      approach: [
        "Built custom validation logic using SuiteScript that fires before inventory transactions are committed",
        "Created a configurable rules engine allowing definition of which statuses block specific transaction types",
        "Enforced controls across UI, CSV imports, API calls, and scheduled scripts",
        "Implemented audit logging for transactions and blocks to support root cause analysis",
      ],
      result:
        "Enforced inventory status restrictions across the system to help maintain compliance. Deployed as a scalable solution for regulated manufacturing clients.",
      nextSteps:
        "Add tools to flag inventory nearing expiration. Explore integration with quality management systems for automated status updates.",
    },
    tags: ["NetSuite", "IP Development", "Compliance", "Process Automation"],
    featured: true,
  },
  {
    slug: "embroidery-store",
    title: "Online Embroidery Store",
    tagline: "Operations and Systems Design.",
    summary:
      "Grew custom embroidery business to $200K in year one with 3,500+ orders and a 5.0-star rating.",
    bullets: [
      "Designed end-to-end order-to-ship workflows integrating Shopify, Etsy, inventory systems, and fulfillment partners.",
      "Built dashboards to analyze sales trends, profit margins, and demand planning.",
      "Implemented quality control systems and streamlined customer response processes.",
      "Balanced customer experience, cost optimization, and fulfillment complexity across multiple platforms.",
    ],
    details: {
      problem:
        "Custom embroidery requires coordinating customer designs, blank inventory, embroidery partners, and quality inspection. Needed to maintain speed and quality as the business scaled across different platforms.",
      constraints:
        "Required managing two-week lead times from partners. Different platforms like Shopify and Etsy had distinct order formats and fee structures.",
      approach: [
        "Defined workflows mapping each order through design approval, partner assignment, and quality checks",
        "Created dashboards to monitor inventory turns, margins, and customer acquisition costs",
        "Implemented quality gates including photo reviews of designs before shipping and spot-checks of partner work",
        "Established processes for rapid customer communication to build trust and resolve questions early",
      ],
      result:
        "Grew the business across Shopify and Etsy by focusing on operational reliability. Reviews highlighted the consistency and quality of the products and service.",
      nextSteps:
        "Explore automating design file validation. Build direct partnerships with equipment vendors to expand production capabilities.",
    },
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
