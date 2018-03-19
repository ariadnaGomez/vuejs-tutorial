<template>
  <div class="form">
    <h1 class="title">Formulario de contacto</h1>
    <el-form
      ref="form"
      :model="form"
      label-width="120px">
      <el-row :gutter="20">
        <el-col
          :xs="{span: 18, offset: 2}"
          :span="10"
          :offset="2">
          <el-form-item label="Nombre">
            <el-input v-model="form.firstName"/>
          </el-form-item>
        </el-col>
        <el-col
          :xs="{span: 18, offset: 2}"
          :span="10">
          <el-form-item label="Apellidos">
            <el-input v-model="form.lastName"/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col
          :xs="{span: 18, offset: 2}"
          :sm="{span: 10, offset: 2}"
          :md="{span: 6, offset: 3}">
          <el-form-item label="País">
            <el-input v-model="form.country"/>
          </el-form-item>
        </el-col>
        <el-col
            :xs="{span: 18, offset: 2}"
          :sm="{span: 10}"
          :md="6">
          <el-form-item label="Provincia">
            <el-input v-model="form.province"/>
          </el-form-item>
        </el-col>
        <el-col class="offset-0"
          :xs="{span: 18, offset: 2}"
          :sm="{span: 10, offset: 2}"
          :md="{span: 6, offset: 2}">
          <el-form-item label="Ciudad">
            <el-input v-model="form.city"/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col
          :xs="{span: 18, offset: 2}"
          :sm="{span: 10, offset: 2}"
          :md="{span: 6, offset: 6}">
          <el-form-item label="Sit. personal">
            <el-select v-model="form.personal"
                       placeholder="Situación laboral">
              <el-option label="Soltero"
                         value="Soltero"></el-option>
              <el-option label="Casado"
                         value="Casado"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col
          :xs="{span: 18, offset: 2}"
          :sm="{span: 10}"
          :md="6">
          <el-form-item label="Situ. profesional">
            <el-select v-model="form.profesional"
                       placeholder="Situación profesional">
              <el-option label="Desempleado"
                         value="Desempleado"></el-option>
              <el-option label="Empleado"
                         value="Empleado"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col
          :xs="{span: 18, offset: 2}"
          :sm="{span: 20, offset: 2}"
          :md="{span: 12, offset: 6}">
          <el-form-item label="Último empleo">
            <el-input v-model="form.city"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col
          :xs="{span: 8, offset: 2}"
          :sm="{span: 13, offset: 2}"
          :md="{span: 12, offset: 6}">
          <el-form-item label="Competencias">
            <el-checkbox-group v-model="form.type">
              <el-col
                :xs="{span: 16, offset: 8}"
                :sm="{span: 6, offset: 6}">
                <el-checkbox label="Online activities"
                           name="type"></el-checkbox>
              </el-col>
              <el-col
                :xs="{span: 16, offset: 8}"
                :sm="{span: 6, offset: 6}">
                <el-checkbox label="Promotion activities"
                           name="type"></el-checkbox>
              </el-col>
              <el-col
                :xs="{span: 16, offset: 8}"
                :sm="{span: 6, offset: 6}">
                <el-checkbox label="Offline activities"
                           name="type"></el-checkbox>
              </el-col>
              <el-col
                :xs="{span: 16, offset: 8}"
                :sm="{span: 6, offset: 6}">
                <el-checkbox label="Simple brand exposure"
                           name="type"></el-checkbox>
              </el-col>

            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button @click="clickTheButton()">Click me!</el-button>
  </div>
</template>

<script>
export default {
  name: 'sub-pabe-one',
  data () {
    return {
      form: {
        firstName: 'Bla',
        lastName: 'mail@mail.com',
        country: '',
        province: '',
        city: '',
        personal: '',
        professional: '',
        type: []
      }
    }
  },
  methods: {
    clickTheButton () {
      let message = '<p><b>The following fields must be reviewed: </b></p>'
      if (!this.form.firstName || !this.form.lastName || this.form.type.length === 0) {
        if (!this.form.firstName) {
          message += '<p>name</p>'
        }
        if (!this.form.lastName) {
          message += '<p>email</p> '
        }
        if (this.form.type.length === 0) {
          message += '<p>Some competition is necessary</p> '
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

<style lang="scss"
       scoped>
  .form {
    text-align: center;
    font-family: "Comic Sans MS";

    .title{
      margin: 75px 0 40px 0;
      /*font-family: "Comic Sans MS";*/
      color: deepskyblue;
    }

    el-select {
      width: 10%;
    }
    /deep/ .el-input__inner{
      color: red;
    }
    /deep/ label {
      /*font-family: "Comic Sans MS";*/
      /*color: red;*/
    }
    .el-form-item {
      /deep/ .el-form-item__content {
        /*font-family: "Comic Sans MS";*/
        margin-left: 0;
      }
    }
  }
  @media (min-width: 992px) {
    .form{
      .el-col-md-offset-2{
        margin-left: 0px;
      }
    }
  }
</style>
