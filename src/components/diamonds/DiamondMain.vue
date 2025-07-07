<template>
  <div class="diamond-container">
    <DiamondTypeToggle v-model="diamondType" />
    
    <DiamondFilters 
      v-model="filters"
      :diamond-type="diamondType"
      @reset="resetFilters"
    />
    
    <DiamondList 
      :diamonds="filteredDiamonds"
      :loading="loading"
    />
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import DiamondTypeToggle from './DiamondTypeToggle.vue';
import DiamondFilters from './DiamondFilters/DiamondFilters.vue';
import DiamondList from './DiamondList.vue';

export default {
  name: 'DiamondMain',
  components: {
    DiamondTypeToggle,
    DiamondFilters,
    DiamondList
  },
  
  setup() {
    const diamondType = ref('natural');
    const filters = ref(createDefaultFilters());
    const loading = ref(false);
    const filteredDiamonds = ref([]);

    function createDefaultFilters() {
      return {
        color: '',
        clarity: '',
        shape: '',
        priceMin: '',
        priceMax: '',
        advanced: {}
      };
    }

    const resetFilters = () => {
      filters.value = createDefaultFilters();
    };

    watch([filters, diamondType], async () => {
      loading.value = true;
      try {
        //  API 
        // filteredDiamonds.value = await api.fetchDiamonds(filters.value);
      } finally {
        loading.value = false;
      }
    }, { deep: true });

    return {
      diamondType,
      filters,
      loading,
      filteredDiamonds,
      resetFilters
    };
  }
};
</script>

<style scoped>
.diamond-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>