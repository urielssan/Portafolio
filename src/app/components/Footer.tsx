"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-sm leading-relaxed"
        >
          Muchas gracias por tomarse su tiempo y pasarse por aquí.
          <br />
          <span className="text-slate-500 text-xs mt-1 block">Jeremias Uriel Tesio</span>
        </motion.p>
      </div>
    </footer>
  );
}
