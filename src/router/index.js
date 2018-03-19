import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'

import SubPageOne from '@/components/SubPageOne'
import SubPageTwo from '@/components/SubPageTwo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      meta: {
        footer: 'home1'
      },
      name: 'Home',
      component: Home,
      children: [
        {path: 'firstPage', component: SubPageOne, name: 'FirstPage'},
        {path: 'secondPage', component: SubPageTwo, meta: {users: true}, name: 'SecondPage'}
      ]
    }
    // {
    //   path: 'home/firstPage',
    //   name: 'FirstPage',
    //   component: SubPageOne
    // },
    // {
    //   path: 'home/secondPage',
    //   name: 'SecondPage',
    //   component: SubPageTwo
    // }
  ]
})
