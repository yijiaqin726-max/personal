# 秦艺家 | Portfolio

个人作品集展示网站，基于 React + Tailwind CSS + Vite 构建，通过 GitHub Pages 部署。

## 在线访问

https://yijiaqin726-max.github.io/personal/

## 新增项目

编辑 `src/projects.ts`，在数组中添加一个新对象即可：

```ts
{
  title: "项目名称",
  subtitle: "English Name",
  description: "项目简介",
  tags: ["标签1", "标签2"],
  links: [
    { label: "在线演示", url: "https://...", type: "demo" },
  ],
}
```

推送到 `main` 分支后会自动部署。

## 本地开发

```bash
npm install
npm run dev
```

## 技术栈

- React 19
- Tailwind CSS 4
- Vite 6
- GitHub Actions + GitHub Pages
