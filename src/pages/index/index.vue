<template>
  <!-- <uni-layout name="root"> -->
    <view>
      <view>
        <view class="w-full h-100 bg-pink">使用unocss 自动响应尺寸</view>
        <view class="w-full h-100px bg-blue">使用unocss 固定尺寸</view>
        <view class="bg-#1e90ff hover:(bg-gray font-medium) text-center leading-100 font-(light mono) h-100">测试 unocss hover 分组能力</view>
      </view>
      <wd-button type="info" @click="onChange">更换主题</wd-button>
      <view class="fixed bottom-0 left-0 right-0">
        <wd-tabbar v-model="tabbar">
          <wd-tabbar-item title="首页" icon="home"></wd-tabbar-item>
          <wd-tabbar-item title="分类" icon="cart"></wd-tabbar-item>
          <wd-tabbar-item title="我的" icon="user"></wd-tabbar-item>
        </wd-tabbar>
      </view>
    </view>
  <!-- </uni-layout> -->
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store/theme';
import { ref } from 'vue';
const tabbar = ref(1);

const theme = useThemeStore();

const onChange = () => {
  theme.change();
};
</script>

<script lang="ts">
export default {
  options: {
    styleIsolation: 'shared',
  },
};
</script>

<style scoped lang="scss">
// :deep(.wd-badge) {
//   background: linear-gradient(90deg, #a0e744, #02e4d1);
//   background-size: 200% 200%;
//   animation: gradientAnimation 1s ease infinite;
// }

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
