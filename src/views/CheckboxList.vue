<template>
  <div>
    <h1>
      Estamos en la lista de checkbox
    </h1>
    <h2
      v-for="checkbox in getCheckboxListChecked"
      :key="checkbox.id">{{ checkbox.title }}</h2>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CheckboxList',
  computed: {
    ...mapGetters(['getCheckboxListChecked'])
  }
}
</script>

<style scoped>

</style>
