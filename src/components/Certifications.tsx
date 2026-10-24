import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { getIcon } from './iconMap';
import Section, { SectionHeading } from './Section';
import { certifications } from '@/data/portfolioData';

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading title="Certifications" subtitle="Achievements & Credentials" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => {
          const Icon = getIcon(cert.icon, Award);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="card-hover group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-cyan-500/20"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-2xl transition-all duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-cyan-400">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-sm font-bold leading-snug text-white">{cert.title}</h3>
                <p className="mt-1.5 text-xs text-slate-400">{cert.issuer}</p>

                <div className="mt-4 flex items-center gap-1.5 border-t border-white/5 pt-3">
                  <Award className="h-3.5 w-3.5 text-slate-500" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Verified</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
