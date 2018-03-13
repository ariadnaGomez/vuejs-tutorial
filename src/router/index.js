import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
  loadingPage.close(
})

export default router
