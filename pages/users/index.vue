<template>
  <section>
    <h1>Users Page</h1>

    <ul v-for="user in users" :key="user.id">
      <nuxt-link tag="li" class="user" :to="'/users/' + user.id">{{ user.name }}</nuxt-link>
    </ul>
  </section>
</template>

<script>
//code
export default {
  // async asyncData({$axios}) {
  //     const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
  //     return {users}
  // }
  async fetch({store}) {
    if(store.getters.users.length === 0) {
      await store.dispatch('setUser')
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    }
  },
}
</script>

<style scoped>
/*Style*/
 .user {
  cursor: pointer;
 }
</style>