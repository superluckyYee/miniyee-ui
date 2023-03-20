import MiniOriginalInput from './src/originalinput.vue'
import '../font/iconfont.css'

MiniOriginalInput.install = function(Vue){
    Vue.component(MiniOriginalInput.name, MiniOriginalInput)
};

export default MiniOriginalInput;