import{_ as s,o as a,c as n,a as e}from"./app.4d5976de.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue声明周期","slug":"vue声明周期","link":"#vue声明周期","children":[{"level":3,"title":"嵌套组件组件执行顺序","slug":"嵌套组件组件执行顺序","link":"#嵌套组件组件执行顺序","children":[]}]},{"level":2,"title":"beforeCreate 与 created 区别","slug":"beforecreate-与-created-区别","link":"#beforecreate-与-created-区别","children":[]},{"level":2,"title":"created 与 mounted 区别","slug":"created-与-mounted-区别","link":"#created-与-mounted-区别","children":[]},{"level":2,"title":"keep-alive内置缓存组件","slug":"keep-alive内置缓存组件","link":"#keep-alive内置缓存组件","children":[]},{"level":2,"title":"虚拟 DOM(VNode) 和 DOM","slug":"虚拟-dom-vnode-和-dom","link":"#虚拟-dom-vnode-和-dom","children":[]},{"level":2,"title":"Vue3.0性能提升","slug":"vue3-0性能提升","link":"#vue3-0性能提升","children":[]}],"relativePath":"Interview/Vue/Vue声明周期.md"}'),l={name:"Interview/Vue/Vue声明周期.md"},p=e(`<h2 id="vue声明周期" tabindex="-1">Vue声明周期 <a class="header-anchor" href="#vue声明周期" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//自带 8 个</span></span>
<span class="line"><span style="color:#F6F6F4;">beforeCreate</span></span>
<span class="line"><span style="color:#F6F6F4;">created</span></span>
<span class="line"><span style="color:#F6F6F4;">beforeMount</span></span>
<span class="line"><span style="color:#F6F6F4;">mounted</span></span>
<span class="line"><span style="color:#F6F6F4;">beforeUpdate</span></span>
<span class="line"><span style="color:#F6F6F4;">updated</span></span>
<span class="line"><span style="color:#F6F6F4;">beforeDestory</span></span>
<span class="line"><span style="color:#F6F6F4;">destoryed</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//自带 8 个</span></span>
<span class="line"><span style="color:#24292E;">beforeCreate</span></span>
<span class="line"><span style="color:#24292E;">created</span></span>
<span class="line"><span style="color:#24292E;">beforeMount</span></span>
<span class="line"><span style="color:#24292E;">mounted</span></span>
<span class="line"><span style="color:#24292E;">beforeUpdate</span></span>
<span class="line"><span style="color:#24292E;">updated</span></span>
<span class="line"><span style="color:#24292E;">beforeDestory</span></span>
<span class="line"><span style="color:#24292E;">destoryed</span></span>
<span class="line"></span></code></pre></div><h3 id="嵌套组件组件执行顺序" tabindex="-1">嵌套组件组件执行顺序 <a class="header-anchor" href="#嵌套组件组件执行顺序" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//父组件</span></span>
<span class="line"><span style="color:#F6F6F4;">beforeCreate</span></span>
<span class="line"><span style="color:#F6F6F4;">created</span></span>
<span class="line"><span style="color:#F6F6F4;">beforeMount</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//子组件</span></span>
<span class="line"><span style="color:#F6F6F4;">  beforeCreate</span></span>
<span class="line"><span style="color:#F6F6F4;">  created</span></span>
<span class="line"><span style="color:#F6F6F4;">  beforeMount</span></span>
<span class="line"><span style="color:#F6F6F4;">  mounted</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//孙子组件</span></span>
<span class="line"><span style="color:#F6F6F4;">      beforeCreate</span></span>
<span class="line"><span style="color:#F6F6F4;">      created</span></span>
<span class="line"><span style="color:#F6F6F4;">      beforeMount</span></span>
<span class="line"><span style="color:#F6F6F4;">      mounted</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//父组件</span></span>
<span class="line"><span style="color:#24292E;">beforeCreate</span></span>
<span class="line"><span style="color:#24292E;">created</span></span>
<span class="line"><span style="color:#24292E;">beforeMount</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//子组件</span></span>
<span class="line"><span style="color:#24292E;">  beforeCreate</span></span>
<span class="line"><span style="color:#24292E;">  created</span></span>
<span class="line"><span style="color:#24292E;">  beforeMount</span></span>
<span class="line"><span style="color:#24292E;">  mounted</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//孙子组件</span></span>
<span class="line"><span style="color:#24292E;">      beforeCreate</span></span>
<span class="line"><span style="color:#24292E;">      created</span></span>
<span class="line"><span style="color:#24292E;">      beforeMount</span></span>
<span class="line"><span style="color:#24292E;">      mounted</span></span>
<span class="line"></span></code></pre></div><h2 id="beforecreate-与-created-区别" tabindex="-1">beforeCreate 与 created 区别 <a class="header-anchor" href="#beforecreate-与-created-区别" aria-hidden="true">#</a></h2><h2 id="created-与-mounted-区别" tabindex="-1">created 与 mounted 区别 <a class="header-anchor" href="#created-与-mounted-区别" aria-hidden="true">#</a></h2><blockquote><p>请求问题：当需要子组件的请求需要比父组件<strong>先</strong>完成时，可以把父组件请求卸载<code>mounted</code>中，子组件写在<code>created</code>中。</p></blockquote><h2 id="keep-alive内置缓存组件" tabindex="-1">keep-alive内置缓存组件 <a class="header-anchor" href="#keep-alive内置缓存组件" aria-hidden="true">#</a></h2><p>额外增加两个声明周期:activated, deactivated</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//第一次执行顺序</span></span>
<span class="line"><span style="color:#F6F6F4;">  beforeCreate</span></span>
<span class="line"><span style="color:#F6F6F4;">  created</span></span>
<span class="line"><span style="color:#F6F6F4;">  beforeMount</span></span>
<span class="line"><span style="color:#F6F6F4;">  mounted</span></span>
<span class="line"><span style="color:#F6F6F4;">  activated</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//第二次：多次进入详情页，在activated钩子中，判断 id 相同则不需要发请求</span></span>
<span class="line"><span style="color:#F6F6F4;">  activated</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//第一次执行顺序</span></span>
<span class="line"><span style="color:#24292E;">  beforeCreate</span></span>
<span class="line"><span style="color:#24292E;">  created</span></span>
<span class="line"><span style="color:#24292E;">  beforeMount</span></span>
<span class="line"><span style="color:#24292E;">  mounted</span></span>
<span class="line"><span style="color:#24292E;">  activated</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//第二次：多次进入详情页，在activated钩子中，判断 id 相同则不需要发请求</span></span>
<span class="line"><span style="color:#24292E;">  activated</span></span>
<span class="line"></span></code></pre></div><h2 id="虚拟-dom-vnode-和-dom" tabindex="-1">虚拟 DOM(VNode) 和 DOM <a class="header-anchor" href="#虚拟-dom-vnode-和-dom" aria-hidden="true">#</a></h2><ol><li>VNode是一个纯 JavaScript 对象，用来描述真实 DOM 中的一个节点，属性比真实 dom 精简许多。</li></ol><p>虚拟 DOM 的优点包括：</p><p>性能优化：由于真实 DOM 操作非常耗费性能，而虚拟 DOM 可以在内存中进行操作，然后再一次性渲染到真实 DOM 上，从而减少了不必要的 DOM 操作，提高了性能。</p><p>跨平台：虚拟 DOM 可以轻松地支持多种平台，比如浏览器、移动端、服务器端等。</p><p>组件化开发：Vue 的组件是以 VNode 为基础的，通过对 VNode 的操作，可以方便地实现组件的开发。</p><h2 id="vue3-0性能提升" tabindex="-1">Vue3.0性能提升 <a class="header-anchor" href="#vue3-0性能提升" aria-hidden="true">#</a></h2><ol><li>响应式系统不需要深度遍历就可以对整个对象监听</li><li>在diff算法中增加了静态标记</li><li>源码体积减小，所有 API 都可以按需引入</li></ol>`,18),o=[p];function c(t,r,i,d,F,u){return a(),n("div",null,o)}const v=s(l,[["render",c]]);export{h as __pageData,v as default};
