<template>
  <div class="filter">
    <label>Price Range</label>
    <div class="price-inputs">
      <input 
        type="number" 
        placeholder="Min" 
        v-model.number="localMin"
        @input="updatePrice"
        class="price-input"
      >
      <span class="separator">—</span>
      <input 
        type="number" 
        placeholder="Max" 
        v-model.number="localMax"
        @input="updatePrice"
        class="price-input"
      >
    </div>
    <div class="price-slider">
      <input 
        type="range" 
        :min="minRange" 
        :max="maxRange" 
        v-model.number="localMin"
        @input="updatePrice"
        class="slider"
      >
      <input 
        type="range" 
        :min="minRange" 
        :max="maxRange" 
        v-model.number="localMax"
        @input="updatePrice"
        class="slider"
      >
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'FilterPrice',
  props: {
    modelValue: {
      type: Object,
      required: true,
      default: () => ({ min: '', max: '' })
    },
    diamondType: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const minRange = ref(0)
    const maxRange = ref(100000)
    const localMin = ref(props.modelValue.min || '')
    const localMax = ref(props.modelValue.max || '')

    // Установка диапазона в зависимости от типа алмаза
    if (props.diamondType === 'lab') {
      minRange.value = 500
      maxRange.value = 50000
    } else {
      minRange.value = 1000
      maxRange.value = 100000
    }

    const updatePrice = () => {
      emit('update:modelValue', { 
        min: localMin.value, 
        max: localMax.value 
      })
    }

    watch(() => props.modelValue, (newVal) => {
      if (newVal.min !== localMin.value) localMin.value = newVal.min
      if (newVal.max !== localMax.value) localMax.value = newVal.max
    })

    return {
      minRange,
      maxRange,
      localMin,
      localMax,
      updatePrice
    }
  }
}
</script>

<style scoped>
.price-inputs {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.price-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.separator {
  color: #666;
}
.price-slider {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.slider {
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  background: #ddd;
  border-radius: 2px;
  outline: none;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: #151542;
  border-radius: 50%;
  cursor: pointer;
}
</style>