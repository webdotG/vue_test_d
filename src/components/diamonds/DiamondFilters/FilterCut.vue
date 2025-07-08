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