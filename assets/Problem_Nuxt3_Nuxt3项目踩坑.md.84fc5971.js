import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.d2d9e35b.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/Nuxt3/Nuxt3项目踩坑.md","filePath":"Problem/Nuxt3/Nuxt3项目踩坑.md"}'),p={name:"Problem/Nuxt3/Nuxt3项目踩坑.md"},o=l(`<h2 id="uncaught-typeerror-cannot-read-properties-of-undefined-reading-prototype" tabindex="-1">Uncaught TypeError: Cannot read properties of undefined (reading &#39;prototype&#39;) <a class="header-anchor" href="#uncaught-typeerror-cannot-read-properties-of-undefined-reading-prototype" aria-label="Permalink to &quot;Uncaught TypeError: Cannot read properties of undefined (reading &#39;prototype&#39;)&quot;">​</a></h2><p><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/interview/2023-05-19-14-49-43.png" alt="2023-05-19-14-49-43"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="color:#80A665;">shortcuts</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[[</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">f-s-c</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">flex justify-start items-center</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">]]</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// uno.config.ts</span></span>
<span class="line"><span style="color:#59873A;">shortcuts</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[[</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">f-s-c</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">flex justify-start items-center</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">]]</span></span></code></pre></div><ol><li>写在类名上不生效</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">&lt;!--f-s-c 直接写在类名上不生效--&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">class</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">hidden lg:f-c-c</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">Test</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">&lt;!--f-s-c 直接写在类名上不生效--&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">class</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">hidden lg:f-c-c</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">Test</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span></code></pre></div><ol start="2"><li>写在 CSS 上报错</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">class</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">nav</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">Test</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">class</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">nav</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">Test</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">f-s-c</span><span style="color:#DBD7CAEE;"> 报错；The \`xl:</span><span style="color:#4D9375;">f-c-c</span><span style="color:#DBD7CAEE;">\` class does not exist. If \`xl:</span><span style="color:#4D9375;">f-c-c</span><span style="color:#DBD7CAEE;">\` is </span><span style="color:#4D9375;">a</span><span style="color:#DBD7CAEE;"> custom class</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> make sure it is defined within </span><span style="color:#4D9375;">a</span><span style="color:#DBD7CAEE;"> \`@layer\` directive.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">.</span><span style="color:#BD976A;">nav</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  @</span><span style="color:#B8A965;">apply</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">hidden</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">lg</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;">f-c-c</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">f-s-c</span><span style="color:#393A34;"> 报错；The \`xl:</span><span style="color:#1E754F;">f-c-c</span><span style="color:#393A34;">\` class does not exist. If \`xl:</span><span style="color:#1E754F;">f-c-c</span><span style="color:#393A34;">\` is </span><span style="color:#1E754F;">a</span><span style="color:#393A34;"> custom class</span><span style="color:#999999;">,</span><span style="color:#393A34;"> make sure it is defined within </span><span style="color:#1E754F;">a</span><span style="color:#393A34;"> \`@layer\` directive.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">.</span><span style="color:#B07D48;">nav</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  @</span><span style="color:#998418;">apply</span><span style="color:#393A34;"> </span><span style="color:#998418;">hidden</span><span style="color:#393A34;"> </span><span style="color:#998418;">lg</span><span style="color:#999999;">:</span><span style="color:#393A34;">f-c-c</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><p>解决方法：断点后不写自定义的</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">class</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">hidden lg:flex justify-center items-center</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">Test</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">class</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">hidden lg:flex justify-center items-center</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">Test</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span></code></pre></div><p>总结：自定义的类名快捷键不能写在变体后面</p><h3 id="hidden-与自定义变体不能一起用" tabindex="-1">hidden 与自定义变体不能一起用 <a class="header-anchor" href="#hidden-与自定义变体不能一起用" aria-label="Permalink to &quot;hidden 与自定义变体不能一起用&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="color:#80A665;">shortcuts</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">f-s-c</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">flex justify-start items-center</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">],</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">f-c-c</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">flex justify-center items-center</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">],</span></span>
<span class="line"><span style="color:#666666;">]</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// uno.config.ts</span></span>
<span class="line"><span style="color:#59873A;">shortcuts</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">f-s-c</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">flex justify-start items-center</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">f-c-c</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">flex justify-center items-center</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#999999;">]</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">class</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">hidden xl:f-c-c</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">TEST</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">class</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">hidden xl:f-c-c</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">TEST</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span></code></pre></div><p>可以这样用</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">class</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">f-s-c xl:f-c-c</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">TEST</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">class</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">f-s-c xl:f-c-c</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">TEST</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span></code></pre></div><h2 id="项目一直报-element-相关错误" tabindex="-1">项目一直报 Element 相关错误 <a class="header-anchor" href="#项目一直报-element-相关错误" aria-label="Permalink to &quot;项目一直报 Element 相关错误&quot;">​</a></h2><p><code>element-ui.js:1 Uncaught TypeError: Cannot read properties of undefined (reading &#39;prototype&#39;)</code><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/interview/2023-05-21-20-26-38.png" alt="2023-05-21-20-26-38"> 换浏览器后没报错，定位到可能是浏览器插件的原因，果然排除法找到是：YouTube 视频摘要 ChatGPT 生成-快速笔记 (中文版) 的问题！</p><h2 id="跨域问题" tabindex="-1">跨域问题 <a class="header-anchor" href="#跨域问题" aria-label="Permalink to &quot;跨域问题&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineNuxtConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;">/* ... */</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">nitro</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">devProxy</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">/account/api</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">target</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">http://192.168.211.63/account/api</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#758575DD;">// target: &#39;http://192.168.211.63&#39;, 【不生效】 不同于 vite，这样配置到达 nginx 是 &#39;/&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">ws</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">changeOrigin</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineNuxtConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">/* ... */</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">nitro</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">devProxy</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">/account/api</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">target</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">http://192.168.211.63/account/api</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#A0ADA0;">// target: &#39;http://192.168.211.63&#39;, 【不生效】 不同于 vite，这样配置到达 nginx 是 &#39;/&#39;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">ws</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">changeOrigin</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// 业务请求</span></span>
<span class="line"><span style="color:#CB7676;">async</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">getImgCode</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">data</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">useFetch</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">/account/api/getImageCode</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">method</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">POST</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">body</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">})</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">data</span><span style="color:#666666;">.</span><span style="color:#BD976A;">data</span><span style="color:#666666;">.</span><span style="color:#BD976A;">value</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// 业务请求</span></span>
<span class="line"><span style="color:#AB5959;">async</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">getImgCode</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">data</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">await</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useFetch</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">/account/api/getImageCode</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">method</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">POST</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">body</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">})</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">data</span><span style="color:#999999;">.</span><span style="color:#B07D48;">data</span><span style="color:#999999;">.</span><span style="color:#B07D48;">value</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><h2 id="nuxt-simple-sitemap插件使用问题" tabindex="-1">nuxt-simple-sitemap插件使用问题 <a class="header-anchor" href="#nuxt-simple-sitemap插件使用问题" aria-label="Permalink to &quot;nuxt-simple-sitemap插件使用问题&quot;">​</a></h2><p>打包时报错：解析到错误 URL</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">nitro</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">prerender</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#80A665;">crawlLinks</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#80A665;">routes</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">/</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">],</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">//去掉： ,&#39;sitemap.xml&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">nitro</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">prerender</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#59873A;">crawlLinks</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#59873A;">routes</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">/</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">],</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//去掉： ,&#39;sitemap.xml&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><blockquote><p>测试环境能访问<code>sitemap.xml</code> 页面 但是线上环境访问不到，报相关错误：<code>/__sitemap__/routes.json</code> ，需要在 nginx 配置 IP 和主机名的传送。</p></blockquote><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># nginx.conf</span></span>
<span class="line"><span style="color:#DBD7CAEE;">   </span><span style="color:#80A665;">proxy_set_header</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">X-Real-IP</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">$remote_addr</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">   </span><span style="color:#80A665;">proxy_set_header</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">Host</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">$host</span><span style="color:#666666;">;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;"># nginx.conf</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#59873A;">proxy_set_header</span><span style="color:#393A34;"> </span><span style="color:#B56959;">X-Real-IP</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">$remote_addr</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#59873A;">proxy_set_header</span><span style="color:#393A34;"> </span><span style="color:#B56959;">Host</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">$host</span><span style="color:#999999;">;</span></span></code></pre></div>`,26),e=[o];function t(c,r,y,i,d,A){return a(),n("div",null,e)}const B=s(p,[["render",t]]);export{E as __pageData,B as default};
