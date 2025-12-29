import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-8 pb-12">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
        {/* Left side - Main hero content */}
        <div className="flex-[2] space-y-5">
          <div className="pill">
            <span className="pill-dot" />
            <span>Ops & Systems Analyst · ERP / IT</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Joey Pilewski
            </h1>
            <p className="text-text-muted">
              NetSuite · Operations · AI-Powered Tooling
            </p>
          </div>

          <p className="text-gray-300 max-w-xl leading-relaxed">
            I turn messy workflows into reliable systems—bridging ops, finance,
            and tech so teams ship faster with fewer mistakes.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="btn btn-primary">
              Get in Touch <span className="ml-1">→</span>
            </Link>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              LinkedIn <span className="ml-1">↗</span>
            </a>
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub <span className="ml-1">↗</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-text-muted pt-2">
            <span>📍 Long Island, NY</span>
            <span>ERP · Ops & PM · Data & AI</span>
          </div>
        </div>

        {/* Right side - What I Do card */}
        <aside className="flex-[1.2] card">
          <h2 className="text-base font-semibold mb-3">What I Do</h2>
          <p className="text-sm text-text-muted mb-4">
            Design and implement systems that cut manual work, enforce
            guardrails, and provide clear visibility across finance, inventory,
            and fulfillment.
          </p>
          <ul className="list text-sm">
            <li>Lead NetSuite implementations end-to-end</li>
            <li>Productize internal IP & validations</li>
            <li>Build analytics & reporting workflows</li>
            <li>Prototype AI-powered automations</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
