(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,n,t){e.exports=t(46)},46:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(17),c=t.n(o),u=t(50),i=t(51),l=t(47),s=t(7),m=t(2),d=t(8),p=t(9),f=t(11),b=t(10),h=t(12),v=t(3),E=t(49),g=t(44);function O(){var e=Object(v.a)(["\n  ","\n"]);return O=function(){return e},e}function j(){var e=Object(v.a)(["\n  ","\n"]);return j=function(){return e},e}function y(){var e=Object(v.a)(["\n  ","\n"]);return y=function(){return e},e}function S(){var e=Object(v.a)(["\n      font-size: 18px;\n    "]);return S=function(){return e},e}function x(){var e=Object(v.a)(["\n  color: ",";\n  text-decoration: none;\n  &:visited {\n    color: ",";\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  ","\n"]);return x=function(){return e},e}var k=Object(m.c)(x(),function(e){return e.theme.link.main},function(e){return e.theme.link.visited},function(e){return e.large&&Object(m.c)(S())}),_=Object(m.d)(E.a)(y(),k),w=Object(m.d)(g.a)(j(),k),C=m.d.a(O(),k),M=function(e){var n=e.type;return"a"===n?a.a.createElement(C,e):"nav"===n?a.a.createElement(_,e):a.a.createElement(w,e)};M.defaultProps={type:"link"};var L=M,R=function(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent};function T(){var e=Object(v.a)(["\n  font-size: 16px;\n  line-height: 22px;\n  a {\n    color: ",";\n    text-decoration: none;\n    &:hover {\n      text-decoration: underline;\n    }\n    &:visited {\n      color: ",";\n    }\n  }\n  p {\n    margin: 0 0 20px 0;\n  }\n  blockquote {\n    margin: 0;\n    padding: 0 0 0 20px;\n    font-style: italic;\n  }\n"]);return T=function(){return e},e}function U(){var e=Object(v.a)(["\n  margin-right: 10px;\n"]);return U=function(){return e},e}function D(){var e=Object(v.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: -10px 0 5px 0;\n  font-size: 12px;\n"]);return D=function(){return e},e}function F(){var e=Object(v.a)(["\n  display: block;\n  margin: 15px 0;\n  padding: 15px 0;\n  border-bottom: 1px dashed #ddd;\n"]);return F=function(){return e},e}var P=m.d.div(F()),z=m.d.ul(D()),B=m.d.li(U()),I=m.d.code(T(),function(e){return e.theme.link.main},function(e){return e.theme.link.visited}),N=function(e){var n=e.comment;return a.a.createElement(P,null,a.a.createElement(I,{dangerouslySetInnerHTML:{__html:R(n.body_html)}}),a.a.createElement(z,null,a.a.createElement(B,null,a.a.createElement(L,{href:"https://old.reddit.com/".concat(n.permalink),target:"_blank",type:"a"},"permalink"))))};function A(){var e=Object(v.a)(["\n  flex: 0 1 700px;\n  margin-left: 200px;\n"]);return A=function(){return e},e}function J(){var e=Object(v.a)(["\n  width: 200px;\n  overflow: hidden;\n  position: fixed;\n  top: 25px;\n  left: 20px;\n"]);return J=function(){return e},e}function Q(){var e=Object(v.a)(["\n  display: flex;\n"]);return Q=function(){return e},e}var H=m.d.div(Q()),V=m.d.div(J()),W=m.d.div(A()),q=function(e){var n=e.column1,t=e.column2;return a.a.createElement(H,null,n&&a.a.createElement(V,null,n),t&&a.a.createElement(W,null,t))};q.defaultProps={column1:null,column2:null};var G=q;function $(){var e=Object(v.a)(["\n  color: '#f2f2f2';\n  line-height: 23px;\n  white-space: pre-line;\n"]);return $=function(){return e},e}var K=m.d.p($());function X(){var e=Object(v.a)(["\n  background-color: #808080;\n  border-color: #808080;\n  color: #000;\n  border-radius: 2px;\n  padding: 2px 4px;\n"]);return X=function(){return e},e}var Y=m.d.button(X()),Z=function(e){return a.a.createElement(Y,e)};function ee(){var e=Object(v.a)(["\n  border-radius: 2px;\n  padding: 3px 4px;\n  border: none;\n"]);return ee=function(){return e},e}var ne=m.d.input(ee()),te=function(e){function n(){var e;return Object(d.a)(this,n),(e=Object(f.a)(this,Object(b.a)(n).call(this))).state={value:""},e}return Object(h.a)(n,e),Object(p.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var n=this.props.dispatch,t=this.state.value;t&&(n({type:"SUB_ADD",sub:t}),this.setState({value:""}))}},{key:"render",value:function(){var e=this,n=this.state.value;return a.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},a.a.createElement(ne,{type:"text",placeholder:"Add subreddit",value:n,onChange:function(n){return e.setState({value:n.target.value})}})," ",a.a.createElement(Z,{type:"submit"},"Add"))}}]),n}(a.a.Component),re=Object(s.b)()(te);function ae(){var e=Object(v.a)(["\n  margin: 0 0 5px 0;\n"]);return ae=function(){return e},e}function oe(){var e=Object(v.a)(["\n  list-style: none;\n  padding: 0;\n"]);return oe=function(){return e},e}var ce=m.d.ul(oe()),ue=m.d.li(ae()),ie=Object(s.b)(function(e){return{subs:e.sub}})(function(e){var n=e.subs;return a.a.createElement(ce,null,n.map(function(e,n){return a.a.createElement(ue,{key:n},a.a.createElement(L,{to:"/r/".concat(e),large:"true"},e)," ")}))});function le(){var e=Object(v.a)(["\n  ","\n  font-size: 1.7rem;\n"]);return le=function(){return e},e}function se(){var e=Object(v.a)(["\n  ","\n  font-size: 2rem;\n"]);return se=function(){return e},e}function me(){var e=Object(v.a)(["\n  ","\n  font-size: 2.5rem;\n"]);return me=function(){return e},e}var de="\n  color: #f2f2f2;\n  margin: 0 0 10px 0;\n  line-height: 1.2;\n  font-weight: 200;\n",pe=m.d.h1(me(),de),fe=(m.d.h2(se(),de),m.d.h3(le(),de));function be(){var e=Object(v.a)(["\n  margin-right: 10px;\n"]);return be=function(){return e},e}function he(){var e=Object(v.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  font-size: 12px;\n"]);return he=function(){return e},e}var ve=m.d.ul(he()),Ee=m.d.li(be()),ge=function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e,n,t=this.props,r=t.dispatch,a=t.match;r((e=a.params.sub,n=a.params.id,function(t){return t({type:"COMMENTS_REQUEST"}),fetch("".concat("https://ssl.reddit.com/r","/").concat(e,"/comments/").concat(n,"/comments.json?sort=top")).then(function(e){if(!e.ok)throw new Error("".concat(e.status," error occured."));return e.json()}).then(function(e){return t({type:"COMMENTS_SUCCESS",comments:e})}).catch(function(e){return t({type:"COMMENTS_ERROR",err:e})})}))}},{key:"render",value:function(){var e=this.props,n=e.comments,t=e.post,r=e.isLoading,o=e.error;if(r||o)return a.a.createElement(G,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null)," ",a.a.createElement(ie,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null,r&&"Loading comments\u2026"),a.a.createElement(K,null,o&&o))});var c=t.title,u=t.selftext_html,i=t.permalink,l=t.num_comments;return a.a.createElement(G,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null)," ",a.a.createElement(ie,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(fe,null,c),u&&a.a.createElement(I,{dangerouslySetInnerHTML:{__html:R(u)}}),a.a.createElement(ve,null,a.a.createElement(Ee,null,l," comments"),a.a.createElement(Ee,null,a.a.createElement(L,{href:"https://old.reddit.com/".concat(i),target:"_blank",type:"a"},"permalink"))),n.map(function(e){return a.a.createElement(N,{key:e.data.id,comment:e.data})}))})}}]),n}(a.a.Component);ge.defaultProps={error:null};var Oe=Object(s.b)(function(e){return{comments:e.comment.comments,post:e.comment.post,isLoading:e.comment.isLoading,error:e.comment.error}})(ge);function je(){var e=Object(v.a)(["\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    background: #292929;\n    color: #f3f3f3;\n    margin: 0;\n    padding: 20px;\n  }\n"]);return je=function(){return e},e}var ye=Object(m.b)(je()),Se=t(52),xe=function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props.sub;if(e.length){var n=e[Math.floor(Math.random()*e.length)];return a.a.createElement(Se.a,{push:!0,to:"/r/".concat(n)})}return a.a.createElement(a.a.Fragment,null,a.a.createElement(G,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null)," ",a.a.createElement(ie,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(pe,null,"Casually read the most popular posts on selected subreddits"),a.a.createElement(K,null,"Only posts above a certain popularity are shown and then sorted by date."),a.a.createElement(K,null,"Visited links are slighty darker."))}))}}]),n}(a.a.Component),ke=Object(s.b)(function(e){return{sub:e.sub}})(xe);function _e(){var e=Object(v.a)(["\n  margin-right: 10px;\n"]);return _e=function(){return e},e}function we(){var e=Object(v.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  font-size: 12px;\n"]);return we=function(){return e},e}function Ce(){var e=Object(v.a)(["\n  display: block;\n  margin: 15px 0;\n  padding: 15px 0;\n  border-bottom: 1px dashed #ddd;\n"]);return Ce=function(){return e},e}var Me=m.d.div(Ce()),Le=m.d.ul(we()),Re=m.d.li(_e()),Te=function(e){var n=e.post,t=n.id,r=n.subreddit,o=n.url,c=n.title,u=n.created_utc,i=n.domain,l=n.author,s=n.num_comments,m=new Date(1e3*u).toLocaleDateString(navigator.language||navigator.userLanguage,{weekday:"long",year:"2-digit",month:"short",day:"numeric"});return a.a.createElement(Me,null,a.a.createElement(L,{href:o,target:"_blank",type:"a",large:!0},c),a.a.createElement(Le,null,a.a.createElement(Re,null,m),a.a.createElement(Re,null,a.a.createElement(L,{to:"/comments/".concat(r,"/").concat(t)},"comments (",s,")")),a.a.createElement(Re,null,a.a.createElement(L,{href:"https://old.reddit.com/user/".concat(l),target:"_blank",type:"a"},l)),a.a.createElement(Re,null,a.a.createElement(L,{href:"https://old.reddit.com/domain/".concat(i,"/"),type:"a"},i))))},Ue=function(e){return function(n){return n({type:"POSTS_REQUEST",sub:e}),fetch("".concat("https://ssl.reddit.com/r","/").concat(e,"/top.json?sort=top&t=week")).then(function(e){if(!e.ok)throw new Error("".concat(e.status," error occured."));return e.json()}).then(function(t){return n({type:"POSTS_SUCCESS",posts:t,sub:e})}).catch(function(t){return n({type:"POSTS_ERROR",err:t,sub:e})})}},De=function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.dispatch,t=e.match,r=e.sub,a=t.params.id;a!==r&&n(Ue(a))}},{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.dispatch,r=n.match,a=n.sub,o=r.params.id;o!==e.match.params.id&&o!==a&&t(Ue(o))}},{key:"render",value:function(){var e=this.props,n=e.match,t=e.isLoading,r=e.posts,o=e.dispatch,c=e.error;return a.a.createElement("div",null,a.a.createElement(G,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null)," ",a.a.createElement(ie,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(fe,null,"/r/",n.params.id," ",a.a.createElement(Z,{onClick:function(){return o({type:"SUB_REMOVE",sub:n.params.id})}},"Remove")),a.a.createElement(K,null,t&&"Loading"),a.a.createElement(K,null,c&&c),!t&&r.map(function(e,n){return a.a.createElement(Te,{key:n,post:e.data})}))}))}}]),n}(a.a.Component);De.defaultProps={error:null,sub:""};var Fe=Object(s.b)(function(e){return{posts:e.post.posts,sub:e.post.sub,isLoading:e.post.isLoading,error:e.post.error}})(De),Pe=t(31),ze=t(16),Be=(t(45),t(14)),Ie={comments:[],post:{},isLoading:!0,error:null},Ne={posts:[],sub:"",isLoading:!1,error:null},Ae=t(25),Je=[],Qe=Object(ze.c)({comment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"COMMENTS_REQUEST":return Object(Be.a)({},e,{post:{},comments:[],isLoading:!0,error:null});case"COMMENTS_SUCCESS":return Object(Be.a)({},e,{post:n.comments[0].data.children[0].data,comments:n.comments[1].data.children,isLoading:!1});case"COMMENTS_ERROR":return Object(Be.a)({},e,{comments:[],isLoading:!1,error:!0});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POSTS_REQUEST":return Object(Be.a)({},e,{posts:[],sub:n.sub,isLoading:!0,error:!1});case"POSTS_SUCCESS":var t=n.posts.data.children.sort(function(e,n){return e.data.created_utc-n.data.created_utc}).reverse();return Object(Be.a)({},e,{posts:t,isLoading:!1});case"POSTS_ERROR":return Object(Be.a)({},e,{error:n.err.message,isLoading:!1});default:return e}},sub:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SUB_ADD":return Object(Ae.a)(new Set([].concat(Object(Ae.a)(e),[n.sub]))).sort();case"SUB_REMOVE":return e.filter(function(e){return n.sub!==e});case"SUBS_GET":default:return e}}}),He=[Pe.a];var Ve={sub:JSON.parse(localStorage.getItem("subs")||"[]")},We=Object(ze.d)(Qe,Ve,ze.a.apply(void 0,He));We.subscribe(function(){localStorage.setItem("subs",JSON.stringify(We.getState().sub))});var qe=We,Ge={color:"blue",link:{main:"#1d97ff",visited:"#1267af"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(m.a,{theme:Ge},a.a.createElement(s.a,{store:qe},a.a.createElement(u.a,null,a.a.createElement(i.a,null,a.a.createElement(l.a,{path:"/r/:id",component:Fe}),a.a.createElement(l.a,{path:"/comments/:sub/:id",component:Oe}),a.a.createElement(l.a,{path:"/",exact:!0,component:ke}))),a.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.164a3f4d.chunk.js.map