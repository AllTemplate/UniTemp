<template>
  <div class="ttt">
    <up-upload name="1" multiple :maxCount="10"></up-upload>
    <div class="w-30 h-30 bg-pink">使用unocss</div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
export default {
  options: {
    styleIsolation: 'shared',
  },
};
</script>

<style scoped lang="scss">
.ttt {
  ::v-deep .u-upload__button {
    background: linear-gradient(90deg, #a0e744, #02e4d1);
    background-size: 200% 200%;
    animation: gradientAnimation 1s ease infinite;
    width: 100px;
    height: 200px;
  }
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
