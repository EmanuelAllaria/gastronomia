"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/site";
import { AnimatedSection, FadeIn } from "./ui/AnimatedSection";

export function Gallery() {
  return (
    <AnimatedSection
      id="galeria"
      className="relative overflow-hidden bg-surface py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Galería
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
            Momentos <span className="text-gradient-gold">inolvidables</span>
          </h2>
        </FadeIn>

        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl"
            >
              <div className="group relative overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`Galería Alma y Fuego - imagen ${i + 1}`}
                  width={600}
                  height={i % 3 === 0 ? 800 : 400}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
