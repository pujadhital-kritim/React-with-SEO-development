import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group overflow-hidden rounded-xl
                 bg-white dark:bg-slate-800
                 border border-slate-200 dark:border-slate-700
                 shadow-sm hover:shadow-xl transition"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-48 w-full object-cover
                     group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2
                       text-slate-900 dark:text-slate-100">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300
                      text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item) => (
            <li
              key={item}
              className="text-xs px-3 py-1 rounded-full
                         bg-green-50 dark:bg-green-900/30
                         text-green-600 dark:text-green-400"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.live}
            target="_blank"
            aria-label={`Live demo of ${project.title}`}
            className="inline-flex items-center gap-1
                       text-green-600 hover:text-green-700
                       font-medium transition"
          >
            Live <ExternalLink size={16} />
          </a>

          <a
            href={project.github}
            target="_blank"
            aria-label={`Source code of ${project.title}`}
            className="inline-flex items-center gap-1
                       text-slate-600 dark:text-slate-300
                       hover:text-green-600 transition"
          >
            Code <Github size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
