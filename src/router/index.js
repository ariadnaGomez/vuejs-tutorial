import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Posts from '@/views/Posts'
import ActivePosts from '@/views/ActivePosts'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/form',
      name: 'Form',
      components: {
        default: HelloWorld
      }
    },
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/active-posts',
      name: 'ActivePosts',
      component: ActivePosts
    }
  ]
})

export default router
