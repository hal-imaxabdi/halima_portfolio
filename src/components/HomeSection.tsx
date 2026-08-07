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

      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center md:items-start text-center md:text-left gap-4 sm:gap-5 flex-1"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight select-none text-white font-bubbly">
            <span className="text-zinc-400">Hi, I'm</span> Halima
          </h1>

          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400">
            Cybersecurity &amp; Risk Assessment
          </p>

          <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl">
            I'm an Informatics student specializing in Cybersecurity, focused on SOC
            operations, risk assessment, and web application security. I like understanding
            how systems break so I can help defend them, backed by hands-on labs like a SOC
            homelab and a phishing detection tool I built from scratch.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 sm:pt-4">
            <button
              onClick={onViewProjects}
              className="group inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black hover:bg-zinc-100 font-mono text-sm font-semibold tracking-widest uppercase rounded-full border border-zinc-300/20 shadow-lg shadow-white/5 hover:shadow-white/10 transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl scale-110" />
          <img
            src={heroImg}
            alt="Halima Abdirizak Mohamed"
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border border-zinc-800 shadow-2xl shadow-black/40"
          />
        </motion.div>
      </div>

      <div className="absolute top-16 sm:top-20 left-6 sm:left-10 w-4 h-4 border-t border-l border-zinc-800 pointer-events-none" />
      <div className="absolute top-16 sm:top-20 right-6 sm:right-10 w-4 h-4 border-t border-r border-zinc-800 pointer-events-none" />
      <div className="absolute bottom-6 sm:bottom-20 left-6 sm:left-10 w-4 h-4 border-b border-l border-zinc-800 pointer-events-none" />
    </section>
  );
}
