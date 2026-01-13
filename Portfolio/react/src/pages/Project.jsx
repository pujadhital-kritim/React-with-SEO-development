import { motion } from "framer-motion";

import { projects } from "../data/Project";
import ProjectCard from "../component/ProjectCard";

export default function Project() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-3
                         text-slate-900 dark:text-slate-100">
            Projects
          </h1>

          <p className="text-slate-600 dark:text-slate-400
                        max-w-2xl mx-auto">
            A selection of projects where I focus on clean UI, reusable
            components, and performant frontend development using modern
            technologies.
          </p>
        </motion.div>

   
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
