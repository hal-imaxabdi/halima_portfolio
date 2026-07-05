import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { PROJECTS } from "../data";
import { ArrowUpRight, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import ProjectModal from "./ProjectModal";

interface ProjectsSectionProps {
  currentProjectIndex: number;
  onNextProject: () => void;
  onPrevProject: () => void;
  onProjectSelect?: (index: number) => void;
}

const pageVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-30%" : "30%",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  }),
};

const textContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.25 },
  },
};

const textLine = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectsSection({
  currentProjectIndex,
  onNextProject,
  onPrevProject,
  onProjectSelect,
}: ProjectsSectionProps) {
  const { theme } = useTheme();
  const fadeColor = theme === "light" ? "#ffffff" : "#080808";
  const total = PROJECTS.length;
  const safeIndex = Math.min(Math.max(currentProjectIndex, 0), total - 1);
  const project = PROJECTS[safeIndex];

  const [direction, setDirection] = useState(1);
  const prevIndexRef = useRef(safeIndex);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setDirection(safeIndex >= prevIndexRef.current ? 1 : -1);
    prevIndexRef.current = safeIndex;
  }, [safeIndex]);

  const handleNext = () => { setDirection(1); onNextProject(); };
  const handlePrev = () => { setDirection(-1); onPrevProject(); };

  if (!project) return null;

  return (
    <section
      id="section-projects"
      className="relative w-full h-full bg-projects-dark overflow-hidden flex flex-col"
    >
      <div className="shrink-0 flex items-center justify-between px-5 sm:px-10 pt-14 sm:pt-16 pb-3 sm:pb-4 z-20">
        <h2 className="font-mono text-xs sm:text-sm tracking-widest uppercase text-zinc-400">
          Featured Projects
        </h2>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx >= safeIndex ? 1 : -1);
                onProjectSelect?.(idx);
              }}
              aria-label={`Go to project ${idx + 1}`}
              className="p-1 -m-1"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  idx === safeIndex
                    ? "w-5 h-1 sm:w-6 sm:h-1.5 bg-white"
                    : "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-zinc-700 hover:bg-zinc-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={safeIndex}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              aria-label={`View details for ${project.title}`}
              className="group h-44 sm:h-56 md:h-full md:w-[55%] relative overflow-hidden bg-zinc-950 shrink-0 cursor-pointer text-left"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                draggable={false}
              />
              <div className="absolute inset-0 hidden md:block"
                style={{ background: `linear-gradient(to right, transparent 60%, ${fadeColor} 100%)` }}
              />
              <div className="absolute inset-0 md:hidden"
                style={{ background: `linear-gradient(to bottom, transparent 60%, ${fadeColor} 100%)` }}
              />
              <span
                aria-hidden
                className="absolute bottom-2 left-3 sm:bottom-4 sm:left-5 font-display font-black text-[5rem] sm:text-[7rem] leading-none text-white/[0.06] select-none pointer-events-none"
              >
                {String(safeIndex + 1).padStart(2, "0")}
              </span>

              <div
                aria-hidden
                className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center"
              >
                <span
                  className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-zinc-950/90 border border-zinc-700/50 text-white font-mono text-xs sm:text-sm tracking-widest uppercase opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  View Details
                </span>
              </div>
            </button>

            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="show"
              className="md:w-[45%] flex flex-col justify-center px-5 sm:px-8 md:px-10 lg:px-14 py-4 md:py-0 overflow-y-auto"
            >
              <motion.span variants={textLine} className="font-mono text-xs sm:text-sm text-zinc-400 mb-2 sm:mb-3">
                {String(safeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </motion.span>

              <motion.h3
                variants={textLine}
                className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3 sm:mb-4 md:mb-5"
              >
                {project.title}
              </motion.h3>

              <motion.p
                variants={textLine}
                className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed antialiased mb-6 sm:mb-8 max-w-sm"
              >
                {project.description}
              </motion.p>

              {project.githubUrl && (
                <motion.a
                  variants={textLine}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black bg-white hover:bg-zinc-100 border border-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-mono text-sm sm:text-base font-semibold tracking-widest uppercase transition-all duration-300 w-fit group"
                >
                  View on GitHub
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="shrink-0 flex items-center justify-between px-5 sm:px-10 py-3 sm:py-4 z-20 border-t border-zinc-900/60">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous project"
          className="flex items-center gap-1.5 sm:gap-2 text-zinc-300 hover:text-white transition-colors font-mono text-xs sm:text-sm uppercase tracking-widest group"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-0.5 transition-transform" />
          Prev
        </button>

        <span className="font-mono text-xs sm:text-sm text-zinc-400 tracking-widest">
          {String(safeIndex + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next project"
          className="flex items-center gap-1.5 sm:gap-2 text-zinc-300 hover:text-white transition-colors font-mono text-xs sm:text-sm uppercase tracking-widest group"
        >
          Next
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <ProjectModal
        project={isModalOpen ? project : null}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
