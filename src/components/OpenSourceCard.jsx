import { motion } from "framer-motion";

const STATUS_STYLE = {
  Merged: "border-green/40 text-green",
  "Under review": "border-gold/40 text-gold",
};

export default function OpenSourceCard({ contribution, side = "left" }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18, x: side === "left" ? -10 : 10, filter: "brightness(0.5)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "brightness(1)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="w-full max-w-[460px] rounded-xl border border-white/[0.08] bg-surface p-5 shadow-[0_0_0_1px_rgba(155,140,255,.15),0_0_24px_-8px_rgba(155,140,255,.35)] transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(155,140,255,.3),0_0_32px_-6px_rgba(155,140,255,.55)]"
    >
      <a href={contribution.url} target="_blank" rel="noreferrer" className="group/repo inline-block">
        <h3 className="font-pixel text-[13px] leading-relaxed text-ink group-hover/repo:text-purple">
          {contribution.project}
        </h3>
      </a>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-purple/80">
        {contribution.about}
      </p>

      <ul className="mt-4 space-y-4">
        {contribution.prs.map((pr) => (
          <li key={pr.number} className="rounded-lg border border-white/[0.06] bg-bg p-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={pr.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono2 text-[15px] leading-none text-purple underline-offset-2 hover:underline"
              >
                PR #{pr.number}
              </a>
              <span className="rounded-md border border-white/15 px-1.5 py-0.5 font-mono2 text-[13px] leading-none text-ink-dim">
                {pr.type}
              </span>
              <span
                className={`rounded-full border px-2 py-0.5 font-mono2 text-[13px] leading-none ${STATUS_STYLE[pr.status]}`}
              >
                {pr.status}
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold leading-snug text-ink">{pr.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-dim">{pr.detail}</p>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
