// import './styles/index.css' // 引入自定义样式:不生效,需要在组件下方引入
import "./styles/index.css";
import { h  } from 'vue'
import { useRoute } from 'vitepress';
import Theme from "vitepress/theme";
import mediumZoom from 'medium-zoom';
import UnoCSSLayout from './UnoCSSLayout.vue'
import DemoWrap from "./components/DemoWrap.vue";
export default {
  ...Theme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
    // @ts-ignore
      new mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  Layout: () => {
    return h(UnoCSSLayout, null, { })
  },
  enhanceApp(ctx) {
    // 注册全局组件
    ctx.app.component("DemoWrap", DemoWrap);
  },
};
