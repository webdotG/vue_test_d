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