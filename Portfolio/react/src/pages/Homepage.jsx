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
    <header className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      {/* Optional subtle background pattern / glow (remove if too much) */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.12),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="grid md:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 md:space-y-10"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-wide uppercase bg-green-100/70 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-full border border-green-200/60 dark:border-green-800/40">
                Frontend Engineer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent"
            >
              Building Scalable, Performant<br className="hidden sm:inline" /> Digital Experiences
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              Passionate frontend developer crafting clean, accessible, and high-performance user interfaces that help businesses and ideas thrive on the web.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Explore My Work
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white dark:border-green-500 dark:text-green-400 dark:hover:bg-green-600 dark:hover:text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Visual / Illustration */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-lg xl:max-w-xl aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-green-900/10 dark:shadow-green-900/20 ring-1 ring-slate-200/70 dark:ring-slate-700/50">
              <motion.img
                src="/developerlaptop.gif"
                alt="Frontend developer working on modern web application"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 will-change-transform group-hover:scale-105"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
              />
              {/* Optional subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}