<template>
  <div class="filter">
    <label>Price ($)</label>
    <div class="range-inputs">
      <input
        type="number"
        placeholder="Min"
        :value="filterStore.filters.priceMin"
        @input="filterStore.updateFilter('priceMin', $event.target.value)"
      >
      <span>-</span>
      <input
        type="number"
        placeholder="Max"
        :value="filterStore.filters.priceMax"
        @input="filterStore.updateFilter('priceMax', $event.target.value)"
      >
    </div>
  </div>
</template>

<script setup>
import { useFilterStore } from '@/stores/filterStore';
const filterStore = useFilterStore();
</script>

<style scoped>
.price-inputs {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.price-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.separator {
  color: #666;
}
.price-slider {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.slider {
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  background: #ddd;
  border-radius: 2px;
  outline: none;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: #151542;
  border-radius: 50%;
  cursor: pointer;
}
</style>