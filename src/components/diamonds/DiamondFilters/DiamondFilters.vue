<template>
  <div class="filters-wrapper">
    <div class="basic-filters">
    <h2 class="filters-title">
      Filter {{ diamondType === 'natural' ? 'Natural' : 'Lab-Grown' }} Diamonds
    </h2>
      <FilterShape v-model="localFilters.shape" :diamond-type="diamondType"/>
      <FilterColor v-model="localFilters.color" :diamond-type="diamondType"/>
      <FilterClarity v-model="localFilters.clarity" :diamond-type="diamondType"/>
      <FilterPrice 
        v-model:min="localFilters.priceMin" 
        v-model:max="localFilters.priceMax"
        :diamond-type="diamondType"
      />
    </div>

    <FilterReset @reset="$emit('reset')" />

    <button class="toggle-advanced" @click="showAdvanced = !showAdvanced">
      {{ showAdvanced ? 'Hide' : 'Show' }} Advanced Filters
    </button>

    <div v-if="showAdvanced" class="advanced-section">
      <FilterAdvanced v-model="localFilters.advanced" :diamond-type="diamondType"/>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import FilterShape from './FilterShape.vue'
import FilterColor from './FilterColor.vue'
import FilterClarity from './FilterClarity.vue'
import FilterPrice from './FilterPrice.vue'
import FilterAdvanced from './FilterAdvanced.vue'
import FilterReset from './FilterReset.vue'

export default {
  components: {
    FilterShape,
    FilterColor,
    FilterClarity,
    FilterPrice,
    FilterAdvanced,
    FilterReset
  },
  
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    diamondType: {
      type: String,
      required: true,
      validator: value => ['natural', 'lab'].includes(value)
    }
  },
  
  emits: ['update:modelValue', 'reset'],
  
  setup(props, { emit }) {
    const showAdvanced = ref(false)
    const localFilters = ref({ ...props.modelValue })

    watch(localFilters, (newVal) => {
      emit('update:modelValue', newVal)
    }, { deep: true })

    watch(() => props.modelValue, (newVal) => {
      localFilters.value = { ...newVal }
    })

    return {
      showAdvanced,
      localFilters
    }
  }
}
</script>

<style scoped>
.filters-wrapper {
  background: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.basic-filters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.toggle-advanced {
  background: none;
  border: none;
  color: #151542;
  text-decoration: underline;
  cursor: pointer;
  margin: 10px 0;
  padding: 5px;
  font-size: 14px;
}

.advanced-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}
</style>