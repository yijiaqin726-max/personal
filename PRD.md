# 个人作品集 GitHub Pages 产品文档

## 1. 项目名称

秦艺家个人作品集展示网站（Portfolio Website）

---

## 2. 项目背景

为了更方便地展示个人项目、作品链接、GitHub 仓库、在线演示和个人经历，基于 GitHub Pages 部署了一个统一的作品集主页。

该主页用于：

1. 对外展示个人身份与方向
2. 集中管理和展示作品链接（GitHub + 在线演示）
3. 方便后续持续新增项目，只需修改数据文件
4. 作为求职时可直接分享的个人主页链接

**线上地址：** https://yijiaqin726-max.github.io/personal/

---

## 3. 项目目标

### 3.1 核心目标

搭建一个简洁、清晰、可长期维护的个人作品集网站，支持 GitHub Pages 部署，并满足以下要求：

* 首页可展示个人简介
* 页面可集中展示多个作品链接
* 后续新增作品时操作简单
* 代码结构清晰，适合长期维护
* 页面风格简洁正式，适合求职场景

### 3.2 使用目标

该网站主要服务于以下场景：

* 求职时附在简历中
* 分享给面试官或 HR
* 用作个人项目导航页
* 后续逐步扩展成完整个人品牌主页

---

## 4. 用户定位

### 4.1 主要用户

* 招聘方 / HR
* 面试官
* 老师 / 同学 / 校友
* 对个人项目感兴趣的访问者

### 4.2 用户核心需求

访问者希望在短时间内快速知道：

* 你是谁
* 你的教育背景是什么
* 你的求职方向是什么
* 你做过哪些项目
* 每个项目能点进去看什么内容

---

## 5. 技术架构

### 5.1 技术栈

| 类别 | 技术 |
|---|---|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 6 |
| 样式 | Tailwind CSS 4（`@tailwindcss/vite` 插件） |
| 动画 | Motion（`motion/react`） |
| 图标 | Lucide React |
| 字体 | Inter + Manrope（Google Fonts） |
| 部署 | GitHub Pages（`base: '/personal/'`） |

### 5.2 项目结构

```
personal/
├── index.html              # 入口 HTML
├── metadata.json           # 项目元信息
├── package.json
├── tsconfig.json
├── vite.config.ts          # Vite 配置（base: /personal/）
├── public/
│   └── 秦艺家_ai应用开发_resume.pdf   # 可下载简历
└── src/
    ├── main.tsx            # React 挂载入口
    ├── index.css           # 全局样式 + Tailwind 主题变量
    ├── App.tsx             # 主页面组件（布局 + 所有区块）
    └── projects.ts         # 作品集数据配置（新增项目只改这里）
```

### 5.3 设计主题

* 主色：`#000000`（黑）
* 强调色：`#2563eb`（蓝）
* 背景色：`#ffffff`（白）
* 标题字体：Manrope
* 正文字体：Inter + PingFang SC

---

## 6. 页面结构与功能

### 6.1 导航栏（固定顶部）

毛玻璃半透明导航，包含锚点链接：

* 首页（`#home`）
* 作品（`#projects`）
* 技能（`#skills`）
* 联系方式（`#contact`）

### 6.2 左侧栏（桌面端 sticky）

采用 12 栏网格布局，左 4 栏 sticky 固定：

* **姓名**：秦艺家（大字标题）
* **出生年月**：2003年8月
* **教育背景**：NTU 硕士（预计2027）、安徽大学本科、石溪大学交换生
* **所在地**：上海 / 新加坡
* **方向标签**：AI 应用开发 / AI 产品经理
* **个人简介**：一段话描述
* **操作按钮**：
  - 获取简历（下载 PDF）
  - GitHub（跳转主页）
  - 联系我（锚点到联系方式区域）

### 6.3 作品集展示区域（右 8 栏）

每个作品以列表行形式展示，hover 有浅灰背景，带入场动画。

每个作品包含：
* `title`：项目名称
* `subtitle`：补充说明或状态（如"开发中"）
* `description`：项目简介
* `tags`：技术标签（大写小字灰底）
* `links`：GitHub 链接 + 在线演示链接
  - 已上线链接：可点击，演示为蓝色带箭头，GitHub 为灰色带外链图标
  - 未上线链接：灰色禁用态（`disabled: true`），不可点击

#### 当前作品列表

