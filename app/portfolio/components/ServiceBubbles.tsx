"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Code2, LayoutDashboard, Search } from "lucide-react";

const SERVICES = [
  {
    id: "web",
    label: "Web",
    icon: Globe,
    explainer:
      "Una página web es la vidriera de tu negocio, abierta las 24 horas. Sirve para que te encuentren en Google, generar confianza y que un cliente nuevo te elija a vos y no a la competencia.",
  },
  {
    id: "api",
    label: "API",
    icon: Code2,
    explainer:
      "Una API conecta tus sistemas entre sí — tu web con WhatsApp, tu stock con tu facturación — para que la información viaje sola, sin que nadie tenga que pasarla a mano de un lado a otro.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    explainer:
      "Un dashboard te muestra en una sola pantalla cómo le va a tu negocio — ventas, clientes, lo que sea — en vez de andar buscando números sueltos en diez planillas distintas.",
  },
  {
    id: "seo",
    label: "SEO",
    icon: Search,
    explainer:
      "El SEO hace que tu negocio aparezca primero cuando alguien te busca en Google. Por más linda que sea tu web, si no aparece ahí, nadie la encuentra.",
  },
];

export default function ServiceBubbles() {
  const [active, setActive] = useState<string | null>(null);
  const activeService = SERVICES.find((s) => s.id === active);

  return (
    <div className="mx-auto mt-20 max-w-5xl">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ember">
        ¿Qué es cada cosa?
      </p>

      <div className="flex gap-4 overflow-x-auto px-2 pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SERVICES.map((service, i) => {
          const isActive = active === service.id;
          return (
            <motion.button
              key={service.id}
              onClick={() => setActive(isActive ? null : service.id)}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              whileTap={{ scale: 0.94 }}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 backdrop-blur-md transition-colors ${
                isActive
                  ? "border-ember/50 bg-ember/15"
                  : "border-white/15 bg-white/5 hover:bg-white/10"
              }`}
            >
              <service.icon
                className={`h-4 w-4 ${isActive ? "text-ember" : "text-mist"}`}
              />
              <span
                className={`font-display text-sm font-semibold ${
                  isActive ? "text-foreground" : "text-mist"
                }`}
              >
                {service.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeService && (
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <p className="text-base leading-relaxed text-foreground">
                {activeService.explainer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeService && (
        <p className="mt-2 text-center text-sm text-mist">
          Tocá una burbuja para que te lo expliquemos en criollo.
        </p>
      )}
    </div>
  );
}
