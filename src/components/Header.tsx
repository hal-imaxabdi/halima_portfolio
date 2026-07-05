import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface HeaderProps {
  sections: { id: string; label: string }[];
  currentSectionIndex: number;
  onNavClick: (index: number) => void;
}

export default function Header({ sections, currentSectionIndex, onNavClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (idx: number) => {
    onNavClick(idx);
    setIsMenuOpen(false);
  };

  return (
    <header
      id="site-header"
      className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/60 backdrop-blur-md border-b border-zinc-800/60"
    >
      <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-white shrink-0">
          haml_
        </span>

        <nav id="navbar-links" className="hidden sm:flex items-center gap-1">
          {sections.map((section, idx) => {
            const isActive = idx === currentSectionIndex;
            return (
              <button
                key={section.id}
                id={`nav-link-${section.id}`}
                onClick={() => handleNavClick(idx)}
                className={`relative shrink-0 px-3 py-1.5 font-mono text-xs uppercase tracking-widest cursor-pointer focus:outline-none transition-all duration-300 ${
                  isActive ? "text-white font-semibold" : "text-zinc-300 hover:text-zinc-200"
                }`}
              >
                {section.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-1 right-1 h-px bg-white"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300 cursor-pointer"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden overflow-hidden border-t border-zinc-800/60"
          >
            <div className="flex flex-col px-4 py-2">
              {sections.map((section, idx) => {
                const isActive = idx === currentSectionIndex;
                return (
                  <button
                    key={section.id}
                    id={`nav-link-mobile-${section.id}`}
                    onClick={() => handleNavClick(idx)}
                    className={`text-left py-3 font-mono text-xs uppercase tracking-widest cursor-pointer focus:outline-none transition-colors duration-300 ${
                      isActive ? "text-white font-semibold" : "text-zinc-300 hover:text-zinc-200"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
