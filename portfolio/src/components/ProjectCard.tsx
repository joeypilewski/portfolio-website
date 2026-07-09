import Link from "next/link";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  source?: "home" | "projects";
}

export function ProjectCard({ project, source = "projects" }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}?ref=${source}`}
      className="card group relative flex flex-col hover:bg-white/10 hover:border-accent/50 active:bg-white/10 active:border-accent/50 transition-all duration-200 ease-out h-full overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
        <span className="text-white">→</span>
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">
          {project.tagline}
        </p>
        <p className="mt-2 text-base text-text-muted leading-relaxed">
          {project.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 mt-auto">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="badge-tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
