(this["webpackJsonpthe-rolistes-pod"]=this["webpackJsonpthe-rolistes-pod"]||[]).push([[6],{156:function(e,a,t){"use strict";a.a=t.p+"static/media/Icon_Drivethru.b905d656.png"},157:function(e,a,t){"use strict";t.p},159:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(2),i=t(7),c=t(66),s=t.n(c),o=t(67);var m=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];e.apply(this,n),a.apply(this,n)}}),null)};function d(e){return!e||"#"===e.trim()}var u=l.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,c=e.disabled,s=e.onKeyDown,o=Object(i.a)(e,["as","disabled","onKeyDown"]),u=function(e){var a=o.href,t=o.onClick;(c||d(a))&&e.preventDefault(),c?e.stopPropagation():t&&t(e)};return d(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),c&&(o.tabIndex=-1,o["aria-disabled"]=!0),l.a.createElement(n,Object(r.a)({ref:a},o,{onClick:u,onKeyDown:m((function(e){" "===e.key&&(e.preventDefault(),u(e))}),s)}))}));u.displayName="SafeAnchor";var E=u,p=l.a.forwardRef((function(e,a){var t=e.active,n=e.disabled,c=e.className,o=e.style,m=e.activeLabel,d=e.children,u=Object(i.a)(e,["active","disabled","className","style","activeLabel","children"]),p=t||n?"span":E;return l.a.createElement("li",{ref:a,style:o,className:s()(c,"page-item",{active:t,disabled:n})},l.a.createElement(p,Object(r.a)({className:"page-link",disabled:n},u),d,t&&m&&l.a.createElement("span",{className:"sr-only"},m)))}));p.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},p.displayName="PageItem";var h=p;function f(e,a,t){function n(e){var n=e.children,r=Object(i.a)(e,["children"]);return l.a.createElement(p,r,l.a.createElement("span",{"aria-hidden":"true"},n||a),l.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),n.displayName=e,n}var _=f("First","\xab"),w=f("Prev","\u2039","Previous"),N=f("Ellipsis","\u2026","More"),b=f("Next","\u203a"),x=f("Last","\xbb"),k=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.children,m=e.size,d=Object(i.a)(e,["bsPrefix","className","children","size"]),u=Object(o.a)(t,"pagination");return l.a.createElement("ul",Object(r.a)({ref:a},d,{className:s()(n,u,m&&u+"-"+m)}),c)}));k.First=_,k.Prev=w,k.Ellipsis=N,k.Item=h,k.Next=b,k.Last=x;var v=k;a.a=function(e){var a,t=e.currentPage,n=[];a=Math.ceil(e.totalRecords/e.pageLimit);for(var r=function(a){n.push(l.a.createElement(v.Item,{key:a,onClick:function(){return e.clicked(a)},active:a===t},a))},i=1;i<=a;i++)r(i);return l.a.createElement("div",null,l.a.createElement(v,{size:"sm"},n))}},163:function(e,a,t){e.exports={SideLink:"Follow_SideLink__3rMzs",side_title:"Follow_side_title__3DiaA",side_icons:"Follow_side_icons__39In5",SideLinkText:"Follow_SideLinkText__28ACE",sideLinkIcon:"Follow_sideLinkIcon__mGncR"}},164:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(155),i=t(64),c=t(156),s=(t(157),t(191)),o=t(192),m=t(25),d=t(165),u=t.n(d),E=t(97),p=t.n(E);a.a=function(e){return l.a.createElement(m.a,null,l.a.createElement("div",{className:[p.a.item_box_right,p.a.item_box_hide_mobile].join(" ")},l.a.createElement(s.a,null,l.a.createElement(o.a,{xs:12},l.a.createElement("h2",{className:p.a.section_title},"Support Us")),l.a.createElement(s.a,{className:u.a.side_icons},l.a.createElement(o.a,{xs:3},l.a.createElement("a",{href:"https://www.patreon.com/RolistesPod",className:u.a.SideLink},l.a.createElement("span",null,l.a.createElement(i.a,{icon:r.d,"aria-hidden":"true"})))),l.a.createElement(o.a,{xs:3},l.a.createElement("a",{href:"https://www.paypal.com/paypalme/rolistespod/",className:u.a.SideLink},l.a.createElement("span",null,l.a.createElement(i.a,{icon:r.e,"aria-hidden":"true"})))),l.a.createElement(o.a,{xs:3},l.a.createElement("a",{href:"https://www.drivethrurpg.com/index.php?affiliate_id=1289000",className:u.a.sideLinkIcon},l.a.createElement("img",{src:c.a,alt:"Donate with Paypal","aria-hidden":"true"}))),l.a.createElement(o.a,{xs:3},l.a.createElement("a",{href:"https://itch.io/?ac=6hKcoR9Jch",className:u.a.SideLink},l.a.createElement("span",null,l.a.createElement(i.a,{icon:r.b,"aria-hidden":"true"}))))))))}},165:function(e,a,t){e.exports={SideLink:"Support_SideLink__3YiXY",side_title:"Support_side_title__IVBwD",side_icons:"Support_side_icons__3PmMn",sideLinkIcon:"Support_sideLinkIcon__YkH_N"}},166:function(e,a,t){"use strict";t(0),t(64),t(156),t(157),t(191),t(192),t(25),t(167),t(97)},167:function(e,a,t){e.exports={SideLink:"Subscribe_SideLink__3-vVe",side_title:"Subscribe_side_title__zqKVM",side_icons:"Subscribe_side_icons__3MQOC",SideLinkText:"Subscribe_SideLinkText__32Wj4",sideLinkIcon:"Subscribe_sideLinkIcon__11S74"}},169:function(e,a,t){"use strict";var n=t(155),l=t(65),r=t(64),i=t(0),c=t.n(i),s=t(163),o=t.n(s),m=t.p+"static/media/Icon_Podchaser.5fb5fbc7.png",d=t(191),u=t(192),E=t(25),p=t(97),h=t.n(p);a.a=function(e){return c.a.createElement(E.a,null,c.a.createElement("div",{className:[h.a.item_box_right,h.a.item_box_hide_mobile].join(" ")},c.a.createElement(d.a,null,c.a.createElement(u.a,{xs:12},c.a.createElement("h2",{className:h.a.section_title},"Stay Connected"))),c.a.createElement(d.a,null,c.a.createElement(u.a,{xs:12},c.a.createElement("h3",{className:o.a.side_title},"Listen")),c.a.createElement(d.a,{className:o.a.side_icons},c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191?mt=2",className:o.a.SideLink},c.a.createElement("span",null,c.a.createElement(r.a,{icon:l.e,"aria-hidden":"true"})))),c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom",className:o.a.SideLink},c.a.createElement("span",null,c.a.createElement(r.a,{icon:n.f,"aria-hidden":"true"})))),c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"https://www.podchaser.com/podcasts/the-rolistes-podcast-425798",className:o.a.sideLinkIcon},c.a.createElement("img",{src:m,alt:"Donate with Paypal","aria-hidden":"true"}))),c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"http://feeds.feedburner.com/TheRolistesPodcast",className:o.a.SideLink},c.a.createElement("span",null,c.a.createElement(r.a,{icon:l.f,"aria-hidden":"true"})))))),c.a.createElement(d.a,null,c.a.createElement(u.a,{xs:12},c.a.createElement("h3",{className:o.a.side_title},"Watch")),c.a.createElement(d.a,{className:o.a.side_icons},c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg",className:o.a.SideLink},c.a.createElement("span",null,c.a.createElement(r.a,{icon:n.j,"aria-hidden":"true"})))),c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"https://www.twitch.tv/rolistespod",className:o.a.SideLink},c.a.createElement("span",null,c.a.createElement(r.a,{icon:n.h,"aria-hidden":"true"})))),c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"https://www.tiktok.com/@rolistespod",className:o.a.SideLink},c.a.createElement("span",null,c.a.createElement(r.a,{icon:n.g,"aria-hidden":"true"})))))),c.a.createElement(d.a,null,c.a.createElement(u.a,{xs:12},c.a.createElement("h3",{className:o.a.side_title},"Follow")),c.a.createElement(d.a,{className:o.a.side_icons},c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"https://twitter.com/rolistespod",className:o.a.SideLink},c.a.createElement("span",null,c.a.createElement(r.a,{icon:n.i,"aria-hidden":"true"})))),c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"https://www.facebook.com/Rolistespod/",className:o.a.SideLink},c.a.createElement("span",null,c.a.createElement(r.a,{icon:n.a,"aria-hidden":"true"})))),c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"https://dice.camp/@Rolistespod",className:o.a.SideLink},c.a.createElement("span",null,c.a.createElement(r.a,{icon:n.c,"aria-hidden":"true"})))))),c.a.createElement(d.a,null,c.a.createElement(u.a,{xs:12},c.a.createElement("h3",{className:o.a.side_title},"Contact Us")),c.a.createElement(d.a,{className:o.a.side_icons},c.a.createElement(u.a,{xs:3},c.a.createElement("a",{href:"mailto:rolistespod@gmail.com",className:o.a.SideLink},c.a.createElement("span",null,c.a.createElement(r.a,{icon:l.d,"aria-hidden":"true"})))))),c.a.createElement(d.a,null,c.a.createElement(u.a,{xs:12},c.a.createElement("h3",{className:o.a.side_title},"Newsletter")),c.a.createElement(d.a,{className:o.a.side_icons},c.a.createElement(u.a,{xs:12},c.a.createElement("a",{href:"http://eepurl.com/gJCUVX",className:o.a.SideLinkText},c.a.createElement("span",null,"Subscribe")))))))}},186:function(e,a,t){},194:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),i=t(162),c=(t(186),t(168)),s=t(159),o=t(154),m=t(191),d=t(192),u=t(169),E=t(164),p=t(161),h=t(34),f=t(26),_=t(97),w=t.n(_),N=t(160);t(166);a.default=Object(f.b)((function(e){return{news:e.posts.news,gondo:e.posts.gondo,currentPageNews:e.posts.currentPageNews}}),(function(e){return{onSetCurrentPageNews:function(a){return e(h.d(a))}}}))((function(e){Object(n.useEffect)((function(){window.scrollTo(0,0)}));var a=10*e.currentPageNews,t=a-10;return l.a.createElement(r.a,null,l.a.createElement(N.a,null,l.a.createElement("title",null,"The Rolistes Podcast - News"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement(o.a,null,l.a.createElement(c.a,null),l.a.createElement(m.a,null,l.a.createElement(d.a,{lg:8,xs:12,className:[w.a.no_padding_right,w.a.no_padding_smallscreen].join(" ")},l.a.createElement("div",{className:w.a.item_box_left},l.a.createElement("h1",{className:w.a.section_title},"News"),l.a.createElement(i.a,Object.assign({},e,{type:"NEWS",indexOfFirstPost:t,indexOfLastPost:a})),l.a.createElement(s.a,{totalRecords:e.news.length,pageLimit:10,clicked:function(a){return e.onSetCurrentPageNews(a)},currentPage:e.currentPageNews}))),l.a.createElement(d.a,{lg:4,xs:12},l.a.createElement(m.a,null,l.a.createElement(d.a,{xs:12,className:w.a.no_padding_smallscreen},l.a.createElement(u.a,null)),l.a.createElement(d.a,{xs:12,className:w.a.no_padding_smallscreen},l.a.createElement(E.a,null)))))),l.a.createElement(p.a,null))}))}}]);
//# sourceMappingURL=6.157b76d2.chunk.js.map