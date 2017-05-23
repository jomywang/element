<template>
  <div class="animate1">
<form action="javascript:;" data-action="url" ref="submitForm">
    <el-row :gutter="20">
    <el-col :span="4">
      <div class="from-group">
        <label>国家</label>
        <hy-selectdel name="a" v-on:selectVal="getSelectVal"></hy-selectdel> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group">
        <label>行业</label>
        <hy-select name="b" v-on:selectVal="getSelectVal"></hy-select> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group">
        <label>导师分类</label>
        <hy-select name="c" v-on:selectVal="getSelectVal"></hy-select> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group">
        <label>公司</label>
        <hy-selectdel  name="d" v-on:selectVal="getSelectVal"></hy-selectdel> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group">
        <label>职位</label>
        <hy-select  name="e" v-on:selectVal="getSelectVal"></hy-select> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group">
        <label>安排情况</label>
        <hy-select  name="f" v-on:selectVal="getSelectVal"></hy-select> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group">
        <label>入职情况</label>
        <hy-select  name="g" v-on:selectVal="getSelectVal"></hy-select> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group">
        <label>level</label>
        <hy-select  name="h" v-on:selectVal="getSelectVal"></hy-select> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group">
        <label>审核状态</label>
        <hy-select name="i" v-on:selectVal="getSelectVal"></hy-select> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group">
        <label>search</label>
        <hy-inputsearch name="j" v-on:selectVal="getSelectVal"></hy-inputsearch> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group time_name" data-name="k">
        <label>开始时间</label>
        <hy-selecttime  name="k" v-on:selectVal="getSelectVal"></hy-selecttime> 
      </div>
    </el-col>
    <el-col :span="4">
      <div class="from-group time_name" data-name="l">
        <label>结束时间</label>
        <hy-selecttime name="l" v-on:selectVal="getSelectVal"></hy-selecttime> 
      </div>
    </el-col>
  </el-row>
</form>
    
    

    <div>
      <hy-tableright></hy-tableright> 
    </div>

    <!-- <hy-form1></hy-form1> -->

  </div>
</template>

<script>
import hySelect from './Select'
import hySelectdel from './Selectdel'
import hySelecttime from './Selecttime'
import hyTable from './Table'
import hyTable1 from './Table1'
import hyTableright from './Tableright'
import hyInputsearch from './Inputsearch'
import hyFormnum from './Formnum'
import hyForm1 from './Form1'

var $ = require('jquery');
  export default {
    data() {
      return {
        formArr:[]       
      }
    },
    components:{ hySelect,hySelectdel,hySelecttime,hyTable,hyTable1,hyTableright,hyInputsearch,hyFormnum,hyForm1},
    mounted:function(){
      this.setForm()

    },
    methods:{
      setForm(){
          var $timeName = $('.time_name');
          $timeName.each(function(index, el) {
            var name = $(this).data('name'),
              $input = $(this).find('input');
              $input.attr("name",name)
          });
      },
      getSelectVal(val){
          var $form = $('form'),
            url = $form.data('url'),
            data = $form.serializeArray();
            data.forEach( function(obj, i) {
              if (obj.name === val.name) {
                obj.value = val.value;               
              }
              
            });
            console.log(data)
        //  this.$http.post(url, data).then(res =>{
           
        // }) 
      }

    }

  }
</script>
<style>
</style>