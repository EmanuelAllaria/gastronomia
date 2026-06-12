"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { AnimatedSection, FadeIn } from "./ui/AnimatedSection";

export function Testimonials() {
  return (
    <AnimatedSection className="relative py-24 md:py-32">
      <div className="absolute inset-0 hero-gradient opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Testimonios
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
            Lo que dicen <span className="text-gradient-gold">nuestros clientes</span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-surface-border bg-surface-elevated p-8"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-gold/20" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-cream-muted">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <cite className="not-italic font-semibold text-cream">{t.name}</cite>
                  <p className="text-sm text-cream-muted">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
