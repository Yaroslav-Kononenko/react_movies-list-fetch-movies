(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(6),s=c.n(i),a=(c(13),c(8)),n=c(2),l=c(1),r=c.n(l),o=(c(14),c(15),c(16),c(0)),j=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:t.Title})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"content",children:[t.Plot,Object(o.jsx)("br",{})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(j,{movie:e},e.imdbID)}))})},m=(c(18),c(7)),b=c.n(m),u=r.a.memo((function(e){var t=e.addMovie,c=Object(l.useState)(""),i=Object(n.a)(c,2),s=i[0],a=i[1],r=Object(l.useState)(null),d=Object(n.a)(r,2),m=d[0],u=d[1],h=Object(l.useState)(!1),O=Object(n.a)(h,2),v=O[0],x=O[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:b()("input",{"is-danger":v}),value:s,onChange:function(e){a(e.target.value),x(!1)}})}),v&&Object(o.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-light",onClick:function(){(function(e){return fetch("".concat("http://www.omdbapi.com/?i=tt3896198&apikey=4e13cbeb","&t=[").concat(e,"]")).then((function(e){if(!e.ok)throw new Error("Loading error...");return e.json()}))})(s).then((function(e){e.Error?(x(!0),u(null)):u(e)}))},children:"Find a movie"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){m&&(t(m),u(null),a(""))},children:"Add to the list"})})]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),m&&Object(o.jsx)(j,{movie:m})]})]})})),h=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1],s=Object(l.useCallback)((function(e){c.some((function(t){return t.imdbID===e.imdbID}))||i([].concat(Object(a.a)(c),[e]))}),[c]);return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:c})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(u,{addMovie:s})})]})};s.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0088101c.chunk.js.map