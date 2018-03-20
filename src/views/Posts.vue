
<template>
  <div
    class="posts"
    @click="test()">
    <h1>Selector de posts</h1>
    <checkbox-item
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :is-active="post.isActive"
      class="test"
      @checkbox-clicked="setActivePost"
    />
  </div>
</template>

<script>
import CheckboxItem from '@/components/checkbox-item.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Posts',
  components: {CheckboxItem},
  computed: mapState({
    posts: state => state.modulePosts.posts
  }),
  created () {
    this.getPosts()
  },
  methods: {
    ...mapMutations([
      'setActivePost'
    ]),
    ...mapActions({
      getPosts: 'getLastPosts'
    }),
    test () {
      console.log(this.$store.state.modulePosts.posts)
    }
  }
}

</script>
<style></style>
