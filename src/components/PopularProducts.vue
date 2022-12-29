<template>
  <Products :loading="loading" :products="products" :title=title />
</template>

<script setup>
import Products from '@/components/Products4Column.vue';
import { onMounted } from '@vue/runtime-core';
import { ref } from '@vue/reactivity';
import api from "@/api";

const props = defineProps({
  title: {
    type: Boolean,
    required: false
  }
})

const products = ref([])

const loading = ref(true)

onMounted(async () => {
  products.value = await api.getPopularProducts();
  loading.value = false
})
</script>