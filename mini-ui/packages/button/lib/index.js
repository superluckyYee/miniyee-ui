import MiniOriginalButton from './src/originalbutton.vue'
import MiniBeautyButton from './src/beautybutton.vue';
import '../font/iconfont.css'


MiniOriginalButton.install = function(Vue){
    Vue.component(MiniOriginalButton.name, MiniOriginalButton)
};

MiniBeautyButton.install = function(Vue){
    Vue.component(MiniBeautyButton.name, MiniBeautyButton)
};
export {
    MiniOriginalButton,
    MiniBeautyButton
};
