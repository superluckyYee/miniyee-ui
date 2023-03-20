import {MiniOriginalButton, MiniBeautyButton} from './button/lib/index.js';
import MiniOriginalInput from './input/lib/index.js'
import MiniDialog from './dialog/lib/index.js'

//组件列表
const components = [
    MiniOriginalButton,
    MiniBeautyButton,
    MiniOriginalInput,
    MiniDialog
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
export default {
  install,
  MiniOriginalButton,
  MiniBeautyButton,
  MiniOriginalInput,
  MiniDialog
};

//这里是提供给按需引入
export { 
  MiniOriginalButton,
  MiniBeautyButton,
  MiniOriginalInput,
  MiniDialog
};