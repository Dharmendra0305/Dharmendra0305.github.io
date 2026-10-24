import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import Section, { SectionHeading } from './Section';

type Brand = 'github' | 'linkedin' | 'leetcode' | 'hackerrank';

interface Profile {
  name: string;
  handle: string;
  url: string;
  description: string;
  brand: Brand;
  accent: string;
  glow: string;
}

const profiles: Profile[] = [
  {
    name: 'GitHub',
    handle: 'Dharmendra0305',
    url: 'https://github.com/Dharmendra0305',
    description: 'Open-source projects, software development work and technical repositories.',
    brand: 'github',
    accent: 'text-slate-200',
    glow: 'group-hover:bg-slate-500/15',
  },
  {
    name: 'LinkedIn',
    handle: 'dharmendrakumar03',
    url: 'https://www.linkedin.com/in/dharmendrakumar03/',
    description: 'Professional profile, internships, certifications and networking.',
    brand: 'linkedin',
    accent: 'text-sky-400',
    glow: 'group-hover:bg-sky-500/15',
  },
  {
    name: 'LeetCode',
    handle: 'dharmendrakumar03',
    url: 'https://leetcode.com/u/dharmendrakumar03/',
    description: 'Problem-solving, data structures and algorithms practice.',
    brand: 'leetcode',
    accent: 'text-amber-400',
    glow: 'group-hover:bg-amber-500/15',
  },
  {
    name: 'HackerRank',
    handle: 'dharmendra_kp03',
    url: 'https://www.hackerrank.com/profile/dharmendra_kp03',
    description: 'Programming certifications, assessments and coding achievements.',
    brand: 'hackerrank',
    accent: 'text-emerald-400',
    glow: 'group-hover:bg-emerald-500/15',
  },
];

function PlatformIcon({ brand }: { brand: Brand }) {
  if (brand === 'github') return <Github className="h-7 w-7" aria-hidden="true" />;
  if (brand === 'linkedin') return <Linkedin className="h-7 w-7" aria-hidden="true" />;

  if (brand === 'leetcode') {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.2 3.2 5.1 11.3a3.8 3.8 0 0 0 0 5.4l1.8 1.8a3.8 3.8 0 0 0 5.4 0l8-8" />
        <path d="m10.1 6.3 2.6-2.6a3.8 3.8 0 0 1 5.4 0l1.8 1.8" />
        <path d="M8.2 14h10.1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5 20.2 7v10L12 21.5 3.8 17V7L12 2.5Z" />
      <path d="M8.2 15.8V8.2h3.5a2.2 2.2 0 0 1 0 4.4H8.2M11.7 12.6l3.5 3.2" />
    </svg>
  );
}

export default function ProfessionalPresence() {
  return (
    <Section id="professional-presence">
      <SectionHeading title="Professional Presence" subtitle="Find Me Online" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map((profile, index) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="card-hover group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-cyan-400/25 hover:bg-white/[0.055]"
          >
            <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/0 blur-3xl transition-colors duration-500 ${profile.glow}`} />
            <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 ${profile.accent}`}>
              <PlatformIcon brand={profile.brand} />
            </div>

            <div className="relative mt-6 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-bold text-white">{profile.name}</h3>
                <p className="mt-1 font-mono text-[11px] text-slate-500">@{profile.handle}</p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400" />
            </div>

            <p className="relative mt-4 text-sm leading-relaxed text-slate-400">{profile.description}</p>
            <span className="relative mt-auto pt-5 text-xs font-semibold text-slate-500 transition-colors group-hover:text-cyan-300">Visit profile</span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
