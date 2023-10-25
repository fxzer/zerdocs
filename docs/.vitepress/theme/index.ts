// import './styles/index.css' // 引入自定义样式:不生效,需要在组件下方引入
import { h, watch } from 'vue'
import DefaultTheme from "vitepress/theme";
import UnoCSSLayout from './UnoCSSLayout.vue'
import DemoWrap from "./components/DemoWrap.vue";
import "./styles/index.css";

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(UnoCSSLayout)
  },
  enhanceApp(ctx) {
    // 注册全局组件
    ctx.app.component("DemoWrap", DemoWrap);
  },
};
