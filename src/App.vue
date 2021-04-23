<template>
  <header class="text-center">
    <h1 class="p-3 mt-2">
      <router-link :to="{ name: 'About' }" class="nav-link">
        DANIEL FASULA
      </router-link>
    </h1>
    <Navbar />
  </header>
  <main class="container-fluid">
    <router-view />
  </main>
  <footer>
    <div class="links p-2 mt-3">
      <a href="https://www.linkedin.com/in/danielfasula/">
        <i type="button" class="fab fa-linkedin mx-2"></i>
      </a>
      <a href="https://github.com/danielfasula">
        <i type="button" class="fab fa-github-square"></i>
      </a>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'App',
  setup() {
    return {
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.links {
  margin-left: 20vh;
  margin-bottom: 10vh;
}
.nav-link,
a {
  color: #6f64e7;
}
.nav-link:hover {
  color: #6f64e7;
}
a:hover {
  color: whitesmoke;
}
</style>
