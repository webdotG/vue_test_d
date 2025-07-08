<template>
  <div class="filters-container">
    <h2 class="filters-title">
      Filter {{ filterStore.diamondType === 'natural' ? 'Natural' : 'Lab-Grown' }} Diamonds
    </h2>

    <div class="filters-grid">
      <FilterShape />
      <FilterCarat />
      <FilterClarity />
      <FilterPrice />
      <FilterColor />
      <FilterCut />
      <FilterAdvanced />
    </div>

    <div class="filters-actions">
      <button class="reset-btn" @click="filterStore.resetFilters">
        Reset All Filters
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFilterStore } from '@/stores/filterStore';
import FilterShape from './FilterShape.vue';
import FilterCarat from './FilterCarat.vue';
import FilterClarity from './FilterClarity.vue';
import FilterPrice from './FilterPrice.vue';
import FilterColor from './FilterColor.vue';
import FilterCut from './FilterCut.vue';
import FilterAdvanced from './FilterAdvanced.vue'
const filterStore = useFilterStore();
</script>

<style scoped>
.filters-container {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.filters-title {
  margin: 0 0 20px 0;
  color: #151542;
  font-size: 1.2rem;
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.filters-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.reset-btn {
  padding: 8px 16px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.search-btn {
  padding: 8px 16px;
  background: #151542;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-btn:disabled {
  background: #cccccc;
  cursor: not-allowed;
}
</style>