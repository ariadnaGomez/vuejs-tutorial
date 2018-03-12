<script>
import CreateTask from '../../components/CreateTask'
import ListTasks from '../../components/ListTasks'
export default {
  data () {
    return {
      nameTodo: ''
    }
  },
  components: {
    CreateTask,
    ListTasks
  },
  methods: {
    createTask (value) {
      this.$store.commit('createTodo', value)
    }
  }
}
</script>

<template>
  <section>
    <create-task
      v-model="nameTodo"
      @setName="createTask"/>

    <list-tasks/>
  </section>
</template>
