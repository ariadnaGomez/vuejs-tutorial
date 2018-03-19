<template>
  <div>
    <h1>SubPáginaDos</h1>
    <h1>SubPáginaDos</h1>

    <!--<p>agdfasg {{ users }}</p>-->
    <el-button @click="getUsers2()">actualizar</el-button>
    <hr>
    <el-row>
      <el-col
        :span="[flag ? 12 : 24]">
        <el-col
          :xs="{span: [flag ? 8 : 8 ]}"
          :sm="{span: [flag ? 8 : 6]}"
          :md="{span: [flag ? 4 : 4]}"
          :lg="{span: [flag ? 4 : 2]}"
          v-for="item in users"
          v-bind:key="item.cell">
          <img :src="item.picture.large" @click="setUser(item)">
          <!--{{ item.id }}-->
        </el-col>
      </el-col>
      <el-col v-if="flag" :span="12">
        2º mitad
      </el-col>
    </el-row>
    <!--<el-col :span="4" v-for="item in users" v-bind:key="item.cell">-->
    <!--<img :src="item.picture.large">-->
    <!--&lt;!&ndash;{{ item.id }}&ndash;&gt;-->
    <!--</el-col>-->
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  // beforeRouteEnter: (to, from, next) => {
  //   next((vm) => {
  //     vm.loadUsers()
  //   })
  // },
  name: 'sub-page-two',
  data () {
    return {
      users: null,
      flag: false
    }
  },
  created: function () {
    // this.loadUsers()
    this.users = this.getUsers
    console.log('cretated' + this.users)
  },
  methods: {
    ...mapActions(['loadUsers']),
    getUsers2: function () {
      this.users = this.getUsers
      console.log(this.users)
      this.flag = !this.flag
    },
    setUser: function (user) {
      console.log(user)
    }
  },
  computed: {
    ...mapGetters(['getUsers'])
  }
}
</script>

<style scoped>

</style>
