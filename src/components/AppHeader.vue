<template>
  <header>
    <el-menu class="navMenu"
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div class="logo">
        <img class="logoImg" src="@/assets/Teletubbies_Logo.png">
      </div>
      <el-menu-item index="0">First Page</el-menu-item>
      <el-menu-item index="1">Second Page</el-menu-item>
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

<style scoped>
  .navMenu {
    display: flex;
  }

  .logoImg {
    height: 40px;
    width: 80px;
  }

  .logo{
    width: 100px;
    flex: auto;
    align-self: center;
    margin-left: 25px;
  }
</style>
