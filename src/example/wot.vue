<template>
  <wd-button type="info" @click="onChange">更换主题</wd-button>
  <view class="fixed bottom-0 left-0 right-0">
    <wd-tabbar v-model="tabbar">
      <wd-tabbar-item title="首页" icon="home"></wd-tabbar-item>
      <wd-tabbar-item title="分类" icon="cart"></wd-tabbar-item>
      <wd-tabbar-item title="我的" icon="user"></wd-tabbar-item>
    </wd-tabbar>
  </view>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store';
import { ref } from 'vue';

const tabbar = ref(1);

const theme = useThemeStore();

const onChange = () => {
  theme.change();
};
</script>

<style scoped lang="scss">
:deep(.wd-badge) {
  background: linear-gradient(90deg, #a0e744, #02e4d1);
  background-size: 200% 200%;
  animation: gradientAnimation 1s ease infinite;
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
