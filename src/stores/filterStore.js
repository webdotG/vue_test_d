import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { debounce } from 'lodash-es';
import { fetchDiamonds } from '@/api/diamonds';

export const useFilterStore = defineStore('filters', () => {
  // Основные состояния
  const diamondType = ref('natural'); // 'natural' | 'lab'
  const loading = ref(false);
  const diamonds = ref([]);
  const searchHistory = ref([]);

  // Фильтры
  const filters = ref({
    shape: '',
    caratMin: null,
    caratMax: null,
    clarity: '',
    priceMin: null,
    priceMax: null,
    color: '',
    cut: ''
  });

  // Геттеры
  const allFilters = computed(() => {
    const activeFilters = {};
    
    // Основные фильтры
    for (const [key, value] of Object.entries(filters.value)) {
      if (value !== '' && value !== null) {
        activeFilters[key] = value;
      }
    }

    return {
      type: diamondType.value,
      ...activeFilters
    };
  });

  const hasActiveFilters = computed(() => {
    return Object.values(filters.value).some(val => 
      val !== '' && val !== null
    );
  });

  // Действия
  const setDiamondType = (type) => {
    diamondType.value = type;
  };

  const updateFilter = (key, value) => {
    filters.value[key] = value;
  };

  const resetFilters = () => {
    filters.value = {
      shape: '',
      caratMin: null,
      caratMax: null,
      clarity: '',
      priceMin: null,
      priceMax: null,
      color: '',
      cut: ''
    };
  };

  const addToHistory = (searchParams) => {
    searchHistory.value.unshift({
      ...searchParams,
      date: new Date().toISOString()
    });
    if (searchHistory.value.length > 5) {
      searchHistory.value.pop();
    }
  };

  // Поиск с debounce
  const performSearch = debounce(async () => {
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
  }, 300);

  // сброс debounce 
  const cancelSearch = () => {
    performSearch.cancel();
  };

  return {
    // Состояния
    diamondType,
    filters,
    diamonds,
    loading,
    searchHistory,
    
    // Геттеры
    allFilters,
    hasActiveFilters,
    
    // Действия
    setDiamondType,
    updateFilter,
    resetFilters,
    performSearch,
    cancelSearch
  };
});