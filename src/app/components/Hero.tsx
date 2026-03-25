"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "AI Agent Builder",
  "ERP Architect",
  "Python & React Dev",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const contentY = useTransform(scrollY, [0, 350], [0, -60]);
  const blobScale = useTransform(scrollY, [0, 350], [1, 1.15]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const openWhatsApp = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden leaf-border"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          style={{ scale: blobScale }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          style={{ scale: blobScale }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 float" />
          <span className="text-sm font-medium text-emerald-700">
            Disponible para nuevos proyectos
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="gradient-text">Jeremías Uriel Tesio</span>
        </motion.h1>

        {/* Role flip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-12 flex items-center justify-center mb-6 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ y: 32, opacity: 0, filter: "blur(6px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -32, opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl font-semibold text-slate-500"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-10"
        >
          Desarrollo soluciones que integran <strong className="text-emerald-600">Agentes de IA</strong>,{" "}
          hardware industrial y aplicaciones web robustas. Actualmente finalizando la {" "}
          <strong className="text-blue-600">Tecnicatura en IA</strong> de la Universidad Nacional de Rosario.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(43,61,7,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-white font-semibold rounded-full gradient-border shadow-lg transition-shadow cursor-pointer"
          >
            Ver Proyectos
          </motion.button>
          <motion.button
            onClick={openWhatsApp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-slate-700 font-semibold rounded-full border-2 border-slate-200 hover:border-emerald-300 hover:text-emerald-600 transition-all cursor-pointer"
          >
            Contactarme
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-slate-100"
        >
          {[
            { value: "ERP", label: "Digitalización empresarial" },
            { value: "Bots", label: "Automatización de procesos" },
            { value: "APIs", label: "Integración de sistemas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 font-medium">Scroll</span>
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-emerald-500 rounded-full scroll-indicator" />
        </div>
      </motion.div>
    </section>
  );
}
