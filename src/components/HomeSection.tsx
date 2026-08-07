import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/images/halima-hero.jpg";

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
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-2"
        >
          <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl scale-110" />
          <img
            src={heroImg}
            alt="Halima Abdirizak Mohamed"
            className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border border-zinc-800 shadow-2xl shadow-black/40"
          />
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight select-none text-white font-bubbly">
          <span className="text-zinc-400">Hi, I'm</span> Halima
        </h1>

        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400">
          Cybersecurity Enthusiast
        </p>

        <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl">
          I'm an Informatics student with a growing interest in Cybersecurity, exploring it
          through TryHackMe labs, CTF challenges, and hands-on projects like a SOC homelab
          and a phishing detection tool I built from scratch. I like understanding how
          systems break so I can help defend them.
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

      <div className="absolute top-16 sm:top-20 left-6 sm:left-10 w-4 h-4 border-t border-l border-zinc-800 pointer-events-none" />
      <div className="absolute top-16 sm:top-20 right-6 sm:right-10 w-4 h-4 border-t border-r border-zinc-800 pointer-events-none" />
      <div className="absolute bottom-6 sm:bottom-20 left-6 sm:left-10 w-4 h-4 border-b border-l border-zinc-800 pointer-events-none" />
    </section>
  );
}
