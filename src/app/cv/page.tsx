"use client";

export default function CV() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #e8e8e8; }

        .page {
          width: 210mm;
          min-height: 297mm;
          margin: 20px auto;
          background: white;
          display: grid;
          grid-template-columns: 64mm 1fr;
          box-shadow: 0 4px 32px rgba(0,0,0,0.18);
        }

        /* ── SIDEBAR ── */
        .sidebar {
          background: #1a2e06;
          color: white;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .photo-wrap { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .photo { width: 88px; height: 88px; border-radius: 50%; object-fit: cover; object-position: center 10%; border: 3px solid #6d9228; }

        .name-block { text-align: center; }
        .name-block h1 { font-size: 13px; font-weight: 700; color: white; line-height: 1.3; }
        .name-block p { font-size: 9.5px; color: #96b852; font-weight: 500; margin-top: 3px; }

        .divider { width: 100%; height: 1px; background: rgba(150,184,82,0.22); }

        .section-label { font-size: 8px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase; color: #6d9228; margin-bottom: 8px; }

        .contact-list { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .contact-list li { display: flex; align-items: flex-start; gap: 6px; font-size: 8.5px; color: #c8d8a8; line-height: 1.35; }
        .contact-list li .icon { width: 11px; height: 11px; flex-shrink: 0; margin-top: 1px; color: #6d9228; }

        .skills-list { display: flex; flex-direction: column; gap: 3px; }
        .skill-row { font-size: 8.5px; color: #c8d8a8; padding: 2px 0; display: flex; align-items: center; gap: 5px; }
        .skill-row::before { content: ""; width: 4px; height: 4px; border-radius: 50%; background: #6d9228; flex-shrink: 0; }

        .tag-cloud { display: flex; flex-wrap: wrap; gap: 4px; }
        .tag { font-size: 7.5px; padding: 2px 6px; border-radius: 99px; background: rgba(109,146,40,0.18); border: 1px solid rgba(109,146,40,0.35); color: #c8d8a8; font-weight: 500; }

        .lang-list { list-style: none; display: flex; flex-direction: column; gap: 4px; }
        .lang-list li { font-size: 8.5px; color: #c8d8a8; display: flex; justify-content: space-between; }
        .lang-list li span:last-child { color: #6d9228; font-weight: 600; }

        /* ── MAIN ── */
        .main { padding: 28px 24px 22px; display: flex; flex-direction: column; gap: 16px; }

        .main-section-title { font-size: 10px; font-weight: 700; letter-spacing: 1.1px; text-transform: uppercase; color: #1a2e06; padding-bottom: 4px; border-bottom: 2px solid #c5d99a; margin-bottom: 9px; }

        .summary p { font-size: 8.5px; color: #475569; line-height: 1.6; }
        .summary strong { color: #1a2e06; font-weight: 600; }

        .projects-grid { display: flex; flex-direction: column; gap: 7px; }

        .project-card { border: 1px solid #e2e8f0; border-left: 3px solid #6d9228; border-radius: 4px; padding: 7px 10px; }

        .project-header { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; margin-bottom: 2px; }
        .project-title { font-size: 9.5px; font-weight: 700; color: #1e293b; }
        .project-cat { font-size: 7px; font-weight: 600; color: #6d9228; background: #f2f6e8; padding: 1px 5px; border-radius: 99px; white-space: nowrap; }
        .project-sub { font-size: 8px; color: #64748b; margin-bottom: 3px; font-style: italic; }
        .project-desc { font-size: 8px; color: #475569; line-height: 1.45; margin-bottom: 5px; }

        .project-tags { display: flex; flex-wrap: wrap; gap: 3px; }
        .project-tag { font-size: 7px; padding: 1px 5px; background: #f1f5f9; color: #475569; border-radius: 99px; font-weight: 500; }

        .edu-item { display: flex; gap: 9px; margin-bottom: 8px; }
        .edu-dot { width: 8px; height: 8px; border-radius: 50%; background: #6d9228; flex-shrink: 0; margin-top: 2px; }
        .edu-title { font-size: 9.5px; font-weight: 700; color: #1e293b; }
        .edu-org { font-size: 8.5px; color: #64748b; margin-top: 1px; }
        .edu-year { font-size: 7.5px; color: #94a3b8; margin-top: 1px; }

        @media print {
          body { background: white; }
          .page { margin: 0; box-shadow: none; width: 100%; }
          .no-print { display: none !important; }
        }

        .print-btn {
          position: fixed; bottom: 24px; right: 24px; background: #1a2e06; color: white;
          border: none; padding: 10px 18px; border-radius: 99px; font-size: 12px;
          font-weight: 600; cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          font-family: 'Inter', sans-serif; display: flex; align-items: center; gap: 7px; z-index: 100;
        }
        .print-btn:hover { background: #2b3d07; }
      `}</style>

      <button className="print-btn no-print" onClick={() => window.print()}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 6 2 18 2 18 9"/>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
          <rect width="12" height="8" x="6" y="14"/>
        </svg>
        Imprimir / PDF
      </button>

      <div className="page">
        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          <div className="photo-wrap">
            <img src="/images/projects/photo.jpg" alt="Jeremías Uriel Tesio" className="photo" />
            <div className="name-block">
              <h1>Jeremías Uriel<br />Tesio</h1>
              <p>Full Stack Dev · IA · ERP</p>
            </div>
          </div>

          <div className="divider" />

          <div>
            <p className="section-label">Contacto</p>
            <ul className="contact-list">
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +549 358 490-3033
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                urieltesio@gmail.com
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                jeremias-uriel-tesio
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                github.com/urielssan
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Rosario, SF · Remoto / Presencial
              </li>
            </ul>
          </div>

          <div className="divider" />

          <div>
            <p className="section-label">Habilidades</p>
            <div className="skills-list">
              {["Python", "React / Next.js", "FastAPI / Flask", "PostgreSQL / MySQL", "TypeScript", "Docker / Linux", "OpenAI / LLMs", "Scrapping (Selenium / BS4)", "CI/CD (GitHub Actions)", "Infraestructura (VPS / Nginx)"].map((s) => (
                <div key={s} className="skill-row">{s}</div>
              ))}
            </div>
          </div>

          <div className="divider" />

          <div>
            <p className="section-label">Herramientas</p>
            <div className="tag-cloud">
              {["Git", "GitHub", "Docker", "Linux", "Postman", "ManyChat", "WhatsApp API", "Zebra ZPL", "OpenAI API"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="divider" />

          <div>
            <p className="section-label">Idiomas</p>
            <ul className="lang-list">
              <li><span>Español</span><span>Nativo</span></li>
              <li><span>Inglés</span><span>Intermedio</span></li>
            </ul>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="main">
          <section className="summary">
            <p className="main-section-title">Perfil Profesional</p>
            <p>
              Desarrollador <strong>Full Stack + IA</strong> especializado en sistemas de gestión (ERP), agentes inteligentes
              y automatizaciones. Trabajo con <strong>Python, React y FastAPI</strong> para digitalizar procesos e integrar
              hardware industrial. Cursando la <strong>Tecnicatura en IA</strong> en la UNR. Disponible para proyectos
              freelance, posiciones full-time o consultas, remoto o presencial en Rosario.
            </p>
          </section>

          <section>
            <p className="main-section-title">Experiencia</p>
            <div className="edu-item">
              <div className="edu-dot" />
              <div>
                <p className="edu-title">Desarrollador Full Stack — FGV</p>
                <p className="edu-org">Desarrollo y mantenimiento de sistemas internos</p>
                <p className="edu-year">Enero 2025 – presente · Presencial / Rosario</p>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-dot" style={{ background: "#94a3b8" }} />
              <div>
                <p className="edu-title">Desarrollador Freelance</p>
                <p className="edu-org">ERP, automatizaciones, agentes IA y sistemas a medida</p>
                <p className="edu-year">2023 · Remoto</p>
              </div>
            </div>
          </section>

          <section>
            <p className="main-section-title">Proyectos Destacados</p>
            <div className="projects-grid">
              {[
                {
                  title: "ERP Gastronómica",
                  cat: "ERP",
                  sub: "Sistema Central de Gestión Multi-Local",
                  desc: "Digitalizó el 100% de las operaciones: stock por sucursal con traslados entre locales, caja automática diaria, reportes de trazabilidad para inspecciones municipales y dashboard de ventas por producto y medio de pago.",
                  tags: ["Python", "Flask", "React", "MySQL", "RBAC", "ZPL"],
                },
                {
                  title: "Grasa — ERP + Chatbot IA",
                  cat: "SaaS + IA",
                  sub: "ERP para Bicicleterías con NL-to-SQL",
                  desc: "Sistema unificado de ventas, reparaciones, stock y caja. Chatbot IA con NL-to-SQL que responde consultas en lenguaje natural sobre PostgreSQL: '¿cuánto vendí esta semana?' → respuesta inmediata.",
                  tags: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI", "NL-to-SQL"],
                },
                {
                  title: "ZPL Automator",
                  cat: "Industrial",
                  sub: "Automatización de Etiquetas Industriales",
                  desc: "Generación masiva de etiquetas ZPL para impresoras Zebra con previsualización en PDF antes de imprimir. Plantillas configurables sin conocimiento técnico y gestión de catálogo de productos e ingredientes.",
                  tags: ["Python", "Flask", "ZPL", "Zebra", "PDF", "React"],
                },
                {
                  title: "Scrapper de Competencia",
                  cat: "Data & IA",
                  sub: "Monitoreo Automático de Precios",
                  desc: "Scrapper automatizado que releva precios de competidores diariamente, dashboard con evolución histórica y alertas automáticas por WhatsApp ante variaciones relevantes de precio.",
                  tags: ["Python", "Selenium", "BeautifulSoup", "React", "WhatsApp API"],
                },
                {
                  title: "Elena — Vendedora IA",
                  cat: "IA + Bots",
                  sub: "Agente de Ventas por WhatsApp 24/7",
                  desc: "Agente conversacional que gestiona el ciclo completo de ventas: catálogo dinámico, procesamiento de pedidos, cierre automático y notificación al equipo. Opera sin intervención humana.",
                  tags: ["ManyChat", "WhatsApp API", "OpenAI", "Python"],
                },
                {
                  title: "Sorteo Invisible",
                  cat: "SaaS",
                  sub: "Plataforma de Amigo Invisible",
                  desc: "App web para organizar sorteos de amigo invisible: registro de participantes, sorteo automático sin conflictos y envío de emails personalizados a cada participante.",
                  tags: ["React", "Next.js", "Python", "FastAPI", "Email API"],
                },
              ].map((p) => (
                <div key={p.title} className="project-card">
                  <div className="project-header">
                    <span className="project-title">{p.title}</span>
                    <span className="project-cat">{p.cat}</span>
                  </div>
                  <p className="project-sub">{p.sub}</p>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="main-section-title">Educación</p>
            <div className="edu-item">
              <div className="edu-dot" />
              <div>
                <p className="edu-title">Tecnicatura en Inteligencia Artificial</p>
                <p className="edu-org">Universidad Nacional de Rosario (UNR)</p>
                <p className="edu-year">2023 – En curso · Rosario, Santa Fe</p>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-dot" style={{ background: "#94a3b8" }} />
              <div>
                <p className="edu-title">Formación Autodidacta en Desarrollo Web</p>
                <p className="edu-org">Python, React, FastAPI, Docker, OpenAI API · Proyectos reales</p>
                <p className="edu-year">2022 – presente</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
