"use client";

import { Check, Tag } from "lucide-react";
import { pricingPlans, promos, formatPrice } from "@/data/site";
import { AnimatedSection, FadeIn } from "./ui/AnimatedSection";

export function Pricing() {
  return (
    <AnimatedSection id="precios" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Precios & Promos
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
            Experiencias para <span className="text-gradient-gold">cada ocasión</span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.15}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all ${
                  plan.highlighted
                    ? "border-gold/40 bg-gradient-to-b from-gold/10 to-surface-elevated glow-gold scale-[1.02]"
                    : "border-surface-border bg-surface-elevated hover:border-gold/20"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-gold-dark px-4 py-1 text-xs font-bold text-background">
                    Más popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-cream">{plan.name}</h3>
                <p className="mt-1 text-sm text-cream-muted">{plan.description}</p>
                <div className="mt-6">
                  <span className="font-display text-4xl font-bold text-gradient-gold">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="ml-1 text-sm text-cream-muted">/ {plan.period}</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-cream-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "btn-shine bg-gradient-to-r from-gold to-gold-dark text-background hover:scale-105"
                      : "border border-surface-border text-cream hover:border-gold/40 hover:bg-gold/5"
                  }`}
                >
                  Consultar
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-20">
          <h3 className="text-center font-display text-2xl font-bold text-cream">
            Promociones activas
          </h3>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {promos.map((promo) => (
              <div
                key={promo.code}
                className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface-elevated p-6 transition-all hover:border-ember/30"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ember/10 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <Tag className="h-5 w-5 text-ember" />
                    <span className="rounded-full bg-ember/20 px-3 py-1 text-sm font-bold text-ember-light">
                      {promo.discount}
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold text-cream">
                    {promo.title}
                  </h4>
                  <p className="mt-2 text-sm text-cream-muted">{promo.description}</p>
                  <p className="mt-3 text-xs font-mono text-gold">
                    Código: <span className="font-bold">{promo.code}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
