import type { Metadata } from "next";
import { Section, ProjectCard } from "@/components";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Systems, tools, and accelerators built around automation, controls, and operator experience.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section
        title="Projects"
        subtitle="Systems and tools built around automation, controls, and operator experience."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              showFullSummary
            />
          ))}
        </div>
      </Section>
    </>
  );
}
