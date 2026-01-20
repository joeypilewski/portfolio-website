import type { SkillGroup as SkillGroupType } from "@/content/skills";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="group/card relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 h-full overflow-hidden">
      {/* Background glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/0 to-indigo-500/0 group-hover/card:from-accent/5 group-hover/card:to-indigo-500/5 transition-all duration-500 rounded-2xl -z-10" />

      <div className="space-y-6 relative z-10">
        <h3 className="text-[11px] font-bold tracking-[0.2em] text-accent/80 uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {group.title}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {group.skills.map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.03] border border-white/10 text-text-muted hover:bg-accent/10 hover:border-accent/20 hover:text-white transition-all duration-300 cursor-default group/skill shadow-sm"
            >
              <div className="w-1 h-1 rounded-full bg-white/20 group-hover/skill:bg-accent transition-colors shrink-0" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
