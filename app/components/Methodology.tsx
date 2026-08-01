"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  ClipboardList,
  PenTool,
  Code2,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Reunión inicial",
    desc: "Escuchamos tu negocio, tus objetivos y qué te está frenando hoy.",
  },
  {
    icon: ClipboardList,
    title: "Análisis del negocio",
    desc: "Revisamos procesos, herramientas y oportunidades reales de mejora.",
  },
  {
    icon: PenTool,
    title: "Diseño de la solución",
    desc: "Planificamos arquitectura, experiencia y estrategia antes de escribir una línea de código.",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    desc: "Construimos con estándares profesionales, cuidando cada detalle.",
  },
  {
    icon: Rocket,
    title: "Implementación",
    desc: "Lanzamos en producción y conectamos todo con tus sistemas actuales.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte y mejora continua",
    desc: "Acompañamos, medimos resultados y seguimos optimizando.",
  },
];

export default function Methodology() {
  return (
    <section id="proceso" className="relative border-t border-white/10 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">
            Proceso
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Así trabajamos
          </h2>
        </motion.div>

        <div className="relative space-y-8">
          <div className="absolute left-6 top-3 h-[calc(100%-2rem)] w-px bg-white/10" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex items-start gap-6"
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ember/40 bg-graphite-soft">
                <step.icon className="h-5 w-5 text-ember" />
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <span className="text-xs font-semibold text-ember">
                  Paso {i + 1}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/#contacto"
            className="rounded-full bg-gradient-to-r from-ember to-ember-soft px-7 py-3.5 text-sm font-semibold text-graphite shadow-lg shadow-ember/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ember/40"
          >
            Agendar una reunión
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
