<template>
  <el-table 
    :data="tableData3"
    border
    style="width: 100%"
    height="100%">
  
    <template v-for="(item,i) in tableTile">   
      <el-table-column 
        :property="msg[i]"
        :label="item"
        width="150">
      </el-table-column>
    </template>

    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template scope="scope">
<!--         <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData3)"
          type="text"
          size="small">
          移除
        </el-button>
 -->        
        <el-button @click="paid" type="text" size="small">已付</el-button>
        <el-button @click="edit" type="text" size="small">编辑</el-button>

      </template>
    </el-table-column>

  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [],
        msg:[],
        tableTile:[]
      }
    },
    mounted:function () {
      this.getData();
    },
    methods:{
      getData(){
        var url = './static/js/table.js';
        this.$http.get(url).then(res =>{
          this.tableData3 = res.body.data;
          this.tableTile = res.body.title;
          var arr = this.tableData3[0]
             for(var i in arr){
                this.msg.push(i);
             }
        })       
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      paid(){
        console.log(1)

      },
      edit(){
        console.log(2)
      }

    }
  }
</script>
<style scope>
.el-table{height: 100%}
</style>