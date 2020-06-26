<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" v-if="!user.isLogged" @click="login()" class="right">
        <i class="material-icons right">cloud</i>Sign up
      </a>
      <a href="#" v-if="user.isLogged" @click="logout()" class="right">
        <i class="material-icons right">cloud_off</i> Logout
      </a>
    </div>
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
    font-size: 0.85em;
    i.material-icons {
      font-size: 1em;
      margin-left: 5px;
    }
  }
}
</style>