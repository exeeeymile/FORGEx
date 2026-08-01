"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqrlyg";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative border-t border-white/10 px-6 py-24">
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-ember/10 blur-[150px]" />
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            Contacto
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Construyamos algo juntos
          </h2>
          <p className="mt-4 text-mist">
            Contanos sobre tu negocio y en qué te gustaría que te ayudemos a
            crecer.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:grid-cols-2 sm:p-10"
          >
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-medium text-mist">
                Nombre
              </label>
              <input
                required
                type="text"
                name="nombre"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-foreground outline-none transition-colors focus:border-ember"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-medium text-mist">
                Empresa
              </label>
              <input
                type="text"
                name="empresa"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-foreground outline-none transition-colors focus:border-ember"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-mist">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-foreground outline-none transition-colors focus:border-ember"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-mist">
                Mensaje
              </label>
              <textarea
                required
                name="mensaje"
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-foreground outline-none transition-colors focus:border-ember"
              />
            </div>

            <div className="flex flex-col items-start gap-3 sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-ember px-7 py-3 text-sm font-semibold text-graphite transition-transform hover:scale-105 hover:bg-ember-soft disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status === "success" && (
                <p className="text-sm text-ember-soft">
                  ¡Gracias! Te vamos a contactar pronto.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-mist">
                  Hubo un problema al enviar. Escribinos directo a{" "}
                  <a href="mailto:exequiel2746@gmail.com" className="text-ember underline">
                    exequiel2746@gmail.com
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
