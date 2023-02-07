# VitePress踩坑记录

##  ERR_INVALID_FILE_URL_HOST



::: danger

执行打包命令时，出现此错误 `TypeError [ERR_INVALID_FILE_URL_HOST]: File URL host must be "localhost" or empty on darwin`

:::

 

![](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302041941600.png)

### 形成原因：全局替换时粗心大意造成img src属性多了个'/'



###  解决
::: tip
刚开始我只能猜到某个文件路径有问题 ，又不知道那个文件有问题，最后用上了 **排除法** 逐个移除文章文件夹最终才定位到出问题的文档。
虽然问题解决的的过程有点费劲，不得不说当问题搞得人想撞墙的时候，无疑也是一个不错的思路和方法！！！
:::

删除多余的'/'就好了，自己解决自己的 **[issues](https://github.com/vuejs/vitepress/issues/1895)** ！！！



## 实现自动生成文章左侧侧边栏



### 痛点及需求

::: warning

​	每次添加文章过程：对应的目录下添加.md文， 修改`themeConfig的sidebar属性`，给对象加上新增的文章映射

​	添加的文章少还好，多了的话就显得很麻烦不够优雅，所有想写个脚本按照目录结构自动生产对应的映射关系。

:::

### 想法及实现
#### 在package.json添加脚本执行命令

![image-20230205230548188](https://zerdocs.oss-cn-shanghai.aliyuncs.com/202302052305259.png)

####  在博客根目录新建`scripts`目录并创建文件`getSidebar.ts`，添加如下代码

```js
/********   读取 zerdocs/docs/ 下的所有文件夹，自动生成侧边栏sidebar.ts文件   ***********/


const fs = require('fs')
const path = require('path')

let sidebarObj = {}

//生成一级分组 
let topDirArr = fs.readdirSync(path.resolve(__dirname, '../docs')).filter((item) => isArticleDir(item))
topDirArr.forEach((item) => {
  if (!sidebarObj[`/${item}/`]) {
    sidebarObj[`/${item}/`] = []
  }
})

const sidebars = deepGetFile(path.resolve(__dirname, '../docs')) // 读取 docs 目录下的所有文件夹
const sidebarlist = deepGenerateSidebar(sidebars)

//写入到docs/.vitepress/sidebar/index.ts

//把数组里面的每个对象合并到一个对象里面
let sidebar = sidebarlist.reduce((pre, cur) => Object.assign(pre, cur), {})
Object.entries(sidebar).forEach(([key, items]) => {
  let keyArr = splitPath(key)
  let text = keyArr[keyArr.length - 1]
  if(sidebarObj[`/${keyArr[0]}/`]){
    sidebarObj[`/${keyArr[0]}/`].push({
      text,
      collapsible: true,
      collapsed: false,
      items,
    })
  }else{
    sidebarObj[`/${keyArr[0]}/`] = [{
      text,
      collapsible: true,
      collapsed: false,
      items,
    }]
  }
})

const sidebarStr = JSON.stringify(sidebarObj, null, 2)
//把sidebarStr写入到docs/.vitepress/sidebar/index.ts
const sidebarPath = path.resolve(__dirname, '../docs/.vitepress/sidebar/index.ts')

//没有则创建
if (!fs.existsSync(sidebarPath)) {
  fs.mkdirSync(path.resolve(__dirname, '../docs/.vitepress/sidebar'))
}

fs.writeFileSync(sidebarPath, `export default ${sidebarStr}`)

//判断是否是文件夹
function isArticleDir(dir) {
  let exclude = ['public', 'index.md','vite.config.ts']  //排除的文件夹
  return !exclude.includes(dir) && !dir.startsWith('.')
}

function splitPath(path) {
  return path.split('/').filter((item) => item !== '')
}
function deepGetFile(dir) {
  let backList = []
  let list = fs.readdirSync(dir).filter((item) => isArticleDir(item))

  for (let index in list) {
    let item = path.resolve(dir, list[index])
    if (fs.statSync(item).isDirectory()) {
      backList = backList.concat(deepGetFile(item))
    } else {
      //输出相对路径
      item = item.replace(path.resolve(__dirname, '../docs'), '').replace(/\\/g, '/')
      backList.push(item)
    }
  }
  return backList
}

// 生成侧边栏
function deepGenerateSidebar(arr) {
  //递归按照最后一级目录生成侧边栏
  const sidebar = {}
  sidebars.forEach((item) => {
    const [dir, ...rest] = splitPath(item)
    if (!sidebar[dir]) {
      sidebar[dir] = []
    }
    sidebar[dir].push(item)
  })
  let sidebarList = []
  //按最后一级目录分组
  for (let key in sidebar) {
    let pathPice = sidebar[key].map((item) => splitPath(item))
    //如果pathPice[pathPice.length-1]相同,则合并
    pathPice = pathPice.reduce((pre, cur) => {
      let dirStr = cur.slice(0, -1).join('/') // /problem/vueproject/
      let text = cur[cur.length - 1].replace(/\.md$/, '')
      let link = '/' + cur.join('/').replace(/\.md$/, '')
      pre[dirStr] = pre[dirStr] ? [...pre[dirStr], { text, link }] : [{ text, link }]
      return pre
    }, {})
    sidebarList.push(pathPice)
  }
  return sidebarList
}

```



## VitePress添加本地搜索功能

::: warning

折腾了三遍Algolia都没能添加上搜索功能，最后在找到了这个[issus](https://github.com/vuejs/vitepress/issues/670)里大佬提供的解决方案，成功添加上了本地搜索功能。

:::

### 安装插件

```bash
npm i vitepress-plugin-search markdown-it flexsearch -D
```

### 添加和配置插件

::: warning 坑点
1.[README](https://github.com/emersonbottero/vitepress-plugin-search#readme) 没写在哪个目录下存放`vite.config.ts`，依据经验放在根目录下不管用，放在`.vitepress`也不生效，最后挨个试才发现需要放在`docs`

2.示例没有引入`flexSearchIndexOptions`，需要手动从`flexsearch`中引入

3.引入后发现之前搜索框样式没了，需要在`.vitepress/theme/styles/index.css`下重新覆盖样式

:::



![image-20230205233032922](https://zerdocs.oss-cn-shanghai.aliyuncs.com/202302052330956.png)



```typescript

//vite.config.ts
import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";
import flexSearchIndexOptions   from "flexsearch";
//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 100,//搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
});
```



### 样式覆盖

```css
.DocSearch-Button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: transparent;
  transition: border-color 0.25s;
}
@media (min-width: 768px) {
  .DocSearch-Button {
    justify-content: flex-start;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0 10px 0 12px;
    width: 100%;
    height: 40px;
    background-color: var(--vp-c-bg-alt);
  }
}
@media (max-width: 768px) {
  .DocSearch-Button-Keys {
    display: none;
  }
  .VPNavBarHamburger{
    height: 32px !important;
    width: 32px !important;
    border-radius: 4px;
  }
}

```

