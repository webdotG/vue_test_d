<template>
  <div class="filter">
    <label>Cut</label>
    <select
      :value="filterStore.filters.cut"
      @change="filterStore.updateFilter('cut', $event.target.value)"
    >
      <option value="">All Cuts</option>
      <option value="Excellent">Excellent</option>
      <option value="Very Good">Very Good</option>
      <option value="Good">Good</option>
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