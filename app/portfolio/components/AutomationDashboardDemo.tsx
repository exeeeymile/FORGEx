"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, DollarSign, Zap, Users, Star, RefreshCw, Check } from "lucide-react";

const TILES = [
  { label: "Ingresos", value: "$1.2M", icon: DollarSign },
  { label: "Tareas auto.", value: "1.4K", icon: Zap },
  { label: "Clientes", value: "248", icon: Users },
  { label: "Satisfacción", value: "4.8", icon: Star },
];

const WAVE_PATH =
  "M0,32 C 20,10 35,45 55,28 C 75,12 90,38 110,22 C 130,8 145,30 160,18";

export default function AutomationDashboardDemo() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSync = () => {
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 1800);
    }, 1000);
  };

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-graphite-soft p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-ember/20">
            <User className="h-3.5 w-3.5 text-ember" />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              Panel de Automatización
            </p>
          </div>
        </div>
        <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-mist">
          Concepto
        </span>
      </div>

      <div className="mb-4 grid grid-cols-4 gap-2">
        {TILES.map((tile) => (
          <div
            key={tile.label}
            className="flex flex-col items-center rounded-xl border border-white/10 bg-black/25 p-2 text-center"
          >
            <tile.icon className="mb-1 h-3.5 w-3.5 text-ember" />
            <p className="font-display text-sm font-bold text-foreground">{tile.value}</p>
            <p className="text-[9px] text-mist">{tile.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/25 p-3">
          <div
            className="relative flex h-16 w-16 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(#ff6b1a 0% 68%, rgba(255,255,255,0.08) 68% 100%)`,
            }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-graphite-soft">
              <span className="font-display text-xs font-bold text-foreground">68%</span>
            </div>
          </div>
          <p className="mt-2 text-[10px] text-mist">Procesos automatizados</p>
        </div>

        <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-black/25 p-3">
          <p className="mb-1 text-[10px] text-mist">Actividad semanal</p>
          <svg viewBox="0 0 160 44" className="h-10 w-full">
            <motion.path
              d={WAVE_PATH}
              fill="none"
              stroke="#ff6b1a"
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </svg>
        </div>
      </div>

      <button
        onClick={handleSync}
        disabled={status === "sending"}
        className="mt-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ember to-ember-soft px-4 py-2.5 text-sm font-semibold text-graphite transition-transform hover:scale-[1.02] disabled:opacity-70"
      >
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.span
              key="done"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2"
            >
              <Check className="h-4 w-4" /> Sincronizado
            </motion.span>
          ) : (
            <motion.span key="sync" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
              <RefreshCw className={`h-4 w-4 ${status === "sending" ? "animate-spin" : ""}`} />
              {status === "sending" ? "Sincronizando..." : "Sincronizar integraciones"}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
