import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Section, { SectionHeading } from './Section';
import { experience } from '@/data/portfolioData';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" subtitle="My Journey" />

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-4 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent sm:left-1/2 sm:-translate-x-1/2"
        />

        <div className="space-y-6">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-7 z-10 -translate-x-1/2 sm:left-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.4, type: 'spring' }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 ring-2 ring-white/10"
                >
                  <Briefcase className="h-4 w-4 text-slate-500" />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`ml-12 flex-1 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pl-10' : 'sm:pr-10 sm:text-right'}`}>
                <div className="card-hover group rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-cyan-500/20 sm:p-6">
                  <div className={`flex items-center gap-2 ${i % 2 === 0 ? '' : 'sm:justify-end'}`}>
                    <span className="font-mono text-xs text-cyan-400">{item.period}</span>
                    <span className="rounded-full bg-slate-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">{item.role}</h3>
                  <p className="text-sm font-medium text-slate-400">{item.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 text-pretty">{item.description}</p>
                  <div className={`mt-4 flex flex-wrap gap-1.5 ${i % 2 === 0 ? '' : 'sm:justify-end'}`}>
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer */}
              <div className="hidden sm:block sm:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
