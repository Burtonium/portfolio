<template>
  <div>
    <span v-for="(text, index) in texts" :key="index">
      <template v-if="isString(text)">
        <vue-typer 
          :text="text" 
          :repeat="0" 
          :type-delay="typeDelay" 
          :pre-type-delay="getDelay(index)"
          v-if="showTyper(index)"
          @typed="handleTyped(index)"
        />
        <br v-if="breakLine(index)"/>
        <span v-else>&nbsp;</span> 
      </template>
      <template v-else-if="isObject(text)">
        <vue-typer
          v-if="showTyper(index)"
          :class="{ 'highlight': text.highlight, 'inline': text.inline }"
          :text="text.content" 
          :repeat="0" 
          :type-delay="typeDelay" 
          :pre-type-delay="getDelay(index)"
          @typed="handleTyped(index)"
        />
        <br v-if="breakLine(index)" />
      </template>
    </span>
  </div>
</template>
<script>
import { clearInterval } from 'timers';

export default {
  data() {
    return {
      elapsed: 0,
      toggledTypers: [0],
    }
  },
  props: {
    texts: {
      type: Array,
      default: () => [],
    },
    typeDelay: {
      type: Number,
      default: 30,
    },
    wordDelay: {
      type: Number,
      default: 1000,
    }
  },
  methods: {
    isString(item) {
      return typeof item === 'string';
    },
    isObject(item) {
      return item instanceof Object;
    },
    getDelay(index) {
      const text = this.texts[index];
      return text.inline ? 0 : this.wordDelay;
    },
    breakLine(index) {
      const next = this.texts[index + 1];
      return !next || !next.inline;
    },
    showTyper(index) {
      return this.toggledTypers.includes(index);
    },
    handleTimerTick(elapsed) {
      this.elapsed = this.elapsed + 500;
    },
    handleTyped(index) {
      this.toggledTypers.push(index + 1);
      if (index === this.texts.length - 1) {
        this.$emit('done');
      }
    }
  },
  mounted() {
    this.interval = setInterval(() => { this.handleTimerTick(500); }, 500);
  },
}
</script>
<style>
</style>