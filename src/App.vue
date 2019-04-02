<template>
  <div id="app">
    <nav-bar />
    <fade-transition :duration="200">
      <router-view />
    </fade-transition>
  </div>
</template>
<script>
import Welcome from '@/components/Welcome.vue';
import NavBar from '@/components/NavBar.vue';
import { FadeTransition } from 'vue2-transitions';

export default {
  name: 'app',
  components: {
    Welcome,
    NavBar,
    FadeTransition,
  },
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
