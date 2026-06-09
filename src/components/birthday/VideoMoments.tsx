import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

import video1 from "../../assets/videos/mayuri1.mp4";
import video2 from "../../assets/videos/mayuri2.mp4";

const videos = [
  {
    title: "Certified Rana Kudi🍺",
    tag: "Reel 01",
    src: video1,
  },
  {
    title: "Princess Treatment 👑",
    tag: "Reel 02",
    src: video2,
  },
];

export function VideoMoments() {
  return (
    <section className="relative py-32 px-6 z-10 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <SectionLabel
          chapter="Chapter Three — The Reels"
          title="Video Moments"
          subtitle="The video dumps that deserved a permanent spot."
          accent="gold"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl overflow-hidden glass-panel"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-[9/16] object-cover"
              >
                <source src={v.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                  {v.tag}
                </p>
                <p className="font-serif italic text-2xl">
                  {v.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}