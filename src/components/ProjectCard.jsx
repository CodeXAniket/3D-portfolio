import { motion } from "framer-motion";
import PixelIcon from "./PixelIcon.jsx";

export default function ProjectCard({ project, side = "left" }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18, x: side === "left" ? -10 : 10, filter: "brightness(0.5)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "brightness(1)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group w-full max-w-[460px] rounded-xl border border-white/[0.08] bg-surface p-5 shadow-neon-cyan transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(76,201,240,.3),0_0_32px_-6px_rgba(76,201,240,.55)]"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-bg">
          <PixelIcon type={project.icon} color="var(--cyan)" size={36} />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-pixel text-[13px] leading-relaxed text-ink">{project.title}</h3>
            {project.status && (
              <span className="rounded-full border border-gold/40 px-2 py-0.5 font-mono2 text-[13px] leading-none text-gold">
                {project.status}
              </span>
            )}
          </div>
          {project.subtitle && (
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cyan/80">
              {project.subtitle}
            </p>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-dim">{project.description}</p>

      {project.highlights && (
        <ul className="mt-3 space-y-1.5">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2 text-sm leading-snug text-ink">
              <span aria-hidden="true" className="text-cyan">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

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
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-cyan/40 px-3 py-1.5 text-xs font-semibold text-cyan transition-colors hover:bg-cyan/10"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
