import getNavs from "./configs/nav"
import socialLinks from "./configs/socialLinks"
import sidebar from './sidebar/index'
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
export default withPwa(defineConfig({
  //根据环境变量决定打包路径
  // base: process.env.NODE_ENV === 'production' ? '/zerdocs/' : '/',
  base: '/zerdocs/',//配置打包获取静态资源路径
  outDir: '../dist',
  cleanUrls: true,  //去掉url中的.html后缀
  // srcDir:'./src', //相对于docs
  title: "ZerDocs",//网站标题
  description: "Front-end learning document collection.",
  ignoreDeadLinks: true,//忽略无效链接
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/zerdocs/logo.svg' }],
    ['link', { rel: 'icon', href: '/zerdocs/favicon.ico' }],
  ],
  themeConfig: {
    search: {
      provider: 'local',
    },
    outline: 'deep',//侧边栏深度:数字或者deep
    outlineTitle: '文章目录',
    logo: '/logo.svg',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题切换',
    footer: {
      message: 'Released under the <a href="https://github.com/fxzer/zerdocs/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/fxzer">fxzer</a>.',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: getNavs(),
    editLink: {
      pattern: "https://github.com/fxzer/zerdocs/edit/master/docs/:path",
    },
    socialLinks,
    sidebar,

  },
  pwa: {
    outDir: '../dist/',
    manifest: {
      name: 'zerdocs',
      short_name: 'zerdocs',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-512x512.png',
          type: 'img/png',
          sizes: '512x512',
          purpose: 'any',
        },
        {
          src: 'pwa-192x192.png',
          type: 'img/png',
          sizes: '192x192',
          purpose: 'maskable',
        },
        {
          src: 'pwa-144x144.png',
          type: 'img/png',
          sizes: '144x144',
          purpose: 'any',
        },
        {
          src: 'pwa-120x120.png',
          type: 'img/png',
          sizes: '120x120',
          purpose: 'any',
        },
        {
          src: 'pwa-72x72.png',
          type: 'img/png',
          sizes: '72x72',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      clientsClaim: true, //PWA注册后马上接管网站
      skipWaiting: true//跳过 atvative生命周期等待上一次 service-worker取消注册
    }
  },
  sitemap: {
    hostname: 'https://fxzer.github.io/zerdocs',
  }
}))
