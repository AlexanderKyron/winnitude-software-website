(function(t){function e(e){for(var a,i,l=e[0],s=e[1],u=e[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={games:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;o.push([1,"chunk-vendors"]),n()})({1:function(t,e,n){t.exports=n("d6d9")},"23b6":function(t,e,n){t.exports=n.p+"img/logo.e5cb9fe1.webp"},"8aeb":function(t,e,n){"use strict";n("a51b")},"99ec":function(t,e,n){},a51b:function(t,e,n){},a5ac:function(t,e,n){"use strict";n("99ec")},bbf6:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-style",[t._v(" ."+t._s(t.rowname)+" { background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("+t._s(t.bglink)+"); background-size:cover; /* Full height */ height: 100%; } ")]),n("vs-row",{class:[t.rowname,t.isParallax],staticStyle:{"padding-bottom":"150px","padding-top":"150px","padding-left":"10%","padding-right":"10%",color:"white","text-wrap":"normal","word-wrap":"break-word"},attrs:{"vs-align":"left","vs-justify":"left","vs-type":"flex"}},[n("vs-col",{attrs:{"vs-align":"left","vs-justify":"left",align:t.alignment}},[n("h1",{staticStyle:{"font-size":"48px"},style:t.heading_style},[t._v(t._s(t.heading))]),n("p",{staticStyle:{"max-width":"40em"}},[t._v(t._s(t.content))]),n("span",[n("vs-button",{staticStyle:{"margin-top":"20px","margin-left":"20px","margin-right":"15px"},attrs:{color:"primary",type:t.buttonType,href:t.destination,hidden:!t.button1}},[t._v(t._s(t.buttonLabel))]),n("vs-button",{staticStyle:{"margin-top":"20px"},attrs:{color:"primary",type:t.secondaryButtonType,href:t.secondaryDestination,hidden:!t.button2}},[t._v(t._s(t.secondaryButtonLabel))])],1)])],1)],1)},r=[],o={name:"Section",props:{bglink:{type:String,required:!0},heading:{type:String,required:!0},content:{type:String,required:!0},isParallax:{type:String,default:""},alignment:{type:String,default:"left"},leftRow:{type:Boolean,default:!0},rowname:{type:String,required:!0},buttonLabel:String,secondaryButtonLabel:String,buttonType:{type:String,default:"filled"},secondaryButtonType:{type:String,default:"border"},button1:{type:Boolean},button2:{type:Boolean},destination:{type:String,default:"#"},secondaryDestination:{type:String,default:"#"},heading_style:{type:String}}};var i=o,l=(n("a5ac"),n("2877")),s=Object(l["a"])(i,a,r,!1,null,"6ad34e06",null);e["a"]=s.exports},d178:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vs-navbar",{staticClass:"nabarx",staticStyle:{"padding-top":"10px","padding-bottom":"5px","padding-left":"2%","padding-right":"2%",width:"100%",overflow:"hidden",top:"0",position:"absolute"},attrs:{color:t.colorx,"text-color":"rgba(255,255,255,.6)","active-text-color":"rgba(255,255,255,1)",id:"navbar"},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("vs-navbar-title",[a("img",{staticStyle:{"margin-left":"20%"},attrs:{alt:"Winnitude software logo",src:n("23b6"),onclick:"document.location='/'",height:"60px"}})])],1),a("vs-navbar-item",{attrs:{index:"0"}},[a("a",{staticStyle:{top:"50%"},attrs:{href:"/"}},[t._v("Home")])]),a("vs-navbar-item",{attrs:{index:"1"}},[a("a",{attrs:{href:"/games.html"}},[t._v("Games")])]),a("vs-navbar-item",{attrs:{index:"2"}},[a("a",{attrs:{href:"/about.html"}},[t._v("About")])])],1)],1)},r=[],o=(n("a9e3"),{name:"Navbar",props:{activeItem:Number},data:function(){return{colorx:"#252525"}}}),i=o,l=n("2877"),s=Object(l["a"])(i,a,r,!1,null,null,null);e["a"]=s.exports},d6d9:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar",{attrs:{"active-item":1}}),n("Section",{attrs:{heading:"\nArachnophobia",content:"\n    Become the monster you dread in this psychological thriller, where you get to be the horror.\n",alignment:"right",bglink:t.publicPath+"Images/blood.jpg",rowname:"row1","button-type":"filled",button1:!0,button2:!1,"secondary-button-type":"border","button-label":"Coming Soon",destination:"#","is-parallax":"parallax",heading_style:"font-family:Horroroid;color:red;font-size:140px"}}),n("Section",{attrs:{heading:"\nViral Insurgent: Redux",content:"\n    Welcome back, insurgent. Return to the system and fight - with style - for dominance against a rival trojan in this short demo. Full game releasing soon with\n    multiplayer and other features!\n",alignment:"left",bglink:t.publicPath+"Images/virbackground.png",rowname:"arachnophobia","button-type":"filled",button1:!0,button2:!1,"secondary-button-type":"border","secondary-button-label":"Watch the Trailer","is-parallax":"parallax","button-label":"Play now on Itch.io",destination:"https://winnitude.itch.io/viral-insurgent-redux"}}),n("Section",{attrs:{heading:"\n    R3WiND\n",content:"\n    Fight for the future in this solo-project by Alex, made for the Brackeys 2020.2 7-day game jam in Unreal Engine.\n    Battle aliens and fight their queen to save your future in this frantic third-person shooter.\n",alignment:"right",bglink:t.publicPath+"Images/rewind_boss.png",rowname:"row2",button1:!0,"button-label":"Play now on Itch.io",button2:!0,"secondary-button-label":"Watch  the Trailer","secondary-destination":"https://www.youtube.com/watch?v=TEzUn00RME4","is-parallax":"parallax",destination:"https://winnitude.itch.io/r3wind"}}),n("Section",{attrs:{heading:"\nViral Insurgent",content:"\n    Bunny-hop and fight for control over a computer as a sentient virus.\n",alignment:"left",bglink:t.publicPath+"Images/VIRDemo.png",rowname:"row3","button-type":"filled",button1:!0,button2:!1,"secondary-button-type":"border","button-label":"Play now on Itch.io",destination:"https://winnitude.itch.io/viral-insurgent"}}),n("Footer")],1)},o=[],i=n("d178"),l=n("bbf6"),s=n("fd2d"),u={name:"Games",components:{Navbar:i["a"],Section:l["a"],Footer:s["a"]},data:function(){return{publicPath:"/",message:"test \n test"}}},c=u,d=(n("8aeb"),n("2877")),p=Object(d["a"])(c,r,o,!1,null,null,null),b=p.exports,f=n("6d68"),g=n("5320"),h=n("fb9a"),y=n.n(h);n("04f2");a["default"].use(f["a"]),a["default"].use(g["a"]),a["default"].use(y.a),a["default"].config.productionTip=!1,a["default"].component("v-style",{render:function(t){return t("style",this.$slots.default)}}),new a["default"]({render:function(t){return t(b)}}).$mount("#app")},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"20px"}},[a("vs-navbar",{staticStyle:{"padding-top":"10px","padding-bottom":"10px","padding-left":"2%","padding-right":"2%",width:"100%"},attrs:{color:t.colorx,"text-color":"rgba(255,255,255,.6)","active-text-color":"rgba(255,255,255,1)"},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("img",{staticStyle:{"margin-left":"20%"},attrs:{alt:"Winnitude Software logo",src:n("23b6"),height:"60px"}})]),a("p",{staticStyle:{color:"white"}},[t._v("Copyright Winnitude! Software 2020")])])],1)},r=[],o=(n("a9e3"),{name:"Navbar",props:{activeItem:Number},data:function(){return{colorx:"#252525"}}}),i=o,l=n("2877"),s=Object(l["a"])(i,a,r,!1,null,null,null);e["a"]=s.exports}});
//# sourceMappingURL=games.520a34e6.js.map