import React from "react";
import { motion } from "framer-motion";

//  Animation 
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};


const stats = [
  { num: "5+",  label: "Years of Experience" },
  { num: "10+", label: "Projects Delivered"  },
  { num: "98%", label: "Client Satisfaction" },
];

const skills = [
  "React", "Tailwind CSS",
   "Java", "Python", ,
];

const cards = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "What I Build",
    items: [
      "Responsive, pixel-perfect UIs",
      "Scalable React applications",
      "Accessible component systems",
      "High-performance web experiences",
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Currently Exploring",
    items: [
      "Advanced React",
      "Python",

      
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Core Values",
    items: [
      "Clean, maintainable code first",
      "User-centered design thinking",
      "Transparency & collaboration",
      "Continuous learning & growth",
    ],
    wide: true,
  },
];


export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500"
      aria-labelledby="about-heading"
    >
     
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] rounded-full bg-green-400/8 dark:bg-green-500/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-green-300/8 dark:bg-green-600/5 blur-[90px] pointer-events-none" />

      {/* Subtle grid texture  */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-36">

       
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="flex items-center gap-3 mb-20"
        >
          <div className="w-8 h-px bg-green-500" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-green-600 dark:text-green-400">
            About Me
          </span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
        </motion.div>

        {/* Main  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

         {/* photo */}
          <motion.div
            variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative"
          >
            
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-green-500/40 dark:border-green-400/30 rounded-tl-xl pointer-events-none z-10" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-green-500/40 dark:border-green-400/30 rounded-br-xl pointer-events-none z-10" />

        
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700/50 shadow-2xl shadow-slate-300/40 dark:shadow-black/60">
              <img
                src="/temp.jpg"
                alt="Puja Dhital – Frontend Developer"
                loading="lazy"
                className="w-full h-[560px] object-cover object-center"
              />

          
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent pointer-events-none" />

         
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border border-white/20 dark:border-slate-700/40 rounded-xl px-4 py-3 shadow-xl">
                  <div>
                    <p className="text-sm font-bold text-white">Puja Dhital</p>
                    <p className="text-xs text-slate-300 mt-0.5">Frontend Developer</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-green-500/20 border border-green-400/30 text-green-300 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

        
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="absolute -right-5 top-8 flex flex-col gap-3 hidden lg:flex"
            >
              {stats.map(({ num, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 pl-3 pr-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/60 shadow-xl shadow-slate-200/50 dark:shadow-black/40 min-w-[168px]"
                >
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-green-500 to-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white leading-none tracking-tight">{num}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

       
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/50 hover:border-green-400/50 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

      
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-8 lg:pt-2"
          >
            {/* Headline */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h2
                id="about-heading"
                className="text-4xl sm:text-[2.75rem] lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
              >
                Crafting Digital{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">
                    Experiences
                  </span>
                  {/* Underline accent */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-green-500 to-green-300 rounded-full" />
                </span>
                {" "}That Matter
              </h2>

              <div className="flex items-center gap-3">
                <div className="w-10 h-[3px] rounded-full bg-gradient-to-r from-green-600 to-green-400" />
                <div className="w-4 h-[3px] rounded-full bg-green-300/50 dark:bg-green-700/50" />
              </div>
            </motion.div>

           
            <motion.div variants={fadeUp} className="space-y-4">
              <p className="text-[1.05rem] text-slate-600 dark:text-slate-400 leading-[1.85]">
                I'm a passionate frontend developer focused on building{" "}
                <span className="font-semibold text-slate-800 dark:text-slate-200">responsive, accessible,</span>{" "}
                and user-centric interfaces. I enjoy transforming complex ideas into elegant, maintainable,
                and high-performance web experiences.
              </p>
              <p className="text-[1.05rem] text-slate-600 dark:text-slate-400 leading-[1.85]">
                My philosophy revolves around{" "}
                <span className="font-semibold text-slate-800 dark:text-slate-200">clean, reusable components</span>,
                intuitive UX, and continuous improvement — because great frontend work comes from clarity,
                collaboration, and thoughtful design decisions.
              </p>
            </motion.div>

       
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className={`
                    group relative rounded-2xl p-5 overflow-hidden
                    bg-slate-50/80 dark:bg-slate-900/80
                    border border-slate-200/70 dark:border-slate-800/80
                    hover:border-green-300/60 dark:hover:border-green-700/50
                    shadow-sm transition-all duration-300
                    ${card.wide ? "sm:col-span-2" : ""}
                  `}
                >
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/4 group-hover:to-transparent dark:group-hover:from-green-500/5 transition-all duration-500 pointer-events-none rounded-2xl" />

             
                  <div className="relative flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 border border-green-200/60 dark:border-green-700/40 flex-shrink-0">
                      {card.icon}
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-wide">
                      {card.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className="relative space-y-2.5">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[0.83rem] text-slate-600 dark:text-slate-400 leading-snug">
                        <span className="mt-[5px] w-[6px] h-[6px] rounded-full bg-gradient-to-br from-green-500 to-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex gap-6 pt-2 border-t border-slate-200 dark:border-slate-800 lg:hidden"
            >
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">{num}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-500 uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-lg shadow-green-600/25 hover:shadow-green-600/40 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              >
                View My Projects
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white dark:border-green-500 dark:text-green-400 dark:hover:bg-green-600 dark:hover:text-white hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}