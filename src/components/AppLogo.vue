<template>
  <div class="logo">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      version="1"
      viewBox="0 0 175 150"
    >
      <path 
        class="path" 
        fill="none"
        stroke-width="10" 
        d="M46.52 79.053l40.39 -69.069l38.822 67.825m9.546 43.134l-122.9 -58.888l34.58 60.047m82.378 -1.414l32.105 -58.633l-121.131 57.827"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {}
}
</script>
<style lang="scss" scoped>
.path {
  stroke: map-get($theme-colors, light);
}

.logo:hover .path {
  stroke: map-get($theme-colors, tertiary);
}

.router-link-exact-active .path {
  stroke: map-get($theme-colors, secondary);
}

.logo {
  display: inline-block;
  animation: fade 1s ease-in, grow 0.6s linear;
  position: relative;
  width: 90px;
}

@keyframes fade {
  0% { 
    opacity: 0; 
  }
  
  100% { 
    opacity: 1; 
  }
}

@keyframes grow {
  0% {
    transform: scale(0.7);
    -webkit-transform: scale(0.7);
  }
  
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}


.path {
  stroke-dasharray:565 567;
  stroke-dashoffset:566;
  animation:NcqfHALo_draw 3000ms linear 0ms forwards;
}

@keyframes NcqfHALo_draw {
  100% {
      stroke-dashoffset:0;
    }
  }

@keyframes NcqfHALo_fade {
  0% {
    stroke-opacity:1;
  }
  94% {
    stroke-opacity:1;
  }
  100% {
    stroke-opacity:0;
  }
}





</style>
