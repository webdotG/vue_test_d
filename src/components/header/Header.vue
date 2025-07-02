<template>
  <header class="header">
    <HeaderPromo />
    <HeaderTop />
    <HeaderBottom />
  </header>
</template>

<script>
import HeaderPromo from './HeaderPromo.vue'
import HeaderTop from './HeaderTop.vue'
import HeaderBottom from './HeaderBottom.vue'

export default {
  name: 'Header',
  components: {
    HeaderPromo,
    HeaderTop,
    HeaderBottom
  }
}
</script>

<style scoped>
.header {
  background-color: whitesmoke;
}
</style>