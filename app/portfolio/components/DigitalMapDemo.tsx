"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { MapPin } from "lucide-react";

const NODES = [
  { x: 60, y: 140, label: "SEO local" },
  { x: 160, y: 90, label: "Analítica" },
  { x: 250, y: 150, label: "Contenido" },
  { x: 320, y: 80, label: "Backlinks" },
  { x: 210, y: 60, label: "Velocidad" },
];

const BUILDINGS = [
  { x: 20, w: 26, h: 60 },
  { x: 55, w: 20, h: 90 },
  { x: 85, w: 30, h: 70 },
  { x: 125, w: 22, h: 110 },
  { x: 155, w: 26, h: 80 },
  { x: 190, w: 20, h: 130 },
  { x: 220, w: 30, h: 95 },
  { x: 260, w: 24, h: 75 },
  { x: 292, w: 22, h: 105 },
  { x: 322, w: 26, h: 65 },
];

export default function DigitalMapDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 900 }}
      className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-graphite-soft"
    >
      <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-mist backdrop-blur-sm">
        <MapPin className="h-3 w-3" /> Concepto &middot; Presencia digital
      </div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="flex h-full w-full items-end justify-center pb-10"
      >
        <svg viewBox="0 0 360 200" className="h-4/5 w-4/5">
          <defs>
            <linearGradient id="skyline-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#23272d" />
              <stop offset="100%" stopColor="#14171b" />
            </linearGradient>
          </defs>

          {BUILDINGS.map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={200 - b.h}
              width={b.w}
              height={b.h}
              fill="url(#skyline-fade)"
              stroke="#ffffff10"
            />
          ))}

          {NODES.map((n, i) =>
            NODES.slice(i + 1).map((m, j) => (
              <line
                key={`${i}-${j}`}
                x1={n.x}
                y1={n.y}
                x2={m.x}
                y2={m.y}
                stroke="#ff6b1a"
                strokeOpacity={0.25}
                strokeWidth={1}
              />
            ))
          )}

          {NODES.map((n, i) => (
            <g key={n.label}>
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={5}
                fill="#ff6b1a"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
              />
              <circle cx={n.x} cy={n.y} r={9} fill="none" stroke="#ff6b1a" strokeOpacity={0.4} />
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
