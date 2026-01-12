import type { Experience } from "@/content/experience";

interface ExperienceTimelineProps {
    data: Experience[];
}

export function ExperienceTimeline({ data }: ExperienceTimelineProps) {
    return (
        <div className="space-y-4">
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="group relative pl-8 pb-12 border-l border-white/10 last:pb-0"
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(129,140,248,0.5)]" />

                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                <h3 className="text-lg font-semibold text-white">
                                    {item.title}
                                </h3>
                                <span className="text-sm font-mono text-text-muted">{item.period}</span>
                            </div>
                            <div className="text-accent text-sm mb-2">{item.company}</div>
                        </div>

                        <div className="pt-2">
                            <p className="text-text-muted leading-relaxed text-sm mb-4">
                                {item.summary}
                            </p>
                            <ul className="space-y-2">
                                {item.bullets.map((bullet, i) => (
                                    <li key={i} className="text-sm text-gray-400 flex items-start gap-3">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20 shrink-0" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
