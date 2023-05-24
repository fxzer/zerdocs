import { generateSitemap as sitemap } from 'sitemap-ts'//站点地图
import getNavs from "./configs/nav"
import socialLinks from "./configs/socialLinks"
import sidebar from './sidebar/index'
//引入环境变量
export default  {
  //根据环境变量决定打包路径
  // base: process.env.NODE_ENV === 'production' ? '/zerdocs/' : '/',
  // lastUpdated: true,
  // base:'/',
  base:'/zerdocs/',//配置打包获取静态资源路径
  outDir: '../dist',
  cleanUrls: true,  //去掉url中的.html后缀
  // srcDir:'./src', //相对于docs
  title: "ZerDocs",//网站标题
  description: "Front-end learning document collection.",
  ignoreDeadLinks: true,//忽略无效链接
  markdown: {
    theme: {
      light:'github-light',
      dark: 'dracula-soft',
    },
    // lineNumbers: true,
  },
  head: [
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/zerdocs/logo.svg' }],
    ['link', { rel: 'icon', href: '/zerdocs/favicon.ico' }],
  ],
  themeConfig: {
    outline: 'deep',//侧边栏深度:数字或者deep
    outlineTitle: '文章目录',
    //TODO
    // outlineBadges: true,  //侧边栏是否显示标签
    logo:'/logo.svg',
    // lastUpdatedText: '上次更新',
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
    async buildEnd() {
      await sitemap({ hostname: 'https://fxzer.github.io/zerdocs' });
    }
  },
} 
