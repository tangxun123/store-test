webpackJsonp([1],{"2ZOg":function(t,e){},"5qVJ":function(t,e){},HDyj:function(t,e){},I5ou:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"header-bread"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("state")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/mutation"}}},[t._v("mutation")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/action"}}},[t._v("action")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/getters"}}},[t._v("getters")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/modules"}}},[t._v("modules")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/hotReload"}}},[t._v("hotReload")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/404"}}},[t._v("404")]),t._v(" "),a("el-breadcrumb-item")],1)],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},s,!1,function(t){a("ZvAn")},null,null).exports,r=a("/ocq"),m=a("Dd8w"),i=a.n(m),c=a("NYxO"),u={name:"state",data:function(){return{}},computed:i()({},Object(c.e)({getName:function(t){return t.demo.name}})),mounted:function(){console.log(this.$store)},methods:{goStore:function(){this.$router.push({name:"StoreVue"})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("h3",[t._v("demo模块name："+t._s(this.$store.state.demo.name))]),t._v(" "),a("h3",[t._v("mapState："+t._s(t.getName))]),t._v(" "),a("br"),a("br"),a("br"),a("br"),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.goStore}},[t._v("store")])],1)},staticRenderFns:[]};var l=a("VU/8")(u,h,!1,function(t){a("5qVJ")},"data-v-4c094970",null).exports,p={name:"One",data:function(){return{name:""}},mounted:function(){console.log(this.$store)},methods:i()({noParamsChangeName:function(){this.$store.commit("noParamsChangeName"),console.log(this.$store)},hasParamsChangeName:function(){this.$store.commit({type:"hasParamsChangeName",name:this.name}),console.log(this.$store)}},Object(c.d)({noPa:"noParamsChangeName",hasPa:"hasParamsChangeName"}),{noParamsMapMu:function(){this.noPa()},hasParamsMapMu:function(){this.hasPa({name:this.name})}})},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("h3",[t._v("demo模块name："+t._s(this.$store.state.demo.name))]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入参数",clearable:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.noParamsChangeName}},[t._v("mutation不带参数")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.hasParamsChangeName}},[t._v("mutation带参数")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.noParamsMapMu}},[t._v("mapMutations不带参")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.hasParamsMapMu}},[t._v("mapMutations带参")])],1)},staticRenderFns:[]};var d=a("VU/8")(p,v,!1,function(t){a("sCP2")},"data-v-1ab2e11b",null).exports,_={name:"Two",data:function(){return{name:""}},mounted:function(){console.log(this.$store)},methods:i()({noParamsChangeNameAsync:function(){this.$store.dispatch("noParamsChangeNameAsync")},hasParamsChangeNameAsync:function(){this.$store.dispatch({type:"hasParamsChangeNameAsync",name:this.name})}},Object(c.b)({noPaAs:"noParamsChangeNameAsync",hasPaAs:"hasParamsChangeNameAsync"}),{noParamsMapMuAsync:function(){this.noPaAs()},hasParamsMapMuAsync:function(){this.hasPaAs({name:this.name})}})},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("h3",[t._v("demo模块name："+t._s(this.$store.state.demo.name))]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入参数",clearable:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.noParamsChangeNameAsync}},[t._v("action不带参数")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.hasParamsChangeNameAsync}},[t._v("action带参数")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.noParamsMapMuAsync}},[t._v("mapActions不带参")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.hasParamsMapMuAsync}},[t._v("mapActions带参")])],1)},staticRenderFns:[]};var g=a("VU/8")(_,f,!1,function(t){a("2ZOg")},"data-v-077ce0ac",null).exports,y={name:"Three",data:function(){return{name:""}},computed:i()({},Object(c.c)(["setNameDescription","setNameDescriptionParams"])),mounted:function(){console.log(this.$store)},methods:{noParamsChangeNameAsync:function(){this.$store.dispatch("noParamsChangeNameAsync")},hasParamsChangeNameAsync:function(){this.$store.dispatch({type:"hasParamsChangeNameAsync",name:this.name})}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("h3",[t._v("demo模块name："+t._s(this.$store.state.demo.name))]),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("b",[t._v("getters不带参："+t._s(this.$store.getters.setNameDescription))]),t._v(" "),a("br"),t._v(" "),a("b",[t._v("getters带参："+t._s(this.$store.getters.setNameDescriptionParams("我是个参数")))])]),t._v(" "),a("br"),a("br"),t._v(" "),a("el-input",{attrs:{placeholder:"请输入参数",clearable:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.noParamsChangeNameAsync}},[t._v("action不带参数")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.hasParamsChangeNameAsync}},[t._v("action带参数")])],1)},staticRenderFns:[]};var b=a("VU/8")(y,P,!1,function(t){a("mmaL")},"data-v-a29d4c00",null).exports,N={name:"modules",data:function(){return{}},mounted:function(){console.log(this.$store)},methods:{}},C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("div",[this._v("\n    由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。\n    "),e("br"),this._v("\n    为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块\n  ")])])}]};var A=a("VU/8")(N,C,!1,function(t){a("uNUG")},"data-v-1422869a",null).exports,$={name:"hotReload",data:function(){return{}},mounted:function(){console.log(this.$store)},methods:{}},M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[this._v("\n  热重载增删模块内部方法不会刷新页面　而是加载一段js片段\n  "),e("br"),this._v("\n  state模块是没法进行热重载的\n")])}]};var k=a("VU/8")($,M,!1,function(t){a("I5ou")},"data-v-05c6d2d5",null).exports,x={data:function(){return{name:""}},computed:i()({},Object(c.e)({getName:function(t){return t.demo.name}}),Object(c.c)(["setNameDescription","setNameDescriptionParams"])),mounted:function(){console.log(this.$store),sessionStorage.getItem("storeName")&&(this.$store.state.demo=JSON.parse(sessionStorage.getItem("storeName")))},methods:i()({noParamsChangeName:function(){this.$store.commit("noParamsChangeName"),console.log(this.$store)},hasParamsChangeName:function(){this.$store.commit({type:"hasParamsChangeName",name:this.name}),console.log(this.$store)},noParamsChangeNameAsync:function(){this.$store.dispatch("noParamsChangeNameAsync")},hasParamsChangeNameAsync:function(){this.$store.dispatch({type:"hasParamsChangeNameAsync",name:this.name})}},Object(c.d)({noPa:"noParamsChangeName",hasPa:"hasParamsChangeName"}),{noParamsMapMu:function(){this.noPa()},hasParamsMapMu:function(){this.hasPa({name:this.name})}},Object(c.b)({noPaAs:"noParamsChangeNameAsync",hasPaAs:"hasParamsChangeNameAsync"}),{noParamsMapMuAsync:function(){this.noPaAs()},hasParamsMapMuAsync:function(){this.hasPaAs({name:this.name})}},Object(c.b)({getTime:"mySome/setTimeAsync",getMe:"getDemoMeth"}),{someChange:function(){this.getTime({num:"0416"})}})},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("demo模块name："+t._s(this.$store.state.demo.name))]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入参数",clearable:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.noParamsChangeName}},[t._v("mutation不带参数")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.hasParamsChangeName}},[t._v("mutation带参数")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.noParamsChangeNameAsync}},[t._v("action不带参数")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.hasParamsChangeNameAsync}},[t._v("action带参数")]),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("b",[t._v("getters不带参："+t._s(this.$store.getters.setNameDescription))]),t._v(" "),a("br"),t._v(" "),a("b",[t._v("getters带参："+t._s(this.$store.getters.setNameDescriptionParams("我是个参数")))])]),t._v(" "),a("div",[a("h2",[t._v("vuex的辅助函数有：mapState、mapMutations、mapGetters、mapActions")]),t._v(" "),a("h6",[t._v('"mapState：" '+t._s(t.getName))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.noParamsMapMu}},[t._v("mapMutations不带参")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.hasParamsMapMu}},[t._v("mapMutations带参")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.noParamsMapMuAsync}},[t._v("mapActions不带参")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.hasParamsMapMuAsync}},[t._v("mapActions带参")]),t._v(" "),a("div",[t._v("mapGetters不带参: "+t._s(t.setNameDescription))]),t._v(" "),a("div",[t._v("mapGetters带参: "+t._s(t.setNameDescriptionParams("我是参数")))])],1),t._v(" "),t._m(0),t._v(" "),a("h3",[t._v("some模块time："+t._s(this.$store.state.some.time))]),t._v(" "),a("el-button",{on:{click:t.someChange}},[t._v("someChange")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("关于刷新页面store数据初始化问题")]),this._v(" "),e("p",[this._v("\n      在页面刷新或离开之前将store中的数据保存到sessionStorage 或\n      localStorage中， 在页面重新加载后再将数据取出，\n      通过vuex的$store.replaceState 将数据替换到store中\n    ")])])}]};var D=a("VU/8")(x,O,!1,function(t){a("ygtX")},"data-v-5b7317fe",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p404"},[e("h1",[this._v("page notFind")])])}]};var S=a("VU/8")({name:"notFind"},E,!1,function(t){a("HDyj")},"data-v-2d431054",null).exports;n.default.use(r.a);var V=new r.a({routes:[{path:"/state",component:l},{path:"/mutation",component:d},{path:"/action",component:g},{path:"/getters",component:b},{path:"/modules",component:A},{path:"/hotReload",component:k},{path:"/Store-vue",name:"StoreVue",component:D},{path:"/",redirect:"state",component:l},{path:"/p404",component:S}]}),R=a("Y81h"),j=a.n(R),U=(a("UVIz"),a("zL8q")),w=a.n(U),T=(a("tvR6"),a("fKDg")),F=a.n(T),q={state:{name:"大斌子",history:[]},mutations:{noParamsChangeName:function(t){t.name="小斌子"},hasParamsChangeName:function(t,e){console.log(e),t.name=e.name}},actions:{noParamsChangeNameAsync:function(t){setTimeout(function(){t.commit("noParamsChangeName")},1e3)},hasParamsChangeNameAsync:function(t,e){console.log(t),setTimeout(function(){t.commit("hasParamsChangeName",e)},1e3)}},getters:{setNameDescription:function(t){var e="";return"小四"===t.name&&(e="真好11"),t.name+e},setNameDescriptionParams:function(t){return function(e){var a="";return"tx"===t.name&&(a=e),t.name+a}}}},I={namespaced:!0,state:{time:"2020",name:"哈哈"},mutations:{setTime:function(t,e){t.time="2021"+e.num}},actions:{setTimeAsync:{root:!0,handler:function(t){setTimeout(function(){t.commit("noParamsChangeName")},1e3)}}},getters:{setTimeGetter:function(t){return function(e){var a="";return"2023"===t.time&&(a=e),t.name+a}}}};n.default.use(c.a);var G=new c.a.Store({modules:{demo:q,some:I}}),H=a("mtWM"),J=a.n(H),L=a("mw3O"),Z=a.n(L);n.default.prototype.$axios=J.a,J.a.defaults.baseURL="/api",Object({NODE_ENV:"production"}).MOCK&&a("qs/E"),n.default.prototype.qs=Z.a,n.default.use(w.a),n.default.use(F.a),n.default.config.productionTip=!1,G.registerModule("newModule",{state:{newData:"someNew"},mutations:{},actions:{},getters:{}}),G.unregisterModule("newModule"),V.beforeEach(function(t,e,a){j.a.start(),a()}),V.afterEach(function(){j.a.done()}),new n.default({el:"#app",router:V,components:{App:o},template:"<App/>",store:G})},UVIz:function(t,e){},ZvAn:function(t,e){},mmaL:function(t,e){},"qs/E":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={homeInfo:{code:200,id:"123456",msg:"success",name:"tx",tel:"12306"}};e.default=n},sCP2:function(t,e){},tvR6:function(t,e){},uNUG:function(t,e){},ygtX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d9fdafe043dc92e91e00.js.map