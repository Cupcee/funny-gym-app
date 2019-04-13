<template>
  <div id="app">
    <loading :active.sync="loading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <nav class="navbar navbar-expand-lg navbar-light" style="width: 100vw;">
      <a class="navbar-brand" style="margin-right: 30px" href="#">Gym App</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li
            class="nav-item active"
            style="padding-top: .3125rem; padding-bottom: .3125rem; margin-right: 30px;"
          >
            <router-link to="/" style="text-decoration: none;">
              <v-icon name="home"/>Home
            </router-link>
          </li>
          <li
            class="nav-item"
            style="padding-top: .3125rem; padding-bottom: .3125rem; margin-right: 30px;"
          >
            <router-link to="/sets" style="text-decoration: none;">
              <v-icon name="clipboard-check"/>Sets
            </router-link>
          </li>
          <li
            class="nav-item"
            style="padding-top: .3125rem; padding-bottom: .3125rem; margin-right: 30px;"
          >
            <router-link to="/create" style="text-decoration: none;">
              <v-icon name="plus-square"/>Create a Set!
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="router-view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-awesome/icons/home";
import "vue-awesome/icons/clipboard-check";
import "vue-awesome/icons/plus-square";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "app",
  data() {
    return {
      loading: false,
      fullPage: true
    };
  },
  components: {
    Loading
  },
  methods: {
    startLoading: function() {
      this.loading = true;
    },
    stopLoading: function() {
      this.loading = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.fa-icon {
  padding-bottom: 2px !important;
  padding-right: 5px !important;
}
.router-view-container {
  padding-top: 50px; 
  padding-left: 5vw; 
  padding-right: 5vw; 
  width: 90vw; 
  align-self: center;
}
</style>
