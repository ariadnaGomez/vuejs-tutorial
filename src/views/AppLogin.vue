<template>
  <div class="form">
    <h1>Esto es el Login</h1>
    <el-form
      ref="form"
      :model="form"
      label-width="120px">
      <el-form-item
        label="User"
      >
        <el-input v-model="form.user"/>
      </el-form-item>
      <el-form-item
        label="Password"
      >
        <el-input v-model="form.pass"/>
      </el-form-item>
      <!--<el-form-item>-->
      <el-button
        type="primary"
        @click="_login">Submit
      </el-button>
      <!--</el-form-item>-->
    </el-form>
    <pre>{{ form }}</pre>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'AppLogin',
  data () {
    return {
      form: {
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    _login () {
      this.login(this.form)
        .then(user => {
          console.log(user)
          this.$router.push({name: 'Welcome'})
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    .el-form{
      margin-top: 80px;
      padding: 45px;
      background-color: #545c64;
      border-radius: 20px;
      /deep/ .el-form-item{
        width: 400px;
        .el-form-item__label{
          color: white;
          text-align: start;
        }
      }
    }
  }
</style>
