import { motion } from "framer-motion";
import { profile } from "../data/content.js";

function Transformer() {
  return (
    <svg width="88" height="96" viewBox="0 0 88 96" aria-hidden="true">
      <rect x="30" y="0" width="28" height="10" fill="#2a2a33" />
      <rect x="20" y="10" width="48" height="10" fill="#33333d" />
      <rect x="16" y="20" width="56" height="40" rx="2" fill="#1a1a22" stroke="#3a3a46" strokeWidth="2" />
      <rect x="24" y="28" width="40" height="24" fill="#0d0d12" />
      <path
        d="M46 32 L36 45 H44 L38 54 L50 39 H42 L48 32 Z"
        fill="var(--wire)"
        style={{ filter: "drop-shadow(0 0 6px var(--wire))" }}
      />
      <rect x="10" y="60" width="68" height="8" fill="#232329" />
      <rect x="4" y="68" width="80" height="6" fill="#1a1a1f" />
    </svg>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative mx-auto flex max-w-content flex-col items-center px-6 pb-28 pt-16 text-center md:pt-24">
      <Transformer />

      <div className="mt-4 flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="led-blink h-2 w-2 rounded-full bg-wire"
            style={{ boxShadow: "0 0 6px var(--wire)", animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 font-mono2 text-lg tracking-[0.35em] text-green"
      >
        PLAYER 1 &nbsp;&gt;&nbsp; HELLO, I'M
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="crt-flicker mt-4 font-pixel text-2xl leading-[1.6] text-ink sm:text-3xl md:text-4xl"
        style={{ textShadow: "0 0 18px rgba(255,176,32,.25)" }}
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-3 font-mono2 text-xl text-cyan"
      >
        {"{"} {profile.role} {"}"}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.62, duration: 0.6 }}
        className="mt-4 max-w-md text-sm leading-relaxed text-ink-dim"
      >
        {profile.tagline}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.78, duration: 0.6 }}
        onClick={scrollToProjects}
        className="mt-8 rounded-md border border-green/50 px-6 py-3 font-pixel text-[11px] text-green transition-colors hover:bg-green/10"
        style={{ boxShadow: "0 0 18px -4px var(--green)" }}
      >
        Press Start
      </motion.button>
    </section>
  );
}
