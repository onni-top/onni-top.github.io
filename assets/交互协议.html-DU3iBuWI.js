import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,c as h,b as r,e as l,w as o,a as p,o as s,d as i}from"./app-DxgGpIM1.js";const c={},g={class:"table-of-contents"};function u(b,e){const t=n("router-link");return s(),h("div",null,[e[4]||(e[4]=r("h1",{id:"交互协议",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#交互协议"},[r("span",null,"交互协议")])],-1)),r("nav",g,[r("ul",null,[r("li",null,[l(t,{to:"#flag"},{default:o(()=>e[0]||(e[0]=[i("Flag")])),_:1})]),r("li",null,[l(t,{to:"#数据传输模型"},{default:o(()=>e[1]||(e[1]=[i("数据传输模型")])),_:1})]),r("li",null,[l(t,{to:"#网络通信协议"},{default:o(()=>e[2]||(e[2]=[i("网络通信协议")])),_:1}),r("ul",null,[r("li",null,[l(t,{to:"#http"},{default:o(()=>e[3]||(e[3]=[i("HTTP")])),_:1})])])])])]),e[5]||(e[5]=p('<h2 id="flag" tabindex="-1"><a class="header-anchor" href="#flag"><span>Flag</span></a></h2><blockquote><p>端到端、服务到服务、端到服务之间的交互协议规范</p></blockquote><ul><li><a href="https://github.com/schemaorg" target="_blank" rel="noopener noreferrer">https://github.com/schemaorg</a><ul><li><a href="https://schema.org" target="_blank" rel="noopener noreferrer">https://schema.org</a></li></ul></li><li>OpenAPI规范 <a href="https://github.com/OAI" target="_blank" rel="noopener noreferrer">https://github.com/OAI</a><ul><li><a href="https://github.com/OpenAPITools" target="_blank" rel="noopener noreferrer">https://github.com/OpenAPITools</a></li><li><a href="https://github.com/rookie-luochao/openapi-ui" target="_blank" rel="noopener noreferrer">https://github.com/rookie-luochao/openapi-ui</a></li></ul></li><li><a href="https://github.com/graphql" target="_blank" rel="noopener noreferrer">https://github.com/graphql</a><ul><li><a href="https://graphql.org" target="_blank" rel="noopener noreferrer">https://graphql.org</a></li><li><a href="https://github.com/chentsulin/awesome-graphql" target="_blank" rel="noopener noreferrer">https://github.com/chentsulin/awesome-graphql</a></li><li><a href="https://github.com/apollographql" target="_blank" rel="noopener noreferrer">https://github.com/apollographql</a></li><li><a href="https://github.com/dotansimha/graphql-yoga" target="_blank" rel="noopener noreferrer">https://github.com/dotansimha/graphql-yoga</a></li><li><a href="https://github.com/n1ru4l/envelop" target="_blank" rel="noopener noreferrer">https://github.com/n1ru4l/envelop</a></li></ul></li><li>C# <a href="https://github.com/dotnet/wcf" target="_blank" rel="noopener noreferrer">https://github.com/dotnet/wcf</a><ul><li><a href="https://learn.microsoft.com/zh-cn/dotnet/framework/wcf" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/zh-cn/dotnet/framework/wcf</a></li></ul></li><li>Java <a href="https://github.com/apache/cxf" target="_blank" rel="noopener noreferrer">https://github.com/apache/cxf</a></li><li><a href="https://axis.apache.org" target="_blank" rel="noopener noreferrer">https://axis.apache.org</a><ul><li><a href="https://github.com/bnoordhuis/axis2-c" target="_blank" rel="noopener noreferrer">https://github.com/bnoordhuis/axis2-c</a></li></ul></li></ul><h2 id="数据传输模型" tabindex="-1"><a class="header-anchor" href="#数据传输模型"><span>数据传输模型</span></a></h2><blockquote><p>该模型用于帮助人们解决应用程序与服务器传递数据的问题</p></blockquote><blockquote><p>WebService是RPC的一种，RPC使用非常广泛（RPC和MQ是分布式两大基石），目前基本上各大场都有自己的RPC，开源成熟的RPC也非常多。</p></blockquote><blockquote><p>RPC按通信协议，可以分为：基于HTTP的、基于TCP等； 按报文协议可以分为：基于XML文本的、基于JSON文本的，二进制的； 按照是否跨平台语言，可以分为：平台专用的，平台中立的</p></blockquote><ul><li><a href="https://www.cnblogs.com/charlieroro/p/14570214.html" target="_blank" rel="noopener noreferrer">API架构风格对比：SOAP vs REST vs GraphQL vs RPC</a></li><li><a href="https://kreya.app/blog/rest-vs-grpc" target="_blank" rel="noopener noreferrer">REST 和 gRPC 的详细比较</a><ul><li><a href="https://github.com/riok/kreya" target="_blank" rel="noopener noreferrer">https://github.com/riok/kreya</a></li></ul></li><li><a href="https://www.jianshu.com/p/246b95d959a0" target="_blank" rel="noopener noreferrer">JMS Java消息服务(Java Message Service)</a></li></ul><ul><li><a href="https://www.w3.org/2002/ws/Activity" target="_blank" rel="noopener noreferrer">Web Service 模型</a><ul><li><a href="https://www.w3.org/TR/2000/NOTE-SOAP-20000508/#_Toc478383487" target="_blank" rel="noopener noreferrer">SOAP(Simple Object Access Protocol，即简单对象访问协议)</a><ul><li>SOAP over HTTP</li><li>SOAP over TCP</li><li>SOAPover Message Queues</li><li>RSS Syndication Services</li><li>WS-Discovery</li><li>WS-Addressing</li><li>WS-ReliableMessaging</li><li>WS-Security</li><li>JAX-WS（Java API for XML-based Web services）</li><li><a href="https://blog.csdn.net/gls_nuaa/article/details/127724343" target="_blank" rel="noopener noreferrer">UDDI</a></li></ul></li><li>RPC 模型（面向方法）<a href="https://en.wikipedia.org/wiki/Remote_procedure_call#General" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Remote_procedure_call#General</a><ul><li><a href="http://www.xmlrpc.com/spec" target="_blank" rel="noopener noreferrer">XML-RPC</a></li><li><a href="http://json-rpc.org/wiki/specification" target="_blank" rel="noopener noreferrer">JSON-RPC</a> <a href="https://www.jsonrpc.org" target="_blank" rel="noopener noreferrer">https://www.jsonrpc.org</a></li><li><a href="https://www.w3.org/TR/soap" target="_blank" rel="noopener noreferrer">SOAP</a> + <a href="https://www.w3.org/TR/wsdl20" target="_blank" rel="noopener noreferrer">WSDL</a> [SOAP 本质上是 XML-RPC 的升级版]</li><li>JAX-RPC</li></ul></li><li>REST Web Service</li><li>RESTful Web Service</li><li>Windows Communication Foundation (WCF)，以前称为Indigo</li></ul></li><li>WEB API <ul><li>REST(Representational State Transfer) 模型（面向资源） <ul><li>REST API</li><li>RestFul API</li><li>GraphQL</li></ul></li></ul></li><li>SOA（Service Oriented Architecture）面向服务的架构</li><li><a href="https://developer.valvesoftware.com/wiki/Source_RCON_Protocol" target="_blank" rel="noopener noreferrer">RCON</a></li></ul><ul><li><a href="https://www.jianshu.com/p/8f1c70e42d32" target="_blank" rel="noopener noreferrer">技术概念大揭秘-RPC/Restful/HTTP/SOAP/WebService傻傻分不清楚？</a></li><li><a href="https://www.zhihu.com/question/41609070" target="_blank" rel="noopener noreferrer">既然有 HTTP 请求，为什么还要用 RPC 调用？</a></li></ul><ul><li>RPC（remote procedure call，远程过程调用）：一种通过网络从远程计算机程序上跨语言跨平台的请求服务。主要是分布式式系统中应用。</li><li>Web Service：一种跨编程语言和跨操作系统平台的远程调用技术。</li><li>SOAP(Simple Object Access Protocol，简单对象访问协议)：基于 HTTP或 SMTP等多种网络标准规约，它是向网络上的其他计算机传送 XML文档而定义标准Package结构的通信规约息。</li><li>WSDL (WebServices Description Language)：WEB服务描述语言，它是Web Service服务端使用说明书，说明服务端接口、方法、参数和返回值，随服务发布自动生成</li><li>RMI(remote method invocation，面向对象的远程方法调用)</li><li>REST(representational state transfer，表达性状态转移)</li><li>Restful：一种接口规范，符合这套规范编写的接口就是restful 接口</li><li>JMS（Java Messaging Service）</li><li>EJB(enterprise java bean)</li><li>JNDI（Java naming and Directory Interface）</li><li>JRMP(Java Remote Method Protocol)</li></ul><ul><li><a href="https://blog.csdn.net/jayluns/article/details/84507104" target="_blank" rel="noopener noreferrer">Webservice RPC风格 SOAP,REST风格 各之间的对比</a></li><li><a href="https://segmentfault.com/q/1010000003064904" target="_blank" rel="noopener noreferrer">什么是 RESTful ？到底 REST 和 SOAP、RPC 有何区别？</a></li><li><a href="https://juejin.cn/post/6844903869625942029" target="_blank" rel="noopener noreferrer">正确甄别API &amp; REST API &amp; RESTful API &amp; Web Service之间的差异与联系</a></li><li><a href="https://github.com/www1350/javaweb/issues/56" target="_blank" rel="noopener noreferrer">远程通信的几种选择（RPC，Webservice，RMI，JMS的区别）</a></li><li><a href="https://q-adorable.github.io/2018/09/13/SOAP%20webserivce%20%E5%92%8C%20RESTful%20webservice%20%E5%AF%B9%E6%AF%94%E5%8F%8A%E5%8C%BA%E5%88%AB" target="_blank" rel="noopener noreferrer">SOAP webserivce 和 RESTful webservice 对比及区别</a></li><li><a href="https://www.zhihu.com/question/42061683" target="_blank" rel="noopener noreferrer">如何通俗易懂地解释什么是SOA？</a></li><li>RESTful API设计参考文献列表 <a href="https://github.com/aisuhua/restful-api-design-references" target="_blank" rel="noopener noreferrer">https://github.com/aisuhua/restful-api-design-references</a></li><li><a href="https://zh.wikipedia.org/wiki/HATEOAS" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/HATEOAS</a></li><li>RESTful API设计规范 <a href="https://github.com/godruoyi/restful-api-specification" target="_blank" rel="noopener noreferrer">https://github.com/godruoyi/restful-api-specification</a></li><li><a href="https://www.cnblogs.com/mayite/p/9798913.html" target="_blank" rel="noopener noreferrer">RESTful API设计规范</a></li><li><a href="https://www.jianshu.com/p/cd7bfa8d51b7" target="_blank" rel="noopener noreferrer">RESTful跟WebService的区别</a></li></ul><h2 id="网络通信协议" tabindex="-1"><a class="header-anchor" href="#网络通信协议"><span>网络通信协议</span></a></h2><ul><li>HTTP状态码 <a href="https://github.com/leonlarsson/http-raccoons" target="_blank" rel="noopener noreferrer">https://github.com/leonlarsson/http-raccoons</a></li></ul><p><strong>应用层</strong></p><blockquote><p>Gopher -&gt; HTTP -&gt; Gemini</p></blockquote><ul><li><a href="https://blog.csdn.net/qq_36731677/article/details/82956977" target="_blank" rel="noopener noreferrer">WebDav/CalDav/CardDav/WebCal/iCalendar</a></li><li><a href="https://docs.microsoft.com/zh-cn/windows/win32/webdav/webdav-portal" target="_blank" rel="noopener noreferrer">WebDAV</a></li><li><a href="https://github.com/JackJiang2011/MobileIMSDK" target="_blank" rel="noopener noreferrer">https://github.com/JackJiang2011/MobileIMSDK</a></li><li>Server-Send Events（SSE）只支持服务端-&gt;客户端的单向通讯 <a href="https://www.cnblogs.com/jesn/p/16267606.html" target="_blank" rel="noopener noreferrer">Server-Sent Events 详解及实战</a></li></ul><ul><li>WebSocket（SignalR）支持服务端&lt;-&gt;客户端的双向实时通讯</li><li>HTTP（Hypertext Transfer Protocol）超文本传输协议，显示网页，只支持客户端-&gt;服务端的单向通讯 <ul><li><a href="https://github.com/rednafi/httpurr" target="_blank" rel="noopener noreferrer">https://github.com/rednafi/httpurr</a></li></ul></li><li>Gemini <a href="https://gemini.circumlunar.space" target="_blank" rel="noopener noreferrer">https://gemini.circumlunar.space</a><ul><li><a href="https://github.com/kr1sp1n/awesome-gemini" target="_blank" rel="noopener noreferrer">https://github.com/kr1sp1n/awesome-gemini</a></li><li><a href="https://portal.mozz.us/gemini/gemini.circumlunar.space/server" target="_blank" rel="noopener noreferrer">https://portal.mozz.us/gemini/gemini.circumlunar.space/servers</a></li></ul></li><li>DNS（Domain Name System） <ul><li><a href="https://github.com/v2fly/v2fly-github-io/blob/master/docs/v5/config/dns.md" target="_blank" rel="noopener noreferrer">https://github.com/v2fly/v2fly-github-io/blob/master/docs/v5/config/dns.md</a></li><li><a href="https://github.com/EmilHernvall/dnsguide" target="_blank" rel="noopener noreferrer">https://github.com/EmilHernvall/dnsguide</a></li></ul></li><li>FTP（File Transfer Protocol）</li><li>SFTP（SSH File Transfer Protocol）和FTP不一样</li><li>SCP（Secure copy）基于SSH</li><li>ASCII</li><li>Xmodem</li><li>Ymodem</li><li>Zmodem</li><li>Kermit</li><li>SSH （Secure Shell）</li><li>SMTP（Simple Mail Transfer Protocol）</li><li>SNMP（simple Network Management Protocol）</li><li><a href="https://mp.weixin.qq.com/s/Ebvjy132eRDOmcIL5cmxJw" target="_blank" rel="noopener noreferrer">Socket</a> 是应用层与TCP/IP协议族通信的中间软件抽象层，它是一组接口。 <ul><li>在设计模式中，Socket其实就是一个门面模式，它把复杂的TCP/IP协议族隐藏在Socket接口后面</li></ul></li><li>AMQP(Advanced Message Queuing Protocol,高级消息队列协议)</li><li>XMPP(Extensible Messaging and Presence Protocol,Jabber) <ul><li><a href="https://github.com/xsf/xmpp.org" target="_blank" rel="noopener noreferrer">https://github.com/xsf/xmpp.org</a></li><li><a href="https://xmpp.org" target="_blank" rel="noopener noreferrer">https://xmpp.org</a></li><li><a href="https://github.com/mathiasertl/django-xmpp-server-list" target="_blank" rel="noopener noreferrer">https://github.com/mathiasertl/django-xmpp-server-list</a></li><li><a href="https://sourceforge.net/projects/pidgin" target="_blank" rel="noopener noreferrer">https://sourceforge.net/projects/pidgin</a><ul><li><a href="https://imfreedom.org" target="_blank" rel="noopener noreferrer">https://imfreedom.org</a></li><li><a href="https://kb.imfreedom.org" target="_blank" rel="noopener noreferrer">https://kb.imfreedom.org</a></li></ul></li></ul></li><li>OTR(Off-the-Record Messaging，不留记录即时通讯协议) https://hardenedlinux.github.io/cryptography/2018/02/01/pidgin_xmpp_otr_debian.html</li><li>OMEMO</li><li>IMPP(Instant Messaging and Presence Protocol,即时消息和在线状态协议) <ul><li><a href="https://www.trillian.im/impp" target="_blank" rel="noopener noreferrer">https://www.trillian.im/impp</a></li></ul></li><li>STOMP(Streaming Text Oriented Messaging Protocol,流文本定向消息协议)</li><li>MQTT(Message Queuing Telemetry Transport，消息队列遥测传输)：是一种基于发布/订阅（publish/subscribe）模式的&quot;轻量级&quot;通讯协议 <ul><li><a href="https://mqtt.org" target="_blank" rel="noopener noreferrer">https://mqtt.org</a></li></ul></li></ul><p><strong>通信层</strong></p><ul><li>TCP（Transmission Control Protocol）三次握手传输协议 <ul><li><a href="https://www.cnblogs.com/AhuntSun-blog/p/12028636.html" target="_blank" rel="noopener noreferrer">详解TCP连接的“三次握手”与“四次挥手”</a></li></ul></li><li>UDP（User Datagram Protocol）用户数据报协议</li><li>mKCP <ul><li><a href="https://github.com/skywind3000/kcp" target="_blank" rel="noopener noreferrer">https://github.com/skywind3000/kcp</a></li></ul></li><li>gRPC</li><li>QUIC <ul><li><a href="https://github.com/quic-go/quic-go" target="_blank" rel="noopener noreferrer">https://github.com/quic-go/quic-go</a></li></ul></li><li>meek</li><li><a href="https://zhuanlan.zhihu.com/p/51279572" target="_blank" rel="noopener noreferrer">TCP、Socket、WebSocket、HTTP</a></li><li><a href="https://blog.csdn.net/weixin_45902285/article/details/122814167" target="_blank" rel="noopener noreferrer">网络编程 socket详解 TCP socket和UDP socket</a></li><li><a href="https://blog.csdn.net/u014568597/article/details/122422968" target="_blank" rel="noopener noreferrer">【Socket学习】1. TCP与UDP</a></li><li><a href="https://blog.csdn.net/qq_38409301/article/details/120250739" target="_blank" rel="noopener noreferrer">socket通信 tcp协议和udp协议 C++</a></li><li><a href="https://www.zhihu.com/question/20060141" target="_blank" rel="noopener noreferrer">UDP 和 TCP 的 socket 分别一般用在什么地方？</a></li><li><a href="https://wicg.github.io/direct-sockets" target="_blank" rel="noopener noreferrer">https://wicg.github.io/direct-sockets</a></li><li><a href="https://github.com/NetAsmCom/Socketify" target="_blank" rel="noopener noreferrer">https://github.com/NetAsmCom/Socketify</a></li></ul><p><strong>网络层</strong></p><ul><li>IP（Internet Protocol）</li><li>ICMP（Internet Control Message Protocol，主要用于路由发送错误报告）</li><li>IGMP</li></ul><p><strong>链接层</strong></p><ul><li>MAC（media access control）</li><li>ARP</li><li>RARP</li></ul><p><strong>Proxy代理协议</strong></p><ul><li>VMess</li><li>VLESS</li><li>VLite</li><li>Trojan</li><li>Shadowsocks</li><li>Socks</li><li>HTTP</li><li>Freedom</li><li>Dokodemo</li><li>Blockhole</li><li>DNS</li><li>Loopback</li></ul><h3 id="http" tabindex="-1"><a class="header-anchor" href="#http"><span>HTTP</span></a></h3><ul><li><a href="https://github.com/topics/server" target="_blank" rel="noopener noreferrer">https://github.com/topics/server</a></li><li><a href="https://github.com/topics/http-server" target="_blank" rel="noopener noreferrer">https://github.com/topics/http-server</a></li><li><a href="https://github.com/topics/http-client" target="_blank" rel="noopener noreferrer">https://github.com/topics/http-client</a></li><li><a href="https://github.com/search?q=WebSocket" target="_blank" rel="noopener noreferrer">https://github.com/search?q=WebSocket</a></li><li><a href="https://github.com/topics/websockets" target="_blank" rel="noopener noreferrer">https://github.com/topics/websockets</a></li></ul><ul><li><a href="https://www.iana.org/assignments/media-types" target="_blank" rel="noopener noreferrer">互联网号码分配机构（IANA）官方MIME类型列表</a></li><li><a href="https://tool.oschina.net/commons" target="_blank" rel="noopener noreferrer">常用对照表</a></li><li><a href="https://www.runoob.com/http/http-tutorial.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/http/http-tutorial.html</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP</a></li><li><a href="https://github.com/httpcats/http.cat" target="_blank" rel="noopener noreferrer">https://github.com/httpcats/http.cat</a></li><li>HTTPS的工作原理 <a href="https://stephanietang.github.io/2020/04/19/how-https-works" target="_blank" rel="noopener noreferrer">https://stephanietang.github.io/2020/04/19/how-https-works</a></li><li>图解QUIC连接 <a href="https://cangsdarm.github.io/illustrate/quic" target="_blank" rel="noopener noreferrer">https://cangsdarm.github.io/illustrate/quic</a><ul><li><a href="https://github.com/syncsynchalt" target="_blank" rel="noopener noreferrer">https://github.com/syncsynchalt</a></li></ul></li><li><a href="https://www.cnblogs.com/zuoxiaolong/p/life49.html" target="_blank" rel="noopener noreferrer">谈谈HTTP协议中的短轮询、长轮询、长连接和短连接</a></li></ul><blockquote><p><code>Content-Type</code>只会存在于<code>POST</code>、<code>PATCH</code>、<code>PUT</code>等有请求数据实体时指定数据类型和数据字符集编码， 而<code>GET</code>、<code>DELETE</code>、<code>HEAD</code>、<code>OPTIONS</code>、<code>TRACE</code>等没有请求数据实体</p></blockquote><blockquote><p><code>Content-Length</code>则视<code>Content-Type</code>而定，如<code>text/html</code>、<code>text/javascript</code>等请求数据没有<code>Content-Length</code></p></blockquote><ul><li><a href="https://blog.51cto.com/u_13238147/2411017" target="_blank" rel="noopener noreferrer">HTTP协议中的Accept与Content-Type的区别</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept</a></li><li><a href="https://www.cnblogs.com/plokmju/p/http_code.html" target="_blank" rel="noopener noreferrer">HTTP传输编码增加了传输量，只为解决这一个问题 | 实用 HTTP</a></li><li><a href="https://zh.wikipedia.org/wiki/%E5%88%86%E5%9D%97%E4%BC%A0%E8%BE%93%E7%BC%96%E7%A0%81" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/分块传输编码</a></li></ul><blockquote><p><code>POST</code>、<code>PATCH</code>、<code>PUT</code>等请求有请求数据实体的数据为表单参数， <code>GET</code>、<code>DELETE</code>、<code>HEAD</code>、<code>OPTIONS</code>、<code>TRACE</code>等没有请求数据实体的查询参数拼接在URL<code>?</code>后面</p></blockquote>',33))])}const d=a(c,[["render",u],["__file","交互协议.html.vue"]]),k=JSON.parse('{"path":"/PL/%E4%BA%A4%E4%BA%92%E5%8D%8F%E8%AE%AE.html","title":"交互协议","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Flag","slug":"flag","link":"#flag","children":[]},{"level":2,"title":"数据传输模型","slug":"数据传输模型","link":"#数据传输模型","children":[]},{"level":2,"title":"网络通信协议","slug":"网络通信协议","link":"#网络通信协议","children":[{"level":3,"title":"HTTP","slug":"http","link":"#http","children":[]}]}],"git":{"createdTime":1726030162000,"updatedTime":1726030162000,"contributors":[{"name":"onni-top","email":"admin@onni.top","commits":1}]},"readingTime":{"minutes":5.9,"words":1771},"filePathRelative":"PL/交互协议.md","localizedDate":"2024年9月11日","excerpt":"\\n\\n<h2>Flag</h2>\\n<blockquote>\\n<p>端到端、服务到服务、端到服务之间的交互协议规范</p>\\n</blockquote>\\n<ul>\\n<li><a href=\\"https://github.com/schemaorg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/schemaorg</a>\\n<ul>\\n<li><a href=\\"https://schema.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://schema.org</a></li>\\n</ul>\\n</li>\\n<li>OpenAPI规范 <a href=\\"https://github.com/OAI\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/OAI</a>\\n<ul>\\n<li><a href=\\"https://github.com/OpenAPITools\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/OpenAPITools</a></li>\\n<li><a href=\\"https://github.com/rookie-luochao/openapi-ui\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/rookie-luochao/openapi-ui</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"https://github.com/graphql\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/graphql</a>\\n<ul>\\n<li><a href=\\"https://graphql.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://graphql.org</a></li>\\n<li><a href=\\"https://github.com/chentsulin/awesome-graphql\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/chentsulin/awesome-graphql</a></li>\\n<li><a href=\\"https://github.com/apollographql\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/apollographql</a></li>\\n<li><a href=\\"https://github.com/dotansimha/graphql-yoga\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/dotansimha/graphql-yoga</a></li>\\n<li><a href=\\"https://github.com/n1ru4l/envelop\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/n1ru4l/envelop</a></li>\\n</ul>\\n</li>\\n<li>C# <a href=\\"https://github.com/dotnet/wcf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/dotnet/wcf</a>\\n<ul>\\n<li><a href=\\"https://learn.microsoft.com/zh-cn/dotnet/framework/wcf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://learn.microsoft.com/zh-cn/dotnet/framework/wcf</a></li>\\n</ul>\\n</li>\\n<li>Java <a href=\\"https://github.com/apache/cxf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/apache/cxf</a></li>\\n<li><a href=\\"https://axis.apache.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://axis.apache.org</a>\\n<ul>\\n<li><a href=\\"https://github.com/bnoordhuis/axis2-c\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/bnoordhuis/axis2-c</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{d as comp,k as data};
