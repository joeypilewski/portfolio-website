import { Hero, ProjectCard, ExperienceTimeline, SkillGroup } from "@/components";
import { projects } from "@/content/projects";
import { experiences } from "@/content/experience";
import { skillGroups } from "@/content/skills";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="space-y-28">
      <Hero />

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
            <ProjectCard key={project.slug} project={project} />
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
