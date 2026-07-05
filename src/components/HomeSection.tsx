import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HomeSectionProps {
  onViewProjects: () => void;
}

export default function HomeSection({ onViewProjects }: HomeSectionProps) {
  return (
    <section
      id="section-home"
      className="relative w-full h-dvh flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24 bg-cyber-dark bg-dot-matrix overflow-hidden pt-14 sm:pt-16"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-white/[0.02] blur-3xl pointer-events-none rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-4 sm:gap-5 relative z-10"
      >
         <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight select-none text-white font-bubbly">
          <span className="text-zinc-400">Hi, I'm</span> Halima
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl">
          I build things that need to hold up under pressure, from full-stack web apps to
          tools like a phishing detector I built from scratch. Most days I'm switching
          between writing code and thinking like the person trying to break it.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 sm:pt-4">
          <button
            onClick={onViewProjects}
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black hover:bg-zinc-100 font-mono text-sm font-semibold tracking-widest uppercase rounded-full border border-zinc-300/20 shadow-lg shadow-white/5 hover:shadow-white/10 transition-all duration-300"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:block sm:absolute sm:bottom-16 sm:right-6 md:right-10 lg:right-16 z-10 w-56 rounded-xl border border-zinc-800 bg-zinc-950/90 px-4 py-3.5"
      >
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-dashed border-zinc-800">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-400">
            Status
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
        </div>

        <dl className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <div className="flex items-baseline justify-between gap-3">
            <dt className="text-zinc-400">Role</dt>
            <dd className="text-zinc-200 text-right">Cybersecurity Student</dd>
          </div>
          <div className="flex items-baseline justify-between gap-3">
            <dt className="text-zinc-400">Focus</dt>
            <dd className="text-zinc-200 text-right">Security &amp; Full-Stack</dd>
          </div>
          <div className="flex items-baseline justify-between gap-3">
            <dt className="text-zinc-400">Location</dt>
            <dd className="text-zinc-200 text-right">Indonesia</dd>
          </div>
        </dl>

        <div className="mt-2.5 pt-2.5 border-t border-dashed border-zinc-800 flex items-center gap-1.5">
          <span className="text-emerald-400 text-[10px] leading-none">●</span>
          <span className="font-mono text-[11px] text-zinc-300">Available for Internships</span>
        </div>
      </motion.div>

      <div className="absolute top-16 sm:top-20 left-6 sm:left-10 w-4 h-4 border-t border-l border-zinc-800 pointer-events-none" />
      <div className="absolute top-16 sm:top-20 right-6 sm:right-10 w-4 h-4 border-t border-r border-zinc-800 pointer-events-none" />
      <div className="absolute bottom-6 sm:bottom-20 left-6 sm:left-10 w-4 h-4 border-b border-l border-zinc-800 pointer-events-none" />
    </section>
  );
}