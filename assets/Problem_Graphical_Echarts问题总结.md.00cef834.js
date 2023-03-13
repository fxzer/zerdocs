import{_ as s,o as n,c as a,a as l}from"./app.4d5976de.js";const h=JSON.parse('{"title":"Echarts问题总结","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、屏幕适配问题","slug":"一、屏幕适配问题","link":"#一、屏幕适配问题","children":[]},{"level":2,"title":"二、左侧菜单折叠响应式","slug":"二、左侧菜单折叠响应式","link":"#二、左侧菜单折叠响应式","children":[]}],"relativePath":"Problem/Graphical/Echarts问题总结.md"}'),p={name:"Problem/Graphical/Echarts问题总结.md"},o=l(`<h1 id="echarts问题总结" tabindex="-1">Echarts问题总结 <a class="header-anchor" href="#echarts问题总结" aria-hidden="true">#</a></h1><h2 id="一、屏幕适配问题" tabindex="-1">一、屏幕适配问题 <a class="header-anchor" href="#一、屏幕适配问题" aria-hidden="true">#</a></h2><blockquote><p>方案一: 使用<code>scss</code>函数计算比例</p></blockquote><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//默认设计稿的宽度</span></span>
<span class="line"><span style="color:#F6F6F4;">$designWidth</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">1920</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#7B7F8B;">//默认设计稿的高度</span></span>
<span class="line"><span style="color:#F6F6F4;">$designHeight</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">1080</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//px转为vw的函数</span></span>
<span class="line"><span style="color:#F286C4;">@function</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">vw</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">$px</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">@return</span><span style="color:#F6F6F4;"> math.</span><span style="color:#97E1F1;">div</span><span style="color:#F6F6F4;">($px , $designWidth) </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">100</span><span style="color:#F286C4;">vw</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//px转为vh的函数</span></span>
<span class="line"><span style="color:#F286C4;">@function</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">vh</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">$px</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">@return</span><span style="color:#F6F6F4;"> math.</span><span style="color:#97E1F1;">div</span><span style="color:#F6F6F4;">($px , $designHeight) </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">100</span><span style="color:#F286C4;">vh</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//默认设计稿的宽度</span></span>
<span class="line"><span style="color:#E36209;">$designWidth</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">1920</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//默认设计稿的高度</span></span>
<span class="line"><span style="color:#E36209;">$designHeight</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">1080</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//px转为vw的函数</span></span>
<span class="line"><span style="color:#D73A49;">@function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vw</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@return</span><span style="color:#24292E;"> </span><span style="color:#E36209;">math</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">div</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$px</span><span style="color:#24292E;"> , </span><span style="color:#E36209;">$designWidth</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">vw</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//px转为vh的函数</span></span>
<span class="line"><span style="color:#D73A49;">@function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vh</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@return</span><span style="color:#24292E;"> </span><span style="color:#E36209;">math</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">div</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$px</span><span style="color:#24292E;"> , </span><span style="color:#E36209;">$designHeight</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">vh</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="二、左侧菜单折叠响应式" tabindex="-1">二、左侧菜单折叠响应式 <a class="header-anchor" href="#二、左侧菜单折叠响应式" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">mounted</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#7B7F8B;">// 监听窗口大小,所有echart实例尺寸尺寸改变</span></span>
<span class="line"><span style="color:#F6F6F4;">    window.</span><span style="color:#62E884;">addEventListener</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">resize</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.chartsInstance.</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">chart</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        chart.</span><span style="color:#62E884;">resize</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">    });</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//监听div容器的无效</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#7B7F8B;">/*this.$refs.onlineIspRef.addEventListener(&quot;resize&quot;,() =&gt; {</span></span>
<span class="line"><span style="color:#7B7F8B;">      this.chartsInstance.forEach(chart =&gt; {</span></span>
<span class="line"><span style="color:#7B7F8B;">        chart.resize()</span></span>
<span class="line"><span style="color:#7B7F8B;">      });</span></span>
<span class="line"><span style="color:#7B7F8B;">    })*/</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">// 监听窗口大小,所有echart实例尺寸尺寸改变</span></span>
<span class="line"><span style="color:#24292E;">    window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;resize&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartsInstance.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">chart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        chart.</span><span style="color:#6F42C1;">resize</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//监听div容器的无效</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">/*this.$refs.onlineIspRef.addEventListener(&quot;resize&quot;,() =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">      this.chartsInstance.forEach(chart =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">        chart.resize()</span></span>
<span class="line"><span style="color:#6A737D;">      });</span></span>
<span class="line"><span style="color:#6A737D;">    })*/</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>方案: 侧边栏按钮点击展开/折叠时, 手动触发<code>window.resize</code></p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">toggleLeftMenu</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">      Cookies.</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">sidebar</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.leftMenuOpen </span><span style="color:#F286C4;">?</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">close</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">open</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">});</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.$store.</span><span style="color:#62E884;">commit</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">toggleLeftMenu</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">!</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.leftMenuOpen);</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">doResize</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#62E884;">doResize</span><span style="color:#F6F6F4;">(){ </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> ev </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Event</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">resize</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">bubbles</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">cancelable</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">});</span></span>
<span class="line"><span style="color:#F6F6F4;">          window.</span><span style="color:#62E884;">dispatchEvent</span><span style="color:#F6F6F4;">(ev);</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span><span style="color:#BF9EEE;">120</span><span style="color:#F6F6F4;">);</span><span style="color:#7B7F8B;">//不使用定时器没反应</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//有效, 而且提示event.initEvent方法已经过时(deprecated)</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//但是折线图左侧收缩/延伸会有抖动问题,需要调节定时器时间使比较不突兀</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">/*setTimeout(function(){</span></span>
<span class="line"><span style="color:#7B7F8B;">      if(document.createEvent) {</span></span>
<span class="line"><span style="color:#7B7F8B;">          var event = document.createEvent(&quot;HTMLEvents&quot;);</span></span>
<span class="line"><span style="color:#7B7F8B;">          event.initEvent(&quot;resize&quot;, true, true);</span></span>
<span class="line"><span style="color:#7B7F8B;">          window.dispatchEvent(event);</span></span>
<span class="line"><span style="color:#7B7F8B;">      } else if(document.createEventObject) {</span></span>
<span class="line"><span style="color:#7B7F8B;">          window.fireEvent(&quot;onresize&quot;);</span></span>
<span class="line"><span style="color:#7B7F8B;">      }</span></span>
<span class="line"><span style="color:#7B7F8B;">  },120);*/</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">},</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toggleLeftMenu</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      Cookies.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;sidebar&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.leftMenuOpen </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;close&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;open&#39;</span><span style="color:#24292E;">, {path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;toggleLeftMenu&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.leftMenuOpen);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">doResize</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6F42C1;">doResize</span><span style="color:#24292E;">(){ </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> ev </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Event</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;resize&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;bubbles&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;cancelable&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">          window.</span><span style="color:#6F42C1;">dispatchEvent</span><span style="color:#24292E;">(ev);</span></span>
<span class="line"><span style="color:#24292E;">      },</span><span style="color:#005CC5;">120</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">//不使用定时器没反应</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//有效, 而且提示event.initEvent方法已经过时(deprecated)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//但是折线图左侧收缩/延伸会有抖动问题,需要调节定时器时间使比较不突兀</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/*setTimeout(function(){</span></span>
<span class="line"><span style="color:#6A737D;">      if(document.createEvent) {</span></span>
<span class="line"><span style="color:#6A737D;">          var event = document.createEvent(&quot;HTMLEvents&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">          event.initEvent(&quot;resize&quot;, true, true);</span></span>
<span class="line"><span style="color:#6A737D;">          window.dispatchEvent(event);</span></span>
<span class="line"><span style="color:#6A737D;">      } else if(document.createEventObject) {</span></span>
<span class="line"><span style="color:#6A737D;">          window.fireEvent(&quot;onresize&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">      }</span></span>
<span class="line"><span style="color:#6A737D;">  },120);*/</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function t(c,r,y,F,i,E){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{h as __pageData,u as default};
