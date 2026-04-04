# 秦艺家 | Portfolio

> 个人作品集展示网站 — 简洁、数据驱动、一键部署

🔗 **在线访问：** https://yijiaqin726-max.github.io/personal/

---

## 预览

页面包含四个区块：个人简介（左侧 sticky）、精选作品、个人技能、联系方式。

---

## 技术栈

| 类别 | 技术 |
|---|---|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 6 |
| 样式 | Tailwind CSS 4 |
| 动画 | Motion (Framer Motion) |
| 图标 | Lucide React |
| 部署 | GitHub Pages |

---

## 项目结构

```
personal/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── 秦艺家_ai应用开发_resume.pdf
└── src/
    ├── main.tsx          # 入口
    ├── index.css         # 全局样式 + Tailwind 主题
    ├── App.tsx           # 主页面组件
    └── projects.ts       # ⭐ 作品数据（新增项目只改这里）
```

---

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（端口 3000）
npm run dev

# 构建
npm run build

# 预览构建产物
npm run preview
```

---

## 如何新增作品

打开 `src/projects.ts`，在 `projects` 数组末尾添加：

```typescript
{
  title: "项目名称",
  subtitle: "副标题或状态",
  description: "项目简介...",
  tags: ["React", "Node.js"],
  links: [
    { label: "GitHub", url: "https://github.com/...", type: "github" },
    { label: "在线演示", url: "https://...", type: "demo" },
    // 演示未上线时加 disabled: true，显示为灰色
    // { label: "在线演示", url: "#", type: "demo", disabled: true },
  ],
}
```

无需修改任何组件代码，保存后自动渲染。

---

## 当前作品

| 项目 | 状态 | GitHub | 演示 |
|---|---|---|---|
| 自律 Quest | ✅ 已上线 | [Repo](https://github.com/yijiaqin726-max/Qin-Yijia) | [Demo](https://yijiaqin726-max.github.io/Qin-Yijia/self-discipline-quest/) |
| AI 智能记账助手 | 🚧 开发中 | [Repo](https://github.com/yijiaqin726-max/AI-) | 未上线 |
| NoteFlow | 🚧 开发中 | [Repo](https://github.com/yijiaqin726-max) | 未上线 |

---

## 部署

项目通过 GitHub Pages 部署，`vite.config.ts` 中 `base` 设为 `/personal/`。

```bash
npm run build
# 将 dist/ 推送到 gh-pages 分支
```

---

## License

© 2025 Qin Yijia
