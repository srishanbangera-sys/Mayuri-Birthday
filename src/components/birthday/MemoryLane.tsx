import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import m1 from "@/assets/memory-1.jpg";
import m2 from "@/assets/memory-2.jpg";
import m3 from "@/assets/memory-3.jpg";
import m4 from "@/assets/memory-4.jpg";
import m5 from "@/assets/memory-5.jpg";
import m6 from "@/assets/memory-6.jpg";
import { SectionLabel } from "./SectionLabel";

const memories = [
  { src: m1, caption: "Gloss Era 💄", rotate: -3, offset: "md:translate-y-0" },
  { src: m2, caption: "Unpaid Comedy Service ", rotate: 4, offset: "md:translate-y-12" },
  { src: m3, caption: "Dessert Over Everything", rotate: -2, offset: "md:-translate-y-6" },
  { src: m4, caption: "highly questionable behavior", rotate: 2, offset: "md:translate-y-8" },
  { src: m5, caption: "Pretty Things 🌈", rotate: -4, offset: "md:translate-y-4" },
  { src: m6, caption: "Iconic Fit💅", rotate: 3, offset: "md:-translate-y-4" },
];

export function MemoryLane() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative py-32 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel
          chapter="Chapter Two — The Scrapbook"
          title="Memory Lane"
          subtitle="A scrapbook of the moments that make Mayuri, Mayuri. ✨"
          accent="pink"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {memories.map((m, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 50, rotate: m.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: m.rotate }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ rotate: 0, scale: 1.04, y: -6 }}
              onClick={() => setOpen(i)}
              className={`group bg-white p-3 pb-10 shadow-xl rounded-sm cursor-pointer ${m.offset}`}
            >
              <div className="w-full aspect-[4/5] overflow-hidden bg-nude">
                <img src={m.src} alt={m.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <p className="font-serif italic text-lg text-center pt-4">{m.caption}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 bg-fg/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="bg-white p-4 pb-12 shadow-2xl max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={memories[open].src} alt={memories[open].caption} className="w-full h-auto" />
              <p className="font-serif italic text-2xl text-center pt-6">{memories[open].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
