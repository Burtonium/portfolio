import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import Projects from '@/pages/Projects.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    }
  ],
});