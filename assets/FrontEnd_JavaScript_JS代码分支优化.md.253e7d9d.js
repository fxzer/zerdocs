import{_ as s,o as n,c as a,a as l}from"./app.4d5976de.js";const D=JSON.parse('{"title":"if else 多分支优化","description":"","frontmatter":{},"headers":[{"level":2,"title":"简单分支","slug":"简单分支","link":"#简单分支","children":[]},{"level":2,"title":"条件单一,处理不同","slug":"条件单一-处理不同","link":"#条件单一-处理不同","children":[]},{"level":2,"title":"条件复杂,处理也复杂","slug":"条件复杂-处理也复杂","link":"#条件复杂-处理也复杂","children":[]}],"relativePath":"FrontEnd/JavaScript/JS代码分支优化.md"}'),p={name:"FrontEnd/JavaScript/JS代码分支优化.md"},o=l(`<h1 id="if-else-多分支优化" tabindex="-1">if else 多分支优化 <a class="header-anchor" href="#if-else-多分支优化" aria-hidden="true">#</a></h1><h2 id="简单分支" tabindex="-1">简单分支 <a class="header-anchor" href="#简单分支" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//优化前</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">speak</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;">(name</span><span style="color:#F286C4;">===</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">老牛</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">老牛哞哞叫</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;">(name</span><span style="color:#F286C4;">===</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">老虎</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">老牛嗷嗷叫</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;">(name</span><span style="color:#F286C4;">===</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">老鸡</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">老牛咯咯叫</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//优化后</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">speak</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> map </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    老牛</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">老牛哞哞叫</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    老虎</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">老虎嗷嗷叫</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    老鸡</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">老鸡咯咯叫</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">   }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;">(map[name]){</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(map[name])</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">不知道怎么叫</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#62E884;">speak</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">老牛</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//优化前</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">speak</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(name</span><span style="color:#D73A49;">===</span><span style="color:#032F62;">&#39;老牛&#39;</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;老牛哞哞叫&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(name</span><span style="color:#D73A49;">===</span><span style="color:#032F62;">&#39;老虎&#39;</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;老牛嗷嗷叫&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(name</span><span style="color:#D73A49;">===</span><span style="color:#032F62;">&#39;老鸡&#39;</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;老牛咯咯叫&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//优化后</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">speak</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">map</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    老牛:</span><span style="color:#032F62;">&#39;老牛哞哞叫&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    老虎:</span><span style="color:#032F62;">&#39;老虎嗷嗷叫&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    老鸡:</span><span style="color:#032F62;">&#39;老鸡咯咯叫&#39;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(map[name]){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(map[name])</span></span>
<span class="line"><span style="color:#24292E;">  }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;不知道怎么叫&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">speak</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;老牛&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="条件单一-处理不同" tabindex="-1">条件单一,处理不同 <a class="header-anchor" href="#条件单一-处理不同" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">speak</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> map </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">老牛</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;">  { </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;"> },</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">老虎</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;">  { </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;"> },</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">老鸡</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;">  { </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;"> }</span></span>
<span class="line"><span style="color:#F6F6F4;">   }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;">(map[name]){</span></span>
<span class="line"><span style="color:#F6F6F4;">     map[name]()</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">xxx</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">speak</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">map</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">老牛</span><span style="color:#24292E;">:() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">  { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">老虎</span><span style="color:#24292E;">:() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">  { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">老鸡</span><span style="color:#24292E;">:() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">  { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(map[name]){</span></span>
<span class="line"><span style="color:#24292E;">     map[name]()</span></span>
<span class="line"><span style="color:#24292E;">  }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;xxx&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="条件复杂-处理也复杂" tabindex="-1">条件复杂,处理也复杂 <a class="header-anchor" href="#条件复杂-处理也复杂" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">speak</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> arr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [  </span><span style="color:#7B7F8B;">//条件,处理映射</span></span>
<span class="line"><span style="color:#F6F6F4;">    [</span></span>
<span class="line"><span style="color:#F6F6F4;">      () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;">  { </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;"> },</span><span style="color:#7B7F8B;">//条件1</span></span>
<span class="line"><span style="color:#F6F6F4;">      () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;">  { </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;"> } </span><span style="color:#7B7F8B;">//处理函数1</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"><span style="color:#F6F6F4;">    [</span></span>
<span class="line"><span style="color:#F6F6F4;">      () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;">  { </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;"> },</span><span style="color:#7B7F8B;">//条件2</span></span>
<span class="line"><span style="color:#F6F6F4;">      () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;">  { </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;"> } </span><span style="color:#7B7F8B;">//处理函数2</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"><span style="color:#F6F6F4;">    [</span></span>
<span class="line"><span style="color:#F6F6F4;">      () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;">  { </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;"> },</span><span style="color:#7B7F8B;">//条件3</span></span>
<span class="line"><span style="color:#F6F6F4;">      () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;">  { </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;"> } </span><span style="color:#7B7F8B;">//处理函数4</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"><span style="color:#F6F6F4;">   ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> target </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> arr.</span><span style="color:#62E884;">find</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">item</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> item[</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">]())</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;">(target){</span></span>
<span class="line"><span style="color:#F6F6F4;">     target[</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">]()</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">xxx</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">speak</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [  </span><span style="color:#6A737D;">//条件,处理映射</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">      () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">  { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> },</span><span style="color:#6A737D;">//条件1</span></span>
<span class="line"><span style="color:#24292E;">      () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">  { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> } </span><span style="color:#6A737D;">//处理函数1</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">      () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">  { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> },</span><span style="color:#6A737D;">//条件2</span></span>
<span class="line"><span style="color:#24292E;">      () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">  { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> } </span><span style="color:#6A737D;">//处理函数2</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">      () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">  { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> },</span><span style="color:#6A737D;">//条件3</span></span>
<span class="line"><span style="color:#24292E;">      () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">  { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> } </span><span style="color:#6A737D;">//处理函数4</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">   ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">target</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]())</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(target){</span></span>
<span class="line"><span style="color:#24292E;">     target[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]()</span></span>
<span class="line"><span style="color:#24292E;">  }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;xxx&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function c(t,r,y,F,E,i){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{D as __pageData,d as default};
