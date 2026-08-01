"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import type { Mesh } from "three";
import { motion } from "framer-motion";

/* eslint-disable react-hooks/immutability -- three.js objects returned by useThree (gl, camera) are designed to be mutated in place; this is the standard r3f imperative-escape-hatch pattern. */
function ForceCanvasSize({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { gl, camera, invalidate } = useThree();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const apply = (width: number, height: number) => {
      if (width === 0 || height === 0) return;
      gl.setSize(width, height, false);
      if ("aspect" in camera) {
        (camera as unknown as { aspect: number }).aspect = width / height;
      }
      camera.updateProjectionMatrix();
      invalidate();
    };

    apply(el.clientWidth, el.clientHeight);

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      apply(width, height);
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [containerRef, gl, camera, invalidate]);

  return null;
}
/* eslint-enable react-hooks/immutability */

function AbstractObject({
  roughness,
  metalness,
}: {
  roughness: number;
  metalness: number;
}) {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh ref={meshRef} castShadow position={[0, 0.6, 0]}>
      <torusKnotGeometry args={[0.7, 0.24, 200, 32]} />
      <meshStandardMaterial
        color="#ff6b1a"
        roughness={roughness}
        metalness={metalness}
      />
    </mesh>
  );
}

export default function ProductViewer3D() {
  const [roughness, setRoughness] = useState(0.35);
  const [metalness, setMetalness] = useState(0.65);
  const [autoRotate, setAutoRotate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-graphite-soft"
    >
      <Canvas camera={{ position: [0, 1.2, 3.4], fov: 45 }} shadows>
        <ForceCanvasSize containerRef={containerRef} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 2]} intensity={1.2} castShadow />
        <AbstractObject roughness={roughness} metalness={metalness} />
        <ContactShadows position={[0, -0.4, 0]} opacity={0.5} blur={2.4} far={2} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.42, 0]} receiveShadow>
          <circleGeometry args={[1.6, 64]} />
          <meshStandardMaterial color="#14171b" roughness={0.4} metalness={0.2} />
        </mesh>
        <Environment preset="city" />
        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={2.2}
          enablePan={false}
          minDistance={2.4}
          maxDistance={5}
        />
      </Canvas>

      <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-mist backdrop-blur-sm">
        Concepto &middot; 3D Product Viewer
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto absolute bottom-4 left-4 w-48 space-y-3 rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur-md"
      >
        <label className="block">
          <span className="mb-1 flex justify-between text-[11px] text-mist">
            <span>Roughness</span>
            <span>{roughness.toFixed(2)}</span>
          </span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={roughness}
            onChange={(e) => setRoughness(Number(e.target.value))}
            className="h-1 w-full cursor-pointer accent-ember"
          />
        </label>
        <label className="block">
          <span className="mb-1 flex justify-between text-[11px] text-mist">
            <span>Metallic</span>
            <span>{metalness.toFixed(2)}</span>
          </span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={metalness}
            onChange={(e) => setMetalness(Number(e.target.value))}
            className="h-1 w-full cursor-pointer accent-ember"
          />
        </label>
        <label className="flex items-center justify-between text-[11px] text-mist">
          <span>Auto Rotate</span>
          <button
            role="switch"
            aria-checked={autoRotate}
            onClick={() => setAutoRotate((v) => !v)}
            className={`relative h-4 w-8 rounded-full transition-colors ${
              autoRotate ? "bg-ember" : "bg-white/15"
            }`}
          >
            <span
              className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-transform ${
                autoRotate ? "translate-x-4" : "translate-x-0.5"
              }`}
            />
          </button>
        </label>
      </motion.div>
    </div>
  );
}
