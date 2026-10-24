import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[140px]"
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[110px]"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40" />
    </div>
  );
}
