"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Play, Loader2, Monitor, Cloud, Settings, Server, Database } from "lucide-react";

const ENDPOINTS = [
  {
    method: "GET",
    path: "/api/clientes",
    response: `{\n  "clientes": 248,\n  "activos": 231,\n  "pais": "AR"\n}`,
  },
  {
    method: "POST",
    path: "/api/leads",
    response: `{\n  "id": "ld_9f21",\n  "estado": "nuevo",\n  "origen": "whatsapp"\n}`,
  },
  {
    method: "GET",
    path: "/api/pagos/estado",
    response: `{\n  "pendientes": 3,\n  "confirmados": 57,\n  "moneda": "ARS"\n}`,
  },
];

const METHOD_COLOR: Record<string, string> = {
  GET: "text-ember",
  POST: "text-ember-soft",
};

const FLOW_STEPS = [
  { icon: Monitor, label: "Consumidor" },
  { icon: Cloud, label: "Internet" },
  { icon: Settings, label: "API" },
  { icon: Server, label: "Servidor" },
  { icon: Database, label: "Base de datos" },
];

export default function APIExplorerDemo() {
  const [selected, setSelected] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleRun = () => {
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1000);
  };

  const endpoint = ENDPOINTS[selected];

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-graphite-soft p-5">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-ember" />
          <span className="font-display text-sm font-semibold text-foreground">
            Explorador de APIs
          </span>
        </div>
        <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-mist">
          Muestra
        </span>
      </div>

      <div className="relative mb-3 rounded-xl border border-white/10 bg-black/25 px-3 pb-3 pt-4">
        <div className="absolute left-[10%] right-[10%] top-[26px] h-px bg-white/10" />
        <motion.div
          className="absolute top-[23px] h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_rgba(255,107,26,0.8)]"
          style={{ left: "10%" }}
          animate={
            status !== "idle"
              ? { left: ["10%", "90%"] }
              : { left: "10%" }
          }
          transition={{ duration: 1, ease: "linear" }}
        />
        <div className="relative flex justify-between">
          {FLOW_STEPS.map((step) => (
            <div key={step.label} className="flex flex-col items-center gap-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-graphite-soft">
                <step.icon className="h-3 w-3 text-mist" />
              </div>
              <span className="text-[8px] leading-none text-mist">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-3 space-y-1.5">
        {ENDPOINTS.map((ep, i) => (
          <button
            key={ep.path}
            onClick={() => {
              setSelected(i);
              setStatus("idle");
            }}
            className={`flex w-full items-center gap-2 rounded-lg border px-3 py-1.5 text-left text-xs transition-colors ${
              selected === i
                ? "border-ember/40 bg-ember/10"
                : "border-white/10 bg-white/5 hover:bg-white/10"
            }`}
          >
            <span className={`font-mono text-[10px] font-bold ${METHOD_COLOR[ep.method]}`}>
              {ep.method}
            </span>
            <span className="truncate font-mono text-mist">{ep.path}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 rounded-xl border border-white/10 bg-black/30 p-3 font-mono">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.p
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11px] text-mist"
            >
              Elegí un endpoint y tocá &quot;Probar&quot; para ver la respuesta.
            </motion.p>
          )}
          {status === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-[11px] text-mist"
            >
              <Loader2 className="h-3.5 w-3.5 animate-spin" /> Enviando request...
            </motion.div>
          )}
          {status === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-ember/20 px-1.5 py-0.5 text-[10px] font-bold text-ember">
                  200 OK
                </span>
                <span className="text-[10px] text-mist">124ms</span>
              </div>
              <pre className="whitespace-pre-wrap text-[11px] text-foreground">
                {endpoint.response}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={handleRun}
        disabled={status === "loading"}
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ember to-ember-soft px-4 py-2.5 text-sm font-semibold text-graphite transition-transform hover:scale-[1.02] disabled:opacity-70"
      >
        <Play className="h-3.5 w-3.5" />
        Probar {endpoint.method} {endpoint.path}
      </button>
    </div>
  );
}
