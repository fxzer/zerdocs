```json

{
  "name": "theme-vitesse-dark-custom", //包名，扩展ID: publisher.name
  "displayName": "Vitesse Dark Custom", //发布扩展显示的名称
  "version": "0.0.10", //和 name 组成唯一标识
  "publisher": "fxzer",
  "packageManager": "pnpm@8.7.1", //包管理器,设置后会在安装时自动安装,默认npm
  "description": "Vitesse Dark Custom is a custom theme baseed on Vitesse Dark for VS Code",
  "license": "MIT", //协议
  "repository": { //包在npm的 Repository
    "type": "git",
    "url": "https://github.com/fxzer/theme-vitesse-dark-custom"
  },
  "homepage": "https://github.com/owner/project#readme", // 首页， 默认是项目根目录 README.md
  //问题反馈
  "bugs": {  
    "url": "https://github.com/fxzer/theme-vitesse-dark-custom/issues"
  },
  "keywords": [ // 在 npm 能被哪些关键词搜到
    "theme",
    "vitesse",
    "dark",
    "custom"
  ],
  "categories": [ // 分类 用于搜索
    "Themes"
  ],
  "icon": "icon.png", // 扩展图标
  //** 浏览器环境 import 导入，优先级 browser > module > main  */
  //** node 环境 require 导入，优先级 main > 默认index.js 其他选项配置(module,browser)无效 */
  "main":"index.js", // 入口文件
  "module": "index.js", // esm入口文件
  "browser": "index.js", // 浏览器入口文件  
  "types": "index.d.ts", // ts类型定义文件

  "exports": { // 14.13.0+会覆盖main,module,browser配置项
  //定义导入的模块路径
  ".": {
      "import": {
        "types": "./dist/vue.d.mts",
        "node": "./index.mjs",
        "default": "./dist/vue.runtime.esm-bundler.js"
      },
      "require": {
        "types": "./dist/vue.d.ts",
        "default": "./index.js"
      }
    },
    //自己写的模块需要放在node_modules下
    "./compiler-sfc": {
      "import": {
        "types": "./compiler-sfc/index.d.mts",
        "browser": "./compiler-sfc/index.browser.mjs",
        "default": "./compiler-sfc/index.mjs"
      },
      "require": {
        "types": "./compiler-sfc/index.d.ts",
        "browser": "./compiler-sfc/index.browser.js",
        "default": "./compiler-sfc/index.js"
      }
    },
   
  },
  "files": [
    "themes"
  ],
  "engines": {
    "vscode": "^1.43.0",
    "node": ">=18.12.0", // node版本
  },
  "contributes": {
    "themes": [
      {
        "label": "Vitesse Dark Custom",
        "uiTheme": "vs-dark",
        "path": "./themes/vitesse-dark-custom.json"
      }
    ]
  },
  "scripts": {
    //** 命令 执行多个：&&，传参：--name=zs   */
    "dev": "pnpm gs  && vitepress dev docs",
    "gs": "node scripts/generate-sidebar.cjs",
    "pb:gitee": "zsh deploy.sh && node scripts/auto-update-pages.js",
    "clean": "rimraf node_modules && rm -rf dist && pnpm i"
  },
    /* 项目运行依赖 */
  "dependencies": {
    
  },
  //** 开发依赖 */
  "devDependencies": {

  },
  "preview": true,
  "private": true, // 私有包:会被拒绝发布到npm
}

```
