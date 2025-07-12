<template>
  <div id="app">
    <!-- <TestDiamonds /> -->
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Body from '@/components/body/Body.vue'
// import TestDiamonds from '@/TestDiamonds.vue'

export default {
  name: 'App',
  components: {
    Header,
    Body,
    // TestDiamonds
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
}

/* Base styles for mobile (min-width: 320px) are the default styles above. */

/* Tablet styles */
@media (min-width: 640px) {
  #app {
    /* Tablet-specific styles can go here */
  }
}

/* Desktop styles */
@media (min-width: 1100px) {
  #app {
    /* Desktop-specific styles can go here */
  }
}
</style>
