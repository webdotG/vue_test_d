<template>
  <div class="diamond-container">
    <DiamondTypeToggle v-model="filterStore.diamondType" />
    
    <DiamondFilters 
      :filters="filterStore.filters"
      :diamond-type="filterStore.diamondType"
      @update-filter="filterStore.updateFilter"
      @reset="filterStore.resetFilters"
    />
    
    <div v-if="filterStore.hasFilters" class="active-filters-count">
      Active filters: {{ Object.keys(filterStore.activeFilters).length }}
    </div>
    
    <DiamondList 
      :diamonds="filterStore.diamonds"
      :loading="filterStore.loading"
    />
  </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '../../stores/filterStore'
import DiamondTypeToggle from './DiamondTypeToggle.vue'
import DiamondFilters from './DiamondFilters/DiamondFilters.vue'
import DiamondList from './DiamondList.vue'

const filterStore = useFilterStore()
</script>

<style scoped>
/* мобилка */
.diamond-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0; 
}

.active-filters-count {
  font-size: 14px;
  color: #666;
  margin: 15px 0;
  text-align: left;
}

/* планшет */
@media (min-width: 640px) {
  .diamond-container {
    padding: 20px;
  }
  .active-filters-count {
    margin: 20px 0;
  }
}

/* десктоп */
@media (min-width: 1100px) {
  
}
</style>