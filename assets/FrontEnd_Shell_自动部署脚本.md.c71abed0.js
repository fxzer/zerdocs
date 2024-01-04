import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.d2d9e35b.js";const B=JSON.parse('{"title":"自动部署","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/Shell/自动部署脚本.md","filePath":"FrontEnd/Shell/自动部署脚本.md"}'),l={name:"FrontEnd/Shell/自动部署脚本.md"},o=p(`<h1 id="自动部署" tabindex="-1">自动部署 <a class="header-anchor" href="#自动部署" aria-label="Permalink to &quot;自动部署&quot;">​</a></h1><h2 id="脚本" tabindex="-1">脚本 <a class="header-anchor" href="#脚本" aria-label="Permalink to &quot;脚本&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">set</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">run</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">cd</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">commit</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-m</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">🎉deploy gh-pages🎉</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">push</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-f</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">git@github.com:fxzer/zerdocs.git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">cd</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">rm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-rf</span><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D;">dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">cd</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">-</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">set</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">run</span><span style="color:#393A34;"> </span><span style="color:#B56959;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">cd</span><span style="color:#393A34;"> </span><span style="color:#B56959;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">commit</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-m</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">🎉deploy gh-pages🎉</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">push</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-f</span><span style="color:#393A34;"> </span><span style="color:#B56959;">git@github.com:fxzer/zerdocs.git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">cd</span><span style="color:#393A34;"> </span><span style="color:#B56959;">..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">rm</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-rf</span><span style="color:#393A34;">  </span><span style="color:#B56959;">dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">cd</span><span style="color:#393A34;"> </span><span style="color:#B56959;">-</span></span></code></pre></div><h2 id="action" tabindex="-1">Action <a class="header-anchor" href="#action" aria-label="Permalink to &quot;Action&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">主要流程</p><p>检查代码(Checkout) ===&gt; 启动node环境(Setup Node) ===&gt; 构建静态文件(Build) ===&gt; 把静态文件push到gh-pages,触发gh-pages自带的workflow部署(Push To GitHub Pages)===&gt; 把仓库同步到Gitee(Sync to Gitee) ===&gt; 触发Gitee Pages服务部署(Build Gitee Pages)</p></div><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">Deploy GitHub Pages And Sync to Gitee</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># 触发条件：在 push 到 master 分支后</span></span>
<span class="line"><span style="color:#4D9375;">on</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">push</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">branches</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">-</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">master</span></span>
<span class="line"><span style="color:#758575DD;"># 任务</span></span>
<span class="line"><span style="color:#B8A965;">jobs</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">build-and-deploy</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">runs-on</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">ubuntu-latest</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># 部署运行环境搭建</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">steps</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">-</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">Checkout 🛎️</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">uses</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">actions/checkout@main</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">with</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">persist-credentials</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">fetch-depth</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">0</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># github代码拉取深度</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">-</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">Setup Node  🎬</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">uses</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">actions/setup-node@main</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">with</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">node-version</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">lts/*</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">-</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">Build 🔧</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">run</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">|</span></span>
<span class="line"><span style="color:#C98A7D;">          yarn</span></span>
<span class="line"><span style="color:#C98A7D;">          yarn run build</span></span>
<span class="line"><span style="color:#C98A7D;">          ls -lrth</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">-</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">📲 Push To GitHub Pages</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">uses</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">ftnext/action-push-ghpages@v1.0.0</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">with</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">build_dir</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">dist</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">github_token</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">\${{ secrets.DEPLOY_TOKEN }}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">-</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">🔁 Sync to Gitee</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># 同步到Gitee</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">uses</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">wearerequired/git-mirror-action@master</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">env</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;"># 注意在此项目的 Settings-&gt;Actions-&gt; Secrets 配置 GITEE_RSA_PRIVATE_KEY</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">SSH_PRIVATE_KEY</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">\${{ secrets.GITEE_RSA_PRIVATE_KEY }}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">with</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;"># 注意替换为你的 GitHub 源仓库地址</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">source-repo</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">git@github.com:fxzer/zerdocs.git</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;"># 注意替换为你的 Gitee 目标仓库地址</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">destination-repo</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">git@gitee.com:fxzer/zerdocs.git</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">-</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">✅ Build Gitee Pages</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># 触发Gitee自动部署</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">uses</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">yanglbme/gitee-pages-action@master</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">with</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;"># 注意替换为你的 Gitee 用户名</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">gitee-username</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">fxzer</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;"># 注意在 Settings-&gt;Secrets 配置 GITEE_PASSWORD</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">gitee-password</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">\${{ secrets.GITEE_PASSWORD }}</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;"># 注意替换为你的 Gitee 仓库</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;"># 坑点:https://gitee.com/fxzer/zerdocs --&gt;则填:fxzer/zerdocs,注意仓库名和路径名不一致问题</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">gitee-repo</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">fxzer/zerdocs</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;"># 要部署的分支</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">branch</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">gh-pages</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">Deploy GitHub Pages And Sync to Gitee</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 触发条件：在 push 到 master 分支后</span></span>
<span class="line"><span style="color:#1E754F;">on</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">push</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">branches</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">master</span></span>
<span class="line"><span style="color:#A0ADA0;"># 任务</span></span>
<span class="line"><span style="color:#998418;">jobs</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">build-and-deploy</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">runs-on</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ubuntu-latest</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># 部署运行环境搭建</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">steps</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">-</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">Checkout 🛎️</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">uses</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">actions/checkout@main</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">with</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">persist-credentials</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">fetch-depth</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">0</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># github代码拉取深度</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">-</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">Setup Node  🎬</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">uses</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">actions/setup-node@main</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">with</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">node-version</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">lts/*</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">-</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">Build 🔧</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">run</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">|</span></span>
<span class="line"><span style="color:#B56959;">          yarn</span></span>
<span class="line"><span style="color:#B56959;">          yarn run build</span></span>
<span class="line"><span style="color:#B56959;">          ls -lrth</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">-</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">📲 Push To GitHub Pages</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">uses</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ftnext/action-push-ghpages@v1.0.0</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">with</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">build_dir</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">dist</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">github_token</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">\${{ secrets.DEPLOY_TOKEN }}</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">-</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">🔁 Sync to Gitee</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># 同步到Gitee</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">uses</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">wearerequired/git-mirror-action@master</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">env</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;"># 注意在此项目的 Settings-&gt;Actions-&gt; Secrets 配置 GITEE_RSA_PRIVATE_KEY</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">SSH_PRIVATE_KEY</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">\${{ secrets.GITEE_RSA_PRIVATE_KEY }}</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">with</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;"># 注意替换为你的 GitHub 源仓库地址</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">source-repo</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">git@github.com:fxzer/zerdocs.git</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;"># 注意替换为你的 Gitee 目标仓库地址</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">destination-repo</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">git@gitee.com:fxzer/zerdocs.git</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">-</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">✅ Build Gitee Pages</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># 触发Gitee自动部署</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">uses</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">yanglbme/gitee-pages-action@master</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">with</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;"># 注意替换为你的 Gitee 用户名</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">gitee-username</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">fxzer</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;"># 注意在 Settings-&gt;Secrets 配置 GITEE_PASSWORD</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">gitee-password</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">\${{ secrets.GITEE_PASSWORD }}</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;"># 注意替换为你的 Gitee 仓库</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;"># 坑点:https://gitee.com/fxzer/zerdocs --&gt;则填:fxzer/zerdocs,注意仓库名和路径名不一致问题</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">gitee-repo</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">fxzer/zerdocs</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;"># 要部署的分支</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">branch</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">gh-pages</span></span></code></pre></div>`,6),e=[o];function c(t,r,y,A,i,D){return n(),a("div",null,e)}const C=s(l,[["render",c]]);export{B as __pageData,C as default};
