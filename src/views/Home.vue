<template>
  <!--<div class="container">-->
    <!--&lt;!&ndash;<p>Esto es la Home</p>&ndash;&gt;-->
    <!--<AppHeader/>-->
    <!--<router-view>-->
    <!--</router-view>-->
    <!--<AppFooter :user="user"/>-->
  <!--</div>-->
  <el-container>
  <el-header><AppHeader /></el-header>
  <el-main><router-view></router-view></el-main>
  <el-footer><AppFooter :user="user"/></el-footer>
  </el-container>
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
  name: 'home',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
  .el-container{
    .el-header{
      padding: 0px 0px;
    }
    .el-main{
    }
    .el-footer{
      padding: 0px;
    }
  }
</style>
