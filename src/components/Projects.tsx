import { motion } from 'framer-motion';
import { Github, Star, ArrowUpRight, FolderGit2 } from 'lucide-react';
import Section, { SectionHeading } from './Section';
import { projects } from '@/data/portfolioData';

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group card-hover relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Gradient glow on hover */}
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

      {/* Preview area */}
      <div className={`relative overflow-hidden border-b border-white/5 ${isFeatured ? 'h-56 sm:h-72' : 'h-48'}`}>
        {/* Project image */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient tint overlay for visual consistency */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Browser chrome category label */}
        <div className="absolute left-4 right-4 top-4 flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 backdrop-blur">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <div className="ml-2 flex h-5 flex-1 items-center rounded bg-white/5 px-2">
            <span className="font-mono text-[10px] text-slate-500">{project.category}</span>
          </div>
        </div>

        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1">
            <Star className="h-3 w-3 fill-cyan-400 text-cyan-400" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-300">Featured</span>
          </div>
        )}

        {/* Hover overlay with GitHub link */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
            aria-label="View code on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] border border-white/5">
              <FolderGit2 className="h-4 w-4 text-cyan-400" />
            </div>
            <h3 className="font-display text-lg font-bold text-white sm:text-xl">{project.title}</h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-slate-500 transition-colors hover:text-cyan-400"
            aria-label="Open project on GitHub"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-400 text-pretty">{project.description}</p>

        {/* Achievement highlights */}
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.highlights.map((highlight, k) => (
            <div key={k} className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
              <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span className="text-xs font-medium text-slate-300">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-400 transition-colors group-hover:border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" /> View Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionHeading title="Projects" subtitle="Featured Work" />

      {/* Featured projects */}
      {featured.length > 0 && (
        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      )}

      {/* Other projects */}
      {rest.length > 0 && (
        <>
          <div className="mb-8 mt-12 flex items-center gap-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-500">More Projects</h3>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
