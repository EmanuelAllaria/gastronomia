"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  menuCategories,
  menuItems,
  formatPrice,
  type MenuCategory,
} from "@/data/site";
import { AnimatedSection, FadeIn } from "./ui/AnimatedSection";

export function Menu() {
  const [active, setActive] = useState<MenuCategory>("pizzas");

  return (
    <AnimatedSection
      id="carta"
      className="relative bg-surface py-24 md:py-32"
    >
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Nuestra carta
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
            Sabores que <span className="text-gradient-gold">enamoran</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream-muted">
            Explorá nuestra selección de platos. Todos los precios en pesos argentinos.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  active === cat.id
                    ? "text-background"
                    : "text-cream-muted hover:text-cream"
                }`}
              >
                {active === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-gold-dark"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {menuItems[active].map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-surface-border bg-surface-elevated transition-all hover:border-gold/20"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {item.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-ember px-3 py-1 text-xs font-semibold text-cream">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-cream">
                      {item.name}
                    </h3>
                    <span className="shrink-0 font-semibold text-gold">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
