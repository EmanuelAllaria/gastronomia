"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Restaurante Alma y Fuego - ambiente gastronómico premium"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-ember/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-sm text-gold-light"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          Abierto ahora — Palermo, Buenos Aires
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-cream">Donde el</span>
          <br />
          <span className="text-gradient-gold">sabor cobra vida</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-cream-muted md:text-xl"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#carta"
            className="btn-shine glow-gold group relative rounded-full bg-gradient-to-r from-gold to-gold-dark px-8 py-4 text-base font-semibold text-background transition-transform hover:scale-105"
          >
            Ver nuestra carta
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola! Quiero hacer un pedido`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/20 px-8 py-4 text-base font-semibold text-cream transition-all hover:border-gold/50 hover:bg-gold/10"
          >
            Pedir por WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-cream-muted"
        >
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            {siteConfig.address}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold" />
            {siteConfig.hours.weekdays}
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-muted transition-colors hover:text-gold"
        aria-label="Scroll hacia servicios"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
