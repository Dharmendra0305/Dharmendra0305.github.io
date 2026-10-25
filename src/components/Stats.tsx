import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { getIcon } from './iconMap';
import { stats } from '@/data/portfolioData';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const cardLinks: Record<string, string> = {
  'Projects Built': '#projects',
  'Certifications': '#certifications',
  'Internships': '#experience',
};

function StatCard({ stat, index }: { stat: typeof stats[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const countRef = useCountUp(stat.value, 2000, inView);
  const Icon = getIcon(stat.icon, Award);

  const target = cardLinks[stat.label];
  const isClickable = Boolean(target);

  const handleNavigate = (e: React.MouseEvent) => {
    if (!target) return;
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  const inner = (
    <>
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-2xl transition-all duration-500 group-hover:scale-150" />

      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6 text-cyan-400" />
      </div>

      <div className="flex items-baseline justify-center">
        <span ref={countRef} className="font-display text-3xl font-bold text-white sm:text-4xl" />
        <span className="ml-0.5 font-display text-xl font-bold gradient-text sm:text-2xl">{stat.suffix}</span>
      </div>

      <p className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">{stat.label}</p>
    </>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {isClickable ? (
        <a
          href={target}
          onClick={handleNavigate}
          aria-label={`${stat.label} — view section`}
          className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-cyan-500/10 sm:p-8"
        >
          {inner}
        </a>
      ) : (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center sm:p-8">
          {inner}
        </div>
      )}
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
