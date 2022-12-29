<template>
  <div class="product">
    <div class="product-media">
      <img :src="product.image" :alt="product.name">
    </div>
    <div class="product-information">
      <h3 class="product-title">{{ product.name }}</h3>
      <span class="product-price">£{{ product.price }}</span>
      <div class="product-block product-description">
        <div class="product-block__title">Product decription</div>
        <div class="product-description-body" v-html="product.description"></div>
      </div>

      <div class="product-block">
        <div class="product-block__title">Dimensions</div>
        <div class="product-params">
          <div class="product-params__param" 
            v-for="(param, i) of product.params" 
            :key="i"
          >
            <span class="product-params__param-title">{{ param.title }}:</span>
            <span class="product-params__param-value">{{ param.value }}</span>
          </div>
        </div>
      </div>

      <div class="product-block product-quantity">
        <div class="product-block__title product-quantity__title">Quantitity</div>
        <div class="product-quantity-block">
          <span class="product-quantity-block__symbol" @click="changeQuantity('minus')">-</span>
          <span class="product-quantity-block__value">{{ quantity }}</span>
          <span class="product-quantity-block__symbol" @click="changeQuantity('plus')">+</span>
        </div>
      </div>

      <Button type="button" @click="cartStore.addToCart(product, quantity)">Add to cart</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useCartStore } from "../stores/cart";
import Button from "./UI/Button.vue";
const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => {}
  }
})

const quantity = ref(1)
const changeQuantity = (type) => {
  if (type == 'minus') {
    quantity.value == 1 ? quantity.value = 1 : quantity.value--
  }

  if (type == 'plus') {
    quantity.value >= 3 ? quantity.value = 3 : quantity.value++
  }
}

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.product {
  padding: 0;
  background: #F9F9F9;

  @media (min-width: 767px) {
    padding: 28px 30px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    column-gap: 20px;
  }

  @media (min-width: 1023px) {
    padding: 50px 80px;
    column-gap: 45px;
  }

  @media (min-width: 1265px) {
    column-gap: 67px;
  }

  &-media {
    width: 100%;

    @media (min-width: 767px) {
      width: 40%;
    }

    @media (min-width: 1023px) {
      width: 50%;
    }
  }

  &-information {
    width: 100%;
    padding: 24px 24px 24px 30px;

    @media (min-width: 767px) {
      width: 60%;
      max-width: 518px;
      padding: 0;
    }

    @media (min-width: 1023px) {
      width: 50%;
    }
  }

  &-title {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: var(--primary);
    margin-bottom: 12px;
  }

  &-price {
    display: block;
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: var(--primary);
    padding-bottom: 16px;
  }

  &-block {
    padding-top: 28px;

    &__title {
      font-family: var(--clash);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: var(--primary);
      margin-bottom: 12px;
    }
  }

  &-description {
    border-top: 1px solid #EBE8F4;

    &-body {
      font-family: var(--satoshi);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: var(--primary);
    }
  }

  &-params {
    border-top: 1px solid #EBE8F4;

    &__param {
      padding-top: 16px;

      &-title {
        font-family: var(--clash);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: var(--primary);
        margin-right: 8px;
      }

      &-value {
        font-family: var(--satoshi);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: var(--primary);
      }
    }
  }

  &-quantity {
    
    &__title {
      margin-bottom: 8px;
    }

    &-block {
      width: 100%;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      background: cadetblue;

      @media (min-width: 767px) {
        max-width: 126px;
      }

      &__symbol {
        font-family: var(--satoshi);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #EBE8F4;
        cursor: pointer;
      }

      &__value {
        font-family: var(--satoshi);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #EBE8F4;
      }
    }
  }

  .btn {
    margin-top: 14px;
    width: 100%;
    color: #FFFFFF;
    background: var(--primary);

    @media (min-width: 767px) {
      width: fit-content;
    }
  }
}
</style>