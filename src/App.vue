<template>
  <div id="app">
    <!-- <div><img src="./assets/logo.png"></div> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
   data() {
      return {
       
      };
    },
    mounted:function(){
      

    },
    methods:{

    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
