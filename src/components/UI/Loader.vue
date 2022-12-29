<template>
  <div class="spinner"></div>
</template>

<style lang="scss" scoped>
.spinner {
  height: 50px;
  width: 50px;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
  margin: 24px auto;
}
 
@keyframes spinner {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>