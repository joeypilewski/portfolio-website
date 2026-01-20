import { Hero, ProjectCard, ExperienceTimeline, SkillGroup } from "@/components";
import { projects, getProjectBySlug } from "@/content/projects";
import { experiences } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);
  const receiptRight = getProjectBySlug("receipt-right");

  return (
    <div className="space-y-28">
      <Hero />

      {receiptRight && (
        <section className="scroll-mt-24">
          <Link
            href={`/projects/${receiptRight.slug}?ref=home`}
            className="group relative block p-8 md:p-10 rounded-2xl bg-gradient-to-br from-accent/20 via-purple-500/10 to-indigo-500/20 border border-accent/30 overflow-hidden hover:border-accent/50 hover:shadow-[0_0_60px_rgba(139,92,246,0.3)] transition-all duration-500"
          >
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  <span className="text-xs font-medium text-white">Featured Project</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
                  <span className="text-white text-xl">→</span>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {receiptRight.title}
                </h2>
                <p className="text-xl text-accent font-medium mb-4">
                  {receiptRight.tagline}
                </p>
                <p className="text-text-muted leading-relaxed max-w-3xl">
                  {receiptRight.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {receiptRight.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
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
            className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors group/link"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillGroups.map((group, i) => (
            <SkillGroup key={i} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
}
