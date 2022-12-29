<template>
  <Hero/>
  <PopularProducts :title=false />
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import PopularProducts from '../components/PopularProducts.vue';
</script>
