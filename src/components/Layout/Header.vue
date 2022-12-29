<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-left">
        <div class="header-top-left__search">
          <img src="/svg/header-search.svg" alt="search">
        </div>
      </div>

      <router-link class="header-top-logo" to="/">Avion</router-link>

      <div class="header-top-right">
        <div  class="header-top-right__cart">
          <router-link to="/cart">
            <img src="/svg/header-cart.svg" alt="cart">
            <span class="cart-count" v-if="cartStore.cart.length">
              ({{ cartStore.cart.length }})
            </span>
          </router-link>
        </div>
        <div  class="header-top-right__profile">
          <router-link to="/user">
            <img src="/svg/header-user.svg" alt="user">
          </router-link>
        </div>

        <div class="header-top-right__search">
          <img src="/svg/header-search.svg" alt="search">
        </div>

        <div class="header-top-right__burger" :class="{open: isOpenedMobileMenu}" @click="isOpenedMobileMenu = !isOpenedMobileMenu">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="header-menu">
      <router-link 
        v-for="(item, i) of menu" 
        :key="i"
        :to="item.path"
        class="header-menu-link"
      >
      {{ item.name }}
      </router-link>
    </div>

    <div class="header-menu-mobile" :class="{active: isOpenedMobileMenu}">
      <router-link 
        v-for="(item, i) of menu" 
        :key="i"
        :to="item.path"
        class="header-menu-mobile-link"
      >
      {{ item.name }}
      </router-link>
    </div>

  </header>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { watch } from "@vue/runtime-core"
import { useCartStore } from "@/stores/cart";
import { useRouter } from "vue-router";

const cartStore = useCartStore()

const menu = [
  {
    name: 'Plant pots',
    path: '/plant'
  },
  {
    name: 'Ceramics',
    path: '/ceramics'
  },
  {
    name: 'Tables',
    path: '/tables'
  },
  {
    name: 'Chairs',
    path: '/chairs'
  },
  {
    name: 'Crockery',
    path: '/crockery'
  },
  {
    name: 'Tableware',
    path: '/tableware'
  },
  {
    name: 'Cutlery',
    path: '/cutlery'
  }
]

const isOpenedMobileMenu = ref(false)
const router = useRouter();

watch(isOpenedMobileMenu, (newVal) => {
  if (newVal) document.documentElement.style.overflow = "hidden"
  else document.documentElement.style.overflow = "auto"
})

router.beforeEach(() => {
  isOpenedMobileMenu.value = false
})
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  padding: 0 24px;
  width: 100%;
  position: sticky;
  top: 0;

  @media (min-width: 767px) {
    padding: 0 28px;
  }

  &-top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @media (min-width: 767px) {
      grid-template-columns: repeat(3, 1fr);
    }

    &-left {
      display: none;
      align-items: center;
      justify-content: flex-start;

      @media (min-width: 767px) {
        display: flex;
      }

      &__search {
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
    }

    &-logo {
      position: relative;
      width: fit-content;
      font-family: var(--clash);
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      color: #22202E;
      transition: all .3s ease;
      display: flex;
      justify-content: center;

      @media (min-width: 767px) {
        margin: 0 auto;
      }

      &:hover::after {
        width: 100%;
      }

      &::after {
        transition: all .3s linear;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -1px;
        content: '';
        width: 0;
        height: 2px;
        background: #22202E;
      }
    }

    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &__cart {
        position: relative;
        width: 16px;
        height: 16px;
        margin-right: 16px;
        display: none;

        @media (min-width: 767px) {
          display: flex;
        }

        .cart-count {
          position: absolute;
          left: -20px;
        }
      }

      &__profile {
        width: 16px;
        height: 16px;

        display: none;

        @media (min-width: 767px) {
          display: flex;
        }
      }

      &__search {
        width: 16px;
        height: 16px;
        margin-right: 20px;
        cursor: pointer;

        @media (min-width: 767px) {
          display: none;
        }
      }

      &__burger {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 16px;
        height: 16px;
        padding: 3px 0;
        cursor: pointer;

        span {
          width: 12px;
          height: 1px;
          background: #2A254B;
          transition: all .3s linear;
        }

        &.open {

          span {
            &:first-child, &:last-child {
              display: none;
            }

            &:nth-child(2),  &:nth-child(3) {
              position: absolute;
              top: 50%;
            }

            &:nth-child(2) {
              transform: rotate(45deg);
            }

            &:nth-child(3) {
              transform: rotate(-45deg);
            }
          }
        }

        @media (min-width: 767px) {
          display: none;
        }
      }
    }
  }

  &-menu {
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    display: none;

    @media (min-width: 767px) {
      display: flex;
    }

    &-link {
      position: relative;
      font-family: var(--satoshi);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #726E8D;
      margin: 0 16px;

      &:hover::after {
        width: 100%;
      }

      &::after {
        transition: all .3s linear;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -1px;
        content: '';
        width: 0;
        height: 1px;
        background: #726E8D;
      }

      @media (min-width: 1023px) {
        font-size: 16px;
        margin: 0 22px;
      }
    }
  }

  &-menu-mobile {
    width: 100%;
    height: calc(100vh - 71px);
    position: fixed;
    top: 71px;
    bottom: 0;
    right: -100%;
    padding: 40px 24px;
    background: #fff;
    visibility: hidden;
    transition: all .3s linear;

    &.active {
      right: 0;
      visibility: visible
    }

    @media (min-width: 767px) {
      display: none;
    }

    &-link {
      display: block;
      font-family: var(--satoshi);
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #2A254B;
      margin-bottom: 20px;
    }
  }
}
</style>