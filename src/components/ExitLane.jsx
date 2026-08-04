import { motion } from "framer-motion";

const COLOR_VAR = {
  cyan: "var(--cyan)",
  pink: "var(--pink)",
  green: "var(--green)",
  purple: "var(--purple)",
  gold: "var(--gold)",
};

/**
 * A short exit lane peeling off the highway median toward a card, ending
 * in a small reflective road stud. `side` decides which way it curves.
 * Draws itself in (pathLength 0 -> 1) as the row scrolls into view —
 * reads as the lane being revealed ahead, not an electrical pulse.
 */
export default function ExitLane({ side = "right", color = "gold" }) {
  const c = COLOR_VAR[color] || COLOR_VAR.gold;
  const d =
    side === "left" ? "M50,0 C50,32 18,44 0,50" : "M50,0 C50,32 82,44 100,50";
  const endX = side === "left" ? 0 : 100;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {/* dashed lane texture along the exit curve */}
      <path
        d={d}
        fill="none"
        stroke={c}
        strokeWidth="1"
        strokeDasharray="3 4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.35"
      />

      <motion.path
        d={d}
        fill="none"
        stroke={c}
        strokeWidth="2.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{ filter: `drop-shadow(0 0 4px ${c})` }}
        initial={{ pathLength: 0, opacity: 0.25 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />

      {/* reflective stud marking where the lane meets the card */}
      <motion.circle
        cx={endX}
        cy="50"
        r="3.2"
        fill={c}
        style={{ filter: `drop-shadow(0 0 6px ${c})`, transformOrigin: `${endX}px 50px` }}
        initial={{ opacity: 0.15, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.55 }}
      />
    </svg>
  );
}
