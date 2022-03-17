import { createStore } from "vuex";
import User from "./user";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User,
  },
  //для того что-бы напрямую не менять значение в STORE
  strict: process.env.NODE_ENV !== "production",
});
