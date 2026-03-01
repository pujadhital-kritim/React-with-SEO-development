import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Homepage() {
  return (
    <header id="home" className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-white via-green-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-green-950/40 text-slate-900 dark:text-slate-100">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(34,197,94,0.10),transparent_70%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(34,197,94,0.07),transparent_70%)]" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-600 via-green-400 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32 lg:py-40 w-full">
        <div className="grid md:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-green-100/80 dark:bg-green-900/40 text-green-700 dark:text-green-400 border border-green-200/70 dark:border-green-700/40">
                <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
                Frontend Engineer
              </span>
            </motion.div>

            {/* Accent divider */}
            <motion.div
              variants={itemVariants}
              className="w-10 h-[3px] rounded-full bg-gradient-to-r from-green-600 to-green-400"
            />

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] bg-gradient-to-br from-slate-900 via-slate-800 to-green-800 dark:from-white dark:via-slate-200 dark:to-green-300 bg-clip-text text-transparent"
            >
              Building Scalable,{" "}
              <br className="hidden sm:inline" />
              Performant Digital{" "}
              <br className="hidden sm:inline" />
              Experiences
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-light text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg"
            >
              Passionate frontend developer crafting clean, accessible, and
              high-performance user interfaces that help businesses and ideas
              thrive on the web.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-xl shadow-lg shadow-green-600/30 hover:shadow-green-600/50 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Explore My Work
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white dark:border-green-500 dark:text-green-400 dark:hover:bg-green-600 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-4 border-t border-slate-200 dark:border-slate-800"
            >
              {[
                { num: "1+", label: "Years Exp." },
                { num: "5+", label: "Projects" },
                { num: "98%", label: "Satisfaction" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">{num}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center md:justify-end"
          >
            {/* Decorative blur blob behind image */}
            <div className="absolute -inset-4 bg-green-400/10 dark:bg-green-500/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-lg xl:max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-green-900/10 dark:shadow-green-900/30 ring-1 ring-green-200/50 dark:ring-green-800/30">

              <motion.img
                src="/developerlaptop.gif"
                alt="Frontend developer working on modern web application"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Floating availability tag */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold backdrop-blur-md bg-white/90 dark:bg-slate-900/85 text-slate-800 dark:text-slate-200 border border-white/50 dark:border-slate-700/50 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to opportunities
              </div>
            </div>

            {/* Tech stack card */}
            <div className="absolute -bottom-5 -left-4 md:-left-10 flex items-center gap-2 px-4 py-2.5 rounded-xl backdrop-blur-md bg-white/90 dark:bg-slate-900/85 border border-slate-200/70 dark:border-slate-700/50 shadow-xl">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mr-1">Stack</span>
              {["React", "Java", "Python","PHP" ].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-semibold rounded-full bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-400 border border-green-200/60 dark:border-green-700/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}