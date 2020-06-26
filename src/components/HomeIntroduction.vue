<template>
  <div id="introduction">
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
</template>

<script>
export default {
  name: "HomeIntroduction"
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
</style>