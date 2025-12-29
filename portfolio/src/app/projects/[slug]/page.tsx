import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, Section } from "@/components";
import { projects, getProjectBySlug } from "@/content/projects";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="mb-8">
        <Link
          href="/projects"
          className="text-sm text-text-muted hover:text-accent transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {project.title}
          </h1>
          <p className="text-xl text-text-muted">{project.tagline}</p>
        </header>

        <Card className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Overview</h2>
          <p className="text-text-muted leading-relaxed">{project.summary}</p>
        </Card>

        <Section title="Key Features">
          <Card>
            <ul className="list">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </Card>
        </Section>

        {project.links && Object.keys(project.links).length > 0 && (
          <Section title="Links">
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  GitHub <span className="ml-1">↗</span>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo <span className="ml-1">↗</span>
                </a>
              )}
              {project.links.appstore && (
                <a
                  href={project.links.appstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  App Store <span className="ml-1">↗</span>
                </a>
              )}
            </div>
          </Section>
        )}
      </article>
    </>
  );
}
