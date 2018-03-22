<template>
  <div class="posts">
    <pre>{{ getCheckboxListOrdered }}</pre>
    <el-button @click="addNewCheckbox">Añadir checkbox</el-button>
    <checkbox-item
      v-for="item in getCheckboxListOrdered"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :is-active="item.isActive"
      class="test"
      @checkbox-clicked="changeIsActiveValue"
    />
    <br>
    <br>
    <el-button @click="goCheckboxList">Ver listado de checkbox</el-button>
  </div>
</template>

<script>
import CheckboxItem from '../components/checkbox-item.vue'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Posts',
  components: {CheckboxItem},
  computed: {
    ...mapGetters(['getCheckboxListOrdered'])
  },
  created: function () {
    this.initializeStore()
  },
  methods: {
    ...mapMutations(['initializeStore', 'changeIsActiveValue',
      'addNewCheckbox']),
    goCheckboxList () {
      this.$router.push('CheckboxList')
    }
  }
}

</script>
<style></style>
