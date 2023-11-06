import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.c53372a0.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Framework/Vue/Vue3补漏笔记.md","filePath":"Framework/Vue/Vue3补漏笔记.md"}'),p={name:"Framework/Vue/Vue3补漏笔记.md"},o=l(`<h2 id="inheritattrs" tabindex="-1">inheritAttrs <a class="header-anchor" href="#inheritattrs" aria-label="Permalink to &quot;inheritAttrs&quot;">​</a></h2><blockquote><p>唯一一个需要用额外的 <code>script</code> 块书写的选项</p></blockquote><div class="tip custom-block"><p class="custom-block-title">$attrs</p><p>透传 Attributes 是指由父组件传入，且没有被子组件声明为 props 或是 组件自定义事件的 attributes 和 事件处理函数。</p></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;"> </span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#FDAEB7;">Home</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">:attr</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">12345</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">:val</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">false</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">/&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#B31D28;">Home</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">:attr</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">12345</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">:val</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">false</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">/&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span></code></pre></div><h3 id="场景一" tabindex="-1">场景一： <a class="header-anchor" href="#场景一" aria-label="Permalink to &quot;场景一：&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">class</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">home</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    Home work!</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">setup</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">lang</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">ts</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">inheritAttrs</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span><span style="color:#758575DD;">//默认继承父组件属性</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">mounted</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">this.$attrs</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">$attrs</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">class</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">home</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    Home work!</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setup</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">lang</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">ts</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">inheritAttrs</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span><span style="color:#A0ADA0;">//默认继承父组件属性</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">mounted</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">this.$attrs</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">$attrs</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">	  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span></code></pre></div><p><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302192154427.png" alt="image-20230219215449385"></p><h3 id="场景二" tabindex="-1">场景二： <a class="header-anchor" href="#场景二" aria-label="Permalink to &quot;场景二：&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">class</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">home</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    Home work!</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">setup</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">lang</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">ts</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">inheritAttrs</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">fasle</span><span style="color:#666666;">,</span><span style="color:#758575DD;">//取消继承</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">mounted</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">this.$attrs</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">$attrs</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">class</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">home</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    Home work!</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setup</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">lang</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">ts</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">inheritAttrs</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">fasle</span><span style="color:#999999;">,</span><span style="color:#A0ADA0;">//取消继承</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">mounted</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">this.$attrs</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">$attrs</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">	  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span></code></pre></div><p><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302192154391.png" alt="image-20230219215459359"></p><h3 id="场景三" tabindex="-1">场景三： <a class="header-anchor" href="#场景三" aria-label="Permalink to &quot;场景三：&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">class</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">home</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    Home work!</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">setup</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">lang</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">ts</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">inheritAttrs</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">fasle</span><span style="color:#666666;">,</span><span style="color:#758575DD;">//取消继承</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">mounted</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">this.$attrs</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">$attrs</span><span style="color:#666666;">)</span><span style="color:#758575DD;">//输出被props接收以外的属性</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">props</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">val</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">class</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">home</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    Home work!</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setup</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">lang</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">ts</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">inheritAttrs</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">fasle</span><span style="color:#999999;">,</span><span style="color:#A0ADA0;">//取消继承</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">mounted</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">this.$attrs</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">$attrs</span><span style="color:#999999;">)</span><span style="color:#A0ADA0;">//输出被props接收以外的属性</span></span>
<span class="line"><span style="color:#393A34;">	  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">props</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">val</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span></code></pre></div><p><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302192155953.png" alt="image-20230219215510922"></p>`,13),t=[o];function e(c,r,y,i,D,A){return a(),n("div",null,t)}const C=s(p,[["render",e]]);export{B as __pageData,C as default};
