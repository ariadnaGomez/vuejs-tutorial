import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Card from '@/components/Card'
import Grid from '@/views/AppGridExample'
import { Loading } from 'element-ui'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    components: {
      default: HelloWorld
    }
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/cardGrid',
    name: 'CardGrid',
    component: Grid
  }]
})
let loadingPage
router.beforeEach((to, from, next) => {
  loadingPage = Loading.service({
    fullscreen: true
  })
  next()
})

router.afterEach((to, from) => {
  loadingPage.close()
})

export default router
