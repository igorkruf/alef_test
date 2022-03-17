export default {
  namespaced: true,
  state: () => ({
    user: null,
  }),

  getters: {
    get_user: (state) => state.user,
  },
  mutations: {
    set_user(state, payload) {
      state.user = payload;
    },
    del_user(state) {
      state.user = null;
    },
  },

  actions: {
    set_user({ commit }, payload) {
      console.log(`добавили user в хранилище ${payload}`);
      commit("set_user", payload);
    },
    del_user({ commit }) {
      commit("del_user");
    },
  },
};
