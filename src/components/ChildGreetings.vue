<template>
  <div>
    <pre>{{ testObject }}</pre>
    <span>Counter: {{ counter }}</span>
  </div>
</template>

<script>
export default {
  name: 'ChildGreetings',
  props: {
    testObject: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    counter: 0,
  }),
  watch: {
    testObject: function (val) {
      this.counter = this.counter + 1
      console.log('asdddd')
      console.log(val)
    },
  },
}
</script>
