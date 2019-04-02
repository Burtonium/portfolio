<template>
  <div>
    <typer :texts="texts" @done="showNext"/>
  </div>
</template>
<script>
import Typer from '@/components/Typer.vue';

export default {
  components: {
    Typer,
  },
  computed: {
    texts() {
      return [
        'Welcome.', 
        'My name is Mathieu Bertin.',
        'I\'m a', 
        { 
          content: 'Fullstack Javascript Developer.', 
          highlight: true, 
          inline: true,
        }];
    },
  },
  methods: {
    showNext() {

    },
  },
}
</script>
