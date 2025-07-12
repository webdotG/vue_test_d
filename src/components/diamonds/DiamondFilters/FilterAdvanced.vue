<template>
  <div class="advanced-filter-wrapper">
    <button class="toggle-advanced-btn" @click="toggleAdvanced">
      {{ isOpen ? 'Hide Advanced Filters' : 'Show Advanced Filters' }}
    </button>

    <div v-if="isOpen" class="advanced-filter-content">
      <div class="filter-item" v-for="filter in advancedFilters" :key="filter.key">
        <div class="filter-control">
          <input
            type="checkbox"
            :id="'filter-' + filter.key"
            :checked="filterStore.filters[filter.key]"
            @change="filterStore.updateFilter(filter.key, $event.target.checked)"
          >
          <label :for="'filter-' + filter.key">{{ filter.label }}</label>
          <span class="info-icon" @click.stop="showTooltip(filter.key)">i</span>
        </div>
      </div>
    </div>

    <div v-if="activeTooltip" class="tooltip-modal" @click.self="activeTooltip = null">
      <div class="tooltip-content">
        <button class="close-tooltip" @click="activeTooltip = null">×</button>
        <h3>{{ tooltips[activeTooltip].title }}</h3>
        <p>{{ tooltips[activeTooltip].description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFilterStore } from '@/stores/filterStore';

const filterStore = useFilterStore();
const isOpen = ref(false);
const activeTooltip = ref(null);

const advancedFilters = [
  { key: 'polish', label: 'Excellent Polish' },
  { key: 'symmetry', label: 'Excellent Symmetry' },
  { key: 'fluorescence', label: 'Fluorescence' },
  { key: 'certificate', label: 'With Certificate' },
  { key: 'table', label: 'Ideal Table' },
  { key: 'depth', label: 'Ideal Depth' },
  { key: 'ratio', label: 'Ideal L/W Ratio' }
];

const tooltips = {
  polish: {
    title: 'Polish Quality',
    description: 'Excellent polish means the diamond has no visible polishing defects under 10x magnification.'
  },
  symmetry: {
    title: 'Symmetry',
    description: 'Excellent symmetry means the diamond\'s facets are perfectly aligned and proportioned.'
  },
  fluorescence: {
    title: 'Fluorescence',
    description: 'Some diamonds emit a soft glow under UV light. Strong fluorescence can affect appearance.'
  },
  certificate: {
    title: 'Diamond Certificate',
    description: 'Certified diamonds come with a grading report from a reputable lab like GIA or AGS.'
  },
  table: {
    title: 'Ideal Table',
    description: 'Diamonds with ideal table percentage for optimal light performance.'
  },
  depth: {
    title: 'Ideal Depth',
    description: 'Diamonds with ideal depth percentage for best proportions.'
  },
  ratio: {
    title: 'Length-to-Width Ratio',
    description: 'Ideal ratio for fancy shaped diamonds.'
  }
};

const toggleAdvanced = () => {
  isOpen.value = !isOpen.value;
};

const showTooltip = (key) => {
  activeTooltip.value = key;
};
</script>

<style scoped>
/* мобилка */
.advanced-filter-wrapper {
  grid-column: 1 / -1;
  margin-bottom: 10px;
}

.toggle-advanced-btn {
  background: none;
  border: none;
  color: #151542;
  text-decoration: underline;
  cursor: pointer;
  padding: 5px 0;
  font-size: 14px;
  width: 100%;
  text-align: center;
}

.advanced-filter-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
  background: #f0f2f5;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
}

.filter-control {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-control input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.filter-control label {
  font-size: 14px;
  flex-grow: 1;
  cursor: pointer;
}

.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #e0e0e0;
  color: #555;
  border-radius: 50%;
  font-size: 12px;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;
}

.info-icon:hover {
  background: #151542;
  color: white;
}

.tooltip-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 15px;
}

.tooltip-content {
  background: white;
  padding: 25px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  position: relative;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.close-tooltip {
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
}
.close-tooltip:hover {
  color: #000;
}

.tooltip-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #151542;
}

.tooltip-content p {
  margin: 0;
  line-height: 1.6;
}

/* планшет */
@media (min-width: 640px) {
  .toggle-advanced-btn {
    width: auto;
  }
  .advanced-filter-content {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  .filter-control label {
    font-size: 15px;
  }
}

/* десктоп */
@media (min-width: 1100px) {
  .advanced-filter-content {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
}
</style>