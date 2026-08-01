"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  delay?: number;
};

export default function Reveal({
  children,
  className,
  stagger,
  y = 40,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || !ref.current) return;

    const targets = stagger ? Array.from(ref.current.children) : ref.current;
    gsap.set(targets, { opacity: 0, y });

    const anim = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power3.out",
      stagger: stagger ?? 0,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [stagger, y, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
