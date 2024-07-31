## 迁移收益

1. 项目性能提升
2. 开发体验优化
3. 更好理解 Vite 原理

## 迁移步骤

1. 切换到新分支 `git checkout -b vite`，不成功还能回到原来的分支
2. 删除 node_modules `pnpm i rimraf -g` `rimraf node_modules`
3. 删除 package-lock.json `rimraf package-lock.json`
4. 删除 package.json 中与 webpack 相关的开发依赖 (devDependencies)，配置 vite 脚本
5. 安装 vite `pnpm i vite -D`
6. 安装 vue2 支持插件 `pnpm i @vitejs/plugin-vue2 -D`
7. 迁移 vue.config.js 到 vite.config.js
8. 把 `public/index.html` 移动到根目录 `index.html`，并修改占位符 `href="<%= BASE_URL %>favicon.ico"`
9. 语法转换：动态导入，浏览器环境获取环境变量

### `index.html` 迁移

::: details webpack: public/index.html + .env

```zsh
VUE_APP_TITLE=NAAS SDWAN
BASE_URL=/xxx/admin
```

```html
<!doctype html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title><%= VUE_APP_TITLE %></title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but <%= VUE_APP_TITLE %> doesn't work properly without
        JavaScript enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

:::
::: details vite: /index.html + vite.config.js(plugins)

```js {3-8}
plugins: [
  vue(),
  createHtmlPlugin({
    inject: {
      data: {
        title: 'APP TITLE',
      },
    },
  }),
]
```

```html
<!doctype html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <title><%= title %></title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but <%= title %> doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
    // [!code ++]
  </body>
</html>
```

:::

### 配置文件迁移

::: details vue.config.js

```js
const path = require('node:path')
function resolve(relativePath) {
  return path.join(__dirname, relativePath)
}
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV
module.exports = {
  publicPath: '/xxx/admin', // www.xxx.com/xxx/admin
  configureWebpack: (config) => {
    if (isProduction === 'production') {
      return {
        resolve: {
          alias: {
            '@': resolve('src'),
          },
        },
        optimization: {
          runtimeChunk: 'single',
          // 分离js
          splitChunks: {
            chunks: 'all', // chunk 可以在异步和非异步 chunk 之间共享
            maxInitialRequests: Number.POSITIVE_INFINITY, // 最大并行请求数
            minSize: 20000, // 生成 chunk 的最小体积
            maxSize: 60000, // 若引入的模块大于60kb，则告诉webpack尝试再进行拆分
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/, // 使用正则匹配node_modules中引入的模块
                priority: -10,
                name(module) {
                  // 设定分包以后的文件模块名字，按照包名字替换拼接一下
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                  )[1]
                  return `npm.${packageName.replace('@', '')}`
                },
              },
            },
          },
        },
      }
    }
    else {
      return {
        resolve: {
          alias: {
            '@': resolve('src'),
          },
        },
      }
    }
  },
  chainWebpack(config) {
    config.module.rule('js').exclude.add(resolve('src/assets/fonts')).end()
  },
  devServer: {
    proxy: {
      '/xxx/api': {
        target: 'http://172.16.16.16',
        ws: false,
        changeOrigin: true,
      },
    },
  },
}
```

:::

::: details vite.config.js

```js
import { resolve } from 'node:path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { createHtmlPlugin } from 'vite-plugin-html'
import { autoComplete, Plugin as importToCDN } from 'vite-plugin-cdn-import'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/xxx/admin',
  resolve: {
    alias: {
      '@': `${resolve(__dirname, 'src')}`,
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [
    vue(),
    visualizer(),
    splitVendorChunkPlugin(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'NAAS SDWAN',
        },
      },
    }),
    /*   importToCDN 不能与 AutoImport 一起使用，
  否则会报错：Uncaught TypeError: Failed to resolve module specifier "vue". Relative references must start with either "/", "./", or "../". */
    importToCDN({
      modules: [
        autoComplete('crypto-js'),
        autoComplete('xlsx'),
        autoComplete('file-saver'),
      ],
    }),
  ],
  server: {
    port: 7000,
    open: true,
    host: true,
    proxy: {
      '/xxx/api': {
        target: 'http://172.16.16.16',
        ws: false,
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
    },
  },
})
```

:::

### 语法转换

#### 动态导入-动态添加路由

```js
const modules = import.meta.glob('@/views/**/*.vue') // [!code ++]
// ...
routeList.forEach((item) => {
  routes.push({
    name: item.name,
    path: item.path,
    // component: () => import(`@/${item.componentPath}`), // [!code --]
    component: modules[item.componentPath], // [!code ++]
    meta: {
      title: item.label,
    },
  })
})
```

vite:

#### 浏览器环境获取环境变量

webpack: `process.env.VUE_APP_TITLE`
vite: `import.meta.env.VITE_APP_TITLE`

```js
const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL, // [!code --]
  base: import.meta.env.BASE_URL, // [!code ++]
  routes,
})
```
