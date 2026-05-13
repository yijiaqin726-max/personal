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
              className="game-insight-card interactive-lift flex h-full flex-col overflow-hidden rounded-[24px]"
            >
              {category.backgroundImage ? (
                <div className="game-insight-media">
                  <img src={category.backgroundImage} alt={`${category.title} 类型视觉图`} />
                  <div className="game-insight-media-badge">
                    <Icon className="h-4 w-4" />
                    <span>{category.subtitle}</span>
                  </div>
                </div>
              ) : null}

              <div className="game-insight-body">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="game-insight-icon">
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white">{category.title}</h3>
                      <p className="text-sm text-slate-300">{category.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex min-h-[36px] flex-wrap content-start gap-2">
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

                <div className="game-info-grid">
                  <div className="game-chip-panel">
                    <p className="game-panel-label">代表作品</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {category.representativeGames.map((game) => (
                        <span key={game} className="game-pill-primary">
                          {game}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="game-chip-panel">
                    <p className="game-panel-label">观察角度</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {category.observationAngles.map((point) => (
                        <span key={point} className="game-pill-secondary">
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-end space-y-4">
                  <div className="game-copy-panel">
                    <p className="text-sm leading-7 text-slate-100">{category.summary}</p>
                  </div>
                  <div className="game-copy-panel">
                    <p className="text-sm leading-7 text-slate-200">{category.designFocus}</p>
                  </div>
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
