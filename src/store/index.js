import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);
const provider = new firebase.auth.GoogleAuthProvider();

export default new Vuex.Store({
  state: {
    loggedUser: {
      isLogged: false,
      info: null,
    },
  },
  mutations: {
    setUserStatus(state, isLogged) {
      state.loggedUser.isLogged = isLogged;
    },
    setUserInfo(state, user) {
      state.loggedUser.info = user;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("setUserStatus", user !== null);
      commit("setUserInfo", user);
    },
    login() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          console.log("logged");
        });
    },

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("logout");
        });
    },
  },
  getters: {
    user: (state) => {
      return state.loggedUser;
    },
  },
  modules: {},
});
