import{_ as s,o as n,c as a,a as l}from"./app.4d5976de.js";const u=JSON.parse('{"title":"网络拓扑图代码","description":"","frontmatter":{},"headers":[{"level":2,"title":"图实例化","slug":"图实例化","link":"#图实例化","children":[]},{"level":2,"title":"注册节点","slug":"注册节点","link":"#注册节点","children":[]}],"relativePath":"Problem/Graphical/Antv代码片段集锦.md"}'),p={name:"Problem/Graphical/Antv代码片段集锦.md"},o=l(`<h1 id="网络拓扑图代码" tabindex="-1">网络拓扑图代码 <a class="header-anchor" href="#网络拓扑图代码" aria-hidden="true">#</a></h1><h2 id="图实例化" tabindex="-1">图实例化 <a class="header-anchor" href="#图实例化" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { commonRegister ,viewRegister} </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./registerElements.js</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//1.初始化实例</span></span>
<span class="line"><span style="color:#F6F6F4;">initChart() {</span></span>
<span class="line"><span style="color:#F6F6F4;">  let halfWidth = this.width / 2;</span></span>
<span class="line"><span style="color:#F6F6F4;">  let halfHeight = this.height / 2;</span></span>
<span class="line"><span style="color:#F6F6F4;">  if (!this.graph) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    commonRegister()</span></span>
<span class="line"><span style="color:#F6F6F4;">    viewRegister()</span></span>
<span class="line"><span style="color:#F6F6F4;">    const toolbar = new G6.ToolBar({</span></span>
<span class="line"><span style="color:#F6F6F4;">      position: { x: 10, y: 10 },</span></span>
<span class="line"><span style="color:#F6F6F4;">      getContent: () =&gt; {</span></span>
<span class="line"><span style="color:#F6F6F4;">         const outDiv = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#F6F6F4;">          let style = &#39;cursor: pointer;vertical-align: middle;line-height:24px;font-size:18px;&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">          outDiv.innerHTML = \`&lt;ul&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">              &lt;li code=&#39;zoomOut&#39; style=&quot;\${style}</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;"> class=</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">iconfont icon-fangda</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;"> title=</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">放大</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&gt;&lt;/li</span><span style="color:#EE6666;font-style:italic;text-decoration:underline;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">              &lt;li code=</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">zoomIn</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">  style=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">\${style}</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> class=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">iconfont icon-suoxiao</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> title=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">缩小</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">              &lt;li code=</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">autoZoom</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> style=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">\${style}</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> class=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">iconfont icon-fitscreen24</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> title=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">居中</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">            &lt;/ul&gt;</span><span style="color:#E7EE98;">\`</span></span>
<span class="line"><span style="color:#E7EE98;">          return outDiv</span></span>
<span class="line"><span style="color:#E7EE98;">      },</span></span>
<span class="line"><span style="color:#E7EE98;">     handleClick: (code) =&gt; {</span></span>
<span class="line"><span style="color:#E7EE98;">          if (code === &#39;zoomOut&#39;) {</span></span>
<span class="line"><span style="color:#E7EE98;">             toolbar.zoomOut()</span></span>
<span class="line"><span style="color:#E7EE98;">          } else if (code === &#39;zoomIn&#39;) {</span></span>
<span class="line"><span style="color:#E7EE98;">             toolbar.zoomIn()</span></span>
<span class="line"><span style="color:#E7EE98;">          }else if(code === &#39;autoZoom&#39;){</span></span>
<span class="line"><span style="color:#E7EE98;">             toolbar.autoZoom()</span></span>
<span class="line"><span style="color:#E7EE98;">          }</span></span>
<span class="line"><span style="color:#E7EE98;">        }</span></span>
<span class="line"><span style="color:#E7EE98;">    });</span></span>
<span class="line"><span style="color:#E7EE98;">    this.graph = new G6.Graph({</span></span>
<span class="line"><span style="color:#E7EE98;">      container: &quot;topoChart&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">      width: this.width,</span></span>
<span class="line"><span style="color:#E7EE98;">      height: this.height,</span></span>
<span class="line"><span style="color:#E7EE98;">      fitView: true,</span></span>
<span class="line"><span style="color:#E7EE98;">      fitViewPadding: 100,</span></span>
<span class="line"><span style="color:#E7EE98;">      groupByTypes: false,</span></span>
<span class="line"><span style="color:#E7EE98;">      linkCenter: false,</span></span>
<span class="line"><span style="color:#E7EE98;">      layout: {</span></span>
<span class="line"><span style="color:#E7EE98;">        pipes: [</span></span>
<span class="line"><span style="color:#E7EE98;">          {</span></span>
<span class="line"><span style="color:#E7EE98;">            // 该子图所使用的布局类型</span></span>
<span class="line"><span style="color:#E7EE98;">            type: &quot;circular&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">            center: [halfWidth, halfHeight],</span></span>
<span class="line"><span style="color:#E7EE98;">            radius: 80,</span></span>
<span class="line"><span style="color:#E7EE98;">            nodesFilter: (node) =&gt; node.sysType === &quot;vpe&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">          },</span></span>
<span class="line"><span style="color:#E7EE98;">        ],</span></span>
<span class="line"><span style="color:#E7EE98;">      },</span></span>
<span class="line"><span style="color:#E7EE98;">      //交互行为相关配置</span></span>
<span class="line"><span style="color:#E7EE98;">      modes: {</span></span>
<span class="line"><span style="color:#E7EE98;">        default: [&quot;drag-canvas&quot;, &quot;zoom-canvas&quot;, {type: &quot;drag-combo&quot;, shouldEnd(e, parent) {</span></span>
<span class="line"><span style="color:#E7EE98;">          if(parent) {</span></span>
<span class="line"><span style="color:#E7EE98;">            return false;</span></span>
<span class="line"><span style="color:#E7EE98;">          }</span></span>
<span class="line"><span style="color:#E7EE98;">          return true;</span></span>
<span class="line"><span style="color:#E7EE98;">        }}],</span></span>
<span class="line"><span style="color:#E7EE98;">      },</span></span>
<span class="line"><span style="color:#E7EE98;">      plugins: [toolbar],</span></span>
<span class="line"><span style="color:#E7EE98;">      defaultNode: {</span></span>
<span class="line"><span style="color:#E7EE98;">        type: &quot;bubble&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">        labelCfg: {</span></span>
<span class="line"><span style="color:#E7EE98;">          position: &quot;center&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">          style: {</span></span>
<span class="line"><span style="color:#E7EE98;">            fill: &quot;white&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">            stroke: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">          },</span></span>
<span class="line"><span style="color:#E7EE98;">        },</span></span>
<span class="line"><span style="color:#E7EE98;">      },</span></span>
<span class="line"><span style="color:#E7EE98;">      defaultEdge: {</span></span>
<span class="line"><span style="color:#E7EE98;">        color: &quot;#888&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">        type: &quot;animate-line&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">      },</span></span>
<span class="line"><span style="color:#E7EE98;">      defaultCombo: {</span></span>
<span class="line"><span style="color:#E7EE98;">        padding: 1,</span></span>
<span class="line"><span style="color:#E7EE98;">        style: {</span></span>
<span class="line"><span style="color:#E7EE98;">          cursor: &quot;all-scroll&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">        },</span></span>
<span class="line"><span style="color:#E7EE98;">        labelCfg: {</span></span>
<span class="line"><span style="color:#E7EE98;">          style: {</span></span>
<span class="line"><span style="color:#E7EE98;">            opacity: 0,</span></span>
<span class="line"><span style="color:#E7EE98;">            fill: &quot;#303133&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">            fontSize: 12,</span></span>
<span class="line"><span style="color:#E7EE98;">            stroke: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#E7EE98;">          },</span></span>
<span class="line"><span style="color:#E7EE98;">        },</span></span>
<span class="line"><span style="color:#E7EE98;">      },</span></span>
<span class="line"><span style="color:#E7EE98;">    });</span></span>
<span class="line"><span style="color:#E7EE98;">    //监听事件</span></span>
<span class="line"><span style="color:#E7EE98;">     this.graphBehaviors();</span></span>
<span class="line"><span style="color:#E7EE98;">  }</span></span>
<span class="line"><span style="color:#E7EE98;">},</span></span>
<span class="line"><span style="color:#E7EE98;">graphBehaviors(){</span></span>
<span class="line"><span style="color:#E7EE98;">    this.graph.on(&#39;node:click&#39;,this.debounce(this.eventHandle, 300));</span></span>
<span class="line"><span style="color:#E7EE98;"> //this.graph.on(&#39;edge:click&#39;... </span></span>
<span class="line"><span style="color:#E7EE98;">},</span></span>
<span class="line"><span style="color:#E7EE98;">debounce(fn, delay) {</span></span>
<span class="line"><span style="color:#E7EE98;">  const delays = delay || 300;</span></span>
<span class="line"><span style="color:#E7EE98;">  let timer;</span></span>
<span class="line"><span style="color:#E7EE98;">  return function() {</span></span>
<span class="line"><span style="color:#E7EE98;">    const th = this;</span></span>
<span class="line"><span style="color:#E7EE98;">    const args = arguments;</span></span>
<span class="line"><span style="color:#E7EE98;">    if (timer) {</span></span>
<span class="line"><span style="color:#E7EE98;">      clearTimeout(timer);</span></span>
<span class="line"><span style="color:#E7EE98;">    }</span></span>
<span class="line"><span style="color:#E7EE98;">    timer = setTimeout(function() {</span></span>
<span class="line"><span style="color:#E7EE98;">      timer = null;</span></span>
<span class="line"><span style="color:#E7EE98;">      fn.apply(th, args);</span></span>
<span class="line"><span style="color:#E7EE98;">    }, delays);</span></span>
<span class="line"><span style="color:#E7EE98;">  };</span></span>
<span class="line"><span style="color:#E7EE98;">},</span></span>
<span class="line"><span style="color:#E7EE98;">    //2.查询数据</span></span>
<span class="line"><span style="color:#E7EE98;">queryChartData(){</span></span>
<span class="line"><span style="color:#E7EE98;">    //处理数据</span></span>
<span class="line"><span style="color:#E7EE98;">    this.dealData(data)</span></span>
<span class="line"><span style="color:#E7EE98;">}</span></span>
<span class="line"><span style="color:#E7EE98;">//3.处理数据</span></span>
<span class="line"><span style="color:#E7EE98;">dealData(data ) {</span></span>
<span class="line"><span style="color:#E7EE98;">    //VPE节点</span></span>
<span class="line"><span style="color:#E7EE98;">    nodes =  ...</span></span>
<span class="line"><span style="color:#E7EE98;">    edges = ...</span></span>
<span class="line"><span style="color:#E7EE98;">    combos = ...</span></span>
<span class="line"><span style="color:#E7EE98;">    this.drawChart(...);</span></span>
<span class="line"><span style="color:#E7EE98;">}</span></span>
<span class="line"><span style="color:#E7EE98;">//4.渲染数据</span></span>
<span class="line"><span style="color:#E7EE98;">drawChart() {</span></span>
<span class="line"><span style="color:#E7EE98;">  this.graph.read({</span></span>
<span class="line"><span style="color:#E7EE98;">    nodes,</span></span>
<span class="line"><span style="color:#E7EE98;">    edges,</span></span>
<span class="line"><span style="color:#E7EE98;">    combos,</span></span>
<span class="line"><span style="color:#E7EE98;">  });</span></span>
<span class="line"><span style="color:#E7EE98;">},</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { commonRegister ,viewRegister} </span><span style="color:#032F62;">&#39;./registerElements.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//1.初始化实例</span></span>
<span class="line"><span style="color:#24292E;">initChart() {</span></span>
<span class="line"><span style="color:#24292E;">  let halfWidth = this.width / 2;</span></span>
<span class="line"><span style="color:#24292E;">  let halfHeight = this.height / 2;</span></span>
<span class="line"><span style="color:#24292E;">  if (!this.graph) {</span></span>
<span class="line"><span style="color:#24292E;">    commonRegister()</span></span>
<span class="line"><span style="color:#24292E;">    viewRegister()</span></span>
<span class="line"><span style="color:#24292E;">    const toolbar = new G6.ToolBar({</span></span>
<span class="line"><span style="color:#24292E;">      position: { x: 10, y: 10 },</span></span>
<span class="line"><span style="color:#24292E;">      getContent: () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">         const outDiv = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#24292E;">          let style = &#39;cursor: pointer;vertical-align: middle;line-height:24px;font-size:18px;&#39;</span></span>
<span class="line"><span style="color:#24292E;">          outDiv.innerHTML = \`&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292E;">              &lt;li code=&#39;zoomOut&#39; style=&quot;\${style}</span><span style="color:#032F62;">&quot; class=&quot;</span><span style="color:#24292E;">iconfont icon-fangda</span><span style="color:#032F62;">&quot; title=&quot;</span><span style="color:#24292E;">放大</span><span style="color:#032F62;">&quot;&gt;&lt;/li</span><span style="color:#B31D28;font-style:italic;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">              &lt;li code=</span><span style="color:#032F62;">&#39;zoomIn&#39;</span><span style="color:#24292E;">  style=</span><span style="color:#032F62;">&quot;\${style}&quot;</span><span style="color:#24292E;"> class=</span><span style="color:#032F62;">&quot;iconfont icon-suoxiao&quot;</span><span style="color:#24292E;"> title=</span><span style="color:#032F62;">&quot;缩小&quot;</span><span style="color:#24292E;">&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292E;">              &lt;li code=</span><span style="color:#032F62;">&#39;autoZoom&#39;</span><span style="color:#24292E;"> style=</span><span style="color:#032F62;">&quot;\${style}&quot;</span><span style="color:#24292E;"> class=</span><span style="color:#032F62;">&quot;iconfont icon-fitscreen24&quot;</span><span style="color:#24292E;"> title=</span><span style="color:#032F62;">&quot;居中&quot;</span><span style="color:#24292E;">&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/ul&gt;</span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">          return outDiv</span></span>
<span class="line"><span style="color:#032F62;">      },</span></span>
<span class="line"><span style="color:#032F62;">     handleClick: (code) =&gt; {</span></span>
<span class="line"><span style="color:#032F62;">          if (code === &#39;zoomOut&#39;) {</span></span>
<span class="line"><span style="color:#032F62;">             toolbar.zoomOut()</span></span>
<span class="line"><span style="color:#032F62;">          } else if (code === &#39;zoomIn&#39;) {</span></span>
<span class="line"><span style="color:#032F62;">             toolbar.zoomIn()</span></span>
<span class="line"><span style="color:#032F62;">          }else if(code === &#39;autoZoom&#39;){</span></span>
<span class="line"><span style="color:#032F62;">             toolbar.autoZoom()</span></span>
<span class="line"><span style="color:#032F62;">          }</span></span>
<span class="line"><span style="color:#032F62;">        }</span></span>
<span class="line"><span style="color:#032F62;">    });</span></span>
<span class="line"><span style="color:#032F62;">    this.graph = new G6.Graph({</span></span>
<span class="line"><span style="color:#032F62;">      container: &quot;topoChart&quot;,</span></span>
<span class="line"><span style="color:#032F62;">      width: this.width,</span></span>
<span class="line"><span style="color:#032F62;">      height: this.height,</span></span>
<span class="line"><span style="color:#032F62;">      fitView: true,</span></span>
<span class="line"><span style="color:#032F62;">      fitViewPadding: 100,</span></span>
<span class="line"><span style="color:#032F62;">      groupByTypes: false,</span></span>
<span class="line"><span style="color:#032F62;">      linkCenter: false,</span></span>
<span class="line"><span style="color:#032F62;">      layout: {</span></span>
<span class="line"><span style="color:#032F62;">        pipes: [</span></span>
<span class="line"><span style="color:#032F62;">          {</span></span>
<span class="line"><span style="color:#032F62;">            // 该子图所使用的布局类型</span></span>
<span class="line"><span style="color:#032F62;">            type: &quot;circular&quot;,</span></span>
<span class="line"><span style="color:#032F62;">            center: [halfWidth, halfHeight],</span></span>
<span class="line"><span style="color:#032F62;">            radius: 80,</span></span>
<span class="line"><span style="color:#032F62;">            nodesFilter: (node) =&gt; node.sysType === &quot;vpe&quot;,</span></span>
<span class="line"><span style="color:#032F62;">          },</span></span>
<span class="line"><span style="color:#032F62;">        ],</span></span>
<span class="line"><span style="color:#032F62;">      },</span></span>
<span class="line"><span style="color:#032F62;">      //交互行为相关配置</span></span>
<span class="line"><span style="color:#032F62;">      modes: {</span></span>
<span class="line"><span style="color:#032F62;">        default: [&quot;drag-canvas&quot;, &quot;zoom-canvas&quot;, {type: &quot;drag-combo&quot;, shouldEnd(e, parent) {</span></span>
<span class="line"><span style="color:#032F62;">          if(parent) {</span></span>
<span class="line"><span style="color:#032F62;">            return false;</span></span>
<span class="line"><span style="color:#032F62;">          }</span></span>
<span class="line"><span style="color:#032F62;">          return true;</span></span>
<span class="line"><span style="color:#032F62;">        }}],</span></span>
<span class="line"><span style="color:#032F62;">      },</span></span>
<span class="line"><span style="color:#032F62;">      plugins: [toolbar],</span></span>
<span class="line"><span style="color:#032F62;">      defaultNode: {</span></span>
<span class="line"><span style="color:#032F62;">        type: &quot;bubble&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        labelCfg: {</span></span>
<span class="line"><span style="color:#032F62;">          position: &quot;center&quot;,</span></span>
<span class="line"><span style="color:#032F62;">          style: {</span></span>
<span class="line"><span style="color:#032F62;">            fill: &quot;white&quot;,</span></span>
<span class="line"><span style="color:#032F62;">            stroke: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#032F62;">          },</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">      },</span></span>
<span class="line"><span style="color:#032F62;">      defaultEdge: {</span></span>
<span class="line"><span style="color:#032F62;">        color: &quot;#888&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        type: &quot;animate-line&quot;,</span></span>
<span class="line"><span style="color:#032F62;">      },</span></span>
<span class="line"><span style="color:#032F62;">      defaultCombo: {</span></span>
<span class="line"><span style="color:#032F62;">        padding: 1,</span></span>
<span class="line"><span style="color:#032F62;">        style: {</span></span>
<span class="line"><span style="color:#032F62;">          cursor: &quot;all-scroll&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">        labelCfg: {</span></span>
<span class="line"><span style="color:#032F62;">          style: {</span></span>
<span class="line"><span style="color:#032F62;">            opacity: 0,</span></span>
<span class="line"><span style="color:#032F62;">            fill: &quot;#303133&quot;,</span></span>
<span class="line"><span style="color:#032F62;">            fontSize: 12,</span></span>
<span class="line"><span style="color:#032F62;">            stroke: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#032F62;">          },</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">      },</span></span>
<span class="line"><span style="color:#032F62;">    });</span></span>
<span class="line"><span style="color:#032F62;">    //监听事件</span></span>
<span class="line"><span style="color:#032F62;">     this.graphBehaviors();</span></span>
<span class="line"><span style="color:#032F62;">  }</span></span>
<span class="line"><span style="color:#032F62;">},</span></span>
<span class="line"><span style="color:#032F62;">graphBehaviors(){</span></span>
<span class="line"><span style="color:#032F62;">    this.graph.on(&#39;node:click&#39;,this.debounce(this.eventHandle, 300));</span></span>
<span class="line"><span style="color:#032F62;"> //this.graph.on(&#39;edge:click&#39;... </span></span>
<span class="line"><span style="color:#032F62;">},</span></span>
<span class="line"><span style="color:#032F62;">debounce(fn, delay) {</span></span>
<span class="line"><span style="color:#032F62;">  const delays = delay || 300;</span></span>
<span class="line"><span style="color:#032F62;">  let timer;</span></span>
<span class="line"><span style="color:#032F62;">  return function() {</span></span>
<span class="line"><span style="color:#032F62;">    const th = this;</span></span>
<span class="line"><span style="color:#032F62;">    const args = arguments;</span></span>
<span class="line"><span style="color:#032F62;">    if (timer) {</span></span>
<span class="line"><span style="color:#032F62;">      clearTimeout(timer);</span></span>
<span class="line"><span style="color:#032F62;">    }</span></span>
<span class="line"><span style="color:#032F62;">    timer = setTimeout(function() {</span></span>
<span class="line"><span style="color:#032F62;">      timer = null;</span></span>
<span class="line"><span style="color:#032F62;">      fn.apply(th, args);</span></span>
<span class="line"><span style="color:#032F62;">    }, delays);</span></span>
<span class="line"><span style="color:#032F62;">  };</span></span>
<span class="line"><span style="color:#032F62;">},</span></span>
<span class="line"><span style="color:#032F62;">    //2.查询数据</span></span>
<span class="line"><span style="color:#032F62;">queryChartData(){</span></span>
<span class="line"><span style="color:#032F62;">    //处理数据</span></span>
<span class="line"><span style="color:#032F62;">    this.dealData(data)</span></span>
<span class="line"><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">//3.处理数据</span></span>
<span class="line"><span style="color:#032F62;">dealData(data ) {</span></span>
<span class="line"><span style="color:#032F62;">    //VPE节点</span></span>
<span class="line"><span style="color:#032F62;">    nodes =  ...</span></span>
<span class="line"><span style="color:#032F62;">    edges = ...</span></span>
<span class="line"><span style="color:#032F62;">    combos = ...</span></span>
<span class="line"><span style="color:#032F62;">    this.drawChart(...);</span></span>
<span class="line"><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">//4.渲染数据</span></span>
<span class="line"><span style="color:#032F62;">drawChart() {</span></span>
<span class="line"><span style="color:#032F62;">  this.graph.read({</span></span>
<span class="line"><span style="color:#032F62;">    nodes,</span></span>
<span class="line"><span style="color:#032F62;">    edges,</span></span>
<span class="line"><span style="color:#032F62;">    combos,</span></span>
<span class="line"><span style="color:#032F62;">  });</span></span>
<span class="line"><span style="color:#032F62;">},</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">mounted</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.chartLoading </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.width </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> document.</span><span style="color:#62E884;">getElementById</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">topoChart</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">).scrollWidth;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.height </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> document.</span><span style="color:#62E884;">getElementById</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">topoChart</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">).scrollHeight </span><span style="color:#F286C4;">||</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">600</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">initChart</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">queryChartData</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.chartLoading </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//监听窗口大小变化,重绘网络拓扑</span></span>
<span class="line"><span style="color:#F6F6F4;">    window.</span><span style="color:#62E884;">addEventListener</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">resize</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.rePaint )</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#62E884;">beforeDestroy</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.graph) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.graph.</span><span style="color:#62E884;">clear</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.graph.</span><span style="color:#62E884;">destroy</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.data </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> Object.</span><span style="color:#62E884;">assign</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.$data, </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.$options.</span><span style="color:#62E884;">data</span><span style="color:#F6F6F4;">());</span></span>
<span class="line"><span style="color:#F6F6F4;">},</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartLoading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.width </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;topoChart&quot;</span><span style="color:#24292E;">).scrollWidth;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;topoChart&quot;</span><span style="color:#24292E;">).scrollHeight </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">600</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initChart</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">queryChartData</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartLoading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//监听窗口大小变化,重绘网络拓扑</span></span>
<span class="line"><span style="color:#24292E;">    window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;resize&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.rePaint )</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6F42C1;">beforeDestroy</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.graph) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.graph.</span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.graph.</span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$data, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options.</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span></code></pre></div><h2 id="注册节点" tabindex="-1">注册节点 <a class="header-anchor" href="#注册节点" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//registerElements.js</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> G6 </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">@antv/g6</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#7B7F8B;">//共同节点注册</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">commonRegister</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 注册实线动画</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;">G6</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">registerEdge</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">animate-line</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">drawShape</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">cfg</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">group</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> self </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> shapeStyle </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> self.</span><span style="color:#62E884;">getShapeStyle</span><span style="color:#F6F6F4;">(cfg);</span></span>
<span class="line"><span style="color:#F6F6F4;">        shapeStyle </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> Object.</span><span style="color:#62E884;">assign</span><span style="color:#F6F6F4;">(shapeStyle, {</span></span>
<span class="line"><span style="color:#F6F6F4;">          opacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          strokeOpacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        });</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> keyShape </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">path</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">          attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> shapeStyle,</span></span>
<span class="line"><span style="color:#F6F6F4;">          name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">path-shape</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        });</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> keyShape;</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">afterDraw</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">cfg</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">group</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> shape </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> group.</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">children</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)[</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">];</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//线条动画</span></span>
<span class="line"><span style="color:#F6F6F4;">        shape.</span><span style="color:#62E884;">animate</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F6F6F4;">          (</span><span style="color:#FFB86C;font-style:italic;">ratio</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> opacity </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> ratio </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> cfg.style.opacity;</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> strokeOpacity </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> ratio </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> cfg.style.strokeOpacity;</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              opacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> ratio </span><span style="color:#F286C4;">||</span><span style="color:#F6F6F4;"> opacity,</span></span>
<span class="line"><span style="color:#F6F6F4;">              strokeOpacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> ratio </span><span style="color:#F286C4;">||</span><span style="color:#F6F6F4;"> strokeOpacity,</span></span>
<span class="line"><span style="color:#F6F6F4;">            };</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">          {</span></span>
<span class="line"><span style="color:#F6F6F4;">            duration</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">300</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          }</span></span>
<span class="line"><span style="color:#F6F6F4;">        );</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//箭头动画</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> startPoint </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> shape.</span><span style="color:#62E884;">getPoint</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> circle </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">circle</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">          attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> startPoint.x,</span></span>
<span class="line"><span style="color:#F6F6F4;">            y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> startPoint.y,</span></span>
<span class="line"><span style="color:#F6F6F4;">            fill</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">#1890ff</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            r</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">          name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">circle-shape</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        });</span></span>
<span class="line"><span style="color:#F6F6F4;">        circle.</span><span style="color:#62E884;">animate</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F6F6F4;">          (</span><span style="color:#FFB86C;font-style:italic;">ratio</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> tmpPoint </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> shape.</span><span style="color:#62E884;">getPoint</span><span style="color:#F6F6F4;">(ratio);</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> tmpPoint.x,</span></span>
<span class="line"><span style="color:#F6F6F4;">              y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> tmpPoint.y,</span></span>
<span class="line"><span style="color:#F6F6F4;">            };</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">          {</span></span>
<span class="line"><span style="color:#F6F6F4;">            repeat</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            duration</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          }</span></span>
<span class="line"><span style="color:#F6F6F4;">        );</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">setState</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">value</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">item</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> shape </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> item.</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">keyShape</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (name </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">disappearing</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> value) {</span></span>
<span class="line"><span style="color:#F6F6F4;">          shape.</span><span style="color:#62E884;">animate</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F6F6F4;">            (</span><span style="color:#FFB86C;font-style:italic;">ratio</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">                opacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> ratio,</span></span>
<span class="line"><span style="color:#F6F6F4;">                strokeOpacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> ratio,</span></span>
<span class="line"><span style="color:#F6F6F4;">              };</span></span>
<span class="line"><span style="color:#F6F6F4;">            },</span></span>
<span class="line"><span style="color:#F6F6F4;">            {</span></span>
<span class="line"><span style="color:#F6F6F4;">              duration</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">200</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            }</span></span>
<span class="line"><span style="color:#F6F6F4;">          );</span></span>
<span class="line"><span style="color:#F6F6F4;">        } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (name </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">dark</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (value) shape.</span><span style="color:#62E884;">attr</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">opacity</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0.2</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> shape.</span><span style="color:#62E884;">attr</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">opacity</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">line</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  );</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//注册iconfont节点</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;">G6</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">registerNode</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">iconfontHub</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">draw</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">cfg</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">group</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { style, labelCfg</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> labelStyle ,size } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cfg;</span></span>
<span class="line"><span style="color:#F6F6F4;">      group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">circle</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">        attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> size </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          r</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> size,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hub-bg-shape</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">//添加图标</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> keyShape </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">text</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">        attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> size  </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          fontFamily</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">iconfont</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          textAlign</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">center</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          text</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> cfg.text,</span></span>
<span class="line"><span style="color:#F6F6F4;">          fontSize</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> Math.</span><span style="color:#62E884;">round</span><span style="color:#F6F6F4;">(size),</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">style,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hub-shape</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">//添加label</span></span>
<span class="line"><span style="color:#F6F6F4;">      group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">text</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">        attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> Math.</span><span style="color:#62E884;">round</span><span style="color:#F6F6F4;">(size</span><span style="color:#F286C4;">/</span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">),</span></span>
<span class="line"><span style="color:#F6F6F4;">          textAlign</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">center</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          textBaseline</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">middle</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          text</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> cfg.label,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">labelStyle.style,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hub-label</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> keyShape;</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// afterDraw(cfg, group) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//   const shape = group.get(&#39;children&#39;)[0];</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//   shape.animate(</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//     (ratio) =&gt; {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//       let fill = &#39;#C396ED&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//       if(ratio &gt; 0.6){</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//         fill = &#39;#FFCF8B&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//       }else if(ratio &gt; 0.3){</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//         fill = &#39;#C396ED&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//       }else {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//         fill = &#39;#75D882&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//       }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//       return {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//         fill,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//       };</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//     },</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//     {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//       repeat: true,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//       duration: 1500,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//       // easing: &#39;easeCubic&#39;,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//     },</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//   );</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// },</span></span>
<span class="line"><span style="color:#F6F6F4;">  });</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//自定义节点和节点动画</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;">G6</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">registerNode</span><span style="color:#F6F6F4;">( </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">vpe-rect-animate</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">afterDraw</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">cfg</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">group</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { width, height, stroke, radius } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">getShapeStyle</span><span style="color:#F6F6F4;">(cfg);</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> x </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;">width </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        y </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;">height </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> back1 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">rect</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">        zIndex</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> x,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> y,</span></span>
<span class="line"><span style="color:#F6F6F4;">          width</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> width,</span></span>
<span class="line"><span style="color:#F6F6F4;">          height</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> height,</span></span>
<span class="line"><span style="color:#F6F6F4;">          fill</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> stroke,</span></span>
<span class="line"><span style="color:#F6F6F4;">          opacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.6</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          radius,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">rback1-shape</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> back2 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">rect</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">        zIndex</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> x,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> y,</span></span>
<span class="line"><span style="color:#F6F6F4;">          width</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> width,</span></span>
<span class="line"><span style="color:#F6F6F4;">          height</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> height,</span></span>
<span class="line"><span style="color:#F6F6F4;">          fill</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> stroke,</span></span>
<span class="line"><span style="color:#F6F6F4;">          opacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.6</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          radius,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">rback2-shape</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> back3 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">circle</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">        zIndex</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> x,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> y,</span></span>
<span class="line"><span style="color:#F6F6F4;">          width</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> width,</span></span>
<span class="line"><span style="color:#F6F6F4;">          height</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> height,</span></span>
<span class="line"><span style="color:#F6F6F4;">          fill</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> stroke,</span></span>
<span class="line"><span style="color:#F6F6F4;">          opacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.6</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          radius,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">rback3-shape</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">      group.</span><span style="color:#62E884;">sort</span><span style="color:#F6F6F4;">(); </span><span style="color:#7B7F8B;">// Sort according to the zIndex</span></span>
<span class="line"><span style="color:#F6F6F4;">      back1.</span><span style="color:#62E884;">animate</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">          width</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> width </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          height</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> height </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          opacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> x </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> y </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">          duration</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          easing</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">easeCubic</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          delay</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">300</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          repeat</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">// repeat</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      ); </span><span style="color:#7B7F8B;">// no delay</span></span>
<span class="line"><span style="color:#F6F6F4;">      back2.</span><span style="color:#62E884;">animate</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">          width</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> width </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          height</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> height </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          opacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> x </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> y </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">          duration</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          easing</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">easeCubic</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          delay</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1000</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          repeat</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,  </span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      );  </span></span>
<span class="line"><span style="color:#F6F6F4;">      back3.</span><span style="color:#62E884;">animate</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">          width</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> width </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          height</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> height </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          opacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> x </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> y </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">          duration</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          easing</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">easeCubic</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          delay</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2000</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          repeat</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">// repeat</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      ); </span><span style="color:#7B7F8B;">// 3s delay</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">rect</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#7B7F8B;">//弹窗特有节点注册</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dialogRegister</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#7B7F8B;">//注册iconfont节点</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">G6</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">registerNode</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">iconfontCpe</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">draw</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">cfg</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">group</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { style, labelCfg</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> labelStyle } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cfg;</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">//添加图标</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> keyShape </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">text</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">        attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          fontFamily</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">iconfont</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          textAlign</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">center</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          textBaseline</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">middle</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          text</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> cfg.text,</span></span>
<span class="line"><span style="color:#F6F6F4;">          fontSize</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> cfg.size,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">style,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">cpe-shape</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">//添加label</span></span>
<span class="line"><span style="color:#F6F6F4;">      group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">text</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">        attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          textAlign</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">center</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          text</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> cfg.label,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">labelStyle.style,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">cpe-label</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> keyShape;</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">afterDraw</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">cfg</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">group</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> shape </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> group.</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">children</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)[</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">];</span></span>
<span class="line"><span style="color:#F6F6F4;">      shape.</span><span style="color:#62E884;">animate</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F6F6F4;">        (</span><span style="color:#FFB86C;font-style:italic;">ratio</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> text </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#F286C4;">\\ue604</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;">(ratio </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.6</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">            text </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#F286C4;">\\ue604</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">          }</span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;">(ratio </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.3</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">            text </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#F286C4;">\\ue606</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">          }</span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            text </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#F286C4;">\\ue605</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">          }</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            text,</span></span>
<span class="line"><span style="color:#F6F6F4;">          };</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">          repeat</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          duration</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1500</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          delay</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// easing: &#39;easeCubic&#39;,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">      );</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">  });</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//注册虚线动画</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// G6.registerEdge(&quot;vpn-line-dash&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//   {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     afterDraw(cfg, group) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//       const shape = group.get(&quot;children&quot;)[0];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//       let index = 0;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//       shape.animate(</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//         () =&gt; {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           index = index+0.2;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           if (index &gt; 9) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//             index = 0;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           const res = {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//             lineDash: [4, 4],</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//             lineDashOffset: -index,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           };</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           return res;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//         },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//         {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           repeat: true,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           duration:10000,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//         }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//       );</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//   },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//   &quot;line&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// );</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//网络拓扑总览特有节点注册</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">viewRegister</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//注册iconfont combos</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// G6.registerCombo(&quot;cloudCombo&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//   {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     drawShape: function drawShape(cfg, group) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//       // const {  labelCfg: labelStyle   } = cfg;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//       const keyShape = group.addShape(&quot;text&quot;, { </span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//         attrs: {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           y: 0,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           x: 0,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           fill: cfg.style.fill,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           stroke: cfg.style.fill,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           fontFamily: &quot;iconfont&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           textAlign: &quot;center&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           textBaseline: &quot;middle&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           text: &quot;\\ue603&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           fontSize: 320,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           zIndex: 8,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//         },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//         name: &quot;cloud&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//       });</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//           //添加label</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     // group.addShape(&quot;text&quot;, {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     //   attrs: {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     //     x: 0,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     //     y: -80,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     //     textAlign: &quot;center&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     //     textBaseline: &quot;middle&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     //     text: cfg.label,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     //     ...labelStyle.style,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     //   },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     //   name: &quot;hubCombo-label&quot;,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     // });</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//       return keyShape;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//     },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//   },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//   &quot;cicle&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// );</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//注册SVG combo</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;">G6</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">registerCombo</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">cloudCombo</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">drawShape</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">drawShape</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">cfg</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">group</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { labelCfg  } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cfg;</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> str </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">M 448 102.875 c 0 -82.09 -56.678 -150.9 -132.996 -169.48 C 311.762 -195.305 206.546 -298.667 77.142 -298.667 c -75.792 0 -143.266 35.494 -186.854 90.732 c -24.442 -31.598 -62.69 -51.96 -105.708 -51.96 c -73.81 0 -133.642 59.874 -133.642 133.722 c 0 6.436 0.48 12.76 1.364 18.954 c -11.222 -2.024 -22.766 -3.138 -34.57 -3.138 C -489.266 -110.359 -576 -23.5707 -576 83.4853 C -576 190.547 -489.266 277.333 -382.27 277.333 l 656.262 0 l 0 -0.012 C 370.13 277.137 448 199.109 448 102.875 Z</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> pathArr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;">str.</span><span style="color:#62E884;">split</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> opath </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> []</span></span>
<span class="line"><span style="color:#F6F6F4;">            pathArr.</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">item</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;">(</span><span style="color:#EE6666;">/</span><span style="color:#97E1F1;">[</span><span style="color:#BF9EEE;">a-zA-Z</span><span style="color:#97E1F1;">]</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">test</span><span style="color:#F6F6F4;">(item)){</span></span>
<span class="line"><span style="color:#F6F6F4;">              opath.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">([item])</span></span>
<span class="line"><span style="color:#F6F6F4;">            }</span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              opath[opath.length </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">].</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(</span><span style="color:#62E884;">parseFloat</span><span style="color:#F6F6F4;">(item))</span></span>
<span class="line"><span style="color:#F6F6F4;">            }</span></span>
<span class="line"><span style="color:#F6F6F4;">            });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">          opath.</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">item</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            item.</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">p</span><span style="color:#F6F6F4;">,</span><span style="color:#FFB86C;font-style:italic;">i</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (i </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">                item [i] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> item[i] </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">  ;</span></span>
<span class="line"><span style="color:#F6F6F4;">              }</span></span>
<span class="line"><span style="color:#F6F6F4;">            });</span></span>
<span class="line"><span style="color:#F6F6F4;">          });</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> keyShape </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">path</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">            attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">cfg.style,</span></span>
<span class="line"><span style="color:#F6F6F4;">              width</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> cfg.style.width,</span></span>
<span class="line"><span style="color:#F6F6F4;">              height</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> cfg.style.height,</span></span>
<span class="line"><span style="color:#F6F6F4;">              path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">  opath,</span></span>
<span class="line"><span style="color:#F6F6F4;">            },</span></span>
<span class="line"><span style="color:#F6F6F4;">            id</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> cfg.id,</span></span>
<span class="line"><span style="color:#F6F6F4;">            name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">cloud</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          });</span></span>
<span class="line"><span style="color:#F6F6F4;">          group.</span><span style="color:#62E884;">addShape</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">text</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">            attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">100</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              textAlign</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">center</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              text</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> cfg.label,</span></span>
<span class="line"><span style="color:#F6F6F4;">              fill</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">#303133</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            },</span></span>
<span class="line"><span style="color:#F6F6F4;">            name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hubCombo-label</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          });</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> keyShape;</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">single-combo</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    );</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">//节点文本溢出省略处理</span></span>
<span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fittingString</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">str</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">maxWidth</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">fontSize</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> ellipsis </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">...</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> ellipsisLength </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">G6</span><span style="color:#F6F6F4;">.Util.</span><span style="color:#62E884;">getTextSize</span><span style="color:#F6F6F4;">(ellipsis, fontSize)[</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> currentWidth </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> res </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> str;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> pattern </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">RegExp</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">[</span><span style="color:#F286C4;">\\u4E00</span><span style="color:#E7EE98;">-</span><span style="color:#F286C4;">\\u9FA5</span><span style="color:#E7EE98;">]+</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);  </span></span>
<span class="line"><span style="color:#F6F6F4;">  str.</span><span style="color:#62E884;">split</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;&#39;</span><span style="color:#F6F6F4;">).</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">letter</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">i</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (currentWidth </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> maxWidth </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> ellipsisLength) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (pattern.</span><span style="color:#62E884;">test</span><span style="color:#F6F6F4;">(letter)) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      currentWidth </span><span style="color:#F286C4;">+=</span><span style="color:#F6F6F4;"> fontSize;</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      currentWidth </span><span style="color:#F286C4;">+=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">G6</span><span style="color:#F6F6F4;">.Util.</span><span style="color:#62E884;">getLetterWidth</span><span style="color:#F6F6F4;">(letter, fontSize);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (currentWidth </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> maxWidth </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> ellipsisLength) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      res </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">\`</span><span style="color:#F286C4;">\${</span><span style="color:#F6F6F4;">str.</span><span style="color:#62E884;">substr</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">0</span><span style="color:#E7EE98;">, </span><span style="color:#F6F6F4;">i)</span><span style="color:#F286C4;">}\${</span><span style="color:#F6F6F4;">ellipsis</span><span style="color:#F286C4;">}</span><span style="color:#E7EE98;">\`</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  });</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> res;</span></span>
<span class="line"><span style="color:#F6F6F4;">} </span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//registerElements.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> G6 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@antv/g6&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//共同节点注册</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">commonRegister</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 注册实线动画</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">G6</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">registerEdge</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;animate-line&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">drawShape</span><span style="color:#24292E;">(</span><span style="color:#E36209;">cfg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">group</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> shapeStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> self.</span><span style="color:#6F42C1;">getShapeStyle</span><span style="color:#24292E;">(cfg);</span></span>
<span class="line"><span style="color:#24292E;">        shapeStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(shapeStyle, {</span></span>
<span class="line"><span style="color:#24292E;">          opacity: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          strokeOpacity: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keyShape</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">          attrs: shapeStyle,</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&quot;path-shape&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> keyShape;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">afterDraw</span><span style="color:#24292E;">(</span><span style="color:#E36209;">cfg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">group</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">shape</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> group.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;children&quot;</span><span style="color:#24292E;">)[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//线条动画</span></span>
<span class="line"><span style="color:#24292E;">        shape.</span><span style="color:#6F42C1;">animate</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">          (</span><span style="color:#E36209;">ratio</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">opacity</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ratio </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> cfg.style.opacity;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">strokeOpacity</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ratio </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> cfg.style.strokeOpacity;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              opacity: ratio </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> opacity,</span></span>
<span class="line"><span style="color:#24292E;">              strokeOpacity: ratio </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> strokeOpacity,</span></span>
<span class="line"><span style="color:#24292E;">            };</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            duration: </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        );</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//箭头动画</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">startPoint</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> shape.</span><span style="color:#6F42C1;">getPoint</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">circle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;circle&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">          attrs: {</span></span>
<span class="line"><span style="color:#24292E;">            x: startPoint.x,</span></span>
<span class="line"><span style="color:#24292E;">            y: startPoint.y,</span></span>
<span class="line"><span style="color:#24292E;">            fill: </span><span style="color:#032F62;">&quot;#1890ff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            r: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&quot;circle-shape&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">        circle.</span><span style="color:#6F42C1;">animate</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">          (</span><span style="color:#E36209;">ratio</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tmpPoint</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> shape.</span><span style="color:#6F42C1;">getPoint</span><span style="color:#24292E;">(ratio);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              x: tmpPoint.x,</span></span>
<span class="line"><span style="color:#24292E;">              y: tmpPoint.y,</span></span>
<span class="line"><span style="color:#24292E;">            };</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            repeat: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            duration: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        );</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">setState</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">, </span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">shape</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;keyShape&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;disappearing&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> value) {</span></span>
<span class="line"><span style="color:#24292E;">          shape.</span><span style="color:#6F42C1;">animate</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#E36209;">ratio</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                opacity: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> ratio,</span></span>
<span class="line"><span style="color:#24292E;">                strokeOpacity: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> ratio,</span></span>
<span class="line"><span style="color:#24292E;">              };</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              duration: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          );</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;dark&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (value) shape.</span><span style="color:#6F42C1;">attr</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;opacity&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> shape.</span><span style="color:#6F42C1;">attr</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;opacity&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;line&quot;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//注册iconfont节点</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">G6</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">registerNode</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;iconfontHub&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">draw</span><span style="color:#24292E;">(</span><span style="color:#E36209;">cfg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">group</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">style</span><span style="color:#24292E;">, </span><span style="color:#E36209;">labelCfg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">labelStyle</span><span style="color:#24292E;"> ,</span><span style="color:#005CC5;">size</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cfg;</span></span>
<span class="line"><span style="color:#24292E;">      group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;circle&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        attrs: {</span></span>
<span class="line"><span style="color:#24292E;">          x: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          y: size </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          r: size,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;hub-bg-shape&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//添加图标</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keyShape</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        attrs: {</span></span>
<span class="line"><span style="color:#24292E;">          x: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          y: size  </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          fontFamily: </span><span style="color:#032F62;">&quot;iconfont&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textAlign: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          text: cfg.text,</span></span>
<span class="line"><span style="color:#24292E;">          fontSize: Math.</span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">(size),</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">style,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;hub-shape&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//添加label</span></span>
<span class="line"><span style="color:#24292E;">      group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        attrs: {</span></span>
<span class="line"><span style="color:#24292E;">          x: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          y: Math.</span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">(size</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          textAlign: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textBaseline: </span><span style="color:#032F62;">&quot;middle&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          text: cfg.label,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">labelStyle.style,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;hub-label&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> keyShape;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// afterDraw(cfg, group) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   const shape = group.get(&#39;children&#39;)[0];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   shape.animate(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     (ratio) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       let fill = &#39;#C396ED&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       if(ratio &gt; 0.6){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//         fill = &#39;#FFCF8B&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       }else if(ratio &gt; 0.3){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//         fill = &#39;#C396ED&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       }else {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//         fill = &#39;#75D882&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       return {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//         fill,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       repeat: true,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       duration: 1500,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       // easing: &#39;easeCubic&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   );</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//自定义节点和节点动画</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">G6</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">registerNode</span><span style="color:#24292E;">( </span><span style="color:#032F62;">&quot;vpe-rect-animate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">afterDraw</span><span style="color:#24292E;">(</span><span style="color:#E36209;">cfg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">group</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">stroke</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">radius</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getShapeStyle</span><span style="color:#24292E;">(cfg);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">width </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">y</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">height </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">back1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;rect&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        zIndex: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        attrs: {</span></span>
<span class="line"><span style="color:#24292E;">          x: x,</span></span>
<span class="line"><span style="color:#24292E;">          y: y,</span></span>
<span class="line"><span style="color:#24292E;">          width: width,</span></span>
<span class="line"><span style="color:#24292E;">          height: height,</span></span>
<span class="line"><span style="color:#24292E;">          fill: stroke,</span></span>
<span class="line"><span style="color:#24292E;">          opacity: </span><span style="color:#005CC5;">0.6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          radius,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;rback1-shape&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">back2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;rect&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        zIndex: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        attrs: {</span></span>
<span class="line"><span style="color:#24292E;">          x: x,</span></span>
<span class="line"><span style="color:#24292E;">          y: y,</span></span>
<span class="line"><span style="color:#24292E;">          width: width,</span></span>
<span class="line"><span style="color:#24292E;">          height: height,</span></span>
<span class="line"><span style="color:#24292E;">          fill: stroke,</span></span>
<span class="line"><span style="color:#24292E;">          opacity: </span><span style="color:#005CC5;">0.6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          radius,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;rback2-shape&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">back3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;circle&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        zIndex: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        attrs: {</span></span>
<span class="line"><span style="color:#24292E;">          x: x,</span></span>
<span class="line"><span style="color:#24292E;">          y: y,</span></span>
<span class="line"><span style="color:#24292E;">          width: width,</span></span>
<span class="line"><span style="color:#24292E;">          height: height,</span></span>
<span class="line"><span style="color:#24292E;">          fill: stroke,</span></span>
<span class="line"><span style="color:#24292E;">          opacity: </span><span style="color:#005CC5;">0.6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          radius,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;rback3-shape&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      group.</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// Sort according to the zIndex</span></span>
<span class="line"><span style="color:#24292E;">      back1.</span><span style="color:#6F42C1;">animate</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          width: width </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          height: height </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          opacity: </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          x: x </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          y: y </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          duration: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          easing: </span><span style="color:#032F62;">&quot;easeCubic&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          delay: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          repeat: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// repeat</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ); </span><span style="color:#6A737D;">// no delay</span></span>
<span class="line"><span style="color:#24292E;">      back2.</span><span style="color:#6F42C1;">animate</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          width: width </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          height: height </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          opacity: </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          x: x </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          y: y </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          duration: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          easing: </span><span style="color:#032F62;">&quot;easeCubic&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          delay: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          repeat: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      );  </span></span>
<span class="line"><span style="color:#24292E;">      back3.</span><span style="color:#6F42C1;">animate</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          width: width </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          height: height </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          opacity: </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          x: x </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          y: y </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          duration: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          easing: </span><span style="color:#032F62;">&quot;easeCubic&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          delay: </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          repeat: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// repeat</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ); </span><span style="color:#6A737D;">// 3s delay</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;rect&quot;</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">//弹窗特有节点注册</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dialogRegister</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//注册iconfont节点</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">G6</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">registerNode</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;iconfontCpe&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">draw</span><span style="color:#24292E;">(</span><span style="color:#E36209;">cfg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">group</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">style</span><span style="color:#24292E;">, </span><span style="color:#E36209;">labelCfg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">labelStyle</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cfg;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//添加图标</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keyShape</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        attrs: {</span></span>
<span class="line"><span style="color:#24292E;">          x: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          y: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          fontFamily: </span><span style="color:#032F62;">&quot;iconfont&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textAlign: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textBaseline: </span><span style="color:#032F62;">&quot;middle&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          text: cfg.text,</span></span>
<span class="line"><span style="color:#24292E;">          fontSize: cfg.size,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">style,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;cpe-shape&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//添加label</span></span>
<span class="line"><span style="color:#24292E;">      group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        attrs: {</span></span>
<span class="line"><span style="color:#24292E;">          x: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          y: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textAlign: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          text: cfg.label,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">labelStyle.style,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;cpe-label&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> keyShape;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">afterDraw</span><span style="color:#24292E;">(</span><span style="color:#E36209;">cfg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">group</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">shape</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> group.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;children&#39;</span><span style="color:#24292E;">)[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">      shape.</span><span style="color:#6F42C1;">animate</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#E36209;">ratio</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\ue604</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(ratio </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.6</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\ue604</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#24292E;">          }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(ratio </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.3</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\ue606</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#24292E;">          }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\ue605</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            text,</span></span>
<span class="line"><span style="color:#24292E;">          };</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          repeat: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          duration: </span><span style="color:#005CC5;">1500</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          delay: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// easing: &#39;easeCubic&#39;,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//注册虚线动画</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// G6.registerEdge(&quot;vpn-line-dash&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     afterDraw(cfg, group) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       const shape = group.get(&quot;children&quot;)[0];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       let index = 0;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       shape.animate(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           index = index+0.2;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           if (index &gt; 9) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//             index = 0;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           const res = {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//             lineDash: [4, 4],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//             lineDashOffset: -index,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           return res;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           repeat: true,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           duration:10000,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       );</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   &quot;line&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//网络拓扑总览特有节点注册</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">viewRegister</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//注册iconfont combos</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// G6.registerCombo(&quot;cloudCombo&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     drawShape: function drawShape(cfg, group) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       // const {  labelCfg: labelStyle   } = cfg;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       const keyShape = group.addShape(&quot;text&quot;, { </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         attrs: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           y: 0,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           x: 0,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           fill: cfg.style.fill,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           stroke: cfg.style.fill,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           fontFamily: &quot;iconfont&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           textAlign: &quot;center&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           textBaseline: &quot;middle&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           text: &quot;\\ue603&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           fontSize: 320,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           zIndex: 8,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         name: &quot;cloud&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           //添加label</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     // group.addShape(&quot;text&quot;, {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     //   attrs: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     //     x: 0,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     //     y: -80,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     //     textAlign: &quot;center&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     //     textBaseline: &quot;middle&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     //     text: cfg.label,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     //     ...labelStyle.style,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     //   },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     //   name: &quot;hubCombo-label&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     // });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       return keyShape;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   &quot;cicle&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// );</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//注册SVG combo</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">G6</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">registerCombo</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;cloudCombo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">drawShape</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">drawShape</span><span style="color:#24292E;">(</span><span style="color:#E36209;">cfg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">group</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">labelCfg</span><span style="color:#24292E;">  } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cfg;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;M 448 102.875 c 0 -82.09 -56.678 -150.9 -132.996 -169.48 C 311.762 -195.305 206.546 -298.667 77.142 -298.667 c -75.792 0 -143.266 35.494 -186.854 90.732 c -24.442 -31.598 -62.69 -51.96 -105.708 -51.96 c -73.81 0 -133.642 59.874 -133.642 133.722 c 0 6.436 0.48 12.76 1.364 18.954 c -11.222 -2.024 -22.766 -3.138 -34.57 -3.138 C -489.266 -110.359 -576 -23.5707 -576 83.4853 C -576 190.547 -489.266 277.333 -382.27 277.333 l 656.262 0 l 0 -0.012 C 370.13 277.137 448 199.109 448 102.875 Z&#39;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pathArr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">str.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> opath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">            pathArr.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#005CC5;">[a-zA-Z]</span><span style="color:#032F62;">/</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(item)){</span></span>
<span class="line"><span style="color:#24292E;">              opath.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">([item])</span></span>
<span class="line"><span style="color:#24292E;">            }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              opath[opath.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">parseFloat</span><span style="color:#24292E;">(item))</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          opath.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            item.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">p</span><span style="color:#24292E;">,</span><span style="color:#E36209;">i</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                item [i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item[i] </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">  ;</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            });</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keyShape</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            attrs: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">cfg.style,</span></span>
<span class="line"><span style="color:#24292E;">              width: cfg.style.width,</span></span>
<span class="line"><span style="color:#24292E;">              height: cfg.style.height,</span></span>
<span class="line"><span style="color:#24292E;">              path:  opath,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            id: cfg.id,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&quot;cloud&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">          group.</span><span style="color:#6F42C1;">addShape</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            attrs: {</span></span>
<span class="line"><span style="color:#24292E;">              x: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              y:  </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              textAlign: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              text: cfg.label,</span></span>
<span class="line"><span style="color:#24292E;">              fill: </span><span style="color:#032F62;">&#39;#303133&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&quot;hubCombo-label&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> keyShape;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;single-combo&quot;</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//节点文本溢出省略处理</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fittingString</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#24292E;">, </span><span style="color:#E36209;">maxWidth</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fontSize</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ellipsis</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ellipsisLength</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">G6</span><span style="color:#24292E;">.Util.</span><span style="color:#6F42C1;">getTextSize</span><span style="color:#24292E;">(ellipsis, fontSize)[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentWidth </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> str;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pattern</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RegExp</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;[</span><span style="color:#005CC5;">\\u4E00</span><span style="color:#032F62;">-</span><span style="color:#005CC5;">\\u9FA5</span><span style="color:#032F62;">]+&#39;</span><span style="color:#24292E;">);  </span></span>
<span class="line"><span style="color:#24292E;">  str.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">letter</span><span style="color:#24292E;">, </span><span style="color:#E36209;">i</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (currentWidth </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> maxWidth </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> ellipsisLength) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (pattern.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(letter)) {</span></span>
<span class="line"><span style="color:#24292E;">      currentWidth </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> fontSize;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      currentWidth </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">G6</span><span style="color:#24292E;">.Util.</span><span style="color:#6F42C1;">getLetterWidth</span><span style="color:#24292E;">(letter, fontSize);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (currentWidth </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> maxWidth </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> ellipsisLength) {</span></span>
<span class="line"><span style="color:#24292E;">      res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">str</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">substr</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">0</span><span style="color:#032F62;">, </span><span style="color:#24292E;">i</span><span style="color:#032F62;">)</span><span style="color:#032F62;">}\${</span><span style="color:#24292E;">ellipsis</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">} </span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,r,y,F,E,i){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
