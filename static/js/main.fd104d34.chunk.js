(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,n,t){e.exports=t(45)},45:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(16),o=t.n(c),u=t(49),i=t(50),l=t(46),s=t(7),m=t(8),d=t(9),p=t(11),f=t(10),b=t(12),h=t(2),g=t(3);function v(){var e=Object(h.a)(["\n  color: '#f2f2f2';\n  line-height: 23px;\n  white-space: pre-line;\n"]);return v=function(){return e},e}var E=g.c.p(v()),O=t(48),j=t(43);function y(){var e=Object(h.a)(["\n  ","\n"]);return y=function(){return e},e}function S(){var e=Object(h.a)(["\n  ","\n"]);return S=function(){return e},e}function x(){var e=Object(h.a)(["\n  ","\n"]);return x=function(){return e},e}function k(){var e=Object(h.a)(["\n      font-size: 18px;\n    "]);return k=function(){return e},e}function w(){var e=Object(h.a)(["\n  color: #1d97ff;\n  text-decoration: none;\n  &:visited {\n    color: #125d9c;\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  ","\n"]);return w=function(){return e},e}var _=Object(g.b)(w(),function(e){return e.large&&Object(g.b)(k())}),C=(Object(g.c)(O.a)(x(),_),Object(g.c)(j.a)(S(),_)),M=g.c.a(y(),_);function R(){var e=Object(h.a)(["\n  margin-right: 10px;\n"]);return R=function(){return e},e}function L(){var e=Object(h.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: -10px 0 5px 0;\n  font-size: 12px;\n"]);return L=function(){return e},e}function T(){var e=Object(h.a)(["\n  display: block;\n  margin: 15px 0;\n  padding: 15px 0;\n  border-bottom: 1px dashed #ddd;\n"]);return T=function(){return e},e}var U=g.c.div(T()),D=g.c.ul(L()),F=g.c.li(R()),P=function(e){var n=e.comment;return a.a.createElement(U,null,a.a.createElement(E,null,n.body),a.a.createElement(D,null,a.a.createElement(F,null,a.a.createElement(M,{href:"https://old.reddit.com/".concat(n.permalink),target:"_blank"},"permalink"))))};function B(){var e=Object(h.a)(["\n  flex: 0 1 700px;\n  margin-bottom: 50px;\n"]);return B=function(){return e},e}function N(){var e=Object(h.a)(["\n  flex: 0 1 200px;\n  height: 99vh;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 10px;\n  left: 10px;\n"]);return N=function(){return e},e}function z(){var e=Object(h.a)(["\n  display: flex;\n"]);return z=function(){return e},e}var A=g.c.div(z()),I=g.c.div(N()),J=g.c.div(B()),Q=function(e){var n=e.column1,t=e.column2;return a.a.createElement(A,null,n&&a.a.createElement(I,null,n),t&&a.a.createElement(J,null,t))};Q.defaultProps={column1:null,column2:null};var V=Q;function W(){var e=Object(h.a)(["\n  background-color: #808080;\n  border-color: #808080;\n  color: #000;\n  border-radius: 2px;\n  padding: 2px 4px;\n"]);return W=function(){return e},e}var G=g.c.button(W());function H(){var e=Object(h.a)(["\n  border-radius: 2px;\n  padding: 3px 4px;\n  border: none;\n"]);return H=function(){return e},e}var $=g.c.input(H()),q=function(e){function n(){var e;return Object(m.a)(this,n),(e=Object(p.a)(this,Object(f.a)(n).call(this))).state={value:""},e}return Object(b.a)(n,e),Object(d.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var n=this.props.dispatch,t=this.state.value;t&&(n({type:"SUB_ADD",sub:t}),this.setState({value:""}))}},{key:"render",value:function(){var e=this,n=this.state.value;return a.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},a.a.createElement($,{type:"text",placeholder:"Add subreddit",value:n,onChange:function(n){return e.setState({value:n.target.value})}})," ",a.a.createElement(G,{type:"submit"},"Add"))}}]),n}(a.a.Component),K=Object(s.b)()(q);function X(){var e=Object(h.a)(["\n  margin: 0 0 5px 0;\n"]);return X=function(){return e},e}function Y(){var e=Object(h.a)(["\n  list-style: none;\n  padding: 0;\n"]);return Y=function(){return e},e}var Z=g.c.ul(Y()),ee=g.c.li(X()),ne=function(e){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this.props.sub;return a.a.createElement(Z,null,e.map(function(e,n){return a.a.createElement(ee,{key:n},a.a.createElement(C,{to:"/r/".concat(e),large:"true"},e)," ")}))}}]),n}(a.a.Component),te=Object(s.b)(function(e){return{sub:e.sub}})(ne);function re(){var e=Object(h.a)(["\n  ","\n  font-size: 1.7rem;\n"]);return re=function(){return e},e}function ae(){var e=Object(h.a)(["\n  ","\n  font-size: 2rem;\n"]);return ae=function(){return e},e}function ce(){var e=Object(h.a)(["\n  ","\n  font-size: 2.5rem;\n"]);return ce=function(){return e},e}var oe="\n  color: #f2f2f2;\n  margin: 0 0 10px 0;\n  line-height: 1.2;\n  font-weight: 200;\n",ue=g.c.h1(ce(),oe),ie=(g.c.h2(ae(),oe),g.c.h3(re(),oe));function le(){var e=Object(h.a)(["\n  margin-right: 10px;\n"]);return le=function(){return e},e}function se(){var e=Object(h.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  font-size: 12px;\n"]);return se=function(){return e},e}var me=g.c.ul(se()),de=g.c.li(le()),pe=function(e){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e,n,t=this.props,r=t.dispatch,a=t.match;r((e=a.params.sub,n=a.params.id,function(t){return t({type:"COMMENTS_REQUEST"}),fetch("".concat("https://ssl.reddit.com/r","/").concat(e,"/comments/").concat(n,"/comments.json?sort=top")).then(function(e){if(!e.ok)throw new Error("".concat(e.status," error occured."));return e.json()}).then(function(e){return t({type:"COMMENTS_SUCCESS",comments:e})}).catch(function(e){return t({type:"COMMENTS_ERROR",err:e})})}))}},{key:"render",value:function(){var e=this.props,n=e.comments,t=e.post,r=e.isLoading,c=e.error;if(r||c)return a.a.createElement(V,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null)," ",a.a.createElement(te,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null,r&&"Loading comments\u2026"),a.a.createElement(E,null,c&&c))});var o=t.title,u=t.permalink,i=t.num_comments;return a.a.createElement(V,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null)," ",a.a.createElement(te,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(ie,null,o),a.a.createElement(me,null,a.a.createElement(de,null,i," comments"),a.a.createElement(de,null,a.a.createElement(M,{href:"https://old.reddit.com/".concat(u),target:"_blank"},"permalink"))),n.map(function(e){return a.a.createElement(P,{key:e.data.id,comment:e.data})}))})}}]),n}(a.a.Component);pe.defaultProps={error:null};var fe=Object(s.b)(function(e){return{comments:e.comment.comments,post:e.comment.post,isLoading:e.comment.isLoading,error:e.comment.error}})(pe);function be(){var e=Object(h.a)(["\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    background: #292929;\n    color: #f3f3f3;\n    margin: 0;\n    padding: 0;\n  }\n"]);return be=function(){return e},e}var he=Object(g.a)(be()),ge=t(51),ve=function(e){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this.props.sub;if(e.length){var n=e[Math.floor(Math.random()*e.length)];return a.a.createElement(ge.a,{push:!0,to:"/r/".concat(n)})}return a.a.createElement(a.a.Fragment,null,a.a.createElement(V,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null)," ",a.a.createElement(te,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(ue,null,"Casually read the most popular posts on selected subreddits"),a.a.createElement(E,null,"Only posts above a certain popularity are shown and then sorted by date."),a.a.createElement(E,null,"Visited links are slighty darker."))}))}}]),n}(a.a.Component),Ee=Object(s.b)(function(e){return{sub:e.sub}})(ve);function Oe(){var e=Object(h.a)(["\n  margin-right: 10px;\n"]);return Oe=function(){return e},e}function je(){var e=Object(h.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  font-size: 12px;\n"]);return je=function(){return e},e}function ye(){var e=Object(h.a)(["\n  display: block;\n  margin: 15px 0;\n  padding: 15px 0;\n  border-bottom: 1px dashed #ddd;\n"]);return ye=function(){return e},e}var Se=g.c.div(ye()),xe=g.c.ul(je()),ke=g.c.li(Oe()),we=function(e){var n=e.post,t=n.id,r=n.subreddit,c=n.url,o=n.title,u=n.created_utc,i=n.domain,l=n.author,s=n.num_comments,m=new Date(1e3*u).toLocaleDateString(navigator.language||navigator.userLanguage,{weekday:"long",year:"2-digit",month:"short",day:"numeric"});return a.a.createElement(Se,null,a.a.createElement(M,{href:c,target:"_blank",large:!0},o),a.a.createElement(xe,null,a.a.createElement(ke,null,m),a.a.createElement(ke,null,a.a.createElement(C,{to:"/comments/".concat(r,"/").concat(t)},"comments (",s,")")),a.a.createElement(ke,null,a.a.createElement(M,{href:"https://old.reddit.com/user/".concat(l),target:"_blank"},l)),a.a.createElement(ke,null,a.a.createElement(M,{href:"https://old.reddit.com/domain/".concat(i,"/")},i))))},_e=function(e){return function(n){return n({type:"POSTS_REQUEST"}),fetch("".concat("https://ssl.reddit.com/r","/").concat(e,"/top.json?sort=top&t=week")).then(function(e){if(!e.ok)throw new Error("".concat(e.status," error occured."));return e.json()}).then(function(e){return n({type:"POSTS_SUCCESS",posts:e})}).catch(function(e){return n({type:"POSTS_ERROR",err:e})})}},Ce=function(e){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.dispatch,t=e.match;n(_e(t.params.id))}},{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.dispatch,r=n.match;r.params.id!==e.match.params.id&&t(_e(r.params.id))}},{key:"render",value:function(){var e=this.props,n=e.match,t=e.isLoading,r=e.posts,c=e.dispatch,o=e.error;return a.a.createElement("div",null,a.a.createElement(V,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null)," ",a.a.createElement(te,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(ie,null,"/r/",n.params.id," ",a.a.createElement(G,{onClick:function(){return c({type:"SUB_REMOVE",sub:n.params.id})}},"Remove")),a.a.createElement(E,null,t&&"Loading"),a.a.createElement(E,null,o&&o),!t&&r.map(function(e,n){return a.a.createElement(we,{key:n,post:e.data})}))}))}}]),n}(a.a.Component);Ce.defaultProps={error:null};var Me=Object(s.b)(function(e){return{posts:e.post.posts,isLoading:e.post.isLoading,error:e.post.error}})(Ce),Re=t(29),Le=t(15),Te=(t(44),{comments:[],post:{},isLoading:!0,error:null}),Ue={posts:[],isLoading:!1,error:null},De=t(30),Fe=[],Pe=Object(Le.c)({comment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"COMMENTS_REQUEST":return Object.assign({},{post:{},comments:[],isLoading:!0,error:null});case"COMMENTS_SUCCESS":return Object.assign({},{post:n.comments[0].data.children[0].data,comments:n.comments[1].data.children,isLoading:!1});case"COMMENTS_ERROR":return Object.assign({},{comments:[],isLoading:!1,error:!0});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POSTS_REQUEST":return Object.assign({},{posts:[],isLoading:!0,error:!1});case"POSTS_SUCCESS":return Object.assign({},{posts:n.posts.data.children.sort(function(e,n){return e.data.created_utc-n.data.created_utc}).reverse(),isLoading:!1});case"POSTS_ERROR":return Object.assign({},{posts:[],error:n.err.message,isLoading:!1});default:return e}},sub:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SUB_ADD":return e.includes(n.sub)?e:[].concat(Object(De.a)(e),[n.sub]).sort();case"SUB_REMOVE":return e.filter(function(e){return n.sub!==e});case"SUBS_GET":default:return e}}}),Be=[Re.a];var Ne={sub:JSON.parse(localStorage.getItem("subs")||"[]")},ze=Object(Le.d)(Pe,Ne,Le.a.apply(void 0,Be));ze.subscribe(function(){localStorage.setItem("subs",JSON.stringify(ze.getState().sub))});var Ae=ze;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(s.a,{store:Ae},a.a.createElement(u.a,null,a.a.createElement(i.a,null,a.a.createElement(l.a,{path:"/r/:id",component:Me}),a.a.createElement(l.a,{path:"/comments/:sub/:id",component:fe}),a.a.createElement(l.a,{path:"/",exact:!0,component:Ee}))),a.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.fd104d34.chunk.js.map