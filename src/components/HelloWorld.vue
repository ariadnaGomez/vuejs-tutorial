<template>
  <div class="hello">
    {{ msg }}
    <p>
      <router-link to="menu">Go to Menu</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeRouteEnter (to, from, next) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((posts) => {
        next(vm => vm.savePosts(posts))
      })
  }
}
</script>

<style lang="scss" scoped>

  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: $color-green;
  }
</style>
