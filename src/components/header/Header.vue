<template>
  <header class="header">

    <HeaderPromo /> 
    <div class="header-sticky">
      <HeaderTop />
      <HeaderBottom />
    </div>

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
.header-sticky {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
}
</style>