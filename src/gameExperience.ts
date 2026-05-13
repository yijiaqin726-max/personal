import fpsBackground from "../assets/images/fps板块背景图.png";
import multiplayerBackground from "../assets/images/多人联机背景图.png";
import daughterBackground from "../assets/images/火山的女儿背景图.png";
import raisingBackground from "../assets/images/培育类背景图.png";
import textBackground from "../assets/images/文字游戏背景图.png";
import singleplayerBackground from "../assets/images/单机板块封面图.png";

export interface GameExperienceCategory {
  title: string;
  subtitle: string;
  tags: string[];
  representativeGames: string[];
  summary: string;
  designFocus: string;
  example: string;
  observationAngles: string[];
  backgroundImage?: string;
}

export const gameExperienceIntro = {
  title: "玩过，也拆过的系统",
  description:
    "这里不做游戏库盘点，只放我愿意继续拆下去的类型：它们能训练我观察规则、反馈、成长目标和玩家关系。",
  highlights: [
    "少列数量，多看系统。",
    "从玩家感受倒推规则设计。",
    "把体验问题翻译成可调整的参数和流程。",
  ],
};

export const gameExperienceCategories: GameExperienceCategory[] = [
  {
    title: "竞技射击",
    subtitle: "长期体验最深的核心方向",
    tags: ["FPS 竞技", "角色分工", "地图博弈", "商业化观察"],
    representativeGames: ["《守望先锋》", "《Counter-Strike 2》", "《Apex Legends》", "《VALORANT》"],
    summary:
      "FPS 最吸引我的是“每秒都在做选择”：站位、枪线、技能、信息差和团队节奏会一起决定玩家是否觉得公平、紧张、还想再来一局。",
    designFocus:
      "我会重点看角色定位是否清楚，地图是否制造有效冲突，击杀反馈是否足够爽，以及排位压力如何变成留存而不是劝退。",
    example:
      "例如《守望先锋》的英雄分工让我很直观地看到：系统策划不只是调数值，还要让坦克、输出、辅助在同一场战斗里都有明确职责和高光时刻。",
    observationAngles: ["角色定位", "枪械手感", "地图博弈", "竞技反馈", "商业化与用户粘性"],
    backgroundImage: fpsBackground,
  },
  {
    title: "多人合作生存",
    subtitle: "关注玩法闭环和玩家互动关系",
    tags: ["多人合作", "生存循环", "资源循环", "信息差", "团队分工"],
    representativeGames: ["《Raft》", "《The Forest》", "《Sons Of The Forest》", "《Grounded》", "《Project Winter》", "《鹅鸭杀》"],
    summary:
      "多人游戏好玩的地方常常不在系统本身，而在系统把玩家推到一起之后，会发生多少计划外的合作、争吵和临场决策。",
    designFocus:
      "我关注资源压力、信息差和阶段目标如何制造自然分工：谁探索、谁建造、谁冒险、谁背锅。",
    example:
      "例如《Raft》的漂流资源循环很简单，但因为物资有限、目标持续推进，玩家会自然分出采集、建造、导航等角色，合作关系是被系统“推出来”的。",
    observationAngles: ["信息不对称", "协作成本", "目标设计", "节奏控制", "联机体验"],
    backgroundImage: multiplayerBackground,
  },
  {
    title: "养成叙事",
    subtitle: "偏轻数值与陪伴感体验",
    tags: ["养成叙事", "事件反馈", "情绪价值", "角色塑造"],
    representativeGames: ["《火山的女儿》", "《中国式家长》", "《主播女孩重度依赖》"],
    summary:
      "养成类的关键不是数值涨了多少，而是玩家有没有觉得“这是我养出来的结果”。系统要给目标，也要给情绪回声。",
    designFocus:
      "我会拆成长曲线、事件触发和角色反馈如何互相支撑，避免数值是数值、剧情是剧情，两边各玩各的。",
    example:
      "例如《火山的女儿》里，属性成长会回到职业结局、角色关系和事件反馈中，玩家看到的不是一串数字，而是一段被自己养出来的人生。",
    observationAngles: ["养成反馈", "事件分支", "文本表达", "成长曲线", "陪伴感设计"],
    backgroundImage: daughterBackground,
  },
  {
    title: "单机角色扮演",
    subtitle: "关注选择反馈与沉浸感建立",
    tags: ["RPG", "选择驱动", "世界观表达", "角色关系", "沉浸感"],
    representativeGames: ["《Undertale》", "《博德之门3》"],
    summary:
      "强叙事游戏让我在意“选择有没有重量”。玩家不一定要改变世界，但至少要感觉系统记得自己做过什么。",
    designFocus:
      "我会看选项、关系、奖励和后果如何对齐，尤其是系统反馈能不能让剧情从文本变成玩家自己的经历。",
    example:
      "例如《博德之门3》会让角色态度、任务结果和后续对话持续回应玩家选择，这种反馈让“做决定”本身变成核心玩法。",
    observationAngles: ["世界观表达", "角色塑造", "选择反馈", "玩家代入感"],
    backgroundImage: singleplayerBackground,
  },
  {
    title: "培育经营",
    subtitle: "长期目标与收集驱动的观察",
    tags: ["模拟经营", "收集养成", "生态设计", "收集反馈", "长期目标"],
    representativeGames: ["《Monster Hunter Stories 2: Wings of Ruin》", "《宝可梦 朱、紫》", "《宝可梦传说 阿尔宙斯》", "《动物园之星》"],
    summary:
      "收集和培育的魅力在于长期目标：玩家今天多抓一只、多升一级，都像是在给未来的自己铺路。",
    designFocus:
      "我会看稀有度、成长成本、生态规则和经营目标如何形成循环，让玩家既有短期反馈，也有中长期惦记。",
    example:
      "例如《宝可梦传说 阿尔宙斯》把捕捉、图鉴研究和地图探索绑在一起，玩家不是为了收集而收集，而是在不断推进一个可见的研究目标。",
    observationAngles: ["收集驱动", "养成目标", "生态设计", "长期目标感", "反馈循环"],
    backgroundImage: raisingBackground,
  },
  {
    title: "文字叙事",
    subtitle: "有限资源下的表达效率",
    tags: ["文字游戏", "氛围表达", "文案节奏", "设定呈现", "低成本叙事"],
    representativeGames: ["《文字化化》", "《异次元》"],
    summary:
      "文字游戏资源少，但很考验信息投放。一个词、一段停顿、一次选择，都可能承担系统提示和情绪表达的双重任务。",
    designFocus:
      "我关注文本节奏、设定揭示和交互反馈如何配合，让玩家在低成本表达里也能获得明确目标和氛围压力。",
    example:
      "例如《文字化化》用语言理解障碍制造玩法压力，玩家在猜词、验证和推进剧情时，其实一直在和信息系统互动。",
    observationAngles: ["文本表现", "氛围塑造", "设定传达", "节奏控制"],
    backgroundImage: textBackground,
  },
];
