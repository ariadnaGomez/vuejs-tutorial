import { getPosts } from '@/api/api'

function getIndexById (posts, id) {
  return posts.findIndex(post => post.id === id)
}
export default {
  state: {
    posts: []
  },
  getters: {
    activePosts (state) {
      return state.posts.filter(post => post.isActive)
    },
    isNewPost: (state) => (id) => {
      const index = getIndexById(state.posts, id)
      return !state[index].hasOwnProperty('userId')
    }
  },
  mutations: {
    setPosts (state, payload) {
      state.posts = payload
    },
    setActivePost (state, {id, isActive}) {
      const index = getIndexById(state.posts, id)
      state.posts[index].isActive = isActive
    },
    addPost (state, form) {
      const post = Object.assign({
        isActive: false,
        id: state.posts.length + 1
      }, form)
      state.posts.unshift(post)
    }
  },
  actions: {
    getLastPosts ({commit, state}) {
      if (state.posts.length) {
        return
      }
      getPosts().then((data) => {
        const posts = data.data.map(post => {
          post.isActive = false
          return post
        })
        commit('setPosts', posts)
      })
    }
  }
}
