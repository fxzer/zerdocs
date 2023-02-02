import { defineConfig } from 'vitepress'
import getSidebar from "./sidebar";
// import socialLinks from "./configs/links";
import algolia from "./configs/algolia";
import getNavs from "./configs/nav"
export default defineConfig({
  //根据环境变量决定打包路径
  // base: process.env.NODE_ENV === 'production' ? '/zerdocs/' : '/',

  base:'/zerdocs/',//配置打包获取静态资源路径
  // outDir: '../dist',
  // cleanUrls: true, //去掉路径中的index.html
  // srcDir:'./src', //相对于docs
  title: "ZerDocs",//网站标题
  description: "Front-end learning document collection.",
  lastUpdated: true,
  ignoreDeadLinks: true,
  markdown: {
    // theme: "material-theme-darker",//代码块主题
    lineNumbers: true,
  },
  themeConfig: {
    outline: 'deep',
    logo:'/img/logo.svg',
    footer: {
      message: 'Released under the <a href="https://github.com/fxzer/zerdocs/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/fxzer">fxzer</a>.',
    },
    nav: getNavs(),
    editLink: {
      pattern: "https://github.com/fxzer/zerdocs/edit/main/docs/:path",
    },
    algolia,
    // socialLinks,
    sidebar:getSidebar(),
    // carbonAds: { //广告位
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }
  },
})
