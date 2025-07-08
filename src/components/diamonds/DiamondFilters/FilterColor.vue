<template>
  <div class="filter">
    <label>Color</label>
    <select
      :value="filterStore.filters.color"
      @change="filterStore.updateFilter('color', $event.target.value)"
    >
      <option value="">All Colors</option>
      <option value="D">D</option>
      <option value="E">E</option>
      <option value="F">F</option>
      <option value="G">G</option>
      <option value="H">H</option>
    </select>
  </div>
</template>

<script setup>
import { useFilterStore } from '@/stores/filterStore';
const filterStore = useFilterStore();
</script>