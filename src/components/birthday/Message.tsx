import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fullText = `Happy Birthday Mayuri! Thanks for being the kind of person who makes random days more fun. Manhh your movie recommendations are crazyy, let it be romcoms, horror or series. Whether it's about deciding what to eat, you always have the most random suggestions, that somehow are the best. Things are always better when your around. You always have this way of making people laugh and feel comfortable without even trying. I hope this year brings you as much happiness as you bring to everyone around you. Stay exactly as you are:)`;

export function Message() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section ref={ref} className="relative py-32 px-6 z-10 bg-fg text-nude overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent animate-sparkle"
            style={{
              top: `${(i * 41) % 100}%`,
              left: `${(i * 59) % 100}%`,
              width: 3,
              height: 3,
              boxShadow: "0 0 12px rgba(244,114,182,0.9)",
              animationDelay: `${(i % 6) * 0.5}s`,
            }}
          />
        ))}
      </div>
      <div className="relative max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="size-12 rounded-full border border-nude/20 flex items-center justify-center font-serif italic text-xl"
          >
            M
          </motion.div>
          <div className="h-px w-24 bg-nude/20" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-nude/40">A little note</p>
        </div>
        <p className="font-serif italic text-2xl md:text-4xl leading-relaxed text-pretty min-h-[12rem]">
          {typed}
          <span className="inline-block w-[3px] h-[1em] bg-accent translate-y-1 ml-1 animate-pulse" />
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-nude/50">— your Bolimaga</p>
      </div>
    </section>
  );
}
