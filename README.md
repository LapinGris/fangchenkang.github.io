# Fangchen's Space

这是 Fangchen Kang 的 Hexo + Fluid 学术博客项目，用于整理个人简介、研究项目、阅读笔记和普通博客文章。当前网站按 GitHub Pages 用户主页方式部署，线上地址为：

https://fangchenkang.github.io/

## 本地使用

安装依赖：

```bash
npm install
```

本地预览：

```bash
npx hexo server
```

生成静态文件：

```bash
npx hexo clean
npx hexo generate
```

生成后的文件会放在 `public/` 目录中。这个目录已经写入 `.gitignore`，不要手动提交。

## 在线内容后台

网站带有一个轻量内容后台：

```text
https://fangchenkang.github.io/admin/
```

它可以管理三类内容：

- 博客文章：写入 `source/_posts/`
- 研究项目：写入 `source/projects/项目路径/index.md`
- 阅读笔记：写入 `source/reading/笔记路径/index.md`

第一次使用时，点击“仓库设置”，填写：

```text
Owner: FangchenKang
Repository: fangchenkang.github.io
Branch: main
GitHub token: 你的 fine-grained token
```

token 至少需要当前仓库的 `Contents: Read and write` 权限。为了能触发 GitHub Actions 自动部署，建议也保留 `Actions: Read and write` 权限。token 只保存在当前浏览器的 localStorage 中，不要在公共电脑上保存。

后台支持：

- 新建普通博客文章
- 读取已有文章并修改
- 新建研究项目并自动同步项目入口页卡片
- 读取已有研究项目并修改
- 新建阅读笔记并自动同步阅读入口页卡片
- 读取已有阅读笔记并修改
- 上传图片到仓库
- 把图片路径插入正文或作为项目、阅读卡片封面

图片上传位置：

```text
博客文章图片：source/img/posts/
项目图片：source/img/projects/
阅读封面：source/img/covers/
```

注意：这个后台仍然是静态博客上的轻量管理工具，不是带数据库的 CMS。它通过 GitHub API 修改仓库文件，然后由 GitHub Actions 重新构建网站。

## 写普通博客文章

普通文章放在 `source/_posts/` 目录。可以直接新建 Markdown 文件，例如：

```text
source/_posts/my-new-post.md
```

文章顶部建议使用这样的 Front Matter：

```markdown
---
title: 文章标题
date: 2026-05-20 20:00:00
categories:
  - 随笔
tags:
  - 学术博客
  - 写作
---

正文内容。
```

## 新增研究项目

研究项目入口页是：

```text
source/projects/index.md
```

入口页的分类按钮支持前端筛选。卡片通过 `data-category` 记录分类，后台保存项目时会自动写入或更新对应卡片。

每个项目详情页放在 `source/projects/` 下面的独立文件夹中，例如：

```text
source/projects/my-project/index.md
```

新增项目时，可以复制现有项目详情页，例如：

```text
source/projects/zongzhi/index.md
```

然后修改标题、导语和正文内容。详情页中已经预留目录结构：

- 项目概述
- 研究问题
- 数据与材料
- 方法与工具
- 阶段进展
- 后续计划
- 相关笔记

如果要让新项目出现在项目首页，需要在 `source/projects/index.md` 的卡片列表中复制一个 `<article class="library-card project-card">...</article>`，把标题、说明、标签和链接改成新项目路径。

## 新增阅读笔记

阅读入口页是：

```text
source/reading/index.md
```

入口页的分类按钮支持前端筛选。卡片通过 `data-category` 记录阅读类型，后台保存阅读笔记时会自动写入或更新对应卡片。

每条阅读笔记放在 `source/reading/` 下面的独立文件夹中，例如：

```text
source/reading/my-reading-note/index.md
```

新增阅读笔记时，可以复制现有模板，例如：

```text
source/reading/xiangtu-china/index.md
```

阅读笔记中已经预留目录结构：

- 文献信息
- 阅读问题
- 章节目录
- 核心观点
- 关键概念
- 摘录与评论
- 延伸思考

如果要让新笔记出现在阅读首页，需要在 `source/reading/index.md` 的卡片列表中复制一个 `<article class="library-card reading-card">...</article>`，修改标题、作者、说明、标签和链接。

## 添加封面和项目图片

书籍或文献封面建议放在：

```text
source/img/covers/
```

项目图片建议放在：

```text
source/img/projects/
```

当前已经放了两个默认占位图：

```text
source/img/covers/default-book-cover.svg
source/img/projects/default-project.svg
```

以后替换封面时，把图片放到对应目录，然后在 `source/reading/index.md` 或 `source/projects/index.md` 中修改图片路径即可。例如：

```html
<img src="/img/covers/my-book-cover.jpg" alt="书名">
```

## 关于在线编辑

这个项目目前采用稳定的静态博客方案：用 Markdown 文件管理文章、项目和阅读笔记，用 GitHub API 或 VS Code 管理图片与文本，再通过 GitHub Actions 或本地命令生成静态网页。

`/admin/` 后台是轻量编辑器，不保存数据库，也不托管私有服务；它只是把你填写的内容转换成仓库里的 Markdown 和图片文件。以后如果需要更完整的多人协作、权限系统或媒体库，可以再考虑接入 Decap CMS、TinaCMS，或者使用 GitHub 网页编辑流程。

## 提交与推送

修改内容后，先本地生成检查：

```bash
npm install
npx hexo clean
npx hexo generate
```

确认无误后提交并推送：

```bash
git add .
git commit -m "update content"
git pull --rebase origin main
git push origin main
```

当前远程仓库应为：

```text
https://github.com/FangchenKang/fangchenkang.github.io.git
```
