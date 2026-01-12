import { motion } from "framer-motion";

export default function Homepage() {
  return (
    <header className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-20">

        {/* Text Content */}
        <motion.section
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Building Scalable and Reliable Digital Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 dark:text-gray-300 mb-6 text-lg md:text-xl"
          >
            I am a passionate frontend developer focused on creating
            user-friendly, performant, and reliable web experiences. My goal
            is to turn ideas into meaningful digital products.
          </motion.p>

          <motion.nav
            aria-label="Hero section links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="#projects"
              className="bg-green-500 text-white px-6 py-3 rounded-md
                         hover:bg-green-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-green-500 text-green-600
                         px-6 py-3 rounded-md
                         hover:bg-green-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </motion.nav>
        </motion.section>

        {/* Image / Illustration */}
        <motion.section
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.img
            src="/developerlaptop.jpg"
            alt="Developer coding on a laptop"
            className="w-full max-w-lg rounded-lg shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.section>

      </div>
    </header>
  );
}
