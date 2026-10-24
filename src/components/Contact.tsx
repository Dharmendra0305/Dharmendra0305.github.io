import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Phone, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Section, { SectionHeading } from './Section';
import { personal } from '@/data/portfolioData';

type Status = 'idle' | 'loading' | 'success' | 'error';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      setErrorMessage('The contact form is not fully configured yet. Please reach me directly by email.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, { publicKey: PUBLIC_KEY });
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong while sending your message.';
      setErrorMessage(message);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: undefined },
    { icon: Phone, label: 'Availability', value: 'Open to opportunities', href: undefined },
  ];

  return (
    <Section id="contact">
      <SectionHeading title="Contact" subtitle="Get In Touch" />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between rounded-3xl border border-white/5 bg-gradient-to-br from-cyan-500/[0.04] to-blue-500/[0.04] p-8"
        >
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-emerald-300">Available</span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold text-white">Let's build something great.</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 text-pretty">
              I'm actively seeking internships and full-time software development roles. Whether you have
              a question, an opportunity, or just want to connect — I'll get back to you quickly.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-white/5">
                    <info.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-white transition-colors hover:text-cyan-400">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3 border-t border-white/5 pt-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-slate-300 transition-all hover:scale-105 hover:border-white/15 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-slate-300 transition-all hover:scale-105 hover:border-white/15 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-slate-300 transition-all hover:scale-105 hover:border-white/15 hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/5 bg-white/[0.02] p-8">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/10"
                  placeholder="Your Name"
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/10"
                  placeholder="your.email@example.com"
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/10"
                  placeholder="Tell me about your opportunity, project, or collaboration."
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Your message has been sent. I'll get back to you shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-start gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-xl hover:shadow-cyan-500/30 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Send Message
                  </>
                )}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
