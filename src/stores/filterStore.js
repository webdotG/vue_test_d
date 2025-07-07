import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { fetchDiamonds } from '@/api/diamonds'; 

export const useFilterStore = defineStore('filters', () => {
  // Состояние
  const diamondType = ref('natural');
  const filters = ref({
    color: '',
    clarity: '',
    shape: '',
    priceMin: null,
    priceMax: null,
    advanced: {
      table: '',
      depth: '',
      polish: '',
      symmetry: '',
      fluorescence: ''
    }
  });

  const loading = ref(false);
  const diamonds = ref([]);
  const searchHistory = ref([]);

  // Геттеры
  const allFilters = computed(() => {
    const advancedFilters = Object.fromEntries(
      Object.entries(filters.value.advanced)
        .filter(([_, value]) => value !== '')
    );
    
    return {
      type: diamondType.value,
      ...filters.value,
      ...advancedFilters
    };
  });

  const hasActiveFilters = computed(() => {
    const mainFilters = Object.values(filters.value).some(val => 
      val !== '' && val !== null
    );
    const advFilters = Object.values(filters.value.advanced).some(val => val !== '');
    return mainFilters || advFilters;
  });

  // Действия
  function setDiamondType(type) {
    diamondType.value = type;
  }

  function updateFilter(key, value) {
    if (key in filters.value) {
      filters.value[key] = value;
    } else if (key in filters.value.advanced) {
      filters.value.advanced[key] = value;
    }
  }

  function resetFilters() {
    filters.value = {
      color: '',
      clarity: '',
      shape: '',
      priceMin: null,
      priceMax: null,
      advanced: {
        table: '',
        depth: '',
        polish: '',
        symmetry: '',
        fluorescence: ''
      }
    };
  }

  function addToHistory(searchParams) {
    searchHistory.value.unshift({
      ...searchParams,
      date: new Date().toISOString()
    });
    if (searchHistory.value.length > 5) {
      searchHistory.value.pop();
    }
  }

  async function performSearch() {
    const currentFilters = allFilters.value;
    try {
      loading.value = true;
      const response = await fetchDiamonds(currentFilters);
      diamonds.value = response.data;
      addToHistory(currentFilters);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      loading.value = false;
    }
  }

  return {
    diamondType,
    filters,
    diamonds,
    loading,
    searchHistory,
    allFilters,
    hasActiveFilters,
    setDiamondType,
    updateFilter,
    resetFilters,
    performSearch
  };
});