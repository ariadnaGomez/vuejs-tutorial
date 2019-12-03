<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <pre>{{ testObject }}</pre>
    <ChildGreetings
      v-for="(item, index) in testObject"
      :key="index"
      :test-object="item"/>
    <ul>
      <li>
        <a
          target="_blank"
          @click="addToTestObject"
        > Core Docs </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        > Forum </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        > Community Chat </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        > Twitter </a>
      </li> <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        > Docs for This Template </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        > vue-router </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        > vuex </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        > vue-loader </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        > awesome-vue </a>
      </li>
    </ul>
  </div>
</template>

<script>
<<<<<<< HEAD
import axios from 'axios'

=======
import ChildGreetings from './ChildGreetings.vue'
>>>>>>> test
export default {
  name: 'HelloWorld',
  components: { ChildGreetings, },
  data () {
    return {
<<<<<<< HEAD
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeRouteEnter (to, from, next) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((posts) => {
        next(vm => vm.savePosts(posts))
      })
  }
=======
      msg: 'Welcome to Your Vue.js App',
      testObject: [ { a: 1, }, { b: 2, }, ],
    }
  },
  methods: {
    addToTestObject () {
      console.log(this.testObject[0])

      this.testObject[0] = 3
    },
  },
>>>>>>> test
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
