import Reveal from "./Reveal";

const SERVICES = [
  {
    tag: "01",
    title: "Desarrollo Web orientado a conversión",
    desc: "No hacemos páginas bonitas solamente. Creamos sistemas digitales que convierten visitantes en clientes.",
    items: [
      "Diseño estratégico",
      "Mobile-first",
      "Alta velocidad",
      "UX/UI",
      "SEO técnico",
      "Analítica",
    ],
  },
  {
    tag: "02",
    title: "Automatización e Integraciones",
    desc: "Conectamos herramientas para mejorar eficiencia y reducir trabajo manual.",
    items: [
      "CRM",
      "ERP",
      "WhatsApp",
      "Sistemas internos",
      "Pasarelas de pago",
      "Inventarios",
      "APIs",
      "Inteligencia artificial",
    ],
  },
  {
    tag: "03",
    title: "SEO Técnico y Crecimiento",
    desc: "No buscamos tráfico vacío. Buscamos clientes potenciales.",
    items: [
      "Arquitectura web",
      "Velocidad",
      "Indexación",
      "Keywords comerciales",
      "SEO local",
      "Optimización continua",
    ],
  },
  {
    tag: "04",
    title: "Dashboards y Business Intelligence",
    desc: "Convertimos datos dispersos en paneles claros para que tomes decisiones sin armar planillas a mano.",
    items: [
      "Métricas en tiempo real",
      "Integración con tus herramientas",
      "Reportes automáticos",
      "Visualización a medida",
      "Alertas",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative border-t border-white/10 px-6 py-24">
      <div className="absolute right-0 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-ember/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            Servicios
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Infraestructura, no plantillas
          </h2>
        </Reveal>

        <Reveal stagger={0.12} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.tag}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:-translate-y-2 hover:border-ember/40"
            >
              <span className="font-display text-sm font-bold text-ember">
                {service.tag}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                {service.desc}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist transition-colors group-hover:border-ember/30 group-hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
