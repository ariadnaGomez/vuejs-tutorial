<template>
  <div class="posts">
    <pre>{{ itemsArray }}</pre>
    <checkbox-item
      v-for="item in itemsArray"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :is-active="item.isActive"
      class="test"
      @checkbox-clicked="saveItem"
    />
    <el-button>Ver listado de activos</el-button>
  </div>
</template>

<script>
import CheckboxItem from '../components/checkbox-item.vue'
export default {
  name: 'Posts',
  components: {CheckboxItem},
  data () {
    return {
      itemsArray: [
        {
          id: 1,
          isActive: false,
          title: 'titulo1'
        },
        {
          id: 2,
          isActive: false,
          title: 'titulo2'
        }]
    }
  },
  methods: {
    saveItem ({id, isActive}) {
      const index = this.itemsArray.findIndex(itemarray => itemarray.id === id)
      console.log(this.itemsArray)
      this.itemsArray[index].isActive = isActive
      console.log(this.itemsArray)
    }
  }
}

</script>
<style></style>
