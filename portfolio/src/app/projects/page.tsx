
import { ProjectCard } from "@/components";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
                <p className="text-text-muted max-w-2xl">
                    Systems and tools built around automation, controls, and operator experience.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
}
