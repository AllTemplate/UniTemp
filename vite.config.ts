import { defineConfig } from 'vite';
import Uni from '@dcloudio/vite-plugin-uni';
export default async () => {
  const UnoCSS = (await import('unocss/vite')).default;

  return defineConfig({
    plugins: [Uni(), UnoCSS()],
  });
};
