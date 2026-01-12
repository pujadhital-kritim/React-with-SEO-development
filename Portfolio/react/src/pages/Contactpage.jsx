import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

// Reusable Input Component
function InputField({ id, name, type = "text", placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-md
                   bg-white dark:bg-slate-900
                   border border-slate-300 dark:border-slate-700
                   text-slate-900 dark:text-slate-100
                   shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-green-500
                   transition"
      />
    </div>
  );
}

// Reusable Textarea Component
function TextareaField({ id, name, placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <textarea
        id={id}
        name={name}
        rows="4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-md
                   bg-white dark:bg-slate-900
                   border border-slate-300 dark:border-slate-700
                   text-slate-900 dark:text-slate-100
                   shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-green-500
                   transition"
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.message.length < 10) {
      setError("Message should be at least 10 characters long.");
      return;
    }

    setError("");
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  }

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-green-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Whether you have a project idea, collaboration in mind, or just want to chat about tech,
            I’m always open to conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-900
                       border border-slate-200 dark:border-slate-700
                       rounded-2xl p-10 shadow-lg
                       hover:shadow-2xl transition"
          >
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Have a project in mind or just want to chat? Fill out the form
              below or connect with me on social media.
            </p>

            <div className="space-y-4">
              <InputField
                id="name"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <InputField
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
              <TextareaField
                id="message"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {status === "success" && (
                <p className="text-green-600 text-sm">
                  Message sent successfully! I’ll get back to you soon.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full mt-2 py-3 rounded-md
                           bg-green-600 hover:bg-green-700
                           disabled:opacity-60
                           text-white font-semibold text-lg transition"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>

         {/* Social + CTA Section */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex flex-col items-center mt-10 justify-center space-y-8"
>
  {/* Social Icons */}
  <div className="text-center">
    <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
      Connect with Me
    </h3>
    <div className="flex gap-6 justify-center">
      <a href="https://github.com/" target="_blank" className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-green-500 hover:scale-110 transition">
        <Github />
      </a>
      <a href="https://linkedin.com/" target="_blank" className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-green-500 hover:scale-110 transition">
        <Linkedin />
      </a>
      <a href="mailto:your@email.com" className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-green-500 hover:scale-110 transition">
        <Mail />
      </a>
    </div>
  </div>
            {/* Catchy CTA / Fun Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 dark:bg-green-900 p-6 rounded-xl shadow-md
                         text-center hover:scale-105 transition transform"
            >
              <h4 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-300">
                 Let’s build something amazing together!
              </h4>
              <p className="text-slate-700 dark:text-slate-200">
                Want to see my recent projects? Check them out in my portfolio and let’s collaborate.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
