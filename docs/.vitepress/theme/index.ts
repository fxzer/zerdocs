
// import './styles/index.css' // 引入自定义样式:不生效,需要在组件下方引入

import DefaultTheme from 'vitepress/theme'
import MyGlobalComponent from './components/MyGlobalComponent.vue'
import './styles/index.css' 
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // 继承默认主题
    DefaultTheme.enhanceApp(ctx)

    // 注册全局组件
    ctx.app.component('MyGlobalComponent',MyGlobalComponent)
  }
}
