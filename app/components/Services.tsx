"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Workflow, Brain, Search, LayoutDashboard, Check, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    desc: "Creamos sitios modernos, rápidos y optimizados para convertir visitantes en clientes.",
    benefits: ["Diseño profesional", "SEO optimizado", "Alto rendimiento", "Responsive"],
    cta: "Quiero mi sitio",
  },
  {
    icon: Workflow,
    title: "Automatización",
    desc: "Automatizamos procesos repetitivos para ahorrar tiempo y reducir errores.",
    benefits: ["Integraciones", "Flujos automáticos", "Ahorro de horas", "Escalable"],
    cta: "Automatizar mi empresa",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    desc: "Implementamos IA personalizada para atención, análisis y automatización.",
    benefits: ["Chatbots", "IA empresarial", "Automatización inteligente", "Integración con APIs"],
    cta: "Implementar IA",
  },
  {
    icon: Search,
    title: "SEO Técnico y Crecimiento",
    desc: "Hacemos que tu negocio aparezca primero cuando alguien te busca, con estrategia y datos.",
    benefits: ["Arquitectura web", "SEO local", "Keywords comerciales", "Optimización continua"],
    cta: "Mejorar mi posicionamiento",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & BI",
    desc: "Convertimos datos dispersos en paneles claros para tomar decisiones sin planillas a mano.",
    benefits: ["Métricas en tiempo real", "Reportes automáticos", "Visualización a medida", "Alertas"],
    cta: "Quiero mi dashboard",
  },
];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-shadow duration-300 hover:border-ember/40 hover:shadow-2xl hover:shadow-ember/10"
    >
      <motion.div
        whileHover={{ rotate: -8, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/15"
      >
        <service.icon className="h-6 w-6 text-ember" />
      </motion.div>

      <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-mist">{service.desc}</p>

      <ul className="mt-6 space-y-2">
        {service.benefits.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm text-mist">
            <Check className="h-3.5 w-3.5 shrink-0 text-ember" />
            {b}
          </li>
        ))}
      </ul>

      <Link
        href="/#contacto"
        className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-ember"
      >
        {service.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="relative border-t border-white/10 px-6 py-28 md:py-36">
      <div className="absolute right-0 top-1/3 -z-10 h-[480px] w-[480px] rounded-full bg-ember/10 blur-[160px]" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">
            Soluciones
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            No vendemos servicios.
            <br />
            Resolvemos lo que te frena.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            Más clientes, menos horas perdidas, procesos que se ejecutan
            solos. Elegí qué te está frenando hoy.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
