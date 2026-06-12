"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="relative border-y border-surface-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-bold text-gradient-gold md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm uppercase tracking-widest text-cream-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
