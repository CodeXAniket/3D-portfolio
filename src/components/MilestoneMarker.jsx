import { motion } from "framer-motion";

const COLOR_TEXT = {
  cyan: "text-cyan border-cyan/30",
  pink: "text-pink border-pink/30",
  green: "text-green border-green/30",
  purple: "text-purple border-purple/30",
  gold: "text-gold border-gold/30",
};

/**
 * A subtle kilometre-marker style badge sitting on the highway median
 * between two sections. Rendered inside a zero-height wrapper so it does
 * not add any extra spacing to the page — it just sits in the padding
 * that's already there.
 */
export default function MilestoneMarker({ label, color = "gold" }) {
  return (
    <div className="relative hidden h-0 md:block" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.4 }}
        className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-md border bg-surface px-2.5 py-1 font-mono2 text-sm tracking-widest ${COLOR_TEXT[color]}`}
        style={{ boxShadow: `0 0 10px -2px var(--${color})` }}
      >
        {label}
      </motion.div>
    </div>
  );
}
