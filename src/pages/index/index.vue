<template>
  <view>
    <button @click="login">一键登录</button>
    <button @click="test">测试登录</button>
  </view>
</template>

<script lang="ts" setup>
import apiService from '@/api/api.service';

const login = async () => {
  try {
    const data = await uni.login();
    if (data.code) {
      const res = await apiService.login(data.code);
      if (res.success) {
        uni.setStorageSync('token', res.data);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const test = async () => {
  const res = await apiService.test();
  console.log(res);
};
</script>

<script lang="ts">
export default {
  options: {
    styleIsolation: 'shared',
  },
};
</script>
