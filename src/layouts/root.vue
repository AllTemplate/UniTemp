<template>
  <wd-config-provider :theme="theme.type">
    <slot />
    <wd-toast />
    <wd-message-box />
    <view>layout 生效了</view>
  </wd-config-provider>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store/theme';
const theme = useThemeStore();

console.log(11231)

</script>
