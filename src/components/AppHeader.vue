<template>
  <header class="header">
    <el-menu class="navMenu"
             :default-active="activeIndex"
             mode="horizontal"
             @select="handleSelect"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             router="true"
    >
      <div class="logo">
        <router-link :to="{ name: 'Home'}">
          <img class="logoImg" src="@/assets/Teletubbies_Logo.png">
        </router-link>
      </div>
      <el-menu-item index="/home/FirstPage">
        First Page
      </el-menu-item>
      <el-menu-item index="/home/SecondPage">
        Second Page
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 2;
    .navMenu {
      display: flex;
    }
    .logoImg {
      height: 40px;
      width: 80px;
    }
    .logo {
      width: 100px;
      flex: auto;
      align-self: center;
      margin-left: 25px;
    }
    .logo:focus {
      outline: none;
    }
  }
</style>
