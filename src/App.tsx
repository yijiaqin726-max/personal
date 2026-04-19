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
import aiBookkeepingCover from "../记账首页图.jpg";
import selfDisciplineQuestCover from "../自律首页图.jpg";
import roguelikeCover from "../肉鸽封面图.png";
import profileCover from "../简介图_ 三比二比例.jpg";

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
  { label: "项目类型", value: "个人 Roguelike 生存 Demo" },
  { label: "玩法方向", value: "战斗生存 + 成长路线选择" },
  { label: "负责内容", value: "系统设计、PRD、功能拆分、原型推进" },
];

const projectImages: Record<string, string> = {
  "自律 Quest": selfDisciplineQuestCover,
  "AI 智能记账助手": aiBookkeepingCover,
};

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
                  : "text-slate-400 transition-colors hover:text-slate-100"
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

      <nav className="fixed top-0 z-50 flex w-full justify-center border-b border-white/10 bg-[#1b2838]/88 px-6 py-4 backdrop-blur-xl">
        <div className="flex w-full max-w-[1280px] items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="Manrope text-lg font-bold tracking-tight text-slate-100">
              秦艺家
              <span className="ml-1 text-sm font-normal uppercase text-[#66c0f4]">Portfolio</span>
            </span>
          </div>
          <div className="hidden items-center space-x-10 md:flex">
            <a href="#home" className="text-sm font-medium text-slate-100 transition-colors hover:text-secondary">
              首页
            </a>
            <a href="#projects" className="text-sm font-medium text-slate-400 transition-colors hover:text-secondary">
              作品
            </a>
            <a href="#skills" className="text-sm font-medium text-slate-400 transition-colors hover:text-secondary">
              技能
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-400 transition-colors hover:text-secondary">
              联系方式
            </a>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto max-w-[1280px] px-6 pb-24 pt-28">
        <section id="home" className="space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="steam-hero rounded-[28px] p-8 md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#66c0f4]">Game Portfolio</p>
                  <h1 className="font-headline text-5xl font-extrabold tracking-tight text-white md:text-6xl">秦艺家</h1>
                  <p className="max-w-2xl text-base leading-8 text-slate-200">
                    游戏策划方向作品集。
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>2003年8月出生</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white">南洋理工大学-计算机控制与自动化</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                    <p className="text-xs text-slate-300">教育经历</p>
                    <p className="mt-3 text-sm font-semibold text-white"> 安徽大学-数字媒体技术（计算机方向）</p>
                    <p className="mt-1 text-xs text-slate-400">美国信息系统交换生</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>上海</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white">系统策划/AI </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://github.com/yijiaqin726-max"
                    target="_blank"
                    rel="noreferrer"
                    className="steam-button-primary flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="#contact"
                    className="steam-button-secondary rounded-md px-5 py-3 text-sm font-semibold"
                  >
                    联系我
                  </a>
                </div>
              </div>

              <div className="steam-cover-placeholder h-fit self-center justify-self-center rounded-[20px] p-2 lg:w-[72%]">
                <div className="student-id-card relative w-full overflow-hidden rounded-[16px] border border-white/10 shadow-[0_14px_30px_rgba(8,16,28,0.26)]">
                  <img
                    src={profileCover}
                    alt="个人简介配图"
                    className="block aspect-[3/2] w-full object-cover object-center"
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
                    <span className="rounded-full border border-white/25 bg-white/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_4px_16px_rgba(8,16,28,0.22)] backdrop-blur-sm">
                      ID: Qin Yijia
                    </span>
                  </div>
                  <div className="pointer-events-none absolute bottom-3 right-3 flex flex-col items-end gap-1">
                    <div className="student-id-barcode h-8 w-24 rounded-sm opacity-95" />
                    <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/88">
                      Student Card
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <section id="projects" className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-slate-300">
                精选作品 / Project Portfolio
              </h2>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#66c0f4]">Recent Project</span>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="steam-featured overflow-hidden rounded-[24px]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="steam-featured-media min-h-[360px] overflow-hidden rounded-l-[24px]">
                  <div className="steam-screenshot-placeholder relative h-full min-h-[320px] w-full overflow-hidden rounded-none border-0 bg-[#101822] shadow-none">
                    <img
                      src={roguelikeCover}
                      alt={`${featuredProject.title} 项目封面`}
                      className="h-full w-full object-contain object-center"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,26,0.12),rgba(12,18,26,0)_18%,rgba(12,18,26,0)_82%,rgba(12,18,26,0.22)),linear-gradient(90deg,rgba(12,18,26,0.12),rgba(12,18,26,0)_12%,rgba(12,18,26,0)_88%,rgba(12,18,26,0.18))]" />
                  </div>
                </div>

                <div className="space-y-6 p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#e7a843]/40 bg-[#f0ad2c]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffd27a]">
                      <Swords className="h-3.5 w-3.5" />
                      Featured Project
                    </span>
                    <span className="text-sm font-medium text-slate-300">{featuredProject.subtitle}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-4xl font-bold tracking-tight text-white">{featuredProject.title}</h3>
                    <p className="max-w-2xl text-sm leading-7 text-slate-200">
                      一款黑暗幻想风格的 Roguelike 生存 Demo。你将在持续升压的战场中决定坚守誓言，或主动拥抱代价更高的力量。
                    </p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    {featuredSignals.map((signal) => (
                      <div key={signal.label} className="rounded-2xl border border-white/10 bg-[#16202d] p-4">
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{signal.label}</p>
                        <p className="mt-2 text-sm font-medium leading-6 text-white">{signal.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">项目亮点</p>
                    <ul className="space-y-3 text-sm leading-7 text-slate-100">
                      {featuredProject.highlights?.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#ffd27a] shadow-[0_0_12px_rgba(255,210,122,0.45)]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-[#101822]/70 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">玩法流程</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {oathSteps.map((step, index) => (
                        <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ffd27a]/40 bg-[#f0ad2c]/10 text-xs font-bold text-[#ffd27a]">
                            0{index + 1}
                          </div>
                          <div className="text-sm text-slate-100">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-[#1f2f42] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {renderLinks(featuredProject.title, featuredProject.links)}
                </div>
              </div>
            </motion.article>

            <div className="grid gap-6 lg:grid-cols-2">
              {otherProjects.map((project, index) => {
                const projectImage = projectImages[project.title];

                return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="steam-card overflow-hidden rounded-[20px]"
                >
                  {projectImage ? (
                    <div className="steam-card-media p-4">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] border border-white/10 bg-[#101822] shadow-[0_18px_36px_rgba(8,16,28,0.28)]">
                        <img
                          src={projectImage}
                          alt={`${project.title} 项目封面`}
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,34,0.22),rgba(16,24,34,0)_18%,rgba(16,24,34,0)_82%,rgba(16,24,34,0.22)),linear-gradient(90deg,rgba(16,24,34,0.22),rgba(16,24,34,0)_12%,rgba(16,24,34,0)_88%,rgba(16,24,34,0.22))]" />
                      </div>
                    </div>
                  ) : null}
                  <div className="space-y-4 p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span className="text-sm font-medium text-slate-400">{project.subtitle}</span>
                    </div>
                    {project.description ? <p className="text-sm leading-7 text-slate-200">{project.description}</p> : null}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-[#1f2f42] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {renderLinks(project.title, project.links)}
                  </div>
                </motion.article>
                );
              })}
            </div>

            <div id="skills" className="space-y-8 pt-12">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-slate-300">
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
                    className="steam-card rounded-[20px] p-6"
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <skill.icon className="h-4 w-4 text-[#66c0f4]" />
                      <p className="text-sm font-bold text-white">{skill.category}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-[#1f2f42] px-3 py-1 text-[11px] font-semibold text-slate-100"
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
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-slate-300">
                  联系方式 / Contact
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={`${info.label}-${index}`}
                    whileHover={{ scale: 1.02 }}
                    className="steam-card rounded-[20px] p-5"
                  >
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{info.label}</p>
                    <p className="text-sm font-medium text-white">{info.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>

      <footer className="relative mt-20 border-t border-white/10 bg-[#0f1923]/72 py-16 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-8 md:flex-row">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-slate-100">QIN YIJIA</div>
          <p className="text-xs text-slate-400">© 2025 Qin Yijia. Built with design, systems, and interactive thinking.</p>
          <div className="flex space-x-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <a
              href="https://github.com/yijiaqin726-max"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-slate-100"
            >
              GitHub
            </a>
            <a href="mailto:YIJIA012@e.ntu.edu.sg" className="transition-colors hover:text-slate-100">
              Email
            </a>
            <a href="#" className="transition-colors hover:text-slate-100">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
