import type { SkillGroup as SkillGroupType } from "@/content/skills";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="group/card relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-200 h-full overflow-hidden">
      {/* Background glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/0 to-indigo-500/0 group-hover/card:from-accent/5 group-hover/card:to-indigo-500/5 transition-all duration-200 rounded-2xl -z-10" />

      <div className="space-y-6 relative z-10">
        <h3 className="badge-status !bg-transparent !border-none !p-0">
          <span className="badge-status-dot">
            <span className="badge-status-dot-ping"></span>
            <span className="badge-status-dot-inner"></span>
          </span>
          {group.title}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {group.skills.map((skill, i) => (
            <span key={i} className="badge-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
