(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},46:function(e,t,n){e.exports=n(72)},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(37),l=n.n(i),o=n(18),u=n(16),c=n(2),s=n(1);function d(){var e=Object(c.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return d=function(){return e},e}function m(){var e=Object(c.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 5px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return m=function(){return e},e}function p(){var e=Object(c.a)(["\n  display: flex;\n"]);return p=function(){return e},e}function f(){var e=Object(c.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return f=function(){return e},e}var g=s.default.header(f()),v=s.default.ul(p()),h=s.default.li(m(),(function(e){return e.current?"#3498db":"transparent"})),b=Object(s.default)(o.b)(d()),x=Object(u.g)((function(e){var t=e.location.pathname;return r.a.createElement(g,null,r.a.createElement(v,null,r.a.createElement(h,{current:"/"===t},r.a.createElement(b,{to:"/"},"Movies")),r.a.createElement(h,{current:"/tv"===t},r.a.createElement(b,{to:"/tv"},"TV")),r.a.createElement(h,{current:"/search"===t},r.a.createElement(b,{to:"/search"},"Search"))))})),E=n(7),y=n.n(E),_=n(11),j=n(12),w=n(13),O=n(15),k=n(14),S=n(9);function T(){var e=Object(c.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 32px;\n  margin-top: 35vh;\n"]);return T=function(){return e},e}var R=s.default.div(T()),M=function(){return r.a.createElement(R,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0 Loading..."))};function U(){var e=Object(c.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 60vw;\n"]);return U=function(){return e},e}function z(){var e=Object(c.a)(["\n  margin: 0 10px;\n"]);return z=function(){return e},e}function C(){var e=Object(c.a)([""]);return C=function(){return e},e}function N(){var e=Object(c.a)(["\n  margin: 20px 0px;\n"]);return N=function(){return e},e}function I(){var e=Object(c.a)(["\n  font-size: 32px;\n  margin-bottom: 20px;\n"]);return I=function(){return e},e}function P(){var e=Object(c.a)(["\n  width: 70%;\n  margin-left: 20px;\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    width: 100%;\n  }\n"]);return P=function(){return e},e}function F(){var e=Object(c.a)(["\n  width: 30%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  border-radius: 10px;\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    width: 100%;\n    margin-bottom: 30px;\n  }\n"]);return F=function(){return e},e}function V(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    flex-direction: column;\n  }\n"]);return V=function(){return e},e}function A(){var e=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(2px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return A=function(){return e},e}function B(){var e=Object(c.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return B=function(){return e},e}var D=s.default.div(B()),L=s.default.div(A(),(function(e){return e.bgImage})),q=s.default.div(V()),J=s.default.div(F(),(function(e){return e.bgImage})),G=s.default.div(P()),H=s.default.h2(I()),K=s.default.div(N()),Q=s.default.span(C()),W=s.default.span(z()),X=s.default.p(U()),Y=function(e){var t=e.result,a=e.loading;e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Loading | Nomflix")),r.a.createElement(M,null)):r.a.createElement(D,null,r.a.createElement(S.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| Nomflix")),r.a.createElement(L,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(q,null,r.a.createElement(J,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(28)}),r.a.createElement(G,null,r.a.createElement(H,null,t.original_title?t.original_title:t.original_name),r.a.createElement(K,null,r.a.createElement(Q,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(W,null,r.a.createElement("span",{role:"img","aria-label":"divider"}," ","\ud83d\udd39"," ")),r.a.createElement(Q,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(W,null,r.a.createElement("span",{role:"img","aria-label":"divider"}," ","\ud83d\udd39"," ")),r.a.createElement(Q,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),r.a.createElement(X,null,t.overview))))},Z=n(44),$=n.n(Z).a.create({baseURL:"https://api.themoviedb.org/3/"});$.interceptors.request.use((function(e){return e.params=e.params||{},e.params.api_key="add7b186c34e8b73ae87d16ec81780bf",e.params.language="en-US",e}));var ee=function(){return $.get("movie/now_playing")},te=function(){return $.get("movie/upcoming")},ne=function(){return $.get("movie/popular")},ae=function(e){return $.get("movie/".concat(e),{params:{append_to_response:"videos"}})},re=function(e){return $.get("search/movie",{params:{query:encodeURIComponent(e)}})},ie=function(){return $.get("tv/top_rated")},le=function(){return $.get("tv/popular")},oe=function(){return $.get("tv/airing_today")},ue=function(e){return $.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ce=function(e){return $.get("search/tv",{params:{query:encodeURIComponent(e)}})},se=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(e){var a;Object(j.a)(this,n),a=t.call(this,e);var r=e.location.pathname;return a.state={result:null,loading:!0,error:null,isMovie:r.includes("/movie/")},a}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(y.a.mark((function e(){var t,n,a,r,i,l,o,u;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(l=null,e.prev=6,!r){e.next=14;break}return e.next=10,ae(i);case 10:o=e.sent,l=o.data,e.next=18;break;case 14:return e.next=16,ue(i);case 16:u=e.sent,l=u.data;case 18:console.log(l),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 24:return e.prev=24,this.setState({loading:!1,result:l}),e.finish(24);case 27:case"end":return e.stop()}}),e,this,[[6,21,24,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.state);var e=this.state,t=e.result,n=e.loading,a=e.error;return r.a.createElement(Y,{result:t,loading:n,error:a})}}]),n}(r.a.Component);function de(){var e=Object(c.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    justify-content: center;\n  }\n"]);return de=function(){return e},e}function me(){var e=Object(c.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]);return me=function(){return e},e}function pe(){var e=Object(c.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return pe=function(){return e},e}var fe=s.default.div(pe()),ge=s.default.span(me()),ve=s.default.div(de()),he=function(e){var t=e.title,n=e.children;return r.a.createElement(fe,null,r.a.createElement(ge,null,t),r.a.createElement(ve,null,n))};function be(){var e=Object(c.a)(["\n  color: ",";\n"]);return be=function(){return e},e}function xe(){var e=Object(c.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return xe=function(){return e},e}var Ee=s.default.div(xe()),ye=s.default.span(be(),(function(e){return e.color})),_e=function(e){var t=e.text,n=e.color;return r.a.createElement(Ee,null,r.a.createElement(ye,{color:n},t))};function je(){var e=Object(c.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return je=function(){return e},e}function we(){var e=Object(c.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return we=function(){return e},e}function Oe(){var e=Object(c.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return Oe=function(){return e},e}function ke(){var e=Object(c.a)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  opacity: 0;\n"]);return ke=function(){return e},e}function Se(){var e=Object(c.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return Se=function(){return e},e}function Te(){var e=Object(c.a)(["\n  font-size: 12px;\n"]);return Te=function(){return e},e}var Re=s.default.div(Te()),Me=s.default.div(Se(),(function(e){return e.bgUrl})),Ue=s.default.span(ke()),ze=s.default.div(Oe(),Me,Ue),Ce=s.default.span(we()),Ne=s.default.span(je()),Ie=function(e){var t=e.id,a=e.imageUrl,i=e.title,l=e.rating,u=e.year,c=e.isMovie,s=void 0!==c&&c;return r.a.createElement(o.b,{to:s?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(Re,null,r.a.createElement(ze,null,r.a.createElement(Me,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(28)}),r.a.createElement(Ue,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2728 ",l," / 10"))),r.a.createElement(Ce,null,i.length>20?"".concat(i.substring(0,18),"..."):i),r.a.createElement(Ne,null,u)))};function Pe(){var e=Object(c.a)(["\n  padding: 20px;\n"]);return Pe=function(){return e},e}var Fe=s.default.div(Pe()),Ve=function(e){var t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.loading,l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Movies | Nomflix")),i?r.a.createElement(M,null):r.a.createElement(Fe,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Movies | Nomflix")),t&&t.length>0&&r.a.createElement(he,{title:"Now Playing"},t.map((function(e){return r.a.createElement(Ie,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(he,{title:"Upcoming Movies"},n.map((function(e){return r.a.createElement(Ie,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(he,{title:"Popular Movies"},a.map((function(e){return r.a.createElement(Ie,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),l&&r.a.createElement(_e,{text:l,color:"#e74c3c"})))},Ae=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(y.a.mark((function e(){var t,n,a,r,i,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee();case 3:return t=e.sent,n=t.data.results,e.next=7,te();case 7:return a=e.sent,r=a.data.results,e.next=11,ne();case 11:i=e.sent,l=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,l=e.loading;return r.a.createElement(Ve,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:l})}}]),n}(r.a.Component);function Be(){var e=Object(c.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return Be=function(){return e},e}function De(){var e=Object(c.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return De=function(){return e},e}function Le(){var e=Object(c.a)(["\n  padding: 20px;\n"]);return Le=function(){return e},e}var qe=s.default.div(Le()),Je=s.default.form(De()),Ge=s.default.input(Be()),He=function(e){var t=e.movieResults,n=e.tvResults,a=e.loading,i=e.error,l=e.searchTerm,o=e.handleSubmit,u=e.updateTerm;return r.a.createElement(qe,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Search | Nomflix")),r.a.createElement(Je,{onSubmit:o},r.a.createElement(Ge,{placeholder:"Search Movies or TV shows...",value:l,onChange:u})),a?r.a.createElement(M,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(he,{title:"Movie Results"},t.map((function(e){return r.a.createElement(Ie,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(he,{title:"TV Show Results"},n.map((function(e){return r.a.createElement(Ie,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})})))),i&&r.a.createElement(_e,{text:i,color:"#e74c3c"}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(_e,{text:"Nothing Found",color:"#95a5a6"}))},Ke=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(_.a)(y.a.mark((function t(){var n,a,r,i,l;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,re(n);case 5:return a=t.sent,r=a.data.results,t.next=9,ce(n);case 9:i=t.sent,l=i.data.results,e.setState({movieResults:r,tvResults:l}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(w.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,l=e.error;return r.a.createElement(He,{movieResults:t,tvResults:n,loading:i,error:l,searchTerm:a,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(r.a.Component);function Qe(){var e=Object(c.a)(["\n  padding: 20px;\n"]);return Qe=function(){return e},e}var We=s.default.div(Qe()),Xe=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"TV Shows | Nomflix")),i?r.a.createElement(M,null):r.a.createElement(We,null,t&&t.length>0&&r.a.createElement(he,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(Ie,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(he,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(Ie,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(he,{title:"Airing Shows"},a.map((function(e){return r.a.createElement(Ie,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),l&&r.a.createElement(_e,{text:l,color:"#e74c3c"})))},Ye=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(y.a.mark((function e(){var t,n,a,r,i,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie();case 3:return t=e.sent,n=t.data.results,e.next=7,le();case 7:return a=e.sent,r=a.data.results,e.next=11,oe();case 11:i=e.sent,l=i.data.results,this.setState({topRated:n,popular:r,airingToday:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return r.a.createElement(Xe,{topRated:t,popular:n,airingToday:a,loading:i,error:l})}}]),n}(r.a.Component),Ze=function(){return r.a.createElement(o.a,null,r.a.createElement(x,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:Ae}),r.a.createElement(u.b,{path:"/tv",component:Ye}),r.a.createElement(u.b,{path:"/search",component:Ke}),r.a.createElement(u.b,{path:"/movie/:id",component:se}),r.a.createElement(u.b,{path:"/show/:id",component:se}),r.a.createElement(u.a,{from:"*",to:"/"})))},$e=n(45),et=n.n($e);function tt(){var e=Object(c.a)(["\n    ",";\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n    * {\n        box-sizing:border-box;\n    }\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color: rgba(20,20,20,1);\n        color:white;\n        padding-top: 50px;\n    }\n"]);return tt=function(){return e},e}var nt=Object(s.createGlobalStyle)(tt(),et.a);var at=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze,null),r.a.createElement(nt,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(at,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f6dda373.chunk.js.map