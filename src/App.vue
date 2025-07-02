<template>
  <div id="app">
    <Header />
  
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Body from '@/components/body/Body.vue'

export default {
  name: 'App',
  components: {
    Header,
    Body
  }
}
</script>