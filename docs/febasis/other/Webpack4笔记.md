 

# Webpack4 学习笔记


**Webpack**：是一种 前端资源构建工具，一个静态模块打包器 (module bundler)。

![img](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

##  webpack 五个核心概念

###  一、Entry

 入口 (Entry) 指示 webpack 以哪个文件为入口起点开始打包

###  二、Output

 输出 (Output) 指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。

### 三、Loader

 Loader 让 webpack 能 够 去 处 理 那 些 非 JavaScript 文 件

### 四、 Plugins

 插件 (Plugins) 可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩， 一直到重新定义环境中的变量等。

### 五、 Mode

 指示 webpack 使用相应模式的配置。


## 初始化配置

####  初始化 package.json

```
npm init
```

#### 下载安装 webpack

```bash
npm install webpack webpack-cli -g 
npm install webpack webpack-cli -D
```

####   编译打包

**开发环境：**

```bash
webpack src/js/index.js -o build/js/built.js --mode=development
```

> 功能：webpack 能够编译打包 js 和 json 文件，并且能将 es6 的 模块化语法转换成 浏览器能识别的语法。

**生产环境：**

```bash
webpack src/js/index.js -o build/js/built.js --mode=production
```

> 功能：在开发配置功能上多一个功能，压缩代码。

**结论**
webpack 能够编译打包 js 和 json 文件。
能将 es6 的 模块化语法转换成浏览器能识别的语法。
能压缩代码。

**问题**
不能编译打包 css、img 等文件。
不能将 js 的 es6 基本语法转化为 es5 以下语法。

##  开发环境详细配置

> loader: 1. 下载 2. 使用（配置 loader）
>
> plugins: 1. 下载 2. 引入 3. 使用

```js
/*
  webpack.config.js  webpack的配置文件
    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
*/

// resolve用来拼接绝对路径的方法
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    rules: [
   // 详细loader配置
      // 不同文件必须配置不同loader处理
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上 依次执行
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件
          // 需要下载 less-loader和less
          'less-loader'
        ]
      },
         {
        // 问题：默认处理不了html中img图片
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        // 使用一个loader
        // 下载 url-loader file-loader
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb，就会被base64处理
          // 优点: 减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          // 给图片进行重命名
          // [hash:10]取图片的hash的前10位
          // [ext]取文件原来扩展名
          name: '[hash:10].[ext]'
        }
      },
       {
        test: /\.html$/,
        // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-loader'
      },
         // 打包其他资源(除了html/js/css资源以外的资源)
      {
        // 排除css/js/html资源
        exclude: /\.(css|js|html|less)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]'
        }
      }
        
        
    ]
  },
  // plugins的配置
  plugins: [
     
    // 插件一：html-webpack-plugin
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
    // 需求：需要有结构的HTML文件
    new HtmlWebpackPlugin({
      // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
      template: './src/index.html'
    })
      
  ],
    
    
    
  // 模式
  mode: 'development', // 开发模式
  // mode: 'production'
    
    
    
     // 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~）
  // 特点：只会在内存中编译打包，不会有任何输出
  // 启动devServer指令为：npx webpack-dev-server
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true
  }
}
```

##  生产环境详细配置

###  下包

> ```bash
> npm install --save-dev mini-css-extract-plugin
> ```

```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// 设置nodejs环境变量
// process.env.NODE_ENV = 'development';

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          /*
            css兼容性处理：postcss --> postcss-loader postcss-preset-env

            帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式

            "browserslist": {
              // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
              "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
              ],
              // 生产环境：默认是看生产环境
              "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
              ]
            }
          */
          // 使用loader的默认配置
          // 'postcss-loader',
          // 修改loader的配置
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                // postcss的插件
                require('postcss-preset-env')()
              ]
            }
          }
        ]
      },
        /*
        语法检查： eslint-loader  eslint
          注意：只检查自己写的源代码，第三方的库是不用检查的
          设置检查规则：
            package.json中eslintConfig中设置~
              "eslintConfig": {
                "extends": "airbnb-base"
              }
            airbnb --> eslint-config-airbnb-base  eslint-plugin-import eslint
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复eslint的错误
          fix: true
        }
      },
        /*
        js兼容性处理：babel-loader @babel/core 
          1. 基本js兼容性处理 --> @babel/preset-env
            问题：只能转换基本语法，如promise高级语法不能转换
          2. 全部js兼容性处理 --> @babel/polyfill  
            问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
          3. 需要做兼容性处理的就做：按需加载  --> core-js
      */  
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做怎么样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定core-js版本
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
         // 压缩html代码
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: 'css/built.css'
    }), 
      // 压缩css
      new OptimizeCssAssetsWebpackPlugin()
  ],
     // 生产环境下会自动压缩js代码
  mode: 'production'
};
```

##  优化环境详细配置

- 开发环境性能优化
- 生产环境性能优化

####   优化打包构建速度

- HMR

#### 优化代码调试

- source-map



####  优化打包构建速度

- oneOf
- babel 缓存
- 多进程打包
- externals
- dll

####  优化代码运行的性能

- 缓存 (hash-chunkhash-contenthash)
- tree shaking
- code split
- 懒加载 / 预加载
- pwa

###  开发环境优化配置

```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js', './src/index.html'],
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理css资源
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          // 关闭es6模块化
          esModule: false,
          outputPath: 'imgs'
        }
      },
      {
        // 处理html中img资源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
    hot: true
  }
};
```

###  生产环境优化配置

- Oneof
- babel 缓存
- tree shaking
- code split
- 懒加载
- PWA
- 多进程打包
- externals
- dll

> 正常来讲，所有文件在执行的时候，都要将 loader 中的 rules 过一遍，如果符合，就被对应 loader 处理，不符合则直接过。这样对性能不好，为了解决这个问题，使用 ondeof。
>
> **作用**：提升构建速度，避免每个文件都被所有 loader 过一遍，因为任何一个文件，构建过程中，在遇到第一个与之对应的 loader 后，不会再往下进行。
> oneOf 里面的 loader 只匹配一个。不能有两个配置处理同一种类型的文件，如下图，两个 Loader，一个 eslint，一个 babel，他们都处理 Js 文件，那只会第一个生效，第二个不起作用。



> **babel 缓存**
>
> cacheDirectory: true --> 让第二次打包构建速度更快



> tree shaking：去除无用代码
>
> 前提：1. 必须使用 ES6 模块化 2. 开启 production 环境
>
> 作用：减少代码体积

**在 package.json 中配置**

```js
"sideEffects": false 
所有代码都没有副作用（都可以进行tree shaking）
问题：可能会把css / @babel/polyfill （副作用）文件干掉

"sideEffects": ["*.css", "*.less"]
```



> 可以定义多入口，将不同的入口文件打包为不同的 chunk, 构建多个单独的 js。还能通过 code splitting 实现模块的动态加载。
>
> 1. 可以将 node_modules 中代码单独打包一个 chunk 最终输出
> 2. 自动分析多入口 chunk 中，有没有公共的文件。如果有会打包成单独一个 chunk



> 懒加载：当文件需要使用时才加载
>
> 预加载 prefetch：会在使用之前，提前加载 js 文件
>
> 正常加载可以认为是并行加载（同一时间加载多个文件）
>
> 预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源

```js
document.getElementById('btn').onclick = function() {
  import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then(({ mul }) => {
    console.log(mul(4, 5));
  });
};
```



> PWA: 渐进式网络开发应用程序 (离线可访问)

> workbox --> workbox-webpack-plugin

```js
new WorkboxWebpackPlugin.GenerateSW({
     /*
       1. 帮助serviceworker快速启动
       2. 删除旧的 serviceworker

       生成一个 serviceworker 配置文件~
     */
     clientsClaim: true,
     skipWaiting: true
   })
```

> 1. eslint 不认识 window、navigator 全局变量
>
> **解决**：需要修改 package.json 中 eslintConfig 配置
>
> “env”: {
>
>  “browser”: true // 支持浏览器端全局变量
>
> }
>
> 1. sw 代码必须运行在服务器上
>
>    –> nodejs
>
>    –>
>
>  npm i serve -g
>
>  serve -s build 启动服务器，将 build 目录下所有资源作为静态资源暴露出去

```js
// 注册serviceWorker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('sw注册成功了~');
      })
      .catch(() => {
        console.log('sw注册失败了~');
      });
  });
}
```



```js
{
           test: /\.js$/,
           exclude: /node_modules/,
           use: [
             /* 
               开启多进程打包。 
               进程启动大概为600ms，进程通信也有开销。
               只有工作消耗时间比较长，才需要多进程打包
             */
             {
               loader: 'thread-loader',
               options: {
                 workers: 2 // 进程2个
               }
             },
             {
               loader: 'babel-loader',
               options: {
                 presets: [
                   [
                     '@babel/preset-env',
                     {
                       useBuiltIns: 'usage',
                       corejs: { version: 3 },
                       targets: {
                         chrome: '60',
                         firefox: '50'
                       }
                     }
                   ]
                 ],
                 cacheDirectory: true
               }
             }
           ]
         },
```



> 排除外部引用资源被打包，（jQuery)

