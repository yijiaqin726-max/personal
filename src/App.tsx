import { motion } from "motion/react";
import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Gamepad2,
  Github,
  Layout,
  Mail,
  MapPin,
  Phone,
  Server,
  Swords,
  Wrench,
} from "lucide-react";
import { projects } from "./projects";

const skills = [
  {
    category: "游戏策划",
    icon: Gamepad2,
    items: ["系统策划", "玩法循环设计", "Roguelike 机制设计", "PRD 撰写", "功能拆分", "版本规划"],
  },
  {
    category: "原型与交互",
    icon: Layout,
    items: ["Unity", "C#", "UI 展示思路", "玩家反馈设计", "交互原型", "前端实现协同"],
  },
  {
    category: "开发协同",
    icon: Server,
    items: ["跨职能协作", "需求落地", "Node.js", "React", "Vue3", "数据可视化表达"],
  },
  {
    category: "工具",
    icon: Wrench,
    items: ["Git", "GitHub", "Figma", "Notion", "GitHub Pages", "Chrome DevTools"],
  },
];

const contactInfo = [
  { label: "邮箱", value: "YIJIA012@e.ntu.edu.sg", icon: Mail },
  { label: "电话", value: "19355179852", icon: Phone },
  { label: "GitHub", value: "github.com/yijiaqin726-max", icon: Github },
  { label: "所在地", value: "上海 / 新加坡", icon: MapPin },
];

const oathSteps = [
  "探索与战斗",
  "守誓 / 破誓抉择",
  "能力成长与腐化累积",
  "随机黑暗脉冲改变节奏",
];

const featuredSignals = [
  { label: "项目定位", value: "黑暗奇幻 Roguelike 生存原型" },
  { label: "核心命题", value: "更强力量是否值得失控风险" },
  { label: "负责内容", value: "概念、PRD、拆分、原型与展示协同" },
];

