import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useCartStore = defineStore('cartStore', () => {

    const cart = ref([])

    const cartItemOnLocal = localStorage.getItem('cart')
    if (cartItemOnLocal) {
      cart.value = JSON.parse(cartItemOnLocal)._value;
    }

    watch(() => cart, (state) => {
      localStorage.setItem('cart', JSON.stringify(state))
    }, {deep: true})

    const addToCart = (product, count) => {
      if (cart.value.length) {
        let isproductExist = false;
        cart.value.map((item) => {
          if (item.id === product.id) {
            isproductExist = true
            item.count >= 3 ? item.count : item.count += count
          }
        })
        if (!isproductExist) {
          cart.value.push({...product, count})
        }
      } else {
        cart.value.push({...product, count})
      }
    }

    const removeItem = (id) => {
      cart.value = cart.value.filter((el => el.id !== id))
    }

    return {
      cart, addToCart, removeItem
    }

  // state: () => ({
  //   cart: []
  // }),

  // actions: {
  //   addToCart(product, count) {
  //     if (this.cart.length) {
  //       let isproductExist = false;
  //       this.cart.map((item) => {
  //         if (item.id === product.id) {
  //           isproductExist = true
  //           item.count >= 3 ? item.count : item.count += count
  //         }
  //       })
  //       if (!isproductExist) {
  //         this.cart.push({...product, count})
  //       }
  //     } else {
  //       this.cart.push({...product, count})
  //     }
  //   },

  //   removeItem(id) {
  //     this.cart = this.cart.filter((el => el.id !== id))
  //   },
  // },

  // getters: {
  //   subTotal() {
  //     let totalCount = 0;
  //     totalCount = this.cart.reduce((acc, el) => {
  //       return acc + el.price * el.count
  //     }, 0)
  //     return totalCount;
  //   }
  // },

  // watch: {
  //   someObject: {
  //     cart(state) {
  //       localStorage.setItem('cart', JSON.stringify(state))

  //       const cartItemOnLocal = localStorage.getItem('cart')
  //       if (cartItemOnLocal) {
  //         this.cart = JSON.parse(cartItemOnLocal)._value;
  //       }
  //     },
  //     deep: true
  //   }
  // }
});