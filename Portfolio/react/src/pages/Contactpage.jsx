import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";


const fadeUp   = { hidden: { opacity: 0, y: 28 },  visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: "easeOut" } } };
const fadeLeft = { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: "easeOut" } } };
const fadeRight= { hidden: { opacity: 0, x: 36  }, visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: "easeOut" } } };
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

//  Reusable Input 
function InputField({ id, name, type = "text", placeholder, value, onChange, icon }) {
  return (
    <div className="relative group">
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      {icon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors duration-200">
          {icon}
        </span>
      )}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full ${icon ? "pl-11" : "pl-4"} pr-4 py-3.5 rounded-xl
                   bg-slate-50 dark:bg-slate-800/60
                   border border-slate-200/80 dark:border-slate-700/60
                   text-slate-900 dark:text-slate-100
                   placeholder:text-slate-400 dark:placeholder:text-slate-500
                   text-sm font-medium
                   focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-400 dark:focus:border-green-500
                   hover:border-slate-300 dark:hover:border-slate-600
                   transition-all duration-200`}
      />
    </div>
  );
}

// Reusable Textarea
function TextareaField({ id, name, placeholder, value, onChange }) {
  return (
    <div className="relative group">
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <textarea
        id={id}
        name={name}
        rows={5}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3.5 rounded-xl
                   bg-slate-50 dark:bg-slate-800/60
                   border border-slate-200/80 dark:border-slate-700/60
                   text-slate-900 dark:text-slate-100
                   placeholder:text-slate-400 dark:placeholder:text-slate-500
                   text-sm font-medium resize-none
                   focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-400 dark:focus:border-green-500
                   hover:border-slate-300 dark:hover:border-slate-600
                   transition-all duration-200"
      />
    </div>
  );
}


const socials = [
  {
    href:  "https://github.com/pujadhital-kritim",
    label: "GitHub",
    icon:  <Github className="w-5 h-5" />,
    bg:    "bg-slate-900 dark:bg-slate-700",
    hover: "hover:bg-slate-700 dark:hover:bg-slate-600",
    text:  "text-white",
  },
  {
    href:  "https://www.linkedin.com/in/puja-dhital-768695280/",
    label: "LinkedIn",
    icon:  <Linkedin className="w-5 h-5" />,
    bg:    "bg-blue-600 dark:bg-blue-700",
    hover: "hover:bg-blue-500 dark:hover:bg-blue-600",
    text:  "text-white",
  },
  {
    href:  "mailto:pujadhital77@email.com",
    label: "Email",
    icon:  <Mail className="w-5 h-5" />,
    bg:    "bg-green-600 dark:bg-green-700",
    hover: "hover:bg-green-500 dark:hover:bg-green-600",
    text:  "text-white",
  },
];


const infoItems = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: "pujadhital77@email.com",
    href:  "mailto:pujadhital77@email.com",
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Location",
    value: "Nepal",
    href:  null,
  },
  {
    icon: <Clock className="w-4 h-4" />,
    label: "Response time",
    value: "Within 24 hours",
    href:  null,
  },
];


export default function Contact() {
  const [form,   setForm  ] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error,  setError ] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.message.length < 10) {
      setError("Message should be at least 10 characters.");
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
      className="relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* ── Ambient glows ── */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-green-400/6 dark:bg-green-500/5 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] rounded-full bg-emerald-400/5 dark:bg-emerald-500/4 blur-[90px] pointer-events-none" />

      {/* ── Grid texture ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-36">

        {/* ── Section header ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-green-500" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-green-600 dark:text-green-400">
              Contact
            </span>
            <div className="w-8 h-px bg-green-500" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5"
          >
            Let's{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 bg-clip-text text-transparent">
                Work Together
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-green-500 to-emerald-400" />
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            Whether you have a project idea, a collaboration in mind, or just want to say hello —
            I'm always open to new conversations.
          </motion.p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* ════ LEFT: Form (3 cols) ════ */}
          <motion.div
            variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="relative rounded-2xl overflow-hidden
                         bg-slate-50/80 dark:bg-slate-900/80
                         border border-slate-200/80 dark:border-slate-800
                         shadow-sm hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-black/40
                         hover:border-green-200/50 dark:hover:border-green-800/50
                         transition-all duration-300 p-8 sm:p-10"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 group-hover:from-green-500/3 to-transparent pointer-events-none rounded-2xl transition-all duration-500" />

              {/* Form header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 border border-green-200/60 dark:border-green-700/40">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Send a Message</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">I'll get back to you within 24 hours</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    id="name" name="name" placeholder="Your Name"
                    value={form.name} onChange={handleChange}
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    }
                  />
                  <InputField
                    id="email" name="email" type="email" placeholder="Your Email"
                    value={form.email} onChange={handleChange}
                    icon={<Mail className="w-4 h-4" />}
                  />
                </div>

                <TextareaField
                  id="message" name="message" placeholder="Tell me about your project or just say hello..."
                  value={form.message} onChange={handleChange}
                />

                {/* Error */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-red-500 dark:text-red-400"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                    {error}
                  </motion.p>
                )}

                {/* Success */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-green-50 dark:bg-green-950/50 border border-green-200/60 dark:border-green-800/50"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p className="text-sm font-medium text-green-700 dark:text-green-400">
                      Message sent! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="relative w-full flex items-center justify-center gap-2 py-3.5 rounded-xl
                             text-sm font-semibold text-white overflow-hidden
                             bg-gradient-to-r from-green-600 to-emerald-600
                             hover:from-green-500 hover:to-emerald-500
                             disabled:opacity-60 disabled:cursor-not-allowed
                             shadow-md shadow-green-600/25 hover:shadow-lg hover:shadow-green-500/30
                             hover:-translate-y-0.5 active:translate-y-0
                             transition-all duration-200
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                >
                  {/* Inner shine */}
                  <span className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />

                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </motion.div>

          {/* ════ RIGHT: Info + Socials (2 cols) ════ */}
          <motion.div
            variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact info card */}
            <div className="rounded-2xl p-6
                            bg-slate-50/80 dark:bg-slate-900/80
                            border border-slate-200/80 dark:border-slate-800
                            shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-5 tracking-wide">
                Contact Info
              </h3>
              <div className="space-y-4">
                {infoItems.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 border border-green-200/50 dark:border-green-700/40 flex-shrink-0">
                      {icon}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links card */}
            <div className="rounded-2xl p-6
                            bg-slate-50/80 dark:bg-slate-900/80
                            border border-slate-200/80 dark:border-slate-800
                            shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-5 tracking-wide">
                Connect with Me
              </h3>
              <div className="flex flex-col gap-3">
                {socials.map(({ href, label, icon, bg, hover, text }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl
                               ${bg} ${hover} ${text}
                               transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
                               group`}
                  >
                    <span className="flex-shrink-0">{icon}</span>
                    <span className="text-sm font-semibold">{label}</span>
                    <svg className="w-3.5 h-3.5 ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

         

          </motion.div>
        </div>
      </div>
    </section>
  );
}