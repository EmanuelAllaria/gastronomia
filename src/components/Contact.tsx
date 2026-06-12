"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { AnimatedSection, FadeIn } from "./ui/AnimatedSection";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <AnimatedSection id="contacto" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Contacto
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
              Reservá tu <span className="text-gradient-gold">experiencia</span>
            </h2>
            <p className="mt-4 text-cream-muted">
              Escribinos para reservas, catering, consultas o simplemente para saludar.
              Te respondemos en minutos.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { icon: MapPin, label: "Dirección", value: siteConfig.address },
                { icon: Phone, label: "Teléfono", value: siteConfig.phone },
                { icon: Mail, label: "Email", value: siteConfig.email },
                {
                  icon: Clock,
                  label: "Horarios",
                  value: `${siteConfig.hours.weekdays} · ${siteConfig.hours.weekend}`,
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-cream-muted">{item.label}</p>
                    <p className="font-medium text-cream">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-surface-border">
              <iframe
                title="Ubicación Alma y Fuego"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889525!2d-58.4206!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjMiUyA1OMKwMjUnMTQuMiJX!5e0!3m2!1ses!2sar!4v1"
                width="100%"
                height="250"
                style={{ border: 0, filter: "grayscale(0.8) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-surface-border bg-surface-elevated p-8"
            >
              <h3 className="font-display text-xl font-bold text-cream">
                Envianos un mensaje
              </h3>
              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="mb-1.5 block text-sm text-cream-muted">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-cream outline-none transition-colors focus:border-gold/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="mb-1.5 block text-sm text-cream-muted">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-cream outline-none transition-colors focus:border-gold/50"
                      placeholder="+54 11 ..."
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-cream-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-cream outline-none transition-colors focus:border-gold/50"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="asunto" className="mb-1.5 block text-sm text-cream-muted">
                    Asunto
                  </label>
                  <select
                    id="asunto"
                    className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-cream outline-none transition-colors focus:border-gold/50"
                  >
                    <option value="reserva">Reserva de mesa</option>
                    <option value="catering">Catering / Evento</option>
                    <option value="delivery">Delivery</option>
                    <option value="consulta">Consulta general</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="mb-1.5 block text-sm text-cream-muted">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-surface-border bg-surface px-4 py-3 text-cream outline-none transition-colors focus:border-gold/50"
                    placeholder="Contanos qué necesitás..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn-shine mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-dark py-4 font-semibold text-background transition-transform hover:scale-[1.02]"
              >
                {sent ? (
                  "¡Mensaje enviado!"
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  );
}
