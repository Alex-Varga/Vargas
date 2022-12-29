<template>
  <div class="products">
    <h3 class="products-title" v-if="title">You might also love these</h3>
    <Loader v-if="loading"/>
    <div class="products-container" v-else>
      <Product
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </div>
    <Button type="link" to="/">
      View collection
    </Button>
  </div>
</template>


<script setup>
import Product from './ProductCard.vue';
import Button from './UI/Button.vue';
import Loader from '@/components/UI/Loader.vue';

const props = defineProps({
  products: {
    type: Object,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  },
  title: {
    type: Boolean,
    required: false
  }
})
</script>

<style lang="scss" scope>
.products {
  padding: 24px 24px 28px;
  background: cadetblue;

  @media (min-width: 767px) {
    padding: 28px 28px 40px;
  }

  @media (min-width: 1023px) {
    padding: 64px 45px 48px;
  }

  @media (min-width: 1365px) {
    padding: 64px 80px 48px;
  }

  &-title {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 140%;
    color: var(--primary);
    margin-bottom: 25px;
  }

  &-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 20px;
    margin-bottom: 40px;

    @media (min-width: 767px) {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
      margin-bottom: 48px;
    }
  }

  .btn {
    width: 100%;
    margin: 0 auto;
    background: #F9F9F9;
    color: #2A254B;

    @media (min-width: 767px) {
      width: fit-content;
    }
  }
}
</style>