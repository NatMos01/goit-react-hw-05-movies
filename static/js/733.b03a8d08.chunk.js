"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{854:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(137),a=t(184),i=function(){return(0,a.jsx)(r.rj,{visible:!0,height:"80",width:"80",color:"#4fa94d",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{position:"fixed",top:"25%",left:"50%"},wrapperClass:"grid-wrapper"})}},945:function(n,e,t){t.d(e,{Z:function(){return h}});t(791);var r,a,i,o=t(689),u=t(928),s=t(168),c=t(87),l=t(924),p=l.ZP.h1(r||(r=(0,s.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n"]))),d=l.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 20px;\n  list-style: none;\n  color: red;\n  padding-bottom: 20px;\n  & li {\n    flex-basis: calc((100% - 76px) / 4);\n    border: 1px solid black;\n    border-radius: 5px;\n    overflow: hidden;\n  }\n"]))),f=(0,l.ZP)(c.rU)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n  & h2 {\n    color: red;\n    height: 112px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n  & img {\n    border-bottom: 1px solid black;\n  }\n"]))),x=t(184),h=function(n){var e=n.muviesList,t=n.title,r=(0,o.TH)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p,{children:t}),(0,x.jsx)(d,{children:e.map((function(n){var e=n.id,t=n.original_title,a=n.poster_path,i=n.title;return(0,x.jsx)("li",{children:(0,x.jsxs)(f,{to:"/movies/".concat(e),state:{from:r},children:[(0,x.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):u.Y,alt:i,width:266,height:398}),(0,x.jsx)("h2",{children:t})]})},e)}))})]})}},928:function(n,e,t){t.d(e,{Y:function(){return r}});var r="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},733:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,i=t(945),o=t(791),u=t(206),s=t(168),c=t(924),l=c.ZP.form(r||(r=(0,s.Z)(["\n  display: flex;\n  max-width: 300px;\n  margin: auto auto 20px;\n  & button {\n    width: 48px;\n    height: 48px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    background-color: white;\n    border: 1px solid black;\n    border-right: none;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    &:hover,\n    &:active {\n      box-shadow: #979494 0px 0px 7px 0px inset;\n    }\n  }\n"]))),p=c.ZP.input(a||(a=(0,s.Z)(["\n  width: 100%;\n  padding: 7px 15px;\n  border: 1px solid black;\n  line-height: 1.5;\n  letter-spacing: 0.04em;\n  font-size: 16px;\n  font-weight: 600;\n  outline: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  &:focus {\n    box-shadow: #979494 0px 0px 7px 0px inset;\n  }\n"]))),d=t(184),f=function(n){var e=n.query,t=n.handleChange,r=n.submitForm;return(0,d.jsxs)(l,{onSubmit:r,children:[(0,d.jsx)("button",{type:"submit",children:(0,d.jsx)(u.RB5,{size:"24",color:"black"})}),(0,d.jsx)(p,{defaultValue:e,type:"text",onChange:t})]})},x=t(854),h=t(861),g=t(439),m=t(757),v=t.n(m),b=t(87),Z=t(679),w=function(){var n=function(){var n,e,t=(0,b.lr)(),r=(0,g.Z)(t,2),a=r[0],i=r[1],u=(0,o.useState)(null!==(n=a.get("query"))&&void 0!==n?n:""),s=(0,g.Z)(u,2),c=s[0],l=s[1],p=(0,o.useState)([]),d=(0,g.Z)(p,2),f=d[0],x=d[1],m=(0,o.useState)(!1),w=(0,g.Z)(m,2),y=w[0],j=w[1],k=(0,o.useState)(null),S=(0,g.Z)(k,2),I=S[0],q=S[1],z=null!==(e=a.get("query"))&&void 0!==e?e:"";return(0,o.useEffect)((function(){var n=function(){var n=(0,h.Z)(v().mark((function n(){var e,t;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,z){n.next=3;break}return n.abrupt("return");case 3:return j(!0),q(null),n.next=7,(0,Z.Pt)(z);case 7:e=n.sent,t=e.results,x(t),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),console.log("error: ",n.t0),q(n.t0.message);case 16:return n.prev=16,j(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,12,16,19]])})));return function(){return n.apply(this,arguments)}}();n()}),[z]),{searchData:f,searchQuery:c,query:z,isLoading:y,error:I,onHandleSubmit:function(n){n.preventDefault(),""!==c.trim()&&i({query:c})},onHandleChange:function(n){var e=n.target;l(e.value.toLowerCase())}}}(),e=n.searchData,t=n.searchQuery,r=n.query,a=n.isLoading,u=n.error,s=n.onHandleSubmit,c=n.onHandleChange;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{query:t,submitForm:s,handleChange:c}),a&&(0,d.jsx)(x.a,{}),u&&(0,d.jsxs)("div",{style:{textAlign:"center",fontSize:"35px"},children:["Error: ",u]}),e.length>0&&(0,d.jsx)(i.Z,{muviesList:e,title:"Everything found on request: ".concat(r)})]})}},679:function(n,e,t){t.d(e,{Pt:function(){return s},zv:function(){return l},TP:function(){return c},tx:function(){return p},Hg:function(){return u}});var r=t(861),a=t(757),i=t.n(a),o=t(294);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzE3NThlMDFmMjI1OWM4NTZlMGY3MGFlNjViYThmZSIsInN1YiI6IjY1OTU1OGExZDdhNzBhMTIyZTY5NGJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qS9WFf-TwNZvx1ogxQNmBt4zTjxjKlHS7BGELLpuzDM";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=733.b03a8d08.chunk.js.map