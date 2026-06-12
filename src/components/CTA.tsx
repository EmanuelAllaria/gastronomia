"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-ember/10 to-wine/10" />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-cream md:text-5xl">
            ¿Listo para una experiencia{" "}
            <span className="text-gradient-gold">inolvidable</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream-muted">
            Reservá tu mesa, hacé tu pedido o consultanos por catering. Te esperamos con los
            brazos abiertos y el horno encendido.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola! Quiero reservar una mesa`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine glow-gold rounded-full bg-gradient-to-r from-gold to-gold-dark px-8 py-4 font-semibold text-background transition-transform hover:scale-105"
            >
              Reservar ahora
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-cream/20 px-8 py-4 font-semibold text-cream transition-all hover:border-gold/50"
            >
              Llamanos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
