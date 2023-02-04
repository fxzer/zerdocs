export default {
  "/problem/": [
    { text: '导读', link: '/problem/' },
    { 
      text: '可视化相关', 
      collapsible: true,
      collapsed: false,
      items:[
        { text:'Antv代码片段集锦',link:'/problem/graphical/Antv代码片段集锦'},
        { text:'Antv使用总结',link:'/problem//graphical/Antv使用总结'},
        { text:'Echarts问题总结',link:'/problem//graphical/Echarts问题总结'},
      ]
     },
    { 
      text: 'Vue项目相关', 
      collapsible: true,
      collapsed: false,
      items:[
        { text:'Vue项目踩坑一',link:'/problem/vueproject/Vue项目踩坑一'},
      ]
     },
    { 
      text: 'VitePress', 
      collapsible: true,
      collapsed: false,
      items:[
        { text:'VuePress踩坑记录',link:'/problem/vitepress/VurPress踩坑记录'},
        { text:'VitePress踩坑记录',link:'/problem/vitepress/VitePress踩坑记录'},
      ]
     },
  ]
}