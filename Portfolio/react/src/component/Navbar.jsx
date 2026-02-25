import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navClass = ({ isActive }) =>
  isActive
    ? "text-primary"
    : "text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main">
        <Link to="/" className="flex items-center gap-2">
         
          <span className="text-lg font-semibold tracking-tight">Puja Dhital</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/skills" className={navClass}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={navClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-3 text-base font-medium">
              <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/about" className={navClass} onClick={() => setOpen(false)}>
                About
              </NavLink>
              <NavLink to="/skills" className={navClass} onClick={() => setOpen(false)}>
                Skills
              </NavLink>
              <NavLink to="/projects" className={navClass} onClick={() => setOpen(false)}>
                Projects
              </NavLink>
              <NavLink to="/contact" className={navClass} onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}