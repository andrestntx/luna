import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase";

import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "",
  authDomain: "assistant-luna.firebaseapp.com",
  databaseURL: "https://assistant-luna.firebaseio.com",
  projectId: "assistant-luna",
  storageBucket: "assistant-luna.appspot.com",
  messagingSenderId: "235643648831",
  appId: "1:235643648831:web:686d44947f108f3abd318a",
  measurementId: "G-R0VRTKKV85",
};

firebase.initializeApp(configOptions);
firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
