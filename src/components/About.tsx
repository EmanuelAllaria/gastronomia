"use client";

import Image from "next/image";
import { Award, Heart, Leaf } from "lucide-react";
import { FadeIn } from "./ui/AnimatedSection";

const values = [
  {
    icon: Heart,
    title: "Pasión genuina",
    text: "Cada plato se prepara con amor y dedicación, como en casa.",
  },
  {
    icon: Leaf,
    title: "Ingredientes nobles",
    text: "Seleccionamos productores locales y materias primas de primera calidad.",
  },
  {
    icon: Award,
    title: "Excelencia constante",
    text: "15 años perfeccionando cada receta, cada servicio, cada detalle.",
  },
];

export function About() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-wine/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Chef preparando platos en Alma y Fuego"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-gold/20 bg-surface-elevated p-6 shadow-2xl md:block">
              <p className="font-display text-3xl font-bold text-gradient-gold">15+</p>
              <p className="text-sm text-cream-muted">Años de tradición</p>
            </div>
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-2xl border border-gold/30 lg:block" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Nuestra historia
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
              Nacidos del fuego,
              <br />
              <span className="text-gradient-gold">forjados en sabor</span>
            </h2>
            <p className="mt-6 leading-relaxed text-cream-muted">
              Alma & Fuego nació en 2010 con un sueño simple: reunir lo mejor de la gastronomía
              argentina en un solo espacio. Lo que empezó como una pequeña pizzería de barrio se
              transformó en un referente gastronómico de Palermo.
            </p>
            <p className="mt-4 leading-relaxed text-cream-muted">
              Hoy somos pizzería, rotisería, restaurante, bar y catering. Pero nuestro ADN sigue
              siendo el mismo: ingredientes honestos, técnicas tradicionales y un equipo que vive
              la cocina con el corazón.
            </p>

            <div className="mt-10 space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    <v.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream">{v.title}</h3>
                    <p className="mt-1 text-sm text-cream-muted">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
