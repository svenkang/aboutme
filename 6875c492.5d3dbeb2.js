(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(92),m=t(97),c=t(23),o=t(94),s=t(104),i=t(95),g=t(56),u=t.n(g),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,g,d,p=e.children,v=e.frontMatter,h=e.metadata,b=e.truncated,N=e.isBlogPostPage,f=void 0!==N&&N,w=h.date,_=h.permalink,k=h.tags,y=h.readingTime,T=v.author,M=v.title,P=v.image,J=v.keywords,F=v.author_url||v.authorURL,I=v.author_title||v.authorTitle,R=v.author_image_url||v.authorImageURL,j=Object(i.a)(P,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,J&&J.length&&n.a.createElement("meta",{name:"keywords",content:J.join(",")}),P&&n.a.createElement("meta",{property:"og:image",content:j}),P&&n.a.createElement("meta",{name:"twitter:image",content:j}),P&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M})),n.a.createElement("article",{className:f?void 0:"margin-bottom--xl"},(a=f?"h1":"h2",t=w.substring(0,10).split("-"),r=t[0],g=E[parseInt(t[1],10)-1],d=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},f?M:n.a.createElement(o.a,{to:_},M)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:w,className:u.a.blogPostDate},g," ",d,", ",r," ",y&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},R&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:F,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:R,alt:T})),n.a.createElement("div",{className:"avatar__intro"},T&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:F,target:"_blank",rel:"noreferrer noopener"},T)),n.a.createElement("small",{className:"avatar__subtitle"},I)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:s.a},p)),(k.length>0||b)&&n.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),b&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:h.permalink,"aria-label":"Read more about "+M},n.a.createElement("strong",null,"Read More"))))))}},80:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(98),m=t(101),c=t(94),o=t(103);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,s=a.allTagsPath,i=a.name,g=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+i+'"',description:'Blog | Tagged "'+i+'"',wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(o.a,{sidebar:r})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,g," ",function(e,a){return e>1?a+"s":a}(g,"post"),' tagged with "',i,'"'),n.a.createElement(c.a,{href:s},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}}}]);