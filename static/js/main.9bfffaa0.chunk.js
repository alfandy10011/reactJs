(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,n){e.exports=n(37)},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),c=n.n(l),i=(n(29),n(6)),o=n(7),u=n(9),m=n(8),s=n(10),h=(n(30),n(14)),p=n(5),b=n(15),d=(n(31),n(16)),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).hendelClik=function(e){e.preventDefault()},n.state={items:[],isLoading:!0},n.hendelClik=n.hendelClik.bind(Object(b.a)(n)),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"getUser",value:function(){var e=this;return fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()})).then((function(t){return e.setState({items:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.items;return e.isLoading?r.a.createElement("p",null,"Loading ......"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"List Berita"),r.a.createElement("button",{onClick:this.hendelClik},"Get Data Beritaa"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/berita/"+e.title},e.title)))}))))}}]),t}(a.Component);var E=function(e){var t=e.match;return r.a.createElement("h2",null,"Judul Berita : ",t.params.judul)},j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"Halaman Home")}}]),t}(a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Halaman 404"))}}]),t}(a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("nav",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/berita"},"Berita"))),r.a.createElement("main",null,r.a.createElement(p.Switch,null,r.a.createElement(p.Route,{path:"/",exact:!0,component:j}),r.a.createElement(p.Route,{path:"/berita",exact:!0,component:f}),r.a.createElement(p.Route,{path:"/berita/:judul",exact:!0,component:E}),r.a.createElement(p.Route,{component:O}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.9bfffaa0.chunk.js.map