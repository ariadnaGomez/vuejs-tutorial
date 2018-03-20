<template>
  <div>
    <h1>
      Estamos en la lista de checkbox
    </h1>
    <h2
      v-for="checkbox in checkboxList"
      :key="checkbox.id">{{ checkbox.title }}</h2>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CheckboxList',
  data () {
    return {
      checkboxList: null
    }
  },
  computed: {
    ...mapGetters(['getCheckboxList'])
  },
  created: function () {
    this.checkboxList = this.getCheckboxList
  }

}
</script>

<style scoped>

</style>
