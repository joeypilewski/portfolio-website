import type { SkillGroup as SkillGroupType } from "@/content/skills";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
