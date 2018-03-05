<template>
  <div id="app"> <img src="./assets/logo.png">
  <router-view/> </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    hello (a, b, c) {
      return 'hello'
    },
    printHello () {
      const self = this // unnecessary
      const a = [ 1, 2, ]
      console.log(self.hello(), a)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
