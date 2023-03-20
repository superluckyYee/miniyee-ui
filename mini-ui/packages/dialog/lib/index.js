import MiniDialog from './src/dialog.vue'

MiniDialog.install = function(Vue){
    Vue.component(MiniDialog.name, MiniDialog)
}

export default MiniDialog;