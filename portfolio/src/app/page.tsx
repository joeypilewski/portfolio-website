import { Hero, ProjectCard, ExperienceTimeline, SkillGroup } from "@/components";
import { projects, getProjectBySlug } from "@/content/projects";
import { experiences } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);
  const receiptRight = getProjectBySlug("receipt-right");

  return (
    <div className="space-y-28">
      <Hero />

      {receiptRight && (
        <section className="scroll-mt-24">
          <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-accent">Featured Project</span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
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
                {receiptRight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href={`/projects/${receiptRight.slug}?ref=home`}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 inline-flex items-center gap-2"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                {receiptRight.links?.testflight && (
                  <a
                    href={receiptRight.links.testflight}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 font-medium hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Try on TestFlight
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="experience" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-white mb-10">Experience</h2>
        <ExperienceTimeline data={experiences} />
      </section>

      <section id="projects" className="scroll-mt-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">Selected Work</h2>
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
