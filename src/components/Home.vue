<template>
  <div class="container">
    <h4>Today</h4>
    <div style="padding-top: 5px;" v-if="data">
      <div class="header">
        <div class="header-item">{{ data.weekday }}</div>
      </div>
      <div v-for="(value, key) in data.exercises" v-bind:key="key">
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
import { dateConversion } from "../services/helpers";
import { getSetByDay } from "../services/http-service";

export default {
  name: "Home",
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
      getSetByDay(3, dateConversion()).then(res => {
        this.data = res.data;
        this.$root.stopLoading;
      });
    }
  }
};
</script>

<style>
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