import router from './router';
import Vue from 'vue';
import VueTyper from 'vue-typer';
import '@/assets/scss/app.scss';
import './bootstrap';
import App from './App.vue';


Vue.config.productionTip = false;

Vue.use(VueTyper);
new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
