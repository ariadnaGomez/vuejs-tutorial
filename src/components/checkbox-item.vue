<template>
  <div class="container">
    <span class="index">{{ id }}</span>
    <div class="text-container">
      <p>{{ title }}</p>
      <input
        v-model="checkboxModel"
        type="checkbox"
        @change="sendEvent()">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: {
    title: {
      type: String,
      name: 'title',
      required: true
    },
    isActive: {
      type: Boolean,
      name: 'isActive',
      required: true
    },
    id: {
      type: Number,
      name: 'id',
      required: true
    }
  },
  data () {
    return {
      checkboxModel: this.isActive
    }
  },
  computed: {
    message () {
      return this.checkboxModel ? 'Esta activo' : 'No esta activo'
    }
  },
  methods: {
    sendEvent () {
      const objectToSend = {
        id: this.id,
        isActive: this.checkboxModel
      }
      this.$emit('checkbox-clicked', objectToSend)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background: #e8e8e8;
    padding: 10px;
    .index {
      align-self: center;
      flex-basis: 15%;
      color: #fcae1e;
      font-size: 30px;
      font-weight: 600;
      padding-right: 10px;
    }
    .text-container {
      text-align: left;
      flex-basis: 100%;
      p {
        margin-top: 0;
        text-transform: capitalize;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
</style>
