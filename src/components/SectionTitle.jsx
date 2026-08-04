import { motion } from "framer-motion";

const COLOR_TEXT = {
  cyan: "text-cyan",
  pink: "text-pink",
  green: "text-green",
  purple: "text-purple",
  gold: "text-gold",
};

export default function SectionTitle({ eyebrow, title, icon, color = "gold", align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className={`mb-8 flex flex-col gap-2 ${align === "center" ? "items-center text-center" : "items-start"}`}
    >
      {eyebrow && (
        <span className={`font-mono2 text-sm tracking-[0.3em] ${COLOR_TEXT[color]} opacity-80`}>
          {eyebrow}
        </span>
      )}
      <div className="flex items-center gap-3">
        <h2 className={`font-pixel text-base leading-relaxed sm:text-lg ${COLOR_TEXT[color]}`}>
          {title}
        </h2>
        {icon && <span className="text-xl opacity-90">{icon}</span>}
      </div>
    </motion.div>
  );
}
