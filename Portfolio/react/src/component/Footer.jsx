import React from 'react'

const Footer = () => {
  return (
  <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* Brand */}
    <div>
      <h2 className="text-lg font-semibold text-primary">
       Puja Dhital
      </h2>
      <p className="mt-3 text-sm leading-relaxed">
        Crafting scalable and reliable digital products with a focus on
        clean code and user experience.
      </p>
    </div>

    {/* Site Navigation */}
    <nav aria-label="Footer Navigation">
      <h3 className="font-medium mb-3"></h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-green-500">Home</a></li>
        <li><a href="/about" className="hover:text-green-500">About</a></li>
        <li><a href="/skills" className="hover:text-green-500">Skills</a></li>
      </ul>
    </nav>

    {/* Portfolio */}
    <nav aria-label="Portfolio Links">
      <h3 className="font-medium mb-3">Portfolio</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/projects" className="hover:text-green-500">Projects</a></li>
        <li><a href="/blog" className="hover:text-green-500">Blog</a></li>
        <li><a href="/contact" className="hover:text-">Contact</a></li>
      </ul>
    </nav>

    {/* Social / Connect */}
    <address className="not-italic">
      <h3 className="font-medium mb-3">Connect</h3>
      <div className="flex gap-4">
        <a href="" aria-label="GitHub">
          GitHub
        </a>
        <a href="" aria-label="LinkedIn">
          LinkedIn
        </a>
        <a href="" aria-label="Twitter">
          Twitter
        </a>
      </div>
    </address>

  </div>

  
</footer>

  )
}

export default Footer