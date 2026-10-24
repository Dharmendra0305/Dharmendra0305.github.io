import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { getIcon } from './iconMap';
import Section, { SectionHeading } from './Section';
import { skillCategories } from '@/data/portfolioData';

const colorMap: Record<string, { gradient: string; text: string; bg: string; border: string; barFrom: string; barTo: string }> = {
  blue: { gradient: 'from-blue-500/15 to-blue-500/5', text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'hover:border-blue-500/30', barFrom: 'from-blue-500', barTo: 'to-cyan-400' },
  emerald: { gradient: 'from-emerald-500/15 to-emerald-500/5', text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'hover:border-emerald-500/30', barFrom: 'from-emerald-500', barTo: 'to-teal-400' },
  cyan: { gradient: 'from-cyan-500/15 to-cyan-500/5', text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'hover:border-cyan-500/30', barFrom: 'from-cyan-500', barTo: 'to-blue-400' },
  amber: { gradient: 'from-amber-500/15 to-amber-500/5', text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'hover:border-amber-500/30', barFrom: 'from-amber-500', barTo: 'to-orange-400' },
  rose: { gradient: 'from-rose-500/15 to-rose-500/5', text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'hover:border-rose-500/30', barFrom: 'from-rose-500', barTo: 'to-pink-400' },
};

function proficiencyLabel(level: number): string {
  if (level >= 88) return 'Expert';
  if (level >= 78) return 'Advanced';
  if (level >= 65) return 'Intermediate';
  return 'Learning';
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading title="Skills" subtitle="Technical Expertise" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = getIcon(cat.icon, Wrench);
          const c = colorMap[cat.color] ?? colorMap.blue;
          const avgLevel = Math.round(cat.skills.reduce((sum, s) => sum + s.level, 0) / cat.skills.length);

          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group card-hover rounded-2xl border border-white/5 bg-white/[0.02] p-6 ${c.border}`}
            >
              {/* Header */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${c.gradient} ${c.bg}`}>
                    <Icon className={`h-5 w-5 ${c.text}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{cat.category}</h3>
                </div>
                <span className={`font-mono text-xs ${c.text}`}>{avgLevel}%</span>
              </div>

              {/* Skills */}
              <div className="space-y-3.5">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="group/skill">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className={`font-mono text-[10px] uppercase tracking-wider ${c.text} opacity-60`}>
                        {proficiencyLabel(skill.level)}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + j * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full rounded-full bg-gradient-to-r ${c.barFrom} ${c.barTo}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
