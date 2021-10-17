(this["webpackJsonpdar-al-salam-frontend"]=this["webpackJsonpdar-al-salam-frontend"]||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o=t(0),l=t.n(o),s=t(23),d=t.n(s),b=t(4),j=t(18),u=t(42),p=t(2),h=t(3),x="#1B4965",m=Object(h.a)(r||(r=Object(p.a)(["\n    :root{\n        --app-bar-height: 50px;\n        --side-bar-width:200px;\n        --app-color-primary: ",";\n        --app-color-secondary:","; \n    }\n    body{\n        font-family:'Roboto Mono', monospace;\n    }\n\n    p {\n      margin: 16px;\n    }\n    ul{\n      margin:0;\n    }\n    svg {\n      margin:8px;\n    }\n"])),"#CAE9FF",x),f={xs:"0px",sm:"600px",md:"960px",lg:"1280px",xl:"1920px",up:function(n){return"(min-width: ".concat(this[n],")")},down:function(n){return"(max-width: ".concat(this[n],")")},smallScreen:function(n){return n?this.down("md"):this.up("md")},appBarShown:function(n){return this.smallScreen(n)},permanentSideBar:function(n){return this.appBarShown(!n)}},O=Object(h.b)(i||(i=Object(p.a)(["\n  cursor: pointer;\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 100%);\n  }\n  &:active {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 100%);\n  }\n"]))),g=Object(h.b)(c||(c=Object(p.a)(["\n  width: ",";\n"])),(function(n){return n.$fullWidth?"100%":"initial"})),v=Object(h.b)(a||(a=Object(p.a)(["\n  box-shadow: ",";\n"])),(function(n){var e=n.$elevation;return e?"".concat(e,"px ").concat(e,"px 16px 0 rgba(0,0,0,0.3) "):"initial"})),w=t(10),y=t(11);var k,S,C=t(17),A=t(1),B=["link","to"],N=h.c.button(k||(k=Object(p.a)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  border: none;\n  border-radius: 8px;\n  background-color: transparent;\n  padding: 8px;\n  font-family: inherit;\n  font-size: inherit;\n  & > * {\n    flex-shrink: 0;\n  }\n  ",";\n  ","\n"])),(function(n){return n.justifyContent||"center"}),g,O),W=Object(h.c)(C.b)(S||(S=Object(p.a)(["\n  text-decoration: none;\n  ",";\n"])),g);function M(n){var e=n.link,t=n.to,r=Object(w.a)(n,B),i=function(n){var e=n.condition,t=n.wrapper,r=n.wrapperProps,i=n.fallbackWrapper,c=void 0===i?o.Fragment:i;return e?[t,r]:[c,{}]}({condition:e,wrapper:W,wrapperProps:{to:t,$fullWidth:r.$fullWidth}}),c=Object(j.a)(i,2),a=c[0],l=c[1];return Object(A.jsx)(a,Object(b.a)(Object(b.a)({},l),{},{children:Object(A.jsx)(N,Object(b.a)({},r))}))}var $,P=["icon","iconColor","size"],z=Object(h.c)(M)($||($=Object(p.a)(["\n  border-radius: 50%;\n"])));function F(n){var e=n.icon,t=n.iconColor,r=n.size,i=Object(w.a)(n,P),c=e;return Object(A.jsx)(z,Object(b.a)(Object(b.a)({},i),{},{children:Object(A.jsx)(c,{size:r,color:t})}))}var I,L,D=["title","onMenuButtonClick"],H=h.c.div(I||(I=Object(p.a)(["\n  background-color: var(--app-color-secondary);\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  padding-left: 16px;\n  overflow: hidden;\n  color: white;\n  transition: height 0.1s;\n  height: ",";\n  ","\n"])),(function(n){return n.shown?"var(--app-bar-height)":"0"}),v),G=h.c.h3(L||(L=Object(p.a)(["\n  margin-left: 16px;\n"])));function _(n){var e=n.title,t=n.onMenuButtonClick,r=Object(w.a)(n,D);return Object(A.jsxs)(H,Object(b.a)(Object(b.a)({},r),{},{children:[Object(A.jsx)(F,{size:24,onClick:t,icon:y.g,iconColor:"white"}),Object(A.jsx)(G,{children:e})]}))}var q,E,J,R=t(41),X=["onClickAway","children","header"],Y=h.c.div(q||(q=Object(p.a)(["\n  background-color: var(--app-color-primary);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: ",";\n  transition: left 1s;\n  width: var(--side-bar-width);\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n  ","\n"])),(function(n){return n.open?"0px":"calc( -1 * var(--side-bar-width))"}),v),T=h.c.div(E||(E=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n"]))),K=h.c.div(J||(J=Object(p.a)(["\n  flex-grow: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: var(--app-color-secondary);\n    border: 4px solid transparent;\n    border-radius: 32px;\n  }\n  &::-webkit-scrollbar-track {\n    background-color: rgb(0, 0, 0, 0.05);\n    border-radius: 8px;\n  }\n"])));function Q(n){var e=n.onClickAway,t=n.children,r=n.header,i=Object(w.a)(n,X),c=Object(o.useRef)(null);return Object(R.a)(c,e),Object(A.jsxs)(Y,Object(b.a)(Object(b.a)({ref:c},i),{},{children:[Object(A.jsx)(T,{children:r}),Object(A.jsx)(K,{children:t})]}))}var U=t.p+"static/media/eye.44bd7254.svg";function V(n){return Object(A.jsx)("img",Object(b.a)({alt:"logo",height:"40px",width:"40px",src:U},n))}var Z,nn,en,tn,rn=t(12),cn=t.n(rn),an=h.c.div(Z||(Z=Object(p.a)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: ",";\n  height: ",";\n"])),(function(n){return n.width||"initial"}),(function(n){return n.height||"initial"})),on=["children","contentWidth"],ln=h.c.li(nn||(nn=Object(p.a)(["\n  overflow-wrap: anywhere;\n"]))),sn=Object(h.c)(an)(en||(en=Object(p.a)([""])));function dn(n){var e=n.children,t=n.contentWidth,r=Object(w.a)(n,on);return Object(A.jsx)(ln,Object(b.a)(Object(b.a)({},r),{},{children:Object(A.jsx)(sn,{width:t,children:e})}))}var bn=h.c.ul(tn||(tn=Object(p.a)(["\n  list-style-type: none;\n  padding: 8px;\n  text-align: ",";\n  & > li {\n    margin-bottom: ",";\n  }\n"])),(function(n){return n.textAlign}),(function(n){return n.vGap?"".concat(n.vGap,"px"):0}));function jn(n){return Object(A.jsx)(bn,Object(b.a)({},n))}function un(n){return Object(A.jsx)(jn,Object(b.a)({vGap:2},n))}bn.propTypes={vGap:cn.a.number,children:cn.a.arrayOf(dn),textAlign:cn.a.oneOf(["left","center","right"])};var pn=[{icon:y.d,label:"Home",src:"#hi"},{icon:y.a,label:"Dr. Ali",src:"#"},{icon:y.a,label:"Dr. Shamam",src:"#"},{icon:y.c,label:"About",src:"#"}];function hn(n){var e=n.icon,t=n.label,r=n.src;return Object(A.jsx)(dn,{contentWidth:"100%",children:Object(A.jsxs)(M,{$fullWidth:!0,justifyContent:"start",link:!0,to:r,children:[Object(A.jsx)(e,{})," ",t]})},t)}function xn(){var n=Object(o.useState)(!1),e=Object(j.a)(n,2),t=e[0],r=e[1],i=Object(u.a)(f.appBarShown(!1));return Object(A.jsxs)(o.Fragment,{children:[Object(A.jsx)(_,{$elevation:2,title:"Dar Al-Salam",shown:!i,onMenuButtonClick:function(){return r(!t)}}),Object(A.jsx)(Q,{open:i||t,onClickAway:function(){!i&&t&&r(!1)},$elevation:2,header:Object(A.jsxs)(o.Fragment,{children:[Object(A.jsx)(V,{})," \xa0",Object(A.jsx)("h4",{children:"Dar Al-Salam"})]}),children:Object(A.jsx)(un,{children:pn.map((function(n){return Object(A.jsx)(hn,Object(b.a)({},n))}))})})]})}var mn,fn,On=t(5),gn={shamam:{profilePicture:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Chest_X-ray_2346.jpg/665px-Chest_X-ray_2346.jpg",doctorName:"Shamam Yousif",phoneNumbers:["05338810255","05338819244"],email:"doctoremail@gmail.com",facebook:"facebook.com/sadas",moreInfo:"/dr-shamam"},ali:{profilePicture:"https://p0.pxfuel.com/preview/657/387/784/eyes-test-ophthalmologist-ophthalmology.jpg",doctorName:"Ali Yousif",phoneNumbers:["05338810255","05338819244"],email:"doctoremail@gmail.com",facebook:"facebook.com/sadas",moreInfo:"/dr-shamam"}},vn=h.c.div(mn||(mn=Object(p.a)(["\n  @media "," {\n    margin-top: var(--app-bar-height);\n  }\n  @media "," {\n    margin-left: var(--side-bar-width);\n  }\n  padding: 32px;\n  & > * {\n    margin-bottom: 32px;\n  }\n"])),f.appBarShown(!0),f.permanentSideBar(!0));function wn(n){return Object(A.jsx)(vn,Object(b.a)({},n))}var yn=h.c.svg(fn||(fn=Object(p.a)(["\n  margin: 4px auto;\n  display: block;\n"])));function kn(n){return console.log(x),Object(A.jsx)(yn,{width:n.width,viewBox:"0 0 252 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(A.jsx)("path",{d:"M156 28H144L135 55L117 1L108 28H96L0.5 28.5M251 28.0804H156",stroke:n.color||x,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}var Sn,Cn,An,Bn,Nn,Wn,Mn,$n=["profilePicture","doctorName","phoneNumbers","email","facebook","moreInfo"],Pn=h.c.div(Sn||(Sn=Object(p.a)(["\n  background-image: url(",");\n  background-color: var(--app-color-primary);\n  display: inline-block;\n  padding: 8px;\n  border: 4px solid var(--app-color-secondary);\n  width: 100vw;\n  box-sizing: border-box;\n  @media "," {\n    width: 300px;\n  }\n  ",";\n"])),(function(n){return n.profilePicture||""}),f.up("sm"),v),zn=h.c.div(Cn||(Cn=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 8px;\n"]))),Fn=h.c.img(An||(An=Object(p.a)(["\n  display: block;\n  border-radius: 50%;\n"])));function In(n){var e=n.profilePicture,t=n.doctorName,r=n.phoneNumbers,i=n.email,c=n.facebook,a=n.moreInfo,o=Object(w.a)(n,$n);return Object(A.jsxs)(Pn,Object(b.a)(Object(b.a)({},o),{},{children:[Object(A.jsxs)(zn,{children:[Object(A.jsx)(Fn,{alt:"avatar",height:"100px",width:"100px",src:e}),Object(A.jsx)("h3",{children:t})]}),Object(A.jsx)(kn,{width:"50%"}),Object(A.jsxs)(un,{children:[r.map((function(n){return Object(A.jsx)(hn,{label:n,icon:y.h},n)})),Object(A.jsx)(hn,{label:i,icon:y.f,to:i}),Object(A.jsx)(hn,{label:"Facebook Account",icon:y.b,to:c}),Object(A.jsx)(hn,{label:"More Info",icon:y.e,to:a})]})]}))}var Ln,Dn={up:"column",bottom:"column-reverse",right:"row",left:"row-reverse"},Hn=h.c.div(Bn||(Bn=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  flex-direction: ",";\n  @media "," {\n    flex-direction: ",";\n  }\n"])),(function(n){return Dn[n.direction]}),f.down("sm"),(function(n){return"right"===n.direction?"column-reverse":"column"})),Gn=h.c.div(Nn||(Nn=Object(p.a)(["\n  flex-direction: column;\n  text-align: justify;\n  flex-grow: 1;\n  width: 400px;\n  min-width: 300px;\n"]))),_n=h.c.img(Wn||(Wn=Object(p.a)(["\n  object-fit: contain;\n  width: 500px;\n  height: 300px;\n"]))),qn=h.c.h1(Mn||(Mn=Object(p.a)(["\n  text-align: center;\n"])));function En(n){var e=n.direction,t=n.imgSrc,r=n.title,i=n.children;return Object(A.jsxs)(Hn,{direction:e,children:[Object(A.jsx)(_n,{src:t}),Object(A.jsxs)(Gn,{children:[Object(A.jsx)(qn,{children:r}),Object(A.jsx)("p",{children:i})]})]})}var Jn=h.c.div(Ln||(Ln=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  & > * {\n    margin: 16px;\n  }\n"])));function Rn(){return Object(A.jsxs)(wn,{children:[Object(A.jsx)(En,{direction:"left",imgSrc:"https://scx2.b-cdn.net/gfx/news/hires/2020/hospital.jpg",title:"Dar Al-Salam",children:"Consectetur mollis vehicula magnis mi vitae aliquet ligula eros a curae a sit vel curabitur class nascetur cubilia ut consectetur tempor eget torquent in ipsum.Hac a platea velit a interdum a vestibulum a et ridiculus nisl eget sem a a a fermentum habitasse nullam metus suscipit donec euismod vestibulum nisl suspendisse ut."}),Object(A.jsx)(Jn,{children:Object.values(gn).map((function(n){return Object(A.jsx)(In,Object(b.a)({$elevation:4},n))}))})]})}var Xn=function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(m,{}),Object(A.jsxs)(C.a,{children:[Object(A.jsx)(xn,{}),Object(A.jsx)(On.a,{path:"/",component:Rn})]})]})};d.a.render(Object(A.jsx)(l.a.StrictMode,{children:Object(A.jsx)(Xn,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5acab524.chunk.js.map