<template>
  <header class="header">
    <el-menu
      :default-active="activeLink"
      class="navMenu"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      @select="handleSelect"
    >
      <div class="logo">
        <img
          class="logoImg"
          src="@/assets/logo.png"
          @click="restartIndex">
      </div>

      <el-menu-item
        v-if="!isLogged"
        index="/login">
        Login
      </el-menu-item>

      <el-menu-item
        v-if="isLogged"
        index="/posts">
        Posts Page
      </el-menu-item>
      <el-menu-item
        v-if="isLogged"
        index="/hello-word">
        Form Page
      </el-menu-item>
      <a
        v-if="isLogged"
        href="#"
        @click.prevent="_logout">Logout</a>

    </el-menu>
  </header>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'AppHeader',
  data () {
    return {
      activeLink: '',
      flag: true
    }
  },
  computed: {
    ...mapGetters({
      isLogged: 'getLogged'
    })
  },
  created: function () {
    this.activeLink = this.$route.fullPath
  },
  methods: {
    ...mapActions(['logout']),
    _logout () {
      console.log('Entra en la función de logout')
      this.logout()
      this.$router.push({name: 'Welcome'})
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.activeLink = key
    },
    restartIndex () {
      this.$router.push('/')
      this.activeLink = ''
    }
  }
}
</script>

<style lang="scss"
       scoped>
  .header {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 2;
    .navMenu {
      display: flex;
    }
    .logo {
      justify-content: start;
      width: 100px;
      display: flex;
      flex: auto;
      align-self: center;
      margin-left: 25px;
      .logoImg {
        height: 40px;
        width: 80px;
      }
      .logoImg:hover{
          cursor: pointer;
        }
    }
    .buttons{
      display: flex;
    }
    .logo:focus {
      outline: none;
    }
  }
</style>
