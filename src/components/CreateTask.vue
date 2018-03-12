<template>
  <input
    type="text"
    ref="name"
    :value="nameTodo"
    @keypress.enter="createTodo()"
    placeholder="Introduce nombre">
</template>
<script>
export default {
  props: {
    nameTodo: {
      type: String,
      default: ''
    }
  },
  methods: {
    createTodo () {
      this.$emit('setName', this.$refs.name.value)
      this.$refs.name.value = null
    }
  }
}
</script>
