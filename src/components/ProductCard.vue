<template>
  <div class="product">
    <router-link :to="`/product/${product.id}`" class="product-image">
      <img :src="product.img" :alt="product.title">
    </router-link>
    <router-link :to="`/product/${product.id}`" class="product-name">{{ product.title }}</router-link>
    <span class="product-price">£{{ product.price }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scope>
.product {

  &-image {
    display: block;
    margin-bottom: 24px;
  }

  &-name {
    display: block;
    width: fit-content;
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: var(--primary);
    margin-bottom: 8px;
  }

  &-price {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--primary);
  }
}
</style>