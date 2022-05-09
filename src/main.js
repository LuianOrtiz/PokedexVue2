import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const firebaseConfig = {
  apiKey: "AIzaSyCk71Xneh2kyTO0PeYOCn9efNQW-Fi4HZ0",
  authDomain: "pokemonvue-9da34.firebaseapp.com",
  projectId: "pokemonvue-9da34",
  storageBucket: "pokemonvue-9da34.appspot.com",
  messagingSenderId: "955876427442",
  appId: "1:955876427442:web:ea65c3a190684dc4f26bab"
};

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
