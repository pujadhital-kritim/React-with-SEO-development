import { motion } from "framer-motion";

const education = [
  {
    year: "2023 – Present",
    title: "Computer Science",
    institute: "Bachelor's Degree",
    description:
      "Currently studing core computer science concepts including programming, data structures, and web technologies.",
  },
  {
    year: "2023 – Present",
    title: "Frontend Development",
    institute: "Self / Online Learning",
    description:
      "Focused on building modern, responsive user interfaces using React, Tailwind CSS, and best UI/UX practices.",
  },
];

const skills = [
  { name: "React", level: 70 },
  { name: "JavaScript", level: 60 },
  { name: "HTML & CSS", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Python", level: 30 },
];

export default function Skills() {
  return (
    <section className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <div
        className="max-w-7xl mt-8 mx-auto px-6 py-20
                   bg-slate-50 dark:bg-slate-800/40
                   rounded-3xl shadow-sm"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-20
                     text-slate-900 dark:text-slate-100"
        >
          Skills & <span className="text-green-500">Education</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

       
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900
                       border border-slate-200 dark:border-slate-700
                       rounded-2xl p-8
                       shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-10
                           text-slate-900 dark:text-slate-100">
              My Education
            </h3>

            <div className="relative border-l-2 border-green-500/40 pl-6 space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
             
                  <span
                    className="absolute -left-[11px] top-2 w-4 h-4
                               bg-green-500 rounded-full
                               shadow-md group-hover:scale-110 transition"
                  />

                  <p className="text-lg  ml-3 text-green-600 dark:text-green-400 mb-2 tracking-wide">
                    {item.year}
                  </p>

                  <h4 className="text-lg font-semibold
                                 text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    {item.institute}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900
                       border border-slate-200 dark:border-slate-700
                       rounded-2xl p-8
                       shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-10
                           text-slate-900 dark:text-slate-100">
              My Skills
            </h3>

            <div className="space-y-7">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span
                      className="text-sm font-medium
                                 text-slate-700 dark:text-slate-300"
                    >
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div
                    className="w-full h-2.5 rounded-full
                               bg-slate-200 dark:bg-slate-700
                               overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full rounded-full
                                 bg-green-500
                                 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
