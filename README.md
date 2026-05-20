# Xingxi's Space

一个使用 Hexo 与 Fluid 主题搭建的学术博客型个人网站，用于整理公共治理、政治学、城市研究与学术写作相关的笔记、项目和随笔。

## 本地安装

```powershell
npm install
```

## 本地预览

```powershell
npm run server
```

默认访问地址为 `http://localhost:4000/`。

## 生成静态文件

```powershell
npm run clean
npm run build
```

生成结果会输出到 `public/`，该目录已写入 `.gitignore`，不要提交到源码仓库。

## 新建文章

```powershell
npx hexo new "文章标题"
```

文章位于 `source/_posts/`。在文章 front matter 中可以设置分类与标签，例如：

```yaml
categories:
  - 随笔
tags:
  - 学术博客
  - 写作
```

## 页面结构

- 首页：`/`
- 归档：`/archives/`
- 分类：`/categories/`
- 标签：`/tags/`
- 研究项目：`/projects/`
- 论文写作：`/publications/`
- 关于：`/about/`

## GitHub Pages 部署

仓库所有者是 `LapinGris`，仓库名是 `shenxingxi.github.io`。这不一定会被 GitHub 自动识别为用户主页仓库，因此本项目提供 GitHub Actions 工作流，通过 Actions 构建 Hexo 并发布 `public/` 到 GitHub Pages。

启用方式：

1. 将源码推送到 GitHub 仓库。
2. 在仓库 `Settings -> Pages` 中，将 `Build and deployment` 的 `Source` 设为 `GitHub Actions`。
3. 推送到 `main` 分支后，`.github/workflows/pages.yml` 会执行构建与发布。

GitHub Pages 项目页通常部署在 `https://lapingris.github.io/shenxingxi.github.io/`。因此 Actions 构建时会额外读取 `_config.github.yml`，把站点根路径设置为 `/shenxingxi.github.io/`。如果以后绑定自定义域名，可以把 `_config.github.yml` 中的 `root` 改回 `/`。

## Vercel 部署

也可以使用 Vercel：

- Import Project：导入 `https://github.com/LapinGris/shenxingxi.github.io`
- Install Command：`npm install`
- Build Command：`npx hexo generate`
- Output Directory：`public`

Vercel 部署一般使用根路径 `/`，无需读取 `_config.github.yml`。

## 常用维护命令

```powershell
npm install
npm run server
npm run clean
npm run build
```
