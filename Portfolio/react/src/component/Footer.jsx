import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

const portfolioLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/pujadhital-kritim",
    icon: <Github className="w-4 h-4" />,
    bg: "bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-white dark:hover:text-white text-slate-700 dark:text-slate-300",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/puja-dhital-768695280/",
    icon: <Linkedin className="w-4 h-4" />,
    bg: "bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-700 hover:text-white dark:hover:text-white text-slate-700 dark:text-slate-300",
  },
  {
    label: "Email",
    href: "mailto:pujadhital77@email.com",
    icon: <Mail className="w-4 h-4" />,
    bg: "bg-slate-100 dark:bg-slate-800 hover:bg-green-600 dark:hover:bg-green-700 hover:text-white dark:hover:text-white text-slate-700 dark:text-slate-300",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-600 via-emerald-500 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-green-400/5 dark:bg-green-500/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <a href="#home" className="group inline-flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 shadow-md shadow-green-500/30 text-white text-xs font-black overflow-hidden">
                PD
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
              </span>
              <span className="text-[1.2rem] font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 dark:from-green-400 dark:via-emerald-300 dark:to-green-200 bg-clip-text text-transparent">
                  Puja
                </span>
                <span className="text-slate-800 dark:text-slate-100 ml-1">
                  Dhital
                </span>
              </span>
            </a>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Crafting scalable and reliable digital products with a focus on
              clean code and delightful user experiences.
            </p>

            <div className="flex gap-2 pt-1">
              {socials.map(({ label, href, icon, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${bg}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer site navigation">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-green-500 transition-all duration-200 rounded-full" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Portfolio */}
          <nav aria-label="Portfolio links">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-5">
              Portfolio
            </h3>
            <ul className="space-y-3">
              {portfolioLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-green-500 transition-all duration-200 rounded-full" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-5">
              Availability
            </h3>

            <div className="rounded-xl p-5 bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                  Open to opportunities
                </span>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Available for freelance projects, full-time roles, and exciting collaborations.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold
                           bg-green-600 hover:bg-green-700 text-white
                           shadow-sm shadow-green-600/20 hover:shadow-green-600/30
                           hover:-translate-y-0.5 transition-all duration-200"
              >
                Get In Touch
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-slate-400 dark:text-slate-500">
          <p>
            © {year}{" "}
            <span className="font-semibold text-slate-600 dark:text-slate-300">
              Puja Dhital
            </span>
            . All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Designed &amp; built with
            <span className="text-red-400 mx-0.5">♥</span>
            using React &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}