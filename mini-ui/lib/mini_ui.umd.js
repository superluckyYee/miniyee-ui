(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mini_ui"] = factory();
	else
		root["mini_ui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MiniBeautyButton": function() { return /* reexport */ beautybutton; },
  "MiniDialog": function() { return /* reexport */ dialog_lib; },
  "MiniOriginalButton": function() { return /* reexport */ originalbutton; },
  "MiniOriginalInput": function() { return /* reexport */ lib; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/lib/src/originalbutton.vue?vue&type=template&id=e8f7942e&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',{staticClass:"mini-original-button",class:[`mini-original-button--${_vm.type}`,{
  'isPlain':_vm.plain,
  'isRound':_vm.round,
  'isCircle':_vm.circle,
  'isDisabled':_vm.disabled
}],attrs:{"disabled":_vm.disabled},on:{"click":_vm.handleClick}},[(_vm.icon)?_c('i',{class:`one-icon-${_vm.icon}`}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/lib/src/originalbutton.vue?vue&type=script&lang=js&

 
/* harmony default export */ var originalbuttonvue_type_script_lang_js_ = ({
  name: 'MiniOriginalButton',
  // 此时对props进行校验，值接收string类型的type值
  props: {
    type: {
      type: String,
      // 设置默认值：如果不传值，那么使用default
      default: 'defalut'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    // 显示所有插槽
    // console.log(this.$slots)
  },
  methods: {
    // 定义一个点击事件，这个点击事件的作用是调用父组件中的点击事件，并且回调
    handleClick (e) {
      this.$emit('click', e)
    }
  }
});

;// CONCATENATED MODULE: ./packages/button/lib/src/originalbutton.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_originalbuttonvue_type_script_lang_js_ = (originalbuttonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/lib/src/originalbutton.vue?vue&type=style&index=0&id=e8f7942e&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/button/lib/src/originalbutton.vue?vue&type=style&index=0&id=e8f7942e&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/button/lib/src/originalbutton.vue



;


/* normalize component */

var component = normalizeComponent(
  src_originalbuttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e8f7942e",
  null
  
)

/* harmony default export */ var originalbutton = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/lib/src/beautybutton.vue?vue&type=template&id=05f51ba4&
var beautybuttonvue_type_template_id_05f51ba4_render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',{staticClass:"mini-beauty-button",class:[`mini-beauty-button--${_vm.type}`,{
  'isPlain':_vm.plain,
  'isRound': _vm.round,
  'isCircle':_vm.circle,
  'isDisabled':_vm.disabled
}],attrs:{"disabled":_vm.disabled},on:{"click":_vm.clickHandle}},[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])
}
var beautybuttonvue_type_template_id_05f51ba4_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/lib/src/beautybutton.vue?vue&type=script&lang=js&

/* harmony default export */ var beautybuttonvue_type_script_lang_js_ = ({
    name:'MiniBeautyButton',
    // 子组件要接受父组件传来的属性值
    // 需要封装一个通用的组件库，对props进行一个约束，props进行校验
    props:{
        type:{
            //样式
            //指定数据类型
            type: String,
            default:'default'
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle:{
            type: Boolean,
            default: false
        },
        icon:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        }
        
    },
    methods: {
        clickHandle(e){
            // 子传父
            this.$emit('click',e)
        }
    }
    
});

;// CONCATENATED MODULE: ./packages/button/lib/src/beautybutton.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_beautybuttonvue_type_script_lang_js_ = (beautybuttonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/lib/src/beautybutton.vue?vue&type=style&index=0&id=05f51ba4&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/button/lib/src/beautybutton.vue?vue&type=style&index=0&id=05f51ba4&prod&lang=scss&

;// CONCATENATED MODULE: ./packages/button/lib/src/beautybutton.vue



;


/* normalize component */

var beautybutton_component = normalizeComponent(
  src_beautybuttonvue_type_script_lang_js_,
  beautybuttonvue_type_template_id_05f51ba4_render,
  beautybuttonvue_type_template_id_05f51ba4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var beautybutton = (beautybutton_component.exports);
;// CONCATENATED MODULE: ./packages/button/lib/index.js





originalbutton.install = function(Vue){
    Vue.component(originalbutton.name, originalbutton)
};

beautybutton.install = function(Vue){
    Vue.component(beautybutton.name, beautybutton)
};


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/input/lib/src/originalinput.vue?vue&type=template&id=0ef5effb&scoped=true&
var originalinputvue_type_template_id_0ef5effb_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"mini-original-input-wrapper",class:{'mini-original-input-suffix': _vm.clearable}},[_c('input',{staticClass:"mini-original-input-inner",class:{'is-disabled':_vm.disabled},attrs:{"placeholder":_vm.placeholder,"type":_vm.type,"name":_vm.name,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.handleInput}}),(_vm.clearable)?_c('span',{staticClass:"mini-original-input-suffix",on:{"click":_vm.clear}},[_c('i',{staticClass:"mini-icon-clear"})]):_vm._e()])
}
var originalinputvue_type_template_id_0ef5effb_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/input/lib/src/originalinput.vue?vue&type=script&lang=js&

