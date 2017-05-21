<template>
<menu>
   <el-row class="tac" >
	<el-col >  
	    <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" >

		    <!-- nav -->
		    <template v-for="(item,indexs) in navList">

			    <!-- hasSubNav -->
			    <template v-if="item.isSubNav">
			      <el-submenu :index="indexs + ''">

			        <template slot="title"><i :class="item.classname"></i>{{item.name}}</template>

				       	
						  <!-- subnav2 -->
						    <template v-for="(item,index) in item.subNav">  
						    <!-- hasSubNav -->
					           <template v-if="item.isSubNav">
						            <el-submenu :index="indexs+'-' + index">
							          <template slot="title">{{item.name}}</template>
							          
							          <!-- subnav3 -->
							          <template v-for="(item,i) in item.subNav">
								          <el-menu-item :index="indexs+'-' + index +'-' + i" >{{item.name}}</el-menu-item>
							          </template>
							          <!-- subnav3 end-->

							        </el-submenu>				          	
					          </template>
						    <!-- hasSubNav end-->

				            <!-- noSubNav -->	
				            <el-menu-item  v-else :index="indexs+'-' + index">{{item.name}}</el-menu-item> 
				            <!-- noSubNav end-->

					      </template>
					      <!-- subnav2 end-->
					   

			      </el-submenu>
			    </template>
			     <!-- hasSubNav end-->

			     <!-- noSubNav -->
			      <template v-else>
				      <el-menu-item :index="indexs + ''"><i :class="item.classname"></i>{{item.name}}</el-menu-item>
			      </template>
			     <!-- noSubNav end-->

		    </template>
		    <!-- nav end-->

	    </el-menu>
  </el-col>
</el-row>
</menu>
</template>

<script>
export default {
  name: 'nav',
  data () { 
    return {
    	navList:[
	    	{
	    		name:"在职导师",
	    		classname:"el-icon-setting",
	    		isSubNav:false
	    	},
	    	{
	    		name:"申请导师",
	    		classname:"el-icon-date",
	    		isSubNav:false
	    	},
	    	{
	    		name:"注册管理",
	    		classname:"el-icon-setting",
	    		isSubNav:false
	    	},
	    	{
	    		name:"咨询用户管理",
	    		classname:"el-icon-menu",
	    		isSubNav:true,
	    		subNav:[
		    		{
			    		name:'网站来源',
			    		isSubNav:false
			    	},
			    	{
			    		name:'市场来源',
			    		isSubNav:true,
			    		subNav:[
				    		{
				    			name:'选项0-2-1'
				    		}
			    		]

			    	}
	    		]
	    	},
	    	{
	    		name:"订单管理",
	    		classname:"el-icon-picture",
	    		isSubNav:true,
	    		subNav:[
		    		{
			    		name:'所有订单'
			    	},
		    		{
			    		name:'待认领订单'
			    	},
		    		{
			    		name:'已认领订单'
			    	},
		    		{
			    		name:'定金订单'
			    	}
	    		]
	    	},
	    	{
	    		name:"课程管理",
	    		classname:"el-icon-share",
	    		isSubNav:true,
	    		subNav:[
		    		{
			    		name:'课程管理'
			    	},
		    		{
			    		name:'课程阶段'
			    	}
	    		]
	    	},
	    	{
	    		name:"收支管理",
	    		classname:"el-icon-setting",
	    		isSubNav:true,
	    		subNav:[
		    		{
			    		name:'收入管理'
			    	},
		    		{
			    		name:'支付管理'
			    	},
		    		{
			    		name:'退款记录'
			    	}
	    		]
	    	},
	    	{
	    		name:"成果展示",
	    		classname:"el-icon-setting",
	    		isSubNav:false
	    	},
	    	{
	    		name:"我的资料",
	    		classname:"el-icon-setting",
	    		isSubNav:false
	    	},
	    	{
	    		name:"Email Marketing",
	    		classname:"el-icon-setting",
	    		isSubNav:true,
	    		subNav:[
		    		{
			    		name:'邮件模板'
			    	},
		    		{
			    		name:'内推申请'
			    	},
		    		{
			    		name:'福利上传'
			    	},
		    		{
			    		name:'文件管理'
			    	}
	    		]
	    	},
	    	{
	    		name:"文章库",
	    		classname:"el-icon-setting",
	    		isSubNav:false
	    	},
	    	{
	    		name:"优惠券管理",
	    		classname:"el-icon-setting",
	    		isSubNav:false
	    	},
	    	{
	    		name:"课程资料",
	    		classname:"el-icon-setting",
	    		isSubNav:false
	    	}

    	]
      
    }
  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