| # | 项目名 | subtitle | GitHub | 在线演示 | 演示状态 |
|---|---|---|---|---|---|
| 1 | 自律 Quest | 游戏化人生管理系统 | https://github.com/yijiaqin726-max/Qin-Yijia | https://yijiaqin726-max.github.io/Qin-Yijia/self-discipline-quest/ | ✅ 已上线 |
| 2 | AI 智能记账助手 | 开发中 | https://github.com/yijiaqin726-max/AI- | https://yijiaqin726-max.github.io/AI-/ | ✅ 已上线 |
| 3 | NoteFlow | Markdown 笔记应用 | https://github.com/yijiaqin726-max | # | ⏳ 未上线（灰色） |

### 6.4 技能展示区域

2×2 网格卡片布局，每个分类一张卡片：

| 分类 | 图标 | 技能项 |
|---|---|---|
| AI 应用 | Cpu | OpenAI API, Prompt Engineering, Function Calling, JSON Schema 输出约束, 结构化信息抽取 |
| 前端 | Layout | React, Vue3, JavaScript (ES6+), HTML/CSS, Zustand, Pinia, Vue Router, Vite |
| 后端 | Server | Node.js, Express, Python, RESTful API |
| 工具 | Wrench | Git, GitHub, GitHub Pages, Chrome DevTools |

### 6.5 联系方式区域

2×2 网格卡片，hover 放大效果：

* 电子邮箱：YIJIA012@e.ntu.edu.sg
* 电话：19355179852
* GitHub：github.com/yijiaqin726-max
* 所在地：上海 / 新加坡

### 6.6 页脚

居中三栏：品牌名 | 版权信息 | 外链（GitHub / Email / LinkedIn）

---

## 7. 数据驱动设计

作品数据集中维护在 `src/projects.ts`，数据结构：

```typescript
interface ProjectLink {
  label: string;      // "GitHub" | "在线演示"
  url: string;
  type: "demo" | "github" | "doc" | "video";
  disabled?: boolean; // true = 灰色不可点击
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}
```

### 新增项目操作步骤

1. 打开 `src/projects.ts`
2. 在 `projects` 数组末尾新增一个对象
3. 填写 title / subtitle / description / tags / links
4. 若演示未上线，在 demo link 上加 `disabled: true`
5. 提交部署即可

---

## 8. 后续迭代方向

- [ ] 深色模式支持
- [ ] 移动端汉堡菜单
- [ ] 项目详情页（点击跳转详细介绍）
- [ ] 访客统计（Google Analytics / Umami）
- [ ] 多语言支持（中/英切换）
- [ ] SEO 优化（meta tags、Open Graph）
- [ ] 个人博客模块

## 6.5 响应式显示

网站应支持电脑和手机访问。

最低要求：

* 手机端能正常阅读
* 链接按钮能正常点击
* 文本不会挤压错位
* 项目卡片会自动换行排列

---

## 6.6 GitHub Pages 部署支持

网站应默认兼容 GitHub Pages 部署。

要求包括：

* 可以直接通过仓库配置 Pages
* 首页入口使用 `index.html`
* 资源路径尽量简单，避免部署后路径出错
* 静态页面优先，减少复杂部署配置

---

## 7. 页面结构设计

## 7.1 页面模块

### 模块 1：顶部介绍区 Hero Section

展示姓名、背景、方向、自我介绍。

### 模块 2：作品列表区 Projects Section

展示多个作品项目卡片。

### 模块 3：个人技能区 Skills Section

位于作品列表区下方，展示个人技术技能，按类别分组展示：

* **AI 应用**：基于 OpenAI API 实现结构化信息抽取、Prompt 模板设计、Function Calling、JSON Schema 输出约束
* **前端**：React、Vue3、JavaScript (ES6+)、HTML/CSS、Zustand、Pinia、Vue Router、Vite
* **后端**：Node.js、Express、Python、RESTful API
* **工具**：Git、GitHub、GitHub Pages、Chrome DevTools

### 模块 4：联系方式区 Contact Section

展示 GitHub、邮箱、简历链接、LinkedIn（如有）。

---

## 7.2 页面信息层级

访问者进入页面后的阅读顺序应为：

1. 先看到你是谁（包含出生年月 2003年8月）
2. 再知道你的目标方向和教育背景
3. 再浏览你的项目
4. 查看个人技术技能
5. 最后找到联系方式

---

## 8. 内容设计要求

## 8.1 文案风格

整体文案建议：

* 简洁
* 正式
* 不夸张
* 偏求职风格
* 避免大段空话

### 建议避免

* 过长自述
* 太多情绪化表达
* 过于口语化
* 大量行业黑话

---

## 8.2 项目展示规则

