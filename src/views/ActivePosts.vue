<template>
  <div class="posts-list">
    <h1>Posts activos</h1>
    <router-link to="/posts">Go back</router-link>
    <div
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      class="post"
    >
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Posts',
  computed: mapGetters({
    posts: 'activePosts'
  })
}
</script>

<style lang="scss">
  .posts-list {
    margin: 0 auto;
    max-width: 700px;
    .post {
      border: 1px solid blue;
      margin: 20px;
      padding: 20px;
    }
    p {
      text-transform: capitalize;
    }
  }
</style>
