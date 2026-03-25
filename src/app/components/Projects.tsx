"use client";

/*
 * IMÁGENES: Copiá los screenshots a public/images/projects/
 * ERP Gastronómica : erp-1.png  erp-2.png  erp-3.png
 * Grasa            : grasa-1.png  grasa-2.png  grasa-3.png
 * ZPL Automator    : zpl-1.png  zpl-2.png
 * Otros proyectos  : agregar mockups cuando estén disponibles
 */

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

// ─── COLOR MAP ──────────────────────────────────────────────────────────────────
const colorMap: Record<string, {
  badge: string; tab: string; tabInactive: string; ghost: string;
  text: string; iconBg: string; dot: string; border: string; problemBg: string;
}> = {
  default: {
    badge:       "bg-emerald-100 text-emerald-800",
    tab:         "bg-emerald-600 text-white",
    tabInactive: "text-slate-600 hover:bg-slate-100",
    ghost:       "bg-slate-200",
    text:        "text-emerald-600",
    iconBg:      "bg-emerald-50",
    dot:         "bg-emerald-600",
    border:      "border-slate-200",
    problemBg:   "bg-slate-50",
  },
};

// ─── TYPES ──────────────────────────────────────────────────────────────────────
type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  color: string;
  problem: { headline: string; points: string[] };
  solution: { headline: string; points: string[] };
  tags: string[];
  mockups: string[];
  mockupNodes?: ReactNode[];
  icon: ReactNode;
};

// ─── ILLUSTRATED MOCKUPS ────────────────────────────────────────────────────────
// Used for Elena (sales chat), Scrapping (price monitor) and Sorteo (secret santa)
// since those projects have private/no real screenshots.

