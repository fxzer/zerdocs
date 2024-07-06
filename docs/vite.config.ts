//vite.config.ts
import { defineConfig } from "vite";
//全局导入导致移动端菜单栏打开迟钝
import { resolve } from "path";
import { UnocssPlugin } from "./.vitepress/build/plugins/unocss";
import AutoImport from "unplugin-auto-import/vite"; //作用:自动帮我们引入声明的 函数, 并自动生成 ts 类型声明文件。
import IconsResolver from 'unplugin-icons/resolver'//作用:将图标转换为组件
import Components from 'unplugin-vue-components/vite'//作用:自动帮我们引入全局组件，不用手动引入。并生成 ts 类型声明文件
import Icons from 'unplugin-icons/vite'
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
    UnocssPlugin,
    Icons({
      autoInstall: true, // 自动安装图标集
      defaultClass: 'cursor-pointer wh-5', // 默认类名
    }),

    Components({
      dirs: resolve(__dirname, '.vitepress/theme/components'),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: './.vitepress/types/components.d.ts',
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
      dts: './.vitepress/types/auto-imports.d.ts',
    }),
  ],
});
