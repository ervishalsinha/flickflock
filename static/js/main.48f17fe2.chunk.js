(this["webpackJsonpmovie-series-app"]=this["webpackJsonpmovie-series-app"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),s=a(13),i=a.n(s),o=(a(107),a(69)),l=a(15),d=(a(108),a(109),function(){return Object(n.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:"\ud83c\udfac FLICK FLOCK \ud83c\udfa5"})}),u=a(9),j=a(207),b=a(210),p=a(212),f=a(92),h=a.n(f),O=a(91),v=a.n(O),m=a(64),g=a.n(m),x=a(90),_=a.n(x),w=Object(j.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function y(){var e=w(),t=r.a.useState(0),a=Object(u.a)(t,2),s=a[0],i=a[1],o=Object(l.f)();return Object(c.useEffect)((function(){0===s?o.push("/"):1===s?o.push("/movies"):2===s?o.push("/series"):3===s&&o.push("/search")}),[s,o]),Object(n.jsxs)(b.a,{value:s,onChange:function(e,t){i(t)},showLabels:!0,className:e.root,children:[Object(n.jsx)(p.a,{style:{color:"white"},label:"Trending",icon:Object(n.jsx)(_.a,{})}),Object(n.jsx)(p.a,{style:{color:"white"},label:"Movies",icon:Object(n.jsx)(v.a,{})}),Object(n.jsx)(p.a,{style:{color:"white"},label:"TV Series",icon:Object(n.jsx)(h.a,{})}),Object(n.jsx)(p.a,{style:{color:"white"},label:"Search",icon:Object(n.jsx)(g.a,{})}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{style:{color:"white"},children:"Developed By Vishal Sinha"})]})}var S=a(14),k=a.n(S),N=a(21),C=a(19),P=a.n(C),T=a(72),E=a(223),I=function(e){var t=e.selectedGenres,a=e.setSelectedGenres,r=e.genres,s=e.setGenres,i=e.type,o=e.setPage,l=function(){var e=Object(N.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/genre/".concat(i,"/list?api_key=6e116389c39ab08be9e9b1f43cd46d8d&language=en-US"));case 2:t=e.sent,a=t.data,s(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return l(),function(){s({})}}),[]),Object(n.jsxs)("div",{style:{padding:"6px 0"},children:[t.map((function(e){return Object(n.jsx)(E.a,{style:{margin:2},label:e.name,color:"primary",clickable:!0,size:"small",onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),s([].concat(Object(T.a)(r),[e])),o(1)}(e)}},e.id)})),r.map((function(e){return Object(n.jsx)(E.a,{style:{margin:2},label:e.name,clickable:!0,size:"small",onClick:function(){return function(e){a([].concat(Object(T.a)(t),[e])),s(r.filter((function(t){return t.id!==e.id}))),o(1)}(e)}},e.id)}))]})},U=a(215),W="https://image.tmdb.org/t/p/w300",A="https://image.tmdb.org/t/p/w500",B="https://www.movienewz.com/img/films/poster-holder.jpg",D=(a(135),a(222)),M=a(213),G=a(174),R=(a(136),a(214)),L=a(94),F=a.n(L),K=a(93),z=a.n(K),V=(a(169),a(170),function(e){return e.preventDefault()}),H=function(e){var t=e.id,a=e.media_type,r=Object(c.useState)([]),s=Object(u.a)(r,2),i=s[0],o=s[1],l=i.map((function(e){return Object(n.jsxs)("div",{className:"carouselItem",children:[Object(n.jsx)("img",{src:e.profile_path?"".concat(W,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:V,className:"carouselItem__img"}),Object(n.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),d=function(){var e=Object(N.a)(k.a.mark((function e(){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(t,"/credits?api_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/flickflock",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,"&language=en-US"));case 2:n=e.sent,c=n.data,o(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()}),[]),Object(n.jsx)(z.a,{mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},items:l,autoPlay:!0})},q=Object(j.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}}));function J(e){var t=e.children,a=e.media_type,r=e.id,s=q(),i=Object(c.useState)(!1),o=Object(u.a)(i,2),l=o[0],d=o[1],j=Object(c.useState)(),b=Object(u.a)(j,2),p=b[0],f=b[1],h=Object(c.useState)(),O=Object(u.a)(h,2),v=O[0],m=O[1],g=function(){var e=Object(N.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(r,"?api_key=6e116389c39ab08be9e9b1f43cd46d8d&language=en-US"));case 2:t=e.sent,n=t.data,f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(N.a)(k.a.mark((function e(){var t,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(r,"/videos?api_key=6e116389c39ab08be9e9b1f43cd46d8d&language=en-US"));case 2:n=e.sent,c=n.data,m(null===(t=c.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){g(),x()}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"media",style:{cursor:"pointer"},color:"inherit",onClick:function(){d(!0)},children:t}),Object(n.jsx)(D.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:l,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:M.a,BackdropProps:{timeout:500},children:Object(n.jsx)(G.a,{in:l,children:p&&Object(n.jsx)("div",{className:s.paper,children:Object(n.jsxs)("div",{className:"ContentModal",children:[Object(n.jsx)("img",{src:p.poster_path?"".concat(A,"/").concat(p.poster_path):B,alt:p.name||p.title,className:"ContentModal__portrait"}),Object(n.jsx)("img",{src:p.backdrop_path?"".concat(A,"/").concat(p.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:p.name||p.title,className:"ContentModal__landscape"}),Object(n.jsxs)("div",{className:"ContentModal__about",children:[Object(n.jsxs)("span",{className:"ContentModal__title",children:[p.name||p.title," (",(p.first_air_date||p.release_date||"-----").substring(0,4),")"]}),p.tagline&&Object(n.jsx)("i",{className:"tagline",children:p.tagline}),Object(n.jsx)("span",{className:"ContentModal__description",children:p.overview}),Object(n.jsx)("div",{children:Object(n.jsx)(H,{id:r,media_type:a})}),Object(n.jsx)(R.a,{variant:"contained",startIcon:Object(n.jsx)(F.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(v),children:"Watch the Trailer"})]})]})})})})]})}var X=function(e){var t=e.id,a=e.poster,c=e.title,r=e.date,s=e.media_type,i=e.vote_average;return Object(n.jsxs)(J,{media_type:s,id:t,children:[Object(n.jsx)(U.a,{badgeContent:i,color:i>6?"primary":"secondary"}),Object(n.jsx)("img",{className:"poster",src:a?"".concat(W).concat(a):B,alt:c}),Object(n.jsx)("b",{className:"title",children:c}),Object(n.jsxs)("span",{className:"subTitle",children:["tv"===s?"TV Series":"Movie",Object(n.jsx)("span",{className:"subTitle",children:r})]})]})},Y=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},$=a(221),Q=a(95),Z=a(216),ee=Object(Q.a)({palette:{type:"dark"}});function te(e){var t=e.setPage,a=e.numOfPages,c=void 0===a?10:a;return Object(n.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(n.jsx)(Z.a,{theme:ee,children:Object(n.jsx)($.a,{onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},count:c,color:"primary",hideNextButton:!0,hidePrevButton:!0})})})}var ae=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(c.useState)(1),j=Object(u.a)(d,2),b=j[0],p=j[1],f=Object(c.useState)([]),h=Object(u.a)(f,2),O=h[0],v=h[1],m=Object(c.useState)(),g=Object(u.a)(m,2),x=g[0],_=g[1],w=Y(o),y=function(){var e=Object(N.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/movie?api_key=6e116389c39ab08be9e9b1f43cd46d8d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(b,"&with_genres=").concat(w));case 2:t=e.sent,a=t.data,v(a.results),_(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){window.scroll(0,0),y()}),[w,b]),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"pageTitle",children:"Discover Movies"}),Object(n.jsx)(I,{type:"movie",selectedGenres:o,setSelectedGenres:l,genres:a,setGenres:r,setPage:p}),Object(n.jsx)("div",{className:"trending",children:O&&O.map((function(e){return Object(n.jsx)(X,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),x>1&&Object(n.jsx)(te,{setPage:p,numOfPages:x})]})},ne=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(c.useState)(1),j=Object(u.a)(d,2),b=j[0],p=j[1],f=Object(c.useState)([]),h=Object(u.a)(f,2),O=h[0],v=h[1],m=Object(c.useState)(),g=Object(u.a)(m,2),x=g[0],_=g[1],w=Y(o),y=function(){var e=Object(N.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/tv?api_key=6e116389c39ab08be9e9b1f43cd46d8d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(b,"&with_genres=").concat(w));case 2:t=e.sent,a=t.data,v(a.results),_(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){window.scroll(0,0),y()}),[w,b]),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"pageTitle",children:"Discover Series"}),Object(n.jsx)(I,{type:"tv",selectedGenres:o,setSelectedGenres:l,genres:a,setGenres:r,setPage:p}),Object(n.jsx)("div",{className:"trending",children:O&&O.map((function(e){return Object(n.jsx)(X,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),x>1&&Object(n.jsx)(te,{setPage:p,numOfPages:x})]})},ce=(a(171),function(){var e=Object(c.useState)(1),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),o=i[0],l=i[1],d=function(){var e=Object(N.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=6e116389c39ab08be9e9b1f43cd46d8d&page=".concat(a));case 2:t=e.sent,n=t.data,l(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){window.scroll(0,0),d()}),[a]),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"pageTitle",children:"Trending Today"}),Object(n.jsx)("div",{className:"trending",children:o&&o.map((function(e){return Object(n.jsx)(X,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(n.jsx)(te,{setPage:r})]})}),re=a(219),se=a(220),ie=a(217),oe=(a(172),function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(c.useState)(1),j=Object(u.a)(d,2),b=j[0],p=j[1],f=Object(c.useState)([]),h=Object(u.a)(f,2),O=h[0],v=h[1],m=Object(c.useState)(),x=Object(u.a)(m,2),_=x[0],w=x[1],y=Object(Q.a)({palette:{type:"dark",primary:{main:"#fff"}}}),S=function(){var e=Object(N.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=6e116389c39ab08be9e9b1f43cd46d8d&language=en-US&query=").concat(o,"&page=").concat(b,"&include_adult=false"));case 3:t=e.sent,n=t.data,v(n.results),w(n.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){window.scroll(0,0),S()}),[a,b]),Object(n.jsxs)("div",{children:[Object(n.jsxs)(Z.a,{theme:y,children:[Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)(re.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return l(e.target.value)}}),Object(n.jsx)(R.a,{onClick:S,variant:"contained",style:{marginLeft:10},children:Object(n.jsx)(g.a,{fontSize:"large"})})]}),Object(n.jsxs)(se.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){r(t),p(1)},style:{paddingBottom:5},"aria-label":"disabled tabs example",children:[Object(n.jsx)(ie.a,{style:{width:"50%"},label:"Search Movies"}),Object(n.jsx)(ie.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(n.jsxs)("div",{className:"trending",children:[O&&O.map((function(e){return Object(n.jsx)(X,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.id)})),o&&!O&&(a?Object(n.jsx)("h2",{children:"No Series Found"}):Object(n.jsx)("h2",{children:"No Movies Found"}))]}),_>1&&Object(n.jsx)(te,{setPage:p,numOfPages:_})]})}),le=a(218),de={method:"GET",url:"https://imdb8.p.rapidapi.com/auto-complete",params:{q:"".concat("titanic")},headers:{"X-RapidAPI-Key":"c409362262mshd54053e6a4fdd7ap16cd62jsn7a4bc6b94427","X-RapidAPI-Host":"imdb8.p.rapidapi.com"}};P.a.request(de).then((function(e){console.log(e.data)})).catch((function(e){console.error(e)}));var ue=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(d,{}),Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(le.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/",component:ce,exact:!0}),Object(n.jsx)(l.a,{path:"/movies",component:ae}),Object(n.jsx)(l.a,{path:"/series",component:ne}),Object(n.jsx)(l.a,{path:"/search",component:oe})]})})}),Object(n.jsx)(y,{})]})},je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(n.jsx)(ue,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/flickflock",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/flickflock","/service-worker.js");je?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):be(t,e)}))}}()}},[[173,1,2]]]);
//# sourceMappingURL=main.48f17fe2.chunk.js.map