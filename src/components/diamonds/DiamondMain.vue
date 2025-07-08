<template>
  <div class="diamond-container">
    <DiamondTypeToggle v-model="filterStore.diamondType" />
    
    <DiamondFilters 
      :filters="filterStore.filters"
      :diamond-type="filterStore.diamondType"
      @update-filter="filterStore.updateFilter"
      @reset="filterStore.resetFilters"
    />
    
    <div class="search-controls">
      <button 
        @click="filterStore.performSearch"
        :disabled="filterStore.loading"
        class="search-button"
      >
        {{ filterStore.loading ? 'Searching...' : 'Search Diamonds' }}
      </button>
      <span v-if="filterStore.hasActiveFilters" class="active-filters-count">
        Active filters: {{ Object.keys(filterStore.allFilters).length - 1 }}
      </span>
    </div>
    
    <DiamondList 
      :diamonds="filterStore.diamonds"
      :loading="filterStore.loading"
    />
  </div>
</template>

<script setup>
import { useFilterStore } from '@/stores/filterStore';
import DiamondTypeToggle from './DiamondTypeToggle.vue';
import DiamondFilters from './DiamondFilters/DiamondFilters.vue';
import DiamondList from './DiamondList.vue';

const filterStore = useFilterStore();

// Первоначальная загрузка данных
filterStore.performSearch();
</script>

<style scoped>
.diamond-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-controls {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
}

.search-button {
  padding: 8px 16px;
  background-color: #151542;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover:not(:disabled) {
  background-color: #2a2a6e;
}

.search-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.active-filters-count {
  font-size: 14px;
  color: #666;
}
</style>