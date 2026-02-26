import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Home",     to: "/",         end: true  },
  { label: "About",    to: "/about",    end: false },
  { label: "Skills",   to: "/skills",   end: false },
  { label: "Projects", to: "/projects", end: false },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* close on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          : "bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900"
        }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-16"
        aria-label="Main navigation"
      >

       
        <Link to="/" className="group flex items-center gap-2.5 select-none">
         
           

         <span className="text-[1.35rem] font-extrabold tracking-tight leading-none">
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 bg-clip-text text-transparent
                             dark:from-green-400 dark:via-emerald-300 dark:to-green-200
                             transition-all duration-300 group-hover:from-green-500 group-hover:to-emerald-300">
              Puja
            </span>
            <span className="text-slate-800 dark:text-slate-100 ml-1.5 transition-colors duration-300">
              Dhital
            </span>
          </span>

        </Link>

     
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map(({ label, to, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative px-3.5 py-2 rounded-lg text-[0.875rem] font-medium transition-all duration-200 group/link
                ${isActive
                  ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/60"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {/* animated underline */}
                  <span className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full bg-green-500 transition-all duration-300
                    ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover/link:opacity-60 group-hover/link:scale-x-100"}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* ══════════ RIGHT: CTA + TOGGLE ══════════ */}
        <div className="hidden md:flex items-center gap-3">
          {/* Get In Touch */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold overflow-hidden
               transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0
               focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950
               shadow-md hover:shadow-lg
               ${isActive
                 ? "bg-green-700 text-white shadow-green-600/30 hover:shadow-green-700/30"
                 : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-600/25 hover:shadow-green-500/35"
               }`
            }
          >
            {/* inner shine */}
            <span className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" className="flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Get In Touch</span>
          </NavLink>

          {/* Divider */}
          <span className="w-px h-5 bg-slate-200 dark:bg-slate-700" />

          {/* Theme toggle — after the button */}
          <ThemeToggle />
        </div>

        {/* ══════════ MOBILE: toggle + hamburger ══════════ */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl
                       border border-slate-200 dark:border-slate-700
                       bg-white dark:bg-slate-900
                       text-slate-700 dark:text-slate-200
                       shadow-sm transition-all duration-200
                       hover:border-green-400/60 hover:text-green-600 dark:hover:text-green-400
                       active:scale-95"
          >
            {/* hamburger ↔ close morphing lines */}
            <span className="sr-only">{open ? "Close" : "Open"} menu</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line
                x1="3" y1="7" x2="21" y2="7"
                className={`transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[5px]" : ""}`}
                style={{ transformBox: "fill-box" }}
              />
              <line
                x1="3" y1="12" x2="21" y2="12"
                className={`transition-all duration-200 ${open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`}
                style={{ transformBox: "fill-box" }}
              />
              <line
                x1="3" y1="17" x2="21" y2="17"
                className={`transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[5px]" : ""}`}
                style={{ transformBox: "fill-box" }}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* ══════════ MOBILE MENU ══════════ */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-5 py-4 space-y-1">
            {LINKS.map(({ label, to, end }) => (
              <NavLink
                key={label}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive
                    ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/50 border border-green-200/60 dark:border-green-800/50"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200
                      ${isActive ? "bg-green-500" : "bg-slate-300 dark:bg-slate-600"}`}
                    />
                    {label}
                  </>
                )}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl
                         text-sm font-semibold text-white
                         bg-gradient-to-r from-green-600 to-emerald-600
                         shadow-md shadow-green-600/20
                         hover:from-green-500 hover:to-emerald-500
                         active:scale-[0.98] transition-all duration-200"
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </NavLink>
          </div>
        </div>
      </div>

      {/* Blink keyframe */}
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </header>
  );
}