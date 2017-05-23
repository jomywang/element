<template>
<div>
 
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableLength">
    </el-pagination>
  </div>
</div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        //下拉改变
       
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {

        
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage4: 2
      };
    },
    props:['tableLength']
  }
</script>
<style>
.el-pagination{text-align: right;}
</style>