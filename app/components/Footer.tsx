import Link from "next/link";

const LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="/" className="font-display text-lg font-bold text-foreground">
          FORGE<span className="text-gradient-ember">X</span>
        </Link>

        <nav className="flex flex-wrap gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-mist transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-mist">
          © {new Date().getFullYear()} FORGEX. Forjamos el futuro digital.
        </p>
      </div>
    </footer>
  );
}
