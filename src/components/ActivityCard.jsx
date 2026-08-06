import { motion } from "framer-motion";

export default function ActivityCard({ activity, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14, filter: "brightness(0.5)" }}
      whileInView={{ opacity: 1, y: 0, filter: "brightness(1)" }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
     className="w-full max-w-[460px] rounded-xl border border-white/[0.08] bg-surface p-5 shadow-neon-green"
    >
      <span className="mb-3 inline-block h-2 w-2 rounded-full bg-green" style={{ boxShadow: "0 0 8px var(--green)" }} />
      <h3 className="font-pixel text-[11px] leading-relaxed text-ink">{activity.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-dim">{activity.description}</p>
    </motion.article>
  );
}
