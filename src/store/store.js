import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tasks: [
      {
        name: 'Programar',
        completed: false
      },
      {
        name: 'Leer',
        completed: true
      }
    ]
  },
  getters: {
    tasks: state => state.tasks.sort(task => task.completed)
  },
  mutations: {
    createTodo (state, value) {
      const data = {
        name: value,
        completed: false
      }
      state.tasks.push(data)
    },
    complete (state, value) {
      const tasks = state.tasks
      const taskToRemove = tasks.find(task => task.name === value.name)
      const index = tasks.indexOf(taskToRemove)

      tasks[index].completed = !tasks[index].completed
    }
  }
})
