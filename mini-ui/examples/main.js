import Vue from 'vue'
import App from './App.vue'
//全局引入
// import MiniUi from '../packages'
//按需要引入
import { MiniOriginalButton, MiniBeautyButton} from '../packages'


// import { MiniOriginalButton, MiniBeautyButton} from '../packages/button/lib/index.js'
// import MiniOriginalInput from '../packages/input/lib/index.js'
// import MiniDialog from '../packages/dialog/lib/index.js'

Vue.config.productionTip = false
// Vue.use(MiniUi);

Vue.use(MiniOriginalButton)
Vue.use(MiniBeautyButton)
// Vue.use(MiniOriginalInput)
// Vue.use(MiniDialog)

new Vue({
  render: h => h(App),
}).$mount('#app')
