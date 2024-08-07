// import './styles/index.css' // 引入自定义样式:不生效,需要在组件下方引入
import "./styles/index.css";
import { h  } from 'vue'
import 'uno.css'
import {useRoute } from 'vitepress';
import Theme from "vitepress/theme";
import mediumZoom from 'medium-zoom';
import UnoCSSLayout from './UnoCSSLayout.vue'
import DemoWrap from "./components/DemoWrap.vue";
import ListProjects from "./components/ListProjects.vue";
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'

export default {
  ...Theme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
    // @ts-ignore
      new mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    };
    // @ts-ignore
    onMounted(() => {
      initZoom();
    });
    // @ts-ignore
    watch(
      () => route.path,
    // @ts-ignore
      () => nextTick(() => initZoom())
    );
  },
  Layout: () => {
    return h(UnoCSSLayout, null, { })
  },
  enhanceApp({app}) {
    // 注册全局组件
    app.use(TwoslashFloatingVue) 
    app.component("DemoWrap", DemoWrap);
    app.component("ListProjects", ListProjects);
  },
};
