import { ProjectCard, FeaturedProjectCard } from "@/components";
import { projects, getProjectBySlug } from "@/content/projects";

export default function ProjectsPage() {
    const receiptRight = getProjectBySlug("receipt-right");

    // Filter projects
    const ipProjects = projects.filter(p => p.tags.includes("IP Development"));
    const otherProjects = projects.filter(p =>
        p.slug !== "receipt-right" && !p.tags.includes("IP Development")
    );

    return (
        <div className="space-y-16">
            <div className="space-y-12">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
                    <p className="text-text-muted max-w-2xl">
                        Systems and tools built around automation, controls, and operator experience.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Featured Project Card - Compact Version */}
                    {receiptRight && (
                        <section>
                            <FeaturedProjectCard
                                project={receiptRight}
                                iconSrc="/SlipSplitIcon1-iOS-Default-1024x1024@1x.png"
                                source="projects"
                                size="compact"
                            />
                        </section>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {otherProjects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Productized IP Section */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">Productized IP</h2>
                    <p className="text-text-muted max-w-2xl">
                        Tools developed as custom solutions and scaled into standardized commercial assets.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ipProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
