<template>
  <button v-if="type == 'button'" class="btn">
    <slot/>
  </button>

  <router-link :to="to" class="btn" v-else>
    <slot/>
  </router-link>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'button'
  },
  to: {
    type: String,
    required: false
  }
})
</script>

<style lang="scss" scoped>
.btn {
  width: fit-content;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  font-family: var(--satoshi);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
}
</style>