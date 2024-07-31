import{_ as o,e as i,ab as c,b as n}from"./chunks/framework.CjXc87SD.js";const x=JSON.parse('{"title":"npm run xxx执行过程","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/Vue/npm run xxx执行过程.md","filePath":"Interview/Vue/npm run xxx执行过程.md"}'),d={name:"Interview/Vue/npm run xxx执行过程.md"};function l(a,e,r,t,s,u){return n(),i("div",null,e[0]||(e[0]=[c('<h1 id="npm-run-xxx执行过程" tabindex="-1">npm run xxx执行过程 <a class="header-anchor" href="#npm-run-xxx执行过程" aria-label="Permalink to &quot;npm run xxx执行过程&quot;">​</a></h1><h2 id="vue-cli-项目" tabindex="-1">vue cli 项目 <a class="header-anchor" href="#vue-cli-项目" aria-label="Permalink to &quot;vue cli 项目&quot;">​</a></h2><ol><li><p>npm run 会先把 <code>node_modules/.bin</code> 加入到 <code>PATH</code> 环境变量</p></li><li><p>找到项目根目录 <code>package.json</code> 文件中 <code> scripts</code> 对应的脚本并执行对应命令</p></li><li><p>相当于执行 <code>vue-cli-service serve</code> ，并去找到<code>npm i (npm i @vue/cli-service)</code>所生成的软连接 <code>./bin/vue-cli-service</code></p></li><li><p>接着去执行软连接指向的 <code>node_modules/@vue/cli-service/bin/vue-cli-service.js</code> （package-lock.json记录了映射关系）</p><ol><li><code>vue-cli-service.js</code>主要解析和比对 node 版本，不匹配则报错</li><li>获取和解析命令行参数，启动服务执行命令</li></ol></li></ol><h2 id="vite项目" tabindex="-1">vite项目 <a class="header-anchor" href="#vite项目" aria-label="Permalink to &quot;vite项目&quot;">​</a></h2><ol><li>npm run 会先把 <code>node_modules/.bin</code> 加入到 <code>PATH</code> 环境变量</li><li>找到项目根目录 <code>package.json</code> 文件中 <code> scripts</code> 对应的脚本并执行对应命令</li><li>去找<code>.bin/vite</code> 软链接，进而找到 <code>node_modules/.pnpm/vite@4.1.1/node_modules/vite/bin/vite.js</code>执行</li></ol>',5)]))}const m=o(d,[["render",l]]);export{x as __pageData,m as default};
