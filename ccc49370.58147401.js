(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{100:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(91),c=t(97),m=t(23),i=t(93),o=t(103),s=t(94),u=t(56),d=t.n(u),v=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,u,g,E=e.children,p=e.frontMatter,f=e.metadata,b=e.truncated,_=e.isBlogPostPage,h=void 0!==_&&_,N=f.date,k=f.permalink,w=f.tags,y=f.readingTime,O=p.author,I=p.title,x=p.image,C=p.keywords,M=p.author_url||p.authorURL,j=p.author_title||p.authorTitle,L=p.author_image_url||p.authorImageURL,B=Object(s.a)(x,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,C&&C.length&&r.a.createElement("meta",{name:"keywords",content:C.join(",")}),x&&r.a.createElement("meta",{property:"og:image",content:B}),x&&r.a.createElement("meta",{name:"twitter:image",content:B}),x&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+I})),r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(a=h?"h1":"h2",t=N.substring(0,10).split("-"),n=t[0],u=v[parseInt(t[1],10)-1],g=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},h?I:r.a.createElement(i.a,{to:k},I)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:d.a.blogPostDate},u," ",g,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},L&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:M,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:L,alt:O})),r.a.createElement("div",{className:"avatar__intro"},O&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:M,target:"_blank",rel:"noreferrer noopener"},O)),r.a.createElement("small",{className:"avatar__subtitle"},j)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:o.a},E)),(w.length>0||b)&&r.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),b&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:f.permalink,"aria-label":"Read more about "+I},r.a.createElement("strong",null,"Read More"))))))}},105:function(e,a,t){"use strict";var n=t(3),r=t(7),l=t(0),c=t.n(l),m=t(91),i=t(58),o=t.n(i);a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]);return c.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(m.a)(o.a.iconEdit,a)},t),c.a.createElement("g",null,c.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},106:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(91);var c=function(e,a,t){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,m=!1,i=document.getElementsByClassName(e);r<i.length&&!m;){var o=i[r],s=o.href,u=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(a),o.classList.add(a),c(o),m=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},m=t(57),i=t.n(m),o="table-of-contents__link";function s(e){var a=e.toc,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(s,{isChild:!0,toc:e.children}))}))):null}a.a=function(e){var a=e.toc;return c(o,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(i.a.tableOfContents,"thin-scrollbar")},r.a.createElement(s,{toc:a}))}},90:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(96),c=t(100),m=t(93);var i=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(m.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},o=t(102),s=t(106),u=t(105);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,m=a.metadata,d=m.title,v=m.description,g=m.nextItem,E=m.prevItem,p=m.editUrl,f=n.hide_table_of_contents;return r.a.createElement(l.a,{title:d,description:v,wrapperClassName:"blog-wrapper"},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(c.a,{frontMatter:n,metadata:m,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,p&&r.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(u.a,null),"Edit this page")),(g||E)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:g,prevItem:E}))),!f&&a.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{toc:a.toc})))))}}}]);