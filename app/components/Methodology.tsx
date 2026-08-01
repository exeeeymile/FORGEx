"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    subtitle: "Entendemos el negocio",
    items: ["Objetivos", "Problemas", "Oportunidades"],
  },
  {
    n: "02",
    title: "Design",
    subtitle: "Diseñamos la solución",
    items: ["Arquitectura", "Experiencia", "Estrategia"],
  },
  {
    n: "03",
    title: "Build",
    subtitle: "Construimos",
    items: ["Desarrollo", "Integraciones", "Automatización"],
  },
  {
    n: "04",
    title: "Connect",
    subtitle: "Conectamos sistemas",
    items: ["APIs", "Datos", "Herramientas"],
  },
  {
    n: "05",
    title: "Optimize",
    subtitle: "Medimos y mejoramos",
    items: ["Resultados", "Velocidad", "Conversión"],
  },
];

export default function Methodology() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const distance = track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    mm.add("(max-width: 767px)", () => {
      const track = trackRef.current;
      if (!track) return;
      const cards = Array.from(track.children);
      gsap.set(cards, { opacity: 0, y: 40 });
      const anim = gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: track,
          start: "top 85%",
        },
      });
      return () => {
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/10 py-24 md:h-screen md:py-0"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/10 blur-[160px]" />
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
          Metodología
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          El FORGEX Framework
        </h2>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex gap-6 px-6 md:absolute md:inset-0 md:mt-0 md:flex md:w-max md:items-center md:px-[10vw]"
      >
        {STEPS.map((step) => (
          <div
            key={step.n}
            className="flex w-full flex-shrink-0 flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:w-[420px] md:w-[38vw] md:p-12"
          >
            <span className="font-display text-5xl font-bold text-ember/30">
              {step.n}
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-mist">{step.subtitle}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {step.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
