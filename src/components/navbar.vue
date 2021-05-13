<template>
  <nav class="navbar navbar-expand container">
    <div class="d-flex">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link">
            ABOUT
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Skills' }" class="nav-link">
            SKILLS
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Apps' }" class="nav-link">
            APPS
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  setup() {
    return {
    }
  }
}
</script>

<style scoped>
li {
  font-size: 24px;
}

.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
  color: white;
}
.nav-item .nav-link.router-link-exact-active {
  color: #6f64e7;
}
</style>
