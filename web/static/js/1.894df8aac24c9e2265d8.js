webpackJsonp([1],{NNc9:function(t,e){},"l/80":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"StructSetup",data:function(){return{loading:!1,tableData:[],classId:"",classType:""}},mounted:function(){this.$nextTick(function(){this.fetchData()})},watch:{$route:"fetchData"},methods:{fieldTypeChange:function(t){console.log(t.FIELDNAME,t.FIELDTYPE)},getFieldType:function(t){switch(t){case"C":case"V":return"字符型";case"I":return"数值型";case"D":return"日期型";default:return t}},fetchData:function(){var t=this;this.loading=!0,this.classId=this.$route.params.classId,this.classType=this.$route.params.classType,console.log(this.classId),this.axios.get(this.api+"/GetDocFrame.do",{params:{classId:this.classId,classType:this.classType}}).then(function(e){t.loading=!1,console.log(e.data.cols),t.tableData=e.data.cols}).catch(function(){t.loading=!1})},handleClick:function(t){console.log(t)}}},o={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticStyle:{margin:"5px"}},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:12}},[l("el-card",{attrs:{shadow:"always"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",{staticClass:"card-header"},[t._v("档号组成")])]),t._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",border:"","highlight-current-row":"",size:"mini","max-height":"330","header-cell-style":{color:"#000",background:"#FAFAFA","text-align":"center"}}},[l("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"FIELDNAME",label:"字段名",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"DISSTR",label:"中文名称",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t.getFieldType(e.row.FIELDTYPE))+"\n            ")]}}])}),t._v(" "),l("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"FIELDSIZE",label:"长度"}}),t._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){t.handleClick(e.row)}}},[t._v("查看")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-card",{attrs:{shadow:"always"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",{staticClass:"card-header"},[t._v("公共字段")])]),t._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",border:"","highlight-current-row":"",size:"mini","max-height":"330","header-cell-style":{color:"#000",background:"#FAFAFA","text-align":"center"}}},[l("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"FIELDNAME",label:"字段名",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"DISSTR",label:"中文名称",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t.getFieldType(e.row.FIELDTYPE))+"\n            ")]}}])}),t._v(" "),l("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"FIELDSIZE",label:"长度"}}),t._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){t.handleClick(e.row)}}},[t._v("查看")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)],1)],1)],1),t._v(" "),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-card",{attrs:{shadow:"always"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",{staticClass:"card-header"},[t._v("用户字段")]),t._v(" "),l("el-button",{staticStyle:{float:"left",padding:"3px 0"},attrs:{type:"text"}},[t._v("新增")])],1),t._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",border:"","highlight-current-row":"",size:"mini","max-height":"330","header-cell-style":{color:"#000",background:"#FAFAFA","text-align":"center"}}},[l("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"FIELDNAME",label:"字段名",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"DISSTR",label:"中文名称",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-select",{attrs:{size:"mini"},on:{change:function(l){t.fieldTypeChange(e.row)}},model:{value:e.row.FIELDTYPE,callback:function(l){t.$set(e.row,"FIELDTYPE",l)},expression:"scope.row.FIELDTYPE"}},[l("el-option",{attrs:{value:"C",label:"字符型"}},[t._v("字符型")]),t._v(" "),l("el-option",{attrs:{value:"I",label:"数值型"}},[t._v("数值型")]),t._v(" "),l("el-option",{attrs:{value:"D",label:"日期型"}},[t._v("数值型")])],1)]}}])}),t._v(" "),l("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"长度",prop:"FIELDSIZE"},scopedSlots:t._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{value:t.row.FIELDSIZE,size:"mini",placeholder:"字段长度"}})]}}])}),t._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){t.handleClick(e.row)}}},[t._v("查看")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)],1)],1)],1)],1)},staticRenderFns:[]};var s=l("VU/8")(a,o,!1,function(t){l("NNc9")},null,null);e.default=s.exports}});
//# sourceMappingURL=1.894df8aac24c9e2265d8.js.map