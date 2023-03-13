import{_ as s,o as n,c as a,a as l}from"./app.4d5976de.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础语法","slug":"基础语法","link":"#基础语法","children":[{"level":3,"title":"一、基础类型","slug":"一、基础类型","link":"#一、基础类型","children":[]},{"level":3,"title":"二、类型声名","slug":"二、类型声名","link":"#二、类型声名","children":[]},{"level":3,"title":"三、as const 断言","slug":"三、as-const-断言","link":"#三、as-const-断言","children":[]}]},{"level":2,"title":"面对对象","slug":"面对对象","link":"#面对对象","children":[{"level":3,"title":"一、类","slug":"一、类","link":"#一、类","children":[]},{"level":3,"title":"二、封装","slug":"二、封装","link":"#二、封装","children":[]},{"level":3,"title":"三、属性存取器","slug":"三、属性存取器","link":"#三、属性存取器","children":[]},{"level":3,"title":"四、继承","slug":"四、继承","link":"#四、继承","children":[]},{"level":3,"title":"五、抽象类（abstract class）","slug":"五、抽象类-abstract-class","link":"#五、抽象类-abstract-class","children":[]},{"level":3,"title":"六、接口","slug":"六、接口","link":"#六、接口","children":[]}]},{"level":2,"title":"基本配置","slug":"基本配置","link":"#基本配置","children":[{"level":3,"title":"一、TS编译配置","slug":"一、ts编译配置","link":"#一、ts编译配置","children":[]},{"level":3,"title":"二、webpack整合","slug":"二、webpack整合","link":"#二、webpack整合","children":[]}]}],"relativePath":"FrontEnd/TypeScript/TS学习笔记.md"}'),p={name:"FrontEnd/TypeScript/TS学习笔记.md"},o=l(`<h2 id="基础语法" tabindex="-1">基础语法 <a class="header-anchor" href="#基础语法" aria-hidden="true">#</a></h2><h3 id="一、基础类型" tabindex="-1">一、基础类型 <a class="header-anchor" href="#一、基础类型" aria-hidden="true">#</a></h3><h4 id="js类型" tabindex="-1">JS类型 <a class="header-anchor" href="#js类型" aria-hidden="true">#</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">boolean</span></span>
<span class="line"><span style="color:#F6F6F4;">number</span></span>
<span class="line"><span style="color:#F6F6F4;">string</span></span>
<span class="line"><span style="color:#F6F6F4;">array</span></span>
<span class="line"><span style="color:#F6F6F4;">object	</span><span style="color:#7B7F8B;">//对象: {}、 function(){}</span></span>
<span class="line"><span style="color:#BF9EEE;">null</span></span>
<span class="line"><span style="color:#BF9EEE;">undefined</span><span style="color:#F6F6F4;">	</span><span style="color:#7B7F8B;">//默认情况下null和undefined是所有类型的子类型。可以赋值给其他类型</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">boolean</span></span>
<span class="line"><span style="color:#24292E;">number</span></span>
<span class="line"><span style="color:#24292E;">string</span></span>
<span class="line"><span style="color:#24292E;">array</span></span>
<span class="line"><span style="color:#24292E;">object	</span><span style="color:#6A737D;">//对象: {}、 function(){}</span></span>
<span class="line"><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">	</span><span style="color:#6A737D;">//默认情况下null和undefined是所有类型的子类型。可以赋值给其他类型</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>object 类型常见用法</strong></p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//1.严格要求</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> b </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">{name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;"> ,age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F6F6F4;">b </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> { name</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">zhangsan </span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,age </span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">18</span><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.严格要求</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">:</span><span style="color:#24292E;">{</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> ,</span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { name:</span><span style="color:#032F62;">&#39;zhangsan &#39;</span><span style="color:#24292E;">,age :</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//2.可选</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> b </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">{name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;"> ,age</span><span style="color:#F286C4;">?:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F6F6F4;">b </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> { name</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">zhangsna </span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//2.可选</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">:</span><span style="color:#24292E;">{</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> ,</span><span style="color:#E36209;">age</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { name:</span><span style="color:#032F62;">&#39;zhangsna &#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//3.多个可选</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> b </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">{name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;"> ,[</span><span style="color:#FFB86C;font-style:italic;">porname</span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">]</span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F6F6F4;">b </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> { name</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">zhangsna </span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,address</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">上海</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,gender</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">男</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//3.多个可选</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">:</span><span style="color:#24292E;">{</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> ,[</span><span style="color:#E36209;">porname</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { name:</span><span style="color:#032F62;">&#39;zhangsna &#39;</span><span style="color:#24292E;">,address:</span><span style="color:#032F62;">&#39;上海&#39;</span><span style="color:#24292E;">,gender:</span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//4.箭头函数设置函数结构</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">d</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">c</span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">,</span><span style="color:#FFB86C;font-style:italic;">d</span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">=&gt;</span><span style="color:#97E1F1;font-style:italic;">number</span></span>
<span class="line"><span style="color:#62E884;">d</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">n1</span><span style="color:#F6F6F4;">,</span><span style="color:#FFB86C;font-style:italic;">n2</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> n1</span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;">n2</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//4.箭头函数设置函数结构</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">d</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">c</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">number</span><span style="color:#24292E;">,</span><span style="color:#E36209;">d</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">number</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#005CC5;">number</span></span>
<span class="line"><span style="color:#6F42C1;">d</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">n1</span><span style="color:#24292E;">,</span><span style="color:#E36209;">n2</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> n1</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">n2</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>数组</strong></p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> arr</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">[] 	</span><span style="color:#7B7F8B;">//字符串数组 arr = [&#39;zhansan&#39;,&#39;lisi&#39;]</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> arr1</span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">Array</span><span style="color:#F6F6F4;">&lt;</span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">&gt;	</span><span style="color:#7B7F8B;">//数值数组 arr1 = [1,2,3,4,5]</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arr</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[] 	</span><span style="color:#6A737D;">//字符串数组 arr = [&#39;zhansan&#39;,&#39;lisi&#39;]</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arr1</span><span style="color:#D73A49;">:</span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">number</span><span style="color:#24292E;">&gt;	</span><span style="color:#6A737D;">//数值数组 arr1 = [1,2,3,4,5]</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>元组</strong></p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> h</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;"> ,</span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">h </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">hello</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">123</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> h</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> ,</span><span style="color:#005CC5;">number</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">h </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">]</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>枚举</strong></p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">enum</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Color</span><span style="color:#F6F6F4;"> {Red </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, Green </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">, Blue </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> c</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Color</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> Color.Green;  </span><span style="color:#7B7F8B;">//c为2</span></span>
<span class="line"><span style="color:#F6F6F4;">Color[</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">] </span><span style="color:#7B7F8B;">// Green 枚举的值得到它的名字</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Color</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">Red</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">Green</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">Blue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> c</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Color</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Color.Green;  </span><span style="color:#6A737D;">//c为2</span></span>
<span class="line"><span style="color:#24292E;">Color[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// Green 枚举的值得到它的名字</span></span>
<span class="line"></span></code></pre></div><h4 id="ts新增类型" tabindex="-1">TS新增类型 <a class="header-anchor" href="#ts新增类型" aria-hidden="true">#</a></h4><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">字面量	  </span><span style="color:#7B7F8B;">//限制类型在几个值之间（联合类型）例：let b : &#39;male&#39;|&#39;amale&#39; 、 </span></span>
<span class="line"><span style="color:#F6F6F4;">enum	</span><span style="color:#7B7F8B;">//枚举类型</span></span>
<span class="line"><span style="color:#F6F6F4;">tuple	</span><span style="color:#7B7F8B;">//元组 [string, number];</span></span>
<span class="line"><span style="color:#F286C4;">void</span><span style="color:#F6F6F4;">	</span><span style="color:#7B7F8B;">//表示没有返回值，不返回或返回undefined，和其他类型平等关系，不能直接赋值给其他类型	</span></span>
<span class="line"><span style="color:#F6F6F4;">Any		</span><span style="color:#7B7F8B;">//任意类型</span></span>
<span class="line"><span style="color:#F6F6F4;">unknown </span><span style="color:#7B7F8B;">//未知类型 </span></span>
<span class="line"><span style="color:#F6F6F4;">never	</span><span style="color:#7B7F8B;">//永远不返回结果，没有类型是never的子类型、没有类型可以赋值给never类型（除了never本身之外）</span></span>
<span class="line"><span style="color:#7B7F8B;">//函数用于执行不到返回值那一步，(抛出异常或死循环)的返回值类型</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">字面量	  </span><span style="color:#6A737D;">//限制类型在几个值之间（联合类型）例：let b : &#39;male&#39;|&#39;amale&#39; 、 </span></span>
<span class="line"><span style="color:#24292E;">enum	</span><span style="color:#6A737D;">//枚举类型</span></span>
<span class="line"><span style="color:#24292E;">tuple	</span><span style="color:#6A737D;">//元组 [string, number];</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;">	</span><span style="color:#6A737D;">//表示没有返回值，不返回或返回undefined，和其他类型平等关系，不能直接赋值给其他类型	</span></span>
<span class="line"><span style="color:#24292E;">Any		</span><span style="color:#6A737D;">//任意类型</span></span>
<span class="line"><span style="color:#24292E;">unknown </span><span style="color:#6A737D;">//未知类型 </span></span>
<span class="line"><span style="color:#24292E;">never	</span><span style="color:#6A737D;">//永远不返回结果，没有类型是never的子类型、没有类型可以赋值给never类型（除了never本身之外）</span></span>
<span class="line"><span style="color:#6A737D;">//函数用于执行不到返回值那一步，(抛出异常或死循环)的返回值类型</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>unknown</code>与<code>any</code>区别</p></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> a</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">any</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> b</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"><span style="color:#F6F6F4;">b </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;">  a </span><span style="color:#7B7F8B;">// OK  any类型可以赋值任意类型</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">  a </span><span style="color:#6A737D;">// OK  any类型可以赋值任意类型</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> e</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">unknown</span></span>
<span class="line"><span style="color:#F6F6F4;">e </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">TypeScript</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> f</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span></span>
<span class="line"><span style="color:#F6F6F4;">f </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> e 	</span><span style="color:#7B7F8B;">//Error 未知类型不能直接赋值给其他变量（类型安全的any）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//处理方式一：</span></span>
<span class="line"><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;">  e </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">string</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> ){</span></span>
<span class="line"><span style="color:#F6F6F4;">	f </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> e</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#7B7F8B;">//处理方式二：类型断言</span></span>
<span class="line"><span style="color:#F6F6F4;">f </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> e </span><span style="color:#F286C4;">as</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"><span style="color:#F6F6F4;">f </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> &lt;</span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">&gt; e</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> e</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unknown</span></span>
<span class="line"><span style="color:#24292E;">e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;TypeScript&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> f</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e 	</span><span style="color:#6A737D;">//Error 未知类型不能直接赋值给其他变量（类型安全的any）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//处理方式一：</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;">  e </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;string&quot;</span><span style="color:#24292E;"> ){</span></span>
<span class="line"><span style="color:#24292E;">	f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">//处理方式二：类型断言</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">&gt; e</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>|</code>和<code>&amp;</code> ：表示或，&amp;：表示且</p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> g</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">|</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">boolean</span></span>
<span class="line"><span style="color:#F6F6F4;">g </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">sdfj</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">g </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> h </span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&amp;</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {name</span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">} </span><span style="color:#F286C4;">&amp;</span><span style="color:#F6F6F4;">{age</span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F6F6F4;">f </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    name</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">h hh</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    age</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">18</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> g</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">g </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;sdfj&#39;</span></span>
<span class="line"><span style="color:#24292E;">g </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> h </span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">} </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">{</span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">number</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    name:</span><span style="color:#032F62;">&#39;h hh&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    age:</span><span style="color:#005CC5;">18</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="二、类型声名" tabindex="-1">二、类型声名 <a class="header-anchor" href="#二、类型声名" aria-hidden="true">#</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> name</span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">	 </span><span style="color:#7B7F8B;">//声名string类型变量</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> age </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">19</span><span style="color:#F6F6F4;">	 </span><span style="color:#7B7F8B;">//类型声名可省略，会自动类型推断，age推断为number</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> name</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">	 </span><span style="color:#6A737D;">//声名string类型变量</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">19</span><span style="color:#24292E;">	 </span><span style="color:#6A737D;">//类型声名可省略，会自动类型推断，age推断为number</span></span>
<span class="line"></span></code></pre></div><h3 id="三、as-const-断言" tabindex="-1">三、as const 断言 <a class="header-anchor" href="#三、as-const-断言" aria-hidden="true">#</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> a </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">99</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">as</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">const</span><span style="color:#F6F6F4;"> 	</span><span style="color:#7B7F8B;">//a值只能为99,指定明确的值、类型</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> b</span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">asfghj</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> obj </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">b,		</span><span style="color:#7B7F8B;">//值只能为string</span></span>
<span class="line"><span style="color:#F6F6F4;">} </span><span style="color:#F286C4;">as</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">const</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">99</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> 	</span><span style="color:#6A737D;">//a值只能为99,指定明确的值、类型</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;asfghj&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    name:b,		</span><span style="color:#6A737D;">//值只能为string</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> x </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1024</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> y </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">2048</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> arr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [x,y] 	</span><span style="color:#7B7F8B;">// arr[1]类型是 number|string</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> arr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [x,y] </span><span style="color:#F286C4;">as</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">const</span><span style="color:#F6F6F4;"> 	</span><span style="color:#7B7F8B;">// 指定为元组，arr[1]类型只能为 number</span></span>
<span class="line"><span style="color:#7B7F8B;">//同：let arr = &lt;const&gt;[x,y]</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;2048&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [x,y] 	</span><span style="color:#6A737D;">// arr[1]类型是 number|string</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [x,y] </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> 	</span><span style="color:#6A737D;">// 指定为元组，arr[1]类型只能为 number</span></span>
<span class="line"><span style="color:#6A737D;">//同：let arr = &lt;const&gt;[x,y]</span></span>
<span class="line"></span></code></pre></div><h2 id="面对对象" tabindex="-1">面对对象 <a class="header-anchor" href="#面对对象" aria-hidden="true">#</a></h2><h3 id="一、类" tabindex="-1">一、类 <a class="header-anchor" href="#一、类" aria-hidden="true">#</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">类名</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    属性名</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">类型</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">参数</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">类型</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.属性名 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> 参数;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">方法名</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">.</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">类名</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">属性名</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">类型</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">参数</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">类型</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.属性名 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> 参数;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">方法名</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><strong>栗子:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">        age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name;</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.age </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> age;</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">            console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#E7EE98;">\`大家好，我是</span><span style="color:#F286C4;">\${</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name</span><span style="color:#F286C4;">}</span><span style="color:#E7EE98;">\`</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`大家好，我是\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span></code></pre></div><h4 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-hidden="true">#</a></h4><blockquote><p><strong>注1：在TS中只能有一个构造器方法！</strong></p></blockquote><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name;</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.age </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> age;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>注2：子类继承父类时，必须调用父类的构造方法（如果子类中也定义了构造方法）！</strong></p></blockquote><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">A</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">protected</span><span style="color:#F6F6F4;"> num</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">num</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.num </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> num;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">X</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">A</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">protected</span><span style="color:#F6F6F4;"> name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">num</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">super</span><span style="color:#F6F6F4;">(num);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#E36209;">num</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">num</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> num;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">X</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">num</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(num);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="二、封装" tabindex="-1">二、封装 <a class="header-anchor" href="#二、封装" aria-hidden="true">#</a></h3><ul><li><p>静态属性（static）：</p><ul><li>声明为static的属性或方法不再属于实例，而是属于类的属性；</li></ul></li><li><p>只读属性（readonly）：</p><ul><li>如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改</li></ul></li><li><p>TS中属性具有三种修饰符：</p><ul><li>public（默认值），可以在类、子类和对象中修改</li><li>protected ，可以在类、子类中修改</li><li>private ，可以在类中修改</li></ul></li></ul><details class="details custom-block"><summary>public</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// 写或什么都不写都是public</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name; </span><span style="color:#7B7F8B;">// 可以在类中修改</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.age </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> age;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#E7EE98;">\`大家好，我是</span><span style="color:#F286C4;">\${</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name</span><span style="color:#F286C4;">}</span><span style="color:#E7EE98;">\`</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Employee</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Person</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">super</span><span style="color:#F6F6F4;">(name, age);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name; </span><span style="color:#7B7F8B;">//子类中可以修改</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> p </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Person</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">孙悟空</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">18</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">p.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">猪八戒</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">;</span><span style="color:#7B7F8B;">// 可以通过对象修改</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 写或什么都不写都是public</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name; </span><span style="color:#6A737D;">// 可以在类中修改</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`大家好，我是\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Employee</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(name, age);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name; </span><span style="color:#6A737D;">//子类中可以修改</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">p</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;孙悟空&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">p.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;猪八戒&#39;</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// 可以通过对象修改</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>protected</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">protected</span><span style="color:#F6F6F4;"> name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">protected</span><span style="color:#F6F6F4;"> age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name; </span><span style="color:#7B7F8B;">// 可以修改</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.age </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> age;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#E7EE98;">\`大家好，我是</span><span style="color:#F286C4;">\${</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name</span><span style="color:#F286C4;">}</span><span style="color:#E7EE98;">\`</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Employee</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Person</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">super</span><span style="color:#F6F6F4;">(name, age);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name; </span><span style="color:#7B7F8B;">//子类中可以修改</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> p </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Person</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">孙悟空</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">18</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">p.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">猪八戒</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">;</span><span style="color:#7B7F8B;">// 不能修改</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name; </span><span style="color:#6A737D;">// 可以修改</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`大家好，我是\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Employee</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(name, age);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name; </span><span style="color:#6A737D;">//子类中可以修改</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">p</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;孙悟空&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">p.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;猪八戒&#39;</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// 不能修改</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>private</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name; </span><span style="color:#7B7F8B;">// 可以修改</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.age </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> age;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#E7EE98;">\`大家好，我是</span><span style="color:#F286C4;">\${</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name</span><span style="color:#F286C4;">}</span><span style="color:#E7EE98;">\`</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Employee</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Person</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">super</span><span style="color:#F6F6F4;">(name, age);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name; </span><span style="color:#7B7F8B;">//子类中不能修改</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> p </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Person</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">孙悟空</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">18</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">p.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">猪八戒</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">;</span><span style="color:#7B7F8B;">// 不能修改</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name; </span><span style="color:#6A737D;">// 可以修改</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`大家好，我是\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Employee</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(name, age);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name; </span><span style="color:#6A737D;">//子类中不能修改</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">p</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;孙悟空&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">p.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;猪八戒&#39;</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// 不能修改</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></details><h3 id="三、属性存取器" tabindex="-1">三、属性存取器 <a class="header-anchor" href="#三、属性存取器" aria-hidden="true">#</a></h3><blockquote><p>对于一些不希望被任意修改的属性，可以将其设置为private</p><p>直接将其设置为private将导致无法再通过对象修改其中的属性</p><p>我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器</p><p>读取属性的方法叫做setter方法，设置属性的方法叫做getter方法</p></blockquote><details class="details custom-block"><summary>示例</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> _name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">._name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">get</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">name</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">._name;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">set</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">name</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">._name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> p1 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Person</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">孙悟空</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#7B7F8B;">// 实际通过调用getter方法读取name属性</span></span>
<span class="line"><span style="color:#F6F6F4;">console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(p1.name);</span></span>
<span class="line"><span style="color:#7B7F8B;">// 实际通过调用setter方法修改name属性 </span></span>
<span class="line"><span style="color:#F6F6F4;">p1.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">猪八戒</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">; </span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#E36209;">_name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">._name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">get</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">._name;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">._name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">p1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;孙悟空&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 实际通过调用getter方法读取name属性</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(p1.name);</span></span>
<span class="line"><span style="color:#6A737D;">// 实际通过调用setter方法修改name属性 </span></span>
<span class="line"><span style="color:#24292E;">p1.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;猪八戒&#39;</span><span style="color:#24292E;">; </span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></details><h4 id="静态属性" tabindex="-1">静态属性 <a class="header-anchor" href="#静态属性" aria-hidden="true">#</a></h4><blockquote><p>静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用</p><p>静态属性（方法）使用static开头</p></blockquote><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Tools</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> PI </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3.1415926</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">sum</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">num1</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">num2</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> num1 </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> num2</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(Tools.</span><span style="color:#BF9EEE;">PI</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(Tools.</span><span style="color:#62E884;">sum</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">123</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">456</span><span style="color:#F6F6F4;">));</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Tools</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#E36209;">PI</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3.1415926</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;">(</span><span style="color:#E36209;">num1</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">num2</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> num1 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> num2</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(Tools.</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(Tools.</span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">123</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">456</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="四、继承" tabindex="-1">四、继承 <a class="header-anchor" href="#四、继承" aria-hidden="true">#</a></h3><blockquote><p>通过继承可以将其他类中的属性和方法引入到当前类中，通过继承可以在不修改类的情况下完成对类的扩展</p></blockquote><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Animal</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name;</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.age </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> age;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Dog</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Animal</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">bark</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#E7EE98;">\`</span><span style="color:#F286C4;">\${</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name</span><span style="color:#F286C4;">}</span><span style="color:#E7EE98;">在汪汪叫！\`</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> dog </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Dog</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">旺财</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">dog.</span><span style="color:#62E884;">bark</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">bark</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}在汪汪叫！\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dog</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;旺财&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">dog.</span><span style="color:#6F42C1;">bark</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="重写" tabindex="-1">重写 <a class="header-anchor" href="#重写" aria-hidden="true">#</a></h4><blockquote><p>发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写</p></blockquote><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Animal</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name;</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.age </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> age;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">run</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#E7EE98;">\`父类中的run方法！\`</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Dog</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Animal</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">bark</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#E7EE98;">\`</span><span style="color:#F286C4;">\${</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name</span><span style="color:#F286C4;">}</span><span style="color:#E7EE98;">在汪汪叫！\`</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">run</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#E7EE98;">\`子类中的run方法，会重写父类中的run方法！\`</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> dog </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Dog</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">旺财</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">dog.</span><span style="color:#62E884;">bark</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`父类中的run方法！\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">bark</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}在汪汪叫！\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`子类中的run方法，会重写父类中的run方法！\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dog</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;旺财&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">dog.</span><span style="color:#6F42C1;">bark</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="五、抽象类-abstract-class" tabindex="-1">五、抽象类（abstract class） <a class="header-anchor" href="#五、抽象类-abstract-class" aria-hidden="true">#</a></h3><blockquote><p>抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例，用于抽取类的共同特点</p><p>使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现;</p></blockquote><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">abstract</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Animal</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">abstract</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">run</span><span style="color:#F6F6F4;">()</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">bark</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">      console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">动物在叫~</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Dog</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Animals</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">run</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">      console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">狗在跑~</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">abstract</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">abstract</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">bark</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;动物在叫~&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animals</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;狗在跑~&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="六、接口" tabindex="-1">六、接口 <a class="header-anchor" href="#六、接口" aria-hidden="true">#</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//用于类型检查</span></span>
<span class="line"><span style="color:#F286C4;">interface</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Person</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    firstName</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">     lastName</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">     address</span><span style="color:#F286C4;">?:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;	</span><span style="color:#7B7F8B;">//可选属性</span></span>
<span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">readonly</span><span style="color:#F6F6F4;"> age</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">;	</span><span style="color:#7B7F8B;">//只读属性</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">greeter</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">person</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Person</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Hello, </span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> person.firstName </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> person.lastName;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//用于类型检查</span></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">firstName</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#E36209;">lastName</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#E36209;">address</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;	</span><span style="color:#6A737D;">//可选属性</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">readonly</span><span style="color:#24292E;"> </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;	</span><span style="color:#6A737D;">//只读属性</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">greeter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">person</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello, &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> person.firstName </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot; &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> person.lastName;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="基本配置" tabindex="-1">基本配置 <a class="header-anchor" href="#基本配置" aria-hidden="true">#</a></h2><h3 id="一、ts编译配置" tabindex="-1">一、TS编译配置 <a class="header-anchor" href="#一、ts编译配置" aria-hidden="true">#</a></h3><blockquote><p><strong>但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 tsconfig.json</strong></p></blockquote><details class="details custom-block"><summary>tsconfig.json详细配置</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#7B7F8B;">/* </span></span>
<span class="line"><span style="color:#7B7F8B;">    tsconfig.json 是ts编译器的配置文件，ts编译器可以更具它的信息来对代码进行编译</span></span>
<span class="line"><span style="color:#7B7F8B;">    &quot;include&quot; 用来表示指定哪些ts文件需要被编译</span></span>
<span class="line"><span style="color:#7B7F8B;">        路径：</span></span>
<span class="line"><span style="color:#7B7F8B;">            *表示任意文件，</span></span>
<span class="line"><span style="color:#7B7F8B;">            **表示任意目录</span></span>
<span class="line"><span style="color:#7B7F8B;">    &quot;exclude&quot; 用来表示不需要被编译的文件目录</span></span>
<span class="line"><span style="color:#7B7F8B;">            默认值：{&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;}</span></span>
<span class="line"><span style="color:#7B7F8B;">*/</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">include</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">: [</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./src/**/*</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// &quot;exclude&quot;: [</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//     &quot;./src/hello/**/*&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// ]</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">        被继承的配置文件</span></span>
<span class="line"><span style="color:#7B7F8B;">        例如：&quot;extends&quot;: &quot;。/configs/base&quot;,</span></span>
<span class="line"><span style="color:#7B7F8B;">      */</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//  &quot;extends&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">        指定被编译文件的列表，只有需要编译的文件少时才会用到</span></span>
<span class="line"><span style="color:#7B7F8B;">      */</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//  &quot;files&quot;: [],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//compilerOptions 编译器的选项 </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">compilerOptions</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">: {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//target 用来指定ts被编译为ES的版本</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//&#39;es3&#39;, &#39;es5&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es2016&#39;, &#39;es2017&#39;, &#39;es2018&#39;, &#39;es2019&#39;, &#39;es2020&#39;, &#39;esnext&#39;.</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">target</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ES2015</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//module 指定要使用的模块化的规范</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//&#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es2020&#39;, &#39;esnext&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">module</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">es2015</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//lib 用来指定项目所用的库</span></span>
<span class="line"><span style="color:#F6F6F4;">       </span><span style="color:#7B7F8B;">/* &#39;es5&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es7&#39;, &#39;es2016&#39;, &#39;es2017&#39;, &#39;es2018&#39;, &#39;es2019&#39;, &#39;es2020&#39;, &#39;esnext&#39;, &#39;dom&#39;, </span></span>
<span class="line"><span style="color:#7B7F8B;">       &#39;dom.iterable&#39;, &#39;webworker&#39;, &#39;webworker.importscripts&#39;, &#39;webworker.iterable&#39;, &#39;scripthost&#39;, &#39;es2015.core&#39;, &#39;es2015.collection&#39;, </span></span>
<span class="line"><span style="color:#7B7F8B;">          &#39;es2015.generator&#39;, &#39;es2015.iterable&#39;, &#39;es2015.promise&#39;, &#39;es2015.proxy&#39;, &#39;es2015.reflect&#39;, &#39;es2015.symbol&#39;, &#39;es2015.symbol.wellknown&#39;, &#39;es2016.array.include&#39;,</span></span>
<span class="line"><span style="color:#7B7F8B;">          &#39;es2017.object&#39;, &#39;es2017.sharedmemory&#39;, &#39;es2017.string&#39;, &#39;es2017.intl&#39;, &#39;es2017.typedarrays&#39;, &#39;es2018.asyncgenerator&#39;, &#39;es2018.asynciterable&#39;, &#39;es2018.intl&#39;, </span></span>
<span class="line"><span style="color:#7B7F8B;">         &#39;es2018.promise&#39;, &#39;es2018.regexp&#39;, &#39;es2019.array&#39;, &#39;es2019.object&#39;, &#39;es2019.string&#39;, &#39;es2019.symbol&#39;, &#39;es2020.bigint&#39;, &#39;es2020.promise&#39;, </span></span>
<span class="line"><span style="color:#7B7F8B;">         &#39;es2020.sharedmemory&#39;, &#39;es2020.string&#39;, &#39;es2020.symbol.wellknown&#39;, &#39;es2020.intl&#39;, &#39;esnext.array&#39;, &#39;esnext.symbol&#39;, &#39;esnext.asynciterable&#39;, &#39;esnext.intl&#39;, */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//outDir 用来指定编译后文件所在的目录</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">outDir</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./dist</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//outFile 将代码合并为一个文件</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// &quot;outFile&quot;: &quot;./dist/app.js&quot;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 是否对js文件进行编译，默认是false</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">allowJs</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 是否检查js代码是否符合语法规范，默认值是false</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">checkJs</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 是否移除注释</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">removeComments</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 不生成编译后的文件</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">noEmit</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 当有错误时不生成编译文件</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">noEmitOnError</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 所有严格检查的总开关</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">strict</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 用来设置编译后的文件是否使用严格模式，默认是false</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 在ES6中的模块化会自动使用严格模式，而无需在文件开头添加\`&#39;use strict&#39;\`</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">alwaysStrict</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 不允许隐式的any类型</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">noImplicitAny</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 不允许不明确类型的this</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">noImplicitThis</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 严格检查空值</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">strictNullChecks</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    tsconfig.json 是ts编译器的配置文件，ts编译器可以更具它的信息来对代码进行编译</span></span>
<span class="line"><span style="color:#6A737D;">    &quot;include&quot; 用来表示指定哪些ts文件需要被编译</span></span>
<span class="line"><span style="color:#6A737D;">        路径：</span></span>
<span class="line"><span style="color:#6A737D;">            *表示任意文件，</span></span>
<span class="line"><span style="color:#6A737D;">            **表示任意目录</span></span>
<span class="line"><span style="color:#6A737D;">    &quot;exclude&quot; 用来表示不需要被编译的文件目录</span></span>
<span class="line"><span style="color:#6A737D;">            默认值：{&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;}</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;include&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;./src/**/*&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &quot;exclude&quot;: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     &quot;./src/hello/**/*&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ]</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">        被继承的配置文件</span></span>
<span class="line"><span style="color:#6A737D;">        例如：&quot;extends&quot;: &quot;。/configs/base&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">      */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//  &quot;extends&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">        指定被编译文件的列表，只有需要编译的文件少时才会用到</span></span>
<span class="line"><span style="color:#6A737D;">      */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//  &quot;files&quot;: [],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//compilerOptions 编译器的选项 </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//target 用来指定ts被编译为ES的版本</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//&#39;es3&#39;, &#39;es5&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es2016&#39;, &#39;es2017&#39;, &#39;es2018&#39;, &#39;es2019&#39;, &#39;es2020&#39;, &#39;esnext&#39;.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;target&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ES2015&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//module 指定要使用的模块化的规范</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//&#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es2020&#39;, &#39;esnext&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;es2015&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//lib 用来指定项目所用的库</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">/* &#39;es5&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es7&#39;, &#39;es2016&#39;, &#39;es2017&#39;, &#39;es2018&#39;, &#39;es2019&#39;, &#39;es2020&#39;, &#39;esnext&#39;, &#39;dom&#39;, </span></span>
<span class="line"><span style="color:#6A737D;">       &#39;dom.iterable&#39;, &#39;webworker&#39;, &#39;webworker.importscripts&#39;, &#39;webworker.iterable&#39;, &#39;scripthost&#39;, &#39;es2015.core&#39;, &#39;es2015.collection&#39;, </span></span>
<span class="line"><span style="color:#6A737D;">          &#39;es2015.generator&#39;, &#39;es2015.iterable&#39;, &#39;es2015.promise&#39;, &#39;es2015.proxy&#39;, &#39;es2015.reflect&#39;, &#39;es2015.symbol&#39;, &#39;es2015.symbol.wellknown&#39;, &#39;es2016.array.include&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          &#39;es2017.object&#39;, &#39;es2017.sharedmemory&#39;, &#39;es2017.string&#39;, &#39;es2017.intl&#39;, &#39;es2017.typedarrays&#39;, &#39;es2018.asyncgenerator&#39;, &#39;es2018.asynciterable&#39;, &#39;es2018.intl&#39;, </span></span>
<span class="line"><span style="color:#6A737D;">         &#39;es2018.promise&#39;, &#39;es2018.regexp&#39;, &#39;es2019.array&#39;, &#39;es2019.object&#39;, &#39;es2019.string&#39;, &#39;es2019.symbol&#39;, &#39;es2020.bigint&#39;, &#39;es2020.promise&#39;, </span></span>
<span class="line"><span style="color:#6A737D;">         &#39;es2020.sharedmemory&#39;, &#39;es2020.string&#39;, &#39;es2020.symbol.wellknown&#39;, &#39;es2020.intl&#39;, &#39;esnext.array&#39;, &#39;esnext.symbol&#39;, &#39;esnext.asynciterable&#39;, &#39;esnext.intl&#39;, */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//outDir 用来指定编译后文件所在的目录</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;outDir&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./dist&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//outFile 将代码合并为一个文件</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// &quot;outFile&quot;: &quot;./dist/app.js&quot;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 是否对js文件进行编译，默认是false</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;allowJs&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 是否检查js代码是否符合语法规范，默认值是false</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;checkJs&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 是否移除注释</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;removeComments&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 不生成编译后的文件</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;noEmit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 当有错误时不生成编译文件</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;noEmitOnError&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 所有严格检查的总开关</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;strict&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 用来设置编译后的文件是否使用严格模式，默认是false</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 在ES6中的模块化会自动使用严格模式，而无需在文件开头添加\`&#39;use strict&#39;\`</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;alwaysStrict&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 不允许隐式的any类型</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;noImplicitAny&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 不允许不明确类型的this</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;noImplicitThis&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 严格检查空值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;strictNullChecks&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div></details><h3 id="二、webpack整合" tabindex="-1">二、webpack整合 <a class="header-anchor" href="#二、webpack整合" aria-hidden="true">#</a></h3><p>步骤如下：</p><h4 id="_1-初始化项目" tabindex="-1">1. 初始化项目 <a class="header-anchor" href="#_1-初始化项目" aria-hidden="true">#</a></h4><p>进入项目根目录，执行命令 <code>npm init -y</code>，创建package.json文件</p><h4 id="_2-下载构建工具" tabindex="-1">2. 下载构建工具 <a class="header-anchor" href="#_2-下载构建工具" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">npm </span><span style="color:#E7EE98;">i</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-D</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">webpack</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">webpack-cli</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">webpack-dev-server</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">typescript</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">ts-loader</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">clean-webpack-plugin</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack-cli</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack-dev-server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">typescript</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ts-loader</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clean-webpack-plugin</span></span>
<span class="line"></span></code></pre></div><h4 id="_3-配置webpack" tabindex="-1">3. 配置webpack <a class="header-anchor" href="#_3-配置webpack" aria-hidden="true">#</a></h4><details class="details custom-block"><summary>webpack.config.js详细配置</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// 引入一个包</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> path </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">path</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#7B7F8B;">// 引入html插件</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> HTMLWebpackPlugin </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">html-webpack-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#7B7F8B;">//引入clean插件</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { CleanWebpackPlugin } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">clean-webpack-plugin</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// npm init -y 初始化 创建package.json文件</span></span>
<span class="line"><span style="color:#7B7F8B;">// npm i -D webpack webpack-cli typescript ts-loader  安装四个依赖</span></span>
<span class="line"><span style="color:#7B7F8B;">// 编写webpack配置文件</span></span>
<span class="line"><span style="color:#7B7F8B;">// 编写tsconfig.json文件</span></span>
<span class="line"><span style="color:#7B7F8B;">// 修改package.json中加上build命令</span></span>
<span class="line"><span style="color:#7B7F8B;">// npm i -D html-webpack-plugin //自动生成html</span></span>
<span class="line"><span style="color:#7B7F8B;">// npm i -D webpack-dev-server //自动响应浏览器更新</span></span>
<span class="line"><span style="color:#7B7F8B;">// npm i -D clean-webpack-plugin //清楚dist目录旧文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//webpack 中所有的配置信息都应该写在module.exports中</span></span>
<span class="line"><span style="color:#97E1F1;font-style:italic;">module</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">exports</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 指定入口文件</span></span>
<span class="line"><span style="color:#F6F6F4;">    entry</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./src/index.ts</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 指定打包文件所在目录</span></span>
<span class="line"><span style="color:#F6F6F4;">    output</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//指定打包文件的目录</span></span>
<span class="line"><span style="color:#F6F6F4;">        path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> path.</span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(__dirname, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">dist</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">),</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//打包后文件的名字</span></span>
<span class="line"><span style="color:#F6F6F4;">        filename</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">bundle.js</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//告诉webpack不使用箭头函数</span></span>
<span class="line"><span style="color:#F6F6F4;">        environment</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            arrowFunction</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//指定webpack打包时要使用的模块</span></span>
<span class="line"><span style="color:#F6F6F4;">    module</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 指定要loader加载的规则</span></span>
<span class="line"><span style="color:#F6F6F4;">        rules</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">            {</span></span>
<span class="line"><span style="color:#F6F6F4;">                </span><span style="color:#7B7F8B;">// test指定的时规则生效的文件</span></span>
<span class="line"><span style="color:#F6F6F4;">                test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.ts</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span><span style="color:#7B7F8B;">//以ts结尾的文件</span></span>
<span class="line"><span style="color:#F6F6F4;">                </span><span style="color:#7B7F8B;">// 要使用的loader</span></span>
<span class="line"><span style="color:#F6F6F4;">                use</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">                    </span><span style="color:#7B7F8B;">// 配置babel</span></span>
<span class="line"><span style="color:#F6F6F4;">                    {</span></span>
<span class="line"><span style="color:#F6F6F4;">                        </span><span style="color:#7B7F8B;">//指定加载器</span></span>
<span class="line"><span style="color:#F6F6F4;">                        loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">babel-loader</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                        </span><span style="color:#7B7F8B;">// 设置babel</span></span>
<span class="line"><span style="color:#F6F6F4;">                        options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">                            </span><span style="color:#7B7F8B;">//设置预定义的环境</span></span>
<span class="line"><span style="color:#F6F6F4;">                            presets</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">                                [</span></span>
<span class="line"><span style="color:#F6F6F4;">                                    </span><span style="color:#7B7F8B;">//指定环境的插件</span></span>
<span class="line"><span style="color:#F6F6F4;">                                    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">@babel/preset-env</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                                    </span><span style="color:#7B7F8B;">// 配置信息</span></span>
<span class="line"><span style="color:#F6F6F4;">                                    {</span></span>
<span class="line"><span style="color:#F6F6F4;">                                        </span><span style="color:#7B7F8B;">// 要兼容的目标浏览器及版本</span></span>
<span class="line"><span style="color:#F6F6F4;">                                        targets</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">                                            </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">chrome</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">58</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                                            </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ie</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">11</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">                                        },</span></span>
<span class="line"><span style="color:#F6F6F4;">                                        </span><span style="color:#7B7F8B;">//指定corejs的版本</span></span>
<span class="line"><span style="color:#F6F6F4;">                                        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">corejs</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">3</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                                        </span><span style="color:#7B7F8B;">//使用corejs的方式 &quot;usage&quot;  表示按需加载</span></span>
<span class="line"><span style="color:#F6F6F4;">                                        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">useBuiltIns</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">usage</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"><span style="color:#F6F6F4;">                                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">                                ]</span></span>
<span class="line"><span style="color:#F6F6F4;">                            ]</span></span>
<span class="line"><span style="color:#F6F6F4;">                        }</span></span>
<span class="line"><span style="color:#F6F6F4;">                    },</span></span>
<span class="line"><span style="color:#F6F6F4;">                    </span><span style="color:#7B7F8B;">// &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#F6F6F4;">                    </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">ts-loader</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">                ],</span></span>
<span class="line"><span style="color:#F6F6F4;">                </span><span style="color:#7B7F8B;">// 要排除的文件</span></span>
<span class="line"><span style="color:#F6F6F4;">                exclude</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">node-modules</span><span style="color:#EE6666;">/</span></span>
<span class="line"><span style="color:#F6F6F4;">            }</span></span>
<span class="line"><span style="color:#F6F6F4;">        ]</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//配置Webpack 插件</span></span>
<span class="line"><span style="color:#F6F6F4;">    plugins</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">CleanWebpackPlugin</span><span style="color:#F6F6F4;">(),</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">HTMLWebpackPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#7B7F8B;">// title: &quot;这是一个自定义的title&quot;、</span></span>
<span class="line"><span style="color:#F6F6F4;">            template</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./src/index.html</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"><span style="color:#F6F6F4;">        }),</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 用来设置引用模块，可以将这些文件识别为模块</span></span>
<span class="line"><span style="color:#F6F6F4;">    resolve</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        extensions</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">.ts</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">.js</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 引入一个包</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 引入html插件</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HTMLWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;html-webpack-plugin&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">//引入clean插件</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">CleanWebpackPlugin</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;clean-webpack-plugin&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// npm init -y 初始化 创建package.json文件</span></span>
<span class="line"><span style="color:#6A737D;">// npm i -D webpack webpack-cli typescript ts-loader  安装四个依赖</span></span>
<span class="line"><span style="color:#6A737D;">// 编写webpack配置文件</span></span>
<span class="line"><span style="color:#6A737D;">// 编写tsconfig.json文件</span></span>
<span class="line"><span style="color:#6A737D;">// 修改package.json中加上build命令</span></span>
<span class="line"><span style="color:#6A737D;">// npm i -D html-webpack-plugin //自动生成html</span></span>
<span class="line"><span style="color:#6A737D;">// npm i -D webpack-dev-server //自动响应浏览器更新</span></span>
<span class="line"><span style="color:#6A737D;">// npm i -D clean-webpack-plugin //清楚dist目录旧文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//webpack 中所有的配置信息都应该写在module.exports中</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 指定入口文件</span></span>
<span class="line"><span style="color:#24292E;">    entry: </span><span style="color:#032F62;">&quot;./src/index.ts&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 指定打包文件所在目录</span></span>
<span class="line"><span style="color:#24292E;">    output: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//指定打包文件的目录</span></span>
<span class="line"><span style="color:#24292E;">        path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;dist&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//打包后文件的名字</span></span>
<span class="line"><span style="color:#24292E;">        filename: </span><span style="color:#032F62;">&quot;bundle.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//告诉webpack不使用箭头函数</span></span>
<span class="line"><span style="color:#24292E;">        environment: {</span></span>
<span class="line"><span style="color:#24292E;">            arrowFunction: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//指定webpack打包时要使用的模块</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 指定要loader加载的规则</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// test指定的时规则生效的文件</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">ts</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//以ts结尾的文件</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 要使用的loader</span></span>
<span class="line"><span style="color:#24292E;">                use: [</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 配置babel</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">//指定加载器</span></span>
<span class="line"><span style="color:#24292E;">                        loader: </span><span style="color:#032F62;">&quot;babel-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">// 设置babel</span></span>
<span class="line"><span style="color:#24292E;">                        options: {</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6A737D;">//设置预定义的环境</span></span>
<span class="line"><span style="color:#24292E;">                            presets: [</span></span>
<span class="line"><span style="color:#24292E;">                                [</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#6A737D;">//指定环境的插件</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#032F62;">&quot;@babel/preset-env&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#6A737D;">// 配置信息</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        </span><span style="color:#6A737D;">// 要兼容的目标浏览器及版本</span></span>
<span class="line"><span style="color:#24292E;">                                        targets: {</span></span>
<span class="line"><span style="color:#24292E;">                                            </span><span style="color:#032F62;">&quot;chrome&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;58&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                            </span><span style="color:#032F62;">&quot;ie&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;11&quot;</span></span>
<span class="line"><span style="color:#24292E;">                                        },</span></span>
<span class="line"><span style="color:#24292E;">                                        </span><span style="color:#6A737D;">//指定corejs的版本</span></span>
<span class="line"><span style="color:#24292E;">                                        </span><span style="color:#032F62;">&quot;corejs&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        </span><span style="color:#6A737D;">//使用corejs的方式 &quot;usage&quot;  表示按需加载</span></span>
<span class="line"><span style="color:#24292E;">                                        </span><span style="color:#032F62;">&quot;useBuiltIns&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;usage&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">                                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                                ]</span></span>
<span class="line"><span style="color:#24292E;">                            ]</span></span>
<span class="line"><span style="color:#24292E;">                        }</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&#39;ts-loader&#39;</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 要排除的文件</span></span>
<span class="line"><span style="color:#24292E;">                exclude:</span><span style="color:#032F62;"> /node-modules/</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//配置Webpack 插件</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CleanWebpackPlugin</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HTMLWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// title: &quot;这是一个自定义的title&quot;、</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&quot;./src/index.html&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 用来设置引用模块，可以将这些文件识别为模块</span></span>
<span class="line"><span style="color:#24292E;">    resolve: {</span></span>
<span class="line"><span style="color:#24292E;">        extensions: [</span><span style="color:#032F62;">&#39;.ts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;.js&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div></details><h4 id="_4-配置ts编译选项" tabindex="-1">4.配置TS编译选项 <a class="header-anchor" href="#_4-配置ts编译选项" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">compilerOptions</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">       </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">target</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ES2015</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">       </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">module</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ES2015</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">       </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">strict</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">   }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">&quot;target&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ES2015&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">&quot;module&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ES2015&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">&quot;strict&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="_5-修改package-json配置" tabindex="-1">5 .修改package.json配置 <a class="header-anchor" href="#_5-修改package-json配置" aria-hidden="true">#</a></h4><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula-soft has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#F286C4;">...</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">scripts</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">: {</span></span>
<span class="line"><span style="color:#F6F6F4;">       </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">test</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">echo </span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">Error: no test specified</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;"> &amp;&amp; exit 1</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">       </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">build</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">webpack</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">       </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">start</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">webpack serve --open chrome.exe</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">//使用chrome启动</span></span>
<span class="line"><span style="color:#F6F6F4;">   },</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#F286C4;">...</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;echo </span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">Error: no test specified</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;"> &amp;&amp; exit 1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;webpack&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;start&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;webpack serve --open chrome.exe&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//使用chrome启动</span></span>
<span class="line"><span style="color:#24292E;">   },</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="_6-项目使用" tabindex="-1">6.项目使用 <a class="header-anchor" href="#_6-项目使用" aria-hidden="true">#</a></h4><p>在src下创建ts文件，并在并命令行执行<code>npm run build</code>对代码进行编译；</p><p>或者执行<code>npm start</code>来启动开发服务器；</p><h4 id="_7-babel" tabindex="-1">7.Babel <a class="header-anchor" href="#_7-babel" aria-hidden="true">#</a></h4><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>虽然TS在编译时也支持代码转换，但是只支持简单的代码转换；</p><p>对于例如：Promise等ES6特性，TS无法直接转换，这时还要用到babel来做转换；</p></div><p><strong>7.1 安装依赖包：</strong></p><p><code>npm i -D @babel/core @babel/preset-env babel-loader core-js</code></p><p>共安装了4个包，分别是：</p><ul><li>@babel/core：babel的核心工具</li><li>@babel/preset-env：babel的预定义环境</li><li>@babel-loader：babel在webpack中的加载器</li><li>core-js：core-js用来使老版本的浏览器支持新版ES语法</li></ul><h4 id="_7-2-修改webpack-config-js配置文件" tabindex="-1">7.2 修改webpack.config.js配置文件 <a class="header-anchor" href="#_7-2-修改webpack-config-js配置文件" aria-hidden="true">#</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">...</span></span>
<span class="line"><span style="color:#F6F6F4;">module: {</span></span>
<span class="line"><span style="color:#F6F6F4;">    rules: [</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">            test</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.ts</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            use</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">                {</span></span>
<span class="line"><span style="color:#F6F6F4;">                    loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">babel-loader</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                    options</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">                        presets</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">                            [</span></span>
<span class="line"><span style="color:#F6F6F4;">                                </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">@babel/preset-env</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                                {	</span><span style="color:#7B7F8B;">//支持的目标版本</span></span>
<span class="line"><span style="color:#F6F6F4;">                                    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">targets</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">                                        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">chrome</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">58</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span></span>
<span class="line"><span style="color:#F6F6F4;">                                        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ie</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">11</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">                                    },</span></span>
<span class="line"><span style="color:#F6F6F4;">                                    </span><span style="color:#7B7F8B;">//corejs版本</span></span>
<span class="line"><span style="color:#F6F6F4;">                                    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">corejs</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">3</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                                    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">useBuiltIns</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">usage</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">                                }</span></span>
<span class="line"><span style="color:#F6F6F4;">                            ]</span></span>
<span class="line"><span style="color:#F6F6F4;">                        ]</span></span>
<span class="line"><span style="color:#F6F6F4;">                    }</span></span>
<span class="line"><span style="color:#F6F6F4;">                },</span></span>
<span class="line"><span style="color:#F6F6F4;">                {</span></span>
<span class="line"><span style="color:#F6F6F4;">                    loader</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ts-loader</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">                }</span></span>
<span class="line"><span style="color:#F6F6F4;">            ],</span></span>
<span class="line"><span style="color:#F6F6F4;">            exclude</span><span style="color:#F286C4;">:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">node_modules</span><span style="color:#EE6666;">/</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">    ]</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F286C4;">...</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#6F42C1;">module</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">ts</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            use: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    loader: </span><span style="color:#032F62;">&quot;babel-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    options:{</span></span>
<span class="line"><span style="color:#24292E;">                        presets: [</span></span>
<span class="line"><span style="color:#24292E;">                            [</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#032F62;">&quot;@babel/preset-env&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                {	</span><span style="color:#6A737D;">//支持的目标版本</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#032F62;">&quot;targets&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">                                        </span><span style="color:#032F62;">&quot;chrome&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;58&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">                                        </span><span style="color:#032F62;">&quot;ie&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;11&quot;</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#6A737D;">//corejs版本</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#032F62;">&quot;corejs&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;3&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#032F62;">&quot;useBuiltIns&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;usage&quot;</span></span>
<span class="line"><span style="color:#24292E;">                                }</span></span>
<span class="line"><span style="color:#24292E;">                            ]</span></span>
<span class="line"><span style="color:#24292E;">                        ]</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    loader: </span><span style="color:#032F62;">&quot;ts-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">            exclude:</span><span style="color:#032F62;"> /node_modules/</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,87),e=[o];function c(t,r,y,F,i,E){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{C as __pageData,d as default};
