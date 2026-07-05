import React from "react";
import { FileDown, ChevronRight, Calendar } from "lucide-react";
import { motion } from "motion/react";

const CV_FILE_PATH = "/Halima_Abdirizak_CV.pdf";

export default function AboutSection() {
  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = CV_FILE_PATH;
    link.download = "Halima_Abdirizak_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="section-about"
      className="relative w-full h-dvh bg-cyber-dark overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-24 pt-14 sm:pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl w-full relative z-10 flex flex-col items-center gap-4 sm:gap-6"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-bubbly">
          About <em className="not-italic text-zinc-300">Me</em>
        </h2>

        <div className="flex flex-col gap-2.5 sm:gap-3 max-w-2xl">
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans antialiased">
            I'm an Informatics student specializing in Cybersecurity at President University. My
            interest in technology evolved into a focus on understanding how systems fail, how
            threats are detected, and how secure software is built.
          </p>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans antialiased">
            Beyond coursework, I spend my time working on labs, certifications, and personal
            projects that help me apply security principles in practice.
          </p>
        </div>

        <div className="w-full max-w-xl border-t border-zinc-800/70 pt-4 sm:pt-5 mt-1 sm:mt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="font-sans text-base sm:text-lg font-semibold text-white">President University</p>
            <p className="font-sans text-sm sm:text-base text-zinc-400">BSc Informatics (Cybersecurity)</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-950 text-xs sm:text-sm font-mono text-zinc-300 tracking-wide">
            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
            2024 – 2027 (Expected)
          </span>
        </div>

        <motion.button
          onClick={handleDownloadCV}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-zinc-950 border border-zinc-700/50 hover:border-zinc-500 rounded-xl text-xs sm:text-sm font-mono text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]"
        >
          <FileDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-300 group-hover:text-white transition-colors" />
          <span className="tracking-widest font-semibold uppercase text-xs sm:text-sm">Download CV</span>
          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-300 group-hover:text-white transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  );
}