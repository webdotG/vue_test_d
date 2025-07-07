<template>
  <div class="advanced-filter">
    <h4>Professional Filters</h4>
    
    <div class="filter-grid">
      <div class="filter-item">
        <label>Table %</label>
        <input 
          type="range" 
          min="50" 
          max="80" 
          v-model.number="localAdvanced.table"
        >
        <span>{{ localAdvanced.table }}</span>
      </div>
      
   
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    diamondType: {
      type: String,
      required: true
    }
  },
  
  emits: ['update:modelValue'],
  
  setup(props, { emit }) {
    const localAdvanced = ref({ ...props.modelValue })

    watch(localAdvanced, (newVal) => {
      emit('update:modelValue', newVal)
    }, { deep: true })

    return { localAdvanced }
  }
}
</script>