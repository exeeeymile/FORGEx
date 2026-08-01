"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Workflow,
  TrendingUp,
  Plug,
  Brain,
  LifeBuoy,
} from "lucide-react";

const REASONS = [
  { icon: Sparkles, title: "Soluciones a medida", desc: "Nada de plantillas genéricas: construimos para tu negocio." },
  { icon: Workflow, title: "Automatización inteligente", desc: "Menos tareas manuales, más tiempo para lo que importa." },
  { icon: TrendingUp, title: "Desarrollo escalable", desc: "Bases sólidas que crecen con vos, no que te frenan después." },
  { icon: Plug, title: "Integraciones API", desc: "Conectamos tus herramientas para que trabajen juntas." },
  { icon: Brain, title: "Inteligencia Artificial", desc: "IA aplicada a problemas reales, no como moda." },
  { icon: LifeBuoy, title: "Soporte continuo", desc: "No desaparecemos después de la entrega." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative border-t border-white/10 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">
            Por qué FORGEX
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            ¿Por qué elegir FORGEX?
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-ember/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember/15">
                <reason.icon className="h-5 w-5 text-ember" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-mist">
                  {reason.desc}
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
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-ember/40"
          >
            Solicitar una propuesta
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
