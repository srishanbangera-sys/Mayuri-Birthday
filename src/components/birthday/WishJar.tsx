import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionLabel } from "./SectionLabel";

type Wish = {
  id: number;
  text: string;
  color: string;
  rot: number;
};

const palette = [
  "bg-glossy-pink/80",
  "bg-lavender/80",
  "bg-rose-gold/70",
  "bg-nude/90",
];

const starter: Wish[] = [
  { id: 1, text: "Keep giving me tea☕️", color: palette[0], rot: -4 },
  { id: 2, text: "Don't ever become normal 💖", color: palette[1], rot: 3 },
  { id: 3, text: "May your shawarma always be loaded. 🌯", color: palette[2], rot: -2 },
  { id: 4, text: "Never lose your sparkle ✨", color: palette[3], rot: 5 },
];

export function WishJar() {
  const [wishes, setWishes] = useState<Wish[]>(starter);
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("mayuri-wishes");

      if (raw) {
        const saved = JSON.parse(raw);

        if (Array.isArray(saved) && saved.length > 0) {
          setWishes(saved);
        }
      }
    } catch (err) {
      console.error("Error loading wishes:", err);
    }
  }, []);

  const add = async () => {
    const t = text.trim();

    if (!t) return;

    const newWish: Wish = {
      id: Date.now(),
      text: t,
      color: palette[Math.floor(Math.random() * palette.length)],
      rot: Math.random() * 10 - 5,
    };

    setWishes((prev) => {
      const next = [...prev, newWish];
      localStorage.setItem("mayuri-wishes", JSON.stringify(next));
      return next;
    });

    setText("");

    try {
      await fetch(
        "https://formsubmit.co/ajax/srishanbangera@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            wish: t,
            from: "Mayuri Birthday Website",
          }),
        }
      );
    } catch (err) {
      console.error("Email sending failed:", err);
    }
  };

  const deleteWish = (id: number) => {
    setWishes((prev) => {
      const next = prev.filter((wish) => wish.id !== id);
      localStorage.setItem("mayuri-wishes", JSON.stringify(next));
      return next;
    });
  };

  return (
    <section className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel
          chapter="Chapter Six — Pinned for You"
          title="The Wish Wall"
          subtitle="Drop a wish, a memory, a hype line. It stays here forever."
          accent="lavender"
        />

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-3xl p-8 space-y-5 sticky top-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/50">
              Write your wish
            </p>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 140))}
              placeholder="Type something sweet for Mayuri…"
              rows={4}
              className="w-full bg-white/40 rounded-2xl p-4 text-fg placeholder:text-fg/30 resize-none outline-none focus:ring-2 focus:ring-accent/40 font-serif italic text-lg"
            />

            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-fg/40">
                {text.length}/140
              </span>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={add}
                className="px-6 py-3 bg-fg text-white rounded-full text-sm font-medium tracking-wide hover:bg-accent transition-colors"
              >
                Pin it 📌
              </motion.button>
            </div>
          </motion.div>

          <div className="relative min-h-[400px]">
            <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
              <AnimatePresence>
                {wishes.map((w) => (
                  <motion.div
                    key={w.id}
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                      rotate: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: w.rot,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 0,
                      zIndex: 5,
                    }}
                    className={`${w.color} mb-4 inline-block w-full p-5 rounded-md shadow-xl break-inside-avoid relative`}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-fg/20 rounded-sm rotate-[-2deg]" />

                    <p className="font-serif italic text-base md:text-lg leading-snug text-fg">
                      {w.text}
                    </p>


                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}