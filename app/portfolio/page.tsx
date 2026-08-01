import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProductViewer3D from "./components/ProductViewer3D";
import AutomationDashboardDemo from "./components/AutomationDashboardDemo";
import SEODashboardDemo from "./components/SEODashboardDemo";
import APIExplorerDemo from "./components/APIExplorerDemo";
import FashionWebDemo from "./components/FashionWebDemo";
import ServiceBubbles from "./components/ServiceBubbles";

export const metadata: Metadata = {
  title: "Portfolio interactivo — FORGEX",
  description:
    "Muestras interactivas de lo que construimos en FORGEX: visores 3D, dashboards de SEO, paneles de automatización y APIs.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-graphite px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            Portfolio
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Portfolio interactivo &amp; experiencias 3D
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            FORGEX recién está empezando, así que en vez de mostrar clientes
            que todavía no tenemos, te mostramos de forma honesta el tipo de
            experiencias interactivas que sabemos construir. Movete, tocá los
            controles.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="h-[460px]">
            <ProductViewer3D />
          </div>
          <div className="h-[460px]">
            <FashionWebDemo />
          </div>
          <div className="h-[460px]">
            <SEODashboardDemo />
          </div>
          <div className="h-[460px]">
            <AutomationDashboardDemo />
          </div>
          <div className="h-[460px]">
            <APIExplorerDemo />
          </div>
        </div>

        <ServiceBubbles />
      </main>
      <Footer />
    </>
  );
}
