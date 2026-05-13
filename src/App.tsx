import { motion } from "motion/react";
import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Gamepad2,
  Github,
  Languages,
  Layout,
  Mail,
  MapPin,
  Phone,
  Server,
  Sparkles,
  Swords,
  Wrench,
} from "lucide-react";
import { GameExperienceSection } from "./GameExperienceSection";
import { PlanningCaseSection } from "./PlanningCaseSection";
import { projects } from "./projects";
import aiBookkeepingCover from "../assets/images/记账首页图.jpg";
import selfDisciplineQuestCover from "../assets/images/自律首页图.jpg";
import gameJamCoverOne from "../assets/images/光子大赛GameJam封面1.png";
import gameJamCoverTwo from "../assets/images/光子大赛GameJam封面2.png";
import gameJamCoverThree from "../assets/images/光子大赛GameJam封面3.png";
import profileCover from "../assets/images/简介图_ 三比二比例.jpg";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "作品", href: "#projects" },
  { label: "策划拆解", href: "#planning-cases" },
  { label: "游戏体验", href: "#game-experience" },
  { label: "技能", href: "#skills" },
  { label: "联系", href: "#contact" },
];

const skills = [
  {
    category: "游戏策划",
    icon: Gamepad2,
    items: ["系统拆解", "玩法循环", "成长反馈", "任务设计", "PRD 撰写", "版本节奏"],
  },
  {
    category: "原型与交互",
    icon: Layout,
    items: ["Unity", "C#", "交互原型", "反馈节奏", "UI 信息层级", "玩家路径"],
  },
  {
    category: "开发协同",
    icon: Server,
    items: ["需求拆分", "实现成本沟通", "Node.js", "React", "Vue3", "数据表达"],
  },
  {
    category: "工具",
    icon: Wrench,
    items: ["Git", "GitHub", "Figma", "Notion", "Excel 思维", "Chrome DevTools"],
  },
  {
    category: "英语沟通",
    icon: Languages,
    items: ["英语国家留学 4 年", "听说能力强", "英文资料阅读", "跨文化沟通", "英文文档理解"],
  },
];

const contactInfo = [
  { label: "邮箱", value: "YIJIA012@e.ntu.edu.sg", href: "mailto:YIJIA012@e.ntu.edu.sg", icon: Mail },
  { label: "电话", value: "19355179852", href: "tel:19355179852", icon: Phone },
  { label: "GitHub", value: "github.com/yijiaqin726-max", href: "https://github.com/yijiaqin726-max", icon: Github },
  { label: "所在地", value: "上海、新加坡", href: "#contact", icon: MapPin },
];

const gameJamSteps = ["确定核心操作", "搭建触发规则", "铺设关卡节奏", "压缩反馈闭环"];

const featuredSignals = [
  { label: "项目定位", value: "48h 内跑通核心体验的 GameJam 作品" },
  { label: "系统关注", value: "移动手感、关卡节奏、场景触发与反馈闭环" },
  { label: "负责内容", value: "主程序、全部关卡搭建、Unity 与 C# 实现" },
];

const gameJamCovers = [
  { src: gameJamCoverOne, alt: "森林关卡截图" },
  { src: gameJamCoverTwo, alt: "天空与飞鸟关卡截图" },
  { src: gameJamCoverThree, alt: "蓝色树影关卡截图" },
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
  const [featuredProject, ...otherProjects] = projects;

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
                  <p className="eyebrow text-primary">System Design Portfolio</p>
                  <div className="hero-title-row">
                    <h1 className="hero-title">秦艺家</h1>
                    <div className="hero-portrait-wrap">
                      <div className="hero-portrait">
                        <img src={profileCover} alt="秦艺家个人简介配图" className="h-full w-full object-cover object-center" />
                        <div className="portrait-badge">
                          <div className="portrait-qr" aria-hidden="true" />
                          <div>
                            <span>Student Card</span>
                            <strong>ID: QIN YIJIA</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="hero-subtitle">
                    这是一份作品集。Part1 有项目原型，Part2 有策划案和拆解，Part3 有玩过的游戏，最后是 Part4 我会的技术栈。
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
                    <p className="tile-value">系统策划、AI 产品方向</p>
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
            </div>
          </motion.section>

          <section id="projects" className="space-y-8">
            <div className="section-heading">
              <div>
                <p className="eyebrow text-primary">Portfolio</p>
                <h2>精选作品</h2>
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
                    一次从 0 到可玩的 2D 闯关原型。我负责核心实现和全部关卡，把角色手感、触发器、场景节奏和失败反馈串成一个完整体验。它不大，但很能暴露策划最常见的问题：规则能跑，不等于玩家愿意继续玩。
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

            <PlanningCaseSection />
            <GameExperienceSection />

            <section id="skills" className="space-y-8 pt-12">
              <div className="section-heading">
                <div>
                  <p className="eyebrow text-secondary">Expertise</p>
                  <h2>个人技能</h2>
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
