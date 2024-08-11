import { defineConfig } from 'vite';
import Uni from '@dcloudio/vite-plugin-uni';
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts';

export default async () => {
  const UnoCSS = (await import('unocss/vite')).default;

  return defineConfig({
    plugins: [UniLayouts(), UnoCSS(), Uni()],
  });
};