function ElenaMockup1() {
  const msgs: { u: boolean; t: string }[] = [
    { u: true,  t: "Hola! Qué tienen para mujer en verano?" },
    { u: false, t: "¡Hola! Soy Elena ✨\nTenemos estas opciones:\n• Remera esencial — $12.990\n• Vestido lino — $29.990\n• Short cargo — $18.500\n¿Te interesa alguna?" },
    { u: true,  t: "El vestido! Tienen en talle S?" },
    { u: false, t: "Sí 🎉 Talle S disponible en blanco, rosa y negro. ¿Con cuál te quedamos?" },
  ];
  return (
    <div className="h-full flex flex-col bg-[#ece5dd]">
      <div className="bg-[#075e54] text-white px-3 py-2.5 flex items-center gap-2.5 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-sm font-bold shrink-0">E</div>
        <div>
          <p className="text-sm font-semibold leading-none">Elena · Ventas</p>
          <p className="text-[10px] opacity-75 mt-0.5">en línea</p>
        </div>
      </div>
      <div className="flex-1 px-3 py-2 space-y-1.5 overflow-hidden">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.u ? "justify-end" : "justify-start"}`}>
            <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontSize: "12.5px", letterSpacing: "0.01em" }} className={`max-w-[78%] px-2.5 py-1.5 rounded-xl leading-relaxed whitespace-pre-line ${m.u ? "bg-[#dcf8c6] rounded-br-none" : "bg-white shadow-sm rounded-bl-none"} text-slate-800`}>
              {m.t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ElenaMockup2() {
  const msgs: { u: boolean; t: string }[] = [
    { u: true,  t: "Me quedo con el vestido rosa talle S" },
    { u: false, t: "Perfecto! 🛍️\nVestido lino Rosa — S\nPrecio: $29.990 · Envío: $3.500\nTotal: $33.490\n\n¿Confirmo el pedido?" },
    { u: true,  t: "Sí, confirmado" },
    { u: false, t: "✅ ¡Pedido registrado! ID #4821 — 14:32\npay.elena.ar/4821" },
    { u: false, t: "📋 Tus datos ya quedaron en el CRM. ¡Gracias!" },
  ];
  return (
    <div className="h-full flex flex-col bg-[#ece5dd]">
      <div className="bg-[#075e54] text-white px-3 py-2.5 flex items-center gap-2.5 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-sm font-bold shrink-0">E</div>
        <div>
          <p className="text-sm font-semibold leading-none">Elena · Ventas</p>
          <p className="text-[10px] opacity-75 mt-0.5">en línea</p>
        </div>
      </div>
      <div className="flex-1 px-3 py-2 space-y-1.5 overflow-hidden">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.u ? "justify-end" : "justify-start"}`}>
            <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontSize: "12.5px", letterSpacing: "0.01em" }} className={`max-w-[78%] px-2.5 py-1.5 rounded-xl leading-relaxed whitespace-pre-line ${m.u ? "bg-[#dcf8c6] rounded-br-none" : "bg-white shadow-sm rounded-bl-none"} text-slate-800`}>
              {m.t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ElenaMockup3() {
  const stats = [
    { label: "Consultas hoy",   value: "47", delta: "+12%"  },
    { label: "Ventas cerradas", value: "9",  delta: "+3"    },
    { label: "Leads auto-CRM",  value: "23", delta: "auto"  },
    { label: "Tasa conversión", value: "19%",delta: "↑ 4pt" },
  ];
  return (
    <div className="h-full bg-slate-900 text-white p-4 flex flex-col">
      <div className="mb-3">
        <p className="text-[10px] text-pink-400 font-semibold uppercase tracking-wider">Elena Dashboard</p>
        <p className="text-base font-bold mt-0.5">Resumen del día</p>
        <p className="text-[9px] text-slate-400 mt-0.5">Martes 18 mar · actualizado hace 2 min</p>
      </div>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {stats.map((s) => (
          <div key={s.label} className="bg-slate-800 rounded-xl p-3 flex flex-col justify-between">
            <p className="text-[9px] text-slate-400 uppercase tracking-wide leading-tight">{s.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{s.value}</p>
            <p className="text-[10px] text-pink-400">{s.delta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrapMockup1() {
  const rows = [
    { name: "TiendaA",    p1: "$12.490", p2: "$28.990", p3: "$45.000", own: false },
    { name: "MegaStore",  p1: "$11.900", p2: "$31.500", p3: "$42.000", own: false },
    { name: "ShopOnline", p1: "$13.200", p2: "$27.000", p3: "$47.500", own: false },
    { name: "Tu precio",  p1: "$12.990", p2: "$29.990", p3: "$44.000", own: true  },
  ];
  return (
    <div className="h-full bg-white p-4 flex flex-col">
      <div className="mb-3">
        <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">Scrapper</p>
        <p className="text-base font-bold text-slate-900">Comparativa de Precios</p>
        <p className="text-[9px] text-slate-400 mt-0.5">Actualizado: hoy 09:15 hs · 3 competidores</p>
      </div>
      <div className="flex-1 overflow-hidden">
        <table className="w-full text-[10px]">
          <thead>
            <tr className="text-slate-400 border-b border-slate-100">
              <th className="text-left pb-1.5 font-medium">Tienda</th>
              <th className="text-right pb-1.5 font-medium">Prod. A</th>
              <th className="text-right pb-1.5 font-medium">Prod. B</th>
              <th className="text-right pb-1.5 font-medium">Prod. C</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className={`border-b border-slate-50 ${r.own ? "bg-amber-50 font-semibold" : ""}`}>
                <td className="py-1.5 text-slate-700">{r.name}</td>
                <td className="py-1.5 text-right text-slate-700">{r.p1}</td>
                <td className="py-1.5 text-right text-slate-700">{r.p2}</td>
                <td className="py-1.5 text-right text-slate-700">{r.p3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ScrapMockup2() {
  const days = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
  const series = [
    { vals: [120, 118, 122, 115, 119, 113], color: "#fb923c" },
    { vals: [115, 117, 110, 112, 108, 105], color: "#60a5fa" },
    { vals: [119, 119, 119, 122, 122, 122], color: "#2b3d07" },
  ];
  const legend = [
    { c: "#fb923c", l: "TiendaA"   },
    { c: "#60a5fa", l: "MegaStore" },
    { c: "#2b3d07", l: "Tu precio" },
  ];
  const minV = 100, maxV = 125, range = maxV - minV, H = 80;
  const toY = (v: number) => H - ((v - minV) / range) * H;
  return (
    <div className="h-full bg-white p-4 flex flex-col">
      <div className="mb-2">
        <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">Evolución</p>
        <p className="text-base font-bold text-slate-900">Historial — Producto A</p>
        <div className="flex gap-3 mt-1">
          {legend.map((l) => (
            <div key={l.l} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ background: l.c }} />
              <span className="text-[9px] text-slate-500">{l.l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <svg viewBox={`0 0 240 ${H + 20}`} className="w-full">
          {[0, 20, 40, 60, 80].map((y) => (
            <line key={y} x1="0" y1={y} x2="240" y2={y} stroke="#f1f5f9" strokeWidth="1" />
          ))}
          {series.map(({ vals, color }) => (
            <polyline
              key={color}
              points={vals.map((v, i) => `${i * 48 + 12},${toY(v)}`).join(" ")}
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
          {days.map((d, i) => (
            <text key={d} x={i * 48 + 12} y={H + 16} fontSize="9" fill="#94a3b8" textAnchor="middle">{d}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

function ScrapMockup3() {
  return (
    <div className="h-full bg-white p-4 flex flex-col justify-center gap-3">
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-amber-800">Alerta de precio detectada</p>
            <p className="text-[10px] text-amber-700 mt-0.5 leading-relaxed whitespace-pre-line">{"MegaStore bajó Producto A un 8.6%\nDe $11.900 → $10.875 · hace 20 min"}</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="bg-slate-50 rounded-xl p-3 flex justify-between items-center">
          <span className="text-[10px] text-slate-600">Tu precio actual</span>
          <span className="text-xs font-bold text-slate-900">$12.990</span>
        </div>
        <div className="bg-slate-50 rounded-xl p-3 flex justify-between items-center">
          <span className="text-[10px] text-slate-600">Diferencia con MegaStore</span>
          <span className="text-xs font-bold text-rose-600">+19.5%</span>
        </div>
        <div className="w-full bg-amber-500 text-white text-[10px] font-semibold rounded-xl py-2 text-center">
          Ver recomendación de ajuste →
        </div>
      </div>
    </div>
  );
}

function SorteoMockup1() {
  const names = ["Martina", "Lucas", "Valentina", "Agustín", "Camila"];
  return (
    <div className="h-full bg-white p-4 flex flex-col">
      <div className="mb-3">
        <p className="text-[10px] text-rose-500 font-semibold uppercase tracking-wider">Sorteo Invisible</p>
        <p className="text-base font-bold text-slate-900">Nuevo sorteo 🎁</p>
      </div>
      <div className="mb-2.5">
        <p className="text-[9px] text-slate-500 font-medium mb-1">Nombre del evento</p>
        <div className="border border-slate-200 rounded-lg px-2.5 py-1.5 text-[10px] text-slate-700 bg-slate-50">Navidad Familiar 2024</div>
      </div>
      <div className="mb-2.5">
        <p className="text-[9px] text-slate-500 font-medium mb-1">Presupuesto máximo</p>
        <div className="border border-slate-200 rounded-lg px-2.5 py-1.5 text-[10px] text-slate-700 bg-slate-50">$5.000</div>
      </div>
      <div className="flex-1">
        <p className="text-[9px] text-slate-500 font-medium mb-1.5">Participantes ({names.length})</p>
        <div className="space-y-1">
          {names.map((n) => (
            <div key={n} className="flex items-center gap-2 bg-rose-50 rounded-lg px-2.5 py-1.5">
              <div className="w-5 h-5 rounded-full bg-rose-400 flex items-center justify-center text-[9px] font-bold text-white shrink-0">{n[0]}</div>
              <span className="text-[10px] text-slate-700">{n}</span>
              <span className="ml-auto text-[9px] text-rose-400">email ✓</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SorteoMockup2() {
  return (
    <div className="h-full bg-gradient-to-br from-rose-50 to-pink-100 p-4 flex flex-col justify-center">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-3 text-center">
          <p className="text-white text-xs font-bold">🎅 Navidad Familiar 2024</p>
          <p className="text-rose-100 text-[9px] mt-0.5">Amigo Invisible</p>
        </div>
        <div className="p-4 text-center">
          <p className="text-[10px] text-slate-500 mb-1">Hola, <strong>Martina</strong> 👋</p>
          <p className="text-xs text-slate-700">¡Tu amigo invisible es...</p>
          <div className="my-3 bg-rose-50 border-2 border-dashed border-rose-300 rounded-xl py-2.5 px-4">
            <p className="text-lg font-bold text-rose-600">Lucas</p>
          </div>
          <p className="text-[9px] text-slate-400 leading-relaxed">Presupuesto: hasta $5.000<br/>Fecha: 24 de diciembre</p>
        </div>
        <div className="bg-slate-50 px-4 py-1.5 text-center">
          <p className="text-[9px] text-slate-400">Enviado automáticamente · Sorteo Invisible</p>
        </div>
      </div>
    </div>
  );
}

function SorteoMockup3() {
  const results = ["Martina", "Lucas", "Valentina", "Agustín", "Camila"];
  return (
    <div className="h-full bg-white p-4 flex flex-col items-center justify-center text-center">
      <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-3">
        <svg className="w-7 h-7 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <p className="text-base font-bold text-slate-900 mb-0.5">¡Sorteo realizado!</p>
      <p className="text-[10px] text-slate-500 mb-3">5 emails enviados automáticamente</p>
      <div className="space-y-1.5 w-full">
        {results.map((n) => (
          <div key={n} className="flex items-center gap-2 bg-rose-50 rounded-lg px-3 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
            <span className="text-[10px] text-slate-600">{n} → <span className="text-rose-500">✓ email enviado</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── DATA ───────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: "erp",
    title: "ERP Gastronómica",
    subtitle: "Sistema Central de Gestión Multi-Local",
    category: "ERP",
    color: "default",
    problem: {
      headline: "Control imposible mientras la empresa escala",
      points: [
        "Stock que no cierra: ventas perdidas por desabastecimiento invisible",
        "La municipalidad exige reportes de trazabilidad que no existen",
        "Caja sin control: entradas de dinero sin verificación ni registro",
        "Imposible saber cuánto vende cada producto o cada local",
      ],
    },
    solution: {
      headline: "ERP completo que digitalizó el 100% de las operaciones",
      points: [
        "Stock por local con entradas, salidas y traslados entre sucursales",
        "Panel de verificaciones de pago y caja automática por día/local",
        "Base de datos de ventas diferenciada por tipo de entrega y medio de pago",
        "Reportes de trazabilidad listos para inspecciones municipales",
      ],
    },
    tags: ["Python", "Flask", "React", "MySQL", "RBAC", "ZPL"],
    mockups: ["/images/projects/erp-1.png", "/images/projects/erp-2.png", "/images/projects/erp-3.png", "/images/projects/erp-4.png", "/images/projects/erp-5.png"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>,
  },
  {
    id: "grasa",
    title: "Grasa",
    subtitle: "ERP para Bicicleterías + Chatbot IA",
    category: "SaaS + IA",
    color: "default",
    problem: {
      headline: "Horas perdidas cruzando datos manualmente",
      points: [
        "Reparaciones y ventas sin cruzar: datos en cuadernos y planillas",
        "Stock físico que no coincide con el sistema, errores continuos",
        "Sin caja centralizada: imposible saber la rentabilidad real",
        "Consultas de negocio que requieren horas de análisis manual",
      ],
    },
    solution: {
      headline: "ERP centralizado + Chatbot NL-to-SQL para consultas instantáneas",
      points: [
        "Gestión unificada de ventas, reparaciones, stock y clientes",
        "Chatbot IA: 'cuánto vendí esta semana' → respuesta inmediata",
        "Dashboard de métricas con evolución de ventas y estado de stock",
        "Caja digital y módulo de órdenes de trabajo y presupuestos",
      ],
    },
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI", "NL-to-SQL"],
    mockups: ["/images/projects/grasa-1.png", "/images/projects/grasa-2.png", "/images/projects/grasa-3.png", "/images/projects/grasa-4.png", "/images/projects/grasa-5.png"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>,
  },
  {
    id: "zpl",
    title: "ZPL Automator",
    subtitle: "Automatización de Etiquetas Industriales",
    category: "Industrial",
    color: "default",
    problem: {
      headline: "El diseñador renuncia y la producción no puede detenerse",
      points: [
        "El único que sabía diseñar etiquetas ZPL se va de la empresa",
        "El flujo de nuevos productos crece y las etiquetas son bloqueantes",
        "Proceso manual lento y propenso a errores en lenguaje ZPL",
        "Sin previsualización: se imprime sin saber el resultado final",
      ],
    },
    solution: {
      headline: "Generación masiva de etiquetas con previsualización web en PDF",
      points: [
        "Sistema que genera etiquetas ZPL para impresoras Zebra industriales",
        "Previsualización web en PDF antes de cualquier impresión",
        "Plantillas personalizables sin conocimiento de ZPL",
        "Gestión de catálogo de productos e ingredientes para el etiquetado",
      ],
    },
    tags: ["Python", "Flask", "ZPL", "Zebra Technologies", "PDF", "React"],
    mockups: ["/images/projects/zpl-1.png", "/images/projects/zpl-2.png", "/images/projects/zpl-3.png", "/images/projects/zpl-4.png", "/images/projects/zpl-5.png"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>,
  },
  {
    id: "scrapping",
    title: "Scrapper de Competencia",
    subtitle: "Monitoreo Automático de Precios",
    category: "Data & IA",
    color: "default",
    problem: {
      headline: "Identificar precios de la competencia lleva horas cada semana",
      points: [
        "Revisión manual de sitios web: proceso tedioso y no escalable",
        "Los precios cambian constantemente sin forma de seguirlos",
        "Sin datos comparativos: decisiones de pricing sin respaldo",
        "Imposible detectar tendencias del mercado a tiempo",
      ],
    },
    solution: {
      headline: "Sistema de scrapping + visualización para inteligencia competitiva",
      points: [
        "Scrapper automatizado que releva precios de competidores en tiempo real",
        "Dashboard con evolución histórica y comparativa de precios",
        "Alertas cuando un competidor modifica sus precios significativamente",
        "Exportación de reportes para análisis de estrategia comercial",
      ],
    },
    tags: ["Python", "Scrapy", "React", "PostgreSQL", "Recharts"],
    mockups: [],
    mockupNodes: [<ScrapMockup1 />, <ScrapMockup2 />, <ScrapMockup3 />],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>,
  },
  {
    id: "elena",
    title: "Elena",
    subtitle: "Agente de Ventas Omnicanal con IA",
    category: "IA Agent",
    color: "default",
    problem: {
      headline: "Las vendedoras no dan abasto con el volumen de consultas",
      points: [
        "Demasiadas consultas fuera del horario laboral sin atención",
        "Proceso de compra manual que requiere intervención humana por venta",
        "Leads que se pierden porque nadie responde a tiempo",
        "Sin registro sistemático de contactos ni historial de interacciones",
      ],
    },
    solution: {
      headline: "Bot omnicanal que cierra ventas y registra leads automáticamente",
      points: [
        "Integración WhatsApp + Facebook Messenger via ManyChat",
        "Cierre automático de ventas consultando base de datos SQL en tiempo real",
        "Registro automático de leads y actualización del CRM",
        "Flujos conversacionales personalizados disponibles 24/7",
      ],
    },
    tags: ["Python", "ManyChat", "SQL", "WhatsApp API", "Meta API"],
    mockups: [],
    mockupNodes: [<ElenaMockup1 />, <ElenaMockup2 />, <ElenaMockup3 />],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>,
  },
  {
    id: "esfinge",
    title: "Esfinge IA",
    subtitle: "Plataforma de Estudio con IA",
    category: "SaaS + IA",
    color: "default",
    problem: {
      headline: "Practicar para exámenes universitarios sin contexto ni memoria",
      points: [
        "Las IAs generales no recuerdan el material ni el historial de práctica",
        "Sin retroalimentación personalizada sobre errores recurrentes",
        "Material disperso: PDFs y apuntes sin integración entre sí",
        "Imposible generar exámenes de práctica del propio material",
      ],
    },
    solution: {
      headline: "Sistema que analiza tu material y genera exámenes con feedback",
      points: [
        "Carga de PDFs y apuntes que el sistema analiza con OpenAI API",
        "Generación automática de exámenes de práctica del material propio",
        "Feedback didáctico personalizado en cada respuesta incorrecta",
        "Historial de resultados y progreso por materia y alumno",
      ],
    },
    tags: ["Python", "FastAPI", "React", "OpenAI API", "PDF.js", "PostgreSQL"],
    mockups: ["/images/projects/esfinge-1.png", "/images/projects/esfinge-2.png", "/images/projects/esfinge-3.png", "/images/projects/esfinge-4.png", "/images/projects/esfinge-5.png"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  },
  {
    id: "sorteo",
    title: "Sorteo Invisible",
    subtitle: "Amigo Invisible Digital y Automatizado",
    category: "Utilidad",
    color: "default",
    problem: {
      headline: "Organizar el amigo invisible a distancia sin revelar resultados",
      points: [
        "Coordinarlo por grupo de WhatsApp arruina el secreto inevitablemente",
        "Alguien siempre se entera de los resultados al organizar manualmente",
        "El organizador también quiere participar sin ventaja informativa",
        "Sin control de quién confirmó participación ni límite de regalo",
      ],
    },
    solution: {
      headline: "Web app que sortea y notifica por email sin que nadie se entere",
      points: [
        "Sorteo automático que garantiza que nadie se asigna a sí mismo",
        "Envío de emails individuales con diseño personalizado según la ocasión",
        "El organizador participa sin acceso a los resultados",
        "Temas visuales según el tipo de festejo elegido",
      ],
    },
    tags: ["Python", "Flask", "SMTP", "React", "Jinja2"],
    mockups: [],
    mockupNodes: [<SorteoMockup1 />, <SorteoMockup2 />, <SorteoMockup3 />],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect width="22" height="5" x="1" y="7" rx="1"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
  },
  {
    id: "sinfallo",
    title: "Sinfallo",
    subtitle: "ERP para Gimnasios con Control de Acceso",
    category: "ERP",
    color: "default",
    problem: {
      headline: "El gimnasio crece pero el control sigue siendo manual",
      points: [
        "Sin sistema de acceso: cualquiera entra sin importar si está al día con la cuota",
        "Cobros y vencimientos de membresías gestionados en planillas o papel",
        "Sin historial de asistencia: imposible saber quién viene y quién no",
        "Los socios no tienen forma de ver su estado de cuenta ni renovar fácilmente",
      ],
    },
    solution: {
      headline: "ERP completo con portal para socios y control de acceso integrado",
      points: [
        "Control de acceso automatizado: el sistema verifica la membresía al entrar",
        "Gestión de cuotas, vencimientos y pagos con alertas automáticas",
        "Historial de asistencia por socio y reportes de ocupación del gimnasio",
        "Portal web para socios: consulta de estado, historial y renovación de membresía",
      ],
    },
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "Control de Acceso", "RFID"],
    mockups: ["/images/projects/sinfallo-1.jpeg", "/images/projects/sinfallo-2.jpeg", "/images/projects/sinfallo-3.jpeg", "/images/projects/sinfallo-4.jpeg", "/images/projects/sinfallo-5.jpeg"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" x2="6" y1="1" y2="4"/><line x1="10" x2="10" y1="1" y2="4"/><line x1="14" x2="14" y1="1" y2="4"/></svg>,
  },
  {
    id: "eje",
    title: "EJE",
    subtitle: "Gestión Clínica + Agente IA para Turnos",
    category: "SaaS + IA",
    color: "default",
    problem: {
      headline: "El profesional de salud gasta su tiempo en administración",
      points: [
        "Agendamiento manual por WhatsApp consume horas del día",
        "Sin historial clínico digital: datos dispersos o en papel",
        "Pacientes que no reciben recordatorios y faltan a sus turnos",
        "Seguimiento de tratamientos imposible de mantener actualizado",
      ],
    },
    solution: {
      headline: "ERP clínico + Agente IA que agenda turnos automáticamente",
      points: [
        "Historial médico completo y seguimiento por paciente",
        "Agente IA omnicanal: recibe consultas y agenda sin intervención humana",
        "Recordatorios automáticos que reducen inasistencias",
        "Dashboard de métricas clínicas y ocupación de agenda",
      ],
    },
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI", "WhatsApp"],
    mockups: ["/images/projects/eje-1.jpeg", "/images/projects/eje-2.jpeg", "/images/projects/eje-3.jpeg", "/images/projects/eje-4.jpeg", "/images/projects/eje-5.jpeg"],
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>,
  },
];

// ─── LIGHTBOX ────────────────────────────────────────────────────────────────────
function Lightbox({ open, onClose, children, onPrev, onNext, current, total }: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
}) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose, onNext, onPrev]);

  const content = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Image container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.32, 0, 0.16, 1] }}
            className="relative w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[16/9]">
              {children}
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Prev */}
            {total > 1 && (
              <button
                onClick={onPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
            )}

            {/* Next */}
            {total > 1 && (
              <button
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            )}

            {/* Dots */}
            {total > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: total }).map((_, i) => (
                  <div key={i} className={`rounded-full transition-all duration-200 ${i === current ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"}`} />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(content, document.body);
}

// ─── MOCKUP VIEWER (single image with 3D mouse-tilt) ────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 70 : -70, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -70 : 70, opacity: 0, scale: 0.97 }),
};

function MockupStack({ mockups, mockupNodes, color, icon }: {
  mockups: string[];
  mockupNodes?: ReactNode[];
  color: string;
  icon: ReactNode;
  flip: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [failed, setFailed] = useState<Set<string>>(() => new Set());
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hintDismissed, setHintDismissed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const c = colorMap[color];
  const useNodes = !!mockupNodes && mockupNodes.length > 0;
  const valid = useNodes ? [] : mockups.filter((p) => !failed.has(p));
  const total = useNodes ? mockupNodes!.length : valid.length;
  const hasImages = !useNodes && total > 0;
  const hasMultiple = total > 1;
  const safeCurrent = Math.min(current, Math.max(total - 1, 0));

  // 3D tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { stiffness: 300, damping: 30 });
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    scale.set(1);
  };

  const navigate = (d: 1 | -1) => {
    setDir(d);
    setCurrent((i) => (i + d + total) % total);
  };

  const onErr = (src: string) => setFailed((prev) => new Set(prev).add(src));

  const Frame = ({ src }: { src?: string }) =>
    src ? (
      <img src={src} alt="" className="w-full h-full object-cover object-top select-none" draggable={false} onError={() => onErr(src)} />
    ) : (
      <div className={`w-full h-full flex items-center justify-center ${c.ghost}`}>
        <div className={`${c.text} opacity-25 scale-[3]`}>{icon}</div>
      </div>
    );

  return (
    <>
    <div className="relative w-full group" style={{ perspective: "1200px" }}>
      <motion.div
        ref={containerRef}
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 cursor-pointer"
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence mode="popLayout" custom={dir}>
          <motion.div
            key={safeCurrent}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.32, 0, 0.16, 1] }}
            className="absolute inset-0"
          >
            {useNodes
              ? <div className="w-full h-full overflow-hidden">{mockupNodes![safeCurrent]}</div>
              : <Frame src={hasImages ? valid[safeCurrent] : undefined} />}
          </motion.div>
        </AnimatePresence>

        {/* Hint overlay — centered, dismisses on click */}
        {!hintDismissed && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            onClick={() => { setLightboxOpen(true); setHintDismissed(true); }}
            className="absolute top-3 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
          >
            <div className="flex items-center gap-2 bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-2xl shadow-xl whitespace-nowrap">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
              </svg>
              Clic para ampliar
            </div>
          </motion.button>
        )}

        {/* Expand button (corner, always) */}
        <div className="absolute top-3 right-3 z-20">
          <button
            onClick={() => { setLightboxOpen(true); setHintDismissed(true); }}
            className="w-9 h-9 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
            aria-label="Ver en pantalla completa"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
              <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        current={safeCurrent}
        total={total}
        onPrev={() => navigate(-1)}
        onNext={() => navigate(1)}
      >
        {useNodes
          ? <div className="w-full h-full overflow-hidden">{mockupNodes![safeCurrent]}</div>
          : <Frame src={hasImages ? valid[safeCurrent] : undefined} />}
      </Lightbox>

      {/* ── Navigation arrows (only when multiple) ── */}
      {hasMultiple && (
        <>
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-8 h-8 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-slate-50 cursor-pointer"
            aria-label="Anterior"
          >
            <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <button
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-8 h-8 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-slate-50 cursor-pointer"
            aria-label="Siguiente"
          >
            <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          {/* ── Dot indicators ── */}
          <div className="flex justify-center gap-1.5 mt-4">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > safeCurrent ? 1 : -1); setCurrent(i); }}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  i === safeCurrent
                    ? `w-4 h-1.5 ${c.dot}`
                    : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Pantalla ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
    </>
  );
}

// ─── PROJECT CARD ────────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const c = colorMap[project.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className={`bg-white rounded-3xl border ${c.border} shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden`}
    >
      {/* Accent top bar */}
      <div className={`h-1 w-full ${c.dot}`} />

      {/* Two-column: text left, image right */}
      <div className="flex flex-col lg:flex-row">
        {/* ── LEFT: Text ── */}
        <div className="flex flex-col justify-between p-7 lg:p-9 lg:w-[46%]">
          {/* Header */}
          <div>
            <div className="flex flex-col items-center text-center gap-2 mb-5">
              <div className={`w-11 h-11 rounded-xl ${c.iconBg} flex items-center justify-center ${c.text}`}>
                {project.icon}
              </div>
              <span className={`text-xs font-bold uppercase tracking-widest ${c.badge} px-2.5 py-0.5 rounded-full`}>
                {project.category}
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-0.5">{project.title}</h3>
                <p className={`text-sm font-medium ${c.text}`}>{project.subtitle}</p>
              </div>
            </div>

            {/* Problema → Solución */}
            <div className="flex flex-col gap-3">
              {/* Problema */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs font-bold text-amber-800 uppercase tracking-widest text-center mb-1">Problema</p>
                <p className="text-xs font-semibold text-amber-900 text-center mb-3">{project.problem.headline}</p>
                <ul className="space-y-1.5">
                  {project.problem.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-amber-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        </svg>
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className={`w-7 h-7 rounded-full ${c.iconBg} flex items-center justify-center`}>
                  <svg className={`w-4 h-4 ${c.text}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                </div>
              </div>

              {/* Solución */}
              <div className={`${c.ghost} border ${c.border} rounded-xl p-4`}>
                <p className={`text-xs font-bold ${c.text} uppercase tracking-widest text-center mb-1 opacity-70`}>Solución</p>
                <p className={`text-xs font-semibold ${c.text} text-center mb-3`}>{project.solution.headline}</p>
                <ul className="space-y-1.5">
                  {project.solution.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full ${c.iconBg} flex items-center justify-center`}>
                        <svg className={`w-2.5 h-2.5 ${c.text}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-5 pt-4 border-t border-slate-100">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="tech-tag text-xs px-2.5 py-1 rounded-full font-medium bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 border border-transparent transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Mockup ── */}
        <div className="lg:w-[54%] bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-100 p-6 lg:p-8 flex items-center">
          <div className="w-full">
            <MockupStack
              mockups={project.mockups}
              mockupNodes={project.mockupNodes}
              color={project.color}
              icon={project.icon}
              flip={false}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const total = projects.length;

  const go = (d: 1 | -1) => {
    setDir(d);
    setActive((i) => (i + d + total) % total);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const showContactHint = active >= 2;

  return (
    <section id="projects" className="py-24 bg-white leaf-border">
      <div className="max-w-[1400px] mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-emerald-600 tracking-widest uppercase">
            Proyectos
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
            Problemas reales,{" "}
            <span className="gradient-text">soluciones reales</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Cada proyecto nació de una necesidad concreta. Explorá el problema original y cómo lo resolví.
          </p>
        </motion.div>

        {/* Card container */}
        <div className="relative">
          <div className="grid overflow-hidden">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                style={{ gridArea: "1/1" }}
                animate={{
                  opacity: i === active ? 1 : 0,
                  x: i === active ? 0 : dir > 0 ? -60 : 60,
                  pointerEvents: i === active ? "auto" : "none",
                }}
                transition={{ duration: 0.35, ease: [0.32, 0, 0.16, 1] }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </div>

          {/* Contact hint — floats to the right of the card */}
          <AnimatePresence>
            {showContactHint && (
              <motion.button
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                exit={{ opacity: 0, x: 30 }}
                transition={{
                  opacity: { duration: 0.6, ease: "easeOut" },
                  x: { duration: 0.6, ease: "easeOut" },
                  y: { delay: 0.6, duration: 1.4, repeat: Infinity, ease: "easeInOut" },
                }}
                onClick={scrollToContact}
                className="absolute -right-48 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 cursor-pointer group hidden xl:flex"
              >
                <span className="text-sm font-semibold text-white bg-emerald-800 px-4 py-2 rounded-full whitespace-nowrap shadow-md group-hover:bg-emerald-900 transition-colors">
                  Contactarme
                </span>
                <svg className="w-7 h-7 text-emerald-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-2">
          {/* Prev */}
          <button
            onClick={() => go(-1)}
            disabled={active === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-500 hover:border-emerald-400 hover:text-emerald-700 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Anterior
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > active ? 1 : -1); setActive(i); }}
                className={`rounded-full transition-all duration-200 cursor-pointer ${i === active ? "w-6 h-2 bg-emerald-500" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`}
              />
            ))}
          </div>

          {/* Right side: next + optional contact */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(1)}
              disabled={active === total - 1}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-500 hover:border-emerald-400 hover:text-emerald-700 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              Siguiente
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
