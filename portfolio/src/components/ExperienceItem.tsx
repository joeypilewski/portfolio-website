import type { Experience } from "@/content/experience";

interface ExperienceItemProps {
  experience: Experience;
  showFull?: boolean;
}

export function ExperienceItem({
  experience,
  showFull = false,
}: ExperienceItemProps) {
  return (
    <div className="experience-item">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
        <div>
          <h3 className="font-semibold">{experience.title}</h3>
          <p className="text-sm text-text-muted">{experience.company}</p>
        </div>
        <p className="text-sm text-text-muted whitespace-nowrap">
          {experience.location} · {experience.period}
        </p>
      </div>

      {showFull && (
        <p className="text-text-muted text-sm mb-3">{experience.summary}</p>
      )}

      <ul className="list">
        {experience.bullets.map((bullet, i) => (
          <li key={i} className="text-sm">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
