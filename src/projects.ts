/**
 * 作品集数据配置文件
 * 新增项目时，只需在 projects 数组中添加一个新对象即可。
 */

export interface ProjectLink {
  label: string;
  url: string;
  type: "demo" | "github" | "doc" | "video";
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "自律游戏化人生",
    subtitle: "Self-Discipline Quest",
    description:
      "一个基于 React + Tailwind CSS 开发的游戏化自律追踪项目。通过任务记录、成长反馈和激励机制，增强用户日常自律体验，体现前端实现与产品设计结合能力。",
    tags: ["React", "Tailwind CSS", "Frontend", "Product"],
    links: [
      {
        label: "在线演示",
        url: "https://yijiaqin726-max.github.io/Qin-Yijia/self-discipline-quest/",
        type: "demo",
      },
    ],
  },
  // 新增项目示例（取消注释并修改即可）：
  // {
  //   title: "项目名称",
  //   subtitle: "English Name",
  //   description: "项目简介，1-3 句话。",
  //   tags: ["标签1", "标签2"],
  //   links: [
  //     { label: "在线演示", url: "https://...", type: "demo" },
  //     { label: "GitHub", url: "https://github.com/...", type: "github" },
  //   ],
  // },
];
