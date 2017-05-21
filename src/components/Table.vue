<template>
  <el-table 
    :data="tableData3"
    border
    style="width: 100%"
    height="300">
  
    <template v-for="(item,i) in tableTile">
   
       <el-table-column v-if="i==0"
       fixed
        :property="msg[i]"
        :label="item"
        width="150">
      </el-table-column>
   
      <el-table-column v-else
        :property="msg[i]"
        :label="item"
        width="150">
      </el-table-column>

    </template>
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
              // if (i != "label") {
                this.msg.push(i);
              //};
             }
        })       
      }

    }
  }
</script>