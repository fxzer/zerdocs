import{_ as s,o as n,c as a,a as l}from"./app.4d5976de.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"this指向","slug":"this指向","link":"#this指向","children":[]},{"level":3,"title":"可变参数 arguments","slug":"可变参数-arguments","link":"#可变参数-arguments","children":[]},{"level":3,"title":"剩余参数 ...args","slug":"剩余参数-args","link":"#剩余参数-args","children":[]},{"level":3,"title":"Map","slug":"map","link":"#map","children":[]},{"level":3,"title":"Set","slug":"set","link":"#set","children":[]},{"level":3,"title":"随机数生成","slug":"随机数生成","link":"#随机数生成","children":[]},{"level":3,"title":"时间格式化","slug":"时间格式化","link":"#时间格式化","children":[]},{"level":3,"title":"面向对象之类","slug":"面向对象之类","link":"#面向对象之类","children":[]},{"level":3,"title":"对象的结构","slug":"对象的结构","link":"#对象的结构","children":[]},{"level":3,"title":"10.new运算符","slug":"_10-new运算符","link":"#_10-new运算符","children":[]}],"relativePath":"FrontEnd/JavaScript/JS基础复习二.md"}'),p={name:"FrontEnd/JavaScript/JS基础复习二.md"},o=l(`<h3 id="this指向" tabindex="-1">this指向 <a class="header-anchor" href="#this指向" aria-hidden="true">#</a></h3><p>根据函数调用方式的不同，this的值也不同：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li>以函数形式调用，this是window</li><li>以方法形式调用, this是调用方法的对象</li><li>构造函数中，this是新建的对象</li><li>箭头函数没有自己的this, 由外层作用域决定</li><li>通过call和apply调用的函数，它们的第一个参数就是函数的this</li><li>通过bind返回的函数，this由bind第一个参数决定（无法修改）</li></ol></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">	console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">)</span><span style="color:#7B7F8B;">//window</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> obj </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">	name</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">zhansan</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">		console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">)</span><span style="color:#7B7F8B;">//obj</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn2</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">            console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">) </span><span style="color:#7B7F8B;">//window     </span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">fn3</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> ()</span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">)</span><span style="color:#7B7F8B;">//obj,与调用方式无关,指向声明时外层作用域的this</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">fn2</span><span style="color:#F6F6F4;">()</span><span style="color:#7B7F8B;">//以函数形式调用指向window</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F6F6F4;">obj.</span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">()</span><span style="color:#7B7F8B;">//以方法形式调用,指向obj</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//window</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	name:</span><span style="color:#032F62;">&#39;zhansan&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//obj</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//window     </span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">fn3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//obj,与调用方式无关,指向声明时外层作用域的this</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">()</span><span style="color:#6A737D;">//以函数形式调用指向window</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">()</span><span style="color:#6A737D;">//以方法形式调用,指向obj</span></span>
<span class="line"></span></code></pre></div><p>函数三种调用方式</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">fn.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">fn.</span><span style="color:#62E884;">apply</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">fn.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">()</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">call和bind与apply</p><ol><li><p>call 和 apply除了可以调用函数，还可以用来指定函数中的this</p><ul><li>通过call方法调用函数，函数的实参直接在第一个参数后一个一个的列出来</li><li>apply 实参需要通过一个数组传递</li></ul></li><li><p>bind() 是函数的方法，可以用来创建一个新的函数</p><ul><li>bind可以为新函数绑定this</li><li>bind可以为新函数绑定参数</li></ul></li></ol></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">fn2.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(obj, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hello</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">)</span><span style="color:#7B7F8B;">//会立即执行</span></span>
<span class="line"><span style="color:#F6F6F4;">fn2.</span><span style="color:#62E884;">apply</span><span style="color:#F6F6F4;">(obj, [</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hello</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">]</span><span style="color:#7B7F8B;">//会立即执行</span></span>
<span class="line"><span style="color:#F6F6F4;">let newfn </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> fn.</span><span style="color:#62E884;">bind</span><span style="color:#F6F6F4;">(obj, </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">20</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">30</span><span style="color:#F6F6F4;">)</span><span style="color:#7B7F8B;">//不会立即执行, 返回一个新函数 	newfn()</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">fn2.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(obj, </span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//会立即执行</span></span>
<span class="line"><span style="color:#24292E;">fn2.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(obj, [</span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">]</span><span style="color:#6A737D;">//会立即执行</span></span>
<span class="line"><span style="color:#24292E;">let newfn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn.</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">(obj, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//不会立即执行, 返回一个新函数 	newfn()</span></span>
<span class="line"></span></code></pre></div><p>箭头函数没有自身的this，它的this由定义时外层作用域决定，</p><ul><li><p>也无法通过call apply 和 bind修改它的this</p></li><li><p>箭头函数中没有arguments</p></li></ul><h3 id="可变参数-arguments" tabindex="-1">可变参数 <code>arguments</code> <a class="header-anchor" href="#可变参数-arguments" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// 定义一个函数，可以求任意个数值的和</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">sum</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#7B7F8B;">// 通过arguments，可以不受参数数量的限制更加灵活的创建函数</span></span>
<span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">/* arguments</span></span>
<span class="line"><span style="color:#7B7F8B;">    - arguments是函数中又一个隐含参数</span></span>
<span class="line"><span style="color:#7B7F8B;">    - arguments是一个类数组对象（伪数组）</span></span>
<span class="line"><span style="color:#7B7F8B;">        和数组相似，可以通过索引来读取元素，也可以通过for循环变量，							</span></span>
<span class="line"><span style="color:#7B7F8B;">        但是它不是一个数组对象，不能调用数组的方法</span></span>
<span class="line"><span style="color:#7B7F8B;">    - arguments用来存储函数的实参，</span></span>
<span class="line"><span style="color:#7B7F8B;">        无论用户是否定义形参，实参都会存储到arguments对象中</span></span>
<span class="line"><span style="color:#7B7F8B;">        可以通过该对象直接访问实参*/</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> result </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> num </span><span style="color:#F286C4;">of</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">arguments</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        result </span><span style="color:#F286C4;">+=</span><span style="color:#F6F6F4;"> num</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> result</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 定义一个函数，可以求任意个数值的和</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">// 通过arguments，可以不受参数数量的限制更加灵活的创建函数</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">/* arguments</span></span>
<span class="line"><span style="color:#6A737D;">    - arguments是函数中又一个隐含参数</span></span>
<span class="line"><span style="color:#6A737D;">    - arguments是一个类数组对象（伪数组）</span></span>
<span class="line"><span style="color:#6A737D;">        和数组相似，可以通过索引来读取元素，也可以通过for循环变量，							</span></span>
<span class="line"><span style="color:#6A737D;">        但是它不是一个数组对象，不能调用数组的方法</span></span>
<span class="line"><span style="color:#6A737D;">    - arguments用来存储函数的实参，</span></span>
<span class="line"><span style="color:#6A737D;">        无论用户是否定义形参，实参都会存储到arguments对象中</span></span>
<span class="line"><span style="color:#6A737D;">        可以通过该对象直接访问实参*/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        result </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> num</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="剩余参数-args" tabindex="-1">剩余参数 <code>...args</code> <a class="header-anchor" href="#剩余参数-args" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">sum2</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">...</span><span style="color:#FFB86C;font-style:italic;">num</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">/* </span></span>
<span class="line"><span style="color:#7B7F8B;">剩余参数，在定义函数时可以将参数指定为剩余参数</span></span>
<span class="line"><span style="color:#7B7F8B;">- 剩余参数可以接收任意数量实参，并将他们统一存储到一个数组中返回</span></span>
<span class="line"><span style="color:#7B7F8B;">- 作用和arguments基本是一致，但是也具有一些不同点：</span></span>
<span class="line"><span style="color:#7B7F8B;">    是一个数组，名字可以自己指定，配合其他参数一起使用，剩余参数写到最后。</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> num.</span><span style="color:#62E884;">reduce</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">a</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">b</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> a </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> b, </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;"> }</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn3</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">a</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">b</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">...</span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(args)</span></span>
<span class="line"><span style="color:#F6F6F4;"> }</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum2</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">num</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">剩余参数，在定义函数时可以将参数指定为剩余参数</span></span>
<span class="line"><span style="color:#6A737D;">- 剩余参数可以接收任意数量实参，并将他们统一存储到一个数组中返回</span></span>
<span class="line"><span style="color:#6A737D;">- 作用和arguments基本是一致，但是也具有一些不同点：</span></span>
<span class="line"><span style="color:#6A737D;">    是一个数组，名字可以自己指定，配合其他参数一起使用，剩余参数写到最后。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> num.</span><span style="color:#6F42C1;">reduce</span><span style="color:#24292E;">((</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn3</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(args)</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span></code></pre></div><h3 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h3><ul><li><strong>Map用来存储键值对结构的数据（key-value）</strong></li><li>Object中存储的数据就可以认为是一种键值对结构</li><li>Map和Object的主要区别： <ul><li>Object中的属性名只能是字符串或符号，如果传递了一个其他类型的属性名， JS解释器会自动将其转换为字符串</li><li>Map中任何类型的值都可以称为数据的key</li></ul></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/*属性和方法：</span></span>
<span class="line"><span style="color:#7B7F8B;">  map.size() 获取map中键值对的数量</span></span>
<span class="line"><span style="color:#7B7F8B;">  map.set(key, value) 向map中添加键值对</span></span>
<span class="line"><span style="color:#7B7F8B;">  map.get(key) 根据key获取值   </span></span>
<span class="line"><span style="color:#7B7F8B;">  map.delete(key) 删除指定数据</span></span>
<span class="line"><span style="color:#7B7F8B;">  map.has(key) 检查map中是否包含指定键</span></span>
<span class="line"><span style="color:#7B7F8B;">  map.clear() 删除全部的键值对*/</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> obj </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">孙悟空</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">age</span><span style="color:#DEE492;">&#39;</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">18</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        [</span><span style="color:#62E884;">Symbol</span><span style="color:#F6F6F4;">()]</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">哈哈</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        [obj2]</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">嘻嘻</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*属性和方法：</span></span>
<span class="line"><span style="color:#6A737D;">  map.size() 获取map中键值对的数量</span></span>
<span class="line"><span style="color:#6A737D;">  map.set(key, value) 向map中添加键值对</span></span>
<span class="line"><span style="color:#6A737D;">  map.get(key) 根据key获取值   </span></span>
<span class="line"><span style="color:#6A737D;">  map.delete(key) 删除指定数据</span></span>
<span class="line"><span style="color:#6A737D;">  map.has(key) 检查map中是否包含指定键</span></span>
<span class="line"><span style="color:#6A737D;">  map.clear() 删除全部的键值对*/</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;孙悟空&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        [</span><span style="color:#6F42C1;">Symbol</span><span style="color:#24292E;">()]:</span><span style="color:#032F62;">&quot;哈哈&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        [obj2]:</span><span style="color:#032F62;">&quot;嘻嘻&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span></code></pre></div><p><strong>将map转换为数组</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> arr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> Array.</span><span style="color:#62E884;">from</span><span style="color:#F6F6F4;">(map)</span><span style="color:#7B7F8B;">//const arr = [...map]</span></span>
<span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// 遍历map</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> [key, value] </span><span style="color:#F286C4;">of</span><span style="color:#F6F6F4;"> map) {</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> [key, value] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> entry</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(key, value)</span></span>
<span class="line"><span style="color:#F6F6F4;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    map.</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">value</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(key, value)</span></span>
<span class="line"><span style="color:#F6F6F4;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;"> map.</span><span style="color:#62E884;">keys</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> 获取map的所有的key</span></span>
<span class="line"><span style="color:#F6F6F4;"> map.</span><span style="color:#62E884;">values</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> 获取map的所有的value</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(map)</span><span style="color:#6A737D;">//const arr = [...map]</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 遍历map</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">key</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">value</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> map) {</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">key</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">value</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> entry</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(key, value)</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    map.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(key, value)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> map.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 获取map的所有的key</span></span>
<span class="line"><span style="color:#24292E;"> map.</span><span style="color:#6F42C1;">values</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 获取map的所有的value</span></span>
<span class="line"></span></code></pre></div><p><strong>数组转map</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> map2 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Map</span><span style="color:#F6F6F4;">([</span></span>
<span class="line"><span style="color:#F6F6F4;">    [</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">猪八戒</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">    [</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">age</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">18</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">    [{}, () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {}],</span></span>
<span class="line"><span style="color:#F6F6F4;">])</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">map2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;猪八戒&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&quot;age&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    [{}, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {}],</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"></span></code></pre></div><h3 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/* - 使用方式：</span></span>
<span class="line"><span style="color:#7B7F8B;">    创建</span></span>
<span class="line"><span style="color:#7B7F8B;">        - new Set()</span></span>
<span class="line"><span style="color:#7B7F8B;">        - new Set([...])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">    方法</span></span>
<span class="line"><span style="color:#7B7F8B;">        size 获取数量</span></span>
<span class="line"><span style="color:#7B7F8B;">        add() 添加元素</span></span>
<span class="line"><span style="color:#7B7F8B;">        has() 检查元素</span></span>
<span class="line"><span style="color:#7B7F8B;">        delete() 删除元素</span></span>
<span class="line"><span style="color:#7B7F8B;">        [...set]转为数组获取元素 </span></span>
<span class="line"><span style="color:#7B7F8B;">        set.entries() 得到键值对(键值对一样)</span></span>
<span class="line"><span style="color:#7B7F8B;">        */</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* - 使用方式：</span></span>
<span class="line"><span style="color:#6A737D;">    创建</span></span>
<span class="line"><span style="color:#6A737D;">        - new Set()</span></span>
<span class="line"><span style="color:#6A737D;">        - new Set([...])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    方法</span></span>
<span class="line"><span style="color:#6A737D;">        size 获取数量</span></span>
<span class="line"><span style="color:#6A737D;">        add() 添加元素</span></span>
<span class="line"><span style="color:#6A737D;">        has() 检查元素</span></span>
<span class="line"><span style="color:#6A737D;">        delete() 删除元素</span></span>
<span class="line"><span style="color:#6A737D;">        [...set]转为数组获取元素 </span></span>
<span class="line"><span style="color:#6A737D;">        set.entries() 得到键值对(键值对一样)</span></span>
<span class="line"><span style="color:#6A737D;">        */</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="随机数生成" tabindex="-1">随机数生成 <a class="header-anchor" href="#随机数生成" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> Math.</span><span style="color:#62E884;">random</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">--&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#7B7F8B;">//生成 0-x之间的随机数：</span></span>
<span class="line"><span style="color:#F6F6F4;">Math.</span><span style="color:#62E884;">round</span><span style="color:#F6F6F4;">(Math.</span><span style="color:#62E884;">random</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> x)</span></span>
<span class="line"><span style="color:#F6F6F4;">Math.</span><span style="color:#62E884;">floor</span><span style="color:#F6F6F4;">(Math.</span><span style="color:#62E884;">random</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> (x </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//生成 x-y 之间的随机数</span></span>
<span class="line"><span style="color:#F6F6F4;">Math.</span><span style="color:#62E884;">round</span><span style="color:#F6F6F4;">(Math.</span><span style="color:#62E884;">random</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> (y</span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;">x) </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> x)</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">--&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;">//生成 0-x之间的随机数：</span></span>
<span class="line"><span style="color:#24292E;">Math.</span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">(Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> x)</span></span>
<span class="line"><span style="color:#24292E;">Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> (x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//生成 x-y 之间的随机数</span></span>
<span class="line"><span style="color:#24292E;">Math.</span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">(Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> (y</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> x)</span></span>
<span class="line"></span></code></pre></div><h3 id="时间格式化" tabindex="-1">时间格式化 <a class="header-anchor" href="#时间格式化" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> d </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Date</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> result </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> d.</span><span style="color:#62E884;">toLocaleDateString</span><span style="color:#F6F6F4;">() </span><span style="color:#7B7F8B;">// 将日期转换为本地的字符串		&#39;2021/10/1</span></span>
<span class="line"><span style="color:#F6F6F4;">result </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> d.</span><span style="color:#62E884;">toLocaleTimeString</span><span style="color:#F6F6F4;">() </span><span style="color:#7B7F8B;">// 将时间转换为本地的字符串 	&#39;21:32:35&#39;</span></span>
<span class="line"><span style="color:#7B7F8B;">/*   - 参数：</span></span>
<span class="line"><span style="color:#7B7F8B;">1. locales: 描述语言和国家信息的字符串</span></span>
<span class="line"><span style="color:#7B7F8B;">    zh-CN 中文中国</span></span>
<span class="line"><span style="color:#7B7F8B;">    zh-HK 中文香港</span></span>
<span class="line"><span style="color:#7B7F8B;">    en-US 英文美国</span></span>
<span class="line"><span style="color:#7B7F8B;">2. options: 需要一个对象作为参数，在对象中可以通过对象的属性来对日期的格式进行配置</span></span>
<span class="line"><span style="color:#7B7F8B;">*/</span></span>
<span class="line"><span style="color:#F6F6F4;">  result </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> d.</span><span style="color:#62E884;">toLocaleString</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">zh-CN</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">    year</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">numeric</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    month</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">long</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    day</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">2-digit</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    weekday</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">short</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    hour</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">2-digit</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    minute</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">2-digit</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">d</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> d.</span><span style="color:#6F42C1;">toLocaleDateString</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 将日期转换为本地的字符串		&#39;2021/10/1</span></span>
<span class="line"><span style="color:#24292E;">result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> d.</span><span style="color:#6F42C1;">toLocaleTimeString</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 将时间转换为本地的字符串 	&#39;21:32:35&#39;</span></span>
<span class="line"><span style="color:#6A737D;">/*   - 参数：</span></span>
<span class="line"><span style="color:#6A737D;">1. locales: 描述语言和国家信息的字符串</span></span>
<span class="line"><span style="color:#6A737D;">    zh-CN 中文中国</span></span>
<span class="line"><span style="color:#6A737D;">    zh-HK 中文香港</span></span>
<span class="line"><span style="color:#6A737D;">    en-US 英文美国</span></span>
<span class="line"><span style="color:#6A737D;">2. options: 需要一个对象作为参数，在对象中可以通过对象的属性来对日期的格式进行配置</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#24292E;">  result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> d.</span><span style="color:#6F42C1;">toLocaleString</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;zh-CN&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    year: </span><span style="color:#032F62;">&quot;numeric&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    month: </span><span style="color:#032F62;">&quot;long&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    day: </span><span style="color:#032F62;">&quot;2-digit&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    weekday: </span><span style="color:#032F62;">&quot;short&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    hour: </span><span style="color:#032F62;">&quot;2-digit&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    minute: </span><span style="color:#032F62;">&quot;2-digit&quot;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="面向对象之类" tabindex="-1">面向对象之类 <a class="header-anchor" href="#面向对象之类" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">	 </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">gender</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// console.log(&quot;构造函数执行了~&quot;, name, age, gender)</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 可以在构造函数中，为实例属性进行赋值</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 在构造函数中，this表示当前所创建的对象</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.age </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> age</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.gender </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> gender</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// sayHello = function(){} // 添加方法的一种方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">大家好，我是</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name)</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#7B7F8B;">// 添加方法（实例方法） 实例方法中this就是当前实例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">test</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">我是静态方法</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#7B7F8B;">// 静态方法（类方法） 通过类来调用 静态方法中this指向的是当前类</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	 </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#24292E;">, </span><span style="color:#E36209;">gender</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(&quot;构造函数执行了~&quot;, name, age, gender)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 可以在构造函数中，为实例属性进行赋值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 在构造函数中，this表示当前所创建的对象</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gender </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> gender</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// sayHello = function(){} // 添加方法的一种方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;大家好，我是&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name)</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#6A737D;">// 添加方法（实例方法） 实例方法中this就是当前实例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;我是静态方法&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#6A737D;">// 静态方法（类方法） 通过类来调用 静态方法中this指向的是当前类</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>面向对象的特点：封装、继承和多态</strong></p><blockquote><p>封装 —— 安全性 继承 —— 扩展性 多态 —— 灵活性</p></blockquote><h4 id="封装" tabindex="-1">封装 <a class="header-anchor" href="#封装" aria-hidden="true">#</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li>对象就是一个用来存储不同属性的容器</li><li>对象不仅存储属性，还要负责数据的安全, 直接添加到对象中的属性，并不安全，因为它们可以被任意的修改</li><li>如何确保数据的安全： <ul><li>私有化数据: 将需要保护的数据设置为私有，只能在类内部使用</li><li>提供setter和getter方法来开放对数据的操作</li><li>属性设置私有，通过getter setter方法操作属性带来的好处 <ol><li>可以控制属性的读写权限</li><li>可以在方法中对属性的值进行验证</li></ol></li></ul></li></ol></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> 实现封装的方式：</span></span>
<span class="line"><span style="color:#F6F6F4;">    1.属性私有化 加#</span></span>
<span class="line"><span style="color:#F6F6F4;">    2.通过getter和setter方法来操作属性</span></span>
<span class="line"><span style="color:#F6F6F4;">        get </span><span style="color:#62E884;">属性名</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.#属性</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        set </span><span style="color:#62E884;">属性名</span><span style="color:#F6F6F4;">(参数){</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.#属性 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> 参数</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 实现封装的方式：</span></span>
<span class="line"><span style="color:#24292E;">    1.属性私有化 加#</span></span>
<span class="line"><span style="color:#24292E;">    2.通过getter和setter方法来操作属性</span></span>
<span class="line"><span style="color:#24292E;">        get </span><span style="color:#6F42C1;">属性名</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#属性</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        set </span><span style="color:#6F42C1;">属性名</span><span style="color:#24292E;">(参数){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#属性 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> 参数</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">	 #name</span><span style="color:#7B7F8B;">//实例使用#开头就变成了私有属性，私有属性只能在类内部访问</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">gender</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.#name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">            console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.#name)</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;"> </span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">getName</span><span style="color:#F6F6F4;">(){</span><span style="color:#7B7F8B;">// getter方法，用p.getName()来读取属性</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.#name</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// setter方法，用来设置属性,p.setName(&#39;zhangsan&#39;)</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">setName</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.#name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">get</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">name</span><span style="color:#F6F6F4;">(){</span><span style="color:#7B7F8B;">//简化读取方式:p.name</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.#name</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">set</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">name</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">gender</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.#name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	 #name</span><span style="color:#6A737D;">//实例使用#开头就变成了私有属性，私有属性只能在类内部访问</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#24292E;">, </span><span style="color:#E36209;">gender</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#name)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">(){</span><span style="color:#6A737D;">// getter方法，用p.getName()来读取属性</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#name</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// setter方法，用来设置属性,p.setName(&#39;zhangsan&#39;)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setName</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">get</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">(){</span><span style="color:#6A737D;">//简化读取方式:p.name</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#name</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">(</span><span style="color:#E36209;">gender</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span></code></pre></div><h4 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-hidden="true">#</a></h4><div class="tip custom-block"><p class="custom-block-title">继承</p><ul><li>可以通过extends关键来完成继承 时，就相当于将另一个类中的代码复制到了当前类中（简单理解）</li><li>继承发生时，被继承的类称为 父类（超类），继承的类称为 子类 的代码，并且可以在不修改一个类的前提对其进行扩展</li></ul></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Animal</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">动物在叫~</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Dog</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Animal</span><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 重写构造函数</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">age</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 重写构造函数时，构造函数的第一行代码必须为super()</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">super</span><span style="color:#F6F6F4;">(name) </span><span style="color:#7B7F8B;">// 调用父类的构造函数</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.age </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> age</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#7B7F8B;">// 在子类中，可以通过创建同名方法来重写父类的方法</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">        console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">汪汪汪</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> dog </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Dog</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">旺财</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">dog.</span><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;动物在叫~&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 重写构造函数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 重写构造函数时，构造函数的第一行代码必须为super()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(name) </span><span style="color:#6A737D;">// 调用父类的构造函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 在子类中，可以通过创建同名方法来重写父类的方法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;汪汪汪&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dog</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;旺财&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">dog.</span><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">()</span></span>
<span class="line"></span></code></pre></div><h4 id="多态" tabindex="-1">多态 <a class="header-anchor" href="#多态" aria-hidden="true">#</a></h4><p>在JS中不会检查参数的类型，所以这就意味着任何数据都可以作为参数传递 指定的类型，只要对象满足某些条件即可</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">obj</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;"> console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Hello,</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;">obj.name)</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#7B7F8B;">//只要参数有obj.name就可以调用</span></span>
<span class="line"><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">(dog)</span></span>
<span class="line"><span style="color:#62E884;">sayHello</span><span style="color:#F6F6F4;">(person)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">(</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello,&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">obj.name)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">//只要参数有obj.name就可以调用</span></span>
<span class="line"><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">(dog)</span></span>
<span class="line"><span style="color:#6F42C1;">sayHello</span><span style="color:#24292E;">(person)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="对象的结构" tabindex="-1">对象的结构 <a class="header-anchor" href="#对象的结构" aria-hidden="true">#</a></h3><h4 id="原型" tabindex="-1">原型 <a class="header-anchor" href="#原型" aria-hidden="true">#</a></h4><p>对象中存储属性的区域实际有两个：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li><p>对象自身</p><ul><li>直接通过对象所添加的属性，位于对象自身中</li><li>在<strong>类</strong>中通过 x = y 的形式添加的属性，位于对象自身中</li></ul></li><li><p>原型对象（prototype）</p><ul><li>对象中还有一些内容，会存储到其他的对象里（原型对象）</li><li>在对象中会有一个属性用来存储原型对象，这个属性叫做<code>__proto__</code></li><li>原型对象也负责为对象存储属性，<br> 当我们访问对象中的属性时，会优先访问对象自身的属性，<br> 对象自身不包含该属性时，才会去原型对象中寻找</li><li>会添加到原型对象中的情况： <ol><li>在类中通过xxx(){}方式添加的方法，位于原型中</li><li>主动向原型中添加的属性或方法</li></ol></li></ul></li><li><p>访问一个对象的原型对象</p><ul><li><code>obj.__proto__</code></li><li><code>Object.getPrototypeOf(对象)</code></li></ul></li><li><p>原型对象中的数据：</p><ul><li>对象中的数据（属性、方法等）</li><li>constructor （对象的构造函数）</li></ul></li></ol><p><strong>原型链:</strong> 原型对象也有原型，这样就构成了一条原型链，根据对象的复杂程度不同，原型链的长度也不同 obj对象的原型链：obj对象 --&gt; 原型 --&gt; null</p></div><h4 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">原型链属性查找规则</p><ol><li>读取对象属性时，会优先对象自身属性，</li><li>如果对象中有，则使用，没有则去对象的原型中寻找</li><li>如果原型中有，则使用，没有则去原型的原型中寻找</li><li>直到找到<code>Object</code>对象的原型（Object的原型没有原型（为<code>null</code>））</li><li>如果依然没有找到，则返回<code>undefined</code></li></ol></div><div class="tip custom-block"><p class="custom-block-title">原型的作用：</p><ol><li>原型就相当于是一个公共的区域，可以被所有该类实例访问，</li><li>可以将该类实例中，所有的公共属性（方法）统一存储到原型中</li><li>这样我们只需要创建一个属性，即可被所有实例访问</li><li>一修改就是修改所有实例的原型</li><li>无需创建实例即可完成对类的修改</li></ol></div><h4 id="修改原型" tabindex="-1">修改原型 <a class="header-anchor" href="#修改原型" aria-hidden="true">#</a></h4><div class="warning custom-block"><p class="custom-block-title">原则</p><ol><li>原型尽量不要手动改</li><li>要改也不要通过实例对象去改</li><li>通过 类.prototype 属性去修改</li><li>最好不要直接给prototype去赋值</li></ol></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Person</span><span style="color:#F6F6F4;">.prototype.</span><span style="color:#62E884;">fly</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {	</span><span style="color:#7B7F8B;">//在原型添加方法</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">我在飞！</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#005CC5;">Person</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">fly</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {	</span><span style="color:#6A737D;">//在原型添加方法</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;我在飞！&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="instanceof-in-hasown" tabindex="-1">instanceof/in/hasOwn <a class="header-anchor" href="#instanceof-in-hasown" aria-hidden="true">#</a></h4><blockquote><p>用于检查的是对象的原型链上是否有该类 <code>dog instanceof Animal</code></p></blockquote><div class="info custom-block"><p class="custom-block-title">检查对象属性</p><ul><li>in:使用in运算符检查属性时，无论属性在对象自身还是在原型中，都会返回true</li><li>对象.hasOwnProperty(属性名):用来检查一个对象的 自身 是否含有某个属性</li><li>Object.hasOwn(对象, 属性名):用来检查一个对象的 自身 是否含有某个属性</li></ul></div><h3 id="_10-new运算符" tabindex="-1">10.new运算符 <a class="header-anchor" href="#_10-new运算符" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">new运算符是创建对象时，将会发生这4件事：</p><ol><li><p>创建一个普通的JS对象（<code>Object</code>对象 {}）, 称其为新对象</p></li><li><p>将构造函数的<code>prototype</code>属性设置为新对象的原型</p></li><li><p>使用实参来执行构造函数，并且将新对象设置为函数中的<code>this</code></p></li><li><p>如果构造函数返回的是一个<strong>非原始值</strong>，则该值会作为new运算的返回值返回</p><p>如果构造函数的返回值是一个<strong>原始值</strong>或者<strong>没有指定返回值</strong>(<code>undefined</code>)</p><p>则<em>新的对象</em>将会作为返回值返回（通常不会为构造函数指定返回值）</p></li></ol></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">MyClass</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#7B7F8B;">// let newInstance = {}</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#7B7F8B;">// newInstance.__proto__ = MyClass.prototype</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#7B7F8B;">// this = newInstance</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#7B7F8B;">// return newInstance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">     }</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyClass</span><span style="color:#24292E;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// let newInstance = {}</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// newInstance.__proto__ = MyClass.prototype</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// this = newInstance</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// return newInstance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><strong>对象的分类</strong>：</p><ol><li><strong>内建对象</strong>: 由ES标准所定义的对象</li><li><strong>宿主对象</strong>: 由浏览器提供的对象</li><li><strong>自定义对象</strong>: 由开发人员自己创建的对象(Vue, React)</li></ol>`,59),e=[o];function c(t,r,y,F,i,E){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{u as __pageData,h as default};
