"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Empresa Gastronómica",
    role: "Desarrollador Full Stack (In-House)",
    period: "Enero 2025 – Actualidad",
    location: "Rosario, Argentina",
    color: "emerald",
    items: [
      "Lideré el desarrollo del ERP central que digitalizó el 100% de las operaciones.",
      "Diseñé y construí una plataforma integral para gestión de producción, ventas y logística con Python (Flask) y React.",
      "Implementé módulos de control de stock en tiempo real integrados con scanners de códigos de barras.",
      "Desarrollé sistema de autenticación encriptado con roles y permisos (RBAC).",
      "Creé sistemas de gamificación (Ruleta de premios) basados en historial de compras.",
      "Automaticé la generación de reportes de trazabilidad para inspecciones municipales.",
    ],
    tech: ["Python", "Flask", "React", "MySQL", "RBAC", "Scanners"],
  },
  {
    company: "Proyectos Particulares",
    role: "Desarrollador de Software Freelance",
    period: "2024 – Actualidad",
    location: "Remoto",
    color: "blue",
    items: [
      "Desarrollé soluciones tecnológicas a medida para clientes de Logística, Educación y Comercio.",
      "Construí Elena: bot omnicanal (WhatsApp/Meta) integrado con ManyChat para cierre automático de ventas.",
      "Creé plataforma de carpooling con Google Maps API para cálculo dinámico de tarifas geolocalizadas.",
      "Desarrollé Esfinge IA: SaaS educativo con OpenAI API para análisis de PDFs y generación de exámenes.",
      "Implementé sistema ZPL para generación masiva de etiquetas logísticas con previsualización web.",
      "Construí Grasa: gestión integral de bicicleterías con chatbot NL-to-SQL.",
      "Desarrollé EJE: plataforma para quiroprácticos con agente IA que agenda turnos automáticamente.",
    ],
    tech: ["Python", "FastAPI", "React", "OpenAI API", "ManyChat", "PostgreSQL"],
  },
];

const colorMap: Record<string, { dot: string; line: string; badge: string; text: string }> = {
  emerald: {
    dot: "bg-emerald-500",
    line: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    text: "text-emerald-600",
  },
  blue: {
    dot: "bg-blue-500",
    line: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    text: "text-blue-600",
  },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-emerald-600 tracking-widest uppercase">
            Experiencia
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Trayectoria <span className="gradient-text">profesional</span>
          </h2>
        </motion.div>

        {/* Education badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4 bg-white rounded-2xl border border-blue-100 shadow-sm p-5 mb-10"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">
            🎓
          </div>
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">
              Educación — En curso
            </div>
            <div className="font-bold text-slate-900">Tecnicatura en Inteligencia Artificial</div>
            <div className="text-sm text-slate-500">
              Universidad Nacional de Rosario (UNR) · Rosario, Argentina
            </div>
            <p className="text-xs text-slate-400 mt-1">
              ML, ciencia de datos, matemática aplicada y ética en IA.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300 via-blue-300 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color];
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                    className={`absolute left-4 top-6 w-4 h-4 rounded-full ${colors.dot} border-2 border-white shadow-md -translate-x-1/2`}
                  />

                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{exp.company}</h3>
                        <p className={`text-sm font-semibold ${colors.text}`}>{exp.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-slate-700">{exp.period}</div>
                        <div className="text-xs text-slate-400">{exp.location}</div>
                      </div>
                    </div>

                    {/* Items */}
                    <ul className="space-y-2 mb-5">
                      {exp.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0 mt-1.5`} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${colors.badge}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
