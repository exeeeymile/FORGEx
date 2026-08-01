"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Users, TrendingUp, RefreshCw, Check } from "lucide-react";

const POOLS = [
  { name: "WhatsApp", value: "1.240 msjs/mes", trend: "+18%" },
  { name: "CRM", value: "312 leads/mes", trend: "+9%" },
  { name: "Facturación", value: "98% automatizada", trend: "+4%" },
];

export default function AutomationDashboardDemo() {
  const [syncing, setSyncing] = useState(false);
  const [synced, setSynced] = useState(false);

  const handleSync = () => {
    setSyncing(true);
    setSynced(false);
    setTimeout(() => {
      setSyncing(false);
      setSynced(true);
      setTimeout(() => setSynced(false), 2000);
    }, 1200);
  };

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-graphite-soft p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-ember" />
          <span className="font-display text-sm font-semibold text-foreground">
            Panel de Automatización
          </span>
        </div>
        <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-mist">
          Concepto
        </span>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
          <div className="mb-1 flex items-center gap-1.5 text-mist">
            <Users className="h-3.5 w-3.5" />
            <span className="text-[11px]">Clientes activos</span>
          </div>
          <p className="font-display text-xl font-bold text-foreground">248</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
          <div className="mb-1 flex items-center gap-1.5 text-mist">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="text-[11px]">Horas ahorradas</span>
          </div>
          <p className="font-display text-xl font-bold text-foreground">63/mes</p>
        </div>
      </div>

      <div className="flex-1 space-y-2 rounded-xl border border-white/10 bg-black/20 p-3">
        <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.1em] text-mist">
          Integraciones
        </p>
        {POOLS.map((pool) => (
          <div
            key={pool.name}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2"
          >
            <span className="text-xs text-foreground">{pool.name}</span>
            <span className="text-xs text-mist">{pool.value}</span>
            <span className="text-xs font-medium text-ember">{pool.trend}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleSync}
        disabled={syncing}
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ember to-ember-soft px-4 py-2.5 text-sm font-semibold text-graphite transition-transform hover:scale-[1.02] disabled:opacity-70"
      >
        <AnimatePresence mode="wait">
          {synced ? (
            <motion.span
              key="done"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2"
            >
              <Check className="h-4 w-4" /> Sincronizado
            </motion.span>
          ) : (
            <motion.span
              key="sync"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${syncing ? "animate-spin" : ""}`} />
              {syncing ? "Sincronizando..." : "Sincronizar integraciones"}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
