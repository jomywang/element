<template>
<div>
  <div style="height:300px">
  <el-table ref="multipleTable"
    :data="tableData3"
    border
    style="width: 100%"
    height="100%" 
    :row-class-name="tableRowClassName"
    :default-sort = "{prop: 'id'}"
  @selection-change="handleSelectionChange">
    
    <template v-for="(item,i) in tableTile"> 

      <el-table-column v-if="msg[i]=='id'"
        :property="msg[i]"
        :label="item"
        sortable
        width="100">
      </el-table-column>
      <el-table-column v-else
        :property="msg[i]"
        :label="item"
        width="150">
      </el-table-column>

    </template>

    <template>
      <el-table-column
      fixed
      type="selection"
      width="55">
    </el-table-column>
    </template>

    <el-table-column fixed="right" prop="tag" label="标签" width="100" :filters="[{ text: '国内', value: '国内' }, { text: '国外', value: '国外' }]" :filter-method="filterTag" filter-placement="bottom-end">
      <template scope="scope">
        <el-tag :type="scope.row.tag === '国内' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>


    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template scope="scope">
        
        <el-button @click="paid" type="success" size="small">已付</el-button>
        <el-button @click="edit" type="primary"  size="small">编辑</el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData3)"
          
          size="small">
          移除
        </el-button>

      </template>
    </el-table-column>

  </el-table>
  </div>
    <div style="margin-top: 20px">   
    <el-button @click="toggleSelection(tableData3)">全选</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button  @click="delRow()">删除</el-button>
  </div>

</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [],
        msg:[],//存放表格标题属性
        tableTile:[],
        multipleSelection: []
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
       tableRowClassName(row, index) {

        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      deleteRow(index, rows) {
        console.log(rows[index].id)
        rows.splice(index, 1);

      },
      paid(){
        console.log(1)

      },
      edit(){
        console.log(2)
      },
      toggleSelection(rows) {

        if (rows) {
          rows.forEach((row) => {
            this.$refs.multipleTable.toggleRowSelection(row, 1);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      delRow(){

        var arr = this.tableData3;
        var delArr = this.multipleSelection;
        if (delArr.length === arr.length) {
          for(var s in arr){
            console.log(arr[s])
          }
          arr.splice(0,arr.length)
        }else{
          for(var i in arr){
              for(var n in delArr){
                  if (arr[i].id === delArr[n].id) {
                    console.log(delArr[n].id)
                    arr.splice(i,1)
                  }
              }
          }
        }

      },
      filterTag(value, row) {
        return row.tag === value;
      }
    }
  }
</script>
<style scope>
.el-table{height: 100%;}
table,.el-table th>.cell{text-align: center;}
.el-table__empty-text{left: 10%}
/*.el-table .info-row {background: #c9e5f5; } 
.el-table .positive-row {background: #e2f0e4; } */
</style>