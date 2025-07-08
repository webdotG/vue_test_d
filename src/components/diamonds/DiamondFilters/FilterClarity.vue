<template>
  <div class="filter">
    <label>Clarity</label>
    <select
      :value="filterStore.filters.clarity"
      @change="filterStore.updateFilter('clarity', $event.target.value)"
    >
      <option value="">All Clarity</option>
      <option value="FL">FL</option>
      <option value="IF">IF</option>
      <option value="VVS1">VVS1</option>
      <option value="VVS2">VVS2</option>
      <option value="VS1">VS1</option>
      <option value="VS2">VS2</option>
    </select>
  </div>
</template>

<script setup>
import { useFilterStore } from '@/stores/filterStore';
const filterStore = useFilterStore();
</script>

<style scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}
.filter-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}
.filter-select:focus {
  outline: none;
  border-color: #151542;
}
</style>