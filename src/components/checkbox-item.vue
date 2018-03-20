<template>
  <div class="container">
    <p>{{ title }}</p>
    <input
      v-model="algo"
      type="checkbox"
      @click="sendEvent()">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: {
    title: {
      type: String,
      name: 'title',
      required: true
    },
    isActive: {
      type: Boolean,
      name: 'isActive',
      required: true
    },
    id: {
      type: Number,
      name: 'id',
      required: true
    }
  },
  data () {
    return {
      algo: this.isActive
    }
  },
  computed: {
    message () {
      return this.algo ? 'Esta activo' : 'No esta activo'
    }
  },
  methods: {
    sendEvent () {
      const objectToSend = {
        id: this.id,
        title: this.title,
        isActive: !this.algo
      }
      this.$emit('checkbox-clicked', objectToSend)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
