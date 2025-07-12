<script setup>
import { useFilterStore } from '@/stores/filterStore';

const filterStore = useFilterStore();

const toggleType = (type) => {
  filterStore.diamondType = type; 
};
</script>

<template>
  <div class="diamond-type-toggle">

    <div class="toggle-buttons">
      <button
        :class="{ active: filterStore.diamondType === 'natural' }"
        @click="toggleType('natural')"
      >
        Natural
      </button>
      <button
        :class="{ active: filterStore.diamondType === 'lab' }"
        @click="toggleType('lab')"
      >
        Lab-Grown
      </button>
    </div>
  </div>
</template>

<style scoped>
/* мобилка */
.diamond-type-toggle {
  background: #f8f8f8;
  padding: 10px; 
  border-radius: 8px;
  margin-bottom: 20px;
}

.toggle-buttons {
  display: flex;
  gap: 10px;
}

button {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  font-size: 14px;
}

button.active {
  background: #151542;
  color: white;
  border-color: #151542;
}

/* планшет */
@media (min-width: 640px) {
  .diamond-type-toggle {
    padding: 15px;
  }
  button {
    font-size: 15px;
  }
}

/* десктоп */
@media (min-width: 1100px) {
  .diamond-type-toggle {
    display: flex;
    justify-content: center;
  }
  .toggle-buttons {
    display: inline-flex; 
    width: auto;
  }
  button {
    flex: 0 1 auto; 
    padding: 10px 20px;
    font-size: 16px;
  }
}
</style>