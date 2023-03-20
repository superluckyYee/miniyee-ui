<template>
    <!--由于plain类型是布尔值，所以在类型中我们使用对象的形式来控制样式  -->
  <button class="mini-beauty-button" :class="[`mini-beauty-button--${type}`,{
    'isPlain':plain,
    'isRound': round,
    'isCircle':circle,
    'isDisabled':disabled
  }]" @click="clickHandle" :disabled='disabled'>
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何内容，就不需要传入span 当我们没有传入插槽的时候就显示 -->
    <!-- 可以使用$slots -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
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
    
}
</script>

<style lang="scss">

  //按钮类型type控制
  .mini-beauty-button{
    --bg: #ffffff;
    --text-color: #080606;
    position: relative;
    
    border: none;
    background: var(--bg);
    color: var(--text-color);
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #000000 0px 7px 2px, #000 0px 8px 5px;
    &:hover {
        opacity: 1;
    }
    &:active {
        top: 4px;
        box-shadow: #444342 0px 3px 2px,#000 0px 3px 5px;
    }
  }
  .mini-beauty-button--primary{
    --bg: #4c84ec;
    --text-color: #ffffff;
    position: relative;
    
    border: none;
    background: var(--bg);
    color: var(--text-color);
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #256aaf 0px 7px 2px, #000 0px 8px 5px;
    &:hover {
        opacity: 1;
    }
    &:active {
        top: 4px;
        box-shadow: #4c84ec 0px 3px 2px,#000 0px 3px 5px;
    }
  }
  .mini-beauty-button--success{
    --bg: #46e974;
    --text-color: #ffffff;
    position: relative;
    
    border: none;
    background: var(--bg);
    color: var(--text-color);
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #19a262 0px 7px 2px, #000 0px 8px 5px;
    &:hover {
        opacity: 1;
    }
    &:active {
        top: 4px;
        box-shadow: #19a262 0px 3px 2px,#000 0px 3px 5px;
    }
  }
  .mini-beauty-button--info{
    --bg: #797b80;
    --text-color: #ffffff;
    position: relative;
    border: none;
    background: var(--bg);
    color: var(--text-color);
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #60676e 0px 7px 2px, #000 0px 8px 5px;
    &:hover {
        opacity: 1;
    }
    &:active {
        top: 4px;
        box-shadow: #60676e 0px 3px 2px,#000 0px 3px 5px;
    }
  }
  .mini-beauty-button--warning{
    --bg: #f3be4e;
    --text-color: #ffffff;
    position: relative;
    border: none;
    background: var(--bg);
    color: var(--text-color);
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #d4a218 0px 7px 2px, #000 0px 8px 5px;
    &:hover {
        opacity: 1;
    }
    &:active {
        top: 4px;
        box-shadow: #d4a218 0px 3px 2px,#000 0px 3px 5px;
    }
  }
  .mini-beauty-button--danger{
    --bg: #e74c3c;
    --text-color: #fff;
    position: relative;
    border: none;
    background: var(--bg);
    color: var(--text-color);
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #c0392b 0px 7px 2px, #000 0px 8px 5px;
    &:hover {
        opacity: 1;
    }
    &:active {
        top: 4px;
        box-shadow: #c0392b 0px 3px 2px,#000 0px 3px 5px;
    }
  }
  //plain控制是否是朴素按钮
  .mini-beauty-button.isPlain {
    &:hover,
    &:focus{
        background: #fff;
        border-color: #000000;
        color: #000000;
    }
  }
  .mini-beauty-button--primary.isPlain{
    &:hover,
    &:focus{
        background: #fff;
        border-color: #000000;
        color: #000000;
    }
  }
  .mini-beauty-button--success.isPlain{
    &:hover,
    &:focus{
        background: #fff;
        border-color: #000000;
        color: #000000;
    }
  }
  //还有danger的没有添加
  //round属性:设置圆角
  .mini-beauty-button.isRound{
    border-radius: 20px;
    padding: 12px 23px;
  }
  //cicle属性
  .mini-beauty-button.isCircle{
    border-radius: 50%;
    padding: 12px;
  }
  //disabled属性样式
  .mini-beauty-button.isDisabled{
        cursor: not-allowed;
    }
  //有图标之后的样式
  .mini-beauty-button [class*=mini-icon-]+span {
    margin-left: 5px;
  }

</style>

</style>