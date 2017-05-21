import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VueResource from 'vue-resource'  
import box from '@/components/Box'
import zzds from '@/components/zzds'
import sqds from '@/components/sqds'
Vue.use(Router)
Vue.use(VueResource)


export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
      children:[
                    { path: '/', component: box},
                    { path: '/*zzds', component: zzds},
                    { path: '/*sqds', component: sqds},
                    { path: '/*zxyhgl/scly/hw', component: sqds},
                    { path: '/*zxyhgl', component: sqds}
                    
               ]
    }
  ]
})
