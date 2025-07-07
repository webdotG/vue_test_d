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

// Статический импорт (рекомендуемый способ)
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
.body {
  padding: 0 15px;
  min-height: calc(100vh - 160px);
  background-color: #fff;
}

/* Временные стили для отладки */
.body > * {
  border: 1px solid red;
  padding: 10px;
  margin: 10px 0;
  min-height: 50px;
}
</style>