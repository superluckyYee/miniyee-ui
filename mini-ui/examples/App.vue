<template>
<div>
  <mini-original-button>hello</mini-original-button>
  <mini-original-input v-model="message" clearable></mini-original-input>
  <mini-beauty-button>hello</mini-beauty-button>
  <!-- <mini-original-button @click="visible=true"></mini-original-button>
  <mini-dialog mini-dialog :visible.sync="visible">
    <ul>
      <li>hhh</li>
    </ul>
    <template v-slot:footer>
      <mini-original-button @click="visible=false">取消</mini-original-button>
      <mini-original-button type="success" @click="visible=false">确定</mini-original-button>
    </template>
  </mini-dialog> -->
</div>
  
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      message:'',
      visible:true
    }
  }
}
</script>

<style lang="scss">

</style>
