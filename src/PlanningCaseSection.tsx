import { motion } from "motion/react";
import { FileText, Link2 } from "lucide-react";
import { planningCases } from "./planningCases";

export function PlanningCaseSection() {
  return (
    <section id="planning-cases" className="space-y-8 pt-12">
      <div className="border-b border-white/10 pb-4">
        <h2 className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-slate-300">
          游戏策划拆解案
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {planningCases.map((planningCase, index) => (
          <motion.article
            key={planningCase.title}
            initial={{ opacity: 0, x: -60, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="planning-case-card steam-card interactive-lift rounded-[20px] p-6 md:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                  <FileText className="h-5 w-5 text-[#66c0f4]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold tracking-tight text-white">{planningCase.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{planningCase.subtitle}</p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-200">{planningCase.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {planningCase.tags.map((tag) => (
                <span
                  key={tag}
                  className="neon-chip rounded-full border border-white/10 bg-[#1f2f42] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6">
              {planningCase.link.disabled ? (
                <span className="planning-case-link-disabled inline-flex cursor-default items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold">
                  <Link2 className="h-4 w-4" />
                  {planningCase.link.label}
                </span>
              ) : (
                <a
                  href={planningCase.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="steam-button-primary inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold"
                >
                  <Link2 className="h-4 w-4" />
                  {planningCase.link.label}
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
