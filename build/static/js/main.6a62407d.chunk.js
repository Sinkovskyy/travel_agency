(this.webpackJsonptravel_agency=this.webpackJsonptravel_agency||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"0":{"name":"HOME","position":"sliderbar","active":true},"1":{"name":"ABOUT","position":"about","active":false},"2":{"name":"GET INSPIRED","position":"inspired","active":false},"3":{"name":"OFFERS","position":"offers","active":false}}')},26:function(e){e.exports=JSON.parse('{"0":{"title":"Personalized Matching","icon":"bi-sliders","description":"Our unique matching system lets you find just the tour you want for your next holiday."},"1":{"title":"Highly Qualified Service","icon":"bi-stars","description":"Our tour managers are qualified, skilled, and friendly to bring you the best service."},"2":{"title":"Handpicked Hotels","icon":"bi-brightness-high","description":"Our team offers only the best selection of affordable and luxury hotels to our clients."},"3":{"title":"Best Price Guarantee","icon":"bi-cash-coin","description":"If you find tours that are cheaper than ours, we will compensate the difference."},"4":{"title":"24/7 Support","icon":"bi-clock","description":"You can always get professional support from our staff 24/7 and ask any question you have."},"5":{"title":"Wide Variety of Tours","icon":"bi-calendar-check","description":"We offer a wide variety of personally picked tours with destinations all over the glob."}}')},28:function(e){e.exports=JSON.parse('{"0":{"title":"Blue Horizon Apartments","price":54,"images":["./images/bha1.jpg","./images/bha2.jpg","./images/bha3.jpg","./images/bha4.jpg"]},"1":{"title":"Bulgari Resort Bali","price":950,"images":["./images/brb1.jpg","./images/brb2.jpg","./images/brb3.jpeg","./images/brb4.jpg","./images/brb5.jpg","./images/brb6.jpg"]},"2":{"title":"Six Senses Uluwatu","price":300,"images":["./images/ulu4.jpg","./images/ulu2.jpg","./images/ulu3.jpg","./images/ulu1.jpg"]}}')},42:function(e){e.exports=JSON.parse('{"image1":"./images/bali.jpg","image2":"./images/bali2.jpeg"}')},43:function(e){e.exports=JSON.parse('{"ABOUT_US":"Go Agency is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world\'s wonders with you.","WHY_CHOOSE_US":"We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.","OUR_MUSSION":"Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry.    "}')},51:function(e,t,i){},55:function(e,t,i){"use strict";i.r(t);var s=i(3),n=i.n(s),a=i(19),c=i.n(a),r=(i(51),i(4)),o=i(5),l=i(16),j=i(2),d=function(e){return Object(j.jsxs)("div",{className:e.isActive?"sidebar":"sidebar closed",children:[Object(j.jsxs)("div",{className:"sidebar-social-media-tags",children:[Object(j.jsx)(l.a,{className:"icon facebook",size:20}),Object(j.jsx)(l.d,{className:"icon twitter",size:20}),Object(j.jsx)(l.b,{className:"icon instagram",size:20}),Object(j.jsx)(l.c,{className:"icon linkedin",size:20})]}),Object(j.jsx)("div",{className:"nav-items",children:e.children})]})},b=i(17),u=i(40);var m=function(){var e=Object(s.useState)("navbar"),t=Object(o.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)(Object.keys(b).map((function(e){return b[e]}))),c=Object(o.a)(a,2),l=c[0],m=c[1],h=Object(s.useState)(!1),O=Object(o.a)(h,2),v=O[0],f=O[1];function g(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=e?v:!v,i=t?"navbar":"navbar fixed";t&&(i=window.pageYOffset>=30?"navbar fixed":"navbar"),n(i)}function p(){x(function(){var e;return l.forEach((function(t){document.getElementsByClassName(t.position)[0].offsetTop<window.pageYOffset+200&&(e=t.name)})),e}()||l[0].name),g()}function x(e){var t;return m(l.map((function(i){return e===i.name?(t=i,Object(r.a)(Object(r.a)({},i),{},{active:!0})):Object(r.a)(Object(r.a)({},i),{},{active:!1})}))),t}function N(e){var t=x(e.target.firstChild.data);document.getElementsByClassName(t.position)[0].scrollIntoView({behavior:"smooth"})}return Object(s.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:i,children:[Object(j.jsx)("div",{className:"logo",children:"FAST TRAVEL"}),Object(j.jsx)("div",{className:"nav-items",children:l.map((function(e,t){var i=e.active?"nav-item active":"nav-item";return Object(j.jsx)("a",{className:i,onClick:N,children:e.name},t)}))}),Object(j.jsx)("div",{className:"icon-menu-wrapper",children:Object(j.jsx)(u.a,{className:"icon-menu",size:37,onClick:function(){f(!v),g(!0)}})})]}),Object(j.jsx)(d,{isActive:v,children:l.map((function(e,t){var i=e.active?"nav-item active":"nav-item";return Object(j.jsx)("a",{className:i,onClick:N,children:e.name},t)}))})]})},h=i(6),O=i(8),v=i(9),f=i(10),g=i(14),p=i.n(g),x=i(42),N=p.a.mark(y);function y(){var e,t,i,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:0,e=0,t=Object.entries(x);case 2:if(!(e<t.length)){n.next=9;break}return i=Object(o.a)(t[e],2),s=i[1],n.next=6,s;case 6:e++,n.next=2;break;case 9:n.next=0;break;case 11:case"end":return n.stop()}}),N)}var w=function(e){Object(v.a)(i,e);var t=Object(f.a)(i);function i(e){var s;return Object(h.a)(this,i),(s=t.call(this,e)).slider_time=7e3,s.generator=y(),s.state={image:s.generator.next().value},s}return Object(O.a)(i,[{key:"nextImage",value:function(){this.setState({image:this.generator.next().value})}},{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.nextImage()}),this.slider_time)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){y();return Object(j.jsx)("div",{className:"sliderbar",style:{backgroundImage:"url(".concat(this.state.image,")")},children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{children:"BALI ISLAND"}),Object(j.jsx)("p",{children:"You\u2019ll always have fascinating places to be and friendly people to see."}),Object(j.jsx)("button",{children:"Starting from just $399"})]})})}}]),i}(n.a.Component),k=i(43),S=i(26),E=i(24);function C(e){var t=Object(E.useSpring)({from:{opacity:0},to:{opacity:1},config:{duration:800}});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tag-slider",children:Object.keys(e.discoverData).map((function(t){var i=t===e.tag?"slide active":"slide";return Object(j.jsx)("div",{className:i,onClick:e.onClick,children:Object(j.jsx)("a",{children:t.split("_").join(" ")})},t)}))}),Object(j.jsx)(E.animated.p,{style:t,children:e.discoverData[e.tag]}),Object(j.jsx)(E.animated.button,{style:t,children:"Read More"})]})}function I(){var e=Object(s.useState)("ABOUT_US"),t=Object(o.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)(!0),c=Object(o.a)(a,2),r=(c[0],c[1],Object(E.useSpring)({config:{duration:1e3},from:{x:200,opacity:0},to:{x:0,opacity:1}}));function l(e){}return Object(s.useEffect)((function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}})),Object(j.jsxs)("div",{className:"discover",children:[Object(j.jsx)("div",{className:"container image",children:Object(j.jsx)("img",{src:"./images/about1.jpg",alt:"about"})}),Object(j.jsxs)("div",{className:"container info",children:[Object(j.jsx)(E.animated.h2,{style:r,children:"Discover New Horizons"}),Object(j.jsx)(C,{discoverData:k,tag:i,onClick:function(e){var t=e.currentTarget.firstChild.firstChild.data.split(" ").join("_");n(t)}},i)]})]})}function A(){return Object(j.jsxs)("div",{className:"servises",children:[Object(j.jsx)("h2",{children:"Our Servises"}),Object(j.jsx)("div",{className:"block-container",children:Object.keys(S).map((function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"s-block",children:[Object(j.jsx)("i",{className:S[e].icon}),Object(j.jsx)("h3",{children:S[e].title}),Object(j.jsx)("p",{children:S[e].description})]})},e)}))})]})}var B=function(){return Object(j.jsxs)("div",{className:"about",children:[Object(j.jsx)(I,{}),Object(j.jsx)(A,{})]})},z=function(){return Object(j.jsxs)("div",{className:"inspired",children:[Object(j.jsx)("h2",{children:"Get Inspired"}),Object(j.jsx)("video",{id:"bgvid",autoPlay:!0,muted:!0,loop:!0,children:Object(j.jsx)("source",{src:"./images/inspired.webm",type:"video/webm"})})]})},T=i(28),H=i(36),U=i(57),_=i(60),L=i(58),F=i(59),R=(i(54),i(44)),D=i(15);var J=function(){return Object(j.jsxs)(U.a,{center:[-8.409518,115.188919],zoom:9,scrollWheelZoom:!1,dragging:!0,children:[Object(j.jsx)(_.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(L.a,{position:[-8.409518,115.188919],icon:new D.Icon({iconUrl:R.a,iconSize:[25,41],iconAnchor:[12,41]}),children:Object(j.jsx)(F.a,{children:"The best place on the Earth!"})})]})};function M(e){for(var t=[],i=0;i<e.length;i++){var s=e.activePosition==i?"active bar":"bar";t[i]=Object(j.jsx)("div",{className:s},i)}return Object(j.jsx)("div",{className:e.className,children:t.map((function(e){return e}))})}function P(e){var t=Object(s.useState)(0),i=Object(o.a)(t,2),n=i[0],a=i[1];return Object(j.jsxs)("div",{className:"offer-frame",children:[Object(j.jsxs)("div",{className:"image-container",children:[Object(j.jsx)("img",{src:e.images[n]}),Object(j.jsx)("div",{className:"layer"}),Object(j.jsx)("button",{className:"book",children:"Book now"}),Object(j.jsx)("button",{className:"slide left",onClick:function(){a(0==n?e.images.length-1:n-1)},children:Object(j.jsx)(H.a,{className:"icon"})}),Object(j.jsx)("button",{className:"slide right",onClick:function(){n+1==e.images.length?a(0):a(n+1)},children:Object(j.jsx)(H.b,{className:"icon"})}),Object(j.jsx)(M,{className:"slider-infobar",length:e.images.length,activePosition:n})]}),Object(j.jsx)("h3",{children:e.title}),Object(j.jsxs)("h4",{children:["$",e.price,"\\PER NIGHT"]})]})}var W=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"offers",children:[Object(j.jsx)("h2",{children:"Hotels & Apartments"}),Object(j.jsx)("p",{children:"On Bali there are so many variety of dwelling for everyone tastes. So if you want something exsotic be sure that on Bali you will find what you are looking!"}),Object(j.jsx)("div",{className:"offer-frames",children:Object.keys(T).map((function(e){return Object(j.jsx)(P,{title:T[e].title,price:T[e].price,images:T[e].images},e)}))})]}),Object(j.jsx)(J,{})]})};var V=function(){function e(e){var t=e.target.firstChild.data;Object.keys(b).forEach((function(e){b[e].name==t&&document.getElementsByClassName(b[e].position)[0].scrollIntoView({behavior:"smooth"})}))}return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("div",{className:"logo",children:"FAST TRAVEL"}),Object(j.jsx)("div",{className:"nav-items",children:Object(j.jsx)("div",{className:"container",children:Object.keys(b).map((function(t){return Object(j.jsx)("a",{className:"nav-item",onClick:e,children:b[t].name},t)}))})}),Object(j.jsxs)("div",{className:"other",children:[Object(j.jsxs)("div",{className:"social-media-tags",children:[Object(j.jsx)(l.a,{className:"facebook icon",size:30}),Object(j.jsx)(l.b,{className:"instagram icon",size:30}),Object(j.jsx)(l.d,{className:"twitter icon",size:30}),Object(j.jsx)(l.c,{className:"linkedin icon",size:30})]}),Object(j.jsx)("div",{className:"license",children:"\xa92021 Fast Travel. All rights reserved"})]})]})},Y=i(45),q=function(){var e="sliderbar",t=Object(s.useState)(!1),i=Object(o.a)(t,2),n=i[0],a=i[1];function c(){var t=!1;document.getElementsByClassName(e)[0].offsetHeight<window.pageYOffset+200&&(t=!t),a(t)}return Object(s.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}})),Object(j.jsx)("button",{className:n?"upbutton":"upbutton unactive",onClick:function(){document.getElementsByClassName(e)[0].scrollIntoView({behavior:"smooth"})},children:Object(j.jsx)(Y.a,{className:"icon",size:20})})};var G=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:".noselect",children:Object(j.jsx)(m,{})}),Object(j.jsxs)("main",{children:[Object(j.jsx)(w,{}),Object(j.jsx)(B,{}),Object(j.jsx)(z,{}),Object(j.jsx)(W,{})]}),Object(j.jsx)("footer",{children:Object(j.jsx)(V,{})}),Object(j.jsx)(q,{})]})};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.6a62407d.chunk.js.map