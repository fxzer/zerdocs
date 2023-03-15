
## VueRouter的 base
VueRouter的base属性是指应用的基路径，它会影响到所有使用了vue-router的路由路径，包括 routes 配置中的路径和 通过 $router.push() 或 $router.replace() 调用的路径。

在router对象中，base属性可以通过以下方式设置：

```javascript
const router = new VueRouter({
  base: '/my-app/'
})
```

这个属性值的默认值为 '/'。如果你的应用被部署在一个子目录下，你就需要手动指定base属性的值。

例如，假设你的应用被部署在`http://example.com/my-app/`这个路径下，那么你就需要设置如下的base属性：

```javascript
const router = new VueRouter({
  base: '/my-app/'
})
```

这个设置是非常重要的，因为Vue Router 路由器的默认行为是从根路径(localhost:8080/)  开始的，

如果你需要从你的实际路径下查看（例如 localhost:8080/my-project/），就需要设置base属性了。

除了上述的情况之外，一般我们都不会配置base属性，这个属性的作用主要是为了适应应用被部署在服务器上的子目录下的情况。


## vue.config.js的 publicPath

在 Vue.js 中， publicPath 是用来指定应用程序部署的基础 URL。它作用于构建过程中的静态文件的路径，

同时也影响 Vue Router 中 router-link 组件的路径。一般来说，我们在开发环境和生产环境使用不同的 publicPath 值，来确保应用在不同环境下都能够正确访问静态文件。

以下是一些常见的 publicPath 配置：

- "/"：将生成的静态文件放在根目录下，这是默认值。
- "./"：将生成的静态文件放在当前目录下。
- "../"：将生成的静态文件放在上级目录下。

在 vue.config.js 中，我们可以通过设置 publicPath 来配置应用的部署路径。例如，我们可以将 publicPath 设置为 "/my-app/"，

则构建出的静态文件实际上会被部署到类似于 http://example.com/my-app/ 这样的路径下。代码示例：

```javascript
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-app/'
    : '/'
}
```

通常可以在根目录配置环境变量，相对于不同环境打包时的打包命令
```json
//package.json
"scripts": {
    "serve": "vue-cli-service serve --open --port 9999",
    "build:server": "vue-cli-service build ",
    "build:local": "vue-cli-service build --mode buildlocal"
  },

```

```js 
//.env.production   --服务器打包预览环境变量
OUTPUT_DIR=/opt/nginx/www/html/music
BASE_URL=/music/
```

```js 
//.env.buildlocal   --本地打包预览环境变量
OUTPUT_DIR=dist
BASE_URL=/
```
