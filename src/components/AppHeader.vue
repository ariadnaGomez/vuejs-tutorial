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
      <div
        v-if="!flag"
        class="buttons">
        <el-menu-item index="/posts">
          Ingresar
        </el-menu-item>
      </div>
      <div
        v-if="flag"
        class="buttons">
        <el-menu-item index="/posts">
          Posts Page
        </el-menu-item>
        <el-menu-item index="/hello-word">
          Form Page
        </el-menu-item>
      </div>
    </el-menu>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      activeLink: '',
      flag: true
    }
  },
  created: function () {
    this.activeLink = this.$route.fullPath
  },
  methods: {
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
