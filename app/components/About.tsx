import Reveal from "./Reveal";

const VALUES = [
  {
    title: "Aprendizaje constante",
    desc: "La tecnología cambia. Nosotros también. Nunca dejamos de mejorar.",
  },
  {
    title: "Honestidad",
    desc: "No prometemos cosas imposibles. Asesoramos buscando el verdadero beneficio del cliente.",
  },
  {
    title: "Calidad",
    desc: "Nuestro nombre está detrás de cada proyecto. Cada trabajo debe representar excelencia.",
  },
  {
    title: "Responsabilidad",
    desc: "Cumplimos nuestras promesas. La confianza se construye con hechos.",
  },
  {
    title: "Humildad",
    desc: "Nunca olvidamos nuestros comienzos. Empezamos desde abajo y respetamos cada cliente.",
  },
  {
    title: "Innovación",
    desc: "Buscamos nuevas formas de resolver problemas.",
  },
  {
    title: "Mejora continua",
    desc: "Cada proyecto debe superar al anterior.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
              Misión
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Diseñar y desarrollar infraestructura digital de alto
              rendimiento que ayude a las empresas a aumentar ventas, captar
              clientes, automatizar procesos, reducir tareas manuales,
              mejorar su presencia digital y prepararse para escalar.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
              Visión
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Convertirnos en una empresa tecnológica reconocida en
              Latinoamérica por crear soluciones digitales de excelencia:
              calidad, confianza, innovación, resultados y relaciones de
              largo plazo.
            </p>
          </div>
        </Reveal>

        <Reveal
          stagger={0.06}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <h3 className="font-display font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-mist">{value.desc}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="relative mt-16 rounded-3xl border border-ember/30 bg-white/5 p-8 backdrop-blur-md sm:p-12">
          <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-ember/15 blur-[100px]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            Manifiesto
          </p>
          <blockquote className="mt-6 space-y-4 font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            <p>
              Creemos que la tecnología debe ser una ventaja competitiva, no
              una dificultad.
            </p>
            <p>
              Construimos infraestructura digital con la misma mentalidad con
              la que se construyen grandes obras: planificación, precisión y
              mejora constante.
            </p>
            <p>No buscamos crear soluciones pasajeras.</p>
            <p>Construimos bases digitales preparadas para crecer.</p>
            <p>
              Somos FORGEX. Forjamos el futuro digital de las empresas.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
