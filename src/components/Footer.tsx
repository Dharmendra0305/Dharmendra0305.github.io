import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personal } from '@/data/portfolioData';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              {personal.name.split(' ')[0]}<span className="gradient-text">.dev</span>
            </h3>
            <p className="mt-2 text-sm text-slate-400">{personal.tagline}</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-2.5">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-slate-300 transition-all hover:scale-105 hover:border-white/15 hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-slate-300 transition-all hover:scale-105 hover:border-white/15 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={`mailto:${personal.email}`} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-slate-300 transition-all hover:scale-105 hover:border-white/15 hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 pt-4 border-t border-white/5 w-full max-w-md">
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              Built with <Heart className="h-3 w-3 text-cyan-400" /> using React & Framer Motion
            </p>
            <p className="font-mono text-xs text-slate-600">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
