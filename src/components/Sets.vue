<template>
  <div class="container">
    <h4>Sets</h4>
    <div class="set-container" v-for="(item, index) in data" v-bind:key="index">
      <div class="header">
        <div class="header-item">{{item.weekday}}</div>
      </div>
      <div v-for="(value, key) in item.exercises" v-bind:key="key">
        <div class="gymset-data">
          <div class="font-header">{{ key }}</div>
          <div class="font">Weight: {{ value.weight + ' ' + value.unit }}</div>
          <div class="font">Reps: {{ value.reps }}</div>
          <div class="font">Sets: {{ value.sets }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-awesome/icons/calendar-day";
import { getSetsById } from "../services/http-service";

export default {
  name: "Sets",
  data() {
    return {
      loading: false,
      data: null,
      error: null
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.error = null;
      this.$root.startLoading;
      getSetsById(3).then(res => {
        this.data = res.data;
        this.$root.stopLoading;
      });
    }
  }
};
</script>

<style>
.set-container {
  padding-bottom: 5px;
  padding-top: 5px;
  display: inline-block;
  transition: background-color 0.15s ease-in-out;
  -moz-transition: background-color 0.15s ease-in-out;
  -webkit-transition: background-color 0.15s ease-in-out;
}
.set-container:hover {
  background-color: rgb(230, 230, 230);
  cursor: pointer;
  padding-bottom: 5px;
  padding-top: 5px;
  display: inline-block;
  opacity: 1.0;
  transition: background-color 0.15s ease-in-out;
  -moz-transition: background-color 0.15s ease-in-out;
  -webkit-transition: background-color 0.15s ease-in-out;
}
.header-item {
  width: 100px;
  text-align: center;
}
.gymset-data {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.font-header {
  font-weight: 900;
  font-size: 14px;
}
.font {
  font-size: 12px;
}
</style>