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
.header {
  width: 100%;
}

.header-sticky {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.header-promo {
  display: none; 
}

/* планшет */
@media (min-width: 640px) {
  .header-sticky {
    padding: 0 20px; 
  }

  .header-promo {
    display: block; 
  }
}

/* десктоп */
@media (min-width: 1100px) {
  .header-sticky {
    padding: 0 40px;
    display: flex;
    flex-direction: column;
  }
}
</style>
