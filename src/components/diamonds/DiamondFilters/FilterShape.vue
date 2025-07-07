<template>
  <div class="filter">
    <label>Shape</label>
    <div class="shape-grid">
      <button
        v-for="shape in shapeOptions"
        :key="shape.value"
        @click="selectShape(shape.value)"
        :class="{ active: selectedShape === shape.value }"
        class="shape-button"
      >
        <span class="shape-icon">{{ shape.icon }}</span>
        <span class="shape-label">{{ shape.label }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterShape',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    diamondType: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      shapeOptions: [
        { value: 'round', label: 'Round', icon: '○' },
        { value: 'princess', label: 'Princess', icon: '□' },
        { value: 'cushion', label: 'Cushion', icon: '▣' },
        { value: 'emerald', label: 'Emerald', icon: '▭' },
        { value: 'oval', label: 'Oval', icon: '⬭' },
        { value: 'pear', label: 'Pear', icon: '🍐' },
        { value: 'marquise', label: 'Marquise', icon: '⌐' },
        { value: 'asscher', label: 'Asscher', icon: '⬥' },
        { value: 'radiant', label: 'Radiant', icon: '▰' },
        { value: 'heart', label: 'Heart', icon: '❤' }
      ]
    }
  },
  computed: {
    selectedShape: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    selectShape(shape) {
      this.selectedShape = this.selectedShape === shape ? '' : shape
    }
  }
}
</script>

<style scoped>
.shape-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
.shape-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}
.shape-button:hover {
  border-color: #151542;
}
.shape-button.active {
  background: #151542;
  color: white;
  border-color: #151542;
}
.shape-icon {
  font-size: 20px;
  margin-bottom: 4px;
}
.shape-label {
  font-size: 12px;
}
</style>