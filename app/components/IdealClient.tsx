import Reveal from "./Reveal";

const TRAITS = [
  "Ya tienen clientes",
  "Quieren crecer",
  "Valoran la tecnología",
  "Necesitan mejorar procesos",
  "Buscan un socio tecnológico",
];

const SEGMENTS = ["PYMES", "Empresas de servicios", "Industrias", "Negocios en crecimiento"];

export default function IdealClient() {
  return (
    <section className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            Cliente ideal
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Empresas listas para crecer
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal stagger={0.08} className="space-y-3">
            {TRAITS.map((trait) => (
              <div
                key={trait}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember" />
                <span className="text-foreground">{trait}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="flex flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mist">
              Principalmente
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SEGMENTS.map((segment) => (
                <span
                  key={segment}
                  className="rounded-full border border-ember/30 px-4 py-2 text-sm font-medium text-foreground"
                >
                  {segment}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
