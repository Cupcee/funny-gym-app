<template>
  <div id="app">
    <div class="col">
      <div class="row-sm-2">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">Navbar</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item active" style="padding-top: .3125rem; padding-bottom: .3125rem; margin-right: 1rem;">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item" style="padding-top: .3125rem; padding-bottom: .3125rem; margin-right: 1rem;">
                <router-link to="/helloworld">HelloWorld</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="row-sm-10 body-content" style="margin-top: 50px;">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
