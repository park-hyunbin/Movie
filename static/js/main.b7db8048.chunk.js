(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{14:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(12),r=a.n(l),i=(a(23),a(7));var o=function(e){let{id:t,coverImg:a,title:n,summary:l}=e;return c.a.createElement("div",null,c.a.createElement("img",{src:a,alt:n}),c.a.createElement("h2",null,c.a.createElement(i.b,{to:"/movie/".concat(t)},n)),c.a.createElement("p",null,l))};var m=function(){const[e,t]=Object(n.useState)(!0),[a,l]=Object(n.useState)([]);return Object(n.useEffect)(()=>{(async()=>{try{const e=await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"),a=await e.json();l(a.data.movies),t(!1)}catch(e){console.error("Error fetching movies:",e),t(!1)}})()},[]),c.a.createElement("div",null,e?c.a.createElement("h1",null,"Loading..."):c.a.createElement("div",null,a.map(e=>c.a.createElement(o,{key:e.id,id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary}))))},s=a(1);var u=function(){const{id:e}=Object(s.f)();return Object(n.useEffect)(()=>{(async()=>{const t=await(await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e))).json();console.log(t)})()},[e]),c.a.createElement("h1",null,"Detail")};var v=function(){return c.a.createElement(i.a,{basename:"/Movie"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/movie/:id"},c.a.createElement(u,null)),c.a.createElement(s.a,{path:"/"},c.a.createElement(m,null))))};var E=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then(t=>{let{getCLS:a,getFID:n,getFCP:c,getLCP:l,getTTFB:r}=t;a(e),n(e),c(e),l(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null))),E()}},[[14,1,2]]]);
//# sourceMappingURL=main.b7db8048.chunk.js.map