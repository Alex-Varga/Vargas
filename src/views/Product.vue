<template>
  <ProductDetail :product="productDetail"/>
  <PopularProducts :title=true />
</template>

<script setup>
import { onMounted, ref, watch } from "@vue/runtime-core";
import {useRoute, useRouter} from "vue-router";
import api from "@/api";

import ProductDetail from "../components/ProductDetail.vue";
import PopularProducts from "../components/PopularProducts.vue";

const route = useRoute();
const router = useRouter();

const productId = ref('')
const productDetail = ref({})


onMounted(async () => {
  productId.value = route.params.id
  productDetail.value = await api.getProduct(productId.value)
})
</script>