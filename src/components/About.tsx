import { motion } from 'framer-motion';
import { GraduationCap, Code2, Lightbulb, Target } from 'lucide-react';
import Section, { SectionHeading } from './Section';
import { personal } from '@/data/portfolioData';

const highlights = [
  { icon: GraduationCap, label: 'Education', value: personal.university },
  { icon: Code2, label: 'Focus', value: 'Java & Backend Development' },
  { icon: Lightbulb, label: 'Interest', value: 'Generative AI & Deep Learning' },
  { icon: Target, label: 'Goal', value: 'Software Engineering Roles' },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" subtitle="Who I Am" />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Left: Bio card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3"
        >
          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <span className="font-display text-lg font-bold gradient-text">DK</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{personal.name}</h3>
                <p className="font-mono text-xs text-slate-500">{personal.role}</p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-slate-300 text-pretty sm:text-lg">
              {personal.bio}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 text-pretty">
              {personal.aboutLong}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-hover flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-cyan-500/20"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15">
                    <item.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{item.label}</p>
                    <p className="truncate text-sm font-semibold text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2"
        >
          <div className="flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-gradient-to-br from-cyan-500/[0.04] to-blue-500/[0.04] p-8">
            <div>
              <h3 className="font-display text-xl font-bold text-white">My Approach</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 text-pretty">
                Great software starts with a solid backend. Clean architecture, well-designed
                APIs and reliable data models are the foundation — then I layer on intuitive,
                responsive interfaces that make the experience seamless.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                { label: 'Backend Development', pct: 90 },
                { label: 'Frontend Development', pct: 78 },
                { label: 'AI / ML Integration', pct: 72 },
              ].map((bar, i) => (
                <div key={i}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-300">{bar.label}</span>
                    <span className="font-mono text-xs text-cyan-400">{bar.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3 border-t border-white/5 pt-6">
              <div className="text-center">
                <p className="font-display text-2xl font-bold gradient-text">4</p>
                <p className="text-xs text-slate-500">Projects</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-bold gradient-text">4</p>
                <p className="text-xs text-slate-500">Certs</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-bold gradient-text">8.71</p>
                <p className="text-xs text-slate-500">CGPA</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
