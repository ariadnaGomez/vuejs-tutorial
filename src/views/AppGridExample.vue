<template>
  <div class="container">
    <h1>CardGrid Example</h1>
    <el-row>
      <el-col
        :span="4">
        Prueba
      </el-col>
      <el-col :span="20">
        <el-col
          v-for="item in array"
          :key="item.id"
          :span="6">
          <card/>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import card from '@/components/Card'
export default {
  name: 'AppGridExample',
  components: {
    card
  },
  data () {
    return {
      array: ['', '', '', '', '', '', '', '']
    }
  }
}
</script>

<style scoped>

</style>
