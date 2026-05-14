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
    subtitle: "开放世界宠物养成方向观察",
    description:
      "准备用来拆《洛克王国：世界》的核心系统：宠物收集、养成目标、开放世界探索和长期留存。重点会放在“童年 IP 怎么变成可持续游玩的现代系统”。",
    tags: ["系统拆解", "宠物养成", "开放世界", "长期目标"],
    link: {
      label: "查看拆解文档",
      url: "https://mcnoxi3zpdcb.feishu.cn/wiki/SPj4wTq8Xi9746kwdxPc4jZgnuh?from=from_copylink",
    },
  },
];
