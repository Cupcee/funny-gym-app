import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home},
  { path: '/helloworld', component: HelloWorld}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
