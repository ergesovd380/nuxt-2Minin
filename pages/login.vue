<script>
export default {
  layout: 'empty',
  methods: {
    onSubmit() {
      this.$store.dispatch('login/login')
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <form class="pt-5" @submit.prevent="onSubmit">
    <h1>Login page</h1>
    <div>
      <input type="text" class=form-control>
    </div>
    <div class="my-4">
      <button class="btn btn-primary">Submit</button>
    </div>
    <div>
      <nuxt-link to="/" tag="a">Home page</nuxt-link>
    </div>
  </form>
</template>

<style scoped>
  form {
    width: 500px;
    margin: 0 auto;
  }
</style>