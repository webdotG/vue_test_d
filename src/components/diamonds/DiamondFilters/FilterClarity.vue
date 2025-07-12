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
/* мобилка */
.filter {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

select {
  width: 100%;
  padding: 10px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
}

select:hover {
  border-color: #151542;
}

/* планшет */
@media (min-width: 640px) {
  label {
    font-size: 15px;
  }
  select {
    font-size: 15px;
  }
}

/* десктоп */
@media (min-width: 1100px) {
  label {
    font-size: 16px;
  }
  select {
    font-size: 16px;
  }
}
</style>