import { motion } from "framer-motion";
import PixelIcon from "./PixelIcon.jsx";

const ICONS = { p1: "monitor", p2: "pin", p3: "eye" };

export default function ProjectCard({ project, side = "left" }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18, x: side === "left" ? -10 : 10, filter: "brightness(0.5)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "brightness(1)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group w-full max-w-[440px] rounded-xl border border-white/[0.08] bg-surface p-5 shadow-neon-cyan transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(76,201,240,.3),0_0_32px_-6px_rgba(76,201,240,.55)]"
    >
      <div className="mb-4 flex h-24 w-full items-center justify-center rounded-lg border border-white/[0.06] bg-bg">
        <PixelIcon type={ICONS[project.id]} color="var(--cyan)" size={56} />
      </div>

      <h3 className="font-pixel text-[13px] leading-relaxed text-ink">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-dim">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-cyan/30 px-2 py-1 font-mono2 text-[13px] text-cyan"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-white/15 px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-white/40"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-cyan/40 px-3 py-1.5 text-xs font-semibold text-cyan transition-colors hover:bg-cyan/10"
        >
          Live Demo
        </a>
      </div>
    </motion.article>
  );
}
