// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from '@/store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.footer) {
    // console.log('asfasdfsad' + store.state.user.name)
    store.commit(to.meta.footer)
    next()
    // setTimeout(() => {
    //   next((vm) => {
    //     vm.user = {
    //       name: 'Arcas',
    //       developer: true,
    //       enterprise: 'Sopra'
    //     }
    //   })
    // }, 2000)
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
