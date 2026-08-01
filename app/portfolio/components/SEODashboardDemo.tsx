"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";

type Range = "7D" | "30D" | "90D";

const DATA: Record<Range, number[]> = {
  "7D": [40, 46, 44, 52, 58, 63, 70],
  "30D": [30, 35, 33, 40, 45, 50, 48, 55, 60, 58, 65, 70],
  "90D": [20, 25, 24, 30, 35, 33, 40, 45, 50, 55, 60, 65, 70, 75, 80],
};

const KEYWORDS = [
  { term: "desarrollo web argentina", pos: 3, change: 4 },
  { term: "automatización pymes", pos: 7, change: 2 },
  { term: "agencia infraestructura digital", pos: 1, change: 0 },
  { term: "seo técnico buenos aires", pos: 5, change: -1 },
];

export default function SEODashboardDemo() {
  const [range, setRange] = useState<Range>("30D");
  const data = DATA[range];
  const max = Math.max(...data);

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-graphite-soft p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-ember" />
          <span className="font-display text-sm font-semibold text-foreground">
            Dashboard de SEO
          </span>
        </div>
        <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-mist">
          Muestra
        </span>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-mist">
          <TrendingUp className="h-3.5 w-3.5 text-ember" />
          <span className="text-[11px]">Tráfico orgánico</span>
        </div>
        <div className="flex gap-1">
          {(["7D", "30D", "90D"] as Range[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors ${
                range === r
                  ? "bg-ember text-graphite"
                  : "bg-white/5 text-mist hover:bg-white/10"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 flex h-24 items-end gap-1 rounded-xl border border-white/10 bg-black/20 p-3">
        <AnimatePresence mode="wait">
          {data.map((v, i) => (
            <motion.div
              key={`${range}-${i}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `${(v / max) * 100}%`, opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="flex-1 rounded-sm bg-gradient-to-t from-ember to-ember-soft"
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="flex-1 space-y-1.5 overflow-hidden">
        <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.1em] text-mist">
          Keywords posicionadas
        </p>
        {KEYWORDS.map((k) => (
          <div
            key={k.term}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-1.5"
          >
            <span className="truncate text-xs text-foreground">{k.term}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-mist">#{k.pos}</span>
              {k.change !== 0 && (
                <span
                  className={`flex items-center text-[10px] font-semibold ${
                    k.change > 0 ? "text-ember" : "text-mist"
                  }`}
                >
                  {k.change > 0 ? (
                    <ArrowUp className="h-3 w-3" />
                  ) : (
                    <ArrowDown className="h-3 w-3" />
                  )}
                  {Math.abs(k.change)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
