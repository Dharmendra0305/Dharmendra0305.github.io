import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Code2, FolderGit2, Zap } from 'lucide-react';
import Section, { SectionHeading } from './Section';
import { personal, projects } from '@/data/portfolioData';

const techFocus = [
  { name: 'Java', description: 'Backend development, OOP, application design' },
  { name: 'Python', description: 'AI/ML pipelines, deep learning, data processing' },
  { name: 'Generative AI', description: 'Stable Diffusion, content generation, model deployment' },
  { name: 'MySQL', description: 'Database design, CRUD operations, data modeling' },
  { name: 'PyTorch', description: 'Deep learning models, neural network training' },
  { name: 'TensorFlow', description: 'GANs, computer vision, image translation' },
];

export default function GitHubStats() {
  const featuredRepos = projects;

  return (
    <Section id="github">
      <SectionHeading title="GitHub" subtitle="Profile & Repository" />

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Left: Profile overview + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col rounded-2xl border border-white/5 bg-gradient-to-br from-cyan-500/[0.04] to-blue-500/[0.04] p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15">
              <Github className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">GitHub Profile</h3>
              <p className="font-mono text-xs text-slate-500">@Dharmendra0305</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-400 text-pretty">
            Explore my open-source projects spanning generative AI, computer vision, Java
            application development, and data extraction tools. Each repository reflects
            hands-on work from internships and self-driven learning.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <FolderGit2 className="mx-auto mb-2 h-5 w-5 text-cyan-400" />
              <p className="font-display text-xl font-bold text-white">{featuredRepos.length}</p>
              <p className="text-xs text-slate-500">Repositories</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <Code2 className="mx-auto mb-2 h-5 w-5 text-blue-400" />
              <p className="font-display text-xl font-bold text-white">5</p>
              <p className="text-xs text-slate-500">Languages</p>
            </div>
          </div>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-xl hover:shadow-cyan-500/30 hover:brightness-110"
          >
            <Github className="h-4 w-4" />
            Visit GitHub Profile
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Right: Featured repositories + tech focus */}
        <div className="lg:col-span-2 space-y-5">
          {/* Featured repositories */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <FolderGit2 className="h-5 w-5 text-cyan-400" />
              <h3 className="font-display text-lg font-bold text-white">Featured Repositories</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredRepos.map((repo, i) => (
                <motion.a
                  key={i}
                  href={repo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="card-hover group rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-cyan-500/20"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-white">{repo.title}</h4>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-cyan-400" />
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400">
                    {repo.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {repo.tags.slice(0, 3).map((tag, j) => (
                      <span
                        key={j}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Technology focus areas */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Zap className="h-5 w-5 text-cyan-400" />
              <h3 className="font-display text-lg font-bold text-white">Technology Focus Areas</h3>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {techFocus.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">{tech.name}</p>
                    <p className="truncate text-xs text-slate-500">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
