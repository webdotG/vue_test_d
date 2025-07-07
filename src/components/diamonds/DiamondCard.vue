<template>
  <div class="diamond-card" @click="$emit('click')">
    <div class="image-container">
      <img :src="diamond.image" :alt="diamond.title" class="diamond-image">
    </div>
    
    <div class="details">
      <h3 class="title">{{ diamond.title }}</h3>
      <div class="specs">
        <div class="spec">
          <span class="label">Carat:</span>
          <span class="value">{{ diamond.carat }}</span>
        </div>
        <div class="spec">
          <span class="label">Color:</span>
          <span class="value">{{ diamond.color }}</span>
        </div>
        <div class="spec">
          <span class="label">Price:</span>
          <span class="value price">{{ formatPrice(diamond.price) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiamondCard',
  props: {
    diamond: {
      type: Object,
      required: true,
      validator: (d) => ['id', 'title', 'carat', 'price'].every(k => k in d)
    }
  },
  emits: ['click'],
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price);
    }
  }
};
</script>

<style scoped>
.diamond-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;
}

.diamond-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.image-container {
  height: 200px;
  overflow: hidden;
}

.diamond-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.diamond-card:hover .diamond-image {
  transform: scale(1.05);
}

.details {
  padding: 15px;
}

.title {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
}

.specs {
  display: grid;
  gap: 8px;
}

.spec {
  display: flex;
  justify-content: space-between;
}

.label {
  color: #666;
  font-size: 14px;
}

.value {
  font-weight: 500;
  color: #333;
}

.price {
  color: #151542;
  font-weight: 600;
}
</style>