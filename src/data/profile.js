export const profile = {
  name: '蒋沪昇',
  nickname: 'Pxander',
  tagline: '机械数控 × AI 辅助设计探索者',
  shortBio: '把车间和代码缝在一起，用 AI 把动手做的速度再快一点。',
  location: '浙江宁波',
  email: '1592966834@qq.com',
  phone: '15657811979',
  school: '宁波大学附属北仑职业技术高级中学',
  major: '机械数控专业',
  status: '高三上学期 · 2024–2027',

  aboutParagraphs: [
    '宁波大学附属北仑职业技术高级中学机械数控专业学生，具备机械制造基础、数控加工能力以及数字化创作能力。',
    '熟练掌握机械制图、CAD 绘图、数控加工流程，同时积极探索 AI 技术在设计、开发和学习中的应用。',
    '擅长利用 AI 工具辅助设计、编程学习以及内容创作，具备 Vibe Coding 实践经验，能够结合机械专业知识与数字技术进行创新探索。'
  ],

  dataCards: [
    { label: '学校', value: '宁波大学附属北仑职高', sub: '机械数控 · 高三' },
    { label: '所在地', value: '浙江宁波', sub: '随时可线下' },
    { label: '方向', value: '产品 / 工业设计', sub: '+ AI 智能制造' },
    { label: '状态', value: '高三在读', sub: '可实习 / 远程' }
  ],

  strengths: [
    {
      no: '01',
      title: '机械设计与制造',
      desc: 'CAD 制图（中望 CAD）、机械零件图 / 装配图识读、数控车床基础操作。',
      tags: ['中望 CAD', '机械制图', '数控加工', '钳工初级证']
    },
    {
      no: '02',
      title: 'AI 与数字技术',
      desc: '多模型协作 · Vibe Coding · 完整落地小工具（桌面小组件、自动化脚本）。',
      tags: ['ChatGPT', 'DeepSeek', 'Gemini', 'Codex', 'Hermes']
    },
    {
      no: '03',
      title: '网页与产品设计',
      desc: 'HTML / CSS 基础应用，AI 辅助快速完成原型与概念验证，作品集式品牌表达。',
      tags: ['React', 'Vite', '原型设计', '概念验证']
    },
    {
      no: '04',
      title: '摄影与视觉创作',
      desc: '用 Nikon D90 拍夜景与城市边缘；Lightroom 调色，剪映剪辑短视频。',
      tags: ['Nikon D90', 'Lightroom', '剪映', '夜景 / 街拍']
    }
  ],

  directions: [
    { label: '产品 / 工业设计', desc: '机械结构 + 设计能力 + AI 工具' },
    { label: 'AI + 机械智能制造', desc: 'AI 辅助设计、智能制造、数字化生产' },
    { label: '摄影 / 影视方向', desc: '视觉内容创作、后期、视频' }
  ],

  certificates: ['钳工初级技能证书', '素描三级证书']
};

export const projects = [
  {
    id: 'deepseek-widget',
    no: '01',
    tag: 'Vibe Coding · 桌面工具',
    title: 'DeepSeek API 余额桌面小组件',
    subtitle: 'Windows 原生 · 60 秒自动刷新',
    desc: '基于 PowerShell + WPF 实现的 Windows 原生桌面应用，每 60 秒自动拉取最新数据。现代毛玻璃视觉风格，支持深浅色主题切换。',
    features: [
      '实时监控 API 余额、今日 / 本月消费金额',
      '今日 Token 用量（输入 / 输出）+ 缓存命中率',
      '近 7 日 Token 趋势图',
      '深浅主题 + 毛玻璃 UI'
    ],
    tags: ['WPF', 'PowerShell', 'Vibe Coding'],
    cover: `${import.meta.env.BASE_URL}photos/shot-widget-deepseek.png`,
    accent: '#7c5cff'
  },
  {
    id: 'light-shadow',
    no: '02',
    tag: 'Photography · 视觉创作',
    title: 'Light × Shadow · 夜景与日常',
    subtitle: 'Nikon D90 · 城市边缘的切片',
    desc: '用一台老单反记录城市入夜后的轮廓、雨后的反光和街角偶然的结构。Lightroom 调色后做成分享集，也尝试拍短视频记录生活切片。',
    features: [
      '夜景 / 街拍 / 自然 / 建筑',
      'Lightroom 色彩与光影调整',
      '剪映剪辑日常短片',
      '「Selected Shots」板块收录 9 张'
    ],
    tags: ['Nikon D90', 'Lightroom', '剪映'],
    cover: `${import.meta.env.BASE_URL}photos/shot-cityscape.jpg`,
    accent: '#929292'
  }
];

export const shots = [
  { src: `${import.meta.env.BASE_URL}photos/shot-brickwall.jpg`, alt: '砖墙与植被', span: 'tall' },
  { src: `${import.meta.env.BASE_URL}photos/shot-rain.jpg`, alt: '雨夜街道的反光', span: 'wide' },
  { src: `${import.meta.env.BASE_URL}photos/shot-stars.jpg`, alt: '仰望星空', span: 'tall' },
  { src: `${import.meta.env.BASE_URL}photos/shot-bowl.jpg`, alt: '雨中的石钵', span: 'square' },
  { src: `${import.meta.env.BASE_URL}photos/shot-glassbuilding.jpg`, alt: '玻璃幕墙的弧线', span: 'tall' },
  { src: `${import.meta.env.BASE_URL}photos/shot-fu-pillar.jpg`, alt: '门廊下的「福」字砖柱', span: 'tall' },
  { src: `${import.meta.env.BASE_URL}photos/shot-grass.jpg`, alt: '阳光穿过绿叶', span: 'wide' },
  { src: `${import.meta.env.BASE_URL}photos/shot-waterfront.jpg`, alt: '水边的城市灯影', span: 'square' },
  { src: `${import.meta.env.BASE_URL}photos/shot-toiletsign.jpg`, alt: '夜晚的街角指引', span: 'wide' }
];

export const navLinks = [
  { id: 'about', label: '关于' },
  { id: 'projects', label: 'Projects' },
  { id: 'shots', label: 'Selected Shots' },
  { id: 'strengths', label: '优势' },
  { id: 'contact', label: 'Contact' }
];