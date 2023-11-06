import{_ as s,o as a,c as n,Q as t}from"./chunks/framework.c53372a0.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"BackEnd/Server/Nginx学习笔记.md","filePath":"BackEnd/Server/Nginx学习笔记.md"}'),l={name:"BackEnd/Server/Nginx学习笔记.md"},e=t(`<h2 id="一、nginx安装" tabindex="-1">一、Nginx安装 <a class="header-anchor" href="#一、nginx安装" aria-label="Permalink to &quot;一、Nginx安装&quot;">​</a></h2><h3 id="_1-安装命令" tabindex="-1">1.安装命令 <a class="header-anchor" href="#_1-安装命令" aria-label="Permalink to &quot;1.安装命令&quot;">​</a></h3><table><thead><tr><th>Ubuntu</th><th>apt install nginx</th></tr></thead><tbody><tr><td>CentOS(Red Hat系列)</td><td>yum install nginx</td></tr></tbody></table><h3 id="_2-linux目录结构" tabindex="-1">2.Linux目录结构 <a class="header-anchor" href="#_2-linux目录结构" aria-label="Permalink to &quot;2.Linux目录结构&quot;">​</a></h3><p><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302032207741.png" alt=""></p><h3 id="_3-基础命令" tabindex="-1">3.基础命令 <a class="header-anchor" href="#_3-基础命令" aria-label="Permalink to &quot;3.基础命令&quot;">​</a></h3><table><thead><tr><th>nginx -v/nginx -V</th><th>查看nginx版本等信息</th></tr></thead><tbody><tr><td>systemctl start/stop nginx</td><td>启动/停止nginx</td></tr><tr><td>systemctl status nginx</td><td>查看nginx运行状态</td></tr><tr><td>ps -ef | grep nginx</td><td>查看nginx进程</td></tr><tr><td>kill -QUIT 进程号</td><td></td></tr><tr><td>kill -TERM 进程号</td><td>从容停止</td></tr><tr><td>kill -TERM 进程号</td><td></td></tr><tr><td>kill -INT 进程号</td><td>快速停止</td></tr><tr><td>pkill -9 nginx</td><td>强制停止</td></tr></tbody></table><h2 id="编写配置" tabindex="-1">编写配置 <a class="header-anchor" href="#编写配置" aria-label="Permalink to &quot;编写配置&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">nginx</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-t</span><span style="color:#DBD7CAEE;">	</span><span style="color:#758575DD;">#检查配置文件有没有问题</span></span>
<span class="line"><span style="color:#80A665;">grep</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-Ei</span><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">\\{|\\}</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;">   </span><span style="color:#C98A7D;">nginx.conf</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">#检查配置文件括号配对问题</span></span>
<span class="line"><span style="color:#80A665;">nginx</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-s</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">reload</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">#重载配置</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">nginx</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-t</span><span style="color:#393A34;">	</span><span style="color:#A0ADA0;">#检查配置文件有没有问题</span></span>
<span class="line"><span style="color:#59873A;">grep</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-Ei</span><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">\\{|\\}</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;">   </span><span style="color:#B56959;">nginx.conf</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#检查配置文件括号配对问题</span></span>
<span class="line"><span style="color:#59873A;">nginx</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-s</span><span style="color:#393A34;"> </span><span style="color:#B56959;">reload</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#重载配置</span></span></code></pre></div><h2 id="日志分析器" tabindex="-1">日志分析器 <a class="header-anchor" href="#日志分析器" aria-label="Permalink to &quot;日志分析器&quot;">​</a></h2><h2 id="netstat命令" tabindex="-1"><a href="https://linux.cn/article-2434-1.html" target="_blank" rel="noreferrer">netstat命令</a> <a class="header-anchor" href="#netstat命令" aria-label="Permalink to &quot;[netstat命令](https://linux.cn/article-2434-1.html)&quot;">​</a></h2><h2 id="curl命令" tabindex="-1"><a href="https://blog.csdn.net/u013514928/article/details/102810250" target="_blank" rel="noreferrer">curl命令</a> <a class="header-anchor" href="#curl命令" aria-label="Permalink to &quot;[curl命令](https://blog.csdn.net/u013514928/article/details/102810250)&quot;">​</a></h2><h2 id="centos7联网" tabindex="-1">CentOS7联网 <a class="header-anchor" href="#centos7联网" aria-label="Permalink to &quot;CentOS7联网&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">ip</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">a</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">#查看网卡</span></span>
<span class="line"><span style="color:#B8A965;">cd</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">/etc/sysconfig/network-scripts</span></span>
<span class="line"><span style="color:#80A665;">vi</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">ifcfg-ens160</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">#把ONBOOT=no ===&gt; 改为yes</span></span>
<span class="line"><span style="color:#80A665;">systemctl</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">restart</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">network</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">#重启网络</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">ip</span><span style="color:#393A34;"> </span><span style="color:#B56959;">a</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#查看网卡</span></span>
<span class="line"><span style="color:#998418;">cd</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/etc/sysconfig/network-scripts</span></span>
<span class="line"><span style="color:#59873A;">vi</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ifcfg-ens160</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#把ONBOOT=no ===&gt; 改为yes</span></span>
<span class="line"><span style="color:#59873A;">systemctl</span><span style="color:#393A34;"> </span><span style="color:#B56959;">restart</span><span style="color:#393A34;"> </span><span style="color:#B56959;">network</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#重启网络</span></span></code></pre></div>`,14),o=[e];function p(r,c,i,d,y,h){return a(),n("div",null,o)}const g=s(l,[["render",p]]);export{D as __pageData,g as default};
