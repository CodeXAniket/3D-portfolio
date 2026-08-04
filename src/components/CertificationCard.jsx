import { motion } from "framer-motion";

export default function CertificationCard({ cert }) {
  const initials = cert.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 16, filter: "brightness(0.5)" }}
      whileInView={{ opacity: 1, y: 0, filter: "brightness(1)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex w-full max-w-[380px] items-start gap-4 rounded-xl border border-white/[0.08] bg-surface p-5 shadow-neon-pink"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-pink/30 bg-bg font-pixel text-[10px] text-pink">
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-pixel text-[11px] leading-relaxed text-ink">{cert.name}</h3>
        <p className="mt-1.5 text-sm text-ink-dim">{cert.issuer}</p>
        <a
          href={cert.verify}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block rounded-md border border-pink/40 px-3 py-1.5 text-xs font-semibold text-pink transition-colors hover:bg-pink/10"
        >
          Verify →
        </a>
      </div>
    </motion.article>
  );
}
