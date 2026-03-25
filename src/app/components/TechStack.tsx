"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Lenguajes",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Bash", "ZPL"],
  },
  {
    label: "Frameworks & Librerías",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    items: ["FastAPI", "Flask", "Django", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Bases de Datos",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
        <path d="M3 12A9 3 0 0 0 21 12"/>
      </svg>
    ),
    items: ["PostgreSQL", "MySQL"],
  },
  {
    label: "Herramientas & DevOps",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    items: ["Git", "GitHub", "Docker", "Linux", "Postman"],
  },
  {
    label: "IA & Integraciones",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        <path d="M5 3v4"/>
        <path d="M19 17v4"/>
        <path d="M3 5h4"/>
        <path d="M17 19h4"/>
      </svg>
    ),
    items: ["OpenAI API", "LLMs / Agentes", "Google Maps API", "ManyChat", "WhatsApp API", "Zebra ZPL"],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="py-24 bg-white leaf-border">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-emerald-600 tracking-widest uppercase">
            Stack Tecnológico
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Herramientas que <span className="gradient-text">domino</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.25, delay: catIndex * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
            >
              {/* Label */}
              <div className="flex items-center gap-2 sm:w-52 flex-shrink-0">
                <span className="text-emerald-600">{cat.icon}</span>
                <span className="text-sm font-semibold text-slate-700">{cat.label}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.15, delay: catIndex * 0.05 + i * 0.025 }}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 6px 20px rgba(43,61,7,0.2)",
                      backgroundColor: "#f2f6e8",
                      color: "#1f2d05",
                      borderColor: "#96b852",
                    }}
                    style={{ backgroundColor: "#f8fafc", color: "#374151", borderColor: "#e2e8f0" }}
                    className="tech-tag px-4 py-2 rounded-full text-sm font-medium border cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-2xl overflow-hidden"
        >
          <div className="gradient-border p-px rounded-2xl">
            <div className="bg-white rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  ¿Tenés un proyecto en mente?
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Puedo ayudarte a construirlo desde cero o mejorar lo que ya tenés.
                </p>
              </div>
              <motion.button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 px-6 py-3 text-white font-semibold rounded-full gradient-border shadow-md text-sm cursor-pointer"
              >
                Hablemos →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
