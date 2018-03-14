<template>
  <div class="hello">
    <Form/>
    <p/>
  </div>
</template>

<script>
import Form from './Form.vue'

export default {
  name: 'HelloWorld',
  components: {Form},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
