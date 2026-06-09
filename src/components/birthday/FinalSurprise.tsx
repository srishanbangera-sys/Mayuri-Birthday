import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";

export function FinalSurprise() {
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const [revealed, setRevealed] = useState(false);
  const allBlown = candles.every((c) => !c);

  const baseColors = ["#f472b6", "#fbcfe8", "#e9d5ff", "#e7bc91", "#ffffff"];

  const sparkles = () => {
    const fire = (origin: { x: number; y: number }) =>
      confetti({ particleCount: 100, spread: 360, startVelocity: 35, ticks: 100, colors: baseColors, origin, scalar: 1.2, zIndex: 200 });
    fire({ x: 0.2, y: 0.6 });
    fire({ x: 0.5, y: 0.4 });
    fire({ x: 0.8, y: 0.6 });
  };

  const fireworks = () => {
    const duration = 2500;
    const end = Date.now() + duration;
    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);
      confetti({
        particleCount: 60,
        startVelocity: 55,
        spread: 80,
        ticks: 200,
        origin: { x: Math.random(), y: Math.random() * 0.4 + 0.1 },
        colors: baseColors,
        shapes: ["circle", "square"],
        zIndex: 200,
      });
    }, 220);
  };

  const heartRain = () => {
    const scalar = 2;
    const heart = confetti.shapeFromText({ text: "💖", scalar });
    const gloss = confetti.shapeFromText({ text: "✨", scalar });
    confetti({
      particleCount: 60,
      spread: 100,
      origin: { y: 0.3 },
      shapes: [heart, gloss],
      scalar,
      ticks: 200,
      zIndex: 200,
    });
  };

  const blowCandle = (i: number) => {
    setCandles((prev) => {
      const next = [...prev];
      next[i] = false;
      // mini puff of confetti
      confetti({ particleCount: 18, spread: 60, startVelocity: 25, origin: { x: 0.5, y: 0.55 }, colors: ["#fff7ed", "#fef3c7"], scalar: 0.7, ticks: 60, zIndex: 200 });
      if (next.every((c) => !c) && !revealed) {
        setTimeout(() => {
          setRevealed(true);
          fireworks();
          setTimeout(heartRain, 500);
        }, 250);
      }
      return next;
    });
  };

  const resetCandles = () => {
    setCandles([true, true, true, true, true]);
    setRevealed(false);
  };

  return (
    <footer className="relative py-32 md:py-40 px-6 text-center overflow-hidden z-10">
      <div className="relative z-10 space-y-12 max-w-5xl mx-auto">
        <div className="space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-fg/40">The Finale</p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif italic leading-[0.95] text-balance"
          >
            Make a wish, <br />
            <span className="shimmer-text tracking-tighter">blow them out.</span>
          </motion.h2>
        </div>

        {/* CAKE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto w-full max-w-md select-none"
        >
          {/* candles */}
          <div className="flex justify-center items-end gap-3 md:gap-5 h-32 mb-[-8px] relative z-10">
            {candles.map((lit, i) => (
              <button
                key={i}
                onClick={() => lit && blowCandle(i)}
                className="group relative flex flex-col items-center cursor-pointer"
                aria-label={`Candle ${i + 1}`}
              >
                <AnimatePresence>
                  {lit && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0.9, 1.1, 0.95], y: [0, -2, 0] }}
                      exit={{ scale: 0, opacity: 0, y: -20 }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                      className="w-3 h-4 rounded-full bg-gradient-to-t from-rose-gold via-accent to-yellow-200 shadow-[0_0_20px_rgba(244,114,182,0.9)]"
                    />
                  )}
                </AnimatePresence>
                {!lit && <div className="w-3 h-4 flex items-center justify-center text-[10px]">💨</div>}
                <div className="w-2 h-16 mt-1 rounded-sm bg-gradient-to-b from-glossy-pink to-accent shadow-md" />
              </button>
            ))}
          </div>

          {/* cake tiers */}
          <div className="relative">
            <div className="mx-auto w-[78%] h-10 rounded-t-2xl bg-gradient-to-b from-white to-nude shadow-inner border border-fg/5" />
            <div className="mx-auto w-full h-24 rounded-2xl bg-gradient-to-b from-glossy-pink via-white to-glossy-pink shadow-2xl border border-fg/5 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-accent/40 to-transparent" />
              <div className="absolute inset-x-0 top-2 flex justify-around">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-2 h-6 rounded-full bg-accent/70 shadow" style={{ transform: `translateY(${i % 2 ? 4 : 0}px)` }} />
                ))}
              </div>
              <p className="absolute bottom-3 inset-x-0 font-serif italic text-fg/70 text-sm">Mayuri's Era</p>
            </div>
            <div className="mx-auto w-[110%] -ml-[5%] h-4 rounded-full bg-rose-gold/40 blur-md mt-2" />
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-fg/40 font-mono">
            {allBlown ? "Wish granted ✨" : `Tap each candle (${candles.filter(Boolean).length} left)`}
          </p>
        </motion.div>

        {/* BIG REVEAL */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="space-y-3"
            >
              <h3 className="font-serif italic text-5xl md:text-7xl shimmer-text leading-none">
                Happy Birthday Mayuri
              </h3>
              <p className="text-fg/60 max-w-md mx-auto">
                Just pure aura. Now keep the party going ↓
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CELEBRATION BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sparkles}
            className="px-7 py-4 bg-gradient-to-r from-accent to-rose-gold text-white rounded-full font-medium tracking-widest shadow-2xl shadow-accent/30 uppercase text-xs"
          >
            Sparkles ✨
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fireworks}
            className="px-7 py-4 glass-panel rounded-full font-medium tracking-widest uppercase text-xs"
          >
            Fireworks 🎆
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={heartRain}
            className="px-7 py-4 glass-panel rounded-full font-medium tracking-widest uppercase text-xs"
          >
            Heart Rain 💖
          </motion.button>
          {allBlown && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetCandles}
              className="px-7 py-4 bg-fg text-white rounded-full font-medium tracking-widest uppercase text-xs"
            >
              Relight 🔁
            </motion.button>
          )}
        </div>

        <div className="flex justify-center gap-3 pt-4">
          <div className="size-2 rounded-full bg-accent animate-ping" />
          <div className="size-2 rounded-full bg-rose-gold animate-ping" style={{ animationDelay: "0.2s" }} />
          <div className="size-2 rounded-full bg-lavender animate-ping" style={{ animationDelay: "0.4s" }} />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/30 pt-8">
          Made for Mayuri💖
        </p>
      </div>
    </footer>
  );
}
