import { useEffect, useState } from "react";
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
  Moon,
  Phone,
  Server,
  Sparkles,
  Sun,
  Swords,
  Wrench,
} from "lucide-react";
import { GameExperienceSection } from "./GameExperienceSection";
import { PlanningCaseSection } from "./PlanningCaseSection";
import { projects } from "./projects";
import aiBookkeepingCover from "../记账首页图.jpg";
import selfDisciplineQuestCover from "../自律首页图.jpg";
import gameJamCoverOne from "../光子大赛GameJam封面1.png";
import gameJamCoverTwo from "../光子大赛GameJam封面2.png";
import gameJamCoverThree from "../光子大赛GameJam封面3.png";
import gameJamCoverFour from "../光子大赛GameJam封面4.png";
import profileCover from "../简介图_ 三比二比例.jpg";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "作品", href: "#projects" },
  { label: "游戏体验", href: "#game-experience" },
  { label: "策划拆解", href: "#planning-cases" },
  { label: "技能", href: "#skills" },
  { label: "联系", href: "#contact" },
];

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
  { label: "邮箱", value: "YIJIA012@e.ntu.edu.sg", href: "mailto:YIJIA012@e.ntu.edu.sg", icon: Mail },
  { label: "电话", value: "19355179852", href: "tel:19355179852", icon: Phone },
  { label: "GitHub", value: "github.com/yijiaqin726-max", href: "https://github.com/yijiaqin726-max", icon: Github },
  { label: "所在地", value: "上海 / 新加坡", href: "#contact", icon: MapPin },
];

const gameJamSteps = ["角色移动与跳跃手感", "场景机关与关卡触发", "全部关卡制作与调试", "节奏打磨与提交整合"];

const featuredSignals = [
  { label: "项目类型", value: "光子大赛 GameJam 作品" },
  { label: "玩法方向", value: "2D 横版闯关 + 场景探索" },
  { label: "负责内容", value: "主程序、关卡制作、Unity / C# 实现" },
];

const gameJamCovers = [
  { src: gameJamCoverOne, alt: "森林关卡截图" },
  { src: gameJamCoverTwo, alt: "天空与飞鸟关卡截图" },
  { src: gameJamCoverThree, alt: "蓝色树影关卡截图" },
  { src: gameJamCoverFour, alt: "室内关卡截图" },
];

const projectImages: Record<string, string> = {
  "自律 Quest": selfDisciplineQuestCover,
  "AI 智能记账助手": aiBookkeepingCover,
};

