<template>
  <div class="breadcrumbs">
    <div class="container">
      <ul class="breadcrumbs-list">
        <li v-for="(crumb, index) in crumbs" :key="index" class="breadcrumbs-item">
          <router-link 
            v-if="index < crumbs.length - 1"
            :to="crumb.path" 
            class="breadcrumbs-link"
          >
            {{ crumb.title }}
          </router-link>
          <span v-else class="breadcrumbs-current">
            {{ crumb.title }}
          </span>
          <span v-if="index < crumbs.length - 1" class="breadcrumbs-separator">/</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    crumbs() {
      const crumbs = []
      const matched = this.$route.matched.filter(route => route.meta?.breadcrumb)
      
      matched.forEach((route, index) => {
        const crumb = {
          path: route.path,
          title: route.meta.breadcrumb || route.name
        }
        
        // Для динамических маршрутов (например, /diamonds/:id)
        if (route.meta.dynamicBreadcrumb) {
          const params = this.$route.params
          crumb.title = route.meta.dynamicBreadcrumb(params)
        }
        
        crumbs.push(crumb)
      })
      
      return crumbs
    }
  }
}
</script>

<style scoped>
.breadcrumbs {
  padding: 12px 0;
  background-color: #f8f8f8;
  font-size: 14px;
}

.breadcrumbs-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumbs-item {
  display: flex;
  align-items: center;
}

.breadcrumbs-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumbs-link:hover {
  color: #151542;
}

.breadcrumbs-current {
  color: #151542;
  font-weight: 500;
}

.breadcrumbs-separator {
  margin: 0 8px;
  color: #999;
}
</style>