import { motion } from "framer-motion";

interface Props {
  chapter: string;
  title: string;
  subtitle?: string;
  accent?: "pink" | "lavender" | "gold";
  align?: "left" | "center";
}

const accents = {
  pink: "from-glossy-pink via-accent to-rose-gold",
  lavender: "from-lavender via-glossy-pink to-accent",
  gold: "from-rose-gold via-nude to-glossy-pink",
};

export function SectionLabel({ chapter, title, subtitle, accent = "pink", align = "center" }: Props) {
  const isCenter = align === "center";
  return (
    <div className={`relative mb-16 md:mb-20 ${isCenter ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`flex items-center gap-4 ${isCenter ? "justify-center" : "justify-start"} mb-6`}
      >
        <div className={`h-px w-12 bg-gradient-to-r ${accents[accent]}`} />
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-fg/50">{chapter}</p>
        <div className={`h-px w-12 bg-gradient-to-r ${accents[accent]}`} />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="font-serif italic text-5xl md:text-7xl leading-[0.95] tracking-tight"
      >
        {title.split(" ").map((word, i) => (
          <span key={i} className={i % 2 === 1 ? "shimmer-text" : ""}>
            {word}{" "}
          </span>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-fg/60 mt-5 ${isCenter ? "max-w-md mx-auto" : "max-w-md"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
