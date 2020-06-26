<template>
  <div class="container" v-if="!user.isLogged">
    <h1>Sign up to Luna</h1>
    <a class="waves-effect waves-light btn" @click="login()">
      <i class="material-icons left">cloud</i>
      Sign up with Google
    </a>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Login",
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    login() {
      this.$store.dispatch("login");
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 1.6em;
}

a.btn {
  border-radius: 20px;
  background: white;
  color: #525151;
  letter-spacing: 0;
  text-transform: none;

  i {
    color: #41b883;
  }
}
</style>