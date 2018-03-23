<template>
  <div class="card">
    <div
      class="card-header"
      @mouseover="prueba(true)">
      <img
        src="https://www.gcfaprendelibre.org/files/personage/image/11/R_p.png">
      <h3>Pablo Sirera</h3>
    </div>
    <div
      v-show="cardHeaderOptions"
      class="card-header hidden"
      @mouseleave="prueba(false)">
      <i class="el-icon-edit">Assign To</i>
      <i class="el-icon-edit">Edit card</i>
    </div>
    <p class="description">#495(0.5) Añadir validación importe máximo al campo
    Importe solicitado</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      cardHeaderOptions: true
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
    margin: 5px;
    position: relative;
    box-shadow: 6px 6px 5px grey;
    &-header {
      display: flex;
      height: 40%;
      align-items: center;
      width: 100%;
      img{
        width: 50px;
      }
      h3{
        margin: 0;
        margin-left: 15px;
      }
      &.hidden{
        justify-content: space-between;
        background-color: white;
        position: absolute;
        top: 0;
        opacity: 0.9;
        i{
          padding: 15px;
          font-size: 15px;
          &:hover{
            color: green;

          }
        }
      }
    }

    .description{
      margin: 0;
      padding: 10px;
      text-align: start;
    }
  }
</style>
