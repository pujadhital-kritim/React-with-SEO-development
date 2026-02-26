import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/Project";
import ProjectCard from "../component/ProjectCard";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.5, ease: "easeOut" } },
  exit:    { opacity: 0, y: -12, scale: 0.97, transition: { duration: 0.3 } },
};

function getTags(projects) {
  const all = projects.flatMap((p) => p.tags ?? p.tech ?? []);
  return ["All", ...Array.from(new Set(all))];
}

export default function Project() {
  const tags          = getTags(projects);
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) =>
          (p.tags ?? p.tech ?? []).includes(active)
        );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="absolute top-0 right-1/4 w-[480px] h-[480px] rounded-full bg-green-400/6 dark:bg-green-500/5 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[380px] h-[380px] rounded-full bg-emerald-400/5 dark:bg-emerald-500/4 blur-[90px] pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-36">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-green-500" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-green-600 dark:text-green-400">
              Portfolio
            </span>
            <div className="w-8 h-px bg-green-500" />
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5"
          >
            Featured{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 bg-clip-text text-transparent">
                Projects
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-green-500 to-emerald-400" />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            A selection of projects where I focus on clean UI, reusable
            components, and performant frontend development using modern
            technologies.
          </motion.p>

        
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-8 mt-10"
          >
            {[
              { num: `${projects.length}+`, label: "Projects Built" },
              { num: "100%",                label: "Open Source"     },
              { num: "5+",                  label: "Tech Stacks"     },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">{num}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-500 uppercase tracking-widest mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* filters tab */}
        {tags.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950
                  ${active === tag
                    ? "bg-green-600 text-white border-green-600 shadow-md shadow-green-600/25"
                    : "bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/60 hover:border-green-300/60 dark:hover:border-green-700/50 hover:text-green-700 dark:hover:text-green-400"
                  }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        )}

        {/* ── Project count ── */}
        <motion.p
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8"
        >
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          {active !== "All" ? ` tagged "${active}"` : ""}
        </motion.p>

        {/* ── Project grid ── */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              No projects found for <span className="text-green-600 dark:text-green-400">"{active}"</span>
            </p>
            <button
              onClick={() => setActive("All")}
              className="mt-4 text-sm text-green-600 dark:text-green-400 font-semibold hover:underline"
            >
              Clear filter →
            </button>
          </motion.div>
        )}

        {/* ── CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6
                     px-8 py-7 rounded-2xl
                     bg-gradient-to-r from-slate-50 to-green-50/60
                     dark:from-slate-900/80 dark:to-green-950/40
                     border border-slate-200/70 dark:border-slate-800/80"
        >
          <div>
            <p className="text-base font-bold text-slate-900 dark:text-white">
              Want to see more of my work?
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Check out my GitHub for additional projects and open-source contributions.
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                       bg-slate-900 dark:bg-white text-white dark:text-slate-900
                       hover:bg-slate-700 dark:hover:bg-slate-100
                       shadow-md hover:shadow-lg hover:-translate-y-0.5
                       transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}