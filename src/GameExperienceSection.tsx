import { motion } from "motion/react";
import { Crosshair, MessagesSquare, Shield, Swords } from "lucide-react";
import {
  gameExperienceCategories,
  gameExperienceIntro,
  gameExperienceSummary,
} from "./gameExperience";

const iconMap = [Crosshair, Shield, MessagesSquare, Swords, Crosshair, Shield];

export function GameExperienceSection() {
  return (
    <section id="game-experience" className="space-y-8 pt-12">
      <div className="border-b border-white/10 pb-4">
        <h2 className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-slate-300">
          游戏体验
        </h2>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="steam-featured flex min-h-[116px] items-center justify-center rounded-[26px] p-8 text-center md:p-10"
      >
        <h3 className="font-headline text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {gameExperienceIntro.title}
        </h3>
      </motion.section>

      <div className="grid items-stretch gap-6 xl:grid-cols-2">
        {gameExperienceCategories.map((category, index) => {
          const Icon = iconMap[index % iconMap.length];

          return (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="game-insight-card interactive-lift relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-[24px] p-6 md:min-h-[580px] md:p-7"
            >
              {category.backgroundImage ? (
                <div
                  className="game-insight-backdrop"
                  style={{ backgroundImage: `url(${category.backgroundImage})` }}
                />
              ) : null}
              <div className="game-insight-overlay" />

              <div className="relative z-10 flex min-h-[112px] flex-col justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/8 backdrop-blur-sm">
                    <Icon className="h-[18px] w-[18px] text-[#8fd7ff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{category.title}</h3>
                    <p className="text-sm text-slate-300">{category.subtitle}</p>
                  </div>
                </div>

                <div className="flex min-h-[56px] flex-wrap content-start gap-2">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="game-tag rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-6 grid items-stretch gap-4 md:grid-cols-2">
                <div className="game-chip-panel flex min-h-[132px] w-full content-start flex-wrap items-start gap-2 rounded-[18px] border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  {category.representativeGames.map((game) => (
                    <span
                      key={game}
                      className="game-pill-primary rounded-full border border-white/14 bg-[#102030]/76 px-3 py-1.5 text-sm font-medium text-slate-100 backdrop-blur-sm"
                    >
                      {game}
                    </span>
                  ))}
                </div>

                <div className="game-chip-panel flex min-h-[132px] w-full content-start flex-wrap items-start gap-2 rounded-[18px] border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  {category.observationAngles.map((point) => (
                    <span
                      key={point}
                      className="game-pill-secondary rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-sm text-slate-100 backdrop-blur-sm"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-6 flex flex-1 flex-col justify-end space-y-4">
                <div className="game-copy-panel flex min-h-[116px] w-full items-center rounded-[20px] border border-white/10 bg-[#0d1722]/72 p-5 backdrop-blur-sm">
                  <p className="text-sm leading-7 text-slate-100">{category.summary}</p>
                </div>
                <div className="game-copy-panel flex min-h-[116px] w-full items-center rounded-[20px] border border-white/10 bg-[#111c28]/68 p-5 backdrop-blur-sm">
                  <p className="text-sm leading-7 text-slate-200">{category.designFocus}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="steam-card rounded-[24px] p-6 md:p-7"
      >
        <p className="max-w-5xl text-sm leading-8 text-slate-200 md:text-base">{gameExperienceSummary}</p>
      </motion.div>
    </section>
  );
}
