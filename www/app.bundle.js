"use strict";(self.webpackChunkonsenui_v2_vue_tabbar=self.webpackChunkonsenui_v2_vue_tabbar||[]).push([[143],{7269:(t,s,n)=>{var e=n(6566),a=n(538),i=n(4430),o=n.n(i),l=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("v-ons-page",[n("v-ons-toolbar",[n("div",{staticClass:"center"},[t._v(t._s(t.title))])]),t._v(" "),n("v-ons-tabbar",{attrs:{position:"auto",tabs:t.tabs,visible:!0,index:t.activeIndex},on:{"update:index":function(s){t.activeIndex=s}}})],1)};l._withStripped=!0;var r=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("v-ons-page",[n("p",{staticStyle:{"text-align":"center"}},[t._v("\n    Change the settings.\n  ")])])};r._withStripped=!0;var c=n(1900);const u=(0,c.Z)({},r,[],!1,null,null,null).exports;var p=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("v-ons-page",[n("p",{staticClass:"wel"},[t._v("\n    新宿山吹高校へようこそ！\n  ")]),t._v(" "),n("div",{staticClass:"con"},[n("v-ons-button",{staticClass:"button-margin",staticStyle:{margin:"25% 7%"}},[n("a",{staticClass:"sc1",attrs:{href:"https://masatoshi55.github.io/SchoolAR/"}},[t._v("ARマーカー１")])]),t._v(" "),n("v-ons-button",{staticClass:"button-margin",staticStyle:{margin:"25% 7%"}},[n("a",{staticClass:"sc2",attrs:{href:"https://masatoshi55.github.io/SchoolAR2/"}},[t._v("ARマーカー２")])]),t._v(" "),n("v-ons-button",{staticClass:"button-margin",staticStyle:{margin:"25% 7%"}},[n("a",{staticClass:"sc3",attrs:{href:"https://masatoshi55.github.io/SchoolAR3/"}},[t._v("ARマーカー３")])]),t._v(" "),n("v-ons-button",{staticClass:"button-margin",staticStyle:{margin:"25% 7%"}},[n("a",{staticClass:"sc4",attrs:{href:"https://masatoshi55.github.io/SchoolAR4/"}},[t._v("ARマーカー４")])]),t._v(" "),n("v-ons-button",{staticClass:"button-margin",staticStyle:{margin:"25% 7%"}},[n("a",{staticClass:"sc5",attrs:{href:"https://masatoshi55.github.io/SchoolAR5/"}},[t._v("ARマーカー５")])])],1)])};p._withStripped=!0;const h=(0,c.Z)({},p,[],!1,null,null,null).exports;var v=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("v-ons-page",[n("p",{staticStyle:{"text-align":"center"}},[t._v("\n    Some news here.\n  ")])])};v._withStripped=!0;const m=(0,c.Z)({},v,[],!1,null,null,null).exports,b={data:function(){return{activeIndex:0,tabs:[{icon:this.md()?null:"ion-ios-home",label:"Home",page:h},{icon:this.md()?null:"ion-ios-notifications",label:"News",page:m,badge:7},{icon:this.md()?null:"ion-ios-settings",label:"Settings",page:u}]}},methods:{md:function(){return this.$ons.platform.isAndroid()}},computed:{title:function(){return this.tabs[this.activeIndex].label}},components:{homePage:h,settingsPage:u,newsPage:m}},d=(0,c.Z)(b,l,[],!1,null,null,null).exports;n(8408),n(8777),e.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape","")),a.Z.use(o()),new a.Z({el:"#app",template:"<app></app>",components:{App:d}}),document.addEventListener("deviceready",(function(){window.open=cordova.InAppBrowser.open}),!1)}},t=>{t.O(0,[625],(()=>(7269,t(t.s=7269)))),t.O()}]);