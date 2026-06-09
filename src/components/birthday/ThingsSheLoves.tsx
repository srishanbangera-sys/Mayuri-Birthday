import { motion } from "framer-motion";
import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

const loves = [
  { emoji: "💄", label: "Lip Gloss", bg: "bg-glossy-pink/40", line: "Always one in every bag." },
  { emoji: "🪄", label: "Tattoos", bg: "bg-lavender/40", line: "One More Won't Hurt" },
  { emoji: "📸", label: "Selfies", bg: "bg-rose-gold/40", line: "Face card valid" },
  { emoji: "🎬", label: "Movie", bg: "bg-glossy-pink/40", line: "10/10 Would Watch Again" },
  { emoji: "🍝", label: "Food", bg: "bg-lavender/40", line: "Born to Eat" },
  { emoji: "👗", label: "Dress", bg: "bg-glossy-pink/40", line: "Elite Fit" },
];

export function ThingsSheLoves() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="relative py-32 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel
          chapter="Chapter Four — Aesthetic DNA"
          title="The Loves"
          subtitle="The little things that make her, her. Tap to peek."
          accent="lavender"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {loves.map((l, i) => (
            <motion.button
              key={l.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -8, rotate: i % 2 ? 2 : -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(active === i ? null : i)}
              className={`glass-panel rounded-2xl p-6 aspect-[3/4] flex flex-col justify-between text-left transition-colors ${i % 2 ? "translate-y-6" : ""
                } ${active === i ? "bg-white/60" : ""}`}
            >
              <div className={`size-12 rounded-full ${l.bg} flex items-center justify-center text-2xl shadow-inner`}>
                {l.emoji}
              </div>
              <div className="space-y-1">
                <p className="font-medium text-sm tracking-tight">{l.label}</p>
                <motion.p
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0, height: active === i ? "auto" : 0 }}
                  className="text-[11px] text-fg/60 leading-snug overflow-hidden"
                >
                  {l.line}
                </motion.p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
