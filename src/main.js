// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from '@/store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.prototype.$http = window.axios

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
  if (to.meta.users) {
    console.log('HA ENTRADO AQUI')
    axios.get('https://randomuser.me/api/?results=100')
      .then((result) => {
        // state.users = result.data.results
        // console.log('ACTIONNNN' + state.users)
        store.commit('saveUser', result.data.results)
      })
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
