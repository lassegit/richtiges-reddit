(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,n,t){e.exports=t(55)},55:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(24),o=t.n(c),u=t(59),i=t(60),l=t(56),s=t(10),m=t(4),d=t(15),p=t(16),f=t(18),b=t(17),h=t(19),v=t(5),E=t(58),g=t(51);function O(){var e=Object(v.a)(["\n  ","\n"]);return O=function(){return e},e}function j(){var e=Object(v.a)(["\n  ","\n"]);return j=function(){return e},e}function y(){var e=Object(v.a)(["\n  ","\n"]);return y=function(){return e},e}function S(){var e=Object(v.a)(["\n      font-size: 18px;\n    "]);return S=function(){return e},e}function x(){var e=Object(v.a)(["\n  color: ",";\n  text-decoration: none;\n  &:visited {\n    color: ",";\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  ","\n"]);return x=function(){return e},e}var k=Object(m.c)(x(),function(e){return e.theme.link.main},function(e){return e.theme.link.visited},function(e){return e.large&&Object(m.c)(S())}),_=Object(m.d)(E.a)(y(),k),w=Object(m.d)(g.a)(j(),k),T=m.d.a(O(),k),C=function(e){var n=e.type;return"a"===n?a.a.createElement(T,e):"nav"===n?a.a.createElement(_,e):a.a.createElement(w,e)};C.defaultProps={type:"link"};var M=C,R=function(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent};function L(){var e=Object(v.a)(["\n  font-size: 16px;\n  line-height: 22px;\n  a {\n    color: ",";\n    text-decoration: none;\n    &:hover {\n      text-decoration: underline;\n    }\n    &:visited {\n      color: ",";\n    }\n  }\n  p {\n    margin: 0 0 20px 0;\n  }\n  blockquote {\n    margin: 0;\n    padding: 0 0 0 20px;\n    font-style: italic;\n  }\n"]);return L=function(){return e},e}function U(){var e=Object(v.a)(["\n  margin-right: 10px;\n"]);return U=function(){return e},e}function P(){var e=Object(v.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: -10px 0 5px 0;\n  font-size: 12px;\n"]);return P=function(){return e},e}function D(){var e=Object(v.a)(["\n  display: block;\n  margin: 15px 0;\n  padding: 15px 0;\n  border-bottom: 1px dashed #ddd;\n"]);return D=function(){return e},e}var F=m.d.div(D()),N=m.d.ul(P()),z=m.d.li(U()),B=m.d.code(L(),function(e){return e.theme.link.main},function(e){return e.theme.link.visited}),I=function(e){var n=e.comment;return a.a.createElement(F,null,a.a.createElement(B,{dangerouslySetInnerHTML:{__html:R(n.body_html)}}),a.a.createElement(N,null,a.a.createElement(z,null,a.a.createElement(M,{href:"https://old.reddit.com/".concat(n.permalink),target:"_blank",type:"a"},"permalink"))))};function Q(){var e=Object(v.a)(["\n  flex: 0 1 700px;\n  margin-left: 200px;\n"]);return Q=function(){return e},e}function A(){var e=Object(v.a)(["\n  width: 200px;\n  overflow: hidden;\n  position: fixed;\n  top: 25px;\n  left: 20px;\n"]);return A=function(){return e},e}function J(){var e=Object(v.a)(["\n  display: flex;\n"]);return J=function(){return e},e}var H=m.d.div(J()),V=m.d.div(A()),G=m.d.div(Q()),W=function(e){var n=e.column1,t=e.column2;return a.a.createElement(H,null,n&&a.a.createElement(V,null,n),t&&a.a.createElement(G,null,t))};W.defaultProps={column1:null,column2:null};var q=W;function $(){var e=Object(v.a)(["\n  color: '#f2f2f2';\n  line-height: 23px;\n  white-space: pre-line;\n"]);return $=function(){return e},e}var K=m.d.p($());function X(){var e=Object(v.a)(["\n  background-color: #808080;\n  border-color: #808080;\n  color: #000;\n  border-radius: 2px;\n  padding: 2px 4px;\n"]);return X=function(){return e},e}var Y=m.d.button(X()),Z=function(e){return a.a.createElement(Y,e)};function ee(){var e=Object(v.a)(["\n  border-radius: 2px;\n  padding: 3px 4px;\n  border: none;\n"]);return ee=function(){return e},e}var ne=m.d.input(ee()),te=function(e){function n(){var e;return Object(d.a)(this,n),(e=Object(f.a)(this,Object(b.a)(n).call(this))).state={value:""},e}return Object(h.a)(n,e),Object(p.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var n=this.props.dispatch,t=this.state.value;t&&(n({type:"SUB_ADD",sub:t}),this.setState({value:""}))}},{key:"render",value:function(){var e=this,n=this.state.value;return a.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},a.a.createElement(ne,{type:"text",placeholder:"Add subreddit",value:n,onChange:function(n){return e.setState({value:n.target.value})}})," ",a.a.createElement(Z,{type:"submit"},"Add"))}}]),n}(a.a.Component),re=Object(s.b)()(te);function ae(){var e=Object(v.a)(["\n  margin: 0 0 5px 0;\n"]);return ae=function(){return e},e}function ce(){var e=Object(v.a)(["\n  list-style: none;\n  padding: 0;\n"]);return ce=function(){return e},e}var oe=m.d.ul(ce()),ue=m.d.li(ae()),ie=Object(s.b)(function(e){return{subs:e.sub}})(function(e){var n=e.subs;return a.a.createElement(oe,null,n.map(function(e,n){return a.a.createElement(ue,{key:n},a.a.createElement(M,{to:"/r/".concat(e),large:"true"},e)," ")}))});function le(){var e=Object(v.a)(["\n  ","\n  font-size: 1.7rem;\n"]);return le=function(){return e},e}function se(){var e=Object(v.a)(["\n  ","\n  font-size: 2rem;\n"]);return se=function(){return e},e}function me(){var e=Object(v.a)(["\n  ","\n  font-size: 2.5rem;\n"]);return me=function(){return e},e}var de="\n  color: #f2f2f2;\n  margin: 0 0 10px 0;\n  line-height: 1.2;\n  font-weight: 200;\n",pe=m.d.h1(me(),de),fe=(m.d.h2(se(),de),m.d.h3(le(),de));function be(){var e=Object(v.a)(["\n  margin-right: 10px;\n"]);return be=function(){return e},e}function he(){var e=Object(v.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  font-size: 12px;\n"]);return he=function(){return e},e}var ve=m.d.ul(he()),Ee=m.d.li(be()),ge=function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.dispatch,t=e.match;n({type:"COMMENTS_REQUEST",sub:t.params.sub,id:t.params.id})}},{key:"render",value:function(){var e=this.props,n=e.comments,t=e.post,r=e.isLoading,c=e.error;if(r||c)return a.a.createElement(q,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null)," ",a.a.createElement(ie,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null,r&&"Loading comments\u2026"),a.a.createElement(K,null,c&&c))});var o=t.title,u=t.selftext_html,i=t.permalink,l=t.num_comments;return a.a.createElement(q,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null)," ",a.a.createElement(ie,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(fe,null,o),u&&a.a.createElement(B,{dangerouslySetInnerHTML:{__html:R(u)}}),a.a.createElement(ve,null,a.a.createElement(Ee,null,l," comments"),a.a.createElement(Ee,null,a.a.createElement(M,{href:"https://old.reddit.com/".concat(i),target:"_blank",type:"a"},"permalink"))),n.map(function(e){return a.a.createElement(I,{key:e.data.id,comment:e.data})}))})}}]),n}(a.a.Component);ge.defaultProps={error:null};var Oe=Object(s.b)(function(e){return{comments:e.comment.comments,post:e.comment.post,isLoading:e.comment.isLoading,error:e.comment.error}})(ge);function je(){var e=Object(v.a)(["\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    background: #292929;\n    color: #f3f3f3;\n    margin: 0;\n    padding: 20px;\n  }\n"]);return je=function(){return e},e}var ye=Object(m.b)(je()),Se=t(61),xe=function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props.sub;if(e.length){var n=e[Math.floor(Math.random()*e.length)];return a.a.createElement(Se.a,{push:!0,to:"/r/".concat(n)})}return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null)," ",a.a.createElement(ie,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(pe,null,"Casually read the most popular posts on selected subreddits"),a.a.createElement(K,null,"Only posts above a certain popularity are shown and then sorted by date."),a.a.createElement(K,null,"Visited links are slighty darker."))}))}}]),n}(a.a.Component),ke=Object(s.b)(function(e){return{sub:e.sub}})(xe);function _e(){var e=Object(v.a)(["\n  margin-right: 10px;\n"]);return _e=function(){return e},e}function we(){var e=Object(v.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  font-size: 12px;\n"]);return we=function(){return e},e}function Te(){var e=Object(v.a)(["\n  display: block;\n  margin: 15px 0;\n  padding: 15px 0;\n  border-bottom: 1px dashed #ddd;\n"]);return Te=function(){return e},e}var Ce=m.d.div(Te()),Me=m.d.ul(we()),Re=m.d.li(_e()),Le=function(e){var n=e.post,t=n.id,r=n.subreddit,c=n.url,o=n.title,u=n.created_utc,i=n.domain,l=n.author,s=n.num_comments,m=new Date(1e3*u).toLocaleDateString(navigator.language||navigator.userLanguage,{weekday:"long",year:"2-digit",month:"short",day:"numeric"});return a.a.createElement(Ce,null,a.a.createElement(M,{href:c,target:"_blank",type:"a",large:!0},o),a.a.createElement(Me,null,a.a.createElement(Re,null,m),a.a.createElement(Re,null,a.a.createElement(M,{to:"/comments/".concat(r,"/").concat(t)},"comments (",s,")")),a.a.createElement(Re,null,a.a.createElement(M,{href:"https://old.reddit.com/user/".concat(l),target:"_blank",type:"a"},l)),a.a.createElement(Re,null,a.a.createElement(M,{href:"https://old.reddit.com/domain/".concat(i,"/"),type:"a"},i))))},Ue=function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.dispatch,t=e.match,r=e.sub,a=t.params.id;a!==r&&n({type:"POSTS_REQUEST",payload:{id:a}})}},{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.dispatch,r=n.match,a=n.sub,c=r.params.id;c!==e.match.params.id&&c!==a&&t({type:"POSTS_REQUEST",payload:{id:c}})}},{key:"render",value:function(){var e=this.props,n=e.match,t=e.isLoading,r=e.posts,c=e.dispatch,o=e.error;return a.a.createElement("div",null,a.a.createElement(q,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null)," ",a.a.createElement(ie,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(fe,null,"/r/",n.params.id," ",a.a.createElement(Z,{onClick:function(){return c({type:"SUB_REMOVE",sub:n.params.id})}},"Remove")),a.a.createElement(K,null,t&&"Loading"),a.a.createElement(K,null,o&&o),!t&&r.map(function(e,n){return a.a.createElement(Le,{key:n,post:e.data})}))}))}}]),n}(a.a.Component);Ue.defaultProps={error:null,sub:""};var Pe=Object(s.b)(function(e){return{posts:e.post.posts,sub:e.post.sub,isLoading:e.post.isLoading,error:e.post.error}})(Ue),De=t(38),Fe=t(13),Ne=(t(52),t(12)),ze={comments:[],post:{},isLoading:!0,error:null},Be={posts:[],sub:"",isLoading:!1,error:null},Ie=t(32),Qe=[],Ae=Object(Fe.c)({comment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"COMMENTS_REQUEST":return Object(Ne.a)({},e,{post:{},comments:[],isLoading:!0,error:null});case"COMMENTS_SUCCESS":return Object(Ne.a)({},e,{post:n.data[0].data.children[0].data,comments:n.data[1].data.children,isLoading:!1});case"COMMENTS_ERROR":return Object(Ne.a)({},e,{comments:[],isLoading:!1,error:!0});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POSTS_REQUEST":return Object(Ne.a)({},e,{posts:[],sub:n.sub,isLoading:!0,error:!1});case"POSTS_SUCCESS":var t=n.data.data.children.sort(function(e,n){return e.data.created_utc-n.data.created_utc}).reverse();return Object(Ne.a)({},e,{posts:t,isLoading:!1});case"POSTS_ERROR":return Object(Ne.a)({},e,{error:n.error.message,isLoading:!1});default:return e}},sub:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SUB_ADD":return Object(Ie.a)(new Set([].concat(Object(Ie.a)(e),[n.sub]))).sort();case"SUB_REMOVE":return e.filter(function(e){return n.sub!==e});case"SUBS_GET":default:return e}}}),Je=t(14),He=t.n(Je),Ve=t(11),Ge={method:"GET",cache:"no-cache"},We=function(e){return Promise.reject(new Error(e))},qe={get:function(e,n){return fetch(e,Object(Ne.a)({},Ge,{params:n})).then(function(e){return e.ok?e.json():We("".concat(e.status," error occured."))}).catch(function(e){return We(e)})}},$e="https://ssl.reddit.com/r",Ke=He.a.mark(Xe);function Xe(e){var n,t,r;return He.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.sub,t=e.id,a.prev=1,a.next=4,Object(Ve.b)(qe.get,"".concat($e,"/").concat(n,"/comments/").concat(t,"/comments.json?sort=top"));case 4:return r=a.sent,a.next=7,Object(Ve.c)({type:"COMMENTS_SUCCESS",data:r,sub:n,id:t});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(Ve.c)({type:"COMMENTS_ERROR",error:a.t0,sub:n,id:t});case 13:case"end":return a.stop()}},Ke,this,[[1,9]])}var Ye=He.a.mark(Ze);function Ze(e){var n,t;return He.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload.id,r.prev=1,r.next=4,Object(Ve.b)(qe.get,"".concat($e,"/").concat(n,"/top.json?sort=top&t=week"));case 4:return t=r.sent,r.next=7,Object(Ve.c)({type:"POSTS_SUCCESS",data:t,id:n});case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(Ve.c)({type:"POSTS_ERROR",error:r.t0,id:n});case 13:case"end":return r.stop()}},Ye,this,[[1,9]])}var en=He.a.mark(nn);function nn(){return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ve.a)([Object(Ve.d)("POSTS_REQUEST",Ze),Object(Ve.d)("COMMENTS_REQUEST",Xe)]);case 2:case"end":return e.stop()}},en,this)}var tn=nn,rn=Object(De.a)(),an=[rn];var cn={sub:JSON.parse(localStorage.getItem("subs")||"[]")},on=Object(Fe.e)(Ae,cn,Fe.a.apply(void 0,an));rn.run(tn),on.subscribe(function(){localStorage.setItem("subs",JSON.stringify(on.getState().sub))});var un=on,ln={color:"blue",link:{main:"#1d97ff",visited:"#1267af"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(m.a,{theme:ln},a.a.createElement(s.a,{store:un},a.a.createElement(u.a,null,a.a.createElement(i.a,null,a.a.createElement(l.a,{path:"/r/:id",component:Pe}),a.a.createElement(l.a,{path:"/comments/:sub/:id",component:Oe}),a.a.createElement(l.a,{path:"/",exact:!0,component:ke}))),a.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.6b4b1569.chunk.js.map