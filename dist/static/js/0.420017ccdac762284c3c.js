webpackJsonp([0],{iYWc:function(t,e){},zXZL:function(t,e,a){"use strict";var s={props:{teacherLists:{type:Array}},data:function(){return{}},mounted:function(){},methods:{toDetail:function(t){sessionStorage.setItem("teacher_id",t),location.href="#/teacher_detail"}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},t._l(t.teacherLists,function(e,s){return a("div",{key:s,staticClass:"teacher",on:{click:function(a){t.toDetail(e.id)}}},[a("img",{attrs:{src:e.image,alt:"教师头像"}}),t._v(" "),a("div",{staticClass:"teacher-con"},[a("p",{staticClass:"one"},[a("span",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.subject,function(e,s){return a("span",{key:s,staticClass:"sub"},[t._v(t._s(e.label))])}),t._v(" "),t._l(e.grade,function(e,s){return a("span",{key:s+1,staticClass:"grade"},[t._v(t._s(e.label))])}),t._v(" "),a("span",{staticClass:"tech-time"},[t._v("授课"+t._s(e.teach_time)+"小时")])],2),t._v(" "),a("p",{staticClass:"two"},[t._v("\n        "+t._s(e.teach_year)+"年教龄\n      ")]),t._v(" "),t._l(e.extend_tag,function(e,s){return a("p",{key:s,staticClass:"three"},[t._v("\n        "+t._s(e.label)+"\n      ")])})],2)])}))},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(t){a("iYWc")},"data-v-e3e16212",null);e.a=i.exports}});
//# sourceMappingURL=0.420017ccdac762284c3c.js.map