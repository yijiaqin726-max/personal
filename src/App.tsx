import { motion } from "motion/react";
import { 
  FileText, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ExternalLink,
} from "lucide-react";
import { projects } from "./projects";

const contactInfo = [
  { label: "电子邮箱", value: "YIJIA012@e.ntu.edu.sg", icon: Mail },
  { label: "电话", value: "19355179852", icon: Phone },
  { label: "GitHub", value: "github.com/yijiaqin726-max", icon: Github },
  { label: "所在地", value: "上海 / 新加坡", icon: MapPin },
];

export default function App() {
  return (
    <div className="min-h-screen font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-center">
        <div className="max-w-[1200px] w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="Manrope font-bold text-lg tracking-tight text-slate-900">
              秦艺家 <span className="font-normal text-slate-400 ml-1 text-sm uppercase">Portfolio</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-sm font-medium text-slate-900 hover:text-secondary transition-colors">首页</a>
            <a href="#projects" className="text-sm font-medium text-slate-500 hover:text-secondary transition-colors">作品</a>
            <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-secondary transition-colors">联系方式</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-8 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Profile & Info */}
          <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-32 h-fit">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              id="home" 
              className="space-y-6"
            >
              <div className="space-y-2">
                <h1 className="font-headline text-5xl font-extrabold tracking-tight text-slate-900">秦艺家</h1>
                <div className="flex flex-col text-slate-500 font-medium">
                  <span>NTU 硕士</span>
                  <span>安徽大学本科</span>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>上海 / 新加坡</span>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                AI 应用开发 / AI 产品经理
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed">
                专注 AI 应用开发与 AI 产品经理。热衷于在学术严谨性与用户体验之间架起桥梁，致力于将智能技术转化为触手可及的产品落地。
              </p>
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex gap-3">
                  <a href="#" className="flex-1 bg-slate-900 text-white text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    获取简历
                  </a>
                  <a href="https://github.com/yijiaqin726-max" target="_blank" rel="noreferrer" className="flex-1 bg-white border border-slate-200 text-slate-900 text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
                <a href="#contact" className="w-full text-center py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all border border-transparent hover:border-slate-100">
                  联系我
                </a>
              </div>
            </motion.section>
          </aside>

          {/* Right Column: Project List */}
          <div className="lg:col-span-8">
            <section id="projects" className="space-y-12">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-headline text-xs font-bold tracking-[0.2em] uppercase text-slate-400">精选作品 / Project Portfolio</h2>
              </div>
              
              <div className="space-y-0">
                {projects.map((project, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group py-10 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:bg-slate-50/50 -mx-4 px-4 rounded-xl"
                  >
                    <div className="flex-grow space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                        <span className="text-slate-400 font-medium text-sm">{project.subtitle}</span>
                      </div>
                      <p className="text-slate-600 text-sm max-w-xl leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.links.map((link, linkIndex) => (
                        <span key={linkIndex} className="flex items-center gap-3">
                          {linkIndex > 0 && <span className="w-[1px] h-3 bg-slate-200"></span>}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`text-xs font-bold flex items-center gap-1 ${
                              link.type === "demo"
                                ? "text-secondary hover:underline underline-offset-4"
                                : "text-slate-500 hover:text-slate-900 transition-colors"
                            }`}
                          >
                            {link.label}
                            {link.type === "demo" && <ArrowUpRight className="w-3 h-3" />}
                            {link.type === "github" && <ExternalLink className="w-3 h-3" />}
                          </a>
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Grid */}
              <div id="contact" className="pt-12 space-y-8">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="font-headline text-xs font-bold tracking-[0.2em] uppercase text-slate-400">联系方式 / Contact</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors bg-white"
                    >
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="text-sm font-medium text-slate-900">{info.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="w-full py-16 border-t border-slate-100 mt-20 bg-slate-50/30">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-bold text-slate-900 uppercase tracking-[0.3em]">QIN YIJIA</div>
          <p className="text-slate-400 text-xs">
            © 2025 Qin Yijia. Built with Academic Rigor & AI.
          </p>
          <div className="flex space-x-6 text-xs font-semibold text-slate-500 uppercase tracking-widest">
            <a href="https://github.com/yijiaqin726-max" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href="mailto:YIJIA012@e.ntu.edu.sg" className="hover:text-slate-900 transition-colors">Email</a>
            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
