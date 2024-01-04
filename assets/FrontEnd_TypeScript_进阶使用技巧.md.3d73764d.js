import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.d2d9e35b.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/TypeScript/进阶使用技巧.md","filePath":"FrontEnd/TypeScript/进阶使用技巧.md"}'),o={name:"FrontEnd/TypeScript/进阶使用技巧.md"},l=p(`<h2 id="松散类型自动推推导" tabindex="-1">松散类型自动推推导 <a class="header-anchor" href="#松散类型自动推推导" aria-label="Permalink to &quot;松散类型自动推推导&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">//1.</span></span>
<span class="line"><span style="color:#CB7676;">type</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">Size</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">sm</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">xs</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">IconProps</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">size</span><span style="color:#666666;">:</span><span style="color:#5DA994;">Size</span><span style="color:#666666;"> </span><span style="color:#758575DD;">// size 可以推导为 &quot;sm&quot; | &quot;xs&quot;</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// 2.</span></span>
<span class="line"><span style="color:#CB7676;">type</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">Size</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">sm</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">xs</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">IconProps</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">size</span><span style="color:#666666;">:</span><span style="color:#5DA994;">Size</span><span style="color:#666666;"> </span><span style="color:#758575DD;">// size 可以推导为 &quot;sm&quot; | &quot;xs&quot; | string ,但模版中使用失去类型提示</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">//3.</span></span>
<span class="line"><span style="color:#CB7676;">type</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">Size</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">sm</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">xs</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">Omit</span><span style="color:#666666;">&lt;</span><span style="color:#5DA994;">string</span><span style="color:#666666;">,</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">sm</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">xs</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">IconProps</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">size</span><span style="color:#666666;">:</span><span style="color:#5DA994;">Size</span><span style="color:#666666;"> </span><span style="color:#758575DD;">// size 可以推导为 &quot;sm&quot; | &quot;xs&quot; | string ,保留模版类型提示</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">//4.封装为 type</span></span>
<span class="line"><span style="color:#CB7676;">type</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">Size</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">LooseAutoComplete</span><span style="color:#666666;">&lt;</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">sm</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">xs</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#CB7676;">type</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">LooseAutoComplete</span><span style="color:#666666;">&lt;</span><span style="color:#5DA994;">T</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">string</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">T</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">Omit</span><span style="color:#666666;">&lt;</span><span style="color:#5DA994;">string</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">T</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">IconProps</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">size</span><span style="color:#666666;">:</span><span style="color:#5DA994;">Size</span><span style="color:#666666;"> </span><span style="color:#758575DD;">// size 可以推导为 &quot;sm&quot; | &quot;xs&quot; | string ,保留模版类型提示</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">//1.</span></span>
<span class="line"><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Size</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">sm</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">xs</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">IconProps</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">size</span><span style="color:#999999;">:</span><span style="color:#2E8F82;">Size</span><span style="color:#999999;"> </span><span style="color:#A0ADA0;">// size 可以推导为 &quot;sm&quot; | &quot;xs&quot;</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 2.</span></span>
<span class="line"><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Size</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">sm</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">xs</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">IconProps</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">size</span><span style="color:#999999;">:</span><span style="color:#2E8F82;">Size</span><span style="color:#999999;"> </span><span style="color:#A0ADA0;">// size 可以推导为 &quot;sm&quot; | &quot;xs&quot; | string ,但模版中使用失去类型提示</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">//3.</span></span>
<span class="line"><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Size</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">sm</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">xs</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Omit</span><span style="color:#999999;">&lt;</span><span style="color:#2E8F82;">string</span><span style="color:#999999;">,</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">sm</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">xs</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">IconProps</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">size</span><span style="color:#999999;">:</span><span style="color:#2E8F82;">Size</span><span style="color:#999999;"> </span><span style="color:#A0ADA0;">// size 可以推导为 &quot;sm&quot; | &quot;xs&quot; | string ,保留模版类型提示</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">//4.封装为 type</span></span>
<span class="line"><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Size</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">LooseAutoComplete</span><span style="color:#999999;">&lt;</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">sm</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">xs</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">LooseAutoComplete</span><span style="color:#999999;">&lt;</span><span style="color:#2E8F82;">T</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">string</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">T</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Omit</span><span style="color:#999999;">&lt;</span><span style="color:#2E8F82;">string</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">T</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">IconProps</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">size</span><span style="color:#999999;">:</span><span style="color:#2E8F82;">Size</span><span style="color:#999999;"> </span><span style="color:#A0ADA0;">// size 可以推导为 &quot;sm&quot; | &quot;xs&quot; | string ,保留模版类型提示</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div>`,2),t=[l];function e(c,r,y,A,D,i){return n(),a("div",null,t)}const C=s(o,[["render",e]]);export{B as __pageData,C as default};
