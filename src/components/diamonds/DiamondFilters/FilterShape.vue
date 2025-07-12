<template>
  <div class="filter">
    <label>Shape</label>
    <select 
      :value="filterStore.filters.shape" 
      @change="filterStore.updateFilter('shape', $event.target.value)"
    >
      <option value="">All Shapes</option>
      <option value="round">Round</option>
      <option value="princess">Princess</option>
      <option value="emerald">Emerald</option>
      <option value="oval">Oval</option>
      <option value="cushion">Cushion</option>
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