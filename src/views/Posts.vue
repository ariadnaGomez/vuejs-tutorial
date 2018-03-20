<template>
  <div class="posts">
    <pre>{{ itemsArray }}</pre>
    <el-button @click="addCheckbox">Añadir checkbox</el-button>
    <checkbox-item
      v-for="item in itemsArray"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :is-active="item.isActive"
      class="test"
      @checkbox-clicked="saveItem"
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
  data () {
    return {
      itemsArray: [
        {
          id: 0,
          isActive: false,
          title: 'titulo0'
        },
        {
          id: 1,
          isActive: false,
          title: 'titulo1'
        },
        {
          id: 2,
          isActive: false,
          title: 'titulo2'
        },
        {
          id: 3,
          isActive: false,
          title: 'titulo3'
        },
        {
          id: 4,
          isActive: false,
          title: 'titulo4'
        }],
      index: 5
    }
  },
  computed: {
    ...mapGetters(['getIsActive', 'getCheckboxListAux'])
  },
  created: function () {
    if (this.getCheckboxListAux.length > 0) {
      this.itemsArray = this.getCheckboxListAux
    }
    for (var i = 0; i < this.itemsArray.length; i += 1) {
      this.itemsArray[i].isActive = this.getIsActive(i)
    }
  },
  destroyed: function () {
    this.setCheckboxAux(this.itemsArray)
  },
  methods: {
    ...mapMutations(['addNewCheckbox', 'setCheckboxAux']),
    saveItem (checkboxItem) {
      this.addNewCheckbox(checkboxItem)
    },
    goCheckboxList () {
      this.$router.push('CheckboxList')
    },
    addCheckbox () {
      const newItem = {
        id: this.index,
        isActive: false,
        title: 'titulo' + this.index
      }
      this.itemsArray.push(newItem)
      this.index++
    }
  }
}

</script>
<style></style>
