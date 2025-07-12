<template>
  <main class="body">
    <Breadcrumbs />
    <FunnelPart />
    <About />
    <DiamondMain />
  </main>
</template>

<script>
import { markRaw } from 'vue';

import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.vue';
import FunnelPart from '@/components/funnelPart/FunnelPart.vue';
import About from '@/components/about/About.vue';
import DiamondMain from '@/components/diamonds/DiamondMain.vue';

export default {
  name: 'Body',
  components: {
    Breadcrumbs: markRaw(Breadcrumbs),
    FunnelPart: markRaw(FunnelPart),
    About: markRaw(About),
    DiamondMain: markRaw(DiamondMain)
  }
}
</script>

<style scoped>
/* мобилка */
.body {
  padding: 0 15px;
  min-height: calc(100vh - 160px); 
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}

/* планшет */
@media (min-width: 640px) {
  .body {
    padding: 0 20px;
  }
}

/* десктоп */
@media (min-width: 1100px) {
  .body {
    padding: 0 40px;
  }
}
</style>