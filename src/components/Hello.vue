<template>
<div class="flex h100">
   <!-- left nav -->
   <nav class="left-nav">
       <hy-userlogo></hy-userlogo>
       <hy-nav v-on:navTitle="setTitle"></hy-nav>
   </nav>
   <!-- left nav end -->
   <!-- right box -->
   <div class="right-box">
       <div class="top-nav-wrap">
          <div class="top-nav">
           <h3 class="title_h3" >
             
             <span class="title-span" v-for="(item,index) in titleNav">
                <template v-if="index==titleNav.length-1">
                  <b>{{item.nav}}</b>
                </template>
                <template v-else>
                 <router-link :to="'*'+item.navUrl">{{item.nav}}</router-link>
                </template>
             </span>
           </h3>
           </div>
        </div>

           <div>
                <!-- <el-collapse-transition> -->
                 <router-view></router-view>
               <!-- </el-collapse-transition>  -->          
           </div>
        
   </div>
   <!-- right box end -->
</div>
</template>

<script>
import hyNav from './Nav'
import hyBox from './Box'
import hyUserlogo from './User'

export default {
  name: 'hello',
  data () { 
    return {
      titleNav:[] 
    }
  },
  components:{hyNav,hyBox,hyUserlogo},
  methods:{
    setTitle(val){
      this.titleNav = val;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{margin: 0;padding: 0}
a{color: #2c3e50;text-decoration: none;}
a:hover{text-decoration: underline;}
body{color: #666;font-size:15px;}
html,body{height: 100%;overflow: hidden;}
.h100{height: 100%}
#app{height: 100%}
.flex{display: flex;}
.left-nav{width: 260px;background: #4C637B; }
.right-box{flex:1;background: #fff;box-sizing: border-box;padding:30px;box-sizing:border-box;overflow-x: hidden;overflow-y: scroll;}
.bgfff{background: #fff}
h3{font-size: 15px;font-weight: normal;}
.title_h3{text-indent: 10px;box-sizing: border-box;font-size: 22px; }
.title_h3,.title_h3 a{color: rgba(30,30,30,.7)}
.title-span{}
.title-span:before{content: "/";padding: 0 6px;}
.title-span:first-child:before{content: ''}
.p30{padding:30px;}
/********select******/
 .el-row {margin-bottom: 20px; &:last-child {margin-bottom: 0; } } .el-col {border-radius: 4px; } .bg-purple-dark {background: #99a9bf; } .bg-purple {background: #d3dce6; } .bg-purple-light {background: #e5e9f2; } .grid-content {border-radius: 4px; min-height: 36px; } .row-bg {padding: 10px 0; background-color: #f9fafc; } .from-group{padding-bottom: 20px} .from-group label{display: block;font-weight: bold;line-height: 30px}
 .top-nav{position: fixed; top: 0; left: 260px; right: 0; bottom: 0;  line-height: 30px; background: #E3EAF3; box-sizing: border-box; padding: 20px 28px;} 
 .top-nav-wrap,.top-nav{height: 70px;overflow: hidden;z-index: 123}

 .animate1{animation:myfirst 0.5s;position: relative;}
@keyframes myfirst
{
0%   {left: 200px;opacity: 0}
100% {left: 0;opacity: 1}
}
 </style>
