<template>
  <header>
    <b-navbar toggleable="lg" sticky class="pl-4 p-3">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand :to="{ name: 'home' }">
        <app-logo />
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse" class="ml-3">
        <b-navbar-nav>
          <b-nav-item :to="'/projects'">
              Projects
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
import AppLogo from '@/components/AppLogo.vue';

export default {
  name: 'navbar',
  components: {
    AppLogo,
  },
};
</script>
<style lang="scss">
.navbar-light .navbar-nav .nav-link {
  color: map-get($theme-colors, light);
}
.navbar-light .navbar-nav .nav-link:hover {
  color: map-get($theme-colors, tertiary);
}

.navbar-light .navbar-nav .router-link-exact-active.nav-link {
  color: map-get($theme-colors, secondary);
}

</style>