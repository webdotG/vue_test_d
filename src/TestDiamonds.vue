<!-- <template>
  <div>
    <h1>Diamonds Catalog</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="diamonds.length === 0">No diamonds found</div>
    <div v-else>
      <div v-for="diamond in diamonds" :key="diamond.id" class="diamond-card">
        <h3>{{ diamond.code || 'No code' }}</h3>
        <p>Carat: {{ diamond.ct || 'N/A' }}</p>
        <p>Color: {{ diamond.color?.name || 'N/A' }}</p>
        <p>Price: ${{ diamond.clientPrice?.usd?.toLocaleString() || 'N/A' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchDiamonds } from '@/test';

const diamonds = ref([]);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  error.value = null;
  
  try {
    diamonds.value = await fetchDiamonds({
      color: ['H', 'I'],
      purity: ['VVS1', 'VS1'],
      ct_min: 0.5,
      ct_max: 2.0
    });
  } catch (err) {
    error.value = err.message || 'Failed to load diamonds';
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>

<style>
.diamond-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
}
.error {
  color: red;
}
</style> -->