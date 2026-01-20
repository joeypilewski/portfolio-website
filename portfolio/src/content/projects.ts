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
      "Snap a photo of any receipt and OpenAI vision API automatically itemizes every line item, tax, and tip.",
      "Handles shared items, custom splits, and complex scenarios like uneven distribution across multiple people.",
      "One-tap Venmo request generation eliminates the back-and-forth of coordinating payments.",
      "Built with Swift/SwiftUI using OpenAI's structured outputs for reliable, consistent parsing.",
    ],
    details: {
      problem: "Splitting bills in group travel or dining creates social awkwardness and delayed payments. Existing apps (Splitwise, Venmo's split feature) require manual entry of every item. People resort to spreadsheets or rough approximations, leading to overpayments or unpaid balances.",
      constraints: "Receipt image quality varies wildly (crumpled, poorly lit, faded thermal printing). OpenAI API costs ~$0.02 per receipt parse. Had to handle shared items, custom tips, and complex split logic without overwhelming users with configuration.",
      approach: [
        "Used OpenAI's structured outputs (JSON schema validation) to ensure consistent parsing regardless of receipt format",
        "Built SwiftUI interface that progressively reveals complexity: basic equal split → item-by-item → custom assignments",
        "Cached parsed receipt data locally to avoid re-parsing costs if users iterate on splits",
        "Integrated Venmo deep links for one-tap request generation with itemized notes"
      ],
      result: "Currently in TestFlight with 20+ active users. Average parse accuracy: 95%+ on clear receipts. Users report saving 5-10 minutes per group meal vs manual entry. TestFlight feedback driving v2 feature prioritization.",
      nextSteps: "Add multi-receipt trips (e.g., weekend getaway with 10+ meals). Integrate with Apple Wallet for automatic receipt capture. Support other payment apps (Zelle, Cash App)."
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
      "AI trading agent that researches, assesses risk, and executes trades using OpenAI Agents SDK.",
    bullets: [
      "Autonomous agent conducts market research, analyzes risk factors, and determines optimal position sizing.",
      "Custom tool-calling logic enables the agent to access market data, execute trades, and maintain decision logs.",
      "Interactive Brokers paper trading integration allows safe testing without real capital at risk.",
      "Built-in risk constraints and fully auditable decision logs ensure transparency and controlled outcomes.",
    ],
    details: {
      problem: "Wanted to understand the practical limits of agentic AI in high-stakes, time-sensitive domains. Trading requires: real-time data synthesis, risk assessment, multi-step reasoning, and irreversible actions with financial consequences.",
      constraints: "OpenAI Agents SDK was in beta with limited documentation. Interactive Brokers API is complex and unforgiving of errors. Had to design fail-safes for hallucinations, API rate limits, and network interruptions. Paper trading only—no real capital.",
      approach: [
        "Built custom tool set: market data fetcher, portfolio analyzer, risk calculator, order executor, and decision logger",
        "Implemented hard constraints: max position size, max daily trades, stop-loss triggers, and portfolio concentration limits",
        "Used OpenAI's structured outputs to force agent responses into validated schemas before any trading action",
        "Created detailed audit logs with agent reasoning, tool calls, and outcomes for post-trade analysis"
      ],
      result: "Successfully executed 50+ autonomous trades in paper account over 3-week period. Agent demonstrated coherent multi-step reasoning (research → risk assessment → position sizing → execution). Identified edge cases where agent overweighted recent news vs fundamentals. Valuable learning on guardrails needed for agentic systems in high-risk domains.",
      nextSteps: "Add backtesting framework using historical data. Implement agent 'sleep mode' during low-liquidity periods. Explore multi-agent architecture where separate agents handle research, risk, and execution."
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
      "Prevents costly procurement errors from manual entry, data imports, and automated workflows.",
      "Particularly valuable for GxP-validated and compliance-focused manufacturing clients.",
      "Now deployed as standard accelerator tooling across RSM's NetSuite consulting practice.",
    ],
    details: {
      problem: "Clients repeatedly purchased from wrong suppliers or with incomplete item records, causing receiving delays, quality issues, and audit failures. Manual approval processes were slow and inconsistently enforced.",
      constraints: "Had to work across NetSuite UI, CSV imports, and API integrations without breaking existing workflows. GxP clients required full audit trails. Solution needed to be configurable enough to handle different client approval hierarchies.",
      approach: [
        "Built SuiteFlow workflows that validate supplier approval status and item record completeness before PO creation",
        "Implemented real-time validation at multiple entry points: UI transactions, CSV imports, and REST API calls",
        "Created configurable approval matrix tied to item categories, vendor types, and transaction amounts",
        "Added detailed error messaging to guide users toward corrections instead of just blocking transactions"
      ],
      result: "Reduced procurement errors by 95%+ at pilot client. Eliminated 4-5 weekly escalation calls between procurement and receiving. RSM productized it as an accelerator, now deployed at 12+ manufacturing clients. Saves ~$50K in consultant hours per implementation.",
      nextSteps: "Add ML-based supplier risk scoring using historical quality data. Integrate with external compliance databases for automated vendor screening."
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
      "Blocks quarantined, on-hold, or restricted inventory from being used in manufacturing and shipping.",
      "Configurable rules enforce inventory status restrictions consistently across UI, imports, and automation.",
      "Prevents quality escapes and compliance violations in regulated manufacturing environments.",
      "Adopted by RSM as a commercial product for clients with strict inventory tracking requirements.",
    ],
    details: {
      problem: "Life sciences clients were shipping quarantined inventory or using restricted stock in manufacturing, creating FDA compliance risks and potential product recalls. NetSuite's native controls only worked in UI, not in automated processes.",
      constraints: "Had to enforce rules across work orders, assemblies, fulfillment, and transfers without disrupting production velocity. Needed configurable logic per inventory status (Quarantine, Hold, Damaged, etc.). Zero tolerance for false negatives in GxP environments.",
      approach: [
        "Built custom validation logic using SuiteScript that fires before inventory transactions commit",
        "Created configurable rules engine allowing clients to define which statuses block which transaction types",
        "Enforced controls consistently across UI, CSV imports, API calls, and scheduled scripts",
        "Implemented detailed logging for audit trails and root cause analysis when blocks occur"
      ],
      result: "Prevented 100% of attempted restricted inventory usage at pilot client over 6-month period. Passed FDA audit with zero inventory control findings. RSM now sells it as an accelerator for regulated manufacturing clients. Typical ROI: avoid one $500K+ recall scenario.",
      nextSteps: "Add predictive analytics to flag inventory at risk of expiration. Integrate with quality management systems for automated status updates based on test results."
    },
    tags: ["NetSuite", "IP Development", "Compliance", "Process Automation"],
    featured: true,
  },
  {
    slug: "embroidery-store",
    title: "Online Embroidery Store",
    tagline: "Designed end-to-end, grew to $200K.",
    summary:
      "Grew custom embroidery business to $200K in year one with 3,500+ orders and a 5.0-star rating.",
    bullets: [
      "Designed end-to-end order-to-ship workflows integrating Shopify, Etsy, inventory systems, ClickUp, and outsourcing partners.",
      "Built custom Excel and Power Query dashboards to analyze sales trends, profit margins, and demand planning.",
      "Maintained perfect 5.0-star rating through quality control systems and sub-hour customer response times.",
      "Balanced customer experience, cost optimization, and fulfillment complexity across multiple vendors and platforms.",
    ],
    details: {
      problem: "Custom embroidery requires coordinating: customer designs, blank inventory, outsourced embroidery partners, quality inspection, and fulfillment. Most competitors either scaled poorly (manual processes) or delivered poor quality (outsourced everything). Needed to hit both speed and quality at scale.",
      constraints: "Self-funded with $5K starting capital. Two-week lead time from outsourcing partners. Shopify and Etsy have different order formats and fee structures. Had to maintain <5% defect rate to keep 5.0-star rating and avoid costly re-makes.",
      approach: [
        "Built ClickUp workflows mapping each order through: design approval → embroidery partner assignment → quality check → shipment",
        "Created Excel/Power Query dashboards refreshing daily: inventory turns, margin by product line, partner defect rates, customer acquisition cost by channel",
        "Implemented quality gates: photo review of every embroidery before shipping, spot-checks of partner work, pre-emptive replacements for close-call items",
        "Responded to every customer message within 1 hour during business hours to build trust and catch issues early"
      ],
      result: "$200K revenue in year one with 3,500+ orders (avg $57 order value). Perfect 5.0-star rating across 500+ reviews on Etsy. 4.8% defect rate (industry standard: ~10%). Learned that operational systems are as valuable as product—buyers paid premium for reliability.",
      nextSteps: "Automate design file validation to catch customer errors pre-production. Build direct partnerships with embroidery equipment vendors to bring production in-house for faster turnaround and margin expansion."
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
