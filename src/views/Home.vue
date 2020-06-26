<template>
  <div class="row">
    <HomeIntroduction class="col s5" />
    <div class="col s7" id="home">
      <Navbar />
      <Login />
      <div class="container" v-if="user.isLogged">
        <h1>Hi {{ user.info.displayName }}</h1>
        <div class="col s12 m8 offset-m2">
          <div class="card-panel grey lighten-5 z-depth-1">
            <div class="row valign-wrapper">
              <div class="col s2">
                <img v-bind:src="user.info.photoURL" class="circle responsive-img" />
                <!-- notice the "circle" class -->
              </div>
              <div class="col s10">
                <span class="black-text">Thanks for sign up! - This is Luna</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HomeIntroduction from "@/components/HomeIntroduction.vue";
import Login from "@/components/Login.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: { HomeIntroduction, Login, Navbar },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
#home {
  background-color: white;
  min-height: 100vh;

  h1 {
    font-size: 1.6em;
  }
}
</style>
