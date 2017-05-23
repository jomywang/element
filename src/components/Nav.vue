<template>
<menu>
   <el-row class="tac" >
	<el-col >  
	    <el-menu :default-active="curNav" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router  theme="dark">

		    <!-- nav -->
		    <template v-for="(item,indexs) in navList">

			    <!-- hasSubNav -->
			    <template v-if="item.isSubNav">
			      <el-submenu :data-url="item.path" :index="'/*'+item.path">

			        
			        	<template slot="title">
				        	<router-link :to="'/*'+item.path"><i :class="item.classname"></i>{{item.name}}</router-link>
				        </template>
			        

				       	
						  <!-- subnav2 -->
						    <template v-for="(subItem,index) in item.subNav">  
						    <!-- hasSubNav -->
					           <template v-if="subItem.isSubNav">
						            <el-submenu :data-url="item.path+'/'+subItem.path" :index="'/*'+item.path+'/'+subItem.path">
							          <template slot="title">
							          <router-link :to="'/*'+item.path+'/'+subItem.path">{{subItem.name}}</router-link></template>
							          
							          <!-- subnav3 -->
							          <template v-for="(ssubItem,i) in subItem.subNav">
								          <el-menu-item :data-url="item.path+'/'+subItem.path+'/'+ssubItem.path" :index="'/*'+item.path+'/'+subItem.path+'/'+ssubItem.path">{{ssubItem.name}}</el-menu-item>
							          </template>
							          <!-- subnav3 end-->

							        </el-submenu>				          	
					          </template>
						    <!-- hasSubNav end-->

				            <!-- noSubNav -->	
				            <el-menu-item  v-else :data-url="item.path+'/'+subItem.path" :index="'/*'+item.path+'/'+subItem.path">{{subItem.name}}</el-menu-item> 
				            <!-- noSubNav end-->

					      </template>
					      <!-- subnav2 end-->
					   

			      </el-submenu>
			    </template>
			     <!-- hasSubNav end-->

			     <!-- noSubNav -->
			      <template v-else>
				      <el-menu-item  :data-url="item.path" :index="'/*'+item.path"><i :class="item.classname"></i>{{item.name}}</el-menu-item>
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
	    	navList:[],
	    	curNav:''    
    }
  },
  mounted:function(){
  	this.getNavData();
  	
  },
   methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
      getNavData(){

               var getSecretData = function(res,type){
	                 	var str = res.data,
	                       salt = res.salt,
	                       ekey = "9HkocpYLeG1LNi5m",
	                        key = $.md5(salt + ekey).substr(0,24);
	                        if (type === "decode") {
	                        	var getData = des(key, atob(str), 0, '', '', 1);	               
	                        }if (type === "encode" ) {
	                        	var getData = btoa(des(key, str, 1, 0, '', 1));
	                        };
	                        return getData;
				}
			
                var url = 'http://192.168.97.252:8080/rest/do?service=menuListService&version=1.0&data={}&time=123456&salt=456&test=yes&token=123456';
				this.$http.get(url).then(res =>{
		        	var decryptedData = getSecretData(res.body,"decode");
		        	this.navList = JSON.parse(decryptedData);                    
		        	this.setTitle();
		        }); 

      },
      setTitle(){
      	    
	    	var ipath = this.$route.path;
	    	    ipath = ipath.replace('*','');
	    	var pathArr = [];
	    	    pathArr = ipath.split('\/');
	    	pathArr.splice(0,1);
	    	this.curNav = '/*'+ pathArr[0];
    	    var d = document,	    	
    	   titleN = [],//存放当前导航信息
    	        n = 0,
    	      nav = this.navList,
    	     self = this;
	    	var forNav = function(nav){
		    	nav.forEach( (element, index)=> {		    		
		    		if (element.path === pathArr[n]) {
		    			titleN.push({
		    			 nav : element.name,
		    			 navUrl: element.path
		    			})
		    			if (element.isSubNav) {
		    				n++;
		    				forNav(element.subNav);
		    			}
		    			
		    			self.$emit('navTitle',titleN);
		    			d.title = titleN[pathArr.length-1].nav;    		
		    		}
		    	});
	    	}
	    	forNav(this.navList);


      }
    },
    watch:{
	    '$route': function() {
	    	this.setTitle();	     
	    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{text-decoration: none;color: #C4CAD1}
/*.router-link-active{color: #20a0ff}*/
.el-menu{background: transparent;}
.el-menu-item, .el-submenu__title{font-size: 16px;line-height: 30px;height: 60px;padding:15px 0;}
.el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title{color: #C4CAD1}
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{    background: #36AEEA;
    color: #FFF;}
.el-menu-item:hover{background: transparent !important;}
.el-submenu__title a{font-size: 16px !important;}
</style>
