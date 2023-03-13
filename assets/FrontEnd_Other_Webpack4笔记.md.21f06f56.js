import{_ as s,o as n,c as a,a as l}from"./app.4d5976de.js";const u=JSON.parse('{"title":"Webpack4 学习笔记","description":"","frontmatter":{},"headers":[{"level":2,"title":"webpack 五个核心概念","slug":"webpack-五个核心概念","link":"#webpack-五个核心概念","children":[{"level":3,"title":"一、Entry","slug":"一、entry","link":"#一、entry","children":[]},{"level":3,"title":"二、Output","slug":"二、output","link":"#二、output","children":[]},{"level":3,"title":"三、Loader","slug":"三、loader","link":"#三、loader","children":[]},{"level":3,"title":"四、 Plugins","slug":"四、-plugins","link":"#四、-plugins","children":[]},{"level":3,"title":"五、 Mode","slug":"五、-mode","link":"#五、-mode","children":[]}]},{"level":2,"title":"初始化配置","slug":"初始化配置","link":"#初始化配置","children":[]},{"level":2,"title":"开发环境详细配置","slug":"开发环境详细配置","link":"#开发环境详细配置","children":[]},{"level":2,"title":"生产环境详细配置","slug":"生产环境详细配置","link":"#生产环境详细配置","children":[{"level":3,"title":"下包","slug":"下包","link":"#下包","children":[]}]},{"level":2,"title":"优化环境详细配置","slug":"优化环境详细配置","link":"#优化环境详细配置","children":[{"level":3,"title":"开发环境优化配置","slug":"开发环境优化配置","link":"#开发环境优化配置","children":[]},{"level":3,"title":"生产环境优化配置","slug":"生产环境优化配置","link":"#生产环境优化配置","children":[]},{"level":3,"title":"生产环境优化配置","slug":"生产环境优化配置-1","link":"#生产环境优化配置-1","children":[]}]}],"relativePath":"FrontEnd/Other/Webpack4笔记.md"}'),p={name:"FrontEnd/Other/Webpack4笔记.md"},o=l(`<h1 id="webpack4-学习笔记" tabindex="-1">Webpack4 学习笔记 <a class="header-anchor" href="#webpack4-学习笔记" aria-hidden="true">#</a></h1><p><strong>Webpack</strong>：是一种 前端资源构建工具，一个静态模块打包器 (module bundler)。</p><p><img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" alt="img"></p><h2 id="webpack-五个核心概念" tabindex="-1">webpack 五个核心概念 <a class="header-anchor" href="#webpack-五个核心概念" aria-hidden="true">#</a></h2><h3 id="一、entry" tabindex="-1">一、Entry <a class="header-anchor" href="#一、entry" aria-hidden="true">#</a></h3><p>入口 (Entry) 指示 webpack 以哪个文件为入口起点开始打包</p><h3 id="二、output" tabindex="-1">二、Output <a class="header-anchor" href="#二、output" aria-hidden="true">#</a></h3><p>输出 (Output) 指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。</p><h3 id="三、loader" tabindex="-1">三、Loader <a class="header-anchor" href="#三、loader" aria-hidden="true">#</a></h3><p>Loader 让 webpack 能 够 去 处 理 那 些 非 JavaScript 文 件</p><h3 id="四、-plugins" tabindex="-1">四、 Plugins <a class="header-anchor" href="#四、-plugins" aria-hidden="true">#</a></h3><p>插件 (Plugins) 可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩， 一直到重新定义环境中的变量等。</p><h3 id="五、-mode" tabindex="-1">五、 Mode <a class="header-anchor" href="#五、-mode" aria-hidden="true">#</a></h3><p>指示 webpack 使用相应模式的配置。</p><h2 id="初始化配置" tabindex="-1">初始化配置 <a class="header-anchor" href="#初始化配置" aria-hidden="true">#</a></h2><h4 id="初始化-package-json" tabindex="-1">初始化 package.json <a class="header-anchor" href="#初始化-package-json" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm init</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm init</span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div><h4 id="下载安装-webpack" tabindex="-1">下载安装 webpack <a class="header-anchor" href="#下载安装-webpack" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">npm </span><span style="color:#E7EE98;">install</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">webpack</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">webpack-cli</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-g</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"><span style="color:#F6F6F4;">npm </span><span style="color:#E7EE98;">install</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">webpack</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">webpack-cli</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-D</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack-cli</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack-cli</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span></code></pre></div><h4 id="编译打包" tabindex="-1">编译打包 <a class="header-anchor" href="#编译打包" aria-hidden="true">#</a></h4><p><strong>开发环境：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">webpack </span><span style="color:#E7EE98;">src/js/index.js</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-o</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">build/js/built.js</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--mode=development</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">webpack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src/js/index.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build/js/built.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--mode=development</span></span>
<span class="line"></span></code></pre></div><blockquote><p>功能：webpack 能够编译打包 js 和 json 文件，并且能将 es6 的 模块化语法转换成 浏览器能识别的语法。</p></blockquote><p><strong>生产环境：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">webpack </span><span style="color:#E7EE98;">src/js/index.js</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-o</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">build/js/built.js</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--mode=production</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">webpack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src/js/index.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build/js/built.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--mode=production</span></span>
<span class="line"></span></code></pre></div><blockquote><p>功能：在开发配置功能上多一个功能，压缩代码。</p></blockquote><p><strong>结论</strong> webpack 能够编译打包 js 和 json 文件。 能将 es6 的 模块化语法转换成浏览器能识别的语法。 能压缩代码。</p><p><strong>问题</strong> 不能编译打包 css、img 等文件。 不能将 js 的 es6 基本语法转化为 es5 以下语法。</p><h2 id="开发环境详细配置" tabindex="-1">开发环境详细配置 <a class="header-anchor" href="#开发环境详细配置" aria-hidden="true">#</a></h2><blockquote><p>loader: 1. 下载 2. 使用（配置 loader）</p><p>plugins: 1. 下载 2. 引入 3. 使用</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">  webpack.config.js  webpack的配置文件</span></span>
<span class="line"><span style="color:#7B7F8B;">    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。</span></span>
<span class="line"><span style="color:#7B7F8B;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// resolve用来拼接绝对路径的方法</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { resolve } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">path</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> HtmlWebpackPlugin </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">html-webpack-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#97E1F1;font-style:italic;">module</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">exports</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// webpack配置</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 入口起点</span></span>
<span class="line"><span style="color:#F6F6F4;">  entry</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./src/index.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 输出</span></span>
<span class="line"><span style="color:#F6F6F4;">  output</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 输出文件名</span></span>
<span class="line"><span style="color:#F6F6F4;">    filename</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">built.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 输出路径</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// __dirname nodejs的变量，代表当前文件的目录绝对路径</span></span>
<span class="line"><span style="color:#F6F6F4;">    path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(__dirname, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">build</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// loader的配置</span></span>
<span class="line"><span style="color:#F6F6F4;">  module</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    rules</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#7B7F8B;">// 详细loader配置</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 不同文件必须配置不同loader处理</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 匹配哪些文件</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.css</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 使用哪些loader进行处理</span></span>
<span class="line"><span style="color:#F6F6F4;">        use</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// use数组中loader执行顺序：从右到左，从下到上 依次执行</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 创建style标签，将js中的样式资源插入进行，添加到head中生效</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">style-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 将css文件变成commonjs模块加载js中，里面内容是样式字符串</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">css-loader</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">        ]</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.less</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        use</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">style-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">css-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 将less文件编译成css文件</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 需要下载 less-loader和less</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">less-loader</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">        ]</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">         {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 问题：默认处理不了html中img图片</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 处理图片资源</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.</span><span style="color:#FFB86C;">(</span><span style="color:#E7EE98;">jpg</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">png</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">gif</span><span style="color:#FFB86C;">)</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 使用一个loader</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 下载 url-loader file-loader</span></span>
<span class="line"><span style="color:#F6F6F4;">        loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">url-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 图片大小小于8kb，就会被base64处理</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 优点: 减少请求数量（减轻服务器压力）</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 缺点：图片体积会更大（文件请求速度更慢）</span></span>
<span class="line"><span style="color:#F6F6F4;">          limit</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">8</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1024</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 解析时会出问题：[object Module]</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 解决：关闭url-loader的es6模块化，使用commonjs解析</span></span>
<span class="line"><span style="color:#F6F6F4;">          esModule</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 给图片进行重命名</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// [hash:10]取图片的hash的前10位</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// [ext]取文件原来扩展名</span></span>
<span class="line"><span style="color:#F6F6F4;">          name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">[hash:10].[ext]</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">       {</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.html</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）</span></span>
<span class="line"><span style="color:#F6F6F4;">        loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">html-loader</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">         </span><span style="color:#7B7F8B;">// 打包其他资源(除了html/js/css资源以外的资源)</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 排除css/js/html资源</span></span>
<span class="line"><span style="color:#F6F6F4;">        exclude</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.</span><span style="color:#FFB86C;">(</span><span style="color:#E7EE98;">css</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">js</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">html</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">less</span><span style="color:#FFB86C;">)</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">file-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">[hash:10].[ext]</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span></span>
<span class="line"><span style="color:#F6F6F4;">        </span></span>
<span class="line"><span style="color:#F6F6F4;">    ]</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// plugins的配置</span></span>
<span class="line"><span style="color:#F6F6F4;">  plugins</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 插件一：html-webpack-plugin</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 需求：需要有结构的HTML文件</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">HtmlWebpackPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 复制 &#39;./src/index.html&#39; 文件，并自动引入打包输出的所有资源（JS/CSS）</span></span>
<span class="line"><span style="color:#F6F6F4;">      template</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./src/index.html</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">    })</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span></span>
<span class="line"><span style="color:#F6F6F4;">  ],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 模式</span></span>
<span class="line"><span style="color:#F6F6F4;">  mode</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">development</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">// 开发模式</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#7B7F8B;">// 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~）</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 特点：只会在内存中编译打包，不会有任何输出</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 启动devServer指令为：npx webpack-dev-server</span></span>
<span class="line"><span style="color:#F6F6F4;">  devServer</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 项目构建后路径</span></span>
<span class="line"><span style="color:#F6F6F4;">    contentBase</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(__dirname, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">build</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">),</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 启动gzip压缩</span></span>
<span class="line"><span style="color:#F6F6F4;">    compress</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 端口号</span></span>
<span class="line"><span style="color:#F6F6F4;">    port</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 自动打开浏览器</span></span>
<span class="line"><span style="color:#F6F6F4;">    open</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">  webpack.config.js  webpack的配置文件</span></span>
<span class="line"><span style="color:#6A737D;">    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// resolve用来拼接绝对路径的方法</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">resolve</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;html-webpack-plugin&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// webpack配置</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 入口起点</span></span>
<span class="line"><span style="color:#24292E;">  entry: </span><span style="color:#032F62;">&#39;./src/index.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 输出文件名</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;built.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 输出路径</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// __dirname nodejs的变量，代表当前文件的目录绝对路径</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;build&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// loader的配置</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 详细loader配置</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 不同文件必须配置不同loader处理</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 匹配哪些文件</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 使用哪些loader进行处理</span></span>
<span class="line"><span style="color:#24292E;">        use: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// use数组中loader执行顺序：从右到左，从下到上 依次执行</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 创建style标签，将js中的样式资源插入进行，添加到head中生效</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;style-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 将css文件变成commonjs模块加载js中，里面内容是样式字符串</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;css-loader&#39;</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">less</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;style-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 将less文件编译成css文件</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 需要下载 less-loader和less</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;less-loader&#39;</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">         {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 问题：默认处理不了html中img图片</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 处理图片资源</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(jpg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 使用一个loader</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 下载 url-loader file-loader</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;url-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 图片大小小于8kb，就会被base64处理</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 优点: 减少请求数量（减轻服务器压力）</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 缺点：图片体积会更大（文件请求速度更慢）</span></span>
<span class="line"><span style="color:#24292E;">          limit: </span><span style="color:#005CC5;">8</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 解析时会出问题：[object Module]</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 解决：关闭url-loader的es6模块化，使用commonjs解析</span></span>
<span class="line"><span style="color:#24292E;">          esModule: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 给图片进行重命名</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// [hash:10]取图片的hash的前10位</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// [ext]取文件原来扩展名</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;[hash:10].[ext]&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">       {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">html</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">// 打包其他资源(除了html/js/css资源以外的资源)</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 排除css/js/html资源</span></span>
<span class="line"><span style="color:#24292E;">        exclude:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(css</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">html</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">less)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;file-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;[hash:10].[ext]&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// plugins的配置</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 插件一：html-webpack-plugin</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 需求：需要有结构的HTML文件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 复制 &#39;./src/index.html&#39; 文件，并自动引入打包输出的所有资源（JS/CSS）</span></span>
<span class="line"><span style="color:#24292E;">      template: </span><span style="color:#032F62;">&#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 模式</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开发模式</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 特点：只会在内存中编译打包，不会有任何输出</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 启动devServer指令为：npx webpack-dev-server</span></span>
<span class="line"><span style="color:#24292E;">  devServer: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 项目构建后路径</span></span>
<span class="line"><span style="color:#24292E;">    contentBase: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;build&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 启动gzip压缩</span></span>
<span class="line"><span style="color:#24292E;">    compress: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 端口号</span></span>
<span class="line"><span style="color:#24292E;">    port: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 自动打开浏览器</span></span>
<span class="line"><span style="color:#24292E;">    open: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="生产环境详细配置" tabindex="-1">生产环境详细配置 <a class="header-anchor" href="#生产环境详细配置" aria-hidden="true">#</a></h2><h3 id="下包" tabindex="-1">下包 <a class="header-anchor" href="#下包" aria-hidden="true">#</a></h3><blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">npm </span><span style="color:#E7EE98;">install</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--save-dev</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">mini-css-extract-plugin</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mini-css-extract-plugin</span></span>
<span class="line"></span></code></pre></div></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { resolve } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">path</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> HtmlWebpackPlugin </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">html-webpack-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> MiniCssExtractPlugin </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">mini-css-extract-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> OptimizeCssAssetsWebpackPlugin </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">optimize-css-assets-webpack-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 设置nodejs环境变量</span></span>
<span class="line"><span style="color:#7B7F8B;">// p<wbr>rocess.env.NODE_ENV = &#39;development&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#97E1F1;font-style:italic;">module</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">exports</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  entry</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./src/js/index.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  output</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    filename</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">js/built.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(__dirname, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">build</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  module</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    rules</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.css</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        use</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">          MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">css-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">            css兼容性处理：postcss --&gt; postcss-loader postcss-preset-env</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">            帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">            &quot;browserslist&quot;: {</span></span>
<span class="line"><span style="color:#7B7F8B;">              // 开发环境 --&gt; 设置node环境变量：p<wbr>rocess.env.NODE_ENV = development</span></span>
<span class="line"><span style="color:#7B7F8B;">              &quot;development&quot;: [</span></span>
<span class="line"><span style="color:#7B7F8B;">                &quot;last 1 chrome version&quot;,</span></span>
<span class="line"><span style="color:#7B7F8B;">                &quot;last 1 firefox version&quot;,</span></span>
<span class="line"><span style="color:#7B7F8B;">                &quot;last 1 safari version&quot;</span></span>
<span class="line"><span style="color:#7B7F8B;">              ],</span></span>
<span class="line"><span style="color:#7B7F8B;">              // 生产环境：默认是看生产环境</span></span>
<span class="line"><span style="color:#7B7F8B;">              &quot;production&quot;: [</span></span>
<span class="line"><span style="color:#7B7F8B;">                &quot;&gt;0.2%&quot;,</span></span>
<span class="line"><span style="color:#7B7F8B;">                &quot;not dead&quot;,</span></span>
<span class="line"><span style="color:#7B7F8B;">                &quot;not op_mini all&quot;</span></span>
<span class="line"><span style="color:#7B7F8B;">              ]</span></span>
<span class="line"><span style="color:#7B7F8B;">            }</span></span>
<span class="line"><span style="color:#7B7F8B;">          */</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 使用loader的默认配置</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 修改loader的配置</span></span>
<span class="line"><span style="color:#F6F6F4;">          {</span></span>
<span class="line"><span style="color:#F6F6F4;">            loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">postcss-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              ident</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">postcss</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              </span><span style="color:#62E884;">plugins</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">                </span><span style="color:#7B7F8B;">// postcss的插件</span></span>
<span class="line"><span style="color:#F6F6F4;">                </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">postcss-preset-env</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)()</span></span>
<span class="line"><span style="color:#F6F6F4;">              ]</span></span>
<span class="line"><span style="color:#F6F6F4;">            }</span></span>
<span class="line"><span style="color:#F6F6F4;">          }</span></span>
<span class="line"><span style="color:#F6F6F4;">        ]</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">        语法检查： eslint-loader  eslint</span></span>
<span class="line"><span style="color:#7B7F8B;">          注意：只检查自己写的源代码，第三方的库是不用检查的</span></span>
<span class="line"><span style="color:#7B7F8B;">          设置检查规则：</span></span>
<span class="line"><span style="color:#7B7F8B;">            package.json中eslintConfig中设置~</span></span>
<span class="line"><span style="color:#7B7F8B;">              &quot;eslintConfig&quot;: {</span></span>
<span class="line"><span style="color:#7B7F8B;">                &quot;extends&quot;: &quot;airbnb-base&quot;</span></span>
<span class="line"><span style="color:#7B7F8B;">              }</span></span>
<span class="line"><span style="color:#7B7F8B;">            airbnb --&gt; eslint-config-airbnb-base  eslint-plugin-import eslint</span></span>
<span class="line"><span style="color:#7B7F8B;">      */</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.js</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        exclude</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">node_modules</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">eslint-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 自动修复eslint的错误</span></span>
<span class="line"><span style="color:#F6F6F4;">          fix</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">        js兼容性处理：babel-loader @babel/core </span></span>
<span class="line"><span style="color:#7B7F8B;">          1. 基本js兼容性处理 --&gt; @babel/preset-env</span></span>
<span class="line"><span style="color:#7B7F8B;">            问题：只能转换基本语法，如promise高级语法不能转换</span></span>
<span class="line"><span style="color:#7B7F8B;">          2. 全部js兼容性处理 --&gt; @babel/polyfill  </span></span>
<span class="line"><span style="color:#7B7F8B;">            问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~</span></span>
<span class="line"><span style="color:#7B7F8B;">          3. 需要做兼容性处理的就做：按需加载  --&gt; core-js</span></span>
<span class="line"><span style="color:#7B7F8B;">      */</span><span style="color:#F6F6F4;">  </span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.js</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        exclude</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">node_modules</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">babel-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 预设：指示babel做怎么样的兼容性处理</span></span>
<span class="line"><span style="color:#F6F6F4;">          presets</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">            [</span></span>
<span class="line"><span style="color:#F6F6F4;">              </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@babel/preset-env</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              {</span></span>
<span class="line"><span style="color:#F6F6F4;">                </span><span style="color:#7B7F8B;">// 按需加载</span></span>
<span class="line"><span style="color:#F6F6F4;">                useBuiltIns</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">usage</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                </span><span style="color:#7B7F8B;">// 指定core-js版本</span></span>
<span class="line"><span style="color:#F6F6F4;">                corejs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">                  version</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3</span></span>
<span class="line"><span style="color:#F6F6F4;">                },</span></span>
<span class="line"><span style="color:#F6F6F4;">                </span><span style="color:#7B7F8B;">// 指定兼容性做到哪个版本浏览器</span></span>
<span class="line"><span style="color:#F6F6F4;">                targets</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">                  chrome</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">60</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                  firefox</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">60</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                  ie</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">9</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                  safari</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">10</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                  edge</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">17</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">                }</span></span>
<span class="line"><span style="color:#F6F6F4;">              }</span></span>
<span class="line"><span style="color:#F6F6F4;">            ]</span></span>
<span class="line"><span style="color:#F6F6F4;">          ]</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    ]</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  plugins</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">HtmlWebpackPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">      template</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./src/index.html</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">         </span><span style="color:#7B7F8B;">// 压缩html代码</span></span>
<span class="line"><span style="color:#F6F6F4;">      minify</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 移除空格</span></span>
<span class="line"><span style="color:#F6F6F4;">        collapseWhitespace</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 移除注释</span></span>
<span class="line"><span style="color:#F6F6F4;">        removeComments</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }),</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">MiniCssExtractPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 对输出的css文件进行重命名</span></span>
<span class="line"><span style="color:#F6F6F4;">      filename</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">css/built.css</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }), </span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 压缩css</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">OptimizeCssAssetsWebpackPlugin</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">  ],</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#7B7F8B;">// 生产环境下会自动压缩js代码</span></span>
<span class="line"><span style="color:#F6F6F4;">  mode</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">production</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">resolve</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;html-webpack-plugin&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MiniCssExtractPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mini-css-extract-plugin&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">OptimizeCssAssetsWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;optimize-css-assets-webpack-plugin&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置nodejs环境变量</span></span>
<span class="line"><span style="color:#6A737D;">// p<wbr>rocess.env.NODE_ENV = &#39;development&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  entry: </span><span style="color:#032F62;">&#39;./src/js/index.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;js/built.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;build&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: [</span></span>
<span class="line"><span style="color:#24292E;">          MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">            css兼容性处理：postcss --&gt; postcss-loader postcss-preset-env</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            &quot;browserslist&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">              // 开发环境 --&gt; 设置node环境变量：p<wbr>rocess.env.NODE_ENV = development</span></span>
<span class="line"><span style="color:#6A737D;">              &quot;development&quot;: [</span></span>
<span class="line"><span style="color:#6A737D;">                &quot;last 1 chrome version&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">                &quot;last 1 firefox version&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">                &quot;last 1 safari version&quot;</span></span>
<span class="line"><span style="color:#6A737D;">              ],</span></span>
<span class="line"><span style="color:#6A737D;">              // 生产环境：默认是看生产环境</span></span>
<span class="line"><span style="color:#6A737D;">              &quot;production&quot;: [</span></span>
<span class="line"><span style="color:#6A737D;">                &quot;&gt;0.2%&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">                &quot;not dead&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">                &quot;not op_mini all&quot;</span></span>
<span class="line"><span style="color:#6A737D;">              ]</span></span>
<span class="line"><span style="color:#6A737D;">            }</span></span>
<span class="line"><span style="color:#6A737D;">          */</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 使用loader的默认配置</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 修改loader的配置</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            loader: </span><span style="color:#032F62;">&#39;postcss-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            options: {</span></span>
<span class="line"><span style="color:#24292E;">              ident: </span><span style="color:#032F62;">&#39;postcss&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// postcss的插件</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;postcss-preset-env&#39;</span><span style="color:#24292E;">)()</span></span>
<span class="line"><span style="color:#24292E;">              ]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">        语法检查： eslint-loader  eslint</span></span>
<span class="line"><span style="color:#6A737D;">          注意：只检查自己写的源代码，第三方的库是不用检查的</span></span>
<span class="line"><span style="color:#6A737D;">          设置检查规则：</span></span>
<span class="line"><span style="color:#6A737D;">            package.json中eslintConfig中设置~</span></span>
<span class="line"><span style="color:#6A737D;">              &quot;eslintConfig&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">                &quot;extends&quot;: &quot;airbnb-base&quot;</span></span>
<span class="line"><span style="color:#6A737D;">              }</span></span>
<span class="line"><span style="color:#6A737D;">            airbnb --&gt; eslint-config-airbnb-base  eslint-plugin-import eslint</span></span>
<span class="line"><span style="color:#6A737D;">      */</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        exclude:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;eslint-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 自动修复eslint的错误</span></span>
<span class="line"><span style="color:#24292E;">          fix: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">        js兼容性处理：babel-loader @babel/core </span></span>
<span class="line"><span style="color:#6A737D;">          1. 基本js兼容性处理 --&gt; @babel/preset-env</span></span>
<span class="line"><span style="color:#6A737D;">            问题：只能转换基本语法，如promise高级语法不能转换</span></span>
<span class="line"><span style="color:#6A737D;">          2. 全部js兼容性处理 --&gt; @babel/polyfill  </span></span>
<span class="line"><span style="color:#6A737D;">            问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~</span></span>
<span class="line"><span style="color:#6A737D;">          3. 需要做兼容性处理的就做：按需加载  --&gt; core-js</span></span>
<span class="line"><span style="color:#6A737D;">      */</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        exclude:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;babel-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 预设：指示babel做怎么样的兼容性处理</span></span>
<span class="line"><span style="color:#24292E;">          presets: [</span></span>
<span class="line"><span style="color:#24292E;">            [</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#032F62;">&#39;@babel/preset-env&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 按需加载</span></span>
<span class="line"><span style="color:#24292E;">                useBuiltIns: </span><span style="color:#032F62;">&#39;usage&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 指定core-js版本</span></span>
<span class="line"><span style="color:#24292E;">                corejs: {</span></span>
<span class="line"><span style="color:#24292E;">                  version: </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 指定兼容性做到哪个版本浏览器</span></span>
<span class="line"><span style="color:#24292E;">                targets: {</span></span>
<span class="line"><span style="color:#24292E;">                  chrome: </span><span style="color:#032F62;">&#39;60&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  firefox: </span><span style="color:#032F62;">&#39;60&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  ie: </span><span style="color:#032F62;">&#39;9&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  safari: </span><span style="color:#032F62;">&#39;10&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  edge: </span><span style="color:#032F62;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      template: </span><span style="color:#032F62;">&#39;./src/index.html&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">// 压缩html代码</span></span>
<span class="line"><span style="color:#24292E;">      minify: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 移除空格</span></span>
<span class="line"><span style="color:#24292E;">        collapseWhitespace: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 移除注释</span></span>
<span class="line"><span style="color:#24292E;">        removeComments: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MiniCssExtractPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 对输出的css文件进行重命名</span></span>
<span class="line"><span style="color:#24292E;">      filename: </span><span style="color:#032F62;">&#39;css/built.css&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }), </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 压缩css</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OptimizeCssAssetsWebpackPlugin</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 生产环境下会自动压缩js代码</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;production&#39;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="优化环境详细配置" tabindex="-1">优化环境详细配置 <a class="header-anchor" href="#优化环境详细配置" aria-hidden="true">#</a></h2><ul><li>开发环境性能优化</li><li>生产环境性能优化</li></ul><h4 id="优化打包构建速度" tabindex="-1">优化打包构建速度 <a class="header-anchor" href="#优化打包构建速度" aria-hidden="true">#</a></h4><ul><li>HMR</li></ul><h4 id="优化代码调试" tabindex="-1">优化代码调试 <a class="header-anchor" href="#优化代码调试" aria-hidden="true">#</a></h4><ul><li>source-map</li></ul><h4 id="优化打包构建速度-1" tabindex="-1">优化打包构建速度 <a class="header-anchor" href="#优化打包构建速度-1" aria-hidden="true">#</a></h4><ul><li>oneOf</li><li>babel 缓存</li><li>多进程打包</li><li>externals</li><li>dll</li></ul><h4 id="优化代码运行的性能" tabindex="-1">优化代码运行的性能 <a class="header-anchor" href="#优化代码运行的性能" aria-hidden="true">#</a></h4><ul><li>缓存 (hash-chunkhash-contenthash)</li><li>tree shaking</li><li>code split</li><li>懒加载 / 预加载</li><li>pwa</li></ul><h3 id="开发环境优化配置" tabindex="-1">开发环境优化配置 <a class="header-anchor" href="#开发环境优化配置" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { resolve } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">path</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> HtmlWebpackPlugin </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">html-webpack-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#97E1F1;font-style:italic;">module</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">exports</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  entry</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./src/js/index.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./src/index.html</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">  output</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    filename</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">js/built.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(__dirname, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">build</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  module</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    rules</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// loader的配置</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 处理less资源</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.less</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        use</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">style-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">css-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">less-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 处理css资源</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.css</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        use</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">style-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">css-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 处理图片资源</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.</span><span style="color:#FFB86C;">(</span><span style="color:#E7EE98;">jpg</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">png</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">gif</span><span style="color:#FFB86C;">)</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">url-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          limit</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">8</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1024</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">[hash:10].[ext]</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 关闭es6模块化</span></span>
<span class="line"><span style="color:#F6F6F4;">          esModule</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          outputPath</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">imgs</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 处理html中img资源</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.html</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">html-loader</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 处理其他资源</span></span>
<span class="line"><span style="color:#F6F6F4;">        exclude</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.</span><span style="color:#FFB86C;">(</span><span style="color:#E7EE98;">html</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">js</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">css</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">less</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">jpg</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">png</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">gif</span><span style="color:#FFB86C;">)</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">file-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">[hash:10].[ext]</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          outputPath</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">media</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    ]</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  plugins</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// plugins的配置</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">HtmlWebpackPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">      template</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./src/index.html</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">    })</span></span>
<span class="line"><span style="color:#F6F6F4;">  ],</span></span>
<span class="line"><span style="color:#F6F6F4;">  mode</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">development</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  devServer</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    contentBase</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(__dirname, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">build</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">),</span></span>
<span class="line"><span style="color:#F6F6F4;">    compress</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    port</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    open</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 开启HMR功能</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 当修改了webpack配置，新配置要想生效，必须重新webpack服务</span></span>
<span class="line"><span style="color:#F6F6F4;">    hot</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">resolve</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;html-webpack-plugin&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  entry: [</span><span style="color:#032F62;">&#39;./src/js/index.js&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./src/index.html&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;js/built.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;build&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// loader的配置</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 处理less资源</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">less</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: [</span><span style="color:#032F62;">&#39;style-loader&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;less-loader&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 处理css资源</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: [</span><span style="color:#032F62;">&#39;style-loader&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 处理图片资源</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(jpg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;url-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: {</span></span>
<span class="line"><span style="color:#24292E;">          limit: </span><span style="color:#005CC5;">8</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;[hash:10].[ext]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 关闭es6模块化</span></span>
<span class="line"><span style="color:#24292E;">          esModule: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          outputPath: </span><span style="color:#032F62;">&#39;imgs&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 处理html中img资源</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">html</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 处理其他资源</span></span>
<span class="line"><span style="color:#24292E;">        exclude:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(html</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">less</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jpg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif)/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;file-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;[hash:10].[ext]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          outputPath: </span><span style="color:#032F62;">&#39;media&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// plugins的配置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      template: </span><span style="color:#032F62;">&#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  devServer: {</span></span>
<span class="line"><span style="color:#24292E;">    contentBase: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;build&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    compress: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    port: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    open: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 开启HMR功能</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当修改了webpack配置，新配置要想生效，必须重新webpack服务</span></span>
<span class="line"><span style="color:#24292E;">    hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="生产环境优化配置" tabindex="-1">生产环境优化配置 <a class="header-anchor" href="#生产环境优化配置" aria-hidden="true">#</a></h3><ul><li>Oneof</li><li>babel 缓存</li><li>tree shaking</li><li>code split</li><li>懒加载</li><li>PWA</li><li>多进程打包</li><li>externals</li><li>dll</li></ul><blockquote><p>正常来讲，所有文件在执行的时候，都要将 loader 中的 rules 过一遍，如果符合，就被对应 loader 处理，不符合则直接过。这样对性能不好，为了解决这个问题，使用 ondeof。</p><p><strong>作用</strong>：提升构建速度，避免每个文件都被所有 loader 过一遍，因为任何一个文件，构建过程中，在遇到第一个与之对应的 loader 后，不会再往下进行。 oneOf 里面的 loader 只匹配一个。不能有两个配置处理同一种类型的文件，如下图，两个 Loader，一个 eslint，一个 babel，他们都处理 Js 文件，那只会第一个生效，第二个不起作用。</p></blockquote><blockquote><p><strong>babel 缓存</strong></p><p>cacheDirectory: true --&gt; 让第二次打包构建速度更快</p></blockquote><blockquote><p>tree shaking：去除无用代码</p><p>前提：1. 必须使用 ES6 模块化 2. 开启 production 环境</p><p>作用：减少代码体积</p></blockquote><p><strong>在 package.json 中配置</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">sideEffects</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">: </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"><span style="color:#F6F6F4;">所有代码都没有副作用（都可以进行tree shaking）</span></span>
<span class="line"><span style="color:#F6F6F4;">问题：可能会把css </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;"> @</span><span style="color:#62E884;font-style:italic;">babel</span><span style="color:#F286C4;">/</span><span style="color:#62E884;font-style:italic;">polyfill</span><span style="color:#F6F6F4;"> （副作用）文件干掉</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">sideEffects</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">: [</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">*.css</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">*.less</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;sideEffects&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">所有代码都没有副作用（都可以进行tree shaking）</span></span>
<span class="line"><span style="color:#24292E;">问题：可能会把css </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> @babel</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">polyfill （副作用）文件干掉</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">&quot;sideEffects&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;*.css&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;*.less&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span></code></pre></div><blockquote><p>可以定义多入口，将不同的入口文件打包为不同的 chunk, 构建多个单独的 js。还能通过 code splitting 实现模块的动态加载。</p><ol><li>可以将 node_modules 中代码单独打包一个 chunk 最终输出</li><li>自动分析多入口 chunk 中，有没有公共的文件。如果有会打包成单独一个 chunk</li></ol></blockquote><blockquote><p>懒加载：当文件需要使用时才加载</p><p>预加载 prefetch：会在使用之前，提前加载 js 文件</p><p>正常加载可以认为是并行加载（同一时间加载多个文件）</p><p>预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">document.</span><span style="color:#62E884;">getElementById</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">btn</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">).</span><span style="color:#62E884;">onclick</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">import</span><span style="color:#F6F6F4;">(</span><span style="color:#7B7F8B;">/* webpackChunkName: &#39;test&#39;, webpackPrefetch: true */</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./test</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">).</span><span style="color:#62E884;">then</span><span style="color:#F6F6F4;">(({ </span><span style="color:#FFB86C;font-style:italic;">mul</span><span style="color:#F6F6F4;"> }) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#62E884;">mul</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">));</span></span>
<span class="line"><span style="color:#F6F6F4;">  });</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;btn&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;test&#39;, webpackPrefetch: true */</span><span style="color:#032F62;">&#39;./test&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(({ </span><span style="color:#E36209;">mul</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">mul</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div><blockquote><p>PWA: 渐进式网络开发应用程序 (离线可访问)</p></blockquote><blockquote><p>workbox --&gt; workbox-webpack-plugin</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> WorkboxWebpackPlugin.</span><span style="color:#62E884;">GenerateSW</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">       1. 帮助serviceworker快速启动</span></span>
<span class="line"><span style="color:#7B7F8B;">       2. 删除旧的 serviceworker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">       生成一个 serviceworker 配置文件~</span></span>
<span class="line"><span style="color:#7B7F8B;">     */</span></span>
<span class="line"><span style="color:#F6F6F4;">     clientsClaim</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">     skipWaiting</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">   })</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> WorkboxWebpackPlugin.</span><span style="color:#6F42C1;">GenerateSW</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">       1. 帮助serviceworker快速启动</span></span>
<span class="line"><span style="color:#6A737D;">       2. 删除旧的 serviceworker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">       生成一个 serviceworker 配置文件~</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">     clientsClaim: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">     skipWaiting: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">   })</span></span>
<span class="line"></span></code></pre></div><blockquote><ol><li>eslint 不认识 window、navigator 全局变量</li></ol><p><strong>解决</strong>：需要修改 package.json 中 eslintConfig 配置</p><p>“env”: {</p><p>“browser”: true // 支持浏览器端全局变量</p><p>}</p><ol><li><p>sw 代码必须运行在服务器上</p><p>–&gt; nodejs</p><p>–&gt;</p></li></ol><p>npm i serve -g</p><p>serve -s build 启动服务器，将 build 目录下所有资源作为静态资源暴露出去</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// 注册serviceWorker</span></span>
<span class="line"><span style="color:#7B7F8B;">// 处理兼容性问题</span></span>
<span class="line"><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">serviceWorker</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">in</span><span style="color:#F6F6F4;"> navigator) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  window.</span><span style="color:#62E884;">addEventListener</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">load</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    navigator.serviceWorker</span></span>
<span class="line"><span style="color:#F6F6F4;">      .</span><span style="color:#62E884;">register</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/service-worker.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">      .</span><span style="color:#62E884;">then</span><span style="color:#F6F6F4;">(() </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">sw注册成功了~</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">      })</span></span>
<span class="line"><span style="color:#F6F6F4;">      .</span><span style="color:#62E884;">catch</span><span style="color:#F6F6F4;">(() </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">sw注册失败了~</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">  });</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 注册serviceWorker</span></span>
<span class="line"><span style="color:#6A737D;">// 处理兼容性问题</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;serviceWorker&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> navigator) {</span></span>
<span class="line"><span style="color:#24292E;">  window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;load&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    navigator.serviceWorker</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/service-worker.js&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;sw注册成功了~&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;sw注册失败了~&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">           test:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.js</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">           exclude:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">node_modules</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">           use: [</span></span>
<span class="line"><span style="color:#F6F6F4;">             </span><span style="color:#7B7F8B;">/* </span></span>
<span class="line"><span style="color:#7B7F8B;">               开启多进程打包。 </span></span>
<span class="line"><span style="color:#7B7F8B;">               进程启动大概为600ms，进程通信也有开销。</span></span>
<span class="line"><span style="color:#7B7F8B;">               只有工作消耗时间比较长，才需要多进程打包</span></span>
<span class="line"><span style="color:#7B7F8B;">             */</span></span>
<span class="line"><span style="color:#F6F6F4;">             {</span></span>
<span class="line"><span style="color:#F6F6F4;">               loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">thread-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">               options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">                 workers</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// 进程2个</span></span>
<span class="line"><span style="color:#F6F6F4;">               }</span></span>
<span class="line"><span style="color:#F6F6F4;">             },</span></span>
<span class="line"><span style="color:#F6F6F4;">             {</span></span>
<span class="line"><span style="color:#F6F6F4;">               loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">babel-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">               options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">                 presets</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">                   [</span></span>
<span class="line"><span style="color:#F6F6F4;">                     </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@babel/preset-env</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                     {</span></span>
<span class="line"><span style="color:#F6F6F4;">                       useBuiltIns</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">usage</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                       corejs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> { version</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;"> },</span></span>
<span class="line"><span style="color:#F6F6F4;">                       targets</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">                         chrome</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">60</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                         firefox</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">50</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">                       }</span></span>
<span class="line"><span style="color:#F6F6F4;">                     }</span></span>
<span class="line"><span style="color:#F6F6F4;">                   ]</span></span>
<span class="line"><span style="color:#F6F6F4;">                 ],</span></span>
<span class="line"><span style="color:#F6F6F4;">                 cacheDirectory</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">               }</span></span>
<span class="line"><span style="color:#F6F6F4;">             }</span></span>
<span class="line"><span style="color:#F6F6F4;">           ]</span></span>
<span class="line"><span style="color:#F6F6F4;">         },</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#6F42C1;">exclude</span><span style="color:#24292E;">:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">               开启多进程打包。 </span></span>
<span class="line"><span style="color:#6A737D;">               进程启动大概为600ms，进程通信也有开销。</span></span>
<span class="line"><span style="color:#6A737D;">               只有工作消耗时间比较长，才需要多进程打包</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"><span style="color:#24292E;">             {</span></span>
<span class="line"><span style="color:#24292E;">               loader: </span><span style="color:#032F62;">&#39;thread-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">               options: {</span></span>
<span class="line"><span style="color:#24292E;">                 workers: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 进程2个</span></span>
<span class="line"><span style="color:#24292E;">               }</span></span>
<span class="line"><span style="color:#24292E;">             },</span></span>
<span class="line"><span style="color:#24292E;">             {</span></span>
<span class="line"><span style="color:#24292E;">               loader: </span><span style="color:#032F62;">&#39;babel-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">               options: {</span></span>
<span class="line"><span style="color:#24292E;">                 presets: [</span></span>
<span class="line"><span style="color:#24292E;">                   [</span></span>
<span class="line"><span style="color:#24292E;">                     </span><span style="color:#032F62;">&#39;@babel/preset-env&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                     {</span></span>
<span class="line"><span style="color:#24292E;">                       useBuiltIns: </span><span style="color:#032F62;">&#39;usage&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                       corejs: { version: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                       targets: {</span></span>
<span class="line"><span style="color:#24292E;">                         chrome: </span><span style="color:#032F62;">&#39;60&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                         firefox: </span><span style="color:#032F62;">&#39;50&#39;</span></span>
<span class="line"><span style="color:#24292E;">                       }</span></span>
<span class="line"><span style="color:#24292E;">                     }</span></span>
<span class="line"><span style="color:#24292E;">                   ]</span></span>
<span class="line"><span style="color:#24292E;">                 ],</span></span>
<span class="line"><span style="color:#24292E;">                 cacheDirectory: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">               }</span></span>
<span class="line"><span style="color:#24292E;">             }</span></span>
<span class="line"><span style="color:#24292E;">           ]</span></span>
<span class="line"><span style="color:#24292E;">         },</span></span>
<span class="line"></span></code></pre></div><blockquote><p>排除外部引用资源被打包，（jQuery)</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">externals: {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 拒绝jQuery被打包进来</span></span>
<span class="line"><span style="color:#F6F6F4;">    jquery: </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">jQuery</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">externals</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 拒绝jQuery被打包进来</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">jquery</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;jQuery&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span></code></pre></div><blockquote><p>使用 dll 技术，对某些库（第三方库：jquery、react、vue…）进行单独打包</p><p>当你运行 webpack 时，默认查找 webpack.config.js 配置文件</p><p>需求：需要运行 webpack.dll.js 文件</p><p>–&gt; webpack --config webpack.dll.js</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">const webpack = require(&#39;webpack&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">module.exports = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  entry: {</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 最终打包生成的[name] --&gt; jquery</span></span>
<span class="line"><span style="color:#f6f6f4;">    // [&#39;jquery&#39;] --&gt; 要打包的库是jquery</span></span>
<span class="line"><span style="color:#f6f6f4;">    jquery: [&#39;jquery&#39;],</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  output: {</span></span>
<span class="line"><span style="color:#f6f6f4;">    filename: &#39;[name].js&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    path: resolve(__dirname, &#39;dll&#39;),</span></span>
<span class="line"><span style="color:#f6f6f4;">    library: &#39;[name]_[hash]&#39; // 打包的库里面向外暴露出去的内容叫什么名字</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  plugins: [</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 打包生成一个 manifest.json --&gt; 提供和jquery映射</span></span>
<span class="line"><span style="color:#f6f6f4;">    new webpack.DllPlugin({</span></span>
<span class="line"><span style="color:#f6f6f4;">      name: &#39;[name]_[hash]&#39;, // 映射库的暴露的内容名称</span></span>
<span class="line"><span style="color:#f6f6f4;">      path: resolve(__dirname, &#39;dll/manifest.json&#39;) // 输出文件路径</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">  ],</span></span>
<span class="line"><span style="color:#f6f6f4;">  mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const webpack = require(&#39;webpack&#39;);</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  entry: {</span></span>
<span class="line"><span style="color:#24292e;">    // 最终打包生成的[name] --&gt; jquery</span></span>
<span class="line"><span style="color:#24292e;">    // [&#39;jquery&#39;] --&gt; 要打包的库是jquery</span></span>
<span class="line"><span style="color:#24292e;">    jquery: [&#39;jquery&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  output: {</span></span>
<span class="line"><span style="color:#24292e;">    filename: &#39;[name].js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    path: resolve(__dirname, &#39;dll&#39;),</span></span>
<span class="line"><span style="color:#24292e;">    library: &#39;[name]_[hash]&#39; // 打包的库里面向外暴露出去的内容叫什么名字</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [</span></span>
<span class="line"><span style="color:#24292e;">    // 打包生成一个 manifest.json --&gt; 提供和jquery映射</span></span>
<span class="line"><span style="color:#24292e;">    new webpack.DllPlugin({</span></span>
<span class="line"><span style="color:#24292e;">      name: &#39;[name]_[hash]&#39;, // 映射库的暴露的内容名称</span></span>
<span class="line"><span style="color:#24292e;">      path: resolve(__dirname, &#39;dll/manifest.json&#39;) // 输出文件路径</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">  mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div><ul><li>hash</li><li>chunkhash</li><li>contenthash</li></ul><blockquote><p>每次 wepack 构建时会生成一个唯一的 hash 值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">   问题: 因为js和css同时使用一个hash值。</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">   问题: 因为js和css同时使用一个hash值。</span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div><p>如果重新打包，会导致所有缓存失效。（可能我却只改动一个文件）</p></blockquote><blockquote><p>根据 chunk 生成的 hash 值。如果打包来源于同一个 chunk，那么 hash 值就一样</p><p>问题: js 和 css 的 hash 值还是一样的</p><p>因为 css 是在 js 中被引入的，所以同属于一个 chunk</p></blockquote><blockquote><p>根据文件的内容生成 hash 值。不同文件 hash 值一定不一样</p><p>–&gt; 让代码上线运行缓存更好使用</p></blockquote><h3 id="生产环境优化配置-1" tabindex="-1">生产环境优化配置 <a class="header-anchor" href="#生产环境优化配置-1" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { resolve } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">path</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> MiniCssExtractPlugin </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">mini-css-extract-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> OptimizeCssAssetsWebpackPlugin </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">optimize-css-assets-webpack-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> HtmlWebpackPlugin </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">html-webpack-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> webpack </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">webpack</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> AddAssetHtmlWebpackPlugin </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">add-asset-html-webpack-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#7B7F8B;">// 定义nodejs环境变量：决定使用browserslist的哪个环境</span></span>
<span class="line"><span style="color:#F6F6F4;">p<wbr>rocess.env.</span><span style="color:#BF9EEE;">NODE_ENV</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">production</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 复用loader</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> commonCssLoader </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">  MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">css-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 还需要在package.json中定义browserslist</span></span>
<span class="line"><span style="color:#F6F6F4;">    loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">postcss-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      ident</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">postcss</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">plugins</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> [</span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">postcss-preset-env</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)()]</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#97E1F1;font-style:italic;">module</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">exports</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  entry</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./src/js/index.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#7B7F8B;">//多入口：有一个入口，最终输出就有一个bundle</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#7B7F8B;">/* entry: {</span></span>
<span class="line"><span style="color:#7B7F8B;">        index: &#39;./src/js/index.js&#39;,</span></span>
<span class="line"><span style="color:#7B7F8B;">        test: &#39;./src/js/test.js&#39;</span></span>
<span class="line"><span style="color:#7B7F8B;">        },*/</span></span>
<span class="line"><span style="color:#F6F6F4;">  output</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    filename</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">js/built.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">//不指定固定文件名</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">//filename: &#39;js/[name].[contenthash:10].js&#39;,</span></span>
<span class="line"><span style="color:#F6F6F4;">    path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(__dirname, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">build</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  module</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    rules</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 在package.json中eslintConfig --&gt; airbnb</span></span>
<span class="line"><span style="color:#F6F6F4;">        test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.js</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        exclude</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">node_modules</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 优先执行</span></span>
<span class="line"><span style="color:#F6F6F4;">        enforce</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pre</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">eslint-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          fix</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 以下loader只会匹配一个</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 注意：不能有两个配置处理同一种类型文件</span></span>
<span class="line"><span style="color:#F6F6F4;">        oneOf</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">          {</span></span>
<span class="line"><span style="color:#F6F6F4;">            test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.css</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            use</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">commonCssLoader]</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">          {</span></span>
<span class="line"><span style="color:#F6F6F4;">            test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.less</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            use</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">commonCssLoader, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">less-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">            正常来讲，一个文件只能被一个loader处理。</span></span>
<span class="line"><span style="color:#7B7F8B;">            当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：</span></span>
<span class="line"><span style="color:#7B7F8B;">              先执行eslint 在执行babel</span></span>
<span class="line"><span style="color:#7B7F8B;">          */</span></span>
<span class="line"><span style="color:#F6F6F4;">          {</span></span>
<span class="line"><span style="color:#F6F6F4;">            test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.js</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            exclude</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">node_modules</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">babel-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              presets</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">                [</span></span>
<span class="line"><span style="color:#F6F6F4;">                  </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@babel/preset-env</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                  {</span></span>
<span class="line"><span style="color:#F6F6F4;">                    useBuiltIns</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">usage</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                    corejs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {version</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">},</span></span>
<span class="line"><span style="color:#F6F6F4;">                    targets</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">                      chrome</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">60</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                      firefox</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">50</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">                    }</span></span>
<span class="line"><span style="color:#F6F6F4;">                  }</span></span>
<span class="line"><span style="color:#F6F6F4;">                ]</span></span>
<span class="line"><span style="color:#F6F6F4;">              ]，</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#7B7F8B;">// 开启babel缓存</span></span>
<span class="line"><span style="color:#F6F6F4;">              </span><span style="color:#7B7F8B;">// 第二次构建时，会读取之前的缓存</span></span>
<span class="line"><span style="color:#F6F6F4;">              cacheDirectory: </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">            }</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">          {</span></span>
<span class="line"><span style="color:#F6F6F4;">            test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.</span><span style="color:#FFB86C;">(</span><span style="color:#E7EE98;">jpg</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">png</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">gif</span><span style="color:#FFB86C;">)</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">url-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              limit</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">8</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1024</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">[hash:10].[ext]</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              outputPath</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">imgs</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              esModule</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">            }</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">          {</span></span>
<span class="line"><span style="color:#F6F6F4;">            test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.html</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">html-loader</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">          {</span></span>
<span class="line"><span style="color:#F6F6F4;">            exclude</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.</span><span style="color:#FFB86C;">(</span><span style="color:#E7EE98;">js</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">css</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">less</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">html</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">jpg</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">png</span><span style="color:#F286C4;">|</span><span style="color:#E7EE98;">gif</span><span style="color:#FFB86C;">)</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">file-loader</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              outputPath</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">media</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">            }</span></span>
<span class="line"><span style="color:#F6F6F4;">          }</span></span>
<span class="line"><span style="color:#F6F6F4;">        ]</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    ]</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  plugins</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 告诉webpack哪些库不参与打包，同时使用时的名称也得变~</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> webpack.</span><span style="color:#62E884;">DllReferencePlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">      manifest</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(__dirname, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">dll/manifest.json</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">    }),</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 将某个文件打包输出去，并在html中自动引入该资源</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">AddAssetHtmlWebpackPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">      filepath</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(__dirname, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">dll/jquery.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">    }),</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">MiniCssExtractPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">      filename</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">css/built.css</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }),</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">OptimizeCssAssetsWebpackPlugin</span><span style="color:#F6F6F4;">(),</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">HtmlWebpackPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">      template</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./src/index.html</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      minify</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        collapseWhitespace</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        removeComments</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }),</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> WorkboxWebpackPlugin.</span><span style="color:#62E884;">GenerateSW</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">/*PWA配置</span></span>
<span class="line"><span style="color:#7B7F8B;">        1. 帮助serviceworker快速启动</span></span>
<span class="line"><span style="color:#7B7F8B;">        2. 删除旧的 serviceworker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">        生成一个 serviceworker 配置文件~</span></span>
<span class="line"><span style="color:#7B7F8B;">      */</span></span>
<span class="line"><span style="color:#F6F6F4;">      clientsClaim</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      skipWaiting</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">    })</span></span>
<span class="line"><span style="color:#F6F6F4;">  ],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">    1. 可以将node_modules中代码单独打包一个chunk最终输出</span></span>
<span class="line"><span style="color:#7B7F8B;">    2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk</span></span>
<span class="line"><span style="color:#7B7F8B;">  */</span></span>
<span class="line"><span style="color:#F6F6F4;">  optimization</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    splitChunks</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      chunks</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">all</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  mode</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">production</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    externals</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 拒绝jQuery被打包进来</span></span>
<span class="line"><span style="color:#F6F6F4;">    jquery</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">jQuery</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">resolve</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MiniCssExtractPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mini-css-extract-plugin&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">OptimizeCssAssetsWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;optimize-css-assets-webpack-plugin&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;html-webpack-plugin&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">webpack</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;webpack&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">AddAssetHtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;add-asset-html-webpack-plugin&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 定义nodejs环境变量：决定使用browserslist的哪个环境</span></span>
<span class="line"><span style="color:#24292E;">p<wbr>rocess.env.</span><span style="color:#005CC5;">NODE_ENV</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;production&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 复用loader</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">commonCssLoader</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 还需要在package.json中定义browserslist</span></span>
<span class="line"><span style="color:#24292E;">    loader: </span><span style="color:#032F62;">&#39;postcss-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    options: {</span></span>
<span class="line"><span style="color:#24292E;">      ident: </span><span style="color:#032F62;">&#39;postcss&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;postcss-preset-env&#39;</span><span style="color:#24292E;">)()]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  entry: </span><span style="color:#032F62;">&#39;./src/js/index.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">//多入口：有一个入口，最终输出就有一个bundle</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">/* entry: {</span></span>
<span class="line"><span style="color:#6A737D;">        index: &#39;./src/js/index.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        test: &#39;./src/js/test.js&#39;</span></span>
<span class="line"><span style="color:#6A737D;">        },*/</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;js/built.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//不指定固定文件名</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//filename: &#39;js/[name].[contenthash:10].js&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;build&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 在package.json中eslintConfig --&gt; airbnb</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        exclude:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 优先执行</span></span>
<span class="line"><span style="color:#24292E;">        enforce: </span><span style="color:#032F62;">&#39;pre&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;eslint-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: {</span></span>
<span class="line"><span style="color:#24292E;">          fix: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 以下loader只会匹配一个</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 注意：不能有两个配置处理同一种类型文件</span></span>
<span class="line"><span style="color:#24292E;">        oneOf: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            use: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonCssLoader]</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">less</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            use: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonCssLoader, </span><span style="color:#032F62;">&#39;less-loader&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">            正常来讲，一个文件只能被一个loader处理。</span></span>
<span class="line"><span style="color:#6A737D;">            当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：</span></span>
<span class="line"><span style="color:#6A737D;">              先执行eslint 在执行babel</span></span>
<span class="line"><span style="color:#6A737D;">          */</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            exclude:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            loader: </span><span style="color:#032F62;">&#39;babel-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            options: {</span></span>
<span class="line"><span style="color:#24292E;">              presets: [</span></span>
<span class="line"><span style="color:#24292E;">                [</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&#39;@babel/preset-env&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  {</span></span>
<span class="line"><span style="color:#24292E;">                    useBuiltIns: </span><span style="color:#032F62;">&#39;usage&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    corejs: {version: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    targets: {</span></span>
<span class="line"><span style="color:#24292E;">                      chrome: </span><span style="color:#032F62;">&#39;60&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                      firefox: </span><span style="color:#032F62;">&#39;50&#39;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                  }</span></span>
<span class="line"><span style="color:#24292E;">                ]</span></span>
<span class="line"><span style="color:#24292E;">              ]，</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 开启babel缓存</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">// 第二次构建时，会读取之前的缓存</span></span>
<span class="line"><span style="color:#24292E;">              cacheDirectory: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(jpg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif)/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            loader: </span><span style="color:#032F62;">&#39;url-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            options: {</span></span>
<span class="line"><span style="color:#24292E;">              limit: </span><span style="color:#005CC5;">8</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&#39;[hash:10].[ext]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              outputPath: </span><span style="color:#032F62;">&#39;imgs&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              esModule: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">html</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            loader: </span><span style="color:#032F62;">&#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            exclude:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(js</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">less</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">html</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jpg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif)/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            loader: </span><span style="color:#032F62;">&#39;file-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            options: {</span></span>
<span class="line"><span style="color:#24292E;">              outputPath: </span><span style="color:#032F62;">&#39;media&#39;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 告诉webpack哪些库不参与打包，同时使用时的名称也得变~</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> webpack.</span><span style="color:#6F42C1;">DllReferencePlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      manifest: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;dll/manifest.json&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将某个文件打包输出去，并在html中自动引入该资源</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AddAssetHtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      filepath: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;dll/jquery.js&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MiniCssExtractPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      filename: </span><span style="color:#032F62;">&#39;css/built.css&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OptimizeCssAssetsWebpackPlugin</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      template: </span><span style="color:#032F62;">&#39;./src/index.html&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      minify: {</span></span>
<span class="line"><span style="color:#24292E;">        collapseWhitespace: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        removeComments: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> WorkboxWebpackPlugin.</span><span style="color:#6F42C1;">GenerateSW</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/*PWA配置</span></span>
<span class="line"><span style="color:#6A737D;">        1. 帮助serviceworker快速启动</span></span>
<span class="line"><span style="color:#6A737D;">        2. 删除旧的 serviceworker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        生成一个 serviceworker 配置文件~</span></span>
<span class="line"><span style="color:#6A737D;">      */</span></span>
<span class="line"><span style="color:#24292E;">      clientsClaim: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      skipWaiting: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    1. 可以将node_modules中代码单独打包一个chunk最终输出</span></span>
<span class="line"><span style="color:#6A737D;">    2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#24292E;">  optimization: {</span></span>
<span class="line"><span style="color:#24292E;">    splitChunks: {</span></span>
<span class="line"><span style="color:#24292E;">      chunks: </span><span style="color:#032F62;">&#39;all&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;production&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    externals: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 拒绝jQuery被打包进来</span></span>
<span class="line"><span style="color:#24292E;">    jquery: </span><span style="color:#032F62;">&#39;jQuery&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div>`,73),e=[o];function c(t,r,y,F,i,E){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{u as __pageData,C as default};
