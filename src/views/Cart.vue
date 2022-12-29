<template>
  <div class="cart">
    <div class="cart-container">
      <h2 class="cart-title">Your shopping cart</h2>
      <div class="cart-items" v-if="cartStore.cart.length">
        <div class="cart-items__category-name">
          <div class="cart-items__category-name-item category-product">Product</div>
          <div class="cart-items__category-name-item category-quantity">Quantity</div>
          <div class="cart-items__category-name-item category-total">Total</div>
        </div>
        <div class="cart-items-item" v-for="item of cartStore.cart" :key="item.id">
          <div class="cart-items-item-main">
            <div class="cart-items-item__media">
              <img :src="item.image" :alt="item.name">
            </div>

            <div class="cart-items-item__information information-block">
              <h3 class="information-block-title">{{ item.name }}</h3>
              <!-- <div class="information-block-description" v-html="item.description"></div> -->
              <span class="information-block-price">£{{ item.price }}</span>

              <div class="product-quantity-block mobile-quantity">
                <span class="product-quantity-block__symbol" @click="changeQuantity('minus', item.id)">-</span>
                <span class="product-quantity-block__value">{{ item.count >= 3 ? 3 : item.count }}</span>
                <span class="product-quantity-block__symbol" @click="changeQuantity('plus', item.id)">+</span>
              </div>
            </div>
          
          </div>

          <div class="product-quantity-block desktop-quantity">
            <span class="product-quantity-block__symbol" @click="changeQuantity('minus', item.id)">-</span>
            <span class="product-quantity-block__value">{{ item.count >= 3 ? 3 : item.count }}</span>
            <span class="product-quantity-block__symbol" @click="changeQuantity('plus', item.id)">+</span>
          </div>

          <div class="cart-items-item__total">
            <span class="cart-items-item__total-price">£{{ item.count * item.price }}</span>
          </div>
        </div>

        <div class="cart-subtotal-block">
          <span class="cart-subtotal">Subtotal</span>
          <span class="cart-subtotal-price">£{{ subTotal }}</span>
          <p class="cart-tax">Taxes and shipping are calculated at checkout</p>
        </div>

        <Button type = 'button'>
          Go to checkout
        </Button>
      </div>
      <div class="cart-empty" v-else>
        <p>Cart is empty...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { computed, onMounted } from "@vue/runtime-core";
import Button from "../components/UI/Button.vue";

const cartStore = useCartStore()

const changeQuantity = (type, id) => {
  cartStore.cart.map((el) => {
    if (el.id === id) {
      if (type == 'minus') {
        if (el.count == 1) {
          cartStore.removeItem(id);
        } else {
          el.count--
        }
      }

      if (type == 'plus') {
        el.count >= 3 ? el.count = 3 : el.count++
      }
    }
  })
}

const subTotal = computed(() => {
  let totalCount = 0;
  totalCount = cartStore.cart.reduce((acc, el) => {
    return acc + el.price * el.count
  }, 0)
  return parseInt(totalCount * 100) / 100;
})
</script>

<style lang="scss" scoped>
.cart {
  padding: 36px 0 55px;
  background: #F9F9F9;
  &-container {
    max-width: 1064px;
    margin: 0 auto;
    padding: 0 24px;
  }

  &-title {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: var(--pimary);
    margin-bottom: 40px;

    @media (min-width: 1023px) {
      font-size: 36px;
    }
  }

  &-items {
    padding-bottom: 34px;

    &__category-name {
      display: none;

      @media (min-width: 767px) {
        display: flex;
      }

      align-items: center;
      justify-content: space-between;
      padding-bottom: 12px;
      margin-bottom: 20px;
      border-bottom: 1px solid #EBE8F4;

      &-item {
        font-family: var(--clash);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: var(--primary);
      }

      .category-product {
        width: 55%;
      }

      .category-quantity {
        width: 122px;
      }

      .category-total {
        text-align: right;
        width: 20%;
      }
    }

    &-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      &-main {
        display: flex;
        align-items: center;
        column-gap: 22px;

        @media (min-width: 767px) {
          width: 55%;
        }
      }

      &__media {
        width: 40%;
        height: fit-content;

        @media (min-width: 767px) {
          max-width: 109px;
          height: 134px;
        }
      }

      &__information {
        width: 60%;

        @media (min-width: 767px) {
          width: 100%;
        }
      }

      &__total {
        display: none;

        @media (min-width: 767px) {
          display: flex;
          justify-content: flex-end;
          width: 20%;
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
    }
  }

  .information-block {

    &-title {
      font-family: var(--clash);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: var(--primary);
      margin-bottom: 8px;
    }

    &-description {
      font-family: var(--satoshi);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: var(--primary);
      margin-bottom: 8px;
    }

    &-price {
      display: block;
      font-family: var(--satoshi);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: var(--primary);
      padding-bottom: 16px;
    }
  }

  .product-quantity-block {
    width: 122px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    background: cadetblue;

    &.mobile-quantity {

      @media (min-width: 767px) {
        display: none;
      }
    }

    &.desktop-quantity {
      display: none;

      @media (min-width: 767px) {
        display: flex;
      }
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

  .cart-subtotal-block {
    padding-top: 16px;
    border-top: 1px solid #EBE8F4;
    text-align: right;

    @media (min-width: 767px) {
      padding-top: 28px;
    }
    .cart-subtotal {
      font-family: var(--clash);
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 140%;
      text-align: right;
      color: #4E4D93;
      margin-bottom: 7px;
      margin-right: 16px;

      @media (min-width: 767px) {
        margin-bottom: 12px;
      }

      &-price {
        font-family: var(--clash);
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        text-align: right;
        color: var(--primary);
      }
    }

    .cart-tax {
      font-family: var(--satoshi);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      text-align: right;
      color: #4E4D93;
    }
  }

  .btn {
    margin-top: 36px;
    width: 100%;
    color: #FFFFFF;
    background: #2A254B;

    @media (min-width: 767px) {
      width: fit-content;
      margin-top: 16px;
      margin-left: auto;
    }
  }
}
</style>