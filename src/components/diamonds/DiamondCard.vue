<template>
  <div class="diamond-card" @click="$emit('click')">
    <div class="image-container">
      <img :src="diamond.thumb" :alt="diamond.code" class="diamond-image">
    </div>
    
    <div class="details">
      <h3 class="title">{{ diamond.code }}</h3>
      <div class="specs">
        <div class="spec">
          <span class="label">Carat:</span>
          <span class="value">{{ diamond.ct }}</span>/* No horizontal padding, handled by parent .body */
        </div>
        <div class="spec">
          <span class="label">Color:</span>
          <span class="value">{{ diamond.color.name }}</span>
        </div>
        <div class="spec">
          <span class="label">Price:</span>
          <span class="value price">{{ formatPrice(diamond.price.usd) }}</span>
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
      validator: (d) => [
        'id', 
        'code', 
        'ct', 
        'price', 
        'thumb',
        'color'
      ].every(k => k in d)
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
/* мобилка */
.diamond-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;
  display: flex;
  flex-direction: column;
}

.diamond-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.08);
}

.image-container {
  height: 180px;
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
  flex-grow: 1;
}

.title {
  margin: 0 0 12px 0;
  font-size: 1rem;
  color: #333;
}

.specs {
  display: grid;
  gap: 10px;
}

.spec {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  color: #666;
  font-size: 0.875rem;
}

.value {
  font-weight: 500;
  color: #333;
  font-size: 0.9rem;
}

.price {
  color: #151542;
  font-weight: 600;
  font-size: 1rem;
}

/* планшет */
@media (min-width: 640px) {
  .image-container {
    height: 200px;
  }
  .title {
    font-size: 1.1rem;
  }
}

/* десктоп */
@media (min-width: 1100px) {
  .image-container {
    height: 220px;
  }
  .title {
    font-size: 1.15rem;
  }
  .label, .value {
    font-size: 1rem;
  }
}
</style>