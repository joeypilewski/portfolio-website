import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

interface FeaturedProjectCardProps {
    project: Project;
    iconSrc: string;
    source?: "home" | "projects";
    size?: "large" | "compact";
}

export function FeaturedProjectCard({
    project,
    iconSrc,
    source = "home",
    size = "large",
}: FeaturedProjectCardProps) {
    const large = size === "large";

    return (
        <Link
            href={`/projects/${project.slug}?ref=${source}`}
            className={`group relative block rounded-2xl bg-gradient-to-br from-accent/20 via-purple-500/10 to-accent-strong/20 border border-accent/30 overflow-hidden hover:border-accent/50 hover:shadow-glow-card active:border-accent/50 transition-all duration-200 ease-out ${large ? "p-8 md:p-10" : "p-6"}`}
        >
            <div className={`relative ${large ? "space-y-6" : "space-y-4"}`}>
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
                    <div className={`flex flex-row items-center ${large ? "gap-6 md:gap-8 mb-6" : "gap-4 mb-4"}`}>
                        <div
                            className={`relative flex-shrink-0 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 ${large ? "w-20 h-20 md:w-24 md:h-24 rounded-2xl" : "w-16 h-16 rounded-xl"}`}
                        >
                            <Image
                                src={iconSrc}
                                alt={`${project.title} App Icon`}
                                fill
                                className="object-cover"
                                sizes={large ? "(max-width: 768px) 80px, 96px" : "64px"}
                            />
                        </div>
                        <div>
                            <h2
                                className={`font-bold text-white group-hover:text-accent transition-colors duration-200 ${large ? "text-3xl md:text-4xl mb-2" : "text-2xl mb-1"}`}
                            >
                                {project.title}
                            </h2>
                            <p className={`text-accent font-medium ${large ? "text-xl" : "text-base"}`}>
                                {project.tagline}
                            </p>
                        </div>
                    </div>
                    <p className={`text-text-muted leading-relaxed ${large ? "max-w-3xl" : ""}`}>
                        {project.summary}
                    </p>
                </div>

                <div className={`flex flex-wrap gap-2 ${large ? "" : "pt-2"}`}>
                    {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="badge-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
