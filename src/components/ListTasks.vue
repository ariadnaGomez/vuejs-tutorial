<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['tasks'])
  },
  methods: {
    ...mapMutations(['complete']),
    completeTask (task) {
      this.complete(task)
    }
  }
}
</script>

<template>
  <div>
    <h3>Tareas por hacer</h3>
    <ul>
      <li
        v-for="task in tasks"
        :key="task.name"
        class="task"
        @click="completeTask(task)"
        :class="{ 'task-completed': task.completed, 'task-not-completed': !task.completed}">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.task {
  cursor: pointer;
  &:hover {
    background-color: beige;
  }
  &-completed {
    text-decoration: line-through;
  }
  &-not-completed {
  }
}
</style>
