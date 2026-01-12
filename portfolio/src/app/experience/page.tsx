import { ExperienceTimeline } from "@/components";
import { experiences } from "@/content/experience";

export default function ExperiencePage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
                <p className="text-text-muted max-w-2xl">
                    My professional background in consulting, ERP implementations, and operations.
                </p>
            </div>
            <ExperienceTimeline data={experiences} />
        </div>
    );
}
