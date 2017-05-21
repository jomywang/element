<template>
  <el-input v-on:change="changeSelect"  v-model="value" placeholder="请输入内容"></el-input>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  props:['name'],
  methods:{
      changeSelect(){
      	console.log(1)
         var valSelect = {};
         valSelect.name = this.name;
         valSelect.value = this.value;      
         this.$emit('selectVal',valSelect);
      }
  }
}
</script>