<template>
  <div class="filter">
    <label>Clarity</label>
    <select v-model="selectedClarity" class="filter-select">
      <option value="">All Clarity Grades</option>
      <option 
        v-for="clarity in clarityOptions" 
        :value="clarity"
        :key="clarity"
      >
        {{ clarity }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterClarity',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    diamondType: {
      type: String,
      required: true,
      validator: value => ['natural', 'lab'].includes(value)
    }
  },
  emits: ['update:modelValue'],
  computed: {
    clarityOptions() {
      if (this.diamondType === 'natural') {
        return ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1', 'I2', 'I3']
      }
      return ['FL', 'IF', 'VVS', 'VS', 'SI', 'I']
    },
    selectedClarity: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}
.filter-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}
.filter-select:focus {
  outline: none;
  border-color: #151542;
}
</style>