<template>

    <el-date-picker  v-on:change="changeSelect"
      v-model="value"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1" :name="name">
    </el-date-picker>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value: '',
      };
    },
    props:['name'],
    mounted:function(){
      

    },
    methods:{

      changeSelect(){
        
         var valSelect = {};
         valSelect.name = this.name;
         valSelect.value = this.value;      
         this.$emit('selectVal',valSelect);
      }

    }
  };
</script>
<style scope>
.el-date-editor.el-input{width:100% !important;}
</style>