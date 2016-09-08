!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("RegionPicker",[],t):"object"==typeof exports?exports.RegionPicker=t():e.RegionPicker=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var c=i[n]={exports:{},id:n,loaded:!1};return e[n].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}var i={};return t.m=e,t.c=i,t.p="/dist/",t(0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function c(e,t){var i=t.region,n=t.vueVersion;o["default"].region=i,o["default"].vueVersion=n||1,e.component(o["default"].name,o["default"])}Object.defineProperty(t,"__esModule",{value:!0}),t.RegionPicker=void 0,t["default"]=c;var r=i(2),o=n(r);t.RegionPicker=o["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"RegionPicker",vueVersion:1,template:'\n    <div class="region-picker">\n      <label class="province">\n        <slot name="province"></slot>\n        <select class="province-select" :value="provinceSelected" @change="change(\'provinceSelected\', $event.target.value)" :required="required" :disabled="disabled">\n          <option value="" v-text="placeholder.province"></option>\n          <option v-for="item in provinces" :value="item" v-text="item[1]"></option>\n        </select>\n      </label>\n      <label class="city" v-show="!auto || cities.length">\n        <slot name="city"></slot>\n        <select class="city-select" :value="citySelected" @change="change(\'citySelected\', $event.target.value)" :required="required && cities.length > 0" :disabled="disabled">\n          <option value="" v-text="placeholder.city"></option>\n          <option v-for="item in cities" :value="item" v-text="item[1]"></option>\n        </select>\n      </label>\n      <label class="district" v-if="!twoSelect" v-show="!auto || districts.length">\n        <slot name="district"></slot>\n        <select class="district-select" :value="districtSelected" @change="change(\'districtSelected\', $event.target.value)" :required="required && districts.length > 0" :disabled="disabled">\n          <option value="" v-text="placeholder.district"></option>\n          <option v-for="item in districts" :value="item" v-text="item[1]"></option>\n        </select>\n      </label>\n    </div>',props:{province:{},city:{},district:{},twoSelect:Boolean,auto:Boolean,completed:Boolean,required:Boolean,disabled:Boolean,rootCode:{"default":"86"},placeholder:{type:Object,"default":function(){return{province:"请选择",city:"请选择",district:"请选择"}}}},methods:{change:function(e,t){this[e]=t.split(","),this.completed?this.$emit("onchange",{province:this.provinceSelected,city:this.citySelected,district:this.districtSelected}):this.$emit("onchange",{province:this.provinceSelected[1],city:this.citySelected[1],district:this.districtSelected[1]})},_filter:function(e){var t=[],i=this.$options.region[e];for(var n in i)t.push([parseInt(n,10),i[n]]);return t},_searchIndex:function(e,t,i){if(!t)return-1;if(1===i){for(var n in e)if(e[n][i].indexOf(t)>-1)return n}else for(var c in e)if(e[c][i]===t)return c},_selected:function(e,t){var i=this._filter(e),n=-1;return"string"==typeof t?n=this._searchIndex(i,t,1):"number"==typeof t?n=this._searchIndex(i,Number(t),0):Array.isArray(t)&&(n=this._searchIndex(i,Number(t[0]),0)),i[n]||[]}},computed:{provinces:function(){return this._filter(this.rootCode)},cities:function(){return this._filter(this.provinceSelected[0])},districts:function(){return this._filter(this.citySelected[0])},isVueNext:function(){return 1!==this.$options.vueVersion},provinceSelected:{get:function(){return this._selected(this.rootCode,this.current.province||this.province)},set:function(e){this.isVueNext?this.current.province=e:this.province=this.completed?e:e[1]}},citySelected:{get:function(){return this._selected(this.provinceSelected[0],this.current.city||this.city)},set:function(e){this.isVueNext?this.current.city=e:this.city=this.completed?e:e[1]}},districtSelected:{get:function(){return this._selected(this.citySelected[0],this.current.district||this.district)},set:function(e){this.isVueNext?this.current.district=e:this.district=this.completed?e:e[1]}}},data:function(){return{current:{province:"",city:"",district:""}}},watch:{province:function(){this.current.province=""},city:function(){this.current.city=""},district:function(){this.current.district=""}}}}])});