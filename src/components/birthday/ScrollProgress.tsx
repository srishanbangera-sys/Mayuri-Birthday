import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-glossy-pink to-rose-gold origin-left z-[90] shadow-[0_0_12px_rgba(244,114,182,0.6)]"
      />
      <div className="fixed top-4 right-4 z-[80] hidden md:flex items-center gap-2 glass-panel rounded-full px-3 py-1.5 text-[10px] uppercase tracking-widest font-mono">
        <span className="size-1.5 rounded-full bg-accent animate-pulse" />
        Mayuri's Aura
      </div>
    </>
  );
}