function renderLinks(projectTitle: string, links: (typeof projects)[number]["links"]) {
  return (
    <div className="flex items-center gap-3">
      {links.map((link, linkIndex) => (
        <span key={`${projectTitle}-${link.label}`} className="flex items-center gap-3">
          {linkIndex > 0 && <span className="h-3 w-px bg-slate-200" />}
          {link.disabled ? (
            <span className="flex cursor-default items-center gap-1 text-xs font-bold text-slate-300">
              {link.label}
              {link.type === "demo" && <ArrowUpRight className="h-3 w-3" />}
              {link.type === "github" && <ExternalLink className="h-3 w-3" />}
            </span>
          ) : (
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1 text-xs font-bold ${
                link.type === "demo"
                  ? "text-secondary underline-offset-4 hover:underline"
                  : "text-slate-500 transition-colors hover:text-slate-900"
              }`}
            >
              {link.label}
              {link.type === "demo" && <ArrowUpRight className="h-3 w-3" />}
              {link.type === "github" && <ExternalLink className="h-3 w-3" />}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <div className="page-shell min-h-screen font-body text-on-surface">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="ambient-orb ambient-orb-left" />
        <div className="ambient-orb ambient-orb-right" />
        <div className="ambient-grid" />
      </div>

      <nav className="fixed top-0 z-50 flex w-full justify-center border-b border-white/60 bg-white/75 px-8 py-4 backdrop-blur-xl">
        <div className="flex w-full max-w-[1200px] items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="Manrope text-lg font-bold tracking-tight text-slate-900">
              秦艺家
              <span className="ml-1 text-sm font-normal uppercase text-slate-400">Portfolio</span>
            </span>
          </div>
          <div className="hidden items-center space-x-10 md:flex">
            <a href="#home" className="text-sm font-medium text-slate-900 transition-colors hover:text-secondary">
              首页
            </a>
            <a href="#projects" className="text-sm font-medium text-slate-500 transition-colors hover:text-secondary">
              作品
            </a>
            <a href="#skills" className="text-sm font-medium text-slate-500 transition-colors hover:text-secondary">
              技能
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-500 transition-colors hover:text-secondary">
              联系方式
            </a>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto max-w-[1200px] px-8 pb-24 pt-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <aside className="h-fit space-y-10 lg:col-span-4 lg:sticky lg:top-32">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              id="home"
              className="panel-soft space-y-7 rounded-[28px] p-8"
            >
              <div className="space-y-3">
                <h1 className="font-headline text-5xl font-extrabold tracking-tight text-slate-950">秦艺家</h1>
              </div>

              <div className="space-y-3 text-slate-500">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>2003年8月</span>
                </div>
                <div className="space-y-1.5 font-medium">
                  <p>NTU 硕士（预计 2027）</p>
                  <p>安徽大学本科</p>
                  <p className="text-sm text-slate-400">纽约石溪大学交换生</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>上海 / 新加坡</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="https://github.com/yijiaqin726-max"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-200 bg-white/80 py-3 text-center text-sm font-semibold text-slate-600 transition-all hover:border-slate-300 hover:text-slate-900"
                >
                  联系我
                </a>
              </div>
            </motion.section>
          </aside>

          <div className="lg:col-span-8">
            <section id="projects" className="space-y-12">
              <div className="border-b border-slate-200/80 pb-4">
                <h2 className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                  精选作品 / Project Portfolio
                </h2>
              </div>

              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="featured-panel overflow-hidden rounded-[32px] border border-slate-200/80"
              >
                <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="space-y-6 p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700">
                        <Swords className="h-3.5 w-3.5" />
                        Featured Project
                      </span>
                      <span className="text-sm font-medium text-slate-400">{featuredProject.subtitle}</span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold tracking-tight text-slate-950">{featuredProject.title}</h3>
                      <p className="max-w-2xl text-sm leading-7 text-slate-600">
                        围绕“守誓 / 破誓”的身份抉择，构建带有风险收益张力的 Roguelike 生存体验，让成长选择本身成为叙事与玩法的一部分。
                      </p>
                    </div>

                    <div className="grid gap-3 md:grid-cols-3">
                      {featuredSignals.map((signal) => (
                        <div key={signal.label} className="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{signal.label}</p>
                          <p className="mt-2 text-sm font-medium leading-6 text-slate-700">{signal.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">设计亮点</p>
                      <ul className="space-y-3 text-sm leading-7 text-slate-650">
                        {featuredProject.highlights?.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.55)]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {renderLinks(featuredProject.title, featuredProject.links)}
                  </div>

                  <div className="featured-visual relative min-h-[420px] overflow-hidden p-6 md:p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.16),transparent_42%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.7),rgba(15,23,42,0.96))]" />
                    <div className="relative flex h-full flex-col justify-between gap-4">
                      <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">概念展示位</p>
                        <div className="mt-4 grid gap-3">
                          <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                            <p className="text-xs font-semibold text-amber-200">主视觉 / 角色立绘</p>
                            <p className="mt-2 text-sm leading-6 text-slate-300">
                              这里后续可以替换为项目封面、主角立绘或战斗场景截图。
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                              <p className="text-xs font-semibold text-slate-200">UI 草图</p>
                              <div className="mt-3 space-y-2">
                                <div className="h-2 rounded-full bg-slate-700/70" />
                                <div className="h-2 w-3/4 rounded-full bg-slate-700/50" />
                                <div className="h-16 rounded-2xl bg-slate-800/60" />
                              </div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                              <p className="text-xs font-semibold text-slate-200">战斗截图</p>
                              <div className="mt-3 h-[92px] rounded-2xl bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),rgba(30,41,59,0.9))]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[28px] border border-white/10 bg-slate-950/40 p-5 backdrop-blur-sm">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">核心循环</p>
                        <div className="mt-4 space-y-3">
                          {oathSteps.map((step, index) => (
                            <div key={step} className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-xs font-bold text-amber-200">
                                0{index + 1}
                              </div>
                              <div className="flex-1 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-slate-200">
                                {step}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>

              <div className="space-y-0">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="panel-soft -mx-2 mt-6 flex flex-col justify-between gap-6 rounded-[28px] p-8 transition-all hover:-translate-y-1 md:flex-row md:items-start"
                  >
                    <div className="flex-grow space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                        <span className="text-sm font-medium text-slate-400">{project.subtitle}</span>
                      </div>
                      {project.description ? (
                        <p className="max-w-2xl text-sm leading-7 text-slate-600">{project.description}</p>
                      ) : null}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0">{renderLinks(project.title, project.links)}</div>
                  </motion.div>
                ))}
              </div>

              <div id="skills" className="space-y-8 pt-12">
                <div className="border-b border-slate-200/80 pb-4">
                  <h2 className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                    个人技能 / Skills
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.category}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="panel-soft rounded-[24px] p-6"
                    >
                      <div className="mb-4 flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-slate-400" />
                        <p className="text-sm font-bold text-slate-900">{skill.category}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-500"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div id="contact" className="space-y-8 pt-12">
                <div className="border-b border-slate-200/80 pb-4">
                  <h2 className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                    联系方式 / Contact
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={`${info.label}-${index}`}
                      whileHover={{ scale: 1.02 }}
                      className="panel-soft rounded-[24px] p-5"
                    >
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{info.label}</p>
                      <p className="text-sm font-medium text-slate-900">{info.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="relative mt-20 border-t border-white/60 bg-white/60 py-16 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-8 md:flex-row">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-slate-900">QIN YIJIA</div>
          <p className="text-xs text-slate-400">© 2025 Qin Yijia. Built with design, systems, and interactive thinking.</p>
          <div className="flex space-x-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <a
              href="https://github.com/yijiaqin726-max"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-slate-900"
            >
              GitHub
            </a>
            <a href="mailto:YIJIA012@e.ntu.edu.sg" className="transition-colors hover:text-slate-900">
              Email
            </a>
            <a href="#" className="transition-colors hover:text-slate-900">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
