---
layout: home
hero:
  name: ZerDocs
  text: VitePress Front-End Learning Collection
  image:
    src: https://zerdocs.oss-cn-shanghai.aliyuncs.com/202302041807975.svg
    alt: ZerDocs
  actions:
    - theme: brand
      text: 开始阅读
      link: /FrontEnd/Git/Terminal终端美化
    - theme: alt
      text: 关于我
      link: https://github.com/fxzer
features:
  - icon: 🎨
    title: FrontEnd
    details: 前端三件套基础积累。
    link: /FrontEnd/Git/Terminal终端美化
  - icon: 🚚
    title: Framework
    details: 总结前端框架学习笔记。
    link: /Framework/Vue/列表最后一条数据删除处理
  - icon: 📝
    title: Problem
    details: 积累编程中遇到的坑。
    link: /Problem/
  - icon: 📝
    title:  ES6 教程
    details:  阮一峰 ECMAScript6 教程 (VitePress版)
    link: https://fxzer.github.io/es6-vitepress
  - icon: 📝
    title: TypeScript 教程
    details: 阮一峰 TypeScript 教程  (VitePress版)
    link: https://fxzer.github.io/typescript-tutorial-vitepress
  - icon: 📝
    title: TypeScript 官网文档
    details: 官网文档中英翻译  (VitePress版)
    link:  https://fxzer.github.io/tsdoc-vitepress/zh/

---

<script setup>
  const projects = {
  Vue: [
    {
      name: 'Json Viewer',
      link: 'https://github.com/fxzer/json-viewer',
      desc: 'JSON 可视化网站',
      site: 'https://fxzer.github.io/json-viewer'
    },
    {
      name: 'x-admin',
      link: 'https://github.com/fxzer/x-admin',
      desc: 'Vue3后台管理系统模板',
      site: 'https://x-admin-iota.vercel.app'
    },
    {
      name: 'funny-canvas',
      link: 'https://github.com/fxzer/funny-canvas',
      desc: '有趣的 Canvas 案例',
      site: 'https://fxzer.github.io/funny-canvas'
    },
    {
      name: 'dir-vis',
      link: 'https://github.com/fxzer/dir-vis',
      desc: '纯前端目录可视化',
      site: 'https://fxzer.github.io/dir-vis'
    },
    {
      name: 'network-topology-graph',
      link: 'https://github.com/fxzer/network-topology-graph',
      desc: '网络拓扑图',
      site: 'https://fxzer.github.io/network-topology-graph',
    },
    {
      name: 'wyy-music-vue2',
      link: 'https://github.com/fxzer/wyy-music-vue2',
      desc: '仿网易云音乐(Vue2)',
      site: ''
    },
      {
        name: 'tailwindcss-showcase',
        link: 'https://github.com/fxzer/tailwindcss-showcase',
        desc: 'Tailwind CSS 案例一比一模仿',
        site:'https://fxzer.github.io/tailwindcss-showcase/#/',
      },
      {
        name: 'apple-site',
        link: 'https://github.com/fxzer/apple-site',
        desc: 'Apple 官网模仿练习',
        site: 'https://fxzer.github.io/apple-site'
      }
  ],
  Nuxt: [
    {
      name: 'github-trends',
      link: 'https://github.com/fxzer/github-trends',
      desc: 'Github 趋势榜单速览网站',
      site: 'https://fxzer.github.io/github-trends',
    },
    {
      name: 'digital-huarong-road',
      link: 'https://github.com/fxzer/digital-huarong-road',
      desc: '数字华容道游戏',
      site: 'https://fxzer.github.io/digital-huarong-road',
    },
    {
      name: 'nuxt-hk',
      link: 'https://github.com/fxzer/nuxt-hk',
      desc: 'Nuxt 版 HackerNews 网站',
      site: 'https://nuxt-hk-one.vercel.app',
    }
  ],
  TypeScript: [
    {
      name: 'fxzer/utils',
      link: 'https://github.com/fxzer/utils',
      desc: '常用工具函数集合',
      site: ''
    },
    {
      name: 'Vitesse Dark Custom',
      link: 'https://github.com/antfu/vscode-theme-vitesse.git',
      desc: '继承自 Vitesse Theme 自定义的 VS Code 主题',
      site: 'https://marketplace.visualstudio.com/items?itemName=fxzer.theme-vitesse-dark-custom',
    },
    {
      name: 'fxzer/fxr-cli',
      link: 'https://github.com/fxzer/fxr-cli',
      desc: '自定义的脚手架，用于快速搭建项目',
      site: 'https://www.npmjs.com/package/fxr-cli',
    }
  ],
  Electron: [
    {
      name: 'electron-dark-light-joint',
      link: 'https://github.com/fxzer/electron-dark-light-joint',
      desc: '亮暗图片拼接工具',
      site: ''
    }
  ],
  React: [
    {
      name: 'x-admin-react',
      link: 'https://github.com/fxzer/x-admin-react',
      desc: '...',
      site: ''
    }
  ]
};
</script>
<ListProjects :projects="projects" />
