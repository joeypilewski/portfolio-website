import type { SkillGroup as SkillGroupType } from "@/content/skills";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="card">
      <h3 className="text-base font-semibold mb-3">{group.title}</h3>
      <ul className="list">
        {group.skills.map((skill, i) => (
          <li key={i} className="text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
