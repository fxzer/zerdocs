import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.d2d9e35b.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JavaScript/原型与原型链.md","filePath":"Interview/JavaScript/原型与原型链.md"}'),p={name:"Interview/JavaScript/原型与原型链.md"},o=l(`<h2 id="new-对象的执行过程" tabindex="-1">new 对象的执行过程 <a class="header-anchor" href="#new-对象的执行过程" aria-label="Permalink to &quot;new 对象的执行过程&quot;">​</a></h2><ol><li><p>创建一个新对象：new操作符会创建一个新对象，该对象会继承自构造函数的原型对象。</p></li><li><p>设置对象的原型：新对象的<code>__proto__</code>属性会被设置为构造函数的原型对象<code>prototype</code>。</p></li><li><p>执行构造函数：构造函数会被执行，<code>this</code> 指向新创建的对象。在构造函数内部，可以通过<code>this</code>关键字来添加属性和方法到新对象中。</p></li><li><p>对构造函数有返回值的处理判断：</p><ol><li>如果构造函数没有显式地返回对象，返回新创建的对象；(基本类型忽略)</li><li>如果构造函数返回了一个对象，则返回该对象。(引用类型返回)</li></ol></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Person</span><span style="color:#666666;">(</span><span style="color:#BD976A;">name</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">age</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">name</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">age</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">age</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">person</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Person</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">Alice</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">18</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">person</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// { name: &#39;Alice&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#758575DD;">// new Person(&#39;Alice&#39;, 18)会创建一个新的对象，并执行Person函数，将this关键字指向新对象。最后返回新对象，赋值给变量person。</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Person</span><span style="color:#999999;">(</span><span style="color:#B07D48;">name</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">age</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">age</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">age</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">person</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Person</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">Alice</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">18</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">person</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// { name: &#39;Alice&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#A0ADA0;">// new Person(&#39;Alice&#39;, 18)会创建一个新的对象，并执行Person函数，将this关键字指向新对象。最后返回新对象，赋值给变量person。</span></span></code></pre></div><h2 id="原型和原型链" tabindex="-1">原型和原型链 <a class="header-anchor" href="#原型和原型链" aria-label="Permalink to &quot;原型和原型链&quot;">​</a></h2><p>作用：解决构造函数浪费内存问题，实现对象属性和方法的共享。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Star</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">star1</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Star</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#BD976A;">star1</span><span style="color:#666666;">.</span><span style="color:#B8A965;">__proto__</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">===</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">star1</span><span style="color:#666666;">.</span><span style="color:#B8A965;">constructor</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span></span>
<span class="line"><span style="color:#BD976A;">Star</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">===</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">Start</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#B8A965;">constructor</span></span>
<span class="line"><span style="color:#B8A965;">Object</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#B8A965;">__proto__</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// null</span></span>
<span class="line"><span style="color:#BD976A;">Object</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">instanceof</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">Function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// Object顶级对象是 顶级构造器 Fcuntion 的实例</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Star</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">star1</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Star</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#B07D48;">star1</span><span style="color:#999999;">.</span><span style="color:#998418;">__proto__</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">===</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">star1</span><span style="color:#999999;">.</span><span style="color:#998418;">constructor</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span></span>
<span class="line"><span style="color:#B07D48;">Star</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">===</span><span style="color:#393A34;"> </span><span style="color:#998418;">Start</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#998418;">constructor</span></span>
<span class="line"><span style="color:#998418;">Object</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#998418;">__proto__</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// null</span></span>
<span class="line"><span style="color:#B07D48;">Object</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">instanceof</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Function</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// Object顶级对象是 顶级构造器 Fcuntion 的实例</span></span></code></pre></div><p><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/2023-03-03-14-31-08.png" alt="2023-03-03-14-31-08"><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/2023-03-03-14-55-44.png" alt="2023-03-03-14-55-44"><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/2023-03-03-16-50-56.png" alt="2023-03-03-16-50-56"></p><h3 id="函数的隐式原型对象" tabindex="-1">函数的隐式原型对象 <a class="header-anchor" href="#函数的隐式原型对象" aria-label="Permalink to &quot;函数的隐式原型对象&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">test</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{}</span></span>
<span class="line"><span style="color:#BD976A;">test</span><span style="color:#666666;">.</span><span style="color:#B8A965;">__proto__</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">==</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">Function</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// ture</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">test</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{}</span></span>
<span class="line"><span style="color:#B07D48;">test</span><span style="color:#999999;">.</span><span style="color:#998418;">__proto__</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">==</span><span style="color:#393A34;"> </span><span style="color:#998418;">Function</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// ture</span></span></code></pre></div><p>本身 ---&gt; 构造函数.prototype(本身<code>.__proto__</code>) ---&gt; 构造函数原型对象的原型<code>.prototype.__proto__</code>...---&gt;Object.prototype ---&gt; null</p><h2 id="js继承有哪些方式" tabindex="-1">JS继承有哪些方式 <a class="header-anchor" href="#js继承有哪些方式" aria-label="Permalink to &quot;JS继承有哪些方式&quot;">​</a></h2><h3 id="方式一-es6" tabindex="-1">方式一：ES6 <a class="header-anchor" href="#方式一-es6" aria-label="Permalink to &quot;方式一：ES6&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">class</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">Parent</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">constructor</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">age</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">18</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">class</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">Child</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Parent</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">constructor</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">super</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">张三</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">o1</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Child</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">o1</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">o1</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">o1</span><span style="color:#666666;">.</span><span style="color:#BD976A;">age</span><span style="color:#666666;">)</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">class</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Parent</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">constructor</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">age</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">18</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">class</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Child</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Parent</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">constructor</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">super</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">张三</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">o1</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Child</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">o1</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">o1</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">o1</span><span style="color:#999999;">.</span><span style="color:#B07D48;">age</span><span style="color:#999999;">)</span></span></code></pre></div><h3 id="方式二-原型链继承" tabindex="-1">方式二：原型链继承 <a class="header-anchor" href="#方式二-原型链继承" aria-label="Permalink to &quot;方式二：原型链继承&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Parent</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">age</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">20</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Child</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">张三</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#758575DD;">// 子构造函数原型对象指向父构造函数实例</span></span>
<span class="line"><span style="color:#B8A965;">Child</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Parent</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">o2</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Child</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">o2</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">o2</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">o2</span><span style="color:#666666;">.</span><span style="color:#BD976A;">age</span><span style="color:#666666;">)</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Parent</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">age</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">20</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Child</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">张三</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#A0ADA0;">// 子构造函数原型对象指向父构造函数实例</span></span>
<span class="line"><span style="color:#998418;">Child</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Parent</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">o2</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Child</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">o2</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">o2</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">o2</span><span style="color:#999999;">.</span><span style="color:#B07D48;">age</span><span style="color:#999999;">)</span></span></code></pre></div><h3 id="方式三-借用构造函数继承" tabindex="-1">方式三：借用构造函数继承 <a class="header-anchor" href="#方式三-借用构造函数继承" aria-label="Permalink to &quot;方式三：借用构造函数继承&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">function Parent(){</span></span>
<span class="line"><span style="color:#dbd7caee;">	this.age = 22;</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;">function Child(){</span></span>
<span class="line"><span style="color:#dbd7caee;">	this.name = &#39;张三&#39;</span></span>
<span class="line"><span style="color:#dbd7caee;">	Parent.call(this);</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;">let o3 = new Child();</span></span>
<span class="line"><span style="color:#dbd7caee;">console.log( o3,o3.name,o3.age );</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">function Parent(){</span></span>
<span class="line"><span style="color:#393a34;">	this.age = 22;</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;">function Child(){</span></span>
<span class="line"><span style="color:#393a34;">	this.name = &#39;张三&#39;</span></span>
<span class="line"><span style="color:#393a34;">	Parent.call(this);</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;">let o3 = new Child();</span></span>
<span class="line"><span style="color:#393a34;">console.log( o3,o3.name,o3.age );</span></span></code></pre></div>`,17),e=[o];function c(t,r,y,i,A,D){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{E as __pageData,d as default};
