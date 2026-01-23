import { Hero, ProjectCard, ExperienceTimeline, SkillGroup } from "@/components";
import { projects, getProjectBySlug } from "@/content/projects";
import { experiences } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const receiptRight = getProjectBySlug("receipt-right");
  const featuredProjects = projects.filter(p => p.featured && p.slug !== "receipt-right");

  return (
    <div className="space-y-28">
      <Hero />

      {receiptRight && (
        <section className="scroll-mt-24">
          <Link
            href={`/projects/${receiptRight.slug}?ref=home`}
            className="group relative block p-8 md:p-10 rounded-2xl bg-gradient-to-br from-accent/20 via-purple-500/10 to-indigo-500/20 border border-accent/30 overflow-hidden hover:border-accent/50 hover:shadow-[0_0_60px_rgba(139,92,246,0.3)] transition-all duration-200 ease-out"
          >
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="badge-status">
                  <span className="badge-status-dot">
                    <span className="badge-status-dot-ping"></span>
                    <span className="badge-status-dot-inner"></span>
                  </span>
                  Featured Project
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                  <span className="text-white text-xl">→</span>
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center gap-6 md:gap-8 mb-6">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/SlipSplitIcon1-iOS-Default-1024x1024@1x.png"
                      alt={`${receiptRight.title} App Icon`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-200">
                      {receiptRight.title}
                    </h2>
                    <p className="text-xl text-accent font-medium">
                      {receiptRight.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed max-w-3xl">
                  {receiptRight.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {receiptRight.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="badge-tag"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <SkillGroup key={i} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
}
