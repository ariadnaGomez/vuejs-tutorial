import postsStore from '../posts'
jest.mock('../../api/api.js')

describe('posts store', () => {
  test('setPosts set posts to allPosts', () => {
    const allPosts = [1, 2, 3]
    const state = {}
    postsStore.mutations.setPosts(state, allPosts)
    expect(state.posts).toEqual(allPosts)
  })

  test('setActivePost set post with id to active', () => {
    const allPosts = [{id: 2, isActive: true}, {id: 3, isActive: true}]
    const state = {posts: allPosts}
    postsStore.mutations.setActivePost(state, {id: 3, isActive: false})
    expect(state.posts[1].isActive).toBe(false)
  })

  test('getLastPosts call commit with "setPosts" and the posts', async () => {
    const allPosts = [{id: 2, isActive: false}, {id: 3, isActive: false}]
    const context = { commit: jest.fn(), state: {posts: []} }

    await postsStore.actions.getLastPosts(context)
    expect(context.commit).toBeCalledWith('setPosts', allPosts)
  })

  test('getLastPosts update posts only when its not set', async () => {
    const allPosts = [{id: 2, isActive: false}, {id: 3, isActive: false}]
    const context = { commit: jest.fn(), state: {posts: allPosts} }
    context.commit.mockReset()
    await postsStore.actions.getLastPosts(context)
    expect(context.commit).not.toBeCalled()
  })

  test('getActivePost returns all active posts', () => {
    const allPosts = [{id: 2, isActive: false}, {id: 3, isActive: true}]
    const state = {posts: allPosts}
    const activePosts = postsStore.getters.activePosts(state)
    expect(activePosts).toEqual([allPosts[1]])
  })
})
