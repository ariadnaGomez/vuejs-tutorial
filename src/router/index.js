import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/views/Posts'
import ActivePosts from '@/views/ActivePosts'
import AppWelcome from '@/views/AppWelcome'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/hello-word',
      name: 'HelloWorld',
      components: {
        default: HelloWorld
      }
    },
    {
      path: '/',
      name: 'Welcome',
      component: AppWelcome
    },
    {
      path: '/posts',
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
