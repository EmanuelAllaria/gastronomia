import { Flame, Instagram, Facebook } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark">
                <Flame className="h-5 w-5 text-background" />
              </div>
              <span className="font-display text-xl font-bold text-cream">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-cream-muted transition-all hover:border-gold/40 hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-cream-muted transition-all hover:border-gold/40 hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cream">Navegación</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cream">Contacto</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream-muted">
              <li>{siteConfig.address}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
              <li className="pt-2">{siteConfig.hours.weekdays}</li>
              <li>{siteConfig.hours.weekend}</li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-cream-muted md:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>
            Hecho con pasión en Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}
