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
      	        var url = 'http://192.168.97.252:8080/rest/do?service=menuListService&version=1.0&data={}&time=123456&salt=456&test=yes&token=123456';
      	        var base = new Base64(); 
      	        
				 this.$http.get(url).then(res =>{
		        	this.navList = res.body.data;
		        	var result2 = base.decode(this.navList);  
				    console.log(result2);
		        	this.setTitle();
		        })

				function Base64() {  
   
    // private property  
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
   
    // public method for encoding  
    this.encode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = _utf8_encode(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
        }  
        return output;  
    }  
   
    // public method for decoding  
    this.decode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = _keyStr.indexOf(input.charAt(i++));  
            enc2 = _keyStr.indexOf(input.charAt(i++));  
            enc3 = _keyStr.indexOf(input.charAt(i++));  
            enc4 = _keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = _utf8_decode(output);  
        return output;  
    }  
   
    // private method for UTF-8 encoding  
    var _utf8_encode = function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  
   
        }  
        return utftext;  
    }  
   
    // private method for UTF-8 decoding  
    var _utf8_decode = function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = 0;var c1 = 0; var c2 = 0; var c3 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
}   
		        

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