function renderLinks(projectTitle: string, links: (typeof projects)[number]["links"]) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((link) =>
        link.disabled ? (
          <span key={`${projectTitle}-${link.label}`} className="portfolio-link portfolio-link-disabled">
            {link.label}
          </span>
        ) : (
          <a
            key={`${projectTitle}-${link.label}`}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={link.type === "demo" ? "portfolio-link portfolio-link-primary" : "portfolio-link"}
          >
            {link.label}
            {link.type === "demo" ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ExternalLink className="h-3.5 w-3.5" />}
          </a>
        ),
      )}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "dark" ? "dark" : "light";
  });
  const [featuredProject, ...otherProjects] = projects;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="page-shell min-h-screen font-body text-on-surface">
      <div className="site-backdrop" aria-hidden="true" />

      <nav className="portfolio-nav fixed top-0 z-50 flex w-full justify-center px-4 py-3 md:px-6">
        <div className="nav-inner flex w-full max-w-[1280px] items-center justify-between">
          <a href="#home" className="brand-lockup" aria-label="回到首页">
            <span className="brand-dot" />
            <span>QIN YIJIA</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.slice(1).map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="/秦艺家_ai应用开发_resume.pdf" target="_blank" rel="noreferrer" className="nav-cta hidden sm:inline-flex">
              简历
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
              className="theme-toggle-button"
              aria-label={theme === "dark" ? "切换到日间模式" : "切换到夜间模式"}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto max-w-[1280px] px-4 pb-24 pt-24 md:px-8 md:pt-28">
        <section id="home" className="space-y-12 md:space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="stitch-hero"
          >
            <div className="hero-content">
              <div className="space-y-7">
                <div className="space-y-4">
                  <p className="eyebrow text-primary">Game Systems / AI Portfolio</p>
                  <h1 className="hero-title">秦艺家</h1>
                  <p className="hero-subtitle">
                    游戏策划方向作品集。关注系统设计、玩法循环、玩家反馈与 AI 工具化落地，把技术实现和体验拆解连接成可执行方案。
                  </p>
                </div>

                <div className="hero-stat-grid">
                  <div className="info-tile">
                    <Calendar className="h-4 w-4 text-primary" />
                    <p className="tile-label">硕士</p>
                    <p className="tile-value">南洋理工大学 · 计算机控制与自动化</p>
                  </div>
                  <div className="info-tile">
                    <Sparkles className="h-4 w-4 text-secondary" />
                    <p className="tile-label">本科</p>
                    <p className="tile-value">安徽大学 · 数字媒体技术</p>
                    <p className="tile-note">美国信息系统交换生</p>
                  </div>
                  <div className="info-tile">
                    <MapPin className="h-4 w-4 text-tertiary" />
                    <p className="tile-label">期望职位</p>
                    <p className="tile-value">系统策划 / AI 产品方向</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/yijiaqin726-max" target="_blank" rel="noreferrer" className="primary-action">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a href="#projects" className="secondary-action">
                    查看作品
                  </a>
                  <a href="#contact" className="secondary-action">
                    联系我
                  </a>
                </div>
              </div>

              <div className="hero-portrait-wrap">
                <div className="hero-portrait">
                  <img src={profileCover} alt="秦艺家个人简介配图" className="h-full w-full object-cover object-center" />
                  <div className="portrait-badge">
                    <span>Student Card</span>
                    <strong>ID: QIN YIJIA</strong>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <section id="projects" className="space-y-8">
            <div className="section-heading">
              <div>
                <p className="eyebrow text-primary">Portfolio</p>
                <h2>精选作品 / Project Portfolio</h2>
              </div>
              <span>Recent Project</span>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="featured-project"
            >
              <div className="featured-media-grid">
                {gameJamCovers.map((cover, index) => (
                  <img
                    key={cover.src}
                    src={cover.src}
                    alt={`${featuredProject.title} ${cover.alt}`}
                    className={index === 0 ? "featured-media-large" : ""}
                  />
                ))}
              </div>

              <div className="featured-copy">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="featured-badge">
                    <Swords className="h-3.5 w-3.5" />
                    Featured Project
                  </span>
                  <span className="project-subtitle">{featuredProject.subtitle}</span>
                </div>

                <div className="space-y-3">
                  <h3>{featuredProject.title}</h3>
                  <p>
                    这是一次以快速落地和完整体验为目标的 2D 闯关 GameJam 项目。我担任主程序，负责 Unity 与 C# 侧的核心实现，并独立完成全部关卡搭建，让角色移动、场景变化和关卡节奏形成可玩的完整流程。
                  </p>
                </div>

                <div className="signal-grid">
                  {featuredSignals.map((signal) => (
                    <div key={signal.label} className="signal-tile">
                      <p>{signal.label}</p>
                      <strong>{signal.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="mini-heading">项目亮点</p>
                  <ul className="space-y-3">
                    {featuredProject.highlights?.map((highlight) => (
                      <li key={highlight} className="highlight-row">
                        <span />
                        <p>{highlight}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="process-panel">
                  <p className="mini-heading">制作流程</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {gameJamSteps.map((step, index) => (
                      <div key={step} className="process-step">
                        <span>0{index + 1}</span>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="neon-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {renderLinks(featuredProject.title, featuredProject.links)}
              </div>
            </motion.article>

            <div className="project-grid">
              {otherProjects.map((project, index) => {
                const projectImage = projectImages[project.title];

                return (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="project-card"
                  >
                    {projectImage ? (
                      <div className="project-card-media">
                        <img src={projectImage} alt={`${project.title} 项目封面`} className="h-full w-full object-cover object-center" />
                      </div>
                    ) : (
                      <div className="project-card-empty">
                        <Sparkles className="h-10 w-10" />
                      </div>
                    )}
                    <div className="space-y-4 p-5 md:p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3>{project.title}</h3>
                        <span>{project.subtitle}</span>
                      </div>
                      {project.description ? <p>{project.description}</p> : null}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="neon-chip">
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

            <GameExperienceSection />
            <PlanningCaseSection />

            <section id="skills" className="space-y-8 pt-12">
              <div className="section-heading">
                <div>
                  <p className="eyebrow text-secondary">Expertise</p>
                  <h2>个人技能 / Skills</h2>
                </div>
              </div>
              <div className="skill-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="skill-card"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="skill-icon">
                        <skill.icon className="h-4 w-4" />
                      </div>
                      <p>{skill.category}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span key={item} className="neon-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="contact" className="space-y-8 pt-12">
              <div className="section-heading">
                <div>
                  <p className="eyebrow text-primary">Contact</p>
                  <h2>联系方式</h2>
                </div>
              </div>
              <div className="contact-grid">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={`${info.label}-${index}`}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="contact-card"
                  >
                    <info.icon className="h-5 w-5" />
                    <span>{info.label}</span>
                    <strong>{info.value}</strong>
                  </motion.a>
                ))}
              </div>
            </section>
          </section>
        </section>
      </main>

      <footer className="site-footer">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-5 px-8 md:flex-row">
          <div className="brand-lockup">
            <span className="brand-dot" />
            <span>QIN YIJIA</span>
          </div>
          <p>© 2026 Qin Yijia. Built with design, systems, and interactive thinking.</p>
          <div className="flex gap-5">
            <a href="https://github.com/yijiaqin726-max" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:YIJIA012@e.ntu.edu.sg">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
