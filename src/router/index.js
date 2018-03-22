import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/views/Posts'
import ActivePosts from '@/views/ActivePosts'
import AppWelcome from '@/views/AppWelcome'
import AppLogin from '@/views/AppLogin'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/hello-word',
      name: 'HelloWorld',
      components: {
        default: HelloWorld
      },
      meta: { Auth: true }
    },
    {
      path: '/',
      name: 'Welcome',
      component: AppWelcome
    },
    {
      path: '/login',
      name: 'Login',
      component: AppLogin,
      meta: { Login: true }
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      meta: { Auth: true }
    },
    {
      path: '/active-posts',
      name: 'ActivePosts',
      component: ActivePosts,
      meta: { Auth: true }
    },
    {path: '*', redirect: '/'}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.Auth && !store.state.auth.logged) {
    next({path: '/login'})
  } else {
    if (store.state.auth.logged) {
      store.state.auth.user = JSON.parse(window.localStorage.getItem('_user'))
      if (to.meta.Login) {
        next({path: '/'})
      }
    }
    next()
  }
})

export default router
