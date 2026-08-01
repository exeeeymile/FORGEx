"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUp, ArrowDown, Share2, MousePointerClick, Link as LinkIcon } from "lucide-react";

type Range = "7D" | "30D" | "90D";

const TRAFFIC: Record<Range, number[]> = {
  "7D": [40, 46, 44, 52, 58, 63, 70],
  "30D": [30, 35, 33, 40, 45, 50, 48, 55, 60, 58, 65, 70],
  "90D": [20, 25, 24, 30, 35, 33, 40, 45, 50, 55, 60, 65, 70, 75, 80],
};

const POSITION: Record<Range, number[]> = {
  "7D": [60, 55, 58, 50, 46, 42, 38],
  "30D": [70, 65, 68, 60, 58, 52, 55, 48, 45, 47, 40, 38],
  "90D": [80, 75, 78, 70, 68, 62, 65, 58, 55, 50, 48, 45, 42, 40, 38],
};

const CHANNELS = [
  { name: "Google Orgánico", icon: Search, sessions: "12.4K", ctr: "5.8%", trend: "+18%" },
  { name: "Redes Sociales", icon: Share2, sessions: "3.1K", ctr: "2.1%", trend: "+6%" },
  { name: "Directo", icon: LinkIcon, sessions: "1.8K", ctr: "—", trend: "+2%" },
  { name: "Referidos", icon: MousePointerClick, sessions: "940", ctr: "3.4%", trend: "-3%" },
];

function Sparkbars({ data, colorClass }: { data: number[]; colorClass: string }) {
  const max = Math.max(...data);
  return (
    <div className="flex h-10 items-end gap-[2px]">
      <AnimatePresence mode="wait">
        {data.map((v, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${(v / max) * 100}%` }}
            transition={{ duration: 0.35, delay: i * 0.02 }}
            className={`w-1.5 rounded-sm ${colorClass}`}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function SEODashboardDemo() {
  const [range, setRange] = useState<Range>("30D");

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-graphite-soft p-5">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-ember" />
          <span className="font-display text-sm font-semibold text-foreground">
            Dashboard de SEO
          </span>
        </div>
        <div className="flex gap-1">
          {(["7D", "30D", "90D"] as Range[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold transition-colors ${
                range === r ? "bg-ember text-graphite" : "bg-white/5 text-mist hover:bg-white/10"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-black/25 p-3">
          <p className="text-[10px] uppercase tracking-[0.1em] text-mist">Tráfico orgánico</p>
          <p className="mt-1 font-display text-lg font-bold text-foreground">18.4K</p>
          <p className="mb-2 flex items-center gap-1 text-[10px] font-semibold text-ember">
            <ArrowUp className="h-3 w-3" /> 24.3%
          </p>
          <Sparkbars data={TRAFFIC[range]} colorClass="bg-gradient-to-t from-ember to-ember-soft" />
        </div>
        <div className="rounded-xl border border-white/10 bg-black/25 p-3">
          <p className="text-[10px] uppercase tracking-[0.1em] text-mist">Posición promedio</p>
          <p className="mt-1 font-display text-lg font-bold text-foreground">4.2</p>
          <p className="mb-2 flex items-center gap-1 text-[10px] font-semibold text-ember">
            <ArrowDown className="h-3 w-3" /> Mejoró 38%
          </p>
          <Sparkbars data={POSITION[range]} colorClass="bg-white/25" />
        </div>
      </div>

      <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-mist">
        Rendimiento por canal
      </p>
      <div className="flex-1 space-y-1.5 overflow-y-auto">
        {CHANNELS.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5"
          >
            <c.icon className="h-3.5 w-3.5 shrink-0 text-ember" />
            <span className="flex-1 truncate text-xs text-foreground">{c.name}</span>
            <span className="text-[11px] text-mist">{c.sessions}</span>
            <span className="w-12 text-right text-[11px] text-mist">{c.ctr}</span>
            <span
              className={`w-10 text-right text-[10px] font-semibold ${
                c.trend.startsWith("-") ? "text-mist" : "text-ember"
              }`}
            >
              {c.trend}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
