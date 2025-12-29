import Link from "next/link";
import {
  Hero,
  Section,
  ProjectCard,
  ExperienceItem,
  SkillGroup,
  Card,
} from "@/components";
import { getFeaturedProjects } from "@/content/projects";
import { experiences } from "@/content/experience";
import { skillGroups } from "@/content/skills";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Systems and tools built around automation, controls, and operator experience."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/projects" className="btn">
            View All Projects →
          </Link>
        </div>
      </Section>

      {/* Experience Preview */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Consulting, productized IP, and operator experience across ERP and fulfillment."
      >
        <Card>
          {experiences.slice(0, 2).map((exp, i) => (
            <div
              key={i}
              className={
                i > 0 ? "mt-6 pt-6 border-t border-border/50" : undefined
              }
            >
              <ExperienceItem experience={exp} />
            </div>
          ))}
        </Card>
        <div className="mt-6 text-center">
          <Link href="/experience" className="btn">
            Full Experience →
          </Link>
        </div>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        title="Skills & Tools"
        subtitle="The toolkit I reach for when turning processes into systems."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </Section>

      {/* Target Roles */}
      <Section
        id="targets"
        title="What I'm Looking For"
        subtitle="Roles where I can own systems, shape process, and improve visibility."
      >
        <Card>
          <ul className="list">
            <li>Internal Operations / IT Systems Analyst</li>
            <li>ERP / NetSuite Administrator</li>
            <li>Business Operations or Revenue Operations Analyst</li>
            <li>Supply Chain / Inventory Analyst</li>
          </ul>
          <p className="text-text-muted text-sm mt-4">
            Drawn to environments where I can work with operators and engineers,
            prototype small automations, and replace spreadsheet glue with
            reliable systems.
          </p>
        </Card>
      </Section>

      {/* Contact CTA */}
      <Section id="contact" title="Contact">
        <Card>
          <p className="text-lg mb-4">
            📧{" "}
            <a
              href="mailto:joeypilewski@gmail.com"
              className="text-accent hover:underline"
            >
              joeypilewski@gmail.com
            </a>
          </p>
          <p className="text-text-muted text-sm">
            Happy to discuss implementations, my apps, or how I&apos;d approach
            improving your systems.
          </p>
          <div className="flex gap-3 mt-4">
            <Link href="/contact" className="btn btn-primary">
              Contact Page →
            </Link>
          </div>
        </Card>
      </Section>
    </>
  );
}
