<template>
  <div class="card">
    <div
      class="card-header"
      @mouseover="prueba(true)">
      <img
        src="https://www.gcfaprendelibre.org/files/personage/image/11/R_p.png">
      <h3>NOmbreeeeeee</h3>
    </div>
    <div
      v-show="cardHeaderOptions"
      class="card-header hidden"
      @mouseleave="prueba(false)">
      <i class="el-icon-edit">Assign To</i>
      <i class="el-icon-edit">Edit card</i>
    </div>
    <p class="description">#487(0.5) Añadir botón Ver ficha de producto)</p>
  </div>
</template>

<script>
export default {
  name: 'Target',
  data () {
    return {
      cardHeaderOptions: false
    }
  },
  methods: {
    prueba (shouldBeHidden) {
      if (shouldBeHidden) {
        this.cardHeaderOptions = true
      } else {
        this.cardHeaderOptions = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .card{
    position: relative;
    width: 20%;
    border: 1px solid black;
    box-shadow: 6px 6px 20px grey;
    &-header {
      display: flex;
      align-items: center;
      img{
        width: 50px;
        height: 5%;
      }
      h3{
        margin: 0;
        margin-left: 15px;
      }
    }
    .hidden{
      justify-content: space-between;
      background-color: white;
      position: absolute;
      top: 0;
      width: 100%;
      opacity: 0.9;
      height: 50%;
      i{
        padding: 15px;
        font-size: 15px;
      }
      i:hover{
        color: green;
      }
    }
    .description{
      margin: 0;
      padding: 10px;
      text-align: start;
    }
  }
  /*posicion: absolute*/
  /*top: 0*/
  /*with: 100%*/

</style>
