import Vue from 'vue'
import Router from 'vue-router'
import vipcenter from '@/views/vipcenter'
import pingjiaed from '@/views/pingjiaed'
import setzhanghu from '@/views/setzhanghu'
import joinus from '@/views/joinus'
import paysuccess from '@/views/paysuccess'
import payfail from '@/views/payfil'
import orders from '@/views/order'
import cart from '@/views/cart'
import globalall from '@/views/globalall'
import index from '@/views/index'
import product from '@/views/product'
import provider from '@/views/provider'
import detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
     component: globalall,
  },
   {
     path: '/index',
     component: globalall,
     children:[
      {path:'/index',component:index},
      {path:'/product',component:product},
      {path:'/provider',component:provider},
      {path:'/detail/:productID',component:detail,name:"jump1"},
    
      {path: '/vipcenter',component: vipcenter},
      {path: '/pingjiaed',component: pingjiaed},
      {path: '/setzhanghu',component: setzhanghu},
      {path: '/joinus',component: joinus},
      {path: '/paysuccess',component: paysuccess},
      {path: '/payfail',component: payfail},
      {path: '/order',component: orders},
      {path: '/cart',component: cart}
     ]
    }
  ]
})
