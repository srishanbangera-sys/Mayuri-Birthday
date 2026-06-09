import { motion } from "framer-motion";

export function Hero() {
  const scrollToNext = () => {
    document.getElementById("main-character")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="space-y-6"
      >
        <div className="inline-block px-4 py-1.5 rounded-full glass-panel text-[10px] uppercase tracking-[0.3em] font-medium">
          The Mayuri Cinematic Universe
        </div>
        <h1 className="font-serif italic text-6xl sm:text-7xl md:text-9xl text-balance leading-[0.9] tracking-tighter">
          Happy Birthday <br />
          <span className="shimmer-text">Mayuri</span>
        </h1>
        <p className="max-w-[45ch] mx-auto text-base md:text-lg text-fg/60 font-light text-pretty">
          Enter at your own risk — this is what peak personality looks like.
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={scrollToNext}
          className="mt-6 px-10 py-4 bg-fg text-white rounded-full font-medium tracking-wide transition-colors hover:bg-accent group inline-flex items-center gap-2"
        >
          Tap to unlock the memories
          <span className="inline-block transition-transform group-hover:translate-x-1">✨</span>
        </motion.button>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 opacity-40"
      >
        <div className="w-px h-12 bg-fg" />
      </motion.div>
    </header>
  );
}