```js
externals: {
    // 拒绝jQuery被打包进来
    jquery: 'jQuery'
  }
```



> 使用 dll 技术，对某些库（第三方库：jquery、react、vue…）进行单独打包
>
> 当你运行 webpack 时，默认查找 webpack.config.js 配置文件
>
> 需求：需要运行 webpack.dll.js 文件
>
> –> webpack --config webpack.dll.js

```
const { resolve } = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    // 最终打包生成的[name] --> jquery
    // ['jquery'] --> 要打包的库是jquery
    jquery: ['jquery'],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]' // 打包的库里面向外暴露出去的内容叫什么名字
  },
  plugins: [
    // 打包生成一个 manifest.json --> 提供和jquery映射
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴露的内容名称
      path: resolve(__dirname, 'dll/manifest.json') // 输出文件路径
    })
  ],
  mode: 'production'
};
```



- hash
- chunkhash
- contenthash

>  每次 wepack 构建时会生成一个唯一的 hash 值。
>
> ```
>    问题: 因为js和css同时使用一个hash值。
> ```
>
>  如果重新打包，会导致所有缓存失效。（可能我却只改动一个文件）





> 根据 chunk 生成的 hash 值。如果打包来源于同一个 chunk，那么 hash 值就一样
>
> 问题: js 和 css 的 hash 值还是一样的
>
> 因为 css 是在 js 中被引入的，所以同属于一个 chunk



