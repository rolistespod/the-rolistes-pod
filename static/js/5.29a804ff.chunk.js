(this["webpackJsonpthe-rolistes-pod"]=this["webpackJsonpthe-rolistes-pod"]||[]).push([[5],{164:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(1),c=t(7),s=t(66),i=t.n(s),o=t(67);var m=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];e.apply(this,n),a.apply(this,n)}}),null)};function d(e){return!e||"#"===e.trim()}var u=l.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,s=e.disabled,i=e.onKeyDown,o=Object(c.a)(e,["as","disabled","onKeyDown"]),u=function(e){var a=o.href,t=o.onClick;(s||d(a))&&e.preventDefault(),s?e.stopPropagation():t&&t(e)};return d(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),s&&(o.tabIndex=-1,o["aria-disabled"]=!0),l.a.createElement(n,Object(r.a)({ref:a},o,{onClick:u,onKeyDown:m((function(e){" "===e.key&&(e.preventDefault(),u(e))}),i)}))}));u.displayName="SafeAnchor";var p=u,E=l.a.forwardRef((function(e,a){var t=e.active,n=e.disabled,s=e.className,o=e.style,m=e.activeLabel,d=e.children,u=Object(c.a)(e,["active","disabled","className","style","activeLabel","children"]),E=t||n?"span":p;return l.a.createElement("li",{ref:a,style:o,className:i()(s,"page-item",{active:t,disabled:n})},l.a.createElement(E,Object(r.a)({className:"page-link",disabled:n},u),d,t&&m&&l.a.createElement("span",{className:"sr-only"},m)))}));E.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},E.displayName="PageItem";var h=E;function f(e,a,t){function n(e){var n=e.children,r=Object(c.a)(e,["children"]);return l.a.createElement(E,r,l.a.createElement("span",{"aria-hidden":"true"},n||a),l.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),n.displayName=e,n}var _=f("First","\xab"),w=f("Prev","\u2039","Previous"),N=f("Ellipsis","\u2026","More"),x=f("Next","\u203a"),g=f("Last","\xbb"),v=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,m=e.size,d=Object(c.a)(e,["bsPrefix","className","children","size"]),u=Object(o.a)(t,"pagination");return l.a.createElement("ul",Object(r.a)({ref:a},d,{className:i()(n,u,m&&u+"-"+m)}),s)}));v.First=_,v.Prev=w,v.Ellipsis=N,v.Item=h,v.Next=x,v.Last=g;var b=v;a.a=function(e){var a,t=e.currentPage,n=[];a=Math.ceil(e.totalRecords/e.pageLimit);for(var r=function(a){n.push(l.a.createElement(b.Item,{key:a,onClick:function(){return e.clicked(a)},active:a===t,href:"#top"},a))},c=1;c<=a;c++)r(c);return l.a.createElement("div",null,l.a.createElement(b,{size:"sm"},n))}},169:function(e,a,t){"use strict";var n=t(162),l=t(65),r=t(64),c=t(0),s=t.n(c),i=t(170),o=t.n(i),m=t(171),d=t.n(m),u=t(210),p=t(211),E=t(24),h=t(97),f=t.n(h);a.a=function(e){return s.a.createElement(E.a,null,s.a.createElement("div",{className:[f.a.item_box_right,f.a.item_box_hide_mobile].join(" ")},s.a.createElement(u.a,null,s.a.createElement(p.a,{xs:12},s.a.createElement("h2",{className:f.a.section_title},"Stay Connected"))),s.a.createElement(u.a,null,s.a.createElement(p.a,{xs:12},s.a.createElement("h3",{className:o.a.side_title},"Listen")),s.a.createElement(u.a,{className:o.a.side_icons},s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191?mt=2",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:l.e,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.e,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://www.podchaser.com/podcasts/the-rolistes-podcast-425798",className:o.a.sideLinkIcon},s.a.createElement("img",{src:d.a,alt:"Donate with Paypal","aria-hidden":"true"}))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"http://feeds.feedburner.com/TheRolistesPodcast",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:l.f,"aria-hidden":"true"})))))),s.a.createElement(u.a,null,s.a.createElement(p.a,{xs:12},s.a.createElement("h3",{className:o.a.side_title},"Watch")),s.a.createElement(u.a,{className:o.a.side_icons},s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.i,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://www.twitch.tv/rolistespod",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.g,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://www.tiktok.com/@rolistespod",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.f,"aria-hidden":"true"})))))),s.a.createElement(u.a,null,s.a.createElement(p.a,{xs:12},s.a.createElement("h3",{className:o.a.side_title},"Follow")),s.a.createElement(u.a,{className:o.a.side_icons},s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://twitter.com/rolistespod",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.h,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://www.facebook.com/Rolistespod/",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.a,"aria-hidden":"true"})))))),s.a.createElement(u.a,null,s.a.createElement(p.a,{xs:12},s.a.createElement("h3",{className:o.a.side_title},"Contact Us")),s.a.createElement(u.a,{className:o.a.side_icons},s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"mailto:rolistespod@gmail.com",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:l.d,"aria-hidden":"true"}))))))))}},170:function(e,a,t){e.exports={SideLink:"Follow_SideLink__1mTUd",side_title:"Follow_side_title__FvTxd",side_icons:"Follow_side_icons__2Pong",sideLinkIcon:"Follow_sideLinkIcon__2scem"}},171:function(e,a,t){e.exports=t.p+"static/media/Icon_Podchaser.224cba10.png"},172:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(162),c=t(64),s=t(173),i=t.n(s),o=(t(174),t(210)),m=t(211),d=t(24),u=t(175),p=t.n(u),E=t(97),h=t.n(E);a.a=function(e){return l.a.createElement(d.a,null,l.a.createElement("div",{className:[h.a.item_box_right,h.a.item_box_hide_mobile].join(" ")},l.a.createElement(o.a,null,l.a.createElement(m.a,{xs:12},l.a.createElement("h2",{className:h.a.section_title},"Support Us")),l.a.createElement(o.a,{className:p.a.side_icons},l.a.createElement(m.a,{xs:3},l.a.createElement("a",{href:"https://www.patreon.com/RolistesPod",className:p.a.SideLink},l.a.createElement("span",null,l.a.createElement(c.a,{icon:r.c,"aria-hidden":"true"})))),l.a.createElement(m.a,{xs:3},l.a.createElement("a",{href:"https://www.paypal.com/paypalme/rolistespod/",className:p.a.SideLink},l.a.createElement("span",null,l.a.createElement(c.a,{icon:r.d,"aria-hidden":"true"})))),l.a.createElement(m.a,{xs:3},l.a.createElement("a",{href:"https://www.drivethrurpg.com/index.php?affiliate_id=1289000",className:p.a.sideLinkIcon},l.a.createElement("img",{src:i.a,alt:"Donate with Paypal","aria-hidden":"true"}))),l.a.createElement(m.a,{xs:3},l.a.createElement("a",{href:"https://itch.io/physical-games?ac=6hKcoR9Jch",className:p.a.SideLink},l.a.createElement("span",null,l.a.createElement(c.a,{icon:r.b,"aria-hidden":"true"}))))))))}},173:function(e,a,t){e.exports=t.p+"static/media/Icon_Drivethru.36511e8c.png"},174:function(e,a,t){e.exports=t.p+"static/media/Icon_Kofi.35662557.png"},175:function(e,a,t){e.exports={SideLink:"Support_SideLink__3UTI4",side_title:"Support_side_title__27Qtx",side_icons:"Support_side_icons__3xdq2",sideLinkIcon:"Support_sideLinkIcon__36Sn5"}},206:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t(166),s=(t(206),t(164)),i=t(161),o=t(210),m=t(211),d=t(169),u=t(168),p=t(172),E=t(167),h=t(33),f=t(25),_=t(97),w=t.n(_),N=t(165);a.default=Object(f.b)((function(e){return{news:e.posts.news,gondo:e.posts.gondo,currentPageNews:e.posts.currentPageNews}}),(function(e){return{onSetCurrentPageNews:function(a){return e(h.d(a))}}}))((function(e){Object(n.useEffect)((function(){window.scrollTo(0,0)}));var a=10*e.currentPageNews,t=a-10;return l.a.createElement(r.a,null,l.a.createElement(N.a,null,l.a.createElement("title",null,"The Rolistes Podcast - Paris Gondo"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement(i.a,null,l.a.createElement(u.a,null),l.a.createElement(o.a,null,l.a.createElement(m.a,{lg:8,xs:12,className:[w.a.no_padding_right,w.a.no_padding_smallscreen].join(" ")},l.a.createElement(c.a,Object.assign({},e,{type:"INTROGONDO"})),l.a.createElement("div",{className:w.a.item_box_left},l.a.createElement("h2",{className:w.a.section_title},"Latest Paris Gondo News"),l.a.createElement(c.a,Object.assign({},e,{type:"GONDO",indexOfFirstPost:t,indexOfLastPost:a})),l.a.createElement(s.a,{totalRecords:e.gondo.length,pageLimit:10,clicked:function(a){return e.onSetCurrentPageNews(a)},currentPage:e.currentPageNews}))),l.a.createElement(m.a,{lg:4,xs:12},l.a.createElement(o.a,null,l.a.createElement(m.a,{xs:12,className:w.a.no_padding_smallscreen},l.a.createElement(d.a,null)),l.a.createElement(m.a,{xs:12,className:w.a.no_padding_smallscreen},l.a.createElement(p.a,null)))))),l.a.createElement(E.a,null))}))}}]);
//# sourceMappingURL=5.29a804ff.chunk.js.map