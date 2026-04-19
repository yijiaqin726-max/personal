import fpsBackground from "../fps板块背景图.png";
import multiplayerBackground from "../多人联机背景图.png";
import daughterBackground from "../火山的女儿背景图.png";
import raisingBackground from "../培育类背景图.png";
import textBackground from "../文字游戏背景图.png";

export interface GameExperienceCategory {
  title: string;
  subtitle: string;
  tags: string[];
  representativeGames: string[];
  summary: string;
  designFocus: string;
  observationAngles: string[];
  backgroundImage?: string;
}

export const gameExperienceIntro = {
  title: "体验过的游戏类型",
  description:
    "这一页不是游戏库陈列，而是我基于长期体验整理出来的重点品类观察。相比单纯记录玩过什么，我更希望呈现自己长期投入过、能够拆解玩法结构、并且愿意继续深入分析的方向。",
  highlights: [
    "以策划求职相关品类为主，保留可展开分析的高价值内容。",
    "强调长期体验、玩法理解和设计拆解能力，而不是数量展示。",
    "聚焦我熟悉的类型、可分析的设计方向和真实观察视角。",
  ],
};

export const gameExperienceCategories: GameExperienceCategory[] = [
  {
    title: "FPS / 竞技射击",
    subtitle: "长期体验最深的核心方向",
    tags: ["FPS / 竞技", "角色分工", "地图博弈", "商业化观察"],
    representativeGames: ["守望先锋", "Counter-Strike 2", "Apex Legends", "VALORANT"],
    summary:
      "FPS 是我理解最深的品类之一。相比单纯游玩，我更关注竞技游戏中的角色分工、地图结构、数值平衡、击杀反馈、排位压力和长期留存逻辑。",
    designFocus:
      "我参加过线下比赛，也在这类游戏上投入了较长时间，因此会更自然地从玩家生态、排位环境、版本变化和团队协作角度理解设计取舍。",
    observationAngles: ["角色定位", "枪械手感", "地图博弈", "竞技反馈", "商业化与用户粘性"],
    backgroundImage: fpsBackground,
  },
  {
    title: "多人联机 / 生存合作",
    subtitle: "关注玩法闭环和玩家互动关系",
    tags: ["多人合作 / 生存", "资源循环", "信息差", "团队分工"],
    representativeGames: ["Raft", "The Forest", "Sons Of The Forest", "Grounded", "Project Winter", "鹅鸭杀"],
    summary:
      "我对多人合作和生存类游戏的兴趣主要集中在协作关系、资源分配、信息不对称和局内节奏设计上。这类游戏让我更关注玩法闭环和玩家互动如何共同驱动体验。",
    designFocus:
      "相比单纯生存压力，我更在意游戏如何通过信息差、协作成本和阶段目标让团队关系不断变化，以及玩家之间如何形成自然分工。",
    observationAngles: ["信息不对称", "协作成本", "目标设计", "节奏控制", "联机体验"],
    backgroundImage: multiplayerBackground,
  },
  {
    title: "养成 / 叙事 / 情感驱动",
    subtitle: "偏轻数值与陪伴感体验",
    tags: ["养成 / 叙事", "事件反馈", "情绪价值", "角色塑造"],
    representativeGames: ["火山的女儿", "中国式家长", "主播女孩重度依赖"],
    summary:
      "在养成和叙事驱动作品里，我更关注角色成长反馈、事件选择带来的情绪波动，以及文本和系统如何共同塑造陪伴感。",
    designFocus:
      "这类作品让我更注意轻数值系统如何服务情绪表达，以及成长曲线、事件分支和角色塑造之间是否形成统一体验。",
    observationAngles: ["养成反馈", "事件分支", "文本表达", "成长曲线", "陪伴感设计"],
    backgroundImage: daughterBackground,
  },
  {
    title: "单机 / 角色扮演 / 强叙事",
    subtitle: "关注选择反馈与沉浸感建立",
    tags: ["RPG / 选择驱动", "世界观表达", "角色关系", "沉浸感"],
    representativeGames: ["Undertale", "博德之门3"],
    summary:
      "相比纯流程推进，我更关注叙事型游戏如何通过角色关系、玩家选择和系统反馈建立沉浸感与记忆点。",
    designFocus:
      "这部分不是追求数量，而是通过少量代表作品观察 RPG 如何把世界观表达、角色塑造和选择后果落实到具体体验中。",
    observationAngles: ["世界观表达", "角色塑造", "选择反馈", "玩家代入感"],
  },
  {
    title: "培育 / 模拟经营 / 怪物养成",
    subtitle: "长期目标与收集驱动的观察",
    tags: ["模拟经营 / 收集养成", "生态设计", "收集反馈", "长期目标"],
    representativeGames: ["Monster Hunter Stories 2: Wings of Ruin", "宝可梦 朱 / 紫", "宝可梦传说 阿尔宙斯", "动物园之星"],
    summary:
      "这类游戏吸引我的地方在于长期目标的建立方式：玩家如何因为收集欲、成长反馈和系统目标而持续投入。",
    designFocus:
      "我会特别关注收集系统如何建立中长期动机，以及养成、生态和经营目标是否能形成持续推进的反馈循环。",
    observationAngles: ["收集驱动", "养成目标", "生态设计", "长期目标感", "反馈循环"],
    backgroundImage: raisingBackground,
  },
  {
    title: "文字 / 文本驱动游戏",
    subtitle: "有限资源下的表达效率",
    tags: ["文字游戏 / 氛围表达", "文案节奏", "设定呈现", "低成本叙事"],
    representativeGames: ["文字化化", "异次元"],
    summary:
      "文字驱动游戏让我更关注有限资源下的表达效率，以及文本、设定和节奏如何共同建立氛围。",
    designFocus:
      "这一类作品会让我思考，当视觉和系统资源更克制时，文案、设定和信息投放节奏如何承担更多的情绪表达任务。",
    observationAngles: ["文本表现", "氛围塑造", "设定传达", "节奏控制"],
    backgroundImage: textBackground,
  },
];

export const gameExperienceSummary =
  "这些内容更像是我基于长期体验做的玩法观察和设计拆解，而不是单纯的游玩记录。对我来说，持续体验重点品类的过程，也是不断训练自己如何理解玩家感受、分析系统结构和提炼设计问题的过程。";
