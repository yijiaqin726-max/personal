export interface ProjectLink {
  label: string;
  url: string;
  type: "demo" | "github" | "doc" | "video";
  disabled?: boolean;
}

export interface Project {
  title: string;
  subtitle: string;
  description?: string;
  highlights?: string[];
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "光子大赛 GameJam",
    subtitle: "2D 闯关原型",
    tags: ["GameJam", "2D Platformer", "Unity", "C#"],
    featured: true,
    highlights: [
      "用 Unity 与 C# 搭建角色控制、关卡触发、场景切换和基础交互，保证核心循环能被真实游玩验证。",
      "独立完成关卡搭建，把跳跃距离、探索路线和场景节奏调整成可理解、可失败、可再试的挑战曲线。",
      "从实现反推体验问题：哪里需要即时反馈，哪里需要放慢节奏，哪里不能只靠玩家自己猜。",
    ],
    links: [],
  },
  {
    title: "自律 Quest",
    subtitle: "任务成长系统原型",
    description:
      "把日常任务改造成一套轻量成长系统：任务完成给经验，连续打卡给反馈，技能升级给长期目标。重点不是“做待办”，而是设计一个让用户愿意回来看的反馈循环。",
    tags: ["Vue3", "Pinia", "Vue Router", "Vite"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yijiaqin726-max/Qin-Yijia",
        type: "github",
      },
      {
        label: "在线演示",
        url: "https://yijiaqin726-max.github.io/Qin-Yijia/self-discipline-quest/",
        type: "demo",
      },
    ],
  },
  {
    title: "AI 智能记账助手",
    subtitle: "AI 输入到结构化结果",
    description:
      "把一句随手记账的话拆成金额、日期、类别和统计结果。这个项目更像一次系统策划练习：如何定义输入规则、容错边界和结果反馈，让 AI 不只是聊天，而是进入可管理的流程。",
    tags: ["React", "Node.js", "OpenAI API", "Prompt Engineering"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yijiaqin726-max/AI-",
        type: "github",
      },
      {
        label: "在线演示",
        url: "https://yijiaqin726-max.github.io/AI-/",
        type: "demo",
      },
    ],
  },
];
