import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { fetchDiamonds } from '../api/diamond'
import type { Diamond } from '../types/diamond'

type DiamondType = 'natural' | 'lab'

interface Filters {
  shape: string
  caratMin: number | null
  caratMax: number | null
  clarity: string
  priceMin: number | null
  priceMax: number | null
  color: string
  cut: string
}

export const useFilterStore = defineStore('filters', () => {
  // Состояния
  const diamondType = ref<DiamondType>('natural')
  const loading = ref(false)
  const diamonds = ref<Diamond[]>([])
  let searchTimeout: number | null = null
  
  // Фильтры
  const filters = ref<Filters>({
    shape: '',
    caratMin: null,
    caratMax: null,
    clarity: '',
    priceMin: null,
    priceMax: null,
    color: '',
    cut: ''
  })

  // Геттеры
  const activeFilters = computed(() => {
    const result: Record<string, any> = {}
    
    for (const [key, value] of Object.entries(filters.value)) {
      if (value !== '' && value !== null) {
        result[key] = value
      }
    }
    
    return result
  })

  const hasFilters = computed(() => {
    return Object.values(filters.value).some(val => val !== '' && val !== null)
  })

  // Собственная реализация debounce
  const debounceSearch = (fn: () => void, delay: number ) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }
    searchTimeout = setTimeout(fn, delay)
  }

  // Функция поиска
  const performSearch = async () => {
    if (loading.value) return
    
    try {
      loading.value = true
      const searchFilters = {
        ...activeFilters.value,
        type: diamondType.value
      }
      
      const response = await fetchDiamonds(searchFilters)
      diamonds.value = response.data
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      loading.value = false
    }
  }

  // Автоматический поиск при изменении фильтров или типа алмаза
  watch([filters, diamondType], () => {
    debounceSearch(performSearch, 250) 
  }, { deep: true })

  // Действия
  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    filters.value[key] = value
  }

  const setDiamondType = (type: DiamondType) => {
    diamondType.value = type
  }

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
    }
  }

  // Первоначальная загрузка данных
  performSearch()

  return {
    // Состояния
    diamondType,
    filters,
    diamonds,
    loading,
    
    // Геттеры
    activeFilters,
    hasFilters,
    
    // Действия
    updateFilter,
    setDiamondType,
    resetFilters,
    performSearch // На случай ручного вызова
  }
})