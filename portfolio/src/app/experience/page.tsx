import type { Metadata } from "next";
import { Section, Card, ExperienceItem, SkillGroup } from "@/components";
import { experiences } from "@/content/experience";
import { skillGroups } from "@/content/skills";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Consulting, productized IP, and operator experience across ERP, inventory, and fulfillment.",
};

export default function ExperiencePage() {
  return (
    <>
      <Section
        title="Experience"
        subtitle="Consulting, productized IP, and operator experience across ERP and fulfillment."
      >
        <Card>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={
                i > 0 ? "mt-8 pt-8 border-t border-border/50" : undefined
              }
            >
              <ExperienceItem experience={exp} showFull />
            </div>
          ))}
        </Card>
      </Section>

      <Section
        title="Skills & Tools"
        subtitle="The toolkit I reach for when turning processes into systems."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </Section>

      <Section title="What I'm Looking For">
        <Card>
          <ul className="list mb-4">
            <li>Internal Operations / IT Systems Analyst</li>
            <li>ERP / NetSuite Administrator</li>
            <li>Business Operations or Revenue Operations Analyst</li>
            <li>Supply Chain / Inventory Analyst</li>
          </ul>
          <p className="text-text-muted text-sm">
            Drawn to environments where I can work with operators and engineers,
            prototype small automations, and replace spreadsheet glue with
            reliable systems.
          </p>
        </Card>
      </Section>
    </>
  );
}
