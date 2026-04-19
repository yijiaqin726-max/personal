import { motion } from "motion/react";
import { BrainCircuit, Crosshair, LibraryBig, MessagesSquare, Shield, Swords } from "lucide-react";
import {
  gameExperienceCategories,
  gameExperienceIntro,
  gameExperienceSummary,
} from "./gameExperience";

const overviewCards = [
  {
    title: "重点品类",
    value: "6 个方向",
    icon: LibraryBig,
    description: "只保留能稳定展开分析的长期体验类型。",
  },
  {
    title: "核心偏好",
    value: "FPS / 多人结构",
    icon: Crosshair,
    description: "更熟悉竞技射击、合作生存与玩法反馈设计。",
  },
  {
    title: "观察方式",
    value: "体验 + 拆解",
    icon: BrainCircuit,
    description: "从玩家感受、系统结构和版本变化切入分析。",
  },
];

const iconMap = [Crosshair, Shield, MessagesSquare, Swords, LibraryBig, BrainCircuit];

export function GameExperienceSection() {
  return (
    <section id="game-experience" className="space-y-8 pt-12">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-slate-300">
          游戏体验 / Experience & Analysis
        </h2>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#66c0f4]">Portfolio Module</span>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="steam-featured rounded-[26px] p-8 md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#66c0f4]">
                {gameExperienceIntro.eyebrow}
              </p>
              <h3 className="font-headline text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                {gameExperienceIntro.title}
              </h3>
              <p className="max-w-3xl text-sm leading-8 text-slate-200 md:text-base">
                {gameExperienceIntro.description}
              </p>
            </div>

            <div className="space-y-3">
              {gameExperienceIntro.highlights.map((item) => (
                <div
                  key={item}
                  className="interactive-lift flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#66c0f4] shadow-[0_0_12px_rgba(102,192,244,0.55)]" />
                  <p className="text-sm leading-7 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {overviewCards.map((card) => (
              <div key={card.title} className="steam-card interactive-lift rounded-[22px] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#66c0f4]/25 bg-[#66c0f4]/10">
                    <card.icon className="h-5 w-5 text-[#66c0f4]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{card.title}</p>
                    <p className="mt-1 text-base font-semibold text-white">{card.value}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-200">{card.description}</p>
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
              className="game-insight-card interactive-lift rounded-[24px] p-6 md:p-7"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-[18px] w-[18px] text-[#66c0f4]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{category.title}</h3>
                    <p className="text-sm text-slate-400">{category.subtitle}</p>
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

              <div className="mt-6 grid gap-5 md:grid-cols-[1fr_1.1fr]">
                <div className="space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">代表游戏</p>
                  <div className="flex flex-wrap gap-2">
                    {category.representativeGames.map((game) => (
                      <span
                        key={game}
                        className="rounded-full border border-[#66c0f4]/16 bg-[#132232] px-3 py-1.5 text-sm font-medium text-slate-100"
                      >
                        {game}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">我关注的设计点</p>
                  <div className="flex flex-wrap gap-2">
                    {category.observationAngles.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-[20px] border border-white/10 bg-[#0f1924]/58 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#66c0f4]">个人理解</p>
                  <p className="mt-3 text-sm leading-7 text-slate-100">{category.summary}</p>
                </div>
                <div className="rounded-[20px] border border-white/10 bg-white/5 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">补充观察</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{category.designFocus}</p>
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
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#66c0f4]">Summary</p>
        <p className="mt-3 max-w-5xl text-sm leading-8 text-slate-200 md:text-base">{gameExperienceSummary}</p>
      </motion.div>
    </section>
  );
}
