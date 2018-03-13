<template>
  <el-footer class="footer">
    <el-row class="row">
      <el-col :span="8">
        Nombre: {{ user.name }}
      </el-col>
      <el-col :span="8">
        Enterprise: {{ user.enterprise }}
      </el-col>
      <el-col :span="8">
        Developer: <i :class="[user.developer ? 'el-icon-check' : 'el-icon-close']"></i>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script>
export default {
  props: {
    user: {
      name: String,
      developer: Boolean,
      enterprise: String
    }
  },
  name: 'app-footer'
}
</script>

<style scoped>
  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    background-color: #545c64;
    color: white;
  }
  .row{
    width: 100%;
    text-align: center;
  }
</style>
