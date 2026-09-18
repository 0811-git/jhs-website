# Pxander · Portfolio

蒋沪昇 (Pxander) 个人作品集首页。暗色、高端、克制，使用 React + Vite 搭建。

## 技术栈
- React 19 + Vite 6
- 4 个 React Bits 效果组件（SVG/Canvas/WebGL 各一）
  - `ShapeWaves` —— Hero 全屏背景，用 "Pxander" 文字切割波纹（WebGPU + vgpu）
  - `GlassSurface` —— 顶部导航栏毛玻璃变形（SVG filter）
  - `ElasticMesh` —— Featured Shot 板块的星空图 3D 网格变形（WebGL + ogl）
  - `ParticleText` —— Contact 收尾大字 `LET'S BUILD SOMETHING` 粒子聚拢（Canvas 2D）
  - `ChromaGrid` —— Toolbox 工具栈 6 张卡片的光标聚光灯（GSAP + DOM）
- GSAP 用于 ChromaGrid 的阻尼动画
- 纯手写 CSS（无 UI 库）

## 启动

```bash
npm install
npm run dev          # 开发，http://localhost:5173
npm run build        # 生产构建 → dist/
npm run preview      # 预览生产构建
```

> Node 20+ 需要。已在 Node v24.19.0 / npm 9+ 测试。

## 页面结构

```
/                       Hero           ← ShapeWaves 背景 "Pxander"
/#about                 About          ← 头像 + 简介 + 关键数据
/#projects              Projects       ← 2 张大卡片（DeepSeek / 摄影）
/#featured              Featured Shot  ← ElasticMesh 星空
/#shots                 Selected Shots ← 9 张图 masonry 网格
/#strengths             Strengths      ← 4 张能力卡片 2x2
/#toolbox               Toolbox        ← ChromaGrid 6 张工具卡
/#contact               Contact        ← ParticleText 收尾大字 + 邮箱
```

## 内容更新

所有结构化数据在 `src/data/profile.js`：
- `profile` —— 个人信息、技能、能力卡片
- `projects` —— 精选项目（Card A 是 DeepSeek 小组件，待替换 mockup）
- `shots` —— Selected Shots 9 张图，按顺序排列
- `navLinks` —— 导航锚点

照片资源在 `public/photos/`：
- `avatar.jpg` —— 头像
- `shot-*.jpg` —— 摄影作品

## 已知 TODO（后续轮次迭代）

- [ ] 把 Projects Card A 的 DeepSeek widget mockup 换成真实截图
- [ ] 给 ChromaGrid 工具卡片用真实工具 logo 替换 ui-avatars 占位图
- [ ] Hero 文案 / 字体 / 颜色进一步调优
- [ ] Mobile 适配细化（< 880px 当前是简化布局）
- [ ] 添加 LoadingScreen 或 Hero 入场过渡

## 浏览器要求

- **Chrome / Edge 113+** 或 **Safari 18+** —— ShapeWaves 依赖 WebGPU
- Firefox 上 ShapeWaves 自动 fallback 到纯黑底（onError 钩子）
- ElasticMesh 用 WebGL1，主流浏览器都支持