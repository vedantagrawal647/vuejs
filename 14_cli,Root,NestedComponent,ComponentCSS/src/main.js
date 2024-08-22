import Vue from 'vue'
import App from './App.vue'

//globally registered nested file
// import Ninjas from './Ninjas.vue'

// Vue.component('ninjas',Ninjas);

new Vue({
  el: '#app',
  render: h => h(App)
})
