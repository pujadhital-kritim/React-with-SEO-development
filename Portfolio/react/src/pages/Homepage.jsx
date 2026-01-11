import React from "react";

export default function Homepage() {
  return (
    <header className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-20">

        {/* Text Content */}
        <section className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
           Building Scalable and Reliable Digital Products
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg md:text-xl">
           
             I am a passionate software developer focused on creating digital solutions that are user-friendly, efficient, and reliable. My goal is to turn ideas into meaningful products that make a difference.
          </p>
          
          <nav className="flex gap-4" aria-label="Hero section links">
            <a 
              href="#projects" 
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border border-green-500 text-green-600 px-6 py-3 rounded-md hover:bg-green-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </nav>
        </section>

        {/* Image / Illustration */}
        <section className="flex-1">
          <img
            src="/developerlaptop.jpg" 
            alt="Developer coding on a laptop"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
          
        </section>

      </div>
    </header>
  );
}