import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
const pinia = createPinia();
import 'uno.css';
import './uni.scss';
import './style/wot.scss';

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  return {
    app,
  };
}
