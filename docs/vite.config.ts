//vite.config.ts
import { defineConfig } from "vite";
//全局导入导致移动端菜单栏打开迟钝
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite"; //作用:自动帮我们引入声明的 函数, 并自动生成 ts 类型声明文件。
import IconsResolver from 'unplugin-icons/resolver'//作用:将图标转换为组件
import Components from 'unplugin-vue-components/vite'//作用:自动帮我们引入全局组件，不用手动引入。并生成 ts 类型声明文件


export default defineConfig({
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  plugins: [ 
    Components({
      dirs: resolve(__dirname, '.vitepress/theme/components'),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: './.vitepress/components.d.ts',
      transformer: 'vue3',
    }),
    AutoImport({
      include: [
        //导入目标文件类型
        /\.[tj]s(x|on)?$/, // .ts, .tsx, .js, .jsx .json
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        "vue", // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      ],
      dts: './.vitepress/auto-imports.d.ts',
    }),
  ],
});
