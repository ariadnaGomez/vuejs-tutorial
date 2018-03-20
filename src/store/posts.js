import { getPosts } from '@/api/api'
export default {
  state: {
    posts: []
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
    getLastPosts (context) {
      getPosts().then((data) => {
        const posts = data.data.map(post => {
          post.isActive = false
          return post
        })
        context.commit('setPosts', posts)
      })
    }
  }
}
