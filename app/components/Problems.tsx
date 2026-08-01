import Reveal from "./Reveal";

const PROBLEMS = [
  "Sitios web lentos",
  "Pocos clientes provenientes de internet",
  "Procesos manuales repetitivos",
  "Sistemas desconectados entre sí",
  "Falta de información para tomar decisiones",
  "Mala presencia digital",
  "Falta de automatización",
];

export default function Problems() {
  return (
    <section className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            El problema
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Problemas que frenan el crecimiento
          </h2>
          <p className="mt-4 text-mist">
            La mayoría de las empresas no tienen un problema de esfuerzo.
            Tienen un problema de infraestructura digital.
          </p>
        </Reveal>

        <Reveal
          stagger={0.08}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROBLEMS.map((problem) => (
            <div
              key={problem}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-ember/40"
            >
              <span className="mb-4 block h-2 w-2 rounded-full bg-ember transition-transform group-hover:scale-150" />
              <p className="font-medium text-foreground">{problem}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
