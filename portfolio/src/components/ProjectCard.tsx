import Link from "next/link";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
        <span className="text-white">→</span>
      </div>

      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-text-muted leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
