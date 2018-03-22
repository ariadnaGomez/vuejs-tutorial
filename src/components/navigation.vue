<template>
  <el-menu
    :router="true"
    :default-active="selectedIndex"
    class="menu"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item
      :route="route.posts"
      index="1">
      Posts
    </el-menu-item>
    <el-menu-item
      :route="route.activePosts"
      index="2">
      Posts activos
    </el-menu-item>
    <el-menu-item
      :route="route.form"
      index="3"
    >
      Form
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      route: {
        posts: {name: 'Posts', index: '1'},
        activePosts: {name: 'ActivePosts', index: '2'},
        form: {name: 'Form', index: '3'}
      }
    }
  },
  computed: {
    selectedIndex () {
      const routesArray = Object.values(this.route)
      return routesArray.find((route) => route.name === this.$route.name).index
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.selectedIndex = key.toString()
    }
  }
}

</script>

<style scoped>
  .menu {
    margin-bottom: 60px;
  }
</style>
