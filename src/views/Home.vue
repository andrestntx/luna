<template>
  <div class="row">
    <div class="col s5" id="introduction">
      <div class="container">
        <div class="luna-brand">
          <a href="#" class="brand-logo">
            <img alt="Vue logo" src="../assets/logo.png" />
            <span>Luna</span>
          </a>
        </div>
        <h1>Welcome to Luna. Your personal assistent</h1>
      </div>
    </div>
    <div class="col s7" id="login">
      <div class="container" v-if="!isLogged">
        <h1>Sign up to Luna</h1>
        <a class="waves-effect waves-light btn" @click="login()">
          <i class="material-icons left">cloud</i>
          Sign up with Google
        </a>
      </div>
      <div class="container" v-if="isLogged">
        <h1>Hi {{ user.name }}</h1>
        <div class="col s12 m8 offset-m2">
          <div class="card-panel grey lighten-5 z-depth-1">
            <div class="row valign-wrapper">
              <div class="col s2">
                <img v-bind:src="user.photoURL" class="circle responsive-img" />
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
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
      user: {
        photoURL: "",
        name: ""
      },
      isLogged: false
    };
  },
  components: {},
  methods: {
    login() {
      console.log("Click login");
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log("logged");
          console.log(result.user);
          this.isLogged = true;
          this.user.photoURL = result.user.photoURL;
          this.user.name = result.user.displayName;
        });
    },

    logout() {
      console.log("Click logout");

      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("logout");
          this.isLogged = false;
          this.user = {
            photoURL: "",
            name: ""
          };
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#introduction {
  background-color: #edf3f3;
  min-height: 100vh;
  padding: 0;

  @media only screen and (min-width: 993px) {
    .container {
      width: 85%;
    }
  }

  h1 {
    font-size: 1.6em;
    text-align: left;
  }

  .luna-brand {
    padding: 1em 0;
    text-align: left;

    img {
      max-height: 30px;
    }

    a {
      font-size: 1.3em;
      color: #41b883;
    }
  }
}

#login {
  background-color: white;
  min-height: 100vh;

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
}
</style>
