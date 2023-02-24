//vite.config.ts
import { defineConfig } from "vite";
import flexSearchIndexOptions   from "flexsearch";
import { SearchPlugin } from "vitepress-plugin-search";//搜索插件
//全局导入导致移动端菜单栏打开迟钝
// import { resolve } from "path";
// import AutoImport from "unplugin-auto-import/vite"; //作用:自动帮我们引入声明的 函数, 并自动生成 ts 类型声明文件。
// import IconsResolver from 'unplugin-icons/resolver'//作用:将图标转换为组件
// import Components from 'unplugin-vue-components/vite'//作用:自动帮我们引入全局组件，不用手动引入。并生成 ts 类型声明文件
//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 100,//搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
};


export default defineConfig({
  plugins: [ 
    SearchPlugin(options),
    // Components({
    //   dirs: resolve(__dirname, '.vitepress/theme/components'),
    //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    //   resolvers: [
    //     IconsResolver({
    //       componentPrefix: '',
    //     }),
    //   ],
    //   dts: './.vitepress/components.d.ts',
    //   transformer: 'vue3',
    // }),
    // AutoImport({
    //   include: [
    //     //导入目标文件类型
    //     /\.[tj]s(x|on)?$/, // .ts, .tsx, .js, .jsx .json
    //     /\.vue$/,
    //     /\.vue\?vue/, // .vue
    //     /\.md$/, // .md
    //   ],
    //   imports: [
    //     "vue", // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    //   ],
    //   dts: true, //方案二:生成自动导入的auto-imports.d.ts声明文件, 解决 '找不到名称“Elxxx”' 报错
    // }),
  ],
});