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
.diamond-type-toggle {
  background: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.toggle-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.toggle-header h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.current-type {
  font-weight: 600;
  color: #151542;
}

.toggle-buttons {
  display: flex;
  gap: 10px;
}

button {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

button.active {
  background: #151542;
  color: white;
  border-color: #151542;
}
</style>