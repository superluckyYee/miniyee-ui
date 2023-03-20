<template>
  <div class="mini-original-input-wrapper" :class="{'mini-original-input-suffix': clearable}">
    <input class="mini-original-input-inner" 
    :class="{'is-disabled':disabled}"
    :placeholder="placeholder"
    :type="type"
    :name="name"
    :disabled="disabled"
    :value="value"
    @input="handleInput">
    <span class="mini-original-input-suffix" v-if="clearable" @click="clear">
        <i class="mini-icon-clear"></i>
    </span>
  </div>
</template>

<script>
export default {
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
}
</script>

<style lang="scss" scoped>
.mini-original-input-wrapper{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .mini-original-input-inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
      
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
    &:hover {
        border: 2px solid lightgrey;
        box-shadow: 0px 0px 20px -17px;
      }

    &:focus{
        outline: none;
        border-color: #409eff;
      }
    &:active {
          transform: scale(0.98);
    }
    
  }
.mini-original-input-suffix{
    .mini-original-input-inner{
      padding-right: 40px;
    }
    .mini-original-input-suffix{
      
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
    i{
        color: #c0c4cc;
        font-size: 30px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    }
}



</style>