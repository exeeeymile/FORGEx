"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      setCount(Math.round(progress * target));
      if (progress === 1) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const METRICS = [
  { value: 100, suffix: "%", label: "Personalizado" },
  { value: 24, suffix: "/7", label: "Soporte disponible" },
  { value: 24, prefix: "<", suffix: "h", label: "Tiempo de respuesta" },
  { value: 100, suffix: "%", label: "Compromiso con resultados" },
];

export default function Metrics() {
  return (
    <section className="relative border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-4xl font-bold text-gradient-ember sm:text-5xl">
                <Counter target={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </p>
              <p className="mt-2 text-sm text-mist">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
