import flexSearchIndexOptions   from "flexsearch";
import { SearchPlugin } from "vitepress-plugin-search";//搜索插件
const options = {
  ...flexSearchIndexOptions,
  previewLength: 100,//搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
};
export function setupFlexSearch(){
  return  SearchPlugin(options);
}
