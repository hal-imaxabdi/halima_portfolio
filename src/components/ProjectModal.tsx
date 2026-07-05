import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Project } from "../types";
import { useTheme } from "../context/ThemeContext";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] } },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 10,
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { theme } = useTheme();
  const panelBg = theme === "light" ? "#ffffff" : "#09090b";
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    lastFocusedRef.current = document.activeElement as HTMLElement;
    closeBtnRef.current?.focus();
    document.body.setAttribute("data-modal-open", "true");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      document.body.removeAttribute("data-modal-open");
      lastFocusedRef.current?.focus?.();
    };
  }, [project, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:py-10"
          style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)" }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            key="project-modal-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl max-h-[85dvh] overflow-y-auto no-scrollbar rounded-2xl bg-zinc-950 border border-zinc-800 shadow-[0_0_60px_rgba(0,0,0,0.5)]"
          >
            <div className="relative h-40 sm:h-52 w-full overflow-hidden rounded-t-2xl bg-zinc-900 shrink-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${panelBg} 0%, ${panelBg}99 55%, ${panelBg}0d 100%)`,
                }}
              />
              <span className="absolute bottom-3 left-4 sm:left-6 font-mono text-[10px] sm:text-xs tracking-widest uppercase text-zinc-300">
                {project.number}
              </span>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950/90 border border-zinc-700/50 text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 backdrop-blur-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-5 sm:px-8 py-6 sm:py-8">
              <h3 id="project-modal-title" className="sr-only">
                {project.title}
              </h3>

              {project.overview && (
                <section className="mb-6 sm:mb-8">
                  <h4 className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-zinc-400 mb-3">
                    Project Overview
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <p className="font-sans text-xs sm:text-sm font-semibold text-zinc-300 mb-1">
                        Problem
                      </p>
                      <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
                        {project.overview.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs sm:text-sm font-semibold text-zinc-300 mb-1">
                        My Role
                      </p>
                      <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
                        {project.overview.role}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs sm:text-sm font-semibold text-zinc-300 mb-1">
                        Key Decision
                      </p>
                      <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
                        {project.overview.decision}
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {project.tech?.length > 0 && (
                <section>
                  <h4 className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-zinc-400 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}