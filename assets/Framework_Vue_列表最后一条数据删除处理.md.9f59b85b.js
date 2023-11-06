import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.c53372a0.js";const i=JSON.parse('{"title":"一、删除最后一条数据跳转到上一页","description":"","frontmatter":{},"headers":[],"relativePath":"Framework/Vue/列表最后一条数据删除处理.md","filePath":"Framework/Vue/列表最后一条数据删除处理.md"}'),l={name:"Framework/Vue/列表最后一条数据删除处理.md"},o=p(`<h1 id="一、删除最后一条数据跳转到上一页" tabindex="-1">一、删除最后一条数据跳转到上一页 <a class="header-anchor" href="#一、删除最后一条数据跳转到上一页" aria-label="Permalink to &quot;一、删除最后一条数据跳转到上一页&quot;">​</a></h1><blockquote><p>方案一</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">/*</span></span>
<span class="line"><span style="color:#758575DD;">paginationOptions: {</span></span>
<span class="line"><span style="color:#758575DD;">    currentPage: 1,</span></span>
<span class="line"><span style="color:#758575DD;">    pageSize: 10,</span></span>
<span class="line"><span style="color:#758575DD;">    total: 0,</span></span>
<span class="line"><span style="color:#758575DD;">},</span></span>
<span class="line"><span style="color:#758575DD;">*/</span></span>
<span class="line"><span style="color:#BD976A;">async</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">removeDone</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">wrapperLoading</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">name</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">uuid</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">currentRow</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">success</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">removeAccount</span><span style="color:#666666;">({</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">uuid</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">})</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">wrapperLoading</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">success</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#80A665;">$notify</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#B8A965;">type</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">success</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#B8A965;">message</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">\`</span><span style="color:#C98A7D;">账号</span><span style="color:#666666;">\${</span><span style="color:#C98A7D;">name</span><span style="color:#666666;">}</span><span style="color:#C98A7D;">删除成功</span><span style="color:#C98A7D99;">\`</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">})</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#758575DD;">//方案一: 判断是否为最后一条数据 并且总数据不能小于1</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#BD976A;">total</span><span style="color:#666666;">,</span><span style="color:#BD976A;">currentPage</span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">paginationOptions</span><span style="color:#666666;">.</span><span style="color:#BD976A;">currentPage</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        	</span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">contactsData</span><span style="color:#666666;">.</span><span style="color:#B8A965;">length</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">===</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">total</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">paginationOptions</span><span style="color:#666666;">.</span><span style="color:#BD976A;">currentPage</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">currentPage</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">-</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#758575DD;">//方案二:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">currentPage</span><span style="color:#666666;">,</span><span style="color:#BD976A;">pageSize</span><span style="color:#666666;">,</span><span style="color:#BD976A;">total</span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">paginationOptions</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;">//求删除后还有几页</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">deleteAfterPage</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Math</span><span style="color:#666666;">.</span><span style="color:#80A665;">ceil</span><span style="color:#666666;">((</span><span style="color:#BD976A;">total</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">-</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">/</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">pageSize</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;">//若删除后页数小于当前页, 取删除后的页数;否则不变</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">curPage</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">currentPage</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">deleteAfterPage</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">deleteAfterPage</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">currentPage</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;">//当前页只有一页则为1,否则取计算得到的页</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">paginationOptions</span><span style="color:#666666;">.</span><span style="color:#BD976A;">currentPage</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">curPage</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">&lt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">curPage</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#80A665;">queryAccount</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">else</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#80A665;">$notify</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#B8A965;">type</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">error</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#B8A965;">message</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">\`</span><span style="color:#C98A7D;">账号</span><span style="color:#666666;">\${</span><span style="color:#C98A7D;">name</span><span style="color:#666666;">}</span><span style="color:#C98A7D;">删除失败</span><span style="color:#C98A7D99;">\`</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">})</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">},</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/*</span></span>
<span class="line"><span style="color:#A0ADA0;">paginationOptions: {</span></span>
<span class="line"><span style="color:#A0ADA0;">    currentPage: 1,</span></span>
<span class="line"><span style="color:#A0ADA0;">    pageSize: 10,</span></span>
<span class="line"><span style="color:#A0ADA0;">    total: 0,</span></span>
<span class="line"><span style="color:#A0ADA0;">},</span></span>
<span class="line"><span style="color:#A0ADA0;">*/</span></span>
<span class="line"><span style="color:#B07D48;">async</span><span style="color:#393A34;"> </span><span style="color:#59873A;">removeDone</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">wrapperLoading</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">uuid</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">currentRow</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">success</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">await</span><span style="color:#393A34;"> </span><span style="color:#59873A;">removeAccount</span><span style="color:#999999;">({</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">uuid</span><span style="color:#393A34;"> </span><span style="color:#999999;">})</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">wrapperLoading</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">success</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#59873A;">$notify</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#998418;">type</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">success</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#998418;">message</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">\`</span><span style="color:#B56959;">账号</span><span style="color:#999999;">\${</span><span style="color:#B56959;">name</span><span style="color:#999999;">}</span><span style="color:#B56959;">删除成功</span><span style="color:#B5695999;">\`</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">})</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#A0ADA0;">//方案一: 判断是否为最后一条数据 并且总数据不能小于1</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#B07D48;">total</span><span style="color:#999999;">,</span><span style="color:#B07D48;">currentPage</span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">paginationOptions</span><span style="color:#999999;">.</span><span style="color:#B07D48;">currentPage</span></span>
<span class="line"><span style="color:#393A34;">        	</span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">contactsData</span><span style="color:#999999;">.</span><span style="color:#998418;">length</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">===</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;">  </span><span style="color:#B07D48;">total</span><span style="color:#393A34;"> </span><span style="color:#999999;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">paginationOptions</span><span style="color:#999999;">.</span><span style="color:#B07D48;">currentPage</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">currentPage</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#A0ADA0;">//方案二:</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">currentPage</span><span style="color:#999999;">,</span><span style="color:#B07D48;">pageSize</span><span style="color:#999999;">,</span><span style="color:#B07D48;">total</span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">paginationOptions</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">//求删除后还有几页</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">deleteAfterPage</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Math</span><span style="color:#999999;">.</span><span style="color:#59873A;">ceil</span><span style="color:#999999;">((</span><span style="color:#B07D48;">total</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">/</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">pageSize</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">//若删除后页数小于当前页, 取删除后的页数;否则不变</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">curPage</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">currentPage</span><span style="color:#393A34;"> </span><span style="color:#999999;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">deleteAfterPage</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">?</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">deleteAfterPage</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">currentPage</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">//当前页只有一页则为1,否则取计算得到的页</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">paginationOptions</span><span style="color:#999999;">.</span><span style="color:#B07D48;">currentPage</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">curPage</span><span style="color:#393A34;"> </span><span style="color:#999999;">&lt;</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">?</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">curPage</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#59873A;">queryAccount</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">else</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#59873A;">$notify</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#998418;">type</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">error</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#998418;">message</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">\`</span><span style="color:#B56959;">账号</span><span style="color:#999999;">\${</span><span style="color:#B56959;">name</span><span style="color:#999999;">}</span><span style="color:#B56959;">删除失败</span><span style="color:#B5695999;">\`</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">})</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">},</span></span></code></pre></div>`,3),e=[o];function t(c,r,y,A,D,B){return n(),a("div",null,e)}const C=s(l,[["render",t]]);export{i as __pageData,C as default};
