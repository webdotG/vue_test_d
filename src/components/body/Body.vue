<template>
  <main class="body">
    <Breadcrumbs />
    

    <div class="container">
        <!-- контент текущего маршрута -->
      <router-view></router-view> 
    </div>
  </main>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.vue'

export default {
  name: 'Body',
  components: {
    Breadcrumbs
  }
}
</script>

<style scoped>
.body {
  padding: 20px 0;
  min-height: calc(100vh - 160px); 
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>