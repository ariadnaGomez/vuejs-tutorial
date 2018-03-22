<template>
  <div class="form">
    <el-form
      ref="form"
      :model="form"
      label-width="120px">
      <el-row :gutter="20">
        <custom-input
          label="title"/>
        <custom-input
          label="body"/>
      </el-row>
    </el-form>
    <el-button @click="clickTheButton()">Click me!</el-button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

import CustomInput from './CustomInput.vue'
export default {
  name: 'Form',
  components: {CustomInput},
  data () {
    return {
      form: {}
    }
  },
  computed: {
    ...mapGetters(['formErrors'])
  },
  created () {
    this.resetForm()
  },
  methods: {
    ...mapMutations(['addPost', 'resetForm']),
    clickTheButton () {
      if (this.formErrors.length) {
        let message = '<p>The following fields must be reviewed: </p>'
        this.formErrors.forEach(error => { message += `<p>${error}</p>` })
        this.$message({
          showClose: true,
          type: 'warning',
          dangerouslyUseHTMLString: true,
          message: message
        })
        return
      }
      this.addPost(this.$store.state.form)
    }
  }

}
</script>

<style lang="scss" scoped>
    .form  {

    /deep/ .blabla {

     label {
        color: red !important;
    }
  }
    .el-form-item {
      /deep/ .el-form-item__content {
        margin-left: 0;
      }
    }
  }

</style>
