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
        className="steam-featured rounded-[26px] p-8 md:p-10"
      >
        <div className="space-y-5">
          <div className="space-y-3">
            <h3 className="font-headline text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              {gameExperienceIntro.title}
            </h3>
            <p className="max-w-4xl text-sm leading-8 text-slate-200 md:text-base">
              {gameExperienceIntro.description}
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {gameExperienceIntro.highlights.map((item) => (
              <div
                key={item}
                className="interactive-lift rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <p className="text-sm leading-7 text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="grid gap-6 xl:grid-cols-2">
        {gameExperienceCategories.map((category, index) => {
          const Icon = iconMap[index % iconMap.length];

          return (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="game-insight-card interactive-lift relative overflow-hidden rounded-[24px] p-6 md:p-7"
            >
              {category.backgroundImage ? (
                <div
                  className="game-insight-backdrop"
                  style={{ backgroundImage: `url(${category.backgroundImage})` }}
                />
              ) : null}
              <div className="game-insight-overlay" />

              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/8 backdrop-blur-sm">
                    <Icon className="h-[18px] w-[18px] text-[#8fd7ff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{category.title}</h3>
                    <p className="text-sm text-slate-300">{category.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
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

              <div className="relative z-10 mt-6 grid gap-5 md:grid-cols-[1fr_1.1fr]">
                <div className="flex flex-wrap gap-2">
                  {category.representativeGames.map((game) => (
                    <span
                      key={game}
                      className="rounded-full border border-white/14 bg-[#102030]/76 px-3 py-1.5 text-sm font-medium text-slate-100 backdrop-blur-sm"
                    >
                      {game}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.observationAngles.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-sm text-slate-100 backdrop-blur-sm"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-6 space-y-4">
                <div className="rounded-[20px] border border-white/10 bg-[#0d1722]/72 p-5 backdrop-blur-sm">
                  <p className="text-sm leading-7 text-slate-100">{category.summary}</p>
                </div>
                <div className="rounded-[20px] border border-white/10 bg-[#111c28]/68 p-5 backdrop-blur-sm">
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
