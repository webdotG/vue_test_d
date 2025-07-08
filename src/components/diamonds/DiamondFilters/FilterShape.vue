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
.shape-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
.shape-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}
.shape-button:hover {
  border-color: #151542;
}
.shape-button.active {
  background: #151542;
  color: white;
  border-color: #151542;
}
.shape-icon {
  font-size: 20px;
  margin-bottom: 4px;
}
.shape-label {
  font-size: 12px;
}
</style>