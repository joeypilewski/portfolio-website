import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/components";
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
                            <Link
                                href={`/projects/${receiptRight.slug}?ref=projects`}
                                className="group relative block p-6 rounded-2xl bg-gradient-to-br from-accent/20 via-purple-500/10 to-indigo-500/20 border border-accent/30 overflow-hidden hover:border-accent/50 hover:shadow-[0_0_60px_rgba(139,92,246,0.3)] transition-all duration-200 ease-out"
                            >
                                <div className="relative space-y-4">
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
                                        <div className="flex flex-row items-center gap-4 mb-4">
                                            <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                                                <Image
                                                    src="/SlipSplitIcon1-iOS-Default-1024x1024@1x.png"
                                                    alt={`${receiptRight.title} App Icon`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="64px"
                                                />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-200">
                                                    {receiptRight.title}
                                                </h2>
                                                <p className="text-base text-accent font-medium">
                                                    {receiptRight.tagline}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-text-muted leading-relaxed">
                                            {receiptRight.summary}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
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
