<template>
  <div class="diamond-list">
    <div v-if="loading" class="loading">Loading diamonds...</div>
    
    <div v-else-if="diamonds.length === 0" class="empty">
      No diamonds found
    </div>
    
    <div v-else class="list">
      <DiamondCard 
        v-for="diamond in diamonds"
        :key="diamond.id"
        :diamond="diamond"
        @click="selectDiamond(diamond)"
      />
    </div>
  </div>
</template>

<script>
import DiamondCard from './DiamondCard.vue';

export default {
  name: 'DiamondList',
  components: {
    DiamondCard
  },
  props: {
    diamonds: {
      type: Array,
      required: true,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select-diamond'],
  methods: {
    selectDiamond(diamond) {
      this.$emit('select-diamond', diamond);
    }
  }
};
</script>

<style scoped>
.diamond-list {
  margin-top: 30px;
}

.loading, .empty {
  text-align: center;
  padding: 20px;
  color: #666;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>