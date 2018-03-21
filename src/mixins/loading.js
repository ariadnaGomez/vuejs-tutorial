import { Loading } from 'element-ui'

let loadingPage

export default {
  methods: {
    showLoading: function () {
      loadingPage = Loading.service({
        fullscreen: true
      })
    },
    hideLoading: function () {
      loadingPage.close()
    }
  }
}
