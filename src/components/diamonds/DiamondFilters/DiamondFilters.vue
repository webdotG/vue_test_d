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
/* мобилка */
.filters-container {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.filters-title {
  margin: 0 0 15px 0;
  color: #151542;
  font-size: 1.1rem;
  text-align: center;
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.filters-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.reset-btn {
  padding: 10px 16px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

/* планшет */
@media (min-width: 640px) {
  .filters-container {
    padding: 20px;
  }
  .filters-title {
    font-size: 1.2rem;
    text-align: left;
  }
  .filters-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  .filters-actions {
    justify-content: flex-end;
  }
  .reset-btn {
    width: auto;
  }
}

/* десктоп */
@media (min-width: 1100px) {
  .filters-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>