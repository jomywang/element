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
                    { path: '/*crm', component: box},
                    { path: '/*crm/crm_pay_list', component: zzds},
                    { path: '/*crm/crm_maintain', component: box},
                    { path: '/*crm/crm', component: sqds},
                    { path: '/*crm/crm_intent_list', component: sqds}
                    
               ]
    }
  ]
})
