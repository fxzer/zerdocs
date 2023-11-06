// import './styles/index.css' // 引入自定义样式:不生效,需要在组件下方引入
import "./styles/index.css";
import { h  } from 'vue'
import Theme from "vitepress/theme";
import UnoCSSLayout from './UnoCSSLayout.vue'
import DemoWrap from "./components/DemoWrap.vue";
// import Documate from '@documate/vue'
// import '@documate/vue/dist/style.css'
// import RegisterSW from './components/RegisterSW.vue'
// import ReloadPrompt from './components/ReloadPrompt.vue'
export default {
  ...Theme,
  Layout: () => {
    return h(UnoCSSLayout, null, {
      //集成文档 AI 组件
      // 'nav-bar-content-before': () => h(Documate, {
      //   endpoint: 'https://vwg4waeeqt.us.aircode.run/ask',
      // }),
      //集成 ServiceWorker
      'layout-bottom': () => h(ReloadPrompt)
    })
  },
  enhanceApp(ctx) {
    // 注册全局组件
    ctx.app.component("DemoWrap", DemoWrap);
  },
};
