export const state = () => ({
  users: []
})

export const mutations = {
  setUser(state, payload) {
    state.users = payload
  }
}

export const actions = {
  async setUser({commit}) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    commit('setUser', users)
  }
}

export const getters = {
  users: s => s.users
}