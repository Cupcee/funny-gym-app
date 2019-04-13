import Vue from 'vue'
import VueRouter from 'vue-router'
import Icon from 'vue-awesome/components/Icon'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import Home from './components/Home.vue'
import Sets from './components/Sets.vue'
import CreateSet from './components/CreateSet.vue'

Vue.component('v-icon', Icon)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/sets', component: Sets },
  { path: '/create', component: CreateSet },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
