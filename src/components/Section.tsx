import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 sm:mb-14 ${center ? 'text-center' : ''}`}
    >
      <div className={`mb-5 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-1.5`}>
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">{title}</span>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
        {subtitle?.split(' ').map((word, i) => (
          <span key={i} className={i % 2 === 1 ? 'gradient-text' : ''}>
            {word}{' '}
          </span>
        )) || title}
      </h2>
      {center && (
        <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>
      )}
    </motion.div>
  );
}
