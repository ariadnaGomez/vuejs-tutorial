<template>
  <el-col
    :span="12"
    :offset="6">
    <el-form-item
      :label="label"
      class="blabla"
    >
      <el-input v-model="model"/>
    </el-form-item>
  </el-col>
</template>

<script>

export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    model: {
      get () {
        return this.$store.state[this.label]
      },
      set (value) {
        this.$store.commit(`set${this.label}`, value)
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
