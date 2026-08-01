import Reveal from "./Reveal";

const MONTHLY_ITEMS = [
  "Mantenimiento",
  "Seguridad",
  "Optimización",
  "SEO",
  "Mejoras",
  "Automatizaciones",
  "Soporte",
];

export default function BusinessModel() {
  return (
    <section className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            Modelo de negocio
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Relaciones de largo plazo, no proyectos sueltos
          </h2>
        </Reveal>

        <Reveal stagger={0.12} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
              Fase 1
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
              Implementación inicial
            </h3>
            <p className="mt-3 text-mist">
              Proyecto con objetivos claros: la infraestructura digital que tu
              empresa necesita, construida desde cero con estrategia.
            </p>
          </div>

          <div className="rounded-3xl border border-ember/30 bg-white/5 p-8 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
              Fase 2
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
              Servicio mensual
            </h3>
            <p className="mt-3 text-mist">Abono recurrente que incluye:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {MONTHLY_ITEMS.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
