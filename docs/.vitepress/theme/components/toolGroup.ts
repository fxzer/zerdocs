interface ToolGroup {
  [key: string]: Array<Tool>;
}
interface Tool {
  name: string;
  url: string;
  icon?: string;
  iconType?: 'ico' | 'svg' | 'png';
}
 const toolGroup: ToolGroup = {
  '在线编程工具': [
    {
      name: 'Lightly',
      iconType: 'svg',
      url: 'https://lightly.teamcode.com/'
    },
    {
      name: '码上掘金',
      icon: 'https://juejin.cn/favicon.ico',
      url: 'https://code.juejin.cn'
    },
    {
      name: 'Glitch',
      url: 'https://glitch.com/'
    },
    {
      name: 'CodePen',
      url: 'https://codepen.io/'
    },
    {
      name: 'CodeSandbox',
      url: 'https://codesandbox.io/'
    },
    {
      name: 'Stackblitz',
      url: 'https://stackblitz.com/',
      icon:'https://c.staticblitz.com/assets/favicon-editor-675989317f34707a17fe9d649da3609d70f6f8abc9546445389238ddd570a1d4.png'
    },
  ],
  '前端组件库': [
    {
      name: 'Element-UI',
      url: 'https://element.eleme.cn/'
    },
    {
      name: 'Ant Design',
      icon:'https://ng.ant.design/assets/img/logo.svg',
      url: 'https://ant.design/index-cn/'
    },
    {
      name: 'Arco Design',
      icon:'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
      url: 'https://arco.design/vue/docs/start'
    },
    {
      name: 'Vant',
      icon:'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
      url: 'https://vant-contrib.gitee.io/vant/#/zh-CN'
    },
    {
      name: 'Motion Vueuse',
      url: 'https://motion.vueuse.org/'
    },],
  '作图工具': [
    {
      name: 'Figma',
      url: 'www.figma.com/',
      icon: 'https://static.figma.com/app/icon/1/favicon.ico'
    },
    {
      name: 'ProcessOn',
      url: 'https://www.processon.com/',
    },
    {
      name: '知犀思维导图',
      url: 'https://www.zhixi.com/'
    },
    {
      name: 'ioDraw',
      icon: 'https://www.iodraw.com/static/img/common/iodraw.svg',
      url: 'https://www.iodraw.com'
    },
    {
      name: 'jsoncrack',
      url: 'https://jsoncrack.com/'
    },
    {
      name: 'JSON Viewer',
      icon: 'https://fxzer.gitee.io/json-viewer/jvlogo.svg',
      url: 'https://fxzer.gitee.io/json-viewer/'
    },
  ],
    '调色板':[
      {
        name: 'FlatuiColors',
        icon:'https://flatuicolors.com/static/favicon.ico',
        url: 'https://flatuicolors.com/'
      },
      {
        name: 'Color Hunt',
        icon:'https://www.colorhunt.co/img/colorhunt-favicon.svg?2',
        url: 'https://www.colorhunt.co/'
      },
      {
        name: 'Arco Palette',
        icon:'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
        url: 'https://arco.design/palette/list'
      },
      {
        name: 'ioDraw',
        icon: 'https://webkul.github.io/coolhue/images/coolhue-logo.png',
        url: 'https://webkul.github.io/coolhue/'
      },
      {
        name: '中国传统色',
        url: 'http://zhongguose.com/'
      },
      {
        name: 'GradientHunt',
        icon:'https://gradienthunt.com/img/gradienthunt.png',
        url: 'https://gradienthunt.com/'
      },
      {
        name: 'uigradients',
        icon:'https://uigradients.com/static/images/favicon-32x32.png',
        url: 'https://uigradients.com/'
      },
      {
        name: 'Coolors',
        icon:'https://coolors.co/assets/img/favicon.png',
        url: 'https://coolors.co/'
      },
      {
        name: 'MyColor',
        icon:'https://mycolor.space/img/color-space-logo.png',
        url: 'https://mycolor.space/'
      },
    ]

}
export default toolGroup