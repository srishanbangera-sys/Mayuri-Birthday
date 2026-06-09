import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function getNextBirthday() {
  // Default: next October 12. Replace MONTH/DAY as needed.
  const now = new Date();
  const month = 9; // 0-indexed: October
  const day = 12;
  let target = new Date(now.getFullYear(), month, day, 0, 0, 0);
  if (target.getTime() < now.getTime()) {
    target = new Date(now.getFullYear() + 1, month, day, 0, 0, 0);
  }
  return target;
}

function diff(target: Date) {
  const d = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    mins: Math.floor((d / 60000) % 60),
    secs: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [target] = useState(getNextBirthday);
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items: Array<[string, number]> = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.mins],
    ["Seconds", t.secs],
  ];

  return (
    <section className="relative py-32 px-6 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto glass-panel rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 shadow-2xl"
      >
        <h4 className="text-xs uppercase tracking-[0.4em] font-bold mb-12 opacity-50">
          The Countdown to Perfection
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(([label, value], i) => (
            <div key={label} className="space-y-2">
              <div className={`text-5xl md:text-7xl font-serif italic ${i === 1 ? "shimmer-text" : ""}`}>
                {String(value).padStart(2, "0")}
              </div>
              <div className="text-[10px] uppercase tracking-widest opacity-50 font-mono">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
