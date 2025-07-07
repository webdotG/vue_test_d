<template>
  <main class="body">
    <Breadcrumbs />
    <FunnelPart />
  </main>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.vue'
import FunnelPart from '@/components/funnelPart/FunnelPart.vue'
export default {
  name: 'Body',
  components: {
    Breadcrumbs,
    FunnelPart,

  }
}
</script>

<style scoped>
.body {
  padding: 0px 15px;
  min-height: calc(100vh - 160px); 
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>