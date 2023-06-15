export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, payload) {
    state.token = payload;
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  login({commit}) {
    commit('setToken', 'trueToken')
  },
  logout({commit}) {
    commit('clearToken')
  }
}

export const getters = {
  hasToken: s => !!s.token
}