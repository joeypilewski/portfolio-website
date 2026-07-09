import { Hero, ProjectCard, FeaturedProjectCard, ExperienceTimeline, SkillGroup } from "@/components";
import { projects, getProjectBySlug } from "@/content/projects";
import { experiences } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import Link from "next/link";

export default function Home() {
  const receiptRight = getProjectBySlug("receipt-right");
  const featuredProjects = projects.filter(p => p.featured && p.slug !== "receipt-right");

  return (
    <div className="space-y-28">
      <Hero />

      {receiptRight && (
        <section className="scroll-mt-24">
          <FeaturedProjectCard
            project={receiptRight}
            iconSrc="/SlipSplitIcon1-iOS-Default-1024x1024@1x.png"
            source="home"
            size="large"
          />
        </section>
      )}

      <section id="experience" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-white mb-10">Experience</h2>
        <ExperienceTimeline data={experiences} />
      </section>

      <section id="projects" className="scroll-mt-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <Link
            href="/projects"
            className="touch-target inline-flex items-center gap-2 text-text-muted hover:text-white active:text-white transition-colors group/link"
          >
            View All
            <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} source="home" />
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-white mb-10">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <SkillGroup key={i} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
}