/* harmony default export */ var originalinputvue_type_script_lang_js_ = ({
    name:"MiniOriginalInput",
    props:{
       placeholder:{
            type: String,
            default:''
       }, 
       type:{
            type:String,
            default:"text"
       },
       name:{
            type:String,
            default:''
       },
       disabled:{
            type:Boolean,
            default: false
       },
       value:{
            type:String,
            default:''
       },
       clearable:{
            type:Boolean,
            default:false
       }
    },
    methods:{
        handleInput(e){
            this.$emit('input', e.target.value)
        },
        clear(){
          console.log('点击了')
            this.$emit('input','')
        }
    }
});

;// CONCATENATED MODULE: ./packages/input/lib/src/originalinput.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_originalinputvue_type_script_lang_js_ = (originalinputvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/input/lib/src/originalinput.vue?vue&type=style&index=0&id=0ef5effb&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/input/lib/src/originalinput.vue?vue&type=style&index=0&id=0ef5effb&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./packages/input/lib/src/originalinput.vue



;


/* normalize component */

var originalinput_component = normalizeComponent(
  src_originalinputvue_type_script_lang_js_,
  originalinputvue_type_template_id_0ef5effb_scoped_true_render,
  originalinputvue_type_template_id_0ef5effb_scoped_true_staticRenderFns,
  false,
  null,
  "0ef5effb",
  null
  
)

/* harmony default export */ var originalinput = (originalinput_component.exports);
;// CONCATENATED MODULE: ./packages/input/lib/index.js



originalinput.install = function(Vue){
    Vue.component(originalinput.name, originalinput)
};

/* harmony default export */ var lib = (originalinput);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/dialog/lib/src/dialog.vue?vue&type=template&id=8f3e47e0&scoped=true&
var dialogvue_type_template_id_8f3e47e0_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":"dialog-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"mini-dialog-wrapper",on:{"click":function($event){if($event.target !== $event.currentTarget)return null;return _vm.handleClose.apply(null, arguments)}}},[_c('div',{staticClass:"mini-dialog",style:({width: _vm.width, marginTop:_vm.top})},[_c('div',{staticClass:"mini-dialog-header"},[_vm._t("title",function(){return [_c('span',{staticClass:"mini-dialog-title"},[_vm._v(_vm._s(_vm.title))])]}),_c('button',{staticClass:"mini-dialog-headerbtn"},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"mini-icon-guanbi",on:{"click":function($event){if($event.target !== $event.currentTarget)return null;return _vm.handleClose.apply(null, arguments)}}})])],2),_c('div',{staticClass:"mini-dialog-body"},[_vm._t("default",function(){return [_c('span',[_vm._v("这是一段信息")])]})],2),_c('div',{staticClass:"mini-dialog-footer"},[(_vm.$slots.footer)?_vm._t("footer",function(){return [_c('mini-original-button',[_vm._v("取消")]),_c('mini-original-button',{attrs:{"type":"success"}},[_vm._v("确定")])]}):_vm._e()],2)])])])
}
var dialogvue_type_template_id_8f3e47e0_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/dialog/lib/src/dialog.vue?vue&type=script&lang=js&

/* harmony default export */ var dialogvue_type_script_lang_js_ = ({
    name:"MiniDialog",
    props:{
        title:{
            type: String,
            default: '提示'
        },
        width:{
            type: String,
            default: '50%'
        },
        top:{
            type: String,
            default: '20px'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    // created(){
    //     console.log(this.$slots.footer)
    // }
    methods: {
        handleClose(){
            this.$emit('update:visible',false)
        }
    }
});

;// CONCATENATED MODULE: ./packages/dialog/lib/src/dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_dialogvue_type_script_lang_js_ = (dialogvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/dialog/lib/src/dialog.vue?vue&type=style&index=0&id=8f3e47e0&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/dialog/lib/src/dialog.vue?vue&type=style&index=0&id=8f3e47e0&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./packages/dialog/lib/src/dialog.vue



;


/* normalize component */

var dialog_component = normalizeComponent(
  src_dialogvue_type_script_lang_js_,
  dialogvue_type_template_id_8f3e47e0_scoped_true_render,
  dialogvue_type_template_id_8f3e47e0_scoped_true_staticRenderFns,
  false,
  null,
  "8f3e47e0",
  null
  
)

/* harmony default export */ var dialog = (dialog_component.exports);
;// CONCATENATED MODULE: ./packages/dialog/lib/index.js


dialog.install = function(Vue){
    Vue.component(dialog.name, dialog)
}

/* harmony default export */ var dialog_lib = (dialog);
;// CONCATENATED MODULE: ./packages/index.js




//组件列表
const components = [
    originalbutton,
    beautybutton,
    lib,
    dialog_lib
];

//定义install方法，接受Vue作为参数
//如果使用use注册插件，那么所有组件都会被住粗
const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};
 
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

//这里export default是提供给全局引入使用
/* harmony default export */ var packages_0 = ({
  install,
  MiniOriginalButton: originalbutton,
  MiniBeautyButton: beautybutton,
  MiniOriginalInput: lib,
  MiniDialog: dialog_lib
});

//这里是提供给按需引入

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=mini_ui.umd.js.map