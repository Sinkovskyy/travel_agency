(this.webpackJsonptravel_agency=this.webpackJsonptravel_agency||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"0":{"name":"HOME","position":"sliderbar","active":true},"1":{"name":"ABOUT","position":"about","active":false},"2":{"name":"GET INSPIRED","position":"inspired","active":false},"3":{"name":"OFFERS","position":"offers","active":false}}')},25:function(e){e.exports=JSON.parse('{"0":{"title":"Personalized Matching","icon":"bi-sliders","description":"Our unique matching system lets you find just the tour you want for your next holiday."},"1":{"title":"Highly Qualified Service","icon":"bi-stars","description":"Our tour managers are qualified, skilled, and friendly to bring you the best service."},"2":{"title":"Handpicked Hotels","icon":"bi-brightness-high","description":"Our team offers only the best selection of affordable and luxury hotels to our clients."},"3":{"title":"Best Price Guarantee","icon":"bi-cash-coin","description":"If you find tours that are cheaper than ours, we will compensate the difference."},"4":{"title":"24/7 Support","icon":"bi-clock","description":"You can always get professional support from our staff 24/7 and ask any question you have."},"5":{"title":"Wide Variety of Tours","icon":"bi-calendar-check","description":"We offer a wide variety of personally picked tours with destinations all over the glob."}}')},26:function(e){e.exports=JSON.parse('{"0":{"title":"Blue Horizon Apartments","price":54,"images":["./images/bha1.jpg","./images/bha2.jpg","./images/bha3.jpg","./images/bha4.jpg"]},"1":{"title":"Bulgari Resort Bali","price":950,"images":["./images/brb1.jpg","./images/brb2.jpg","./images/brb3.jpeg","./images/brb4.jpg","./images/brb5.jpg","./images/brb6.jpg"]},"2":{"title":"Six Senses Uluwatu","price":300,"images":["./images/ulu4.jpg","./images/ulu2.jpg","./images/ulu3.jpg","./images/ulu1.jpg"]}}')},42:function(e){e.exports=JSON.parse('{"image1":"./images/bali.jpg","image2":"./images/bali2.jpeg"}')},43:function(e){e.exports=JSON.parse('{"ABOUT_US":"Go Agency is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world\'s wonders with you.","WHY_CHOOSE_US":"We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.","OUR_MUSSION":"Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry.    "}')},51:function(e,t,i){},55:function(e,t,i){"use strict";i.r(t);var a=i(3),s=i.n(a),n=i(20),c=i.n(n),r=(i(51),i(4)),o=i(6),l=i(17),j=i(2),d=function(e){return Object(j.jsxs)("div",{className:e.isActive?"sidebar":"sidebar closed",children:[Object(j.jsxs)("div",{className:"sidebar-social-media-tags",children:[Object(j.jsx)(l.a,{className:"icon facebook",size:20}),Object(j.jsx)(l.d,{className:"icon twitter",size:20}),Object(j.jsx)(l.b,{className:"icon instagram",size:20}),Object(j.jsx)(l.c,{className:"icon linkedin",size:20})]}),Object(j.jsx)("div",{className:"nav-items",children:e.children})]})},u=i(18),b=i(41),m=i(5);var h=function(){var e=Object(a.useState)("navbar"),t=Object(o.a)(e,2),i=t[0],s=t[1],n=Object(a.useState)(Object.keys(u).map((function(e){return u[e]}))),c=Object(o.a)(n,2),l=c[0],h=c[1],p=Object(a.useState)(!1),f=Object(o.a)(p,2),O=f[0],v=f[1],g=Object(m.useSpring)({config:{duration:700},from:{y:-20,opacity:0},to:{y:0,opacity:1}});function x(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=e?O:!O,i=t?"navbar":"navbar fixed";t&&(i=window.pageYOffset>=30?"navbar fixed":"navbar"),s(i)}function y(){N(function(){var e;return l.forEach((function(t){document.getElementsByClassName(t.position)[0].offsetTop<window.pageYOffset+200&&(e=t.name)})),e}()||l[0].name),x()}function N(e){var t;return h(l.map((function(i){return e===i.name?(t=i,Object(r.a)(Object(r.a)({},i),{},{active:!0})):Object(r.a)(Object(r.a)({},i),{},{active:!1})}))),t}function w(e){var t=N(e.target.firstChild.data);document.getElementsByClassName(t.position)[0].scrollIntoView({behavior:"smooth"})}return Object(a.useEffect)((function(){return window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(m.animated.div,{style:g,className:i,children:[Object(j.jsx)("div",{className:"logo",children:"FAST TRAVEL"}),Object(j.jsx)("div",{className:"nav-items",children:l.map((function(e,t){var i=e.active?"nav-item active":"nav-item";return Object(j.jsx)(m.animated.a,{style:g,className:i,onClick:w,children:e.name},t)}))}),Object(j.jsx)("div",{className:"icon-menu-wrapper",children:Object(j.jsx)(b.a,{className:"icon-menu",size:37,onClick:function(){v(!O),x(!0)}})})]}),Object(j.jsx)(d,{isActive:O,children:l.map((function(e,t){var i=e.active?"nav-item active":"nav-item";return Object(j.jsx)("a",{className:i,onClick:w,children:e.name},t)}))})]})},p=i(7),f=i(9),O=i(10),v=i(11),g=i(15),x=i.n(g),y=i(42),N=x.a.mark(w);function w(){var e,t,i,a;return x.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:0,e=0,t=Object.entries(y);case 2:if(!(e<t.length)){s.next=9;break}return i=Object(o.a)(t[e],2),a=i[1],s.next=6,a;case 6:e++,s.next=2;break;case 9:s.next=0;break;case 11:case"end":return s.stop()}}),N)}var S=function(e){Object(O.a)(i,e);var t=Object(v.a)(i);function i(e){var a;return Object(p.a)(this,i),(a=t.call(this,e)).slider_time=7e3,a.generator=w(),a.state={image:a.generator.next().value},a}return Object(f.a)(i,[{key:"nextImage",value:function(){this.setState({image:this.generator.next().value})}},{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.nextImage()}),this.slider_time)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this;w();return Object(j.jsx)(m.Spring,{config:{duration:1e3},from:{opacity:0},to:{opacity:1},children:function(t){return Object(j.jsx)("div",{className:"sliderbar",style:{backgroundImage:"url(".concat(e.state.image,")")},children:Object(j.jsxs)(m.animated.div,{style:t,className:"content",children:[Object(j.jsx)("h1",{children:"BALI ISLAND"}),Object(j.jsx)("p",{children:"You\u2019ll always have fascinating places to be and friendly people to see."}),Object(j.jsx)("button",{children:"Starting from just $399"})]})})}})}}]),i}(s.a.Component),k=i(43),E=i(25);function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,i=Object(a.useState)(!1),s=Object(o.a)(i,2),n=s[0],c=s[1];function r(i){document.getElementsByClassName(e)[0].offsetTop<window.pageYOffset-t&&c(!0)}return Object(a.useEffect)((function(){return window.addEventListener("scroll",r),n&&window.removeEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}})),n}function I(e){var t=Object(m.useSpring)({from:{opacity:0},to:{transition:"opacity .5s ease-out",opacity:e.isScrolled?1:0}});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tag-slider",children:Object.keys(e.discoverData).map((function(t){var i=t===e.tag?"slide active":"slide";return Object(j.jsx)("div",{className:i,onClick:e.onClick,children:Object(j.jsx)("a",{children:t.split("_").join(" ")})},t)}))}),Object(j.jsxs)(m.animated.div,{style:t,children:[Object(j.jsx)("p",{children:e.discoverData[e.tag]}),Object(j.jsx)("button",{children:"Read More"})]})]})}function B(){var e=Object(a.useState)("ABOUT_US"),t=Object(o.a)(e,2),i=t[0],s=t[1],n="discover",c=C(n),r=Object(m.useSpring)({config:{duration:800,delay:400},from:{position:"absolute",transition:"opacity 1s linear",x:400,opacity:0},to:{position:"relative",opacity:c?1:0,x:c?0:400}}),l=Object(m.useSpring)({from:{opacity:0,transform:"rotateY(90deg) rotateX(90deg)",transition:"all 1s ease"},to:{opacity:c?1:0,transform:c?"rotateY(0deg) rotateX(0deg)":"rotateY(90deg) rotateX(90deg)"}});return Object(j.jsxs)("div",{className:n,children:[Object(j.jsx)("div",{className:"container image",children:Object(j.jsx)(m.animated.img,{style:l,src:"./images/about1.jpg",alt:"about"})}),Object(j.jsxs)(m.animated.div,{style:r,className:"container info",children:[Object(j.jsx)("h2",{children:"Discover New Horizonts"}),Object(j.jsx)(I,{discoverData:k,tag:i,isScrolled:c,onClick:function(e){var t=e.currentTarget.firstChild.firstChild.data.split(" ").join("_");s(t)}},i)]})]})}function A(){var e="servises",t=C(e),i=Object(m.useSprings)(Object.keys(E).length,Object.keys(E).map((function(e){var i=2e3*Math.random()-1e3,a=2e3*Math.random()-1e3;return{from:{opacity:0,transition:"opacity .1s ease , all .7s ease-out",x:i,y:a},to:{opacity:t?1:0,x:t?0:i,y:t?0:a}}}))),a=Object(m.useSpring)({from:{transition:"opacity .7s ease, all .4s ease",opacity:0,y:20},to:{opacity:t?1:0,y:t?0:20}});return Object(j.jsxs)("div",{className:e,children:[Object(j.jsx)(m.animated.h2,{style:a,children:"Our Servises"}),Object(j.jsx)("div",{className:"block-container",children:i.map((function(e,t){return Object(j.jsx)(m.animated.div,{style:e,className:"container",children:Object(j.jsxs)("div",{className:"s-block",children:[Object(j.jsx)("i",{className:E[t].icon}),Object(j.jsx)("h3",{children:E[t].title}),Object(j.jsx)("p",{children:E[t].description})]})},t)}))})]})}var z=function(){return Object(j.jsxs)("div",{className:"about",children:[Object(j.jsx)(B,{}),Object(j.jsx)(A,{})]})},T=function(){var e="inspired",t=C(e,-700),i=Object(m.useSpring)({from:{transition:"all 2.5s ease",height:0,opacity:0},to:{height:t?550:0,opacity:t?1:0}});return Object(j.jsxs)("div",{className:e,children:[Object(j.jsx)(m.animated.div,{style:i,className:"title-container",children:Object(j.jsx)("h2",{children:"Get Inspired"})}),Object(j.jsx)("video",{id:"bgvid",autoPlay:!0,muted:!0,loop:!0,children:Object(j.jsx)("source",{src:"./images/inspired.webm",type:"video/webm"})})]})},H=i(26),L=i(36),U=i(57),_=i(60),Y=i(58),M=i(59),F=(i(54),i(44)),R=i(16);var D=function(){return Object(j.jsxs)(U.a,{center:[-8.409518,115.188919],zoom:9,scrollWheelZoom:!1,dragging:!0,children:[Object(j.jsx)(_.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(Y.a,{position:[-8.409518,115.188919],icon:new R.Icon({iconUrl:F.a,iconSize:[25,41],iconAnchor:[12,41]}),children:Object(j.jsx)(M.a,{children:"The best place on the Earth!"})})]})};function J(e){for(var t=[],i=0;i<e.length;i++){var a=e.activePosition==i?"active bar":"bar";t[i]=Object(j.jsx)("div",{className:a},i)}return Object(j.jsx)("div",{className:e.className,children:t.map((function(e){return e}))})}function P(e){var t=Object(a.useState)(0),i=Object(o.a)(t,2),s=i[0],n=i[1];return Object(j.jsxs)(m.animated.div,{className:"offer-frame",style:e.style,children:[Object(j.jsxs)("div",{className:"image-container",children:[Object(j.jsx)("img",{src:e.images[s]}),Object(j.jsx)("div",{className:"layer"}),Object(j.jsx)("button",{className:"book",children:"Book now"}),Object(j.jsx)("button",{className:"slide left",onClick:function(){n(0==s?e.images.length-1:s-1)},children:Object(j.jsx)(L.a,{className:"icon"})}),Object(j.jsx)("button",{className:"slide right",onClick:function(){s+1==e.images.length?n(0):n(s+1)},children:Object(j.jsx)(L.b,{className:"icon"})}),Object(j.jsx)(J,{className:"slider-infobar",length:e.images.length,activePosition:s})]}),Object(j.jsx)("h3",{children:e.title}),Object(j.jsxs)("h4",{children:["$",e.price,"\\PER NIGHT"]})]})}var W=function(){var e="offers",t=C(e,-400),i=Object(m.useSprings)(Object.keys(H).length,Object.keys(H).map((function(e){if(parseInt(e)%2==0){var i=parseInt(e)%2?-1200:1200;return{config:{duration:1e3+250*parseInt(e)},from:{x:i,position:"absolute",opacity:0,transition:"opacity 0.1s ease"},to:{position:t?"relative":"absolute",x:t?0:i,opacity:t?1:0}}}return{config:{duration:1e3},from:{opacity:0},to:{opacity:t?1:0}}}))),a=Object(m.useSpring)({from:{opacity:0,transition:"opacity 2s ease"},to:{opacity:t?1:0}});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:e,children:[Object(j.jsxs)(m.animated.div,{style:a,children:[Object(j.jsx)("h2",{children:"Hotels & Apartments"}),Object(j.jsx)("p",{children:"On Bali there are so many variety of dwelling for everyone tastes. So if you want something exsotic be sure that on Bali you will find what you are looking!"})]}),Object(j.jsx)("div",{className:"offer-frames",children:i.map((function(e,t){return Object(j.jsx)(P,{style:e,title:H[t].title,price:H[t].price,images:H[t].images},t)}))})]}),Object(j.jsx)(D,{})]})};var V=function(){var e="footer",t=C(e,-700),i=Object(m.useSpring)({from:{transition:"opacity 1.5s ease",opacity:0},to:{opacity:t?1:0}}),a=Object(m.useSpring)({from:{y:-50},to:{y:t?0:-50},config:{duration:700}});function s(e){console.log("offers"+document.getElementsByClassName("footer")[0].offsetTop);var t=e.target.firstChild.data;Object.keys(u).forEach((function(e){u[e].name==t&&document.getElementsByClassName(u[e].position)[0].scrollIntoView({behavior:"smooth"})}))}return Object(j.jsxs)(m.animated.div,{style:i,className:e,children:[Object(j.jsx)(m.animated.div,{style:a,className:"logo",children:"FAST TRAVEL"}),Object(j.jsx)(m.animated.div,{style:a,className:"nav-items",children:Object(j.jsx)("div",{className:"container",children:Object.keys(u).map((function(e){return Object(j.jsx)("a",{className:"nav-item",onClick:s,children:u[e].name},e)}))})}),Object(j.jsxs)(m.animated.div,{style:a,className:"other",children:[Object(j.jsxs)("div",{className:"social-media-tags",children:[Object(j.jsx)(l.a,{className:"facebook icon",size:30}),Object(j.jsx)(l.b,{className:"instagram icon",size:30}),Object(j.jsx)(l.d,{className:"twitter icon",size:30}),Object(j.jsx)(l.c,{className:"linkedin icon",size:30})]}),Object(j.jsx)("div",{className:"license",children:"\xa92021 Fast Travel. All rights reserved"})]})]})},q=i(45),G=function(){var e="sliderbar",t=Object(a.useState)(!1),i=Object(o.a)(t,2),s=i[0],n=i[1];function c(){var t=!1;document.getElementsByClassName(e)[0].offsetHeight<window.pageYOffset+200&&(t=!t),n(t)}return Object(a.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}})),Object(j.jsx)("button",{className:s?"upbutton":"upbutton unactive",onClick:function(){document.getElementsByClassName(e)[0].scrollIntoView({behavior:"smooth"})},children:Object(j.jsx)(q.a,{className:"icon",size:20})})};var X=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsx)(h,{})}),Object(j.jsxs)("main",{children:[Object(j.jsx)(S,{}),Object(j.jsx)(z,{}),Object(j.jsx)(T,{}),Object(j.jsx)(W,{}),Object(j.jsx)(V,{})]}),Object(j.jsx)(G,{})]})};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.e9522f26.chunk.js.map