> 根据文件的内容生成 hash 值。不同文件 hash 值一定不一样
>
> –> 让代码上线运行缓存更好使用



###  生产环境优化配置

```js
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要在package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()]
    }
  }
];

module.exports = {
  entry: './src/js/index.js',
     //多入口：有一个入口，最终输出就有一个bundle
     /* entry: {
        index: './src/js/index.js',
        test: './src/js/test.js'
        },*/
  output: {
    filename: 'js/built.js',
      //不指定固定文件名
      //filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        // 在package.json中eslintConfig --> airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        // 以下loader只会匹配一个
        // 注意：不能有两个配置处理同一种类型文件
        oneOf: [
          {
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          {
            test: /\.less$/,
            use: [...commonCssLoader, 'less-loader']
          },
          /*
            正常来讲，一个文件只能被一个loader处理。
            当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
              先执行eslint 在执行babel
          */
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: {version: 3},
                    targets: {
                      chrome: '60',
                      firefox: '50'
                    }
                  }
                ]
              ]，
            // 开启babel缓存
              // 第二次构建时，会读取之前的缓存
              cacheDirectory: true
            }
          },
          {
            test: /\.(jpg|png|gif)/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false
            }
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            exclude: /\.(js|css|less|html|jpg|png|gif)/,
            loader: 'file-loader',
            options: {
              outputPath: 'media'
            }
          }
        ]
      }
    ]
  },
  plugins: [
      // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, 'dll/manifest.json')
    }),
    // 将某个文件打包输出去，并在html中自动引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, 'dll/jquery.js')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      /*PWA配置
        1. 帮助serviceworker快速启动
        2. 删除旧的 serviceworker

        生成一个 serviceworker 配置文件~
      */
      clientsClaim: true,
      skipWaiting: true
    })
  ],
    /*
    1. 可以将node_modules中代码单独打包一个chunk最终输出
    2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk
  */
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
    externals: {
    // 拒绝jQuery被打包进来
    jquery: 'jQuery'
  }
};
```
