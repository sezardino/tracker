(function(t){function e(e){for(var r,i,s=e[0],o=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);b&&b(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},c={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var b=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1b2d":function(t,e,n){},"3be2":function(t,e,n){"use strict";n("92a1")},"446f":function(t,e,n){"use strict";n("4769")},4769:function(t,e,n){},6684:function(t,e,n){},"6abe":function(t,e,n){"use strict";n("6ea6")},"6ea6":function(t,e,n){},8572:function(t,e,n){},"92a1":function(t,e,n){},9857:function(t,e,n){"use strict";n("6684")},b3eb:function(t,e,n){"use strict";n("c1ce")},b701:function(t,e,n){"use strict";n("8572")},c1ce:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(t,e,n,c,a,i){var s=Object(r["t"])("Header"),o=Object(r["t"])("Statistic"),u=Object(r["t"])("Copyrights"),b=Object(r["t"])("Layout");return Object(r["n"])(),Object(r["d"])(b,null,{content:Object(r["x"])((function(){return[Object(r["h"])(s),Object(r["h"])(o,{data:t.statistic},null,8,["data"])]})),footer:Object(r["x"])((function(){return[Object(r["h"])(u)]})),_:1})}var a={class:"main"};function i(t,e,n,c,i,s){return Object(r["n"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("main",a,[Object(r["s"])(t.$slots,"content",{},void 0,!0)]),Object(r["f"])("footer",null,[Object(r["s"])(t.$slots,"footer",{},void 0,!0)])],64)}var s=Object(r["i"])({name:"Layout"}),o=(n("9857"),n("6b0d")),u=n.n(o);const b=u()(s,[["render",i],["__scopeId","data-v-e3b79fc6"]]);var l=b,f=function(t){return Object(r["p"])("data-v-4c79b11e"),t=t(),Object(r["o"])(),t},d={class:"copyrights"},O=f((function(){return Object(r["f"])("p",{class:"copyrights__content"},[Object(r["g"])(" Challenge by "),Object(r["f"])("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",class:"copyrights__link"}," Frontend Mentor. "),Object(r["g"])(" Coded by "),Object(r["f"])("a",{href:"https://github.com/sezardino",class:"copyrights__link"}," Edward Arechwa ")],-1)})),j=[O];function p(t,e,n,c,a,i){return Object(r["n"])(),Object(r["e"])("div",d,j)}var v=Object(r["i"])({name:"Copyrights"});n("446f");const m=u()(v,[["render",p],["__scopeId","data-v-4c79b11e"]]);var h=m,_=function(t){return Object(r["p"])("data-v-70a8162e"),t=t(),Object(r["o"])(),t},g={className:"header"},y=_((function(){return Object(r["f"])("div",{class:"header__wrapper"},[Object(r["f"])("h1",{className:"header__title"},[Object(r["f"])("span",{className:"header__field"},"Report for"),Object(r["g"])(" Jeremy Robson ")]),Object(r["f"])("img",{src:"/images/avatar.png",alt:"jeremy",className:"header__avatar"})],-1)}));function w(t,e,n,c,a,i){var s=Object(r["t"])("Filters");return Object(r["n"])(),Object(r["e"])("header",g,[y,Object(r["h"])(s,{class:"header__filters",filters:t.filters,currentFilter:t.activeFilter,onFilterChange:t.changeFilterHandler},null,8,["filters","currentFilter","onFilterChange"])])}var k={class:"filters"},F={class:"filters__list"},S=["aria-label","onClick"];function T(t,e,n,c,a,i){return Object(r["n"])(),Object(r["e"])("div",k,[Object(r["f"])("ul",F,[(Object(r["n"])(!0),Object(r["e"])(r["a"],null,Object(r["r"])(t.filters,(function(e){return Object(r["n"])(),Object(r["e"])("li",{key:e,class:Object(r["k"])(["filters__item",{"filters__item--active":t.currentFilter===e}])},[Object(r["f"])("button",{type:"button",class:"filters__button","aria-label":"change filter to "+e,onClick:function(n){return t.$emit("filterChange",e)}},Object(r["v"])(e),9,S)],2)})),128))])])}var C=Object(r["i"])({name:"Filters",props:{filters:{type:Array,default:function(){return[]}},currentFilter:{type:String,required:!1}},emits:["filterChange"]});n("3be2");const I=u()(C,[["render",T],["__scopeId","data-v-21bbed5e"]]);var x=I,L=n("5502"),A=Object(r["i"])({name:"Header",components:{Filters:x},setup:function(){var t=Object(L["b"])(),e=Object(r["b"])((function(){return t.getters["tracker/tabs"]})),n=Object(r["b"])((function(){return t.getters["tracker/currentTab"]})),c=function(e){return t.dispatch("tracker/changeTab",e)};return{filters:e,activeFilter:n,changeFilterHandler:c}}});n("b3eb");const R=u()(A,[["render",w],["__scopeId","data-v-70a8162e"]]);var E=R,M=function(t){return Object(r["p"])("data-v-726cd253"),t=t(),Object(r["o"])(),t},P={class:"statistic"},N=M((function(){return Object(r["f"])("h2",{class:"statistic__title"},"Statistic",-1)})),D={className:"statistic__list"};function H(t,e,n,c,a,i){var s=Object(r["t"])("StatisticItem");return Object(r["n"])(),Object(r["e"])("section",P,[N,Object(r["f"])("ul",D,[(Object(r["n"])(!0),Object(r["e"])(r["a"],null,Object(r["r"])(t.data,(function(e){return Object(r["n"])(),Object(r["d"])(s,{key:e.title,data:e,activeFilter:t.activeFilter},null,8,["data","activeFilter"])})),128))])])}var q={class:"statistic-item__body"},z={class:"statistic-item__header"},B={class:"statistic-item__title"},J={class:"statistic-item__count"},$={class:"statistic-item__current"},U={class:"statistic-item__last"};function V(t,e,n,c,a,i){var s=Object(r["t"])("MoreButton");return Object(r["n"])(),Object(r["d"])(Object(r["u"])(t.as),{class:Object(r["k"])(["statistic-item","statistic-item--".concat(t.data.title.toLocaleLowerCase())]),style:Object(r["l"])({backgroundColor:t.data.color})},{default:Object(r["x"])((function(){return[Object(r["f"])("div",q,[Object(r["f"])("header",z,[Object(r["f"])("h3",B,Object(r["v"])(t.data.title),1),Object(r["h"])(s,{class:"statistic-item__more"})]),Object(r["f"])("div",J,[Object(r["f"])("p",$,Object(r["v"])(t.current)+" hrs",1),Object(r["f"])("p",U,"Last - "+Object(r["v"])(t.previous)+"hrs",1)])])]})),_:1},8,["class","style"])}var G=function(t){return Object(r["p"])("data-v-3ee01622"),t=t(),Object(r["o"])(),t},K={class:"more-button","aria-label":"open sub menu"},Q=G((function(){return Object(r["f"])("span",{class:"more-button__item"},null,-1)})),W=G((function(){return Object(r["f"])("span",{class:"more-button__item"},null,-1)})),X=G((function(){return Object(r["f"])("span",{class:"more-button__item"},null,-1)})),Y=[Q,W,X];function Z(t,e,n,c,a,i){return Object(r["n"])(),Object(r["e"])("button",K,Y)}var tt=Object(r["i"])({name:"MoreButton"});n("d157");const et=u()(tt,[["render",Z],["__scopeId","data-v-3ee01622"]]);var nt,rt=et;(function(t){t["SECTION"]="section",t["ARTICLE"]="article",t["FOOTER"]="footer",t["HEADER"]="header",t["SPAN"]="span",t["DIV"]="div",t["OL"]="ol",t["UL"]="ul",t["LI"]="li",t["A"]="a"})(nt||(nt={}));n("07ac"),n("caad"),n("2532"),n("d81d");var ct=function(t,e){var n=Object.values(e),r=n.includes(t);return r||(console.warn("".concat(t," is not valid! Use one of those values:")),n.map((function(t){return console.warn("".concat(t))}))),r},at=Object(r["i"])({name:"StatisticItem",components:{MoreButton:rt},props:{as:{type:String,default:nt.LI,validator:function(t){return ct(t,nt)}},data:{type:Object,required:!0},activeFilter:{type:String,required:!0}},setup:function(t){var e=Object(r["b"])((function(){var e=t.data,n=t.activeFilter;return e.timeframes[n].current})),n=Object(r["b"])((function(){var e=t.data,n=t.activeFilter;return e.timeframes[n].previous}));return{current:e,previous:n}}});n("b701");const it=u()(at,[["render",V],["__scopeId","data-v-29094b9b"]]);var st=it,ot=Object(r["i"])({name:"Statistic",components:{StatisticItem:st},props:{data:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(L["b"])(),e=Object(r["b"])((function(){return t.getters["tracker/currentTab"]}));return{activeFilter:e}}});n("6abe");const ut=u()(ot,[["render",H],["__scopeId","data-v-726cd253"]]);var bt=ut,lt=Object(r["i"])({name:"App",components:{Copyrights:h,Header:E,Statistic:bt,Layout:l},setup:function(){var t=Object(L["b"])(),e=Object(r["b"])((function(){return t.getters["tracker/data"]}));return Object(r["m"])((function(){t.dispatch("tracker/initialization")})),{statistic:e}}});const ft=u()(lt,[["render",c]]);var dt=ft,Ot=n("1da1"),jt=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("159b"),n("b64b"),n("a630"),n("96cf"),n("d4ec")),pt=n("bee2"),vt=function(){function t(){Object(jt["a"])(this,t),this.url="/1.json"}return Object(pt["a"])(t,null,[{key:"getData",value:function(){var t=Object(Ot["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/data.json");case 2:if(e=t.sent,e.ok){t.next=5;break}throw new Error("Something goes wrong");case 5:return t.next=7,e.json();case 7:return n=t.sent,t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),mt=vt,ht={namespaced:!0,state:{data:[],tabs:[],currentTab:""},getters:{data:function(t){return t.data},tabs:function(t){return t.tabs},currentTab:function(t){return t.currentTab}},mutations:{setData:function(t,e){t.data=e},setTabs:function(t,e){console.log(t.tabs),t.tabs=e,console.log(t.tabs),t.currentTab=e[0]},setCurrentTab:function(t,e){t.currentTab=e}},actions:{initialization:function(t){return Object(Ot["a"])(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.dispatch,e.prev=1,e.next=4,mt.getData();case 4:c=e.sent,n("setData",c),r("tabInit"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},tabInit:function(t){var e=t.commit,n=t.getters,r=new Set,c=n["data"];c.forEach((function(t){Object.keys(t.timeframes).map((function(t){return r.add(t)}))})),e("setTabs",Array.from(r))},changeTab:function(t,e){var n=t.commit;n("setCurrentTab",e)}}},_t=Object(L["a"])({modules:{tracker:ht}});n("fb98");Object(r["c"])(dt).use(_t).mount("#app")},d157:function(t,e,n){"use strict";n("1b2d")},fb98:function(t,e,n){}});
//# sourceMappingURL=app.27a4ce39.js.map