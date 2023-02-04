export default {
  "/problem/": [
    { text: '导读', link: '/problem/' },
    { 
      text: '可视化相关', 
      collapsible: true,
      collapsed: false,
      items:[
        { text:'Antv代码片段集锦',link:'/problem/Antv代码片段集锦'},
        { text:'Antv使用总结',link:'/problem/Antv使用总结'},
        { text:'Echarts问题总结',link:'/problem/Echarts问题总结'},
      ]
     },
    { 
      text: 'Vue项目相关', 
      collapsible: true,
      collapsed: false,
      items:[
        { text:'Vue项目踩坑一',link:'/problem/Vue项目踩坑一'},
      ]
     },
    { 
      text: 'VuePress', 
      collapsible: true,
      collapsed: false,
      items:[
        { text:'VurPress踩坑记录',link:'/problem/VurPress踩坑记录'},
      ]
     },
  ]
}