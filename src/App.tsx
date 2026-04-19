import { motion } from "motion/react";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ExternalLink,
  Calendar,
  Gamepad2,
  Layout,
  Server,
  Wrench,
} from "lucide-react";
import { projects } from "./projects";

const skills = [
  {
    category: "游戏策划",
    icon: Gamepad2,
    items: [
      "系统策划",
      "玩法循环设计",
      "Roguelike 机制设计",
      "PRD 撰写",
      "功能拆分",
      "版本迭代规划",
      "UI 展示思路",
      "原型推进",
    ],
  },
  {
    category: "游戏原型与前端",
    icon: Layout,
    items: ["Unity", "C#", "React", "Vue3", "JavaScript (ES6+)", "HTML/CSS", "Vite"],
  },
  {
    category: "开发协同",
    icon: Server,
    items: ["Node.js", "Express", "Python", "RESTful API", "跨职能协作", "需求落地"],
  },
  {
    category: "工具",
    icon: Wrench,
    items: ["Git", "GitHub", "GitHub Pages", "Figma", "Chrome DevTools"],
  },
];

const contactInfo = [
  { label: "邮箱", value: "YIJIA012@e.ntu.edu.sg", icon: Mail },
  { label: "电话", value: "19355179852", icon: Phone },
  { label: "GitHub", value: "github.com/yijiaqin726-max", icon: Github },
  { label: "所在地", value: "上海 / 新加坡", icon: MapPin },
];

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <nav className="fixed top-0 z-50 flex w-full justify-center border-b border-slate-100 bg-white/80 px-8 py-4 backdrop-blur-md">
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
            <a
              href="#projects"
              className="text-sm font-medium text-slate-500 transition-colors hover:text-secondary"
            >
              作品
            </a>
            <a href="#skills" className="text-sm font-medium text-slate-500 transition-colors hover:text-secondary">
              技能
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-500 transition-colors hover:text-secondary"
            >
              联系方式
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-[1200px] px-8 pb-24 pt-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <aside className="h-fit space-y-10 lg:col-span-4 lg:sticky lg:top-32">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              id="home"
              className="space-y-6"
            >
              <div className="space-y-2">
                <h1 className="font-headline text-5xl font-extrabold tracking-tight text-slate-900">秦艺家</h1>
                <div className="flex flex-col font-medium text-slate-500">
                  <div className="mb-1 flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>2003年8月</span>
                  </div>
                  <span>NTU 硕士（预计2027）</span>
                  <span>安徽大学本科</span>
                  <span className="text-sm text-slate-400">纽约石溪大学交换生</span>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>上海 / 新加坡</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex gap-3">
                  <a
                    href="https://github.com/yijiaqin726-max"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-slate-800"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </span>
                  </a>
                </div>
                <a
                  href="#contact"
                  className="w-full rounded-lg border border-transparent py-2.5 text-center text-sm font-semibold text-slate-500 transition-all hover:border-slate-100 hover:bg-slate-50 hover:text-slate-900"
                >
                  联系我
                </a>
              </div>
            </motion.section>
          </aside>

          <div className="lg:col-span-8">
            <section id="projects" className="space-y-12">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  精选作品 / Project Portfolio
                </h2>
              </div>

              <div className="space-y-0">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group -mx-4 flex flex-col justify-between gap-6 rounded-xl border-b border-slate-100 px-4 py-10 transition-all hover:bg-slate-50/50 md:flex-row md:items-center"
                  >
                    <div className="flex-grow space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                        <span className="text-sm font-medium text-slate-400">{project.subtitle}</span>
                      </div>
                      {project.description ? (
                        <p className="max-w-xl text-sm leading-relaxed text-slate-600">{project.description}</p>
                      ) : null}
                      {project.highlights ? (
                        <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-slate-600">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2">
                              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-300" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.links.map((link, linkIndex) => (
                        <span key={`${project.title}-${link.label}`} className="flex items-center gap-3">
                          {linkIndex > 0 && <span className="h-3 w-[1px] bg-slate-200" />}
                          {link.disabled ? (
                            <span className="cursor-default text-xs font-bold text-slate-300 flex items-center gap-1">
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
                  </motion.div>
                ))}
              </div>

              <div id="skills" className="space-y-8 pt-12">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
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
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="rounded-xl border border-slate-100 bg-white p-5 transition-colors hover:border-slate-200"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-slate-400" />
                        <p className="text-sm font-bold text-slate-900">{skill.category}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="rounded bg-slate-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400"
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
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    联系方式 / Contact
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={`${info.label}-${index}`}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-xl border border-slate-100 bg-white p-4 transition-colors hover:border-slate-200"
                    >
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium text-slate-900">{info.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="mt-20 w-full border-t border-slate-100 bg-slate-50/30 py-16">
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
