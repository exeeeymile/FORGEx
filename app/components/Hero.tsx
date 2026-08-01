"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="inicio" className="flex h-screen w-full items-center justify-center bg-graphite">
      {/* Full-bleed: sin padding ni bordes redondeados, el video cubre todo el ancho/alto */}
      <section className="group relative flex h-full w-full flex-col items-center overflow-hidden bg-graphite-soft">
        {/* 1. CAPA DE FONDO: video limpio, sin eventos de puntero */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-none select-none contrast-[1.05] saturate-[1.1]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Capa de contraste liviana para legibilidad del texto */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-graphite/75 via-graphite/15 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-graphite/70 to-transparent" />

        {/* Tapa cualquier watermark de la herramienta de generación de video en las esquinas inferiores */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-[1] h-24 w-44 bg-gradient-to-tl from-graphite via-graphite/70 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 z-[1] h-24 w-44 bg-gradient-to-tr from-graphite via-graphite/70 to-transparent" />

        {/* En vez de dejar el parche vacío, ponemos nuestro propio watermark justo ahí */}
        <div className="pointer-events-none absolute bottom-4 right-5 z-[2] select-none font-display text-sm font-semibold tracking-tight text-white/40">
          FORGE<span className="text-ember/50">X</span>
        </div>

        {/* 2. CAPA DE INTERFAZ: todo el contenido clickeable vive en z-10 */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between pointer-events-auto px-6 py-24">
          <div />

          {/* Bloque central de texto y botones, con una leve flotación continua */}
          <motion.div
            className="flex w-full max-w-3xl flex-col items-center text-center"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block rounded-full border border-white/15 bg-black/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-mist backdrop-blur-sm"
            >
              Infraestructura digital &middot; Automatización &middot; IA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[76px]"
            >
              Forjamos el futuro digital de las{" "}
              <span className="text-gradient-ember">empresas</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist"
            >
              No vendemos páginas web. Construimos infraestructura digital que
              ayuda a tu empresa a vender más, automatizar procesos y crecer
              con bases sólidas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ember to-ember-soft px-7 py-3.5 text-sm font-semibold text-graphite shadow-lg shadow-ember/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ember/40"
              >
                Empecemos un proyecto
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
              >
                Ver servicios
              </a>
            </motion.div>
          </motion.div>

          {/* Tarjetas inferiores */}
          <div className="flex w-full items-end justify-between">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="hidden items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-md sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
              </span>
              <span className="text-xs font-medium text-mist">
                Abiertos a nuevos proyectos
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="rounded-2xl border border-white/15 bg-black/35 p-6 text-right shadow-2xl shadow-black/40 backdrop-blur-md"
            >
              <p className="font-display text-xl font-semibold leading-snug text-foreground">
                Desarrollo Web.
                <br />
                Automatización.
                <br />
                SEO Técnico.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
