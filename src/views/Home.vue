<template>
  <div class="container">
    <!--<p>Esto es la Home</p>-->
    <AppHeader />
    <router-view></router-view>
    <AppFooter :user="user"/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  data () {
    return {
      user: this.$store.state.user
    }
  },
  // beforeRouteEnter: (to, from, next) => {
  //   console.log('Antes de entrar')
  //   setTimeout(() => {
  //     next((vm) => {
  //       vm.user = {
  //         name: 'Arcas',
  //         developer: true,
  //         enterprise: 'Sopra'
  //       }
  //     })
  //   }, 2000)
  // },
  name: 'home',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>
  /*.container{*/
    /*height: 100%;*/
  /*}*/
  /*.header {*/
    /*!*display: flex;*!*/
    /*!*margin-left: -10px;*!*/
    /*!*margin-top: -60px;*!*/
  /*}*/
  /*.footer{*/
    /*height: 75px;*/
    /*!*background-color: red;*!*/
    /*display: flex;*/
    /*align-items: flex-end;*/
  /*}*/

</style>
