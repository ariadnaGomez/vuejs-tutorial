import { getPosts } from '@/api/api'
export default {
  state: {
    posts: []
  },
  getters: {
    activePosts (state) {
      return state.posts.filter(post => post.isActive)
    }
  },
  mutations: {
    setPosts (state, payload) {
      state.posts = payload
    },
    setActivePost (state, {id, isActive}) {
      const index = state.posts.findIndex(itemarray => itemarray.id === id)
      state.posts[index].isActive = isActive
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
