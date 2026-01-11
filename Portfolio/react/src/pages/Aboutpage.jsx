import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-slate-800 transition-colors duration-300"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* IMAGE */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-black/40">
            <img
              src="/temp.jpg"
              alt="Puja Dhital – Full Stack Software Developer"
              loading="lazy"
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* Glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-green-300/40 to-transparent dark:from-green-400/10 blur-3xl" />
        </motion.div>

        {/* CONTENT */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col justify-center"
        >
          <motion.h2
            variants={fadeUp}
            id="about-heading"
            className="text-4xl font-bold mb-6 text-green-500 dark:text-green-500"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed"
          >
           I’m a passionate frontend developer focused on building responsive, accessible, and user-centric interfaces. I enjoy transforming complex ideas into elegant, maintainable, and high-performance web experiences.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-slate-600 dark:text-slate-300 mb-10 leading-relaxed"
          >
            My philosophy focuses on clean, reusable components, intuitive user experiences, and continuous improvement. I believe strong frontend work comes from clarity, collaboration, and thoughtful design decisions.
          </motion.p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {[
              {
                title: "What I Do",
                items: [
  "Design and build responsive user interfaces",
  "Develop modern React applications",
  "Improve performance, accessibility, and usability",
  "Turn designs into production-ready experiences",
]
              },
              {
                title: "Learning",
                items: [
                  "Advanced React patterns",
                  "Generative AI applications",
                  "Rust for backend systems",
                ],
              },
              {
                title: "What I Value",
                items: [
                  "Clean, maintainable code",
                  "User-first design thinking",
                  "Collaboration & growth",
                  "Meaningful software impact",
                ],
                wide: true,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`
                  rounded-2xl p-6
                  bg-slate-50 dark:bg-slate-900
                  border border-slate-200 dark:border-slate-800
                  shadow-sm hover:shadow-lg
                  ${card.wide ? "sm:col-span-2" : ""}
                `}
              >
                <h3 className="text-green-600 dark:text-green-400 font-semibold mb-3">
                  {card.title}
                </h3>
                <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>
        </motion.article>
      </div>
    </section>
  );
}
