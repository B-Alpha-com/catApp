(this.webpackJsonpcat_gallery=this.webpackJsonpcat_gallery||[]).push([[0],{13:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(7),r=a.n(s),o=(a(13),a(2)),i=a(3),l=a(5),h=a(4),u=a(0),j=function(e){var t=e.onclick,a=e.onsearch,n=e.value,c=e.keyPress;return Object(u.jsx)("div",{className:"nav_1",children:Object(u.jsxs)("ul",{className:"Unorder",children:[Object(u.jsx)("li",{className:"text",children:"SheisaCatLover"}),Object(u.jsx)("li",{children:Object(u.jsx)("input",{className:"input",type:"text",placeholder:"search Your Imagination",title:"I will always love you",onChange:a,value:n,onKeyPress:c})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{id:"enterKey",Title:"search for Cats",onClick:t,children:"Enter"})}),Object(u.jsx)("li",{})]})})},d=a(8),b=function(e){var t=e.src,a=e.placeholder;return Object(u.jsx)("img",{className:"catImages",placeholder:a,src:t.large})},p=function(e){return e.catsPhoto.map((function(e){return Object(u.jsx)(b,{src:e.src,placeholder:e.avg_color})}))},x=function(e){e.nextCat;return Object(u.jsx)("div",{children:Object(u.jsx)("button",{children:" Next Page"})})},O=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={errorBoundary:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({errorBoundary:!0})}},{key:"render",value:function(){return!0===this.state.errorBoundary?Object(u.jsx)("h1",{children:"we will fix it"}):this.props.children}}]),a}(n.Component),f=Object(d.a)("563492ad6f917000010000018143febfdb204fbab7dda5d93c97b7b4"),g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onclick=function(){var t=e.state.searchText;f.photos.search({query:t,orientation:"landscape",page:6,per_page:80}).then((function(t){e.setState({cats:t})})),e.setState({searchText:""}),e.setState({loading:!1})},e.onKeyPress=function(t){if("Enter"===t.key){var a=e.state.searchText;f.photos.search({query:a,orientation:"landscape",page:6,per_page:80}).then((function(t){e.setState({cats:t}),console.log("cat",e.state.cats)})),e.setState({searchText:""})}},e.onsearch=function(t){e.setState({searchText:t.target.value})},e.state={cats:[],searchText:"",loading:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),f.photos.search({query:"cats",orientation:"landscape",page:6,per_page:80}).then((function(t){e.setState({cats:t}),console.log("cat",t)})),this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state,t=e.cats,a=e.searchText,n=e.loading,c=t.photos,s=t.next_page;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{onclick:this.onclick,onsearch:this.onsearch,value:a,keyPress:this.onKeyPress}),!0===n?Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)("hi",{children:"loading...."})}):Object(u.jsxs)(O,{children:[Object(u.jsx)("div",{className:"catContainer",children:c&&Object(u.jsx)(p,{catsPhoto:c})}),Object(u.jsx)(x,{nextCat:s})]})]})}}]),a}(n.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.d13a1526.chunk.js.map