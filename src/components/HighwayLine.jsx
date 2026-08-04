import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

/**
 * The central vertical timeline — styled as an illuminated highway median
 * running between the two lane-dividers, rather than an electric cable.
 * Rendered once, absolutely positioned to fill its nearest `relative`
 * ancestor — in App.jsx that ancestor wraps only Projects through Extra
 * Curricular, so it starts right under "Press Start" and ends right
 * before the footer. Hidden on small screens, where each row falls back
 * to a short stub (see BranchRow.jsx).
 */
export default function HighwayLine() {
  const trunkRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trunkRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={trunkRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-4 -translate-x-1/2 md:block"
    >
      {/* dashed lane markings flanking the median */}
      <div
        className="absolute top-0 h-full w-px opacity-40"
        style={{
          left: "-7px",
          backgroundImage:
            "repeating-linear-gradient(to bottom, var(--ink-faint) 0 10px, transparent 10px 22px)",
        }}
      />
      <div
        className="absolute top-0 h-full w-px opacity-40"
        style={{
          right: "-7px",
          backgroundImage:
            "repeating-linear-gradient(to bottom, var(--ink-faint) 0 10px, transparent 10px 22px)",
        }}
      />

      {/* dim, unlit median base — always faintly visible */}
      <div
        className="absolute inset-x-0 top-0 h-full rounded-full"
        style={{
          width: "3px",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,176,32,.18) 4%, rgba(255,176,32,.18) 96%, transparent 100%)",
        }}
      />

      {/* illuminated stretch of road already "travelled" as you scroll down */}
      <motion.div
        className="absolute inset-x-0 top-0 rounded-full"
        style={{
          width: "3px",
          left: "50%",
          x: "-50%",
          height: "100%",
          scaleY: scrollYProgress,
          transformOrigin: "top",
          background: "linear-gradient(to bottom, var(--wire), var(--wire) 90%, rgba(255,176,32,.4))",
          boxShadow: "0 0 10px 1px rgba(255,176,32,.5), 0 0 20px 4px rgba(255,176,32,.22)",
        }}
      />

      {/* reflective road studs, evenly spaced, drifting slowly — a sense of
          steady forward motion instead of an electric pulse */}
      <div
        className="absolute inset-0"
        style={{
          left: "50%",
          width: "6px",
          transform: "translateX(-50%)",
          backgroundImage:
            "radial-gradient(circle, var(--wire) 0 2px, transparent 2.6px)",
          backgroundSize: "100% 56px",
          backgroundRepeat: "repeat-y",
          opacity: 0.85,
          animation: "road-flow 4.5s linear infinite",
        }}
      />
    </div>
  );
}
