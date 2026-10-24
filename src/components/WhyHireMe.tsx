import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { getIcon } from './iconMap';
import Section, { SectionHeading } from './Section';
import { whyHireMe } from '@/data/portfolioData';

export default function WhyHireMe() {
  return (
    <Section id="why-hire-me">
      <SectionHeading title="Why Me" subtitle="Why Hire Me" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyHireMe.map((item, i) => {
          const Icon = getIcon(item.icon, Star);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-hover group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-cyan-500/20"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-2xl transition-all duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 text-pretty">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
