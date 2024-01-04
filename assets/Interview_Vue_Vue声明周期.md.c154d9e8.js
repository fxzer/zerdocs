import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.d2d9e35b.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/Vue/Vue声明周期.md","filePath":"Interview/Vue/Vue声明周期.md"}'),l={name:"Interview/Vue/Vue声明周期.md"},p=e(`<h2 id="vue声明周期" tabindex="-1">Vue声明周期 <a class="header-anchor" href="#vue声明周期" aria-label="Permalink to &quot;Vue声明周期&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// 自带 8 个</span></span>
<span class="line"><span style="color:#BD976A;">beforeCreate</span></span>
<span class="line"><span style="color:#BD976A;">created</span></span>
<span class="line"><span style="color:#BD976A;">beforeMount</span></span>
<span class="line"><span style="color:#BD976A;">mounted</span></span>
<span class="line"><span style="color:#BD976A;">beforeUpdate</span></span>
<span class="line"><span style="color:#BD976A;">updated</span></span>
<span class="line"><span style="color:#BD976A;">beforeDestory</span></span>
<span class="line"><span style="color:#BD976A;">destoryed</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// 自带 8 个</span></span>
<span class="line"><span style="color:#B07D48;">beforeCreate</span></span>
<span class="line"><span style="color:#B07D48;">created</span></span>
<span class="line"><span style="color:#B07D48;">beforeMount</span></span>
<span class="line"><span style="color:#B07D48;">mounted</span></span>
<span class="line"><span style="color:#B07D48;">beforeUpdate</span></span>
<span class="line"><span style="color:#B07D48;">updated</span></span>
<span class="line"><span style="color:#B07D48;">beforeDestory</span></span>
<span class="line"><span style="color:#B07D48;">destoryed</span></span></code></pre></div><h3 id="嵌套组件组件执行顺序" tabindex="-1">嵌套组件组件执行顺序 <a class="header-anchor" href="#嵌套组件组件执行顺序" aria-label="Permalink to &quot;嵌套组件组件执行顺序&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// 父组件</span></span>
<span class="line"><span style="color:#BD976A;">beforeCreate</span></span>
<span class="line"><span style="color:#BD976A;">created</span></span>
<span class="line"><span style="color:#BD976A;">beforeMount</span></span>
<span class="line"><span style="color:#758575DD;">// 子组件</span></span>
<span class="line"><span style="color:#BD976A;">beforeCreate</span></span>
<span class="line"><span style="color:#BD976A;">created</span></span>
<span class="line"><span style="color:#BD976A;">beforeMount</span></span>
<span class="line"><span style="color:#BD976A;">mounted</span></span>
<span class="line"><span style="color:#758575DD;">// 孙子组件</span></span>
<span class="line"><span style="color:#BD976A;">beforeCreate</span></span>
<span class="line"><span style="color:#BD976A;">created</span></span>
<span class="line"><span style="color:#BD976A;">beforeMount</span></span>
<span class="line"><span style="color:#BD976A;">mounted</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// 父组件</span></span>
<span class="line"><span style="color:#B07D48;">beforeCreate</span></span>
<span class="line"><span style="color:#B07D48;">created</span></span>
<span class="line"><span style="color:#B07D48;">beforeMount</span></span>
<span class="line"><span style="color:#A0ADA0;">// 子组件</span></span>
<span class="line"><span style="color:#B07D48;">beforeCreate</span></span>
<span class="line"><span style="color:#B07D48;">created</span></span>
<span class="line"><span style="color:#B07D48;">beforeMount</span></span>
<span class="line"><span style="color:#B07D48;">mounted</span></span>
<span class="line"><span style="color:#A0ADA0;">// 孙子组件</span></span>
<span class="line"><span style="color:#B07D48;">beforeCreate</span></span>
<span class="line"><span style="color:#B07D48;">created</span></span>
<span class="line"><span style="color:#B07D48;">beforeMount</span></span>
<span class="line"><span style="color:#B07D48;">mounted</span></span></code></pre></div><h2 id="beforecreate-与-created-区别" tabindex="-1">beforeCreate 与 created 区别 <a class="header-anchor" href="#beforecreate-与-created-区别" aria-label="Permalink to &quot;beforeCreate 与 created 区别&quot;">​</a></h2><h2 id="created-与-mounted-区别" tabindex="-1">created 与 mounted 区别 <a class="header-anchor" href="#created-与-mounted-区别" aria-label="Permalink to &quot;created 与 mounted 区别&quot;">​</a></h2><blockquote><p>请求问题：当需要子组件的请求需要比父组件<strong>先</strong>完成时，可以把父组件请求卸载<code>mounted</code>中，子组件写在<code>created</code>中。</p></blockquote><h2 id="keep-alive内置缓存组件" tabindex="-1">keep-alive内置缓存组件 <a class="header-anchor" href="#keep-alive内置缓存组件" aria-label="Permalink to &quot;keep-alive内置缓存组件&quot;">​</a></h2><p>额外增加两个声明周期:activated, deactivated</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// 第一次执行顺序</span></span>
<span class="line"><span style="color:#BD976A;">beforeCreate</span></span>
<span class="line"><span style="color:#BD976A;">created</span></span>
<span class="line"><span style="color:#BD976A;">beforeMount</span></span>
<span class="line"><span style="color:#BD976A;">mounted</span></span>
<span class="line"><span style="color:#BD976A;">activated</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// 第二次：多次进入详情页，在activated钩子中，判断 id 相同则不需要发请求</span></span>
<span class="line"><span style="color:#BD976A;">activated</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// 第一次执行顺序</span></span>
<span class="line"><span style="color:#B07D48;">beforeCreate</span></span>
<span class="line"><span style="color:#B07D48;">created</span></span>
<span class="line"><span style="color:#B07D48;">beforeMount</span></span>
<span class="line"><span style="color:#B07D48;">mounted</span></span>
<span class="line"><span style="color:#B07D48;">activated</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 第二次：多次进入详情页，在activated钩子中，判断 id 相同则不需要发请求</span></span>
<span class="line"><span style="color:#B07D48;">activated</span></span></code></pre></div><h2 id="虚拟-dom-vnode-和-dom" tabindex="-1">虚拟 DOM(VNode) 和 DOM <a class="header-anchor" href="#虚拟-dom-vnode-和-dom" aria-label="Permalink to &quot;虚拟 DOM(VNode) 和 DOM&quot;">​</a></h2><ol><li>VNode是一个纯 JavaScript 对象，用来描述真实 DOM 中的一个节点，属性比真实 dom 精简许多。</li></ol><p>虚拟 DOM 的优点包括：</p><p>性能优化：由于真实 DOM 操作非常耗费性能，而虚拟 DOM 可以在内存中进行操作，然后再一次性渲染到真实 DOM 上，从而减少了不必要的 DOM 操作，提高了性能。</p><p>跨平台：虚拟 DOM 可以轻松地支持多种平台，比如浏览器、移动端、服务器端等。</p><p>组件化开发：Vue 的组件是以 VNode 为基础的，通过对 VNode 的操作，可以方便地实现组件的开发。</p><h2 id="vue3-0性能提升" tabindex="-1">Vue3.0性能提升 <a class="header-anchor" href="#vue3-0性能提升" aria-label="Permalink to &quot;Vue3.0性能提升&quot;">​</a></h2><ol><li>响应式系统不需要深度遍历就可以对整个对象监听</li><li>在diff算法中增加了静态标记</li><li>源码体积减小，所有 API 都可以按需引入</li></ol>`,18),o=[p];function t(c,r,i,d,D,y){return a(),n("div",null,o)}const B=s(l,[["render",t]]);export{h as __pageData,B as default};
