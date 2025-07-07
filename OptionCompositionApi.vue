<script setup>
import { ref } from 'vue';

let count = ref(0)

function incrementComposition() {
    count.value++
} 
</script>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        incrementOption() {
            this.count++
        }
    }
}
</script>
<template>
<p>incrementOption {{ count }}</p>
<!-- <button @click="count++">+</button> -->
<button @click="incrementOption">+</button>

<p>incrementComposition {{ count }}</p>
<button @click="incrementComposition">+</button>
</template> 