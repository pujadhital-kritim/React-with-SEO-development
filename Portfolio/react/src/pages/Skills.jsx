import { motion } from "framer-motion";

const education = [
  {
    year: "2023 – Present",
    title: "Computer Science",
    institute: "Bachelor's Degree",
    badge: "Academic",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2M12 20l-4-2.5" />
      </svg>
    ),
    description:
      "Studying core computer science concepts including programming, data structures, algorithms, and modern web technologies.",
  },
  {
    year: "2023 – Present",
    title: "Frontend Development",
    institute: "Self-Taught / Online Learning",
    badge: "Self-Taught",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description:
      "Building modern, responsive user interfaces using React, Tailwind CSS, and best-in-class UI/UX practices through structured self-study.",
  },
];

const skills = [
  { name: "HTML & CSS",    level: 85, color: "from-orange-500 to-amber-400"  },
  { name: "Tailwind CSS",  level: 80, color: "from-sky-500 to-cyan-400"       },
  { name: "React",         level: 70, color: "from-green-500 to-emerald-400"  },
  { name: "Java",    level: 60, color: "from-yellow-500 to-amber-400"   },
  { name: "Python",        level: 30, color: "from-blue-500 to-indigo-400"    },
];

const techIcons = [
  { label: "React",       bg: "bg-sky-50 dark:bg-sky-900/30",     text: "text-sky-600 dark:text-sky-400",     border: "border-sky-200/60 dark:border-sky-700/40"     },
  { label: "Java",  bg: "bg-blue-50 dark:bg-blue-900/30",   text: "text-blue-600 dark:text-blue-400",   border: "border-blue-200/60 dark:border-blue-700/40"   },
  { label: "PHP",     bg: "bg-slate-100 dark:bg-slate-800/60",text: "text-slate-700 dark:text-slate-300", border: "border-slate-200/60 dark:border-slate-700/40" },
  { label: "Tailwind",    bg: "bg-teal-50 dark:bg-teal-900/30",   text: "text-teal-600 dark:text-teal-400",   border: "border-teal-200/60 dark:border-teal-700/40"   },
  { label: "Git",         bg: "bg-orange-50 dark:bg-orange-900/30",text:"text-orange-600 dark:text-orange-400",border:"border-orange-200/60 dark:border-orange-700/40"},
  { label: "Python",       bg: "bg-purple-50 dark:bg-purple-900/30",text:"text-purple-600 dark:text-purple-400",border:"border-purple-200/60 dark:border-purple-700/40"},
];

// Animation  
const fadeUp   = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const fadeLeft = { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const fadeRight= { hidden: { opacity: 0, x: 36  }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-green-400/6 dark:bg-green-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-emerald-400/6 dark:bg-emerald-500/5 blur-[90px] pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-36">

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-green-500" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-green-600 dark:text-green-400">
              Expertise
            </span>
            <div className="w-8 h-px bg-green-500" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Skills &{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 bg-clip-text text-transparent">
                Education
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-green-500 to-emerald-400" />
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            A snapshot of my technical stack and learning journey as a self-driven frontend developer.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* education card */}
          <motion.div
            variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group relative rounded-2xl overflow-hidden
                       bg-slate-50/80 dark:bg-slate-900/80
                       border border-slate-200/80 dark:border-slate-800
                       shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/40
                       hover:border-green-200/60 dark:hover:border-green-800/50
                       transition-all duration-300 p-8"
          >
           
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/3 group-hover:to-transparent dark:group-hover:from-green-500/4 transition-all duration-500 pointer-events-none rounded-2xl" />

            <div className="relative">
             
              <div className="flex items-center gap-3 mb-10">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 border border-green-200/60 dark:border-green-700/40">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  My Education
                </h3>
              </div>

             
              <div className="relative">
               
                <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-green-500 via-green-400/60 to-transparent rounded-full" />

                <motion.div
                  variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="space-y-10 pl-10"
                >
                  {education.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="relative group/item"
                    >
                     {/* Timeline dot */}
                      <div className="absolute -left-10 top-1 flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white dark:bg-slate-900 border-2 border-green-500 shadow-md shadow-green-500/20 text-green-600 dark:text-green-400 group-hover/item:scale-110 transition-transform duration-200">
                        {item.icon}
                      </div>

                      {/* Year + badge */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold text-green-600 dark:text-green-400 tracking-wide">
                          {item.year}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 border border-green-200/60 dark:border-green-700/40">
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                        {item.institute}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Tech chips row */}
              <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                  Tools & Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {techIcons.map(({ label, bg, text, border }) => (
                    <span
                      key={label}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 hover:-translate-y-0.5 cursor-default ${bg} ${text} ${border}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
{/* skills card */}
          <motion.div
            variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group relative rounded-2xl overflow-hidden
                       bg-slate-50/80 dark:bg-slate-900/80
                       border border-slate-200/80 dark:border-slate-800
                       shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/40
                       hover:border-green-200/60 dark:hover:border-green-800/50
                       transition-all duration-300 p-8"
          >
           
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/3 group-hover:to-transparent dark:group-hover:from-green-500/4 transition-all duration-500 pointer-events-none rounded-2xl" />

            <div className="relative">
           
              <div className="flex items-center gap-3 mb-10">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 border border-green-200/60 dark:border-green-700/40">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  My Skills
                </h3>
              </div>

              {/* Skill bars */}
              <motion.div
                variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="space-y-6"
              >
                {skills.map((skill, i) => (
                  <motion.div key={i} variants={fadeUp} className="group/skill">
                    <div className="flex justify-between items-end mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>

                   
                    <div className="relative w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700/80 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: "easeOut", delay: i * 0.08 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                      >
                       
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite] bg-[length:200%_100%]" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

          
              <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                  Proficiency Scale
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  {[
                    { label: "Beginner",     range: "0–40%",  color: "bg-blue-400"   },
                    { label: "Intermediate", range: "40–70%", color: "bg-yellow-400" },
                    { label: "Proficient",   range: "70%+",   color: "bg-green-500"  },
                  ].map(({ label, range, color }) => (
                    <div key={label} className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {label} <span className="text-slate-400 dark:text-slate-600">({range})</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 flex items-start gap-3 px-4 py-3.5 rounded-xl
                           bg-green-50 dark:bg-green-950/40
                           border border-green-200/60 dark:border-green-800/50"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 text-green-500">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-0.5">Currently Leveling Up</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Diving deeper into Python, advanced React patterns.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shimmer keyframe */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
      `}</style>
    </section>
  );
}