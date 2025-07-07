<script setup>
import { useFilterStore } from '@/stores/filterStore';

const filterStore = useFilterStore();

const updateColor = (event) => {
  filterStore.updateFilter('color', event.target.value);
};
</script>

<template>
  <div class="filter">
    <label>Color</label>
    <select 
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="">All Colors</option>
      <option 
        v-for="color in colorOptions" 
        :value="color"
        :key="color"
      >
        {{ color }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true
    },
    diamondType: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  computed: {
    colorOptions() {
      return this.diamondType === 'natural' 
        ? ['D', 'E', 'F', 'G', 'H', 'I'] 
        : ['Colorless', 'Near Colorless'];
    }
  }
}
</script>