<template>
  <div class="flex">
    <h3>
      <welcome />
    </h3>
  </div>
</template>
<script>
import Welcome from '@/components/Welcome.vue';

export default {
  components: {
    Welcome,
  },
}
</script>
<style>
.flex {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  align-items: center;
  justify-content: center;
}
</style>