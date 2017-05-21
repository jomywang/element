<template>
  
      <el-select v-on:change="changeSelect" v-model="value" placeholder="请选择" :name="name">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

</template>

<script>
  export default {
    data() {
      return {
        options: [],
        value: ''

      }
    },
    props: ['name'],
    mounted:function(){
      this.getView();
    },
    methods:{
      getView(){
        var url = './static/js/selectField.js';
        this.$http.get(url).then(res =>{
            var list = [];
            var listArr = res.body.data[this.name];
            for( var i in listArr) {
              list[i] = {
                value: listArr[i],
                label: listArr[i]
              }
            }
            this.options = list;
        }) 

      },
      changeSelect(){
         var valSelect = {};
         valSelect.name = this.name;
         valSelect.value = this.value;      
         this.$emit('selectVal',valSelect);
      }

    }
  }
</script>
<style>
</style>