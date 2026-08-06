import { motion } from "framer-motion";
import { profile } from "../data/content.js";

function PixelHeart() {
  const grid = [
    "0110110",
    "1111111",
    "1111111",
    "0111110",
    "0011100",
    "0001000",
  ];
  const cell = 6;
  return (
    <svg width={cell * 7} height={cell * 6} viewBox={`0 0 ${cell * 7} ${cell * 6}`} aria-hidden="true">
      {grid.map((row, y) =>
        row.split("").map((bit, x) =>
          bit === "1" ? (
            <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill="var(--pink)" />
          ) : null
        )
      )}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative mx-auto flex max-w-content flex-col items-center px-6 pb-16 pt-20 text-center">
      {/* cable fading into the ground */}
      <div
        className="mb-8 hidden h-16 w-[3px] md:block"
        style={{
          background: "linear-gradient(to bottom, var(--wire), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="mb-8 h-2 w-24 rounded-full bg-white/[0.04]"
        style={{ boxShadow: "0 0 20px 2px rgba(255,176,32,.08)" }}
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="font-mono2 text-lg text-ink-dim"
      >
        
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-2 font-pixel text-sm text-purple sm:text-base"
      >
        Thanks for visiting
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="mt-5"
      >
        <PixelHeart />
      </motion.div>

      <div className="mt-10 flex items-center gap-5 text-xs text-ink-faint">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
          GitHub
        </a>
        <span>·</span>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
          LinkedIn
        </a>
        <span>·</span>
        <a href={profile.socials.email} className="transition-colors hover:text-ink">
          Email
        </a>
      </div>
      <p className="mt-6 font-mono2 text-xs text-ink-faint">
        Built with React & a lot of coffee.
      </p>
    </footer>
  );
}
