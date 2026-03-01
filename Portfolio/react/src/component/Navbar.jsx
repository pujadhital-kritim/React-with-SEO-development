import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200
    ${isActive
      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/60"
      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/60"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border
    ${isActive
      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/50 border-green-200/60 dark:border-green-800/50"
      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 border-transparent"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-16">

        {/* Logo */}
        <Link to="#" className="group flex items-center gap-2.5 select-none">
          <span className="text-[1.35rem] font-extrabold tracking-tight leading-none">
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 bg-clip-text text-transparent dark:from-green-400 dark:via-emerald-300 dark:to-green-200 transition-all duration-300">
              Puja
            </span>
            <span className="text-slate-800 dark:text-slate-100 ml-1.5">
              Dhital
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        {/* <div className="hidden md:flex items-center gap-1">
          <NavLink to="#" end className={linkClass}>Home</NavLink>
          <NavLink to="#about" className={linkClass}>About</NavLink>
          <NavLink to="#skills" className={linkClass}>Skills</NavLink>
          <NavLink to="#projects" className={linkClass}>Projects</NavLink>
        </div> */}


        {/* Desktop Links */}
<div className="hidden md:flex items-center gap-1">
  <a href="#home" className="relative px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200">
    Home
  </a>

  <a href="#about" className="relative px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200">
    About
  </a>

  <a href="#skills" className="relative px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200">
    Skills
  </a>

  <a href="#projects" className="relative px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200">
    Projects
  </a>
</div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <a
  href="#contact"
  className="relative inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
>
  Get In Touch
</a>
          <span className="w-px h-5 bg-slate-200 dark:bg-slate-700" />
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow-sm transition-all duration-200 hover:border-green-400/60 hover:text-green-600 dark:hover:text-green-400 active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" className={`transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[5px]" : ""}`} style={{ transformBox: "fill-box" }} />
              <line x1="3" y1="12" x2="21" y2="12" className={`transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} style={{ transformBox: "fill-box" }} />
              <line x1="3" y1="17" x2="21" y2="17" className={`transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} style={{ transformBox: "fill-box" }} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-5 py-4 space-y-1">
            <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200">
  Home
</a>

<a href="#about" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200">
  About
</a>

<a href="#skills" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200">
  Skills
</a>

<a href="#projects" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200">
  Projects
</a>
            <a
              to="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 shadow-md hover:from-green-500 hover:to-emerald-500 active:scale-[0.98] transition-all duration-200"
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}