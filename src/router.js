import vue from 'vue'
import VueRouter from 'vue-router'

import login from './pages/login.vue'
import layout from './pages/layout.vue'
import index from './pages/index.vue'
import shuiwen from './pages/shuiwen/manage.vue'
import shuiwenDetail from './pages/shuiwen/details.vue'

vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'login',
      path: '/login',
      component: login
    }, 
    {
      name: 'layout',
      path: '/',
      redirect: '/index',
      component: layout,
      children: [
        {
          name: 'index',
          path: 'index',
          component: index
        },
        {
          name: 'shuiwen',
          path: 'shuiwen',
          component: shuiwen
        },
        {
          name: 'shuiwenDetail',
          path: 'shuiwenDetail',
          component: shuiwenDetail
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !window.sessionStorage.getItem('login')) next({ name: 'login' })
  else next()
})

export default router