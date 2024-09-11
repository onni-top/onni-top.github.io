import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a,o as e}from"./app-DxgGpIM1.js";const l={};function p(t,s){return e(),i("div",null,s[0]||(s[0]=[a(`<h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>基于本仓库可快速创建你自己的文档网站。 <a href="https://prismjs.com/#supported-languages" target="_blank" rel="noopener noreferrer">高亮语法支持列表</a><a href="https://github.com/PrismJS" target="_blank" rel="noopener noreferrer">PrismJS</a><a href="https://github.com/shikijs/shiki" target="_blank" rel="noopener noreferrer">Shiki</a></p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>编译时自动帮你配置菜单栏和侧边栏，最多三层目录结构。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>非常多的热心开发者开源主题<a href="https://github.com/search?q=vuepress-theme" target="_blank" rel="noopener noreferrer">vuepress-theme</a> 本文档使用<a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">VuePress-hope</a></p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果觉得使用<a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">VuePress</a><a href="https://vitepress.vuejs.org" target="_blank" rel="noopener noreferrer">vitepress</a>不便， 可使用静态博客写作客户端<a href="https://github.com/getgridea/gridea" target="_blank" rel="noopener noreferrer">gridea</a></p></div><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><ul><li><a href="https://vuepress.vuejs.org/zh/guide/directory-structure.html" target="_blank" rel="noopener noreferrer">官方标准目录结构</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>│  .gitignore           git忽略文件</span></span>
<span class="line"><span>│  package-lock.json    NPM依赖配置文件</span></span>
<span class="line"><span>│  yarn.lock            yarn依赖配置文件</span></span>
<span class="line"><span>│  package.json         项目配置文件</span></span>
<span class="line"><span>│  README.md            首页md文件</span></span>
<span class="line"><span>│  </span></span>
<span class="line"><span>├─.github               GitHub配置目录</span></span>
<span class="line"><span>│  └─workflows          Actions工作流目录</span></span>
<span class="line"><span>│          deloy.yml    项目的Actions部署配置</span></span>
<span class="line"><span>│          </span></span>
<span class="line"><span>├─.vuepress             用于存放VuePress的配置、组件、静态资源等。</span></span>
<span class="line"><span>│  │  config.ts        VuePress配置</span></span>
<span class="line"><span>│  │  utils.js          侧边栏和菜单栏自动配置工具</span></span>
<span class="line"><span>│  │  </span></span>
<span class="line"><span>│  ├─styles             用于存放样式相关的文件</span></span>
<span class="line"><span>│  │  │  </span></span>
<span class="line"><span>│  │  └─index.scss      自定义全局样式文件</span></span>
<span class="line"><span>│  │  </span></span>
<span class="line"><span>│  ├─public             静态资源目录</span></span>
<span class="line"><span>│  │  │  CNAME          CNAME文件指定域名，防止发布时被清空</span></span>
<span class="line"><span>│  │  │  manifest.json  5+App（HTML5 Plus移动App）的配置文件</span></span>
<span class="line"><span>│  │  │  static.json    heroku使用buildpack静态部署配置文件</span></span>
<span class="line"><span>│  │  │  </span></span>
<span class="line"><span>│  │  ├─assets          css/img/js等默认的存放路径</span></span>
<span class="line"><span>│  │  │   │  </span></span>
<span class="line"><span>│  │  │   └─js          自定义js文件存放目录</span></span>
<span class="line"><span>│  │  │  </span></span>
<span class="line"><span>│  │  ├─files           可直接访问并下载的文件存放目录</span></span>
<span class="line"><span>│  │  │      </span></span>
<span class="line"><span>│  │  └─images          存放所有文档的图片目录</span></span>
<span class="line"><span>│  │      │  </span></span>
<span class="line"><span>│  │      └─icons       存放图标目录</span></span>
<span class="line"><span>│  │              </span></span>
<span class="line"><span>│  └─theme              主题存放目录</span></span>
<span class="line"><span>│              </span></span>
<span class="line"><span>├─docs                  编译后的静态资源文件输出目录</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>......其他自己的md文档或文件夹，都会打包到docs文件夹下，md文件会编译成html</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>也就是你只需要遵从以上目录结构来修改你自己的文档即可使用。</strong></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>配置文件中的注释文字部分，请结合<a href="https://vuepress.vuejs.org/zh/config" target="_blank" rel="noopener noreferrer">VuePress官方文档</a>一定理解其意义再修改配置！</p></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h2><p><a href="https://gitpod.io/#github.com/bajins/notes-vuepress" target="_blank" rel="noopener noreferrer"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt=""></a></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 先克隆本仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/bajins/notes-vuepress.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 保留上面目录结构列出的文件和文件夹，其他的全部删除</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 使用前请自行安装Node.js环境</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 安装项目的全部依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 这时创建并书写你自己的md文档</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 开始运行开发环境，然后访问窗口中的路径</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 修改.vuepress/public/CNAME中的域名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 如果发布到GitHub请见：项目的Actions部署配置</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Actions教程：https://www.bajins.com/IDE/Git%E6%9C%8D%E5%8A%A1.html#actions</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请确保你的 Node.js 版本 &gt;= 18。</p></div>`,14)]))}const d=n(l,[["render",p],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/","title":"使用","lang":"zh-CN","frontmatter":{"home":true,"icon":"home","bgImageStyle":{"background-attachment":"fixed"},"heroText":"ONNI-NAV","tagline":"一个自用的导航及方便下载。","actions":[{"text":"Download","icon":"lightbulb","link":"./files/","type":"primary"},{"text":"项目列表","link":"./Project/"},{"text":"编程相关","link":"./PL/"},{"text":"系统","link":"./System/"},{"text":"其他","link":"./Other/"}],"copyright":false,"footer":"使用 <a href=\\"https://theme-hope.vuejs.press/zh/\\" target=\\"_blank\\">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2024-至今 onni"},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"命令","slug":"命令","link":"#命令","children":[]}],"git":{"createdTime":1726030162000,"updatedTime":1726030162000,"contributors":[{"name":"onni-top","email":"admin@onni.top","commits":1}]},"readingTime":{"minutes":2.38,"words":714},"filePathRelative":"README.md","localizedDate":"2024年9月11日","excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>基于本仓库可快速创建你自己的文档网站。\\n<a href=\\"https://prismjs.com/#supported-languages\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">高亮语法支持列表</a>\\n<a href=\\"https://github.com/PrismJS\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PrismJS</a><a href=\\"https://github.com/shikijs/shiki\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Shiki</a></p>\\n</div>"}');export{d as comp,h as data};
