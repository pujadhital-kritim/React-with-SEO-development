import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-sm">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
        aria-label="Main Navigation"
      >

        <Link
          to="/"
          className="text-2xl dark:text-white font-bold text-primary tracking-tight"
        >
          Puja Dhital
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </li>
          <ThemeToggle />
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-800 dark:text-slate-100"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:text-white dark:bg-slate-900 border-t">
          <ul className="flex flex-col px-6 py-4 gap-4 font-medium">
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/projects" onClick={() => setOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
            <ThemeToggle />
          </ul>
        </div>
      )}
    </header>
  );
}

const navClass = ({ isActive }) =>
    isActive
      ? 'text-green-500 font-medium transition'
      : 'text-gray-700 dark:text-white hover:text-green-500 font-medium transition';