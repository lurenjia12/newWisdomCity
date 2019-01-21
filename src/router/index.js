import Vue from 'vue'
import Router from 'vue-router'
import thePartyService from '../views/thePartyService.vue'
import windowsServer from '@/views/windowsServer'
import navMenu from '@/views/navIndex'
import inteService from '@/views/inteService'

Vue.use(Router)
const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Main',
    //   component: () =>
    //     import(`@/views/Main.vue`),
    //   children: [
    //   ]
    // },
    {
      path: '/',
      component: navMenu,
      children: [
        {
          path: '/ps',
          component: thePartyService
        },
        {
          path: '/ws',
          component: windowsServer
        },
        {
          path: '/is',
          component: inteService
        }
      ]
    }


  ]
})

router.beforeEach((to, from, next) => {
  next()
})



export default router
