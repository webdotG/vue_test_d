<template>
  <div class="filter">
    <label>Carat</label>
    <div class="range-inputs">
      
      <input
        type="number"
        placeholder="Min"
        :value="filterStore.filters.caratMin"
        @input="filterStore.updateFilter('caratMin', $event.target.value)"
      >
      <span>-</span>
      <input
        type="number"
        placeholder="Max"
        :value="filterStore.filters.caratMax"
        @input="filterStore.updateFilter('caratMax', $event.target.value)"
      >
    </div>
  </div>
</template>

<script setup>
import { useFilterStore } from '@/stores/filterStore';
const filterStore = useFilterStore();
</script>

<style scoped>
.range-inputs {
  display: flex;
  align-items: center;
  gap: 5px;
}

input {
  width: 100%;
  padding: 5px;
}
</style>