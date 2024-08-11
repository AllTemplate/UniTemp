import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({ type: 'light' }),
  actions: {
    change() {
      this.type = this.type === 'light' ? 'dark' : 'light';
    },
  },
});
