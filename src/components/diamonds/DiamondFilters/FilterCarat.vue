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

.range-inputs {
  display: flex;
  align-items: center;
  gap: 8px;
}

input[type="number"] {
  width: 100%;
  padding: 10px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:hover {
  border-color: #151542;
}

.range-inputs span {
  color: #888;
}

/* планшет */
@media (min-width: 640px) {
  label {
    font-size: 15px;
  }
  input[type="number"] {
    font-size: 15px;
  }
}

/* десктоп */
@media (min-width: 1100px) {
  label {
    font-size: 16px;
  }
  input[type="number"] {
    font-size: 16px;
  }
}
</style>