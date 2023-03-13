import{_ as s,o as n,c as a,a as l}from"./app.4d5976de.js";const u=JSON.parse('{"title":"自动部署","description":"","frontmatter":{},"headers":[{"level":2,"title":"脚本","slug":"脚本","link":"#脚本","children":[]},{"level":2,"title":"Action","slug":"action","link":"#action","children":[]}],"relativePath":"FrontEnd/Shell/自动部署脚本.md"}'),p={name:"FrontEnd/Shell/自动部署脚本.md"},o=l(`<h1 id="自动部署" tabindex="-1">自动部署 <a class="header-anchor" href="#自动部署" aria-hidden="true">#</a></h1><h2 id="脚本" tabindex="-1">脚本 <a class="header-anchor" href="#脚本" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#97E1F1;">set</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">npm </span><span style="color:#E7EE98;">run</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#97E1F1;">cd</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">git </span><span style="color:#E7EE98;">init</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">git </span><span style="color:#E7EE98;">add</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">git </span><span style="color:#E7EE98;">commit</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-m</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">🎉deploy gh-pages🎉</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">git </span><span style="color:#E7EE98;">push</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-f</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">git@github.com:fxzer/zerdocs.git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#97E1F1;">cd</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">rm </span><span style="color:#BF9EEE;">-rf</span><span style="color:#F6F6F4;">  </span><span style="color:#E7EE98;">dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#97E1F1;">cd</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">-</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;🎉deploy gh-pages🎉&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com:fxzer/zerdocs.git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;">  </span><span style="color:#032F62;">dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="action" tabindex="-1">Action <a class="header-anchor" href="#action" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">主要流程</p><p>检查代码(Checkout) ===&gt; 启动node环境(Setup Node) ===&gt; 构建静态文件(Build) ===&gt; 把静态文件push到gh-pages,触发gh-pages自带的workflow部署(Push To GitHub Pages)===&gt; 把仓库同步到Gitee(Sync to Gitee) ===&gt; 触发Gitee Pages服务部署(Build Gitee Pages)</p></div><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#97E1F1;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">Deploy GitHub Pages And Sync to Gitee</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 触发条件：在 push 到 master 分支后</span></span>
<span class="line"><span style="color:#BF9EEE;">on</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E1F1;">push</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;">branches</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">master</span></span>
<span class="line"><span style="color:#7B7F8B;"># 任务</span></span>
<span class="line"><span style="color:#97E1F1;">jobs</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E1F1;">build-and-deploy</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;">runs-on</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">ubuntu-latest</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">#部署运行环境搭建</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;">steps</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">Checkout 🛎️</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">uses</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">actions/checkout@main</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">with</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">persist-credentials</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">fetch-depth</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">#github代码拉取深度</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">Setup Node  🎬</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">uses</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">actions/setup-node@main</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">with</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">node-version</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">lts/*</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">Build 🔧</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">run</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">|</span></span>
<span class="line"><span style="color:#E7EE98;">          yarn</span></span>
<span class="line"><span style="color:#E7EE98;">          yarn run build</span></span>
<span class="line"><span style="color:#E7EE98;">          ls -lrth</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">📲 Push To GitHub Pages</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">uses</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">ftnext/action-push-ghpages@v1.0.0</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">with</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">build_dir</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">dist</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">github_token</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">\${{ secrets.DEPLOY_TOKEN }}</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">🔁 Sync to Gitee</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">#同步到Gitee</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">uses</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">wearerequired/git-mirror-action@master</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">env</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;"># 注意在此项目的 Settings-&gt;Actions-&gt; Secrets 配置 GITEE_RSA_PRIVATE_KEY</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">SSH_PRIVATE_KEY</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">\${{ secrets.GITEE_RSA_PRIVATE_KEY }}</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">with</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;"># 注意替换为你的 GitHub 源仓库地址</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">source-repo</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">git@github.com:fxzer/zerdocs.git</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;"># 注意替换为你的 Gitee 目标仓库地址</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">destination-repo</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">git@gitee.com:fxzer/zerdocs.git</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">✅ Build Gitee Pages</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">#触发Gitee自动部署</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">uses</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">yanglbme/gitee-pages-action@master</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;">with</span><span style="color:#F286C4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;"># 注意替换为你的 Gitee 用户名</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">gitee-username</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">fxzer</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;"># 注意在 Settings-&gt;Secrets 配置 GITEE_PASSWORD</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">gitee-password</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">\${{ secrets.GITEE_PASSWORD }}</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;"># 注意替换为你的 Gitee 仓库 </span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;"># 坑点:https://gitee.com/fxzer/zerdocs --&gt;则填:fxzer/zerdocs,注意仓库名和路径名不一致问题</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">gitee-repo</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">fxzer/zerdocs</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;"># 要部署的分支</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#97E1F1;">branch</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">gh-pages</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy GitHub Pages And Sync to Gitee</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 触发条件：在 push 到 master 分支后</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">master</span></span>
<span class="line"><span style="color:#6A737D;"># 任务</span></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build-and-deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#部署运行环境搭建</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Checkout 🛎️</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@main</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">persist-credentials</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">fetch-depth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#github代码拉取深度</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Setup Node  🎬</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@main</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;lts/*&quot;</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build 🔧</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          yarn</span></span>
<span class="line"><span style="color:#032F62;">          yarn run build</span></span>
<span class="line"><span style="color:#032F62;">          ls -lrth</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">📲 Push To GitHub Pages</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ftnext/action-push-ghpages@v1.0.0</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">build_dir</span><span style="color:#24292E;">: </span><span style="color:#032F62;">dist</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">github_token</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_TOKEN }}</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">🔁 Sync to Gitee</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#同步到Gitee</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">wearerequired/git-mirror-action@master</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 注意在此项目的 Settings-&gt;Actions-&gt; Secrets 配置 GITEE_RSA_PRIVATE_KEY</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">SSH_PRIVATE_KEY</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.GITEE_RSA_PRIVATE_KEY }}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 注意替换为你的 GitHub 源仓库地址</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">source-repo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;git@github.com:fxzer/zerdocs.git&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 注意替换为你的 Gitee 目标仓库地址</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">destination-repo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;git@gitee.com:fxzer/zerdocs.git&#39;</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">✅ Build Gitee Pages</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#触发Gitee自动部署</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">yanglbme/gitee-pages-action@master</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 注意替换为你的 Gitee 用户名</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">gitee-username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">fxzer</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 注意在 Settings-&gt;Secrets 配置 GITEE_PASSWORD</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">gitee-password</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.GITEE_PASSWORD }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 注意替换为你的 Gitee 仓库 </span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 坑点:https://gitee.com/fxzer/zerdocs --&gt;则填:fxzer/zerdocs,注意仓库名和路径名不一致问题</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">gitee-repo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">fxzer/zerdocs</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 要部署的分支</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">branch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">gh-pages</span></span>
<span class="line"><span style="color:#24292E;">          </span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function c(t,r,y,F,i,E){return n(),a("div",null,e)}const g=s(p,[["render",c]]);export{u as __pageData,g as default};
