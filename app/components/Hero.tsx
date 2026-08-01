"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [kickerRef.current, line1Ref.current, line2Ref.current, subRef.current, ctaRef.current],
        { opacity: 0, y: 28 }
      );
      gsap.set(badgeRef.current, { opacity: 0, y: 20, scale: 0.95 });
      gsap.set(videoRef.current, { scale: 1.15, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.1 });
      tl.to(videoRef.current, { opacity: 1, duration: 1.2, ease: "power2.out" })
        .to(videoRef.current, { scale: 1, duration: 8, ease: "power1.out" }, 0)
        .to(kickerRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.35)
        .to(line1Ref.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.5)
        .to(line2Ref.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.65)
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.9)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 1.05)
        .to(badgeRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }, 1.1);

      gsap.to(videoRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(overlayRef.current, {
        opacity: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        opacity: 0,
        y: -60,
        scale: 0.97,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative flex h-[100vh] min-h-[640px] items-end overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 -z-10 bg-gradient-to-t from-graphite via-graphite/60 to-graphite/10"
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-graphite/80 to-transparent" />

      <div
        ref={contentRef}
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-32 sm:pb-20 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-2xl">
          <p
            ref={kickerRef}
            className="mb-6 inline-block rounded-full border border-white/15 bg-black/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-mist backdrop-blur-sm"
          >
            Infraestructura digital &middot; Automatización &middot; IA
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
            <span ref={line1Ref} className="block">
              Forjamos el futuro
            </span>
            <span ref={line2Ref} className="block">
              digital de las <span className="text-gradient-ember">empresas</span>
            </span>
          </h1>
          <p ref={subRef} className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            No vendemos páginas web. Construimos infraestructura digital que
            ayuda a tu empresa a vender más, automatizar procesos y crecer con
            bases sólidas.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-ember px-7 py-3 text-sm font-semibold text-graphite transition-transform hover:scale-105 hover:bg-ember-soft"
            >
              Empecemos un proyecto
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-white/40"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div
          ref={badgeRef}
          className="hidden shrink-0 rounded-2xl border border-white/15 bg-black/25 p-6 text-right backdrop-blur-md sm:block"
        >
          <p className="font-display text-xl font-semibold leading-snug text-foreground">
            Desarrollo Web.
            <br />
            Automatización.
            <br />
            SEO Técnico.
          </p>
        </div>
      </div>
    </section>
  );
}
