"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Pizza,
  UtensilsCrossed,
  ChefHat,
  PartyPopper,
  Wine,
  Truck,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/site";
import { AnimatedSection, FadeIn } from "./ui/AnimatedSection";

const iconMap = {
  pizza: Pizza,
  utensils: UtensilsCrossed,
  chef: ChefHat,
  party: PartyPopper,
  wine: Wine,
  truck: Truck,
};

export function Services() {
  return (
    <AnimatedSection id="servicios" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Lo que ofrecemos
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
            Un universo de <span className="text-gradient-gold">sabores</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream-muted">
            Desde la pizza artesanal hasta el catering de eventos premium. Todo bajo un mismo
            techo, con la misma pasión por la excelencia.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface-elevated transition-all duration-500 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {service.subtitle}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-gold/10 px-3 py-1 text-xs text-gold-light"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#carta"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                  >
                    Ver opciones
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
