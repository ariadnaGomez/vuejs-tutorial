<template>
  <div class="form">
    <el-form
      ref="form"
      :model="form"
      label-width="120px">
      <el-row :gutter="20">
        <el-col
          :span="12"
          :offset="6">
          <el-form-item label="Activity name">
            <el-input v-model="form.name"/>
          </el-form-item>
        </el-col>
        <el-col
          :span="12"
          :offset="6">
          <el-form-item label="Activity email">
            <el-input v-model="form.mail"/>
          </el-form-item>
        </el-col>

      </el-row>
    </el-form>
    <el-button @click="clickTheButton()">Click me!</el-button>
  </div>
</template>

<script>

export default {
  name: 'Form',
  data () {
    return {
      form: {
        name: 'Bla',
        mail: 'mail@mail.com'
      }
    }
  },
  methods: {
    clickTheButton () {
      let message = '<p>The following fields must be reviewed: </p>'
      if (!this.form.name || !this.form.mail) {
        if (!this.form.name) {
          message += '<p>name</p>'
        }
        if (!this.form.mail) {
          message += '<p>email</p> '
        }
        this.$message({
          showClose: true,
          type: 'warning',
          dangerouslyUseHTMLString: true,
          message: message
        })
      }
    }
  }

}
</script>

<style lang="scss" scoped>
    .form  {

    /deep/ label {
        color: red;
    }
    .el-form-item {
      /deep/ .el-form-item__content {
        margin-left: 0;
      }
    }
  }

</style>
