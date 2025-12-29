import Link from "next/link";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  showFullSummary?: boolean;
}

export function ProjectCard({
  project,
  showFullSummary = false,
}: ProjectCardProps) {
  return (
    <article className="card group">
      <Link href={`/projects/${project.slug}`} className="block">
        <h3 className="font-semibold group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted mt-1">{project.tagline}</p>
      </Link>

      {showFullSummary && (
        <p className="text-text-muted mt-3 text-sm leading-relaxed">
          {project.summary}
        </p>
      )}

      <ul className="list mt-3">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="text-sm">
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {project.links && Object.keys(project.links).length > 0 && (
        <div className="flex gap-3 mt-4 pt-3 border-t border-border/50">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              Demo ↗
            </a>
          )}
          {project.links.appstore && (
            <a
              href={project.links.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              App Store ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
