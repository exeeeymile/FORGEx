"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Sparkles, Shirt } from "lucide-react";

const PRODUCTS = [
  { name: "Campera oversize", price: "$48.900", color: "from-ember to-ember-soft" },
  { name: "Buzo cropped", price: "$32.500", color: "from-[#ff8a4c] to-[#ffd08a]" },
  { name: "Remera básica", price: "$18.900", color: "from-[#ffb020] to-[#ff6b1a]" },
];

export default function FashionWebDemo() {
  const [active, setActive] = useState(0);
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const product = PRODUCTS[active];

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-graphite-soft p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shirt className="h-4 w-4 text-ember" />
          <span className="font-display text-sm font-semibold text-foreground">
            Tienda de Ropa
          </span>
        </div>
        <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-mist">
          Muestra
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br ${product.color} shadow-lg`}
            >
              <Shirt className="h-14 w-14 text-graphite/70" />

              <motion.span
                initial={{ scale: 0, rotate: -12 }}
                animate={{ scale: 1, rotate: -12 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className="absolute -right-3 -top-3 flex items-center gap-1 rounded-full bg-graphite px-2 py-1 text-[10px] font-bold text-ember shadow-md"
              >
                <Sparkles className="h-3 w-3" /> Nuevo
              </motion.span>
            </motion.div>

            <p className="mt-5 font-display text-sm font-semibold text-foreground">
              {product.name}
            </p>
            <p className="text-ember font-semibold">{product.price}</p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() =>
            setLiked((prev) => ({ ...prev, [active]: !prev[active] }))
          }
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-sm"
        >
          <motion.span animate={liked[active] ? { scale: [1, 1.4, 1] } : {}}>
            <Heart
              className={`h-4 w-4 transition-colors ${
                liked[active] ? "fill-ember text-ember" : "text-mist"
              }`}
            />
          </motion.span>
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {PRODUCTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-ember" : "w-1.5 bg-white/20"
            }`}
            aria-label={`Producto ${i + 1}`}
          />
        ))}
      </div>

      <button className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ember to-ember-soft px-4 py-2.5 text-sm font-semibold text-graphite transition-transform hover:scale-[1.02]">
        <ShoppingBag className="h-4 w-4" />
        Agregar al carrito
      </button>
    </div>
  );
}
