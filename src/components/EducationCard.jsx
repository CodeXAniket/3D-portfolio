import { motion } from "framer-motion";

export default function EducationCard({ education }) {
  const max = 10;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16, filter: "brightness(0.5)" }}
      whileInView={{ opacity: 1, y: 0, filter: "brightness(1)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="w-full max-w-[460px] rounded-xl border border-white/[0.08] bg-surface p-6 shadow-neon-gold"
    >
      <h3 className="font-pixel text-[13px] leading-relaxed text-ink">{education.school}</h3>
      <p className="mt-1 text-sm text-ink-dim">{education.degree}</p>
      <p className="mt-1 font-mono2 text-base text-gold">{education.years}</p>

      <div className="mt-5 flex items-center gap-6">
        <div>
          <p className="font-mono2 text-xs uppercase tracking-widest text-ink-faint">CGPA</p>
          <p className="font-pixel text-2xl text-gold">
            {education.gpa}
            <span className="text-sm text-ink-faint">/{education.scale}</span>
          </p>
        </div>

        <div className="flex h-16 flex-1 items-end gap-2">
          {education.cgpaHistory.map((v, i) => (
            <div key={i} className="flex h-full flex-1 items-end">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${(v / max) * 100}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: "easeOut" }}
                className="w-full rounded-sm bg-gold/70"
                style={{ boxShadow: "0 0 8px -1px var(--gold)" }}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-2 font-mono2 text-[11px] uppercase tracking-widest text-ink-faint">
        Semester progression
      </p>
    </motion.article>
  );
}
