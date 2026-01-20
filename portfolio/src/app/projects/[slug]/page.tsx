import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/content/projects";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ ref?: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};

    return {
        title: project.title,
        description: project.summary,
    };
}

export default async function ProjectPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const { ref } = await searchParams;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const backUrl = ref === "home" ? "/" : "/projects";
    const backText = ref === "home" ? "Back to Home" : "Back to Projects";

    return (
        <div className="space-y-12 max-w-3xl">
            <header className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
                <p className="text-xl text-text-muted">{project.tagline}</p>
            </header>

            {project.links && Object.keys(project.links).length > 0 && (
                <section className="flex flex-wrap gap-4">
                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Visit Live Site
                        </a>
                    )}
                    {project.links.testflight && (
                        <a
                            href={project.links.testflight}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-3"
                        >
                            <Image
                                src="/testflight-icon.webp"
                                alt="Apple TestFlight beta testing program icon"
                                width={20}
                                height={20}
                                className="object-contain rounded-[4px]"
                            />
                            Join TestFlight
                        </a>
                    )}
                    {project.links.appstore && (
                        <a
                            href={project.links.appstore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-2"
                        >
                            App Store ↗
                        </a>
                    )}
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 font-medium hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            View on GitHub
                        </a>
                    )}
                </section>
            )}

            <section className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h2 className="text-lg font-semibold text-white mb-4">Overview</h2>
                    <p className="text-text-muted leading-relaxed">{project.summary}</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h2 className="text-lg font-semibold text-white mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {project.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-muted">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className="pt-8">
                <Link
                    href={backUrl}
                    className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    {backText}
                </Link>
            </div>
        </div>
    );
}
