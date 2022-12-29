<template>
  <div class="container">
    <Header/>
    <RouterView :key="$route.path"/>
  </div>
</template>

<script setup>
import Header from '@/components/Layout/Header.vue';
</script>

<style lang="scss">
.container {
  max-width: 1440px;
  margin: 0 auto;
}

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
.fade-enter, .fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
}
</style>
