<template>
  <nav>
    <a href="#" v-if="!user.isLogged" @click="login()">Sign up</a>
    <a href="#" v-if="user.isLogged" @click="logout()">Logout</a>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    login() {
      this.$store.dispatch("login");
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  box-shadow: none;
  background-color: white;

  a {
    margin: 0;
    color: black;
    text-align: right;
  }
}
</style>