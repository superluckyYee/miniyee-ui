<template>
    <transition name="dialog-fade">
        <div class="mini-dialog-wrapper" v-show="visible" @click.self="handleClose">
        <div class="mini-dialog" :style="{width: width, marginTop:top}">
        <div class="mini-dialog-header">
            <slot name="title">
                <span class="mini-dialog-title">{{title}}</span>
            </slot>
            
            <button class="mini-dialog-headerbtn">
                <i class="mini-icon-guanbi" v-show="visible" @click.self="handleClose"></i>
            </button>
        </div>
        <div class="mini-dialog-body">
            <slot>
                <span>这是一段信息</span>
            </slot>
            
        </div>
        <div class="mini-dialog-footer">
            <slot name="footer" v-if="$slots.footer">
                <mini-original-button>取消</mini-original-button>
                <mini-original-button type="success">确定</mini-original-button>
            </slot>
            
        </div>
    </div>
  </div>
    </transition>
  
</template>

<script>
export default {
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
}
</script>

<style lang="scss" scoped>
.mini-dialog-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    margin: 0;
    //尽量大就好了，这样才会覆盖在最上层
    z-index: 2000;
    background-color: rgba(0,0,0,0.5);
    .mini-dialog{
        position: relative;
        // 15vh:视口高度的15%
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        box-sizing: border-box;
        width: 30%;
        &-header{
            padding: 20px 20px 10px;
            .mini-dialog-title{
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .mini-dialog-headerbtn{
                position: absolute;
                top:20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                // font-size: 16px;
                .mini-icon-guanbi{
                    color: #909399;
                }
            }

        }
        &-body{
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            //文本自动换行
            word-break: break-all;
        }
        &-footer{
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            ::v-deep .mini-original-button:first-child{
                margin-right: 20px;
            }
        }
    }
}
.dialog-fade-enter-active {
    animation: bounce-in .5S;
}
.dialog-fade-leave-active {
    animation: bounce-in .5s reverse;
}

@keyframes bounce-in{
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>