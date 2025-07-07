<template>
  <button class="reset-btn" @click="$emit('reset')">
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M19 12h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6v2H5v12h14v-6zm-8-3l-4 4h3v6h2v-6h3l-4-4z"/>
    </svg>
    Reset All Filters
  </button>
</template>

<script>
export default {
  emits: ['reset']
}
</script>

<style scoped>
.reset-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.reset-btn:hover {
  background: #f5f5f5;
  border-color: #ccc;
}

.reset-btn svg {
  fill: currentColor;
}
</style>    