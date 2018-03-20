import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/views/Posts'
import CheckboxList from '@/views/CheckboxList'
import { Loading } from 'element-ui'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld
      }
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/checkboxList',
      name: 'CheckboxList',
      component: CheckboxList
    }
  ]
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