每个项目简介尽量控制在 1 到 3 句内，突出：

* 这是做什么的
* 你在里面做了什么
* 有什么亮点

### 当前示例

**自律游戏化人生（Self-Discipline Quest）**
一个基于 React + Tailwind CSS 开发的游戏化自律追踪项目。通过任务记录、成长反馈和激励机制，增强用户日常自律体验，体现前端实现与产品设计结合能力。

---

## 9. 技术方案建议

## 9.1 推荐技术方案

如果目标是"先快速上线，后续方便维护"，推荐优先级如下：

### 方案 1：HTML + CSS + JavaScript

优点：

* 最适合 GitHub Pages
* 部署简单
* 后续维护成本低
* 最适合"作品链接展示型网站"

### 方案 2：React / Vue

适合后续想把网站做得更完整、更像正式产品时再升级。

当前如果重点是快速上线，建议先用静态页面版本。

---

## 9.2 推荐目录结构

```text
portfolio-site/
├── index.html
├── style.css
├── script.js
├── projects.js
├── assets/
│   ├── avatar.png
│   └── icons/
└── README.md
```

说明：

* `index.html`：页面主结构
* `style.css`：样式
* `script.js`：渲染逻辑
* `projects.js`：统一维护作品数据
* `assets/`：图片、图标等资源

---

## 10. 数据配置设计

为了方便新增作品，建议项目数据格式如下：

```js
const projects = [
  {
    title: "自律游戏化人生",
    subtitle: "Self-Discipline Quest",
    description: "A gamified self-discipline tracker built with React + Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Frontend", "Product"],
    links: {
      demo: "https://yijiaqin726-max.github.io/Qin-Yijia/self-discipline-quest/"
    }
  }
];
```

后续新增项目时，只需要继续往数组中添加新对象即可。

---

## 11. 视觉风格要求

整体风格建议：

* 白底或浅色底
* 黑灰文字
* 蓝色或深色按钮点缀
* 留白充足
* 卡片式布局
* 看起来专业、干净

### 关键词

* 简洁
* 理性
* 求职友好
* 不花哨
* 易读

---

## 12. 非功能需求

### 12.1 可维护性

代码清晰，项目数据集中配置，便于后续更新。

### 12.2 可扩展性

后续可以增加：

* 简历下载入口
* 深色模式
* 项目筛选标签
* 中英文切换
* 博客区
* 关于我单独页面

### 12.3 可访问性

文字对比度清楚，按钮大小适中，手机端可点击。

---

## 13. GitHub Pages 部署需求

### 13.1 部署方式

通过 GitHub 仓库的 Pages 功能发布。

### 13.2 要求

* 仓库内有首页文件 `index.html`
* 代码推送后可自动访问网页
* 页面链接稳定，便于写进简历

### 13.3 预期结果

访问者可通过 GitHub Pages 链接直接进入秦艺家的作品集主页。

---

## 14. 后续迭代方向

第一版先满足"能看、能点、能新增"。

后续可迭代：

### 第一阶段

* 基础介绍
* 作品链接展示
* GitHub Pages 上线

### 第二阶段

* 增加项目分类
* 增加项目封面图
* 增加简历下载按钮
* 增加联系方式区

### 第三阶段

* 增加博客或经历页面
* 增加英文版
* 增加更完整的个人品牌展示

---

## 15. 验收标准

满足以下条件即可认为第一版完成：

1. GitHub Pages 可正常打开
2. 页面顶部能展示"秦艺家"的个人简介
3. 页面主体能展示至少 1 个作品项目
4. 自律游戏化人生项目可点击进入对应 Live Demo
5. 新增作品时，只需要修改一处数据配置
6. 手机和电脑端都能正常浏览
7. 整体风格简洁，适合求职展示

---

## 16. 开发备注

为了保证后续维护轻松，开发时应遵循以下原则：

* 不把所有项目内容直接写死在 HTML 里
* 页面模块尽量分清楚
* 项目数据单独维护
* 样式保持统一
* 先做简单可用版本，再考虑动画和复杂交互

---

## 17. 当前已确认信息汇总

### 个人信息

* 姓名：秦艺家
* 背景：计算机硕士生，NTU 硕士毕业，安徽大学本科
* 目标方向：AI 应用开发、AI 产品经理

### 已确认项目

* 项目名：自律游戏化人生（Self-Discipline Quest）
* 简介：A gamified self-discipline tracker built with React + Tailwind CSS.
* 链接：`https://yijiaqin726-max.github.io/Qin-Yijia/self-discipline-quest/`
