<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link 
              exact
              no-prefetch
              to="/" 
              class="nav-link"
              active-class="active"
            >
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link 
              to="/about" 
              class="nav-link"
              active-class="active"
            >About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link 
              to="/users" 
              class="nav-link"
              active-class="active"
            >Users</nuxt-link>
          </li>
          <li v-if="!token" class="nav-item">
            <nuxt-link 
              to="/login" 
              class="nav-link"
              active-class="active"
            >Login</nuxt-link>
          </li>
          <li v-else class="nav-item">
            <a 
              href="#" 
              class="nav-link"
              @click="logOut"
            >Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// code
export default {
  methods: {
    logOut() {
      this.$store.dispatch('login/logout')
      this.$router.push('/login')
    }
  },
  computed:{
    token() {
      return this.$store.getters['login/hasToken']
    }
  }
}
</script>

<style scoped>
/*Style*/
</style>