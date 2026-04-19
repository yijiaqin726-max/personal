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
    title: "破誓圣骑士",
    subtitle: "Roguelike 生存 Demo",
    tags: ["Roguelike", "Unity", "C#"],
    featured: true,
    highlights: [
      "项目定位是 Roguelike 生存玩法，我负责核心系统设计和整体策划推进。",
      "我把传统升级三选一改成守誓 / 破誓选择，强化了玩法差异点。",
      "我设计了腐化值系统，让玩家在变强的同时承担失控风险。",
      "我用 Unity 和 C# 完成了可演示原型，便于后续测试和迭代。",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yijiaqin726-max/roguelike_demo",
        type: "github",
      },
      {
        label: "在线演示",
        url: "#",
        type: "demo",
        disabled: true,
      },
    ],
  },
  {
    title: "自律 Quest",
    subtitle: "游戏化人生管理系统",
    description:
      "基于 Vue3 + Pinia 构建多页面前端应用，完成任务看板、连续打卡统计、经验值增长与技能升级等核心模块。通过游戏化反馈机制增强用户参与感，加入动画反馈、成长可视化与任务联动记录。",
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
    subtitle: "开发中",
    description:
      "基于 Prompt 和 JSON Schema 约束，将用户自由文本解析为金额、日期、消费类别等结构化字段。构建 React 前端、Node.js 中间层和 OpenAI API 的完整链路，前端渲染分类统计与月度支出趋势图表。",
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
  {
    title: "NoteFlow",
    subtitle: "Markdown 笔记应用",
    description:
      "实现双栏 Markdown 编辑器，支持可拖拽分隔线调整宽度。构建无限层级文件夹系统，支持嵌套、展开/折叠、双击重命名、右键菜单递归删除。包含格式化工具栏与一键 PDF 导出，自动保存与实时字数统计。",
    tags: ["React", "Zustand", "Vite", "react-markdown"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yijiaqin726-max",
        type: "github",
      },
      {
        label: "在线演示",
        url: "#",
        type: "demo",
        disabled: true,
      },
    ],
  },
];
