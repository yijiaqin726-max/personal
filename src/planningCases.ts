export interface PlanningCaseLink {
  label: string;
  url: string;
  disabled?: boolean;
}

export interface PlanningCase {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: PlanningCaseLink;
}

export const planningCases: PlanningCase[] = [
  {
    title: "洛克王国：世界拆解案",
    subtitle: "在线文档链接待补充",
    description:
      "预留用于放置《洛克王国：世界》的游戏策划拆解文档入口，后续可替换为在线文档链接。",
    tags: ["游戏策划", "系统拆解", "玩法分析", "文档占位"],
    link: {
      label: "文档链接待补充",
      url: "#",
      disabled: true,
    },
  },
];
