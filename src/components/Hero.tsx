import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ArrowDown, Sparkles, MapPin, Terminal, Eye } from 'lucide-react';
import { personal, floatingTechIcons } from '@/data/portfolioData';
import { getIcon } from './iconMap';

function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl rounded-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="ml-3 flex items-center gap-2 text-xs text-slate-500">
            <Terminal className="h-3.5 w-3.5" />
            <span className="font-mono">developer.ts</span>
          </div>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-[13px] leading-relaxed">
          <div className="text-slate-600">{"// Who am I?"}</div>
          <div>
            <span className="text-purple-400">const</span>{' '}
            <span className="text-cyan-400">developer</span>{' '}
            <span className="text-slate-500">=</span>{' '}
            <span className="text-slate-500">{'{'}</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-400">name</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-emerald-400">'Dharmendra Kumar Prasad'</span>
            <span className="text-slate-500">,</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-400">role</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-emerald-400">'Java Full Stack'</span>
            <span className="text-slate-500">,</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-400">stack</span>
            <span className="text-slate-500">: [</span>
            <span className="text-emerald-400">'Java'</span>
            <span className="text-slate-500">,</span>{' '}
            <span className="text-emerald-400">'Python'</span>
            <span className="text-slate-500">,</span>{' '}
            <span className="text-emerald-400">'MySQL'</span>
            <span className="text-slate-500">],</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-400">focus</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-emerald-400">'Backend + Gen AI'</span>
            <span className="text-slate-500">,</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-400">cgpa</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-amber-400">8.71</span>
            <span className="text-slate-500">,</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-400">openToWork</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-emerald-400">true</span>
            <span className="text-slate-500">,</span>
          </div>
          <div>
            <span className="text-slate-500">{'}'}</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-cyan-400">{'>'}_</span>
            <span className="inline-block h-4 w-2 animate-pulse bg-cyan-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* Floating tech icons */}
      {floatingTechIcons.map((tech, i) => {
        const Icon = getIcon(tech.name);
        return (
          <motion.div
            key={i}
            className={`absolute ${tech.position} hidden xl:block`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: tech.delay, duration: 0.8 }}
          >
            <div className="animate-float-slow">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl glass text-cyan-400/50">
                <Icon className="h-7 w-7" />
              </div>
            </div>
          </motion.div>
        );
      })}

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-emerald-300 sm:text-sm">Available for Internships & Full-time Roles</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
            >
              {personal.name}
            </motion.h1>

            {/* Static role heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 flex flex-col gap-1.5 sm:gap-2"
            >
              <h2 className="font-display text-lg font-semibold text-cyan-400 sm:text-xl lg:text-2xl">
                Java Full Stack Developer
              </h2>
              <h2 className="font-display text-base font-medium text-slate-300 sm:text-lg lg:text-xl">
                Generative AI &amp; Machine Learning Enthusiast
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base text-pretty"
            >
              {personal.bio}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 flex items-center gap-2 text-sm text-slate-500"
            >
              <MapPin className="h-4 w-4 text-cyan-400" />
              <span>{personal.location}</span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={personal.resumeUrl}
                download="Dharmendra_Kumar_Prasad_Resume.pdf"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-xl hover:shadow-cyan-500/30 hover:brightness-110"
              >
                <FileText className="h-4 w-4" />
                Download Resume
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-500/30 hover:bg-white/[0.06]"
              >
                <Eye className="h-4 w-4 text-cyan-400 transition-transform group-hover:scale-110" />
                View Resume
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-500/30 hover:bg-white/[0.06]"
              >
                <Sparkles className="h-4 w-4 text-cyan-400 transition-transform group-hover:scale-110" />
                View Projects
              </a>
              <div className="flex gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:scale-105 hover:border-white/20 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:scale-105 hover:border-white/20 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:scale-105 hover:border-white/20 hover:text-white"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile photo and code window */}
          <div className="relative flex justify-center lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative z-10 h-32 w-32 rounded-full p-1 shadow-xl shadow-cyan-500/15 sm:h-36 sm:w-36 lg:absolute lg:-right-4 lg:-top-12"
            >
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-500/25 to-blue-500/20 blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-xl">
                <img
                  src={personal.profilePhotoUrl}
                  alt={`${personal.name} professional portrait`}
                  className="h-full w-full rounded-full object-contain"
                />
              </div>
            </motion.div>
            <div className="mt-8 hidden lg:block">
              <CodeWindow />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-slate-600"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em]">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
