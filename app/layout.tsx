import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FORGEX — Infraestructura digital para empresas que crecen",
  description:
    "FORGEX construye infraestructura digital de alto rendimiento: desarrollo web orientado a conversión, automatización e integraciones, y SEO técnico. Forjamos el futuro digital de las empresas.",
  openGraph: {
    title: "FORGEX — Infraestructura digital para empresas que crecen",
    description:
      "No vendemos páginas web. Construimos infraestructura digital que ayuda a las empresas a crecer.",
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-graphite text-foreground">
        {children}
      </body>
    </html>
  );
}
