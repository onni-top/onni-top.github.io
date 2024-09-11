import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,c as r,b as n,d as a,w as e,a as t,o as c,e as l}from"./app--VhlLr_b.js";const h="/images/MySQL-glibc%E4%B8%8B%E8%BD%BD.png",o={},k={class:"table-of-contents"};function b(m,s){const i=d("router-link");return c(),r("div",null,[s[8]||(s[8]=n("h1",{id:"mysql安装配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mysql安装配置"},[n("span",null,"MySQL安装配置")])],-1)),n("nav",k,[n("ul",null,[n("li",null,[a(i,{to:"#flag"},{default:e(()=>s[0]||(s[0]=[l("Flag")])),_:1})]),n("li",null,[a(i,{to:"#windows版安装"},{default:e(()=>s[1]||(s[1]=[l("Windows版安装")])),_:1})]),n("li",null,[a(i,{to:"#centos安装"},{default:e(()=>s[2]||(s[2]=[l("CentOS安装")])),_:1}),n("ul",null,[n("li",null,[a(i,{to:"#yum安装"},{default:e(()=>s[3]||(s[3]=[l("yum安装")])),_:1})]),n("li",null,[a(i,{to:"#编译安装"},{default:e(()=>s[4]||(s[4]=[l("编译安装")])),_:1})])])]),n("li",null,[a(i,{to:"#配置"},{default:e(()=>s[5]||(s[5]=[l("配置")])),_:1}),n("ul",null,[n("li",null,[a(i,{to:"#yum安装配置"},{default:e(()=>s[6]||(s[6]=[l("yum安装配置")])),_:1})]),n("li",null,[a(i,{to:"#宝塔面板安装配置"},{default:e(()=>s[7]||(s[7]=[l("宝塔面板安装配置")])),_:1})])])])])]),s[9]||(s[9]=t(`<h2 id="flag" tabindex="-1"><a class="header-anchor" href="#flag"><span>Flag</span></a></h2><ul><li><a href="https://github.com/mysql" target="_blank" rel="noopener noreferrer">https://github.com/mysql</a></li><li><a href="https://dev.mysql.com/downloads" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads</a></li></ul><ul><li><a href="https://segmentfault.com/a/1190000044667101" target="_blank" rel="noopener noreferrer">如何选择适合的 MySQL Connector/J 版本</a></li><li><a href="https://www.cnblogs.com/zxeao/p/16921457.html" target="_blank" rel="noopener noreferrer">MySQL JDBC驱动版本与数据库版本的对应关系及注意事项</a></li><li><a href="https://blog.csdn.net/xunxue1523/article/details/105524758" target="_blank" rel="noopener noreferrer">mysql-connector-java与mysql以及JDK的对应版本</a></li><li><a href="https://linuxize.com/post/how-to-install-mysql-on-ubuntu-20-04" target="_blank" rel="noopener noreferrer">如何在 Ubuntu 20.04 上安装 MySQL</a></li><li><a href="https://www.cnblogs.com/cnwcl/p/13785655.html" target="_blank" rel="noopener noreferrer">ubuntu20 使用命令安装 mysql</a></li><li><a href="https://segmentfault.com/a/1190000039203507" target="_blank" rel="noopener noreferrer">ubuntu20 安装和配置mysql8.0.23</a></li><li><a href="https://www.jianshu.com/p/9e69e0e38665" target="_blank" rel="noopener noreferrer">ubuntu20安装mysql8</a></li><li><a href="https://blog.csdn.net/lduzhenlin/article/details/113243476" target="_blank" rel="noopener noreferrer">ubuntu20.04安装mysql8.0</a></li></ul><blockquote><p>在MySQL 8.0上，<code>auth_socket</code>默认情况下，root用户通过插件进行身份验证。该auth_socket插件对localhost通过Unix套接字文件 从进行连接的用户进行身份验证。这意味着您不能通过提供密码来以root用户身份进行身份验证。</p></blockquote><h2 id="windows版安装" tabindex="-1"><a class="header-anchor" href="#windows版安装"><span>Windows版安装</span></a></h2><blockquote><p>这里是介绍免安装版的Mysql</p></blockquote><ol><li>安装服务：<code>mysqld --install</code> 如果执行错误需要安装C++运行库</li><li>初始化：<code>mysqld --initialize --console</code> 会产生一个随机密码 <ul><li><code>mysqld –initialize-insecure</code> 初始化数据库，并设置默认root密码为空</li><li><code>mysqladmin -u root password 密码&quot;;</code> 创建root用户的密码</li></ul></li><li>开启服务：<code>net start mysql</code></li><li>关闭服务：<code>net stop mysql</code></li><li>登录mysql：<code>mysql -u root -p</code></li><li>修改密码：<code>alter user &#39;root&#39;@&#39;localhost&#39; identified by &#39;密码&#39;;</code></li><li>标记删除mysql服务：<code>sc delete mysql</code></li></ol><h2 id="centos安装" tabindex="-1"><a class="header-anchor" href="#centos安装"><span>CentOS安装</span></a></h2><h3 id="yum安装" tabindex="-1"><a class="header-anchor" href="#yum安装"><span>yum安装</span></a></h3><ul><li><a href="https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/</a></li><li><a href="https://blog.imzhengfei.com/centos-7-an-zhuang-pei-zhi-mysql" target="_blank" rel="noopener noreferrer">https://blog.imzhengfei.com/centos-7-an-zhuang-pei-zhi-mysql/</a></li></ul><blockquote><p>首先<code>CentOS7</code>默认已经不支持<code>mysql</code>，因为收费了你懂得，所以内部集成了<code>mariadb</code>， 而安装<code>mysql</code>的话会和<code>mariadb</code>的文件冲突，所以需要先卸载掉<code>mariadb</code>，以下为卸载<code>mariadb</code>，安装<code>mysql</code>的步骤。</p></blockquote><p><strong>卸载</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看软件包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;mariadb\\|mysql&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># --nodeps强制卸载</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --nodeps</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mariadb-libs-5.5.56-2.el7.x86_64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 检测系统是否存在mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> installed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除mysql依赖项</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remove</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-libs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查找残留目录</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">whereis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>安装依赖</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libaio</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> glibc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>下载yum源</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># MySQL 8.0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://repo.mysql.com//mysql80-community-release-el7-1.noarch.rpm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装yum源</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localinstall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql80-community-release-el7-1.noarch.rpm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>查看所有版本</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> repolist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> all</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>可以看到这里默认启用了<code>MySQL 8.0 Community Server</code>，而我们需要安装的是<code>MySQL 5.7 Community Server</code></p></blockquote><p><strong>修改源设置</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/yum.repos.d/mysql-community.repo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>找到mysql57-community节点</li></ul><blockquote><p>将<code>enabled=0</code>改成<code>enabled=1</code></p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[mysql57-community]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MySQL</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> 5.7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Community</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">baseurl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">http://repo.mysql.com/yum/mysql-5.7-community/el/7/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$basearch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gpgcheck</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gpgkey</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>找到<code>mysql80-community</code>节点</li></ul><blockquote><p>将<code>enabled=1</code>改成<code>enabled=0</code></p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[mysql80-community]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MySQL</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> 8.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Community</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">baseurl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">http://repo.mysql.com/yum/mysql-8.0-community/el/7/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$basearch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gpgcheck</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>或者使用命令</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 禁用MySQL版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum-config-manager</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql80-community</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启用MySQL版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum-config-manager</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql57-community</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看默认启用版本</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> repolist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>安装</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-community-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>查看安装版本</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysqld</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -V</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装"><span>编译安装</span></a></h3><p><strong>下载</strong></p><ul><li><a href="https://dev.mysql.com/downloads/mysql/5.7.html#downloads" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/mysql/5.7.html#downloads</a></li></ul><p><img src="`+h+`" alt=""></p><p><strong>解压</strong></p><blockquote><p>建议：不要安装到其它目录，否则数据库初始化的时候会报<code>cannot change dir</code>的错</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zxvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 重命名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-5.7.22-linux-glibc2.12-x86_64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建用户组</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">group</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>创建用户</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>为了安全性，给mysql数据库创建专有用户，该用户只能访问mysql目录，不能访问系统其它目录</p></li><li><p>另外不建议直接用root初始化mysql，否则连接mysql时会报错：</p></li></ul><blockquote><p><code>[ERROR] Fatal error: Please read &quot;Security&quot; section of the manual to find out how to run mysqld as root!</code></p></blockquote><p><strong>创建data目录</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> data</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>指定用户和用户组</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chgrp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>-R</code>包含目录下所有和目录和文件</p></blockquote><p><strong>初始化</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/mysql/bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./mysqld</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --initialize</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --user=mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--basedir=/usr/local/mysql/ </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--datadir=/usr/local/mysql/data/ </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--lc_messages_dir=/usr/local/mysql/share </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--lc_messages=en_US</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>记住生成的临时密码,如果忘记密码或者想重新初始化，可以先将<code>mysql/data</code>目录中文件删除，然后再执行初始化命令</p></blockquote><p><strong>启动</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/mysql/bin</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启动</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./mysqld_safe</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --user=mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>设为开机启动</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/mysql/support-files/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql.server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/init.d/mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/init.d/mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>将mysql目录填上</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">basedir</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/mysql/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">datadir</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/mysql/data/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>授权</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/init.d/mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>添加开机启动</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chkconfig</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>service启动</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 重启服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 停止服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><ul><li>5.7动态参数 <a href="https://dev.mysql.com/doc/refman/5.7/en/dynamic-system-variables.html" target="_blank" rel="noopener noreferrer">5.7 Dynamic System Variables</a></li><li>8.0动态参数 <a href="https://dev.mysql.com/doc/refman/8.0/en/dynamic-system-variables.html" target="_blank" rel="noopener noreferrer">8.0 Dynamic System Variables</a><ul><li><a href="https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html</a></li><li><code>set persist</code> 修改并持久化动态参数</li><li><code>set persist_only</code> 持久化静态参数</li></ul></li><li><a href="https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html" target="_blank" rel="noopener noreferrer">服务器系统变量 - 官网</a></li></ul><blockquote><p>从5.7.17后mysql就没有默认的<code>my_default.cnf</code>文件，需要手动创建</p></blockquote><blockquote><p>windows在mysql目录下创建一个ini或cnf配置文件</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/my.cnf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>按<code>i</code>后输入以下内容</p></blockquote><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[mysqld]</span></span>
<span class="line"><span># sql_mode = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 一般配置选项</span></span>
<span class="line"><span>basedir = /usr/local/mysql/</span></span>
<span class="line"><span>datadir = /usr/local/mysql/data</span></span>
<span class="line"><span>port = 3306</span></span>
<span class="line"><span>character-set-server = utf8</span></span>
<span class="line"><span>explicit_defaults_for_timestamp = true</span></span>
<span class="line"><span># socket = /var/run/mysqld/mysqld.sock</span></span>
<span class="line"><span># 0：区分大小写，1：不区分大小写</span></span>
<span class="line"><span>lower_case_table_names =1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#下面是可选项，要不要都行，如果出现启动错误，则全部注释掉，</span></span>
<span class="line"><span>#保留最基本的配置选项，然后尝试添加某些配置项后启动，检测配置项是否有误</span></span>
<span class="line"><span>back_log = 300</span></span>
<span class="line"><span>max_connections = 3000</span></span>
<span class="line"><span>max_connect_errors = 50</span></span>
<span class="line"><span>table_open_cache = 4096</span></span>
<span class="line"><span>max_allowed_packet = 32M</span></span>
<span class="line"><span>#binlog_cache_size = 4M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>max_heap_table_size = 128M</span></span>
<span class="line"><span>read_rnd_buffer_size = 16M</span></span>
<span class="line"><span>sort_buffer_size = 16M</span></span>
<span class="line"><span>join_buffer_size = 16M</span></span>
<span class="line"><span>thread_cache_size = 16</span></span>
<span class="line"><span>query_cache_size = 128M</span></span>
<span class="line"><span>query_cache_limit = 4M</span></span>
<span class="line"><span>ft_min_word_len = 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 默认开启事件调度器ON或者是1</span></span>
<span class="line"><span>event_scheduler=ON</span></span>
<span class="line"><span>thread_stack = 512K</span></span>
<span class="line"><span>#默认是REPEATABLE-READ，改成读已提交</span></span>
<span class="line"><span>transaction-isolation=READ-COMMITTED</span></span>
<span class="line"><span>#永久设置手动提交事务</span></span>
<span class="line"><span>#autocommit=0</span></span>
<span class="line"><span>tmp_table_size = 128M</span></span>
<span class="line"><span>#log-bin=mysql-bin</span></span>
<span class="line"><span>long_query_time = 6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server_id=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>innodb_buffer_pool_size = 1G</span></span>
<span class="line"><span>innodb_thread_concurrency = 16</span></span>
<span class="line"><span>innodb_log_buffer_size = 16M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>innodb_log_file_size = 512M</span></span>
<span class="line"><span>innodb_log_files_in_group = 3</span></span>
<span class="line"><span>innodb_max_dirty_pages_pct = 90</span></span>
<span class="line"><span>innodb_lock_wait_timeout = 120</span></span>
<span class="line"><span>innodb_file_per_table = on</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqldump]</span></span>
<span class="line"><span>quick</span></span>
<span class="line"><span>max_allowed_packet = 32M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysql]</span></span>
<span class="line"><span>no-auto-rehash</span></span>
<span class="line"><span>default-character-set=utf8</span></span>
<span class="line"><span>safe-updates</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[myisamchk]</span></span>
<span class="line"><span>key_buffer = 16M</span></span>
<span class="line"><span>sort_buffer_size = 16M</span></span>
<span class="line"><span>read_buffer = 8M</span></span>
<span class="line"><span>write_buffer = 8M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqlhotcopy]</span></span>
<span class="line"><span>interactive-timeout</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqld_safe]</span></span>
<span class="line"><span>open-files-limit = 8192</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yum安装配置" tabindex="-1"><a class="header-anchor" href="#yum安装配置"><span>yum安装配置</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[client]</span></span>
<span class="line"><span>#password   = your_password</span></span>
<span class="line"><span>port        = 3306</span></span>
<span class="line"><span>socket      = /var/lib/mysql/mysql.sock</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqld]</span></span>
<span class="line"><span>port        = 3306</span></span>
<span class="line"><span>socket      = /var/lib/mysql/mysql.sock</span></span>
<span class="line"><span>datadir = /var/lib/mysql</span></span>
<span class="line"><span>symbolic-links= 0</span></span>
<span class="line"><span>log-error= /var/log/mysqld.log</span></span>
<span class="line"><span>pid-file= /var/run/mysqld/mysqld.pid</span></span>
<span class="line"><span>skip-external-locking</span></span>
<span class="line"><span>performance_schema_max_table_instances=400</span></span>
<span class="line"><span>table_definition_cache=400</span></span>
<span class="line"><span>key_buffer_size = 32M</span></span>
<span class="line"><span>max_allowed_packet = 100G</span></span>
<span class="line"><span>table_open_cache = 128</span></span>
<span class="line"><span>sort_buffer_size = 768K</span></span>
<span class="line"><span>net_buffer_length = 8K</span></span>
<span class="line"><span>read_buffer_size = 768K</span></span>
<span class="line"><span>read_rnd_buffer_size = 512K</span></span>
<span class="line"><span>myisam_sort_buffer_size = 8M</span></span>
<span class="line"><span>thread_cache_size = 16</span></span>
<span class="line"><span>query_cache_size = 16M</span></span>
<span class="line"><span>tmp_table_size = 32M</span></span>
<span class="line"><span>sql-mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES</span></span>
<span class="line"><span></span></span>
<span class="line"><span>explicit_defaults_for_timestamp = true</span></span>
<span class="line"><span>#skip-networking</span></span>
<span class="line"><span>max_connections = 500</span></span>
<span class="line"><span>max_connect_errors = 100</span></span>
<span class="line"><span>open_files_limit = 65535</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 0：区分大小写，1：不区分大小写</span></span>
<span class="line"><span>lower_case_table_names =1</span></span>
<span class="line"><span># 默认开启事件调度器ON或者是1</span></span>
<span class="line"><span>event_scheduler=ON</span></span>
<span class="line"><span></span></span>
<span class="line"><span>thread_stack = 512K</span></span>
<span class="line"><span>#默认是REPEATABLE-READ，改成读已提交</span></span>
<span class="line"><span>transaction-isolation=READ-COMMITTED</span></span>
<span class="line"><span>#永久设置手动提交事务</span></span>
<span class="line"><span>#autocommit=0</span></span>
<span class="line"><span>tmp_table_size = 128M</span></span>
<span class="line"><span>#注释掉之后，会关闭binlog日志</span></span>
<span class="line"><span>log-bin=mysql-bin</span></span>
<span class="line"><span>#注释掉之后，会关闭binlog日志</span></span>
<span class="line"><span>binlog_format=mixed</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 数据库ID号,为1时表示为Master,其中master_id必须为1到232–1</span></span>
<span class="line"><span># 之间的一个正整数值，主从server-id不能一样;</span></span>
<span class="line"><span>server-id = 1</span></span>
<span class="line"><span>#自动删除5天前的日志。默认值为0，表示从不删除。</span></span>
<span class="line"><span>expire_logs_days = 5</span></span>
<span class="line"><span>slow_query_log=1</span></span>
<span class="line"><span>slow-query-log-file=/var/lib/mysql/mysql-slow.log</span></span>
<span class="line"><span>long_query_time=3</span></span>
<span class="line"><span>#log_queries_not_using_indexes=on</span></span>
<span class="line"><span></span></span>
<span class="line"><span># MySQL5.7.11拥有，默认值为keyring_file，</span></span>
<span class="line"><span># InnoDB表空间在初始化InnoDB之前需要此插件来加密，</span></span>
<span class="line"><span># MySQL5.7.12及以后此参数默认为空</span></span>
<span class="line"><span>#early-plugin-load = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#loose-innodb-trx=0</span></span>
<span class="line"><span>#loose-innodb-locks=0</span></span>
<span class="line"><span>#loose-innodb-lock-waits=0</span></span>
<span class="line"><span>#loose-innodb-cmp=0</span></span>
<span class="line"><span>#loose-innodb-cmp-per-index=0</span></span>
<span class="line"><span>#loose-innodb-cmp-per-index-reset=0</span></span>
<span class="line"><span>#loose-innodb-cmp-reset=0</span></span>
<span class="line"><span>#loose-innodb-cmpmem=0</span></span>
<span class="line"><span>#loose-innodb-cmpmem-reset=0</span></span>
<span class="line"><span>#loose-innodb-buffer-page=0</span></span>
<span class="line"><span>#loose-innodb-buffer-page-lru=0</span></span>
<span class="line"><span>#loose-innodb-buffer-pool-stats=0</span></span>
<span class="line"><span>#loose-innodb-metrics=0</span></span>
<span class="line"><span>#loose-innodb-ft-default-stopword=0</span></span>
<span class="line"><span>#loose-innodb-ft-inserted=0</span></span>
<span class="line"><span>#loose-innodb-ft-deleted=0</span></span>
<span class="line"><span>#loose-innodb-ft-being-deleted=0</span></span>
<span class="line"><span>#loose-innodb-ft-config=0</span></span>
<span class="line"><span>#loose-innodb-ft-index-cache=0</span></span>
<span class="line"><span>#loose-innodb-ft-index-table=0</span></span>
<span class="line"><span>#loose-innodb-sys-tables=0</span></span>
<span class="line"><span>#loose-innodb-sys-tablestats=0</span></span>
<span class="line"><span>#loose-innodb-sys-indexes=0</span></span>
<span class="line"><span>#loose-innodb-sys-columns=0</span></span>
<span class="line"><span>#loose-innodb-sys-fields=0</span></span>
<span class="line"><span>#loose-innodb-sys-foreign=0</span></span>
<span class="line"><span>#loose-innodb-sys-foreign-cols=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>default_storage_engine = InnoDB</span></span>
<span class="line"><span>innodb_data_home_dir = /var/lib/mysql</span></span>
<span class="line"><span>innodb_data_file_path = ibdata1:10M:autoextend</span></span>
<span class="line"><span>innodb_log_group_home_dir = /var/lib/mysql</span></span>
<span class="line"><span>innodb_buffer_pool_size = 128M</span></span>
<span class="line"><span>innodb_log_file_size = 64M</span></span>
<span class="line"><span>innodb_log_buffer_size = 16M</span></span>
<span class="line"><span>innodb_flush_log_at_trx_commit = 1</span></span>
<span class="line"><span>innodb_lock_wait_timeout = 120</span></span>
<span class="line"><span>innodb_max_dirty_pages_pct = 90</span></span>
<span class="line"><span>innodb_read_io_threads = 3</span></span>
<span class="line"><span>innodb_write_io_threads = 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqldump]</span></span>
<span class="line"><span>quick</span></span>
<span class="line"><span>max_allowed_packet = 16M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysql]</span></span>
<span class="line"><span>no-auto-rehash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[myisamchk]</span></span>
<span class="line"><span>key_buffer_size = 32M</span></span>
<span class="line"><span>sort_buffer_size = 768K</span></span>
<span class="line"><span>read_buffer = 2M</span></span>
<span class="line"><span>write_buffer = 2M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqlhotcopy]</span></span>
<span class="line"><span>interactive-timeout</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="宝塔面板安装配置" tabindex="-1"><a class="header-anchor" href="#宝塔面板安装配置"><span>宝塔面板安装配置</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[client]</span></span>
<span class="line"><span>#password   = your_password</span></span>
<span class="line"><span>port        = 3306</span></span>
<span class="line"><span>socket      = /tmp/mysql.sock</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqld]</span></span>
<span class="line"><span>port        = 3306</span></span>
<span class="line"><span>socket      = /tmp/mysql.sock</span></span>
<span class="line"><span>datadir = /usr/local/mysql/data</span></span>
<span class="line"><span>skip-external-locking</span></span>
<span class="line"><span>performance_schema_max_table_instances=400</span></span>
<span class="line"><span>table_definition_cache=400</span></span>
<span class="line"><span>key_buffer_size = 32M</span></span>
<span class="line"><span>max_allowed_packet = 100G</span></span>
<span class="line"><span>table_open_cache = 128</span></span>
<span class="line"><span>sort_buffer_size = 768K</span></span>
<span class="line"><span>net_buffer_length = 8K</span></span>
<span class="line"><span>read_buffer_size = 768K</span></span>
<span class="line"><span>read_rnd_buffer_size = 512K</span></span>
<span class="line"><span>myisam_sort_buffer_size = 8M</span></span>
<span class="line"><span>thread_cache_size = 16</span></span>
<span class="line"><span>query_cache_size = 16M</span></span>
<span class="line"><span>tmp_table_size = 32M</span></span>
<span class="line"><span>sql-mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES</span></span>
<span class="line"><span></span></span>
<span class="line"><span>explicit_defaults_for_timestamp = true</span></span>
<span class="line"><span>#skip-networking</span></span>
<span class="line"><span>max_connections = 500</span></span>
<span class="line"><span>max_connect_errors = 100</span></span>
<span class="line"><span>open_files_limit = 65535</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 0：区分大小写，1：不区分大小写</span></span>
<span class="line"><span>lower_case_table_names =1</span></span>
<span class="line"><span># 默认开启事件调度器ON或者是1</span></span>
<span class="line"><span>event_scheduler=ON</span></span>
<span class="line"><span></span></span>
<span class="line"><span>thread_stack = 512K</span></span>
<span class="line"><span>#默认是REPEATABLE-READ，改成读已提交</span></span>
<span class="line"><span>transaction-isolation=READ-COMMITTED</span></span>
<span class="line"><span>#永久设置手动提交事务</span></span>
<span class="line"><span>#autocommit=0</span></span>
<span class="line"><span>tmp_table_size = 128M</span></span>
<span class="line"><span>#注释掉之后，会关闭binlog日志</span></span>
<span class="line"><span>log-bin=mysql-bin</span></span>
<span class="line"><span>#注释掉之后，会关闭binlog日志</span></span>
<span class="line"><span>binlog_format=mixed</span></span>
<span class="line"><span>server-id = 1</span></span>
<span class="line"><span>#自动删除5天前的日志。默认值为0，表示从不删除。</span></span>
<span class="line"><span>expire_logs_days = 5</span></span>
<span class="line"><span>slow_query_log=1</span></span>
<span class="line"><span>slow-query-log-file=/usr/local/mysql/data/mysql-slow.log</span></span>
<span class="line"><span>long_query_time=3</span></span>
<span class="line"><span>#log_queries_not_using_indexes=on</span></span>
<span class="line"><span># MySQL5.7.11拥有，默认值为keyring_file，</span></span>
<span class="line"><span># InnoDB表空间在初始化InnoDB之前需要此插件来加密，</span></span>
<span class="line"><span># MySQL5.7.12及以后此参数默认为空</span></span>
<span class="line"><span>#early-plugin-load = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#loose-innodb-trx=0</span></span>
<span class="line"><span>#loose-innodb-locks=0</span></span>
<span class="line"><span>#loose-innodb-lock-waits=0</span></span>
<span class="line"><span>#loose-innodb-cmp=0</span></span>
<span class="line"><span>#loose-innodb-cmp-per-index=0</span></span>
<span class="line"><span>#loose-innodb-cmp-per-index-reset=0</span></span>
<span class="line"><span>#loose-innodb-cmp-reset=0</span></span>
<span class="line"><span>#loose-innodb-cmpmem=0</span></span>
<span class="line"><span>#loose-innodb-cmpmem-reset=0</span></span>
<span class="line"><span>#loose-innodb-buffer-page=0</span></span>
<span class="line"><span>#loose-innodb-buffer-page-lru=0</span></span>
<span class="line"><span>#loose-innodb-buffer-pool-stats=0</span></span>
<span class="line"><span>#loose-innodb-metrics=0</span></span>
<span class="line"><span>#loose-innodb-ft-default-stopword=0</span></span>
<span class="line"><span>#loose-innodb-ft-inserted=0</span></span>
<span class="line"><span>#loose-innodb-ft-deleted=0</span></span>
<span class="line"><span>#loose-innodb-ft-being-deleted=0</span></span>
<span class="line"><span>#loose-innodb-ft-config=0</span></span>
<span class="line"><span>#loose-innodb-ft-index-cache=0</span></span>
<span class="line"><span>#loose-innodb-ft-index-table=0</span></span>
<span class="line"><span>#loose-innodb-sys-tables=0</span></span>
<span class="line"><span>#loose-innodb-sys-tablestats=0</span></span>
<span class="line"><span>#loose-innodb-sys-indexes=0</span></span>
<span class="line"><span>#loose-innodb-sys-columns=0</span></span>
<span class="line"><span>#loose-innodb-sys-fields=0</span></span>
<span class="line"><span>#loose-innodb-sys-foreign=0</span></span>
<span class="line"><span>#loose-innodb-sys-foreign-cols=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>default_storage_engine = InnoDB</span></span>
<span class="line"><span>innodb_data_home_dir = /usr/local/mysql/data</span></span>
<span class="line"><span>innodb_data_file_path = ibdata1:10M:autoextend</span></span>
<span class="line"><span>innodb_log_group_home_dir = /usr/local/mysql/data</span></span>
<span class="line"><span>innodb_buffer_pool_size = 128M</span></span>
<span class="line"><span>innodb_log_file_size = 64M</span></span>
<span class="line"><span>innodb_log_buffer_size = 16M</span></span>
<span class="line"><span>innodb_flush_log_at_trx_commit = 1</span></span>
<span class="line"><span>innodb_lock_wait_timeout = 120</span></span>
<span class="line"><span>innodb_max_dirty_pages_pct = 90</span></span>
<span class="line"><span>innodb_read_io_threads = 3</span></span>
<span class="line"><span>innodb_write_io_threads = 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqldump]</span></span>
<span class="line"><span>quick</span></span>
<span class="line"><span>max_allowed_packet = 16M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysql]</span></span>
<span class="line"><span>no-auto-rehash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[myisamchk]</span></span>
<span class="line"><span>key_buffer_size = 32M</span></span>
<span class="line"><span>sort_buffer_size = 768K</span></span>
<span class="line"><span>read_buffer = 2M</span></span>
<span class="line"><span>write_buffer = 2M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqlhotcopy]</span></span>
<span class="line"><span>interactive-timeout</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>按<code>ESC</code>后输入<code>:wq</code>退出</p></blockquote>`,85))])}const g=p(o,[["render",b],["__file","MySQL安装配置.html.vue"]]),y=JSON.parse('{"path":"/DBS/MySQL%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE.html","title":"MySQL安装配置","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Flag","slug":"flag","link":"#flag","children":[]},{"level":2,"title":"Windows版安装","slug":"windows版安装","link":"#windows版安装","children":[]},{"level":2,"title":"CentOS安装","slug":"centos安装","link":"#centos安装","children":[{"level":3,"title":"yum安装","slug":"yum安装","link":"#yum安装","children":[]},{"level":3,"title":"编译安装","slug":"编译安装","link":"#编译安装","children":[]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"yum安装配置","slug":"yum安装配置","link":"#yum安装配置","children":[]},{"level":3,"title":"宝塔面板安装配置","slug":"宝塔面板安装配置","link":"#宝塔面板安装配置","children":[]}]}],"git":{"createdTime":1726030162000,"updatedTime":1726030162000,"contributors":[{"name":"onni-top","email":"admin@onni.top","commits":1}]},"readingTime":{"minutes":7.67,"words":2301},"filePathRelative":"DBS/MySQL安装配置.md","localizedDate":"2024年9月11日","excerpt":"\\n\\n<h2>Flag</h2>\\n<ul>\\n<li><a href=\\"https://github.com/mysql\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/mysql</a></li>\\n<li><a href=\\"https://dev.mysql.com/downloads\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://dev.mysql.com/downloads</a></li>\\n</ul>\\n<ul>\\n<li><a href=\\"https://segmentfault.com/a/1190000044667101\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">如何选择适合的 MySQL Connector/J 版本</a></li>\\n<li><a href=\\"https://www.cnblogs.com/zxeao/p/16921457.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL JDBC驱动版本与数据库版本的对应关系及注意事项</a></li>\\n<li><a href=\\"https://blog.csdn.net/xunxue1523/article/details/105524758\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">mysql-connector-java与mysql以及JDK的对应版本</a></li>\\n<li><a href=\\"https://linuxize.com/post/how-to-install-mysql-on-ubuntu-20-04\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">如何在 Ubuntu 20.04 上安装 MySQL</a></li>\\n<li><a href=\\"https://www.cnblogs.com/cnwcl/p/13785655.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ubuntu20 使用命令安装 mysql</a></li>\\n<li><a href=\\"https://segmentfault.com/a/1190000039203507\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ubuntu20 安装和配置mysql8.0.23</a></li>\\n<li><a href=\\"https://www.jianshu.com/p/9e69e0e38665\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ubuntu20安装mysql8</a></li>\\n<li><a href=\\"https://blog.csdn.net/lduzhenlin/article/details/113243476\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ubuntu20.04安装mysql8.0</a></li>\\n</ul>"}');export{g as comp,y as data};
