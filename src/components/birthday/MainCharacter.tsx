import { motion } from "framer-motion";
import heroImg from "@/assets/mayuri-hero.jpg";

const traits = [
  "Lip gloss addict",
  "Face card never declines",
  "Goated movie and food critic",
  "Elite fashion sense",
];

export function MainCharacter() {
  return (
    <section id="main-character" className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative"
        >
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-2xl relative z-10">
            <img src={heroImg} alt="The main character" className="w-full h-full object-cover" width={1024} height={1280} />
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-4 md:-right-8 w-48 h-48 glass-panel rounded-2xl p-6 shadow-xl z-20 flex flex-col justify-center"
          >
            <p className="font-serif italic text-xl leading-snug">"Certified yapper."</p>
          </motion.div>
        </motion.div>

        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-5xl md:text-6xl leading-tight"
          >
            The Mayuri Effect
          </motion.h2>
          <div className="space-y-4">
            {traits.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-4 border-b border-fg/10 pb-4"
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <p className="text-lg md:text-xl font-medium">{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
