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
          @click="goWelcome">
      </div>

      <el-menu-item
        v-if="!isLogged"
        index="/login">
        Login
      </el-menu-item>

      <p
        v-if="isLogged"
        class="logout">{{ userLogged.user }}</p>
      <p
        v-if="isLogged"
        class="logout">{{ userLogged.pass }}</p>

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
        class="logout"
        href="#"
        @click.prevent="_logout">Logout</a>

    </el-menu>
  </header>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'AppHeader',
  data () {
    return {
      activeLink: ''
    }
  },
  computed: {
    ...mapState({
      userLogged: state => state.auth.user,
      isLogged: state => state.auth.logged
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
      this.$router.push({name: 'Login'})
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.activeLink = key
    },
    goWelcome () {
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
    .logo:focus {
      outline: none;
    }
    .logout{
      align-self: center;
      margin: 0 20px 0 50px;
      text-decoration: none;
      font-size: 13px;
      color: white;
    }
  }
</style>
