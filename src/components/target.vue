<template>
  <div class="card">
    <div class="card-header">
      <img
        src="https://www.gcfaprendelibre.org/files/personage/image/11/R_p.png">
      <h3>NOmbre</h3>
    </div>
    <div class="card-header test">
      <img
        src="https://www.gcfaprendelibre.org/files/personage/image/11/R_p.png">
      <h3>NOmbre</h3>
    </div>
    <p class="description">#487(0.5) Añadir botón Ver ficha de producto)</p>
  </div>
</template>

<script>
export default {
  name: 'Target'
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
    .description{
      margin: 0;
      padding: 10px;
      text-align: start;
    }
    &-header test{
      background-color: aquamarine;
    }
  }
  /*posicion: absolute*/
  /*top: 0*/
  /*with: 100%*/

</style>